'use strict';
/* exported getStudentNames */
function getStudentNames(getStudentNames) {
  const studentNames = [];
  let studentObject = {};
  for (let i = 0; i < getStudentNames.length; i++) {
    studentObject = getStudentNames[i];
    for (const prop in studentObject) {
      studentNames.push(studentObject[prop]);
    }
  }
  return studentNames;
}
