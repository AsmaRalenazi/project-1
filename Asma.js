


let x= true; // true means X turn
insert =(id)=>{
    let p= document.getElementById(id)
    if ( x && p.innerHTML=="" ){
        p.innerHTML="X"
        x=!x
    }else if (!x && p.innerHTML==""){

        p.innerHTML="O"
         x=!x
    }
    checkWinner()
}

reset=(A,B,C)=>{
    document.getElementById('A'+A).style.color='#000';
    document.getElementById('A'+B).style.color='#000';
    document.getElementById('A'+C).style.color='#000';
}
setTimeout =(function(){
location.reload();
,2000)

}


let sequares=[];
checkWinner =()=>{
    for(let i=0; i<9 ;i++){
     sequares[i]=document.getElementById('A'+i).innerHTML;
    }

//check horizontal
if ( sequares[1]==sequares[2] && sequares[2]==sequares[3]&&sequares[1]!="" ){
    alert ("player "+sequares[1]+" Wins the game")
}
if ( sequares[4]==sequares[5] && sequares[5]==sequares[6]&&sequares[4]!="" ){
    alert ("player "+sequares[4]+" Wins the game")
}
if ( sequares[7]==sequares[8] && sequares[8]==sequares[9]&&sequares[7]!="" ){
    alert ("player "+sequares[7]+" Wins the game")
}
//check vertical
if ( sequares[1]==sequares[4] && sequares[4]==sequares[7]&&sequares[1]!="" ){
    alert ("player "+sequares[1]+" Wins the game")
}
if ( sequares[2]==sequares[5] && sequares[5]==sequares[8]&&sequares[2]!="" ){
    alert ("player "+sequares[2]+" Wins the game")
}
if ( sequares[3]==sequares[6] && sequares[6]==sequares[9]&&sequares[3]!="" ){
    alert ("player "+sequares[3]+" Wins the game")
}

//check diagonal 
if ( sequares[1]==sequares[5] && sequares[5]==sequares[9]&&sequares[1]!="" ){
    alert ("player "+sequares[1]+" Wins the game")
}
if ( sequares[3]==sequares[5] && sequares[5]==sequares[7]&&sequares[3]!="" ){
    alert ("player "+sequares[3]+" Wins the game")
}
}
