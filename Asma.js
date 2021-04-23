


let x= true; // true means X turn
let sequares=[];
const insert =(id)=>{
    let p= document.getElementById(id)
    if ( x && p.innerHTML=="" ){
        p.innerHTML="X"
        x=!x
    }else if (!x && p.innerHTML==""){

        p.innerHTML="O"
         x=!x
    }
}
const checkWinner =()=>{
    for(let i=0; i<9 ;i++){
     sequares[i]=document.getElementById('A'+i).innerHTML;
    }
}
if ( sequares[1]==sequares[2] && sequares[2]==sequares[3]&&sequares[1]!="" ){
    alert ("player "+sequares[1]+" Wins the game ")
}

