$(document).ready(function(){

    /*
        STEP NAVIGATION SYSTEM
    */
   contents = document.getElementsByClassName("content");
   selectors = document.getElementsByClassName("circle");
   activeSelector = 0;

  $(".stepNavigation ul li").click(function(){
      circleChild = $(this).children(".circle")[0];
       for (x in selectors){
           if(selectors[x] == circleChild){
               selectors[activeSelector].className = "circle";
               contents[activeSelector].className = "content";
               selectors[x].className = "circle activeCircle";
               contents[x].className = "content activeContent";
               activeSelector = x;
           }
       }
  });

  /*
        SITE NAVIGATION SYSTEM
  */



    prepParticles();

    //Speed that stars move at when transitioning between views
    var starSpeed = 13;
    //The currently active view. Set to '#homePage' by default
    var current = "#homePage";

   /**
    * Function for sending the stars in a certain direction. Up and down are not possible with
    * the current tools being used.
    * 
    * @param {String} direction The direction the views are animating in
    */
    function starSet(direction){
        var multiplier;
        switch(direction){
            case "left":
                multiplier = 1;
                break;
            case "right":
                multiplier = -1;
                break;
            case "reset":
                multiplier = 4 / (starSpeed*10);
                break;
            default:
                console.log("Unexpected Direction");
                break;
        }
        pJSDom[0].pJS.particles.move.speed = multiplier*starSpeed;
    }

    /*
        Functions for when the user clicks one of the navigation buttons
    */
    $('#process').click(function(){
        changePage("#processPage");
    });
    $('#logo').click(function(){
        changePage("#homePage");
    })
    $('#learn').click(function(){
        changePage("#learnPage");
    })
    $('#work').click(function(){
        changePage("#workPage");
    })

    /**
     * Function for handling the transition between views. Determines direction of animations
     * before calling 'transition' function
     * 
     * @param {String} next The view to be made active
     */
    function changePage(next){
        if(current != next){
            //Go to next page
            $("#process").css({borderBottom: ""});
            $("#learn").css({borderBottom: ""});
            $("#work").css({borderBottom: ""});
            switch(next){
                case "#homePage":
                    switch(current){
                        case "#processPage":
                            transition(next, "left");
                            break;
                        case "#learnPage":
                            transition(next, "down");
                            break;
                        case "#workPage":
                            transition(next, "right");
                            break;  
                    }
                    break;
                case "#processPage":
                    $("#process").css({borderBottom: "solid 1px white"});
                    transition(next, "right");
                    break;
                case "#learnPage":
                    $("#learn").css({borderBottom: "solid 1px white"});
                    transition(next, "up");
                    break;
                case "#workPage":
                    $("#work").css({borderBottom: "solid 1px white"});
                    transition(next, "left");
                    break;
            }
        }
        current = next;
    }

   /**
    * Function that handles the animations for transitioning between views
    * 
    * @param {*} next The view to be made active
    * @param {*} direction The direction the views will animate in
    */
    function transition(next, direction){
        switch(direction){
            case "left":
                starSet("left");
                $(current).animate({left: "-=100%", opacity: 0.25}, 1000);
                $(next).css({left: "100%", top: "0", opacity: 0.25});
                $(next).animate({left: "-=100%", opacity: 1}, 1000, function(){
                    starSet("reset");
                    resetStepNavigation();
                });
                break;
            case "right":
                starSet("right");
                $(current).animate({left: "+=100%", opacity: 0.25}, 1000);
                $(next).css({left: "-100%", top: "0", opacity: 0.25});
                $(next).animate({left: "+=100%", opacity: 1}, 1000, function(){
                    starSet("reset");
                    resetStepNavigation();
                });
                break;
            case "up":
                    $(current).animate({top: "-=100%", opacity: 0.25}, 1000);
                    $(next).css({top: "+100%", left: "0", opacity: 0.25});
                    $(next).animate({top: "-=100%", opacity: 1}, 1000, function(){
                        resetStepNavigation();
                    });
                    break;
            case "down":
                    $(current).animate({top: "+=100%", opacity: 0.25}, 1000);
                    $(next).css({top: "-100%", left: "0", opacity: 0.25});
                    $(next).animate({top: "+=100%", opacity: 1}, 1000, function(){
                        resetStepNavigation();
                    });
                    break;
        }
    }

    function resetStepNavigation(){
        for (x in selectors){
            selectors[x].className = "circle";
            contents[x].className = "content";
        }
    }


});