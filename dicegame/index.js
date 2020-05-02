
var randomGeneration1 = Math.random()*6+1;

var randomGeneration= Math.floor(randomGeneration1);
 
if(randomGeneration == 1)
{
    document.querySelector(".dice1 .five").classList.add("hide5");

}
else if(randomGeneration == 2)
{   
    document.querySelector(".dice1 .one").classList.add("hide1");
    document.querySelector(".dice1 .nine").classList.add("hide9");

}
else if(randomGeneration == 3)
{   
    document.querySelector(".dice1 .one").classList.add("hide1");
    document.querySelector(".dice1 .five").classList.add("hide5");
    document.querySelector(".dice1 .nine").classList.add("hide9");

}
else if(randomGeneration == 4)
{   
    document.querySelector(".dice1 .one").classList.add("hide1");
    document.querySelector(".dice1 .nine").classList.add("hide9");
    document.querySelector(".dice1 .three").classList.add("hide3");
    document.querySelector(".dice1 .seven").classList.add("hide7");
    

}
else if(randomGeneration == 5)
{   
    document.querySelector(".dice1 .one").classList.add("hide1");
    document.querySelector(".dice1 .nine").classList.add("hide9");
    document.querySelector(".dice1 .three").classList.add("hide3");
    document.querySelector(".dice1 .seven").classList.add("hide7");
    document.querySelector(".dice1 .five").classList.add("hide5");

}
else if(randomGeneration == 6)
{   
    
    document.querySelector(".dice1 .one").classList.add("hide1");
    document.querySelector(".dice1 .three").classList.add("hide3");
    document.querySelector(".dice1 .four").classList.add("hide4");
    document.querySelector(".dice1 .six").classList.add("hide6");
    document.querySelector(".dice1 .seven").classList.add("hide7");
    document.querySelector(".dice1 .nine").classList.add("hide9");
}


var randomGeneration2 = Math.random()*6+1;

var randomGeneration3= Math.floor(randomGeneration2);

if(randomGeneration3 == 1)
{
    document.querySelector(".dice2 .dfive").classList.add("dhide5");

}
else if(randomGeneration3 == 2)
{   
    document.querySelector(".dice2 .done").classList.add("dhide1");
    document.querySelector(".dice2 .dnine").classList.add("dhide9");

}
else if(randomGeneration3 == 3)
{   
    document.querySelector(".dice2 .done").classList.add("dhide1");
    document.querySelector(".dice2 .dfive").classList.add("dhide5");
    document.querySelector(".dice2 .dnine").classList.add("dhide9");

}
else if(randomGeneration3 == 4)
{   
    document.querySelector(".dice2 .done").classList.add("dhide1");
    document.querySelector(".dice2 .dnine").classList.add("dhide9");
    document.querySelector(".dice2 .dthree").classList.add("dhide3");
    document.querySelector(".dice2 .dseven").classList.add("dhide7");
    

}
else if(randomGeneration3 == 5)
{   
    document.querySelector(".dice2 .done").classList.add("dhide1");
    document.querySelector(".dice2 .dnine").classList.add("dhide9");
    document.querySelector(".dice2 .dthree").classList.add("dhide3");
    document.querySelector(".dice2 .dseven").classList.add("dhide7");
    document.querySelector(".dice2 .dfive").classList.add("dhide5");

}
else if(randomGeneration3 == 6)
{   
    
    document.querySelector(".dice2 .done").classList.add("dhide1");
    document.querySelector(".dice2 .dthree").classList.add("dhide3");
    document.querySelector(".dice2 .dfour").classList.add("dhide4");
    document.querySelector(".dice2 .dsix").classList.add("dhide6");
    document.querySelector(".dice2 .dseven").classList.add("dhide7");
    document.querySelector(".dice2 .dnine").classList.add("dhide9");
}

if(randomGeneration>randomGeneration3)
{
    document.querySelector(".win").innerHTML="player1 win this time";
}
else if(randomGeneration<randomGeneration3)
{
    document.querySelector(".win").innerHTML="player2 win this time";
}
else{
    document.querySelector(".win").innerHTML="you two got lucky this time";
}