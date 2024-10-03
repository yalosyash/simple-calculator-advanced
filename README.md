[![Run Tests CI](https://github.com/yalosyash/simple-calculator-advanced/actions/workflows/ci.yml/badge.svg)](https://github.com/yalosyash/simple-calculator-advanced/actions/workflows/ci.yml)

# Функция строкового калькулятора

Функция принимает на вход выражение вида `string`, возвращая ответ в виде `number`.

Пример работы:
```
calc("2,2 * (5 - (1 + 5.2) / 6,1)"); // 8.76393442622951
calc("(5.5 + 15.2) - 0,7"); // 20
calc("4 + 42 / 7"); // 10
calc("3636+4848*3626-7447/2626+(2526-4777*(3626+4663))-2773*(3737-2727)"); //-24812275.83587205
calc("4 () + 42"); // Error: Скобки расставлены неверно!
calc("4 ( + 42"); // Error: Скобки расставлены неверно!
calc("fgj"); // Error: Некорректное значение
```

Переписан и расширен [предыдущий](https://github.com/yalosyash/calculator) строковый калькулятор
