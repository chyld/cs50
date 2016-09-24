const crypt = require('unix-crypt-td-js');
const hash = process.argv[2];
const salt = hash.slice(0, 2);

function findIt(){
  for(let a = 0; a < 26; a++){
    for(let b = 0; b < 26; b++){
      for(let c = 0; c < 26; c++){
        for(let d = 0; d < 26; d++){
          const plain = String.fromCharCode(97 + a) + String.fromCharCode(97 + b) + String.fromCharCode(97 + c) + String.fromCharCode(97 + d);
          const cipher = crypt(plain, salt);
          if(cipher === hash){
            return plain;
          }
        }
      }
    }
  }
}

const found = findIt();
console.log(hash, salt, found);
