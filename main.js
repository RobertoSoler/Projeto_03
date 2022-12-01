var today = new Date();
var minDate = today.setDate(today.getDate() + 1);
var siteMusic = document.getElementById("music");
var firstOpen = true;
var time;

$('#datePicker').datetimepicker({
  useCurrent: false,
  format: "MM/DD/YYYY",
  minDate: minDate
});

$('#timePicker').datetimepicker({
  useCurrent: false,
  format: "hh:mm A"
}).on('dp.show', function() {
  if(firstOpen) {
    time = moment().startOf('day');
    firstOpen = false;
  } else {
    time = "01:00 PM"
  }
  
  $(this).data('DateTimePicker').date(time);
});

function playAudio() {
  siteMusic.play();
  siteMusic.volume=0.1;
}

function pauseAudio() {
  siteMusic.pause();
}


