class Human {
    constructor({
        name,
        surname,
        age
    }) {
        this.name = name,
            this.surname = surname,
            this.age = age;
    }
    getFullName() {
        return `${this.name} ${this.surname}`;
    }

    setFullName(fullName) {
        fullName = fullName.split(' ');
        this.name = fullName[0];
        this.surname = fullName[1];
    }
}

class Student extends Human {
    constructor({
        name,
        surname,
        age,
        marks
    }) {
        super({
            name,
            surname,
            age
        });
        this.marks = marks;
    }

    averageMark() {
        let result
         result=this.marks.reduce((acc, curr) => (acc + curr)) / this.marks.length;
        return Math.floor(result)
    }

    minMark() {
        return Math.min(...this.marks);
    }

    maxMark() {
        return Math.max(...this.marks);
    }

    getFullName() {
        return `${this.name} ${this.surname} - student`;
    }
}

class Teacher extends Human {
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
        this.group = group;
    }
    // массив оценок отсортированный по наивысшей средней оценке
    getListByAverageMark() {
        return this.group.sort((a, b) => b.averageMark() - a.averageMark()).map(item => {
          return ` <li> ${item.name}  ${item.surname} - средняя оценка ${item.averageMark()} </li>`;
        })
      }
// массив имен студентов отсортированный по наивысшей средней оценке
   getListOfNamesByAverageMark() {
    return this.group
      .sort((a, b) => b.averageMark() - a.averageMark())
      .map((item) => item.name);
  }
// получить один объект студента по имени
    getStudentByName(name) {
        return this.group.find(item => item.name === name);
    }
// удалить объект студена, найденного по имени
    removeStudentByName(name) {
        let tempName = this.getStudentByName(name);
        return this.group.splice(this.group.indexOf(tempName), 1);
    }
// найти объект студента по name и заменить на student (новый экземпляр ФК Student)
    updateStudentByName(student, name) {
        return this.group.splice(this.group.indexOf(this.getStudentByName(name)), 1, new Student(student));
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


let addStudent = document.getElementById('addStudent');
let updateList = document.getElementById('update');

// кнопка 1
addStudent.onclick = function () {


    let name = document.getElementById('student-name').value;
    let surname = document.getElementById('student-surname').value;
    let age = document.getElementById('student-age').value;
    let marks = document.getElementById('student-marks').value.split(',').map(Number);



    let student = new Student({
        name,
        surname,
        age,
        marks,
    })

    teacher.addStudentToGroup(student);
}
// кнопка 2
   updateList.onclick = function() {
    let list = document.querySelector('#list');
    let result = teacher.getListByAverageMark().join('')
    list.innerHTML = result;
  }