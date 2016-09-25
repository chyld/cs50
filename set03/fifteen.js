const s = parseInt(process.argv[2]);
const board = Array.apply(null, Array(s * s))
              .map((_, i) => i).reverse()
              .reduce((a, n) => {
                if(n%s === s-1){
                  a.push([n]);
                }else{
                  a[a.length-1].push(n);
                }
                return a;
              }, []);

function display(board){
  console.log('Fifteen Board:');
  board.forEach(row => {
    console.log(row);
  });
}

function move(number, board){
  const source = find(number, board);
  const target = find(0, board);

  if((Math.abs(source.x - target.x) === 1) || (Math.abs(source.y - target.y) === 1)){
    board[source.x][source.y] = 0;
    board[target.x][target.y] = number;
  }
}

function find(number, board){
  for(let row = 0; row < board.length; row++){
    for(let col = 0; col < board[row].length; col++){
      const value = board[row][col];
      if(value === number){
        return {x: row, y: col};
      }
    }
  }
}

display(board);
move(3, board);
display(board);
move(4, board);
display(board);
move(7, board);
display(board);
