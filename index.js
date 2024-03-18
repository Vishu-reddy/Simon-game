let arr=[];
let pr=[];
let but=["green","red","yellow","blue"];
var start=true;
var i=0;

$(document).on("keypress",function(){
    if(start){
        nextsequence();
        start=false;
    }
});
function nextsequence(){
    arr=[];
    $("h1").text("Level"+" "+i);
    
    let r=Math.floor((Math.random()*4)); 
    pr.push(but[r]);

    i++;
    switch(r){
        case 0:
            $("#green").fadeOut().fadeIn();
            let a=new Audio("./sounds/green.mp3");
            a.play();
            break;
        case 1:
            $("#red").fadeOut().fadeIn();
            let b=new Audio("./sounds/red.mp3");
            b.play();
            break;
        case 2:
            $("#yellow").fadeOut().fadeIn();
            let c=new Audio("./sounds/yellow.mp3");
            c.play();
            break;
        case 3:
            $("#blue").fadeOut().fadeIn();
            let d=new Audio("./sounds/blue.mp3");
            d.play();
            break;
    }

}
$(".btn").click(function(){
    var cl=$(this).attr("id");
    arr.push(cl);
    console.log(arr);
    playSound(cl);
    animatePress(cl);
    checkAnswer(arr.length-1);
    
});
function playSound(name){
    switch(name){
        case "green":
            // $("#green").fadeOut().fadeIn();
            let a=new Audio("./sounds/green.mp3");
            a.play();

            break;
        case "red":
            // $("#red").fadeOut().fadeIn();
            let b=new Audio("./sounds/red.mp3");
            b.play();

            break;
        case "yellow":
            // $("#yellow").fadeOut().fadeIn();
            let c=new Audio("./sounds/yellow.mp3");
            c.play();

            break;
        case "blue":
            // $("#blue").fadeOut().fadeIn();
            let d=new Audio("./sounds/blue.mp3");
            d.play();

            break;
        default:
            let e=new Audio("./sounds/wrong.mp3");
            e.play();
            break;
    }
}
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}
function checkAnswer(currentLevel){
    if(pr[currentLevel]===arr[currentLevel]){
        if(arr.length===pr.length){
            console.log("sucess"); 
            setTimeout(function(){
                nextsequence();
            },1000); 
        }
    }
    else{
        let e=new Audio("./sounds/wrong.mp3");
        e.play();
        arr=[];
        $("h1").text("Game over,press any key to restart");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },1000);
        startover();        
    }

}
function startover(){
    pr=[];
    i=0;
    start=true;
}