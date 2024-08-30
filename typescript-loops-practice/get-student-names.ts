/* exported getStudentNames */
function getStudentNames(getStudentNames: any): string[] {
  const studentNames = [];
  let studentObject: Record<string, string> = {};
  for (let i = 0; i < getStudentNames.length; i++) {
    studentObject = getStudentNames[i];
    for (const prop in studentObject) {
      studentNames.push(studentObject[prop]);
    }
  }
  return studentNames;
}
