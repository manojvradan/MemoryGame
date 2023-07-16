buttonColors = ["red","blue","green","yellow"];
var Stack = [];
var userClickedPattern = [];
var level = 0;
var start = false;
var i = 0;
var statuss = true;

$(document).keypress(function() {
    if(!start){
    $("h1").text("Level " + level);
    newSequence();
    start = true;
    } 
})


$('.btn').click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(i) {

        if ((Stack[i]) === (userClickedPattern[i])){
            console.log("correct"); 
            if ((Stack.length) === (userClickedPattern.length)){
                setTimeout(function(){
                    newSequence();},500);
            for (var x=0;x<100;x++){
                userClickedPattern.pop();
                }
            } 
        }

        else {
            playSound("wrong");
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");},200);
            $("h1").text("Game Over. Press Any Key To Try Again");
            $(document).keypress(function() {
                level = 0;
                $("h1").text("Level " + level);
                newSequence();
            })
        } 
    };

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $('#' + currentColour).addClass("pressed");
    setTimeout(function() {
        $('#' + currentColour).removeClass("pressed");
    },100);
}

function newSequence() {
    level += 1;
    $("h1").text("Level " + level);
    var c = Math.random() * 3;
    var d = Math.round(c);
    var color = buttonColors[d];
    Stack.push(color);
    console.log(Stack);
    playSound(color);
    $("#" + color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}



