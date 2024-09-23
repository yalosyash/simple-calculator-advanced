function calc(example: string): number {
  if (example.search(/[^1-9() +-\/*]/g) !== -1) {
    console.log();
    throw new Error("Некорректное значение");
  }

  let strExample: string = example.replace(',', '.').replaceAll(' ', '');



  console.log(strExample);
  return 0;
}

console.log(calc("2,2 * (5 - (1 + 5) / 6)")); // 8
// a+b*c-d/e+(f-g*(j+k))-i*(x-z)
// 363636+484884*362662-744774/2626626+(252662-47773*(362662+466363))-277373*(3737-27272)