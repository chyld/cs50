const plaintext = process.argv[2];
const key = process.argv[3];

const ciphertext = [...plaintext].map((c, i) => {
  const offset = key[i % key.length].charCodeAt() % 65;
  const position = 65 + ((c.charCodeAt() + offset) % 65);
  return String.fromCharCode(position);
}).join('');

console.log(plaintext, key, ciphertext);
