$(document).ready(function () {
  // Add task
  $('.addBtn').click(function () {
    let inputVal = $('#myInput').val().trim();

    if (inputVal === "") {
      alert("You must write something!");
      return;
    }

    let li = $('<li></li>').text(inputVal);
    let closeBtn = $('<span class="close">\u00D7</span>');
    li.append(closeBtn);
    $('#myUL').append(li);
    $('#myInput').val("");

    updateProgressBar(); // ✅ Update after adding
  });

  // Check task
  $('#myUL').on('click', 'li', function () {
    $(this).toggleClass('checked');
    updateProgressBar(); // ✅ Update after checking
  });

  // Delete task
  $('#myUL').on('click', '.close', function (e) {
    e.stopPropagation();
    $(this).parent().fadeOut(300, function () {
      $(this).remove();
      updateProgressBar(); // ✅ Update after deleting
    });
  });

  // Progress function
  function updateProgressBar() {
    const total = $('#myUL li').length;
    const done = $('#myUL li.checked').length;

    if (total === 0) {
      $('#progressBar').css('width', '0%');
      $('#progressBar').text('');
      return;
    }

    const percent = (done / total) * 100;
    $('#progressBar').animate({ width: percent + '%' }, 300);
    $('#progressBar').text(Math.round(percent) + '%'); // ✅ Safe here
  }

  updateProgressBar(); // ✅ Initial call
});
