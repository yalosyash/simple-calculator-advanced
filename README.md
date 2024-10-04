[![Run Jest tests in CI](https://github.com/yalosyash/simple-calculator-advanced/actions/workflows/ci.yaml/badge.svg)](https://github.com/yalosyash/simple-calculator-advanced/actions/workflows/ci.yaml)

# Функция строкового калькулятора

Функция принимает на вход выражение типа `string`, возвращая ответ типа `number`

Код функции покрыт 35-ю [тестами](https://github.com/yalosyash/simple-calculator-advanced/blob/main/test/calc.test.ts) на 100% с использованием фреймворка [**Jest**](https://jestjs.io/ru/)

Переписан и расширен [предыдущий](https://github.com/yalosyash/calculator) строковый калькулятор с одним оператором

## Запуск тестов

1. Установить необходимые пакеты для запуска тестов командой `npm ci`
2. Запустить тесты  командой `npm run coverage`
3. Для просмотра покрытия кода тестами открыть `coverage\lcov-report\index.html`

Для включения режима автоматического перезапуска тестов после изменений в коде - выполнить команду `npx jest --watch`

## Пример работы функции:
```
calc("2,2 * (5 - (1 + 5.2) / 6,1)"); // 8.76393442622951
calc("(5.5 + 15.2) - 0,7"); // 20
calc("4 + 42 / 7"); // 10
calc("4 () + 42"); // Error: Скобки расставлены неверно!
calc("4 ( + 42"); // Error: Скобки расставлены неверно!
calc("fgj"); // Error: Некорректное значение!
```