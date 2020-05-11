$(document).ready(function () {
  const screen = $(".screen");
  let seconds = 0;
  let minutes = 0;
  let t;
  let isStoped = true;
  function add() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }

    screen.text(
      (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds)
    );
    timer();
  }

  function timer() {
    t = setTimeout(add, 1000);
  }

  $("#start").click(function (e) {
    e.preventDefault();
    if (isStoped) {
      timer();
      isStoped = false;
      console.log("start");
    } else {
      clearTimeout(t);
      isStoped = true;
      console.log("stop");
    }
  });
  $("#reset").click(function (e) {
    screen.text("00:00");
    seconds = 0;
    minutes = 0;
    isStoped = true;
    clearTimeout(t);
    console.log("reset");
  });
});
