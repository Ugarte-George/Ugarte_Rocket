//IMPORTS
import { gsap } from "gsap";
//import { GSDevTools } from "gsap/GSDevTools";

import { CustomEase } from "gsap/CustomEase";
import { CustomWiggle } from "gsap/CustomWiggle";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

//register Plugins
gsap.registerPlugin(CustomEase, CustomWiggle, MotionPathPlugin);

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


  let mainTL = gsap.timeline({id:"main"});
  let cloudsTL = gsap.timeline({paused:"true"});
  let surroundTL = gsap.timeline({paused:"true"});
  let moonFloatTL = gsap.timeline({paused:"true"});


  function init(){

    CustomWiggle.create("myWiggle1", {wiggles: 75, type: "uniform"});

    CustomWiggle.create("myWiggle2", {wiggles: 40, type: "uniform"});

    CustomWiggle.create("myWiggle3", {wiggles: 6, type: "anticipate"});

    CustomWiggle.create("myWiggle4", {wiggles: 2, type: "uniform"});

    CustomWiggle.create("CloudWiggle", {wiggles: 3, type: "uniform"});
    

    CustomWiggle.create("myWiggleRandom", {wiggles: 150, type: "random"});

    CustomEase.create("RocketEase", "M0,0 C0,0 0.245,0.101 0.3,0.12 0.482,0.18 0.66,0.253 0.708,0.394 0.758,0.542 0.812,0.751 0.84,0.87 0.87,1.002 1,1 1,1 ", {y: -500 });

    CustomEase.create("RocketFall", "M0,0 C0,0 0.064,0 0.138,0 0.264,0 0.466,0.029 0.514,0.05 0.684,0.124 0.704,0.139 0.834,0.314 1.006,0.546 1,1 1,1 ", {y: -500 });



    //*********** zoomTL init ****************
    gsap.set(["#mountains"], {transformOrigin: "center"});

    gsap.set(["#landscape_light"], {transformOrigin: "left"});

    gsap.set(["#landscape_dark"], {transformOrigin: "right"});

    gsap.set(["#foreground"], {transformOrigin: "center"});
    
    gsap.set(["#rocket"], {transformOrigin: "center"});

    gsap.set(["#smoke"], {transformOrigin: "center"});

    gsap.set(["#moon"], {transformOrigin: "right"});



  }

  //Nested Timelines
  //***********  fadeInTL  ****************
  function fadeInTL(){
    let tl = gsap.timeline();
    tl.from ("#background_fill", {alpha: 0, duration: 1, scale: 20, OnComplete: controlClouds})        //,OnComplete: controlClouds
    .from ("#clouds_all ", {alpha: 0, duration: 2.5}, "-=1")

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

  //*********** rocketTL ****************  In hindsight I probably should've made the smoke shake using a call back as opposed to having it in rocketTL

  function rocketTL(){
    let tl = gsap.timeline();
    tl.to ("#rocket", {duration: 2, x: "+=3.5", ease: "myWiggle1"}, "zoomOut")
      .to ("#smoke1", {duration: 2, x:"+=4", ease: "myWiggle1"}, "zoomOut")
      .to ("#smoke2", {duration: 2, y: "+=6", ease: "myWiggle2"}, "zoomOut")
      .to ("#smoke3", {duration: 2, x:"+=3", ease: "myWiggle1"}, "zoomOut")
      .to ("#smoke4", {duration: 2, y: "+=5", ease: "myWiggle2",OnComplete: surroundShake}, "zoomOut")
    
      .to ("#foreground", {duration: 1.5, scale:2.5, y: "-=200", ease: "power4.out"}, "zoomOut")
      .to ("#rocket", {duration: 1.5, scale:2.5, y: "-=275", ease: "power4.out"}, "zoomOut")
      .to ("#smoke", {duration: 1.5, scale:2.5, y: "-=100", ease: "power4.out"}, "zoomOut")
      .to ("#clouds_all", {duration: 1.5, scale:2.5, y: "-=1000", ease: "power4.out"}, "zoomOut")
      .to ("#moon", {duration: 1.5, scale:2.5, y: "-=1000", ease: "power4.out"}, "zoomOut")
      .to ("#midground", {duration: 1.5, scale:2.5, y: "-=300",transformOrigin: "center", ease: "power4.out"}, "zoomOut")
      .to ("#background", {duration: 1.5, scale:2.5, y: "-=1500", ease: "power4.out"}, "zoomOut")

      .to ("#rocket", {duration: 2, x: "+=3.5", ease: "myWiggle1"}, "zoomIn")
      .to ("#smoke1", {duration: 2, x:"+=4", ease: "myWiggle1"}, "zoomIn")
      .to ("#smoke2", {duration: 2, y: "+=6", ease: "myWiggle2"}, "zoomIn")
      .to ("#smoke3", {duration: 2, x:"+=3", ease: "myWiggle1"}, "zoomIn")
      .to ("#smoke4", {duration: 2, y: "+=5", ease: "myWiggle2"}, "zoomIn")

      .to ("#foreground", {duration: 1.5, scale:1, y: "+=200", ease: "power4.out"}, "zoomIn")
      .to ("#rocket", {duration: 1.5, scale:1, y: "+=275", ease: "power4.out"}, "zoomIn")
      .to ("#smoke", {duration: 1.5, scale:1, y: "+=100", ease: "power4.out"}, "zoomIn")
      .to ("#clouds_all", {duration: 1.5, scale:1, y: "+=1000", ease: "power4.out"}, "zoomIn")
      .to ("#moon", {duration: 1.5, scale:1, y: "+=1000", ease: "power4.out"}, "zoomIn")
      .to ("#midground", {duration: 1.5, scale:1, y: "+=300",transformOrigin: "center", ease: "power4.out"}, "zoomIn")
      .to ("#background", {duration: 1.5, scale:1, y: "+=1500", ease: "power4.out"}, "zoomIn")
    
      
      
      
    

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
      
      ,OnComplete: moonFloat
    },"shakecontinued")

      .to ("#smoke1", {duration: 2.5, x:"+=4", y: "+=5", ease: "myWiggle1"}, "shakecontinued")
      .to ("#smoke2", {duration: 2.5, x:"+=6", y: "+=3", ease: "myWiggle2"}, "shakecontinued")
      .to ("#smoke3", {duration: 2.5, x:"+=3", y: "+=4", ease: "myWiggle1"}, "shakecontinued")
      .to ("#smoke4", {duration: 2.5, x:"+=5", y: "+=5", ease: "myWiggle2"}, "shakecontinued")
    
    

    ;//tlEND
    return tl;

  }

  //*********** finalFallTL ****************

  function finalFallTL(){
    let tl = gsap.timeline();
    tl.to ("#smoke4", {duration: 0.2, ease: "RocketFall", y: "+=1000", x: "+=1000"})
      .to ("#smoke3", {duration: 0.2, ease: "RocketFall", y: "+=1000", x: "+=1000"})
      .to ("#smoke1", {duration: 0.2, ease: "RocketFall", y: "+=1000", x: "+=1000"})
      .to ("#smoke2", {duration: 0.2, ease: "RocketFall", y: "+=1000", x: "+=1000"})
      .to ("#rocket", {duration: 1, x: "+=5", y: "+=5", rotate: 30, ease: "myWiggle3"})
      .to ("#rocket", {ease: "RocketFall", y: "+=1000", x: "+=1000", rotate: 250})

        ;//tlEND
        return tl;

      }

  //*********** fallOffTL ****************

  function fallOffTL(){
    let tl = gsap.timeline();
    tl.to ("#foreground", {duration: 1,  y: "+=350", ease: "bounce.out"})
    .to ("#landscape_light", {duration: 1,  y: "+500", ease: "bounce.out"},"-=0.750")
    .to ("#landscape_dark", {duration: 1,  y: "+=500", ease: "bounce.out"},"-=0.750")
    .to ("#mountains", {duration: 1,  y: "+=750", ease: "bounce.out"},"-=0.750")
    .to ("#clouds_all", {duration: 1,  y: "+=1000", ease: "bounce.out"},"-=0.750")
    .to ("#moon", {duration: 1,  y: "+=1200", ease: "bounce.out"},"-=0.750")
    .to ("#background", {duration: 2, alpha:0},"-=1")


        ;//tlEND
        return tl;

      }

    //*********** controlClouds ****************
      function surroundShake (){

        console.log ('SHOW TIME');
        gsap.set(".midground", {display:"block"});
        surroundTL.to ("#landscape_light",{duration:4, x: "-=1", ease: "myWiggle2"}, "surround")
                  .to ("#landscape_dark",{duration:4, x: "-=1", ease: "myWiggle2"}, "surround")
                  .to ("#foreground",{duration:4, x: "-=1", ease: "myWiggle2"}, "surround")
        surroundTL.play()

      }

      //*********** surroundShake ****************
      function controlClouds (){

        console.log ('SHOW TIME');
        gsap.set(".clouds_all", {display:"block"});
        cloudsTL.to ("#cloud_right2",{duration:20, x: "-=100", ease: "CloudWiggle"}, "cloudmove")
                .to ("#cloud_right1",{duration:20, x: "-=75", ease: "CloudWiggle"}, "cloudmove")
                .to ("#cloud_left1",{duration:20, x: "+=50", ease: "CloudWiggle"}, "cloudmove")
                .to ("#cloud_left2",{duration:20, x: "+=100", ease: "CloudWiggle"}, "cloudmove")
        cloudsTL.play()

      }

    //*********** moonFloat ****************

        function moonFloat (){

        console.log ('SHOW TIME');
        gsap.set(".moon", {display:"block"});
        moonFloatTL.to ("#moon",{duration:6, y: "-=25", ease: "myWiggle4"})
        moonFloatTL.play()

      }


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
        .add(fallOffTL())
    


  ;//tl END





});
