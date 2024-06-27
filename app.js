
document.addEventListener('DOMContentLoaded',()=>{
    const board = document.querySelector('#board');
    const playerDisplay = document.querySelector('.playerDisplay');
    playerDisplay.innerHTML ="X";
    playerDisplay.classList.add('X');
    let sameRow = false;
    let sameCol = false;
    let diagonal = false;
   
   function findWinner(grid){
   
    let row = grid.dataset.row;
    let col = grid.dataset.col;
    for(let i=0;i<3;i++){
        let rowCell = document.getElementById(`cell-${row}-${i}`);
        console.log( rowCell);
         if(rowCell.innerHTML == grid.innerHTML){
          sameRow = true;
          console.log(grid.innerHTML,rowCell.innerHTML);
        
         }else{
         sameRow =false;
         break;
        }
        console.log(sameRow);

    }
    console.log(sameRow);
    for(let i=0;i<3;i++){
        let colCell = document.getElementById(`cell-${i}-${col}`);
        console.log( colCell.innerHTML);
        if(colCell.innerHTML == grid.innerHTML){
            sameCol = true;
            console.log(grid.innerHTML,colCell.innerHTML);
            
         }else{
            sameCol =false;
         }
    }
    for(let i=0;i<3;i++){
        let diagonalCell = document.getElementById(`cell-${i}-${i}`);
        console.log( diagonalCell.innerHTML);
        if(diagonalCell.innerHTML == grid.innerHTML){
            diagonal = true;
            console.log(grid.innerHTML,diagonalCell.innerHTML);
            
         }else{
           diagonal =false;
         }
    }
//    console.log(diagonal,sameCol,sameRow)
    if(sameCol || sameRow || diagonal){
      let winner = grid.innerHTML;
      playerDisplay.innerHTML = `${winner} is declared as the winner`;
      removeAllEventListeners()

    }
   }
    
   function removeAllEventListeners() {
    const grids = document.querySelectorAll(".grid");
    grids.forEach(grid => {
        const clone = grid.cloneNode(true);
        grid.parentNode.replaceChild(clone, grid);
    });
}

    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            const grid = document.createElement('div');
            grid.id = `cell-${i}-${j}`;
            grid.dataset.row = i;
            grid.dataset.col = j;
            grid.classList.add("grid");
            if((i+j)%2 ==0){
                grid.classList.add("red");
               
            }else{
                grid.classList.add("orange");
            }

            grid.addEventListener("click",()=>{
                if(playerDisplay.classList.contains('X')){
                    grid.innerHTML ="X";
                    playerDisplay.classList.remove('X');
                    playerDisplay.innerHTML = 'O';
                    playerDisplay.classList.add('O');
                }else if(playerDisplay.classList.contains('O')){
                    grid.innerHTML ="O";
                    playerDisplay.classList.remove('O');
                    playerDisplay.innerHTML = 'X';
                    playerDisplay.classList.add('X');
                }
                findWinner(grid);
            })
            board.appendChild(grid);
        }
    }


}   )
