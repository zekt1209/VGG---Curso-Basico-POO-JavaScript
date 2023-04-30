import Student from "../student.mjs";
import Comment from "../comment.mjs";

// Herencia: Estamos extendiendo la clase madre, con esto logramos heredas TODAS las prpiedades y metodos de dicha clase
export default class TeacherStudent extends Student {
    // Cuando heredamos atributos y metodos, no usar brackets en el constructor porque da error
    constructor(props, skills = []){
        super(props);
        this.skills = skills;
    } 
    // Este metodo es propio de cada subclase, osea que no lo tiene la clase madre (Student)
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    // Polimorfismo
    // Porque estamos modificando un metodo de la clase madre especificamente para esta subclase

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this._name,
            studentRole: "profesor de " + this.skills.join(','), 
        });

        comment.publicar();
    }

}