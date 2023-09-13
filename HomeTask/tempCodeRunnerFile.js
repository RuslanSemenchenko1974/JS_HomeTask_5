const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

var EnRu = {};

for (var i = 0, l = en.length; i < l; i++) {
    var key = en[i];
    var val = ru[i];
    EnRu[key] = val;
}
console.log(EnRu);

const newArr = en.reduce((acc, el, i) => {
    acc[el] = ru[i];
    return acc;
},{});

console.log(newArr);