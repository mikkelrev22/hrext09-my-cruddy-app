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
    $(".text-container").append(`<div class="food-name"> ${key}<span class="food-quantity"> ${object[key]}</span> <button class="eat-button"type="button">Eat</button> <button class="buy-button"type="button">Buy</button></div>`)
    console.log(object)
  }
  }
}

let refreshDiv = function() {
 
  return $('.text-container').html('')
 }

let eat = function(key, value) {
  return window.localStorage.setItem(key, value -1)
}

///////////////////////////////////////////
//event handlers for the buttons and ... possibly the inputboxes
  //preventdefault on button clicks
$(document).ready(function() {
  $('#createButton').click(function(event) {
    event.preventDefault();

    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    //let $currentValue = $(`<div class="food-name"> ${currentKey}<span class="food-quantity"> ${currentValue}</span> <button class="eat-button"type="button">Eat</button> <button class="buy-button"type="button">Buy</button></div>`)
    if (keyExists(currentKey)) {
      //current key exists, do something error-handle-y
    } else {
      createItem(currentKey, currentValue);
      addText(localStorage);
      }
      
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
      //current key doesnt exist, do stuff
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
  $('.eat-button').click(function() {
    event.preventDefault();
    console.log('it worked');
    // if ($('.food-name').val() === localStorage.currentKey) {
    //   eat(currentKey, currentValue)
    //   addText(localStorage);
    });
  // }


