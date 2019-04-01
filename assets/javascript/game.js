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



$("#instruct").on("click", function(){
   $(".content").css("display", "block") 
})
$("#closeInstruct").on("click", function(){
    $(".content").css("display", "none") 
 })
 





//game functions

var game={

    winOrLose: function(){
        if(score === targetNum){
            this.won()
        }else if(score>= targetNum|| (targetNum-score) < crystalMin){
            this.lose()
        }
    },

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
    }  else if(backgroundImage === 2){
        $(".everything").css("background-image", "url(https://static.turbosquid.com/Preview/2016/09/17__16_07_56/CrystalCavern1.jpg5BD427A7-8D9B-4F8E-92E7-D81B7D7407DFOriginal.jpg)")
        $(".everything").css("opacity", ".65")
        $("#dragon1").css("display", "none")
        $("#dragon2").css("display", "block")
    } else  if(backgroundImage === 3){
        $(".everything").css("background-image", "url(https://irp-cdn.multiscreensite.com/31cb13a1/dms3rep/multi/tablet/FormationsRoom-3400x2550.jpg)")
        $(".everything").css("opacity", ".65")
        $("#dragon2").css("display", "none")
        $("#dragon4").css("display", "block")
    }  else if(backgroundImage === 4){
        $(".everything").css("background-image", "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlFbZ9SLSbmy5DNxZcDrhq_otjSUgUlY85m1t9DzWYY6hq4L0j)")
        $(".everything").css("opacity", ".65")
        $("#dragon4").css("display", "none")
        $("#dragon5").css("display", "block")
    }   else if(backgroundImage === 5){
        $(".everything").css("background-image", "url(https://cdn1.img.sputniknews.com/images/105728/33/1057283307.jpg)")
        $(".everything").css("opacity", ".65")
        $(".everything").css("top", "-100px")
        $("#dragon5").css("display", "none")
        $("#dragon6").css("display", "block")
    }else{
        $(".everything").css("background-image", "url(https://www.chromethemer.com/wallpapers/chromebook-wallpapers/download/italian-beach-3840x2160.jpg)")
        $(".everything").css("opacity", ".65")
        $(".everything").css("top", "-100px")
        $("#dragon6").css("display", "none")
        directText.text("Congrats, you made it out alive!!!")
        
    }
       this.reset()
    },

    lose: function(){
        losses+= 1
        lossesText.text("Losses: " + losses)
        if(losses === 5){
            directText.text("The dragons were merciful for a time, but they want to brunch now!")
            $(".everything").css("background-image", "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZ8GMZfdwgzJtAJdyFc7EeVwypRCEoofnf4qC1u9b3mdy6_KNOw)")
            $(".everything").css("opacity", "1")
        }else{
        directText.text("Oh noooo! Don't worry the dragon is merciful, try again.")
       
        this.reset()
    }
    },

    reset: function(){
        if(directText.text === "Congrats, you made it out alive!!!"){
            return;
        } else{
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

    resetDirect: function(){
        if(directText.text()=== "Oh noooo! Don't worry the dragon is merciful, try again."){
            directText.text("Click a crystal!")
        } else if(directText.text() === "Yay! The dragon let you pass, but there's another!"){
            directText.text("Click a crystal!")
        }
    },

    endGame: function(){
        if(wins === 6){
            targetNumText.text("Yay!")
            crystalNum1 = 0
            crystalNum2 = 0
            crystalNum3 = 0
            crystalNum4 = 0
        
        }else if(losses >= 5){
            targetNumText.text("Noo!")
            crystalNum1 = 0
            crystalNum2 = 0
            crystalNum3 = 0
            crystalNum4 = 0
    }else{
        return;
    }
    }



}
    


$(document).ready(function(){
    
         

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

$("#crys1").on("click", function(){
    game.endGame()
    game.resetDirect()
    score += crystalNum1
    scoreText.text(score)
    game.winOrLose()
})
$("#crys2").on("click", function(){
    game.endGame()
    game.resetDirect()
    score += crystalNum2
    scoreText.text(score) 
    game.winOrLose()
 
})
$("#crys3").on("click", function(){
    game.endGame()
    game.resetDirect()
    score += crystalNum3
    scoreText.text(score) 
    game.winOrLose()
})
$("#crys4").on("click", function(){
    game.endGame()
    game.resetDirect()
    score += crystalNum4
    scoreText.text(score) 
    game.winOrLose()
})











})
