import Course from './modules/course.mjs'
import LearningPath from './modules/learningPath.mjs'
import Lesson from './modules/lesson.mjs'
//import Student from './modules/student.mjs'
import Teacher from './modules/teacher.mjs'

import FreeStudent from './modules/typesOfStudents/freeStudent.mjs'
import BasicStudent from './modules/typesOfStudents/basicStudent.mjs'
import ExpertStudent from './modules/typesOfStudents/expertStudent.mjs'


//* Teachers ---------------------
const FreddyVega = new Teacher({
  id: 1,
  name: 'Freddy Vega',
  speciality: 'CEO',
});
console.log(FreddyVega);

const ClauAlderete = new Teacher({
  id: 2,
  name: 'Clau Alderete',
  speciality: 'Digital Marketing',
});
console.log(ClauAlderete);


//* Lessons -----------------------
const lesson1PB = new Lesson({
  id: 1,
  title: 'Clase 1 Programación Básica',
});
console.log(lesson1PB);

const lesson1DM = new Lesson({
  id: 2,
  title: 'Clase 1 Marketing Digital',
});
console.log(lesson1DM);


//* Courses ----------------------------
const cursoProgramacionBasica = new Course({
  id: 1,
  name: "Curso gratis de programación básica",
  lessons: [lesson1PB],
  teacher: FreddyVega,
  isFree: false,
});
console.log(cursoProgramacionBasica);

const cursoIntroMarketingDigital = new Course({
  id: 2,
  name: 'Curso de Introducción al Marketing Digital',
  lessons: [lesson1DM],
  teacher: ClauAlderete
});
console.log(cursoIntroMarketingDigital);

const cursoPracticoHTML = new Course({
  id: 3,
  name: 'Curso Practico de HTML y CSS',
  lessons: [lesson1DM],
  teacher: ClauAlderete,
  lang: "english",
});
console.log(cursoIntroMarketingDigital);


//* Learning Paths ---------------------
const escuelaDesarrolloWeb = new LearningPath({
  id: 1,
  name: 'Escuela de Desarrollo Web',
  courses: [cursoProgramacionBasica],
});
console.log(escuelaDesarrolloWeb);

const escuelaMarketingDigital = new LearningPath({
  id: 2,
  name: 'Marketing Digital',
  courses: [cursoIntroMarketingDigital],
});
console.log(escuelaMarketingDigital);


//* Students ---------------------
const miguel = new FreeStudent({
  id: 1,
  name: 'Miguel',
  email: 'miguel@gmail.com',
  username: 'mike',
  points: 40000,
  approvedCourses: [cursoProgramacionBasica],
  learningPaths: [escuelaDesarrolloWeb]
});
miguel.approveCourse(cursoPracticoHTML);
console.log(miguel);


const victor = new ExpertStudent({
  id: 2,
  name: 'Victor Guzman',
  email: 'victor@gmail.com',
  username: 'victor.guzman',
  points: 4543,
})
victor.approveCourse(cursoPracticoHTML);
console.log(victor);
