/*

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)



*/

//localStorage interaction function
//get item


var getItem = function(key) {
  return window.localStorage.getItem(key);
}

//create
var createItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//update
var updateItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//delete
var deleteItem = function(key) {
  return window.localStorage.removeItem(key);
}

//clear everything
var clearEverything = function() {
  return window.localStorage.clear();
}

var keyExists = function(key) {
  var currentValue = getItem(key);
  return currentValue !== null;
}

var addText = function(object) {
  refreshDiv();
  for (let key in object) {
    if (typeof object[key] !== 'function' && key !== 'length') {
    $(".text-container").append(`<div class="food-name"> ${key}<span class="food-quantity"> ${object[key]}</span> <button class="eat-button"id="${key}"type="button">Eat</button> <button class="buy-button"id="${key}"type="button">Buy</button></div>`)
    console.log(object)
  }
  }
}

let refreshDiv = function() {
 
  return $('.text-container').html('')
 }

let eat = function(key, value) {
  
  return window.localStorage.setItem(key, value- 1)

}

let buy = function(key, value) {
  return window.localStorage.setItem(key, +value+ 1)
}
///////////////////////////////////////////
//event handlers for the buttons and ... possibly the inputboxes
  //preventdefault on button clicks
$(document).ready(function() {
  $('#createButton').click(function(event) {
    event.preventDefault();

    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      alert('You already have an item named this!')
      //add something here to prevent value from changing
    } 
    if (currentKey === undefined|| currentKey === '') {
      alert('Remember to specify an item!')
    }
    else {
      createItem(currentKey, currentValue);
      addText(localStorage);
      }
      
    })
   $('body').on('click', '.eat-button', function() {
    //console.log(this.id);
    if (localStorage[this.id] > 0) {
    eat(this.id, localStorage[this.id]);
    addText(localStorage);
  }
    // else if (localStorage[this.id] === 0){
    //   console.log('it worked')
    //   alert(`Looks like you are all out of ${this.id}!`)
    // }
    });
   $('body').on('click', '.buy-button', function() {
    //console.log(this.id);
    buy(this.id, localStorage[this.id]);
    addText(localStorage);
   })
  });

  $('#updateButton').click(function(event) {
    event.preventDefault();

    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      updateItem(currentKey, currentValue);
      addText(localStorage);
    } else {
      alert('Sorry! That item is not in your pantry yet!')
    }
  });
  $('#deleteButton').click(function(event) {
    event.preventDefault();
    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      deleteItem(currentKey, currentValue);
      addText(localStorage);
    }
  });
  $('#clearAll').click(function(event) {
    clearEverything();
    $('.text-container').text('')
  });
 


