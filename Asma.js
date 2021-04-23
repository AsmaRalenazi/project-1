
let x= true; // true means X turn
const insert =(id)=>{
    let p= document.getElementById(id)
    if ( x && p.innerHTML=="" ){
        p.innerHTML="X"
        x=!x
    }else if (!x && p.innerHTML==""){

        p.innerHTML="O"
         x=!x
    }
    return id;
}
