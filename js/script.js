const userName = prompt("Как вас зовут?");
if (userName) {
    alert(`Здравствуйте, ${userName}! Добро пожаловать на страницу волонтёрской деятельности.`);
    console.log(`Пользователь представился: ${userName}`);
} else {
    alert("Здравствуйте, уважаемый гость!");
    console.log("Пользователь не указал имя");
}

const volunteerHours = [8, 20, 12, 4, 18, 3, 22];
console.log("Часы волонтёрской работы по неделям:", volunteerHours);

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function filterAbove(arr, threshold) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > threshold) {
            result.push(arr[i]);
        }
    }
    return result;
}

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const totalHours = calculateSum(volunteerHours);
const highLoadWeeks = filterAbove(volunteerHours, 15);
const highLoadCount = highLoadWeeks.length;
const maxHours = findMax(volunteerHours);

let lowParticipationCount = 0;
for (let i = 0; i < volunteerHours.length; i++) {
    if (volunteerHours[i] <= 5) {
        lowParticipationCount++;
    }
}

const totalWeeks = volunteerHours.length;
const lowParticipationPercent = (lowParticipationCount / totalWeeks) * 100;

if (highLoadCount > 0) {
    console.log(`Недели с высокой нагрузкой (>15 ч): ${highLoadCount}, часы: ${highLoadWeeks.join(", ")}`);
} else {
    console.log("Недель с высокой нагрузкой не обнаружено.");
}

alert(`Всего отработано ${totalHours} часов, в ${highLoadCount} неделях нагрузка была высокой.`);

console.log(`Недель с малым участием (≤5 ч): ${lowParticipationCount}`);
console.log(`Процент недель с малым участием: ${lowParticipationPercent.toFixed(2)}%`);
console.log(`Максимальное количество часов за неделю: ${maxHours}`);

if (totalHours > 50) {
    console.log("Вы настоящий герой сообщества!");
} else {
    console.log("Продолжайте в том же духе — каждая минута помощи важна!");
}