import Student from '../student.mjs'

export default class FreeStudent extends Student{
    constructor(props) { // En este parametro props estamos recibiendo todas las propiedades de la superclase
        super(props); // Llama al metodo constructor de la clase pabre
    }

    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this._name + ", Solo puede tomar cursos gratis.");
        }
    }
}