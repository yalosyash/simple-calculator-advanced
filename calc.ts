function calc(example: string): number {
  if (example.search(/[^1-9() +-\/*]/g) !== -1) {
    throw new Error("Некорректное значение");
  }

  const changeExample: string = example.replaceAll(",", ".").replaceAll(" ", "");

  const separateStrToArr = (str: string): string[] => {
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

  const separatedArr: string[] = separateStrToArr(changeExample);

  const bracketsIsMatch = (arr: string[]): boolean => {
    // const countOfBrackets = (bracket: string): number => arr.filter((el) => el === bracket).length
    // return countOfBrackets('(') === countOfBrackets(')');
    let bracketsCount: number = 0;
    for (const el of arr) {
      if(el === '('){
        bracketsCount++;
      } else if(el === ')'){
        bracketsCount--;
      } 
      if(bracketsCount < 0){
        return false;
      }
    }
    return bracketsCount === 0;
  }

  if(!bracketsIsMatch(separatedArr)){
    throw new Error('Лишние скобки')
  }
  // const findAction = (arr: string[]): number => {
  //   const indexElement = (char: string): number => arr.findIndex((el) => el === char)
  //   if(indexElement(')')){
      //TODO синтаксический анализатор
  //   }
  // }

  console.log(separatedArr);
  console.log();
  return 0;
}

console.log(calc("2,2 * (5 - (1 + 5.2) / 6,1)")); // 8
// console.log(calc("363636+484884*362662-744774/2626626+(252662-47773*(362662+466363))-277373*(3737-27272)")); //142772579735.71646