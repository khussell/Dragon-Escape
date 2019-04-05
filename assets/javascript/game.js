//initializing variables
var targetNum,
    crystalNum1,
    crystalNum2,
    crystalNum3,
    crystalNum4,
    backgroundImage= 0,
    wins= 0,
    losses= 0,
    score= 0,
    crystalNumArray= [],
    crystalMin= 0


//connecting to html elements
var targetNumText= $("#target"),
    directText= $("#direct"),
    crystalButton1= $("#crys1"),
    crystalButton1= $("#crys2"),
    crystalButton1= $("#crys3"),
    crystalButton1= $("#crys4"),
    winsText= $("#wins"),
    lossesText= $("#losses"),
    scoreText= $("#score"),
    dragonPic1= $("#dragon1"),
    dragonPic2= $("#dragon2"),
    dragonPic3= $("#dragon3"),
    dragonPic4= $("#dragon4"),
    dragonPic5= $("#dragon5"),
    dragonPic6= $("#dragon6")


//functionality for instruction buttons open and close
$("#instruct").on("click", function(){
   $(".content").css("display", "block") 
})
$("#closeInstruct").on("click", function(){
    $(".content").css("display", "none") 
 })
 





//game functions

var game={



    //checking if user has gotten targetNum, if so goes to won function
    // if user went over target num or if the target minus the user's score is less than the crystal with the least value, go to lose function
    winOrLose: function(){
        if(score === targetNum){
            this.won()
        }else if(score>= targetNum|| (targetNum-score) < crystalMin){
            this.lose()
        }
    },




    //if player equaled target this function will carry out
    // wins go up by one along with winsText 
    //direction text congratulates each dragon passed
    //background image and dragons change
    //if it's the last background image then direction text congratulates finishing
    //reset function for all backgrounds except winning background
    won: function(){
        wins+=1
        winsText.text("Wins: " + wins)
       //background changes w/ new dragon
       backgroundImage += 1
       directText.text("Yay! The dragon let you pass, but there's another!")
       if(backgroundImage === 1){
        $(".everything").css("background-image", "url(https://www.doc.govt.nz/thumbs/hero/contentassets/91ab267577544e9cb6c4a15638cbdfc8/waipu-caves-hero.jpg)")
        $(".everything").css("top", "-100px")
        $(".everything").css("opacity", ".65")
        $("#dragon3").css("display", "none")
        $("#dragon1").css("display", "block")
        this.reset()
      }else if(backgroundImage === 2){
        $(".everything").css("background-image", "url(https://static.turbosquid.com/Preview/2016/09/17__16_07_56/CrystalCavern1.jpg5BD427A7-8D9B-4F8E-92E7-D81B7D7407DFOriginal.jpg)")
        $(".everything").css("opacity", ".65")
        $("#dragon1").css("display", "none")
        $("#dragon2").css("display", "block")
        this.reset()
      }else if(backgroundImage === 3){
        $(".everything").css("background-image", "url(https://irp-cdn.multiscreensite.com/31cb13a1/dms3rep/multi/tablet/FormationsRoom-3400x2550.jpg)")
        $(".everything").css("opacity", ".65")
        $("#dragon2").css("display", "none")
        $("#dragon4").css("display", "block")
        this.reset()
      }else if(backgroundImage === 4){
        $(".everything").css("background-image", "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlFbZ9SLSbmy5DNxZcDrhq_otjSUgUlY85m1t9DzWYY6hq4L0j)")
        $(".everything").css("opacity", ".65")
        $("#dragon4").css("display", "none")
        $("#dragon5").css("display", "block")
        this.reset()
      }else if(backgroundImage === 5){
        $(".everything").css("background-image", "url(https://cdn1.img.sputniknews.com/images/105728/33/1057283307.jpg)")
        $(".everything").css("opacity", ".65")
        $(".everything").css("top", "-100px")
        $("#dragon5").css("display", "none")
        $("#dragon6").css("display", "block")
        this.reset()
      }else{
        $(".everything").css("background-image", "url(https://www.chromethemer.com/wallpapers/chromebook-wallpapers/download/italian-beach-3840x2160.jpg)")
        $(".everything").css("opacity", ".65")
        $(".everything").css("top", "-100px")
        $("#dragon6").css("display", "none")
        directText.text("Congrats, you made it out alive!!!")  
        targetNumText.text("Yay!")
        crystalNum1 = 0
        crystalNum2 = 0
        crystalNum3 = 0
        crystalNum4 = 0
        score=0
      } 
    },




    // if user is over target number this function will carry out
    //losses go up by one with lossesText
    //if losses equals 5 direction text will explain game is over, crystal values will be zero and score is 0 to break game, and new background will show
    //if losses does not equal 5 direction text will tell user to try again
    //if losses != 5  crystal values, user score and target numbers will reset
    lose: function(){
        losses+= 1
        lossesText.text("Losses: " + losses)
        if(losses === 5){
            directText.text("The dragons were merciful for a time, but they want to brunch now!")
            $(".everything").css("background-image", "url(https://media.istockphoto.com/photos/colored-paint-drops-red-picture-id931008770?k=6&m=931008770&s=612x612&w=0&h=R9WOXnQjqbmt7zhfwJIE4RDqqArmw_A-P6w4DhsJQLk=)")
            $(".everything").css("opacity", "1")
            score=0
            targetNumText.text("Noo!")
            crystalNum1 = 0
            crystalNum2 = 0
            crystalNum3 = 0
            crystalNum4 = 0
        }else{
          directText.text("Oh noooo! Don't worry the dragon is merciful, try again.")
          this.reset()
        }
    },




    //this function will reset all values unless the direction text tells user they won
    reset: function(){
        if(directText.text === "Congrats, you made it out alive!!!"){
            return;
        }else{
        score=0
        scoreText.text(score)
        targetNum = (Math.floor(Math.random()*120)+19)
        targetNumText.text(targetNum)
        crystalNum1 = (Math.floor(Math.random()*12)+1)
        crystalNumArray.push(crystalNum1)
        crystalNum2 = (Math.floor(Math.random()*12)+1)
        crystalNumArray.push(crystalNum2)
        crystalNum3 = (Math.floor(Math.random()*12)+1)
        crystalNumArray.push(crystalNum3)
        crystalNum4 = (Math.floor(Math.random()*12)+1)
        crystalNumArray.push(crystalNum4)
        crystalMin= Math.min(...crystalNumArray)
        }
    },




    //this function will change the direction text when a crystal is clicked
    resetDirect: function(){
        if(directText.text() === "Oh noooo! Don't worry the dragon is merciful, try again."){
            directText.text("Click a crystal!")
        } else if(directText.text() === "Yay! The dragon let you pass, but there's another!"){
            directText.text("Click a crystal!")
        }
    },



}
    


