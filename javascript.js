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

