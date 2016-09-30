const hexy = require('hexy').hexy;
const fs = require('fs');

var data = fs.readFileSync('clue.bmp');

for(let i = 54; i < data.length; i += 3){
  if(data[i + 0] === 255){
    data[i + 0] = 0x22;     // blue
  }

  if(data[i + 1] === 255){
    data[i + 1] = 0x99;     // green
  }

  if(data[i + 2] === 255){
    data[i + 2] = 0x33;     // red
  }
}

fs.writeFileSync('new.bmp', data);
