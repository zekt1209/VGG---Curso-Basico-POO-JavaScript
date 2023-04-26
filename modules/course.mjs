export default class Course {
    constructor({
        id,
        name,
        teacher,
        lessons = [],
    }){
        this.id = id;
        this._name = name;
        this.teacher = teacher;
        this.lessons = lessons; 
    }

    get name() {
        return this._name;
    }

    set name(newCourse) {

        if (newCourse === "Curso malito") {
            console.error("Hey ... NO");
        } else {
            this._name = newCourse;
        }

    }
};

/*

var programacionWeb = new Course({
    id: 1,
    name: "Curso de Programacion Web",
});

// Llamar al getter
programacionWeb.name;

// Llamar al setter
programacionWeb.name = "lalala";

*/