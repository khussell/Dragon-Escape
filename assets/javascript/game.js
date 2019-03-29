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
       this.reset()
    },

    lose: function(){
        losses+= 1
        lossesText.text("Losses: " + losses)
        if(losses)
        directText.text("Oh noooo! Don't worry the dragon is merciful, try again")

        this.reset()
    },

    reset: function(){
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
    score += crystalNum1
    scoreText.text(score)
    game.winOrLose()
})
$("#crys2").on("click", function(){
    score += crystalNum2
    scoreText.text(score) 
    game.winOrLose()
 
})
$("#crys3").on("click", function(){
    score += crystalNum3
    scoreText.text(score) 
    game.winOrLose()
})
$("#crys4").on("click", function(){
    score += crystalNum4
    scoreText.text(score) 
    game.winOrLose()
})











})
