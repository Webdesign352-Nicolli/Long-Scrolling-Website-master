document.addEventListener('wheel', function(e)
{
  if(e.type != 'wheel')
  {
    return;
  }
  let delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;
  delta = delta * (-20);
  document.documentElement.scrollLeft -= delta;
  // safari needs also this
  document.body.scrollLeft -= delta;
  e.preventDefault();
});
//BEGINNING NAMES VAR...........

var title = document.getElementById("title");
var quote = document.getElementById("quote");
var protagonist = document.getElementById("protagonist");
var mirror = document.getElementById("mirror");
var intro = document.getElementById("intro");
var fleta = document.getElementById("fleta");
var fgoodend = document.getElementById("fgoodend");
var fletastory = document.getElementById("fletastory");
var harpae = document.getElementById("harpae");
var hgoodend = document.getElementById("hgoodend");
var harpaestory = document.getElementById("harpaestory");
var lisette = document.getElementById("lisette");
var lgoodend = document.getElementById("lgoodend");
var lisettestory = document.getElementById("lisettestory");
var enjel = document.getElementById("enjel");
var enjelstory = document.getElementById("enjelstory");
var medical = document.getElementById("medical");
var medic = document.getElementById("medic");

//END OF NAMES VAR
//..................................

window.onscroll = function(){
  var x = window.pageXOffset;
    //console.log("scale = " +x/1000 + 1);
    console.log(x);
    console.log(title);
    console.log(quote);
    console.log(protagonist);
    console.log(mirror);
    console.log(intro);
    console.log(fleta);
    console.log(fgoodend);
    console.log(fletastory);
    console.log(harpae);
    console.log(hgoodend);
    console.log(harpaestory);
    console.log(lisette);
    console.log(lgoodend);
    console.log(lisettestory);
    console.log(enjel);
    console.log(enjelstory);
    console.log(medical);
    console.log(medic);

//TitleQuote
    switch (true) {
      case x >= 270 && x <1149:
        console.log(">= 270 && <1149");
        quote.classList.add("fadein");
        break;

      case x >= 1150:
        console.log(">1150");
        quote.classList.add("fadeOut");
        break;

        default:
        quote.classList.remove("fadein");
        quote.classList.remove("fadeOut");
    }


//Protagonist story
switch (true) {
  case x >= 1300 && x <2900:
    console.log(">= 1300 && <2900");
    protagonist.classList.add("fadein");
    mirror.classList.add("fadein");
    intro.classList.add("fadein");
    break;

    case x >= 2901:
      console.log(">= 2901");
      protagonist.classList.add("fadeOut");
      mirror.classList.add("fadeOut");
      intro.classList.add("fadeOut");
      break;

  default:
  protagonist.classList.remove("fadein");
  protagonist.classList.remove("fadeOut");
  mirror.classList.remove("fadein");
  mirror.classList.remove("fadeOut");
  intro.classList.remove("fadeOut");
  intro.classList.remove("fadein");
}


//Fletastory
switch (true) {
  case x >= 3000 && x <4500:
    console.log(">= 3000 && <4500");
    fleta.classList.add("fadein");
    fgoodend.classList.add("fadein");
    fletastory.classList.add("fadein");
    break;

    case x >= 4501:
      console.log(">= 4501");
      fleta.classList.add("fadeOut");
      fgoodend.classList.add("fadeOut");
      fletastory.classList.add("fadeOut");
      break;

  default:
  fleta.classList.remove("fadein");
  fleta.classList.remove("fadeOut");
  fgoodend.classList.remove("fadein");
  fgoodend.classList.remove("fadeOut");
  fletastory.classList.remove("fadeOut");
  fletastory.classList.remove("fadein");

}

//harpaestory
switch (true) {
  case x >= 4200 && x <5600:
    console.log(">= 4200 && <5600");
    harpae.classList.add("fadein");
    hgoodend.classList.add("fadein");
    harpaestory.classList.add("fadein");
    break;

    case x >= 5601:
      console.log(">= 4501");
      harpae.classList.add("fadeOut");
      hgoodend.classList.add("fadeOut");
      harpaestory.classList.add("fadeOut");
      break;

  default:
  harpae.classList.remove("fadein");
  harpae.classList.remove("fadeOut");
  hgoodend.classList.remove("fadein");
  hgoodend.classList.remove("fadeOut");
  harpaestory.classList.remove("fadeOut");
  harpaestory.classList.remove("fadein");

}

//lisette
switch (true) {
  case x >= 5500 && x <6800:
    console.log(">= 5500 && <6800");
    lisette.classList.add("fadein");
    lgoodend.classList.add("fadein");
    lisettestory.classList.add("fadein");
    break;

    case x >= 6801:
      console.log(">= 6801");
      lisette.classList.add("fadeOut");
      lgoodend.classList.add("fadeOut");
      lisettestory.classList.add("fadeOut");
      break;

  default:
  lisette.classList.remove("fadein");
  lisette.classList.remove("fadeOut");
  lgoodend.classList.remove("fadein");
  lgoodend.classList.remove("fadeOut");
  lisettestory.classList.remove("fadeOut");
  lisettestory.classList.remove("fadein");

}

//Enjel
switch (true) {
  case x >= 6800 && x <7800:
    console.log(">= 6800 && <7800");
    enjel.classList.add("fadein");
    enjelstory.classList.add("fadein");
    break;

    case x >= 7801:
      console.log(">= 7801");
      enjel.classList.add("fadeOut");
      enjelstory.classList.add("fadeOut");
      break;

  default:
  enjel.classList.remove("fadein");
  enjel.classList.remove("fadeOut");
  enjelstory.classList.remove("fadeOut");
  enjelstory.classList.remove("fadein");

}

//Medical Report
switch (true) {
  case x >= 7980:
    console.log(">= 7980");
    medical.classList.add("fadein");
    medic.classList.add("fadein");
    break;

  default:
  medical.classList.remove("fadein");
  medic.classList.remove("fadein");

}

  }
