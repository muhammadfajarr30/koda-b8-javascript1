//membuat program untuk memunculkan string "Koda" ketika mengakses bjek we.are.the.best
const we = {
  are: {
    the: {
      best: "Koda",
    },
  },
};
console.log(we.are.the.best);

//membuat program untuk memunculkan string "Hello World" ketika mengakses objek hello.world
const hello = {
  world: "Hello World",
};
console.log(hello.world);

//membuat program untuk memunculkan string "Tech Academy" ketika mengakses obj.str[3][1][2].man[0].tech.academy
const obj = {
  str: [1, 2, 3, [1, [1, 2, { man: [{ tech: { academy: "Tech Academy" } }] }]]],
};
console.log(obj.str[3][1][2].man[0].tech.academy);
//membuat program untuk memunculkan string "Apple" ketika mengakses array my[0].favourite[3].fruit.is
const my = [{ favourite: [0, 1, 2, { fruit: { is: "apple" } }] }];
console.log(my[0].favourite[3].fruit.is);

//memunculkan number 32 ketika kalkulasi num.first[1]+num.second[2]
const num = { first: [0, 16], second: [0, 1, 16] };
console.log(num.first[1] + num.second[2]);
