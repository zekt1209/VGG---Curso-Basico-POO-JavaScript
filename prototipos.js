
                                // Prototipo
// function Student() {
//     this.name = "name";
//     this.age = 18;
//     this.points = 750;
// }

const juanita = new Student();

juanita


                            // Objetos Literales VS Prototipos

// Objeto Literal
const carlos = {
    nombre: "Carlos",
    username: "carlos",
    pionts: 100,
    socialMedia: {
        twitter: "carlosfc",
        instagram: "carlosfc",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso definitivo de HTML y CSS",
        "Curso practico de HTML y CSS",
    ],
    learningPaths: [
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso de introduccion a la prduccion de Vgs",
                "Curso de Unreal Engine",
                "Curso de Unity 3D",
            ],
        },
    ],
};


// Clase

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.email = email;
        this.name = name;
        this.username = username;
        this.socialMedia = {
            twitter: twitter,
            instagram: instagram,
            facebook: facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
};

class Course {
    constructor({
        id,
        name,
        teacher,
        lessons = [],
    }){
        this.id = id;
        this.name = name;
        this.teacher = teacher;
        this.lessons = lessons; 
    }
};

const cursoBasicoDePOO = new Course({
    id: 1,
    name: "Curso Básico de Programación Orientada a Objetos con JavaScript",
    teacher: "JuanDC"
});

class LearningPath {
    constructor({
        // Inicializar los atributos que le asignaremos a la clase LearningPaths
        id,
        name,
        courses = [],
    }) {
        // Asociar los atributos declarados en el constructor con las variables de la clase.
        this.id = id;
        this.name = name;
        this.courses = courses;
    }

    addCourse(course) {
        this.courses.push(course);
    }

    replaceCourse(oldCourse, newCourse) {
        const oldCourseIndex = this.courses.findIndex(course => course.id === oldCourse.id);

        if (oldCourseIndex !== 1) {
            this.courses[oldCourseIndex] = newCourse;
        }

        return this.courses;
    }

    deleteCourse(oldCourse) {
        const courseIndex = this.courses.findIndex(course => course.id === oldCourse.id);

        this.courses.splice(courseIndex, 1);

        return this.courses;
    }

};

const reactNativeLearningPath = new LearningPath({
    id: "react-native",
    name: "Desarrollo de Apps con React Native",
    courses: [
        new Course({
            id: "basico-javascript",
            name: "Curso Básico de JavaScript",
            teacher: "Diego De Granda",
        }),
        new Course({
            id: "ecmascript-6",
            name: "Curso de ECMAScript 6+",
            teacher: "Oscar",
        }),
    ]
});

const escuelaDesarrolloWeb = new LearningPath({
    name: "Escuela de desarrollo WEB",

});

const victor = new Student({
    name: "VictorJG",
    username: "victor.guzman",
    email: "victor@hotail.com",
    instagram: "victor.9999"
});



