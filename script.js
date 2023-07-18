let presskey = document.addEventListener("keypress", function (event) {
  //   alert("yes");
  let keypressed = event.key;
  //   console.log(keypressed);

  switch (keypressed) {
    case "a":
      var fa = new Audio("song/key01.ogg");
      fa.play();
      break;

    case "s":
      var fs = new Audio("song/key02.ogg");
      fs.play();
      break;

    case "d":
      var fd = new Audio("song/key03.ogg");
      fd.play();
      break;
    case "f":
      var fsf = new Audio("song/key04.ogg");
      fsf.play();
      break;
    case "g":
      var fg = new Audio("song/key05.ogg");
      fg.play();
      break;
    case "h":
      var fh = new Audio("song/key06.ogg");
      fh.play();
      break;
    case "j":
      var fj = new Audio("song/key07.ogg");
      fj.play();
      break;
    case "k":
      var fk = new Audio("song/key08.ogg");
      fk.play();
      break;
    case "l":
      var fl = new Audio("song/key09.ogg");
      fl.play();
      break;

    default:
      break;
  }
});

let hoveronn = document.getElementsByClassName("box1");

hoveronn[0].addEventListener("click", function () {
  //   alert("yes");

  var fa = new Audio(`song/key01.ogg`);
  fa.play();
});

hoveronn[1].addEventListener("click", function () {
  //   alert("yes");

  var fa = new Audio(`song/key02.ogg`);
  fa.play();
});
hoveronn[2].addEventListener("click", function () {
  //   alert("yes");

  var fa = new Audio(`song/key03.ogg`);
  fa.play();
});
hoveronn[3].addEventListener("click", function () {
  //   alert("yes");

  var fa = new Audio(`song/key04.ogg`);
  fa.play();
});
hoveronn[4].addEventListener("click", function () {
  //   alert("yes");

  var fa = new Audio(`song/key05.ogg`);
  fa.play();
});
hoveronn[5].addEventListener("click", function () {
  //   alert("yes");

  var fa = new Audio(`song/key06.ogg`);
  fa.play();
});
hoveronn[6].addEventListener("click", function () {
  //   alert("yes");

  var fa = new Audio(`song/key07.ogg`);
  fa.play();
});
hoveronn[7].addEventListener("click", function () {
  //   alert("yes");

  var fa = new Audio(`song/key08.ogg`);
  fa.play();
});
hoveronn[8].addEventListener("click", function () {
  //   alert("yes");

  var fa = new Audio(`song/key01.ogg`);
  fa.play();
});
// hoveronn[1].addEventListener("click", function () {

//       var fs = new Audio("song/key02.ogg");
//       fs.play();
// }
