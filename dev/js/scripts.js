//IMPORTS
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { CustomEase } from "gsap/CustomEase";
import { CustomWiggle } from "gsap/CustomWiggle";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

//register Plugins
gsap.registerPlugin(GSDevTools, CustomEase, CustomWiggle, MotionPathPlugin);

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

    CustomWiggle.create("myWiggle3", {wiggles: 6, type: "anticipate"});
    

    CustomWiggle.create("myWiggleRandom", {wiggles: 150, type: "random"});

    CustomEase.create("RocketEase", "M0,0 C0,0 0.245,0.101 0.3,0.12 0.482,0.18 0.66,0.253 0.708,0.394 0.758,0.542 0.812,0.751 0.84,0.87 0.87,1.002 1,1 1,1 ", {y: -500 });

    CustomEase.create("RocketFall", "M0,0 C0,0 0.064,0 0.138,0 0.264,0 0.466,0.029 0.514,0.05 0.684,0.124 0.704,0.139 0.834,0.314 1.006,0.546 1,1 1,1 ", {y: -500 });


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
    tl.from ("#background_fill", {alpha: 0, duration: 1, scale: 20})
    .from ("#clouds_all ", {alpha: 0, duration: 2}, "-=1")

    ;//tlEND
    return tl;

  }


  //*********** zoomTL ****************
  function zoomTL(){
    let tl = gsap.timeline();
    tl.from ("#mountains", {duration: 2.5, alpha: 0, scale: 10, y: "+=1500", ease: "power4.out"}, "zoom")
      .from ("#moon", {duration: 3, y: "-=800", ease: "bounce.out"}, "zoom")
      .from ("#landscape_dark", {duration: 1, alpha: 0, scale:5, y:"+=400", ease: "power4.out"}, "zoom")
      .from ("#landscape_light", {duration: 2, alpha: 0, scale:2, y:"+=550", ease: "power4.out"}, "zoom")
      .from ("#foreground, #rocket, #smoke", {duration: 1, alpha: 0, scale:1, y:"+=550", ease: "power4.out"})
      
    

    ;//tlEND
    return tl;

  }

  //*********** rocketTL ****************

  function rocketTL(){
    let tl = gsap.timeline();
    tl.to ("#rocket", {duration: 2, x: "+=2", ease: "myWiggle1"}, "zoomOut")
    tl.to ("#smoke1", {duration: 2, x:"+=2", y: "+=4", ease: "myWiggleRandom"}, "zoomOut")
    tl.to ("#smoke2", {duration: 2, x:"+=3", y: "+=1", ease: "myWiggleRandom"}, "zoomOut")
    tl.to ("#smoke3", {duration: 2, x:"+=1", y: "+=2", ease: "myWiggleRandom"}, "zoomOut")
    tl.to ("#smoke4", {duration: 2, x:"+=4", y: "+=3", ease: "myWiggleRandom"}, "zoomOut")
    
    tl.to ("#foreground", {duration: 1.5, scale:2.5, y: "-=200", ease: "power4.out"}, "zoomOut")
    tl.to ("#rocket", {duration: 1.5, scale:2.5, y: "-=275", ease: "power4.out"}, "zoomOut")
    tl.to ("#smoke", {duration: 1.5, scale:2.5, y: "-=100", ease: "power4.out"}, "zoomOut")
    tl.to ("#clouds_all", {duration: 1.5, scale:2.5, y: "-=1000", ease: "power4.out"}, "zoomOut")
    tl.to ("#moon", {duration: 1.5, scale:2.5, y: "-=1000", ease: "power4.out"}, "zoomOut")
    tl.to ("#midground", {duration: 1.5, scale:2.5, y: "-=300",transformOrigin: "center", ease: "power4.out"}, "zoomOut")
    tl.to ("#background", {duration: 1.5, scale:2.5, y: "-=1500", ease: "power4.out"}, "zoomOut")

    tl.to ("#rocket", {duration: 2, x: "+=2", ease: "myWiggle1"}, "zoomIn")
    tl.to ("#smoke1", {duration: 2, x:"+=2", y: "+=4", ease: "myWiggleRandom"}, "zoomIn")
    tl.to ("#smoke2", {duration: 2, x:"+=3", y: "+=1", ease: "myWiggleRandom"}, "zoomIn")
    tl.to ("#smoke3", {duration: 2, x:"+=1", y: "+=2", ease: "myWiggleRandom"}, "zoomIn")
    tl.to ("#smoke4", {duration: 2, x:"+=4", y: "+=3", ease: "myWiggleRandom"}, "zoomIn")

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



  //*********** liftOffTL ****************
  function liftOffTL(){
    let tl = gsap.timeline();
    tl.to ("#RocketSmoke", {
      duration: 3,
      motionPath: {
        path: "#TheImportantPath",
        align: "self",
        autoRotate: 93

      },
      ease: "RocketEase"
      

    },"shakecontinued")
    tl.to ("#smoke1", {duration: 2.5, x:"+=2", y: "+=4", ease: "myWiggleRandom"}, "shakecontinued")
    tl.to ("#smoke2", {duration: 2.5, x:"+=3", y: "+=1", ease: "myWiggleRandom"}, "shakecontinued")
    tl.to ("#smoke3", {duration: 2.5, x:"+=1", y: "+=2", ease: "myWiggleRandom"}, "shakecontinued")
    tl.to ("#smoke4", {duration: 2.5, x:"+=4", y: "+=3", ease: "myWiggleRandom"}, "shakecontinued")
    
    

    ;//tlEND
    return tl;

  }

  //*********** finalFallTL ****************

  function finalFallTL(){
    let tl = gsap.timeline();
    tl.to ("#smoke4", {duration: 0.5, ease: "RocketFall", y: "+=1000", x: "+=1000"})
    tl.to ("#smoke3", {duration: 0.5, ease: "RocketFall", y: "+=1000", x: "+=1000"})
    tl.to ("#smoke1", {duration: 0.5, ease: "RocketFall", y: "+=1000", x: "+=1000"})
    tl.to ("#smoke2", {duration: 0.5, ease: "RocketFall", y: "+=1000", x: "+=1000"})
    tl.to ("#rocket", {duration: 1, x: "+=5", y: "+=5", rotate: 30, ease: "myWiggle3"})
    tl.to ("#rocket", {ease: "RocketFall", y: "+=1000", x: "+=1000", rotate: 250})

        ;//tlEND
        return tl;

      }

  //*********** moonLandingTL ****************


  //1. set initial properties
  init();

  //2. show content - prevents FOUC
  gsap.set('#svg-container',{visibility:"visible"});

  //3. BUILD Main timeline
  mainTL.add(fadeInTL())
        .add(zoomTL())
        .add(rocketTL())
        .add(liftOffTL(),"-=1.50")
        .add(finalFallTL(),"-=.35")
    


  ;//tl END





});
