let chicoHeight = 150;
let zeHeight = 110;
const chicoGrowthRate = 2;
const zeGrowthRate = 3;
let years = 0;

while (chicoHeight >= zeHeight) {
  years++;
  chicoHeight += chicoGrowthRate;
  zeHeight += zeGrowthRate;
}

console.log(`It will take ${years} years to Zé become taller than Chico!`);
