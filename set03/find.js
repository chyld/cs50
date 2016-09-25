const needle = parseInt(process.argv[2]);
let nums = [];

for(let i = 0; i < 10; i++){
  const num = Math.floor(Math.random() * 10);
  nums.push(num);
}

nums = [6,4,1,7,-2,1,3,3,3,-4,9,2,1,7];

const good = sort(nums, 0);
console.log('good:', good);

function sort(list, x){
  console.log('fn:', list, 'depth:', x);
  if(list.length < 2){
    return list;
  }else{
    const half = Math.floor(list.length / 2);
    const left = list.slice(0, half);
    const right = list.slice(half);

    const l1 = sort(left, x + 1);
    const l2 = sort(right, x + 1);
    return merge(l1, l2);
  }
}

function merge(l1, l2){
  const temp = [];
  while(l1.length || l2.length){
    if(l1.length && l2.length){
      if(l1[0] < l2[0]){
        temp.push(l1.shift());
      }else{
        temp.push(l2.shift());
      }
    }else if(!l2.length){
      temp.push(l1.shift());
    }else{
      temp.push(l2.shift());
    }
  }
  return temp;
}
