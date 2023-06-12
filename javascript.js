// Задача 1

// На терминала клиентът трябва да въведе серийния номер на своята карта. Това е цяло число, което има скрито значение. (Внимание: Това число си го измисляте вие и не го получавате от никъде. Просто, за да е по-интересна историята си представете, че са ви го дали преди да го въведете).

//     Ако номерът съдържа повече от 2 цифри - гражданинът е от тип POOR
//     Ако клиентският номер съдържа повече от 6 цифри, то гласуващият е RICH
//     Ако съдържа 6 цифри, то значи е NORMAL

const POOR_VOTER_COEFFICIENT = 999;
const RICH_VOTER_COEFFICIENT = 1000000;
const NORMAL_VOTER_LOWER_COEFFICIENT = 100000;
const NORMAL_VOTER_UPPER_COEFFICIENT = 999999;


const voterCardNumber = prompt(`Hello, voter! Please, enter our card number`);

const IsCustomerPoor = (voterCardNumber >= POOR_VOTER_COEFFICIENT) && (voterCardNumber < NORMAL_VOTER_LOWER_COEFFICIENT);
const IsCustomerRich = voterCardNumber >= RICH_VOTER_COEFFICIENT;
const IsCustomerNormal = (voterCardNumber >= NORMAL_VOTER_LOWER_COEFFICIENT) && (voterCardNumber <= NORMAL_VOTER_UPPER_COEFFICIENT);

// Задача 2

// След въвеждане на номера системата трябва да изведе съобщение в зависимост от типа на гласоподавателя. Съобщението можете да видите в таблицата.
// Тип гласоподавател 	Окуражаващо съобщение
// POOR 	Хайде по-бързо и да те няма
// RICH 	Има за нас, има и за вас
// NORMAL 	Радваме се, че нормални хора вече гласуват

if (IsCustomerPoor) {
    console.log(`Хайде бързо да те няма!`);
}

if (IsCustomerRich) {
    console.log(`Има за нас, има и за вас.`);
}

if (IsCustomerNormal) {
    console.log(`Радваме се, че нормални хора вече гласуват.`);
}

