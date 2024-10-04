[![Run Jest tests in CI](https://github.com/yalosyash/simple-calculator-advanced/actions/workflows/ci.yaml/badge.svg)](https://github.com/yalosyash/simple-calculator-advanced/actions/workflows/ci.yaml)

# Функция строкового калькулятора

Функция принимает на вход выражение типа `string`, возвращая ответ типа `number`.

Переписан и расширен [предыдущий](https://github.com/yalosyash/calculator) строковый калькулятор

**Пример работы:**
```
calc("2,2 * (5 - (1 + 5.2) / 6,1)"); // 8.76393442622951
calc("(5.5 + 15.2) - 0,7"); // 20
calc("4 + 42 / 7"); // 10
calc("4 () + 42"); // Error: Скобки расставлены неверно!
calc("4 ( + 42"); // Error: Скобки расставлены неверно!
calc("fgj"); // Error: Некорректное значение!
```


- Для запуска тестов функции выполнить команду `npm run coverage`
- Для запуска тестов функции в режиме автоматического перезапуска после изменений кода выполнить команду `npx jest --watch`
- Для просмотра покрытия кода тестами открыть `coverage\lcov-report\index.html`