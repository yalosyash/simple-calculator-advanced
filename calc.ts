function calc(example: string): number {
  if (example.search(/[^1-9() +-\/*]/g) !== -1) {
    throw new Error("Некорректное значение");
  }

  let changeExample: string = example.replaceAll(",", ".").replaceAll(" ", "");

  const strToArr = (str: string): string[] => {
    let arr: string[] = [];
    let listOfSeparatorSymbols: string[] = ["(", ")", "*", "/", "-", "+"];
    let currentElement: string = "";

    for (let i: number = 0; i < str.length; i++) {
      if (listOfSeparatorSymbols.includes(str[i])) {
        if (currentElement !== "") {
          arr.push(currentElement);
        }
        arr.push(str[i]);
        currentElement = "";
      } else {
        currentElement += str[i];
      }
    }
    return arr;
  };

  let arrExample: string[] = strToArr(changeExample);

  console.log(arrExample);
  return 0;
}

console.log(calc("2,2 * (5 - (1 + 5.2) / 6,1)")); // 8
// console.log(calc("363636+484884*362662-744774/2626626+(252662-47773*(362662+466363))-277373*(3737-27272)")); //142772579735.71646
// a+b*c-d/e+(f-g*(j+k))-i*(x-z)
// 363636+484884*362662-744774/2626626+(252662-47773*(362662+466363))-277373*(3737-27272)
