// Задача 1

// На терминала клиентът трябва да въведе серийния номер на своята карта. Това е цяло число, което има скрито значение. (Внимание: Това число си го измисляте вие и не го получавате от никъде. Просто, за да е по-интересна историята си представете, че са ви го дали преди да го въведете).

//     Ако номерът съдържа повече от 2 цифри - гражданинът е от тип POOR
//     Ако клиентският номер съдържа повече от 6 цифри, то гласуващият е RICH
//     Ако съдържа 6 цифри, то значи е NORMAL

const POOR_VOTER_COEFFICIENT = 100;
const RICH_VOTER_COEFFICIENT = 1000000;
const NORMAL_VOTER_LOWER_COEFFICIENT = 100000;
const NORMAL_VOTER_UPPER_COEFFICIENT = 999999;
const TAX_FRAUD_PROMPT_ELIGIBILITY = 3;

const voterCardNumber = prompt(`Здраво, гласачи! Ве молиме внесете го бројот на вашата картичка!`);

const IsVoterPoor = (voterCardNumber >= POOR_VOTER_COEFFICIENT) && (voterCardNumber < NORMAL_VOTER_LOWER_COEFFICIENT);
const IsVoterRich = voterCardNumber >= RICH_VOTER_COEFFICIENT;
const IsVoterNormal = (voterCardNumber >= NORMAL_VOTER_LOWER_COEFFICIENT) && (voterCardNumber <= NORMAL_VOTER_UPPER_COEFFICIENT);

// Задача 2

// След въвеждане на номера системата трябва да изведе съобщение в зависимост от типа на гласоподавателя. Съобщението можете да видите в таблицата.
// Тип гласоподавател 	Окуражаващо съобщение
// POOR 	Хайде по-бързо и да те няма
// RICH 	Има за нас, има и за вас
// NORMAL 	Радваме се, че нормални хора вече гласуват

if (IsVoterPoor) {
    console.log(`Ајде брзо да те тргнеме!`);
}

if (IsVoterRich) {
    console.log(`Има за нас, има и за вас.`);
}

if (IsVoterNormal) {
    console.log(`Драго ни е што сега гласаат нормалните луѓе.`);
}

// Задача 3
// Всички гласували, чиито номера завършват на четно число, са VIP гласували, а останалите са обикновени такива.

//     Пример: 105468 е четно число и клиентът е VIP
//     Пример: 115485 е нечетно число и клиентът няма специални правомощия

const IsVoterVIP = ((voterCardNumber % 2) == 0);

// Задача 4

// Ако предпоследната цифра на номера на гласувалия е число по-голямо от 3, то веднага след успешно гласуване той трябва да бъде попитан, дали укрива данъци:

//     ако отговорът е положителен - изведете съобщението “Браво моето момче”
//     в противен случай изведете съобщението “Будала”

const IsVoterEligibleForATaxFraudPrompt = (parseInt((voterCardNumber % 100) / 10)) > TAX_FRAUD_PROMPT_ELIGIBILITY;

if (IsVoterEligibleForATaxFraudPrompt) {
    console.log(`Браво, моето момче!`);
} else console.log(`Будала.`);

