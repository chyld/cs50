// @flow

const height = parseInt(process.argv[2]);

function makeArray(size){
  return Array.apply(null, Array(size));
}

makeArray(height).forEach((_, i) => {
  const hashes = makeArray(i + 1).map(_ => '#').join('');
  const spaces = makeArray(height - i + 1).map(_ => ' ').join('');

  const left = spaces + hashes;
  const space = '  ';
  const right = hashes;
  const line = left + space + right;

  console.log(line);
});
