class Student {
    constructor({
        name,
        surname,
        age,
        math,
        biology,
        chemistry,
        literature,
        geometry,
    }) {
        this.name = name,
            this.surname = surname,
            this.age = age,
            this.math = math,
            this.biology = biology,
            this.chemistry = chemistry,
            this.literature = literature,
            this.geometry = geometry
    }
    getFullName() {
        return `${this.name} ${this.surname} - student`;
    }
    averageMark() {
        let result = 0;
        for (let elem of markForm) {
            result = result + Number(elem.value);
        }
        result = result / markForm.length;
        return Math.floor(result)

    }

}

class Teacher extends Student {
    constructor({
        name,
        surname,
        age,
        group
    }) {
        super({
            name,
            surname,
            age
        });
        this.group = group
    }
    // массив оценок отсортированный по наивысшей средней оценке
    getListByAverageMark() {
        return this.group.sort((a, b) => b.averageMark() - a.averageMark()).map(item => {
            return ` <li> ${item.name}  ${item.surname} - средняя оценка ${item.averageMark()} </li>`;
        })
    }
    // добавить студента в группу
    addStudentToGroup(student) {
        return this.group.push(student);
    }
}
let teacher = new Teacher({
    name: "Vitalij",
    surname: "Kutuzov",
    age: 55,
    group: [],
});


let addStudent = document.querySelector('#addStudent');
let updateList = document.querySelector('#update');
let errorSpan = document.createElement('span');
errorSpan.classList.add('massage');
let markForm = document.querySelectorAll('.mark');

// кнопка 1
addStudent.onclick = function () {
    let name = document.querySelector('#student-name').value;
    let surname = document.querySelector('#student-surname').value;
    let math = document.querySelector('#math').value;
    let biology = document.querySelector('#biology').value;
    let chemistry = document.querySelector('#chemistry').value;
    let literature = document.querySelector('#literature').value;
    let geometry = document.querySelector('#geometry').value;

    let fillOutForm = document.querySelector('#fill-out-form');
    let elementsForm = fillOutForm.elements;

    // проверка на пустое поле и вывод сообщения
    if (!validateFormOnRequired(elementsForm)) {

        errorSpan.classList.add('error');
        errorSpan.textContent = 'Заполните все поля!';
        fillOutForm.append(errorSpan);
        return false;
    } else {
        errorSpan.classList.remove('error')
    }
    // проверка на величину числа и вывод сообщения
    if (!validateMarkForm(markForm)) {

        errorSpan.classList.add('error');
        errorSpan.textContent = 'оценка в интервале 1 до 10';
        fillOutForm.append(errorSpan);
        return false;
    } else {
        errorSpan.classList.remove('error')
    }

    let student = new Student({
        name,
        surname,
        age,
        math,
        biology,
        chemistry,
        literature,
        geometry
    })

    teacher.addStudentToGroup(student);
}
// кнопка 2
updateList.onclick = function () {
    let list = document.querySelector('#list');
    let result = teacher.getListByAverageMark().join('')
    list.innerHTML = result;
}
// ф-я для проверки пустого пля
function validateFormOnRequired(elementsForm) {
    let valid = true;
    for (let elem of elementsForm) {
        if (!elem.value.length) {
            valid = false;
            elem.classList.add('error');
            elem.classList.remove('success');
        } else {
            elem.classList.add('success');
            elem.classList.remove('error');
        }
    }
    return valid;
}
// ф-я для проверки величины оценки
function validateMarkForm(markForm) {
    let valid = true;
    for (let elem of markForm) {
        if (!(+elem.value >= 1 && +elem.value <= 10)) {
            valid = false;
            elem.classList.add('error');
            elem.classList.remove('success');
        } else {
            elem.classList.add('success');
            elem.classList.remove('error');
        }
    }
    return valid;
}