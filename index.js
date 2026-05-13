// Menghitung Luas dan Keliling Lingkaran

const r = 21;
let phi;

if (typeof r !== "number") {
  console.log("r must a number!");
  return;
}

if (r % 7 == 0) {
  phi = 22 / 7;
} else {
  phi = 3.14;
}

const luasLingkaran = phi * r * r;
const kelilingLingkaran = 2 * phi * r;

console.log(luasLingkaran);
console.log(kelilingLingkaran);
