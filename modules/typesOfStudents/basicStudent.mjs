import Student from '../student.mjs'


export default class BasicStudent extends Student{
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this._name + ", Solo puede tomar cursos en espaniol.")
        }
    }
}