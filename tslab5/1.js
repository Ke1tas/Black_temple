function getCurrentDate() {
    console.log(Date.now());
}
getCurrentDate();
window.onload = function () {
    setTimeout(getCurrentDate, 10000);
};
function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(`Текущий счетчик: ${count}`);
    };
}
const counter = createCounter();
counter();
counter();
counter();
