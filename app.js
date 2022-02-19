function timeAndDate() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours() - 12;
  var date = d.getDate();
  var year = d.getFullYear();

  if (h < 10) {
    h = 0 + "" + h;
  }

  if (s < 10) {
    s = 0 + "" + s;
  }
  if (m < 10) {
    m = 0 + "" + m;
  }
  if (date < 10) {
    date = 0 + "" + date;
  }

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  var month = months[d.getMonth()];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "SAT",
  ];

  let day = days[d.getDay()];

  const clockDisplay = document.getElementById("clockDegit");
  clockDisplay.innerText = h + ":" + m + ":" + s;

  let newDate = date + "-" + month + "-" + year;

  const dateDiplay = document.getElementById("date");
  dateDiplay.innerText = newDate;

  let newDay = document.getElementById("day");
  newDay.innerText = day;
}

setInterval(timeAndDate);
