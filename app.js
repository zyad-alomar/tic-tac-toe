function board(){
   this.resault = function(array){
     let Board = [...array];


    if(Board[0] == Board[1] && Board[1] == Board[2] && Board[2] != 0){//[1,2,3,4,5,6,7,8,9]
      return Board[0];
    }  
   else if(Board[3] == Board[4] && Board[4] == Board[5] && Board[5] != 0){
     return Board[3];
   }
   else if(Board[6] == Board[7] && Board[7] == Board[8] && Board[8] != 0){
     return Board[6];
   }
   else if(Board[0] == Board[3] && Board[3] == Board[6] && Board[6] != 0){
     return Board[0];
   }
   else if(Board[1] == Board[4] && Board[4] == Board[7] && Board[7] != 0){
     return Board[1];
   }
  else if(Board[2] == Board[5] && Board[5]== Board[8] && Board[8] != 0){
     return Board[2];
   }
  else if(Board[0] == Board[4] && Board[4]== Board[8] && Board[8] != 0){
     return Board[0];
   }
  else if(Board[2] == Board[4] && Board[4]== Board[6] && Board[6] != 0){
     return Board[2];
   }
  else if(Board.length == 9 && !Board.includes(0)){
    return "draw";
  }
     else if(Board.length == 9 && Board.includes(0)){
       return "game is still going";
     }
   }
}
let controller = new board();

function players(type,name){
  this.type = type;
  this.name = name;
}

let sqr = document.querySelectorAll("#sqr");
let what = 0;
let array = [0,0,0,0,0,0,0,0,0];
let resault = 0;
let session = 0;
sqr.forEach((sqr)=>{
  
 sqr.addEventListener("click",()=>{
    if(sqr.textContent != "X" && sqr.textContent != "O"){
     what +=1;
     if(what % 2 == 0){
        sqr.textContent = "O";
        array[sqr.dataset.index] = "O";
     }
     else{array[sqr.dataset.index] = "X"; sqr.textContent = "X";}
    }
    console.log(array);
    if(what>4){
        resault = controller.resault(array);
    } 
    if(resault == "X"){
         displayResault(resault);
         array = [0,0,0,0,0,0,0,0,0];
         what = 0;
         resault = 0;
    } 
    else if(resault == "O"){
        displayResault(resault);
        array = [0,0,0,0,0,0,0,0,0];
        what = 0;
        resault = 0;
    }  

    else if(resault == "draw"){
       displayResault(resault);
       array = [0,0,0,0,0,0,0,0,0];
       what = 0;
       resault = 0;
    }
   
 });
});
let displayer = document.querySelector(".displayer");
function displayResault(resault){
    resault == "draw"?displayer.textContent = "Its a Draw !" :
    displayer.textContent = `${resault} has won !`;
}

let restart = document.getElementById("restart");

restart.addEventListener("click",()=>{
   sqr.forEach((sqr)=>{
        sqr.textContent = "";
        displayer.textContent = "";
 });
 array = [0,0,0,0,0,0,0,0];
 resault = 0;
 what = 0;
});