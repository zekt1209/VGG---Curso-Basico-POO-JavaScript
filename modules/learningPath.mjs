export default class LearningPath {
    constructor({
        // Definimos los atributos que vamos a necesitar
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