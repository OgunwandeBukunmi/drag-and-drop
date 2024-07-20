const card = document.querySelector(".card");
let startx, starty, newx, newy;
card.addEventListener("mousedown", mousedown);
function mousedown(e) {
  startx = e.clientX;
  starty = e.clienty;
  document.addEventListener("mousemove", mousemove);
  document.addEventListener("mouseup", mouseup);
}

function mousemove(e) {
  newx = startx - e.clientX;
  newy = starty - e.clientY;
  startx = e.clientX;
  starty = e.clientY;

  card.style.top = card.offsetTop - newy + "px";
  card.style.left = card.offsetLeft - newx + "px";
}
function mouseup(e) {
  document.removeEventListener("mousemove", mousemove);
}
