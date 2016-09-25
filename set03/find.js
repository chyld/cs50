const needle = parseInt(process.argv[2]);

let nums = Array.apply(null, Array(10)).map(n => {
  return Math.floor(Math.random() * 10);
});

console.log('needle:', needle, 'pre:', nums, 'post:', sort(nums), 'found:', search(needle, sort(nums)));

function search(needle, haystack){
  if(!haystack.length){
    return false;
  }

  if(haystack.length === 1){
    return needle === haystack[0];
  }

  const half = Math.floor(haystack.length / 2);

  if(haystack[half] === needle){
    return true;
  }

  if(haystack[half] > needle){
    return search(needle, haystack.slice(0, half));
  }else{
    return search(needle, haystack.slice(half));
  }
}

function sort(list){
  if(list.length < 2){
    return list;
  }else{
    const half = Math.floor(list.length / 2);
    const left = list.slice(0, half);
    const right = list.slice(half);

    const l1 = sort(left);
    const l2 = sort(right);
    return merge(l1, l2);
  }
}

function merge(l1, l2){
  let temp = [];
  while(true){
    if(!l1.length || !l2.length){
      return [...temp, ...l1, ...l2];
    }
    if(l1[0] < l2[0]){
      temp.push(l1.shift());
    }else{
      temp.push(l2.shift());
    }
  }
}
