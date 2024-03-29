document.addEventListener("mousemove", parallax);

function parallax(e) {
  document.querySelectorAll(".BAS").forEach((move) => {
    var movingValue = move.getAttribute("data-position");
    var x = e.clientX * movingValue;
    var y = e.clientY * movingValue;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

const cursorDot = document.querySelector("[data-cursor-dot]");

window.addEventListener("mousemove", (e) => {
  var x = e.clientX;
  var y = e.clientY;
  cursorDot.style.left = `${x}px`;
  cursorDot.style.top = `${y}px`;
});

document.querySelector("video").playbackRate = 0.5;
