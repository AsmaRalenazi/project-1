
// let result =[
//  'x','x','x',
//  'x','x','x',
//  'x','x','x',
// ]
// //0  1  2
// //3  4  5
// //6  7  8
// const random =Math.round(Math.random());
// let starter= random === 0?'x':'o';
// let p1v =document.getElementById('p1v')
// p1v.innerText= random === 0?'x .':'o.';
// let p2v =document.getElementById('p2v')
// p2v.innerText= random === 0?'o':'x.';

// const clickGame=()=>{
//     if(document.getElementById(index).innerHTML){
//         return;
//     }
//     document.getElementById(index).innerHTML=starter
//     result[index]=starter
//     starter=starter=== 'x'? 'o' :'x'
   
// }

// chickResult=(str)=>{
// return str.touppercase()==='xxx' ||str.touppercase() ==='ooo'
// }

// is3=(str)=>{
//     return str.length===3;
// }

// winnerResult=()=>{
// if ('xxx'=== str.touppercase()){
// return (p1v.innerText === 'x')?'player1 (x)is Winner ':'player1 (x) is Winner '
// }
// return (p2v.innerText === 'x')?'player1 (o)is Winner ':'player1 (o) is Winner '
// }

// getResult=()=>{

//     //horizontal
// let row1=result[0]+result[1]+result[2];
// let row2=result[3]+result[4]+result[5];
// let row3=result[6]+result[7]+result[8];

//   //vertical
// let col1=result[0]+result[2]+result[3];
// let col2=result[1]+result[4]+result[7];
// let col3=result[2]+result[5]+result[8];

//   //diagonal 
// let sql1=result[0]+result[4]+result[8];
// let sql2=result[2]+result[4]+result[6];


//     if(chickResult(row1)){
//         return'you win'
//     }
//     else if(chickResult(row2)){
//         return'you win'
//     } else if(chickResult(row3)){
//         return'you win'
//     }
//     else if(chickResult(clo1)){
//         return'you win'
//     }
//     else if(chickResult(clo2)){
//         return'you win'
//     }
//     else if(chickResult(sql1)){
//         return'you win'
//     }
//     else if(chickResult(sql2)){
//         return'you win'
//     }else (is3(row1)&&is3(row2) &&
//     is3(row3)&&is3(col1)&&
//     is3(col2)&&is3(col3)&&
//     is3(sql1)&&is3(sql2)
//     )
//     return "No Winner"

// }








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
    document.getElementById('A'+A).style.color='#ff0000';
    document.getElementById('A'+B).style.color='#ff0000';
    document.getElementById('A'+C).style.color='#ff0000';  
}

// setTimeout =(function(){
//     location.reload() },1000);  


let sequares=[];
checkWinner =()=>{
    for(let i=1; i<10 ;i++){
     sequares[i]=document.getElementById('A'+i).innerHTML;
    }

//check horizontal
if ( sequares[1]==sequares[2] && sequares[2]==sequares[3]&&sequares[1]!="" ){
    alert ("player "+sequares[1]+" Wins the game ツ")
    reset(1,2,3);
}
if ( sequares[4]==sequares[5] && sequares[5]==sequares[6]&&sequares[4]!="" ){
    alert ("player "+sequares[4]+" Wins the game ツ")
    reset(4,5,6);  
}
if ( sequares[7]==sequares[8] && sequares[8]==sequares[9]&&sequares[7]!="" ){
    alert ("player "+sequares[7]+" Wins the game ツ")
    reset(7,8,9);
}
//check vertical
if ( sequares[1]==sequares[4] && sequares[4]==sequares[7]&&sequares[1]!="" ){
    alert ("player "+sequares[1]+" Wins the game ツ")
    reset(1,4,7);
}
if ( sequares[2]==sequares[5] && sequares[5]==sequares[8]&&sequares[2]!="" ){
    alert ("player "+sequares[2]+" Wins the game ツ")
    reset(2,5,8); 
}
if ( sequares[3]==sequares[6] && sequares[6]==sequares[9]&&sequares[3]!="" ){
    alert ("player "+sequares[3]+" Wins the game ツ")
    reset(3,6,9);
}

//check diagonal 
if ( sequares[1]==sequares[5] && sequares[5]==sequares[9]&&sequares[1]!="" ){
    alert ("player "+sequares[1]+" Wins the game ツ")
    reset(1,5,9);
}
if ( sequares[3]==sequares[5] && sequares[5]==sequares[7]&&sequares[3]!="" ){
    alert ("player "+sequares[3]+" Wins the game ツ")
    reset(3,5,7);
}
if(sequares[1]!==''&&sequares[2]!==''&&sequares[3]!==''&&
sequares[5]!==''&&sequares[6]!==''&&sequares[7]!==''&&
sequares[8]!==''&&sequares[9]!==''){

        alert ("No Winner")
    }

}
//❤
//➶
//⤲