//IMPORTS
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { CustomEase } from "gsap/CustomEase";
import { CustomWiggle } from "gsap/CustomWiggle";

//register Plugins
gsap.registerPlugin(GSDevTools, CustomEase, CustomWiggle);

//**** SELECT ELEMENTS without jQuery ****\\

// jQuery, all instances of .box
//$(".box");

// first instance of .box
//document.querySelector(".box");

// all instances of .box
//document.querySelectorAll(".box");


//page ready listener
let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  //add tools
  //GSDevTools.create();

  /* add your code here */
  let mainTL = gsap.timeline({id:"main"});


  function init(){

    CustomWiggle.create("myWiggle1", {wiggles: 100, type: "uniform"});

    CustomWiggle.create("myWiggle2", {wiggles: 50, type: "uniform"});

    CustomWiggle.create("myWiggleRandom", {wiggles: 150, type: "random"});

    //***********  fadeInTL init ****************

    //*********** zoomTL init ****************
    gsap.set(["#mountains"], {transformOrigin: "center"});

    gsap.set(["#landscape_light"], {transformOrigin: "left"});

    gsap.set(["#landscape_dark"], {transformOrigin: "right"});

    gsap.set(["#foreground"], {transformOrigin: "center"});
    
    gsap.set(["#rocket"], {transformOrigin: "center"});

    gsap.set(["#smoke"], {transformOrigin: "center"});

    gsap.set(["#moon"], {transformOrigin: "right"});
    //*********** spaceshipTL init ****************

    //*********** liftOffTL init ****************

    //*********** flightTL init ****************

    //*********** moonLandingTL init ****************


  }

  //Nested Timelines
  //***********  fadeInTL  ****************
  function fadeInTL(){
    let tl = gsap.timeline();
    tl.from ("#background_fill", {alpha: 0, duration: 2, scale: 20})
    .from ("#clouds_all ", {alpha: 0, duration: 3}, "-=1")

    ;//tlEND
    return tl;

  }


  //*********** zoomTL ****************
  function zoomTL(){
    let tl = gsap.timeline();
    tl.from ("#mountains", {duration: 4, alpha: 0, scale: 10, y: "+=1500", ease: "power4.out"}, "zoom")
      .from ("#moon", {duration: 3, y: "-=800", ease: "bounce.out"}, "zoom")
      .from ("#landscape_dark", {duration: 2, alpha: 0, scale:5, y:"+=400", ease: "power4.out"}, "zoom")
      .from ("#landscape_light", {duration: 3, alpha: 0, scale:2, y:"+=550", ease: "power4.out"}, "zoom")
      .from ("#foreground, #rocket, #smoke", {duration: 2, alpha: 0, scale:1, y:"+=550", ease: "power4.out"})
      
    

    ;//tlEND
    return tl;

  }

  //*********** rocketTL ****************

  function rocketTL(){
    let tl = gsap.timeline();
    tl.to ("#rocket", {duration: 5, x: "+=2", ease: "myWiggle1"}, "zoomOut")
    tl.to ("#smoke1", {duration: 5, x:"+=2", y: "+=4", ease: "myWiggleRandom"}, "zoomOut")
    tl.to ("#smoke2", {duration: 5, x:"+=3", y: "+=1", ease: "myWiggleRandom"}, "zoomOut")
    tl.to ("#smoke3", {duration: 5, x:"+=1", y: "+=2", ease: "myWiggleRandom"}, "zoomOut")
    tl.to ("#smoke4", {duration: 5, x:"+=4", y: "+=3", ease: "myWiggleRandom"}, "zoomOut")
    
    tl.to ("#foreground", {duration: 1.5, scale:2.5, y: "-=200", ease: "power4.out"}, "zoomOut")
    tl.to ("#rocket", {duration: 1.5, scale:2.5, y: "-=275", ease: "power4.out"}, "zoomOut")
    tl.to ("#smoke", {duration: 1.5, scale:2.5, y: "-=100", ease: "power4.out"}, "zoomOut")
    tl.to ("#clouds_all", {duration: 1.5, scale:2.5, y: "-=1000", ease: "power4.out"}, "zoomOut")
    tl.to ("#moon", {duration: 1.5, scale:2.5, y: "-=1000", ease: "power4.out"}, "zoomOut")
    tl.to ("#midground", {duration: 1.5, scale:2.5, y: "-=300",transformOrigin: "center", ease: "power4.out"}, "zoomOut")
    tl.to ("#background", {duration: 1.5, scale:2.5, y: "-=1500", ease: "power4.out"}, "zoomOut")

    tl.to ("#foreground", {duration: 1.5, scale:1, y: "+=200", ease: "power4.out"}, "zoomIn")
    tl.to ("#rocket", {duration: 1.5, scale:1, y: "+=275", ease: "power4.out"}, "zoomIn")
    tl.to ("#smoke", {duration: 1.5, scale:1, y: "+=100", ease: "power4.out"}, "zoomIn")
    tl.to ("#clouds_all", {duration: 1.5, scale:1, y: "+=1000", ease: "power4.out"}, "zoomIn")
    tl.to ("#moon", {duration: 1.5, scale:1, y: "+=1000", ease: "power4.out"}, "zoomIn")
    tl.to ("#midground", {duration: 1.5, scale:1, y: "+=300",transformOrigin: "center", ease: "power4.out"}, "zoomIn")
    tl.to ("#background", {duration: 1.5, scale:1, y: "+=1500", ease: "power4.out"}, "zoomIn")
    
      
      
      
    

    ;//tlEND
    return tl;

  }

  //*********** zoomOutTL ****************

  //*********** liftOffTL ****************

  //*********** flightTL ****************

  //*********** moonLandingTL ****************


  //1. set initial properties
  init();

  //2. show content - prevents FOUC
  gsap.set('#svg-container',{visibility:"visible"});

  //3. BUILD Main timeline
  mainTL.add(fadeInTL())
        .add(zoomTL())
        .add(rocketTL())
    


  ;//tl END





});
