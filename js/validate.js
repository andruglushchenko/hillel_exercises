// ф-я для проверки ввода не менее 3х checkbox
function validateCheckbox(checkboxElements) {
    let valid = true;
    let sum = 0;
    for (let elem of checkboxElements) {
        if (elem.checked == true) {
            sum = sum + 1;
        }
    }
    if (sum < 3) {
        valid = false;
    }
    return valid
}
