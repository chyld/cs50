const plaintext = process.argv[2];
const key = parseInt(process.argv[3]);
const hash = {};

Array.apply(null, Array(26)).forEach((_, i) => {
  const original = String.fromCharCode(65 + i);
  const shifted = String.fromCharCode(65 + ((i + key) % 26));
  hash[original] = shifted;
});

const ciphertext = plaintext.split('').map(l => hash[l] || l).join('');

console.log(plaintext, key, hash, ciphertext);
