// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
$(document).ready(function() {

  // Get current day and time
  var currentDay = dayjs().format("dddd, MMMM D");
  var currentHour = dayjs().format("H");

  // Display current day
  $("#currentDay").text(currentDay);

  // Set up time blocks
  $(".time-block").each(function() {

    // Get hour for this time block
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // Set background color for time block based on past/present/future
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }

    // Retrieve saved event for this time block from local storage
    var savedEvent = localStorage.getItem("event-" + blockHour);
    

    // Display saved event
    $(this).find(".description").val(savedEvent);

    // Save event when save button is clicked
    $(this).find(".saveBtn").on("click", function() {
      var event = $(this).siblings(".description").val();
      localStorage.setItem("event-" + blockHour, event);
    });


    // Add remove button click listener
  $(this).find(".removeBtn").on("click", function() {
  // Remove event from local storage
  localStorage.removeItem("event-" + blockHour);
  // Clear description field
  $(this).siblings(".description").val("");
 });


  });

});
