import Student from "../student.mjs";
import Comment from "../comment.mjs";

// Herencia: Estamos extendiendo la clase madre, con esto logramos heredas TODAS las prpiedades y metodos de dicha clase
export default class TeacherSudent extends Student {
    constructor(props){
        super(props);
    } 

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    // Polimorfismo
    // Porque estamos modificando un metodo de la clase madre especificamente para esta subclase

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this._name,
            studentRole: "teacher"
        });

        comment.publicar();
    }

}