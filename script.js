var submitBtn   = document.getElementById("submitBtn");
var startBtn    = document.getElementById("startBtn");
var resetBtn    = document.getElementById("resetBtn");

var redInput    = document.getElementById("red");
var greenInput  = document.getElementById("green");
var blueInput   = document.getElementById("blue");
var numInput    = document.getElementById("numCircles");

var redRow      = document.getElementById("redRow");
var greenRow    = document.getElementById("greenRow");
var blueRow     = document.getElementById("blueRow");

var circleSection = document.getElementById("circleSection");

var timeouts = [];

submitBtn.addEventListener("click", function () {

  var n = parseInt(numInput.value);
  var x = parseInt(redInput.value);
  var y = parseInt(greenInput.value);
  var z = parseInt(blueInput.value);

  if (isNaN(n) || n < 0 || n > 10) {
    alert("Please enter a valid Number of Circles (0 to 10).");
    return;
  }
  if (isNaN(x) || isNaN(y) || isNaN(z)) {
    alert("Please enter valid numbers for Red, Green, and Blue.");
    return;
  }

  redRow.innerHTML   = "";
  greenRow.innerHTML = "";
  blueRow.innerHTML  = "";

  redRow.classList.remove("fade-out");
  greenRow.classList.remove("fade-out");
  blueRow.classList.remove("fade-out");

  redRow.style.display   = "";
  greenRow.style.display = "";
  blueRow.style.display  = "";

  for (var i = 0; i < n; i++) {
    var redCircle = document.createElement("div");
    redCircle.classList.add("circle", "red");
    redRow.appendChild(redCircle);
  }

  for (var i = 0; i < n; i++) {
    var greenCircle = document.createElement("div");
    greenCircle.classList.add("circle", "green");
    greenRow.appendChild(greenCircle);
  }

  for (var i = 0; i < n; i++) {
    var blueCircle = document.createElement("div");
    blueCircle.classList.add("circle", "blue");
    blueRow.appendChild(blueCircle);
  }

  circleSection.style.display = "block";

  clearAllTimeouts();
});


startBtn.addEventListener("click", function () {

  var x = parseInt(redInput.value);
  var y = parseInt(greenInput.value);
  var z = parseInt(blueInput.value);

  if (isNaN(x) || isNaN(y) || isNaN(z)) {
    alert("Please enter valid numbers for Red, Green, and Blue.");
    return;
  }

  clearAllTimeouts();

  var t1 = setTimeout(function () {
    redRow.classList.add("fade-out");

    var t1hide = setTimeout(function () {
      redRow.style.display = "none";
    }, 600);
    timeouts.push(t1hide);

    var t2 = setTimeout(function () {
      greenRow.classList.add("fade-out");

      var t2hide = setTimeout(function () {
        greenRow.style.display = "none";
      }, 600);
      timeouts.push(t2hide);

      var t3 = setTimeout(function () {
        blueRow.classList.add("fade-out");

        var t3hide = setTimeout(function () {
          blueRow.style.display = "none";
        }, 600);
        timeouts.push(t3hide);

      }, z * 1000);
      timeouts.push(t3);

    }, y * 1000);
    timeouts.push(t2);

  }, x * 1000);

  timeouts.push(t1);
});


resetBtn.addEventListener("click", function () {

  clearAllTimeouts();

  redInput.value    = "";
  greenInput.value  = "";
  blueInput.value   = "";
  numInput.value    = "";

  redRow.innerHTML   = "";
  greenRow.innerHTML = "";
  blueRow.innerHTML  = "";

  redRow.classList.remove("fade-out");
  greenRow.classList.remove("fade-out");
  blueRow.classList.remove("fade-out");

  redRow.style.display   = "";
  greenRow.style.display = "";
  blueRow.style.display  = "";

  circleSection.style.display = "none";
});


function clearAllTimeouts() {
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  timeouts = [];
}