$(document).ready(function(){
    
  //initializing target number and crystal values
  //crystal values put in an array to find crystal minimum value for winOrLose function  
  targetNum = (Math.floor(Math.random()*120)+19)
  targetNumText.text(targetNum)
  crystalNum1 = (Math.floor(Math.random()*12)+1)
  crystalNumArray.push(crystalNum1)
  crystalNum2 = (Math.floor(Math.random()*12)+1)
  crystalNumArray.push(crystalNum2)
  crystalNum3 = (Math.floor(Math.random()*12)+1)
  crystalNumArray.push(crystalNum3)
  crystalNum4 = (Math.floor(Math.random()*12)+1)
  crystalNumArray.push(crystalNum4)
  crystalMin= Math.min(...crystalNumArray)


//each crystal button will be taken to game functions
//user score will add each crystal value when clicked
$("#crys1").on("click", function(){
    game.resetDirect()
    score += crystalNum1
    scoreText.text(score)
    game.winOrLose()
})

$("#crys2").on("click", function(){
    game.resetDirect()
    score += crystalNum2
    scoreText.text(score) 
    game.winOrLose()
 
})

$("#crys3").on("click", function(){
    game.resetDirect()
    score += crystalNum3
    scoreText.text(score) 
    game.winOrLose()
})

$("#crys4").on("click", function(){
    game.resetDirect()
    score += crystalNum4
    scoreText.text(score) 
    game.winOrLose()
})




})
