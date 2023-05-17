$(document).ready(function() {
  var currentDayEl = $('#currentDay');
  var containerEl = $('#container');
  var currentHour = moment().hour();

  var timeBlockHour = $('.hour');
  var task = $('.description');

  var currentDay = moment().format('dddd, MMMM Do, YYYY');
  currentDayEl.text(currentDay);

  $('.time-block').each(function() {
    var timeBlockEventSpace = $(this).find('.col-8');
    var currentTimeBlockHour = moment($(this).find('.hour').text().trim(), 'hA').hour();

    timeBlockEventSpace.removeClass('past present future');

    if (currentTimeBlockHour > currentHour) {
      timeBlockEventSpace.addClass('future');
    } else if (currentTimeBlockHour === currentHour) {
      timeBlockEventSpace.addClass('present');
    } else {
      timeBlockEventSpace.addClass('past');
    }
  });

  var containerEl = $('.container');

   // Attach click event to the container and delegate to save button
   containerEl.on('click', '.saveBtn', function() {
    var hour = $(this).siblings('.hour').text().trim();
    var task = $(this).siblings('.description').val();
    localStorage.setItem("event-" + hour, task);
  });

  // Retrieve saved events from local storage and display them
  $('.time-block').each(function() {
    var hour = $(this).find('.hour').text().trim();
    var savedEvent = localStorage.getItem("event-" + hour);
    $(this).find('.description').val(savedEvent);
  });

  // Add remove button click listener
  containerEl.on('click', '.removeBtn', function() {
    var hour = $(this).siblings('.hour').text().trim();

    // Remove event from local storage
    localStorage.removeItem("event-" + hour);

    // Clear description field
    $(this).siblings('.description').val('');
  });
});
  
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

