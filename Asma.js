

var turn= true; // true means X true 
insert=(id)=>{
    var b =document.getElementById(id)
    if ( turn && b.innerHTML=="" ){
        b.innerHTML="⤲"
        turn=!turn

    }else if (!turn && b.innerHTML==""){
        b.innerHTML="❤"
        turn=!turn
    }
 
    checkWinner()
}

    
reset=(A,B,C)=>{
    document.getElementById('A'+A).style.color='#791616';
    document.getElementById('A'+B).style.color='#791616';
    document.getElementById('A'+C).style.color='#791616';  
}


let sequares=[];
checkWinner =()=>{
    for(let i=1; i<10 ;i++){
     sequares[i]=document.getElementById('A'+i).innerHTML;
    }

//check horizontal
if ( sequares[1]==sequares[2] && sequares[2]==sequares[3]&&sequares[1]!="" ){
    alert ("player "+sequares[1]+" Wins the game ツ")
    reset(1,2,3);
    return
}
if ( sequares[4]==sequares[5] && sequares[5]==sequares[6]&&sequares[4]!="" ){
    alert ("player "+sequares[4]+" Wins the game ツ")
    reset(4,5,6); 
    return 
}
if ( sequares[7]==sequares[8] && sequares[8]==sequares[9]&&sequares[7]!="" ){
    alert ("player "+sequares[7]+" Wins the game ツ")
    reset(7,8,9);
    return
}
//check vertical
if ( sequares[1]==sequares[4] && sequares[4]==sequares[7]&&sequares[1]!="" ){
    alert ("player "+sequares[1]+" Wins the game ツ")
    reset(1,4,7);
    return
}
if ( sequares[2]==sequares[5] && sequares[5]==sequares[8]&&sequares[2]!="" ){
    alert ("player "+sequares[2]+" Wins the game ツ")
    reset(2,5,8); 
    return
}
if ( sequares[3]==sequares[6] && sequares[6]==sequares[9]&&sequares[3]!="" ){
    alert ("player "+sequares[3]+" Wins the game ツ")
    reset(3,6,9);
    return
}

//check diagonal 
if ( sequares[1]==sequares[5] && sequares[5]==sequares[9]&&sequares[1]!="" ){
    alert ("player "+sequares[1]+" Wins the game ツ")
    reset(1,5,9);
    return
}
if ( sequares[3]==sequares[5] && sequares[5]==sequares[7]&&sequares[3]!="" ){
    alert ("player "+sequares[3]+" Wins the game ツ")
    reset(3,5,7);
    return
}
if(sequares[1]!==''&&sequares[2]!==''&&sequares[3]!==''&&
sequares[5]!==''&&sequares[6]!==''&&sequares[7]!==''&&
sequares[8]!==''&&sequares[9]!==''){
    return    alert ("No Winner")
    }



}
