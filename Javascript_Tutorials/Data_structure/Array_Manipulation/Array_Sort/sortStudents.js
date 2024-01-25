/**
 * Sorting by Multiple Properties
When it comes to objects, we can sort by their properties.

Let's consider some students:

const students = [
    { id: 1, graduated: true, grade: 86 },
    { id: 2, graduated: false, grade: 96 },
    { id: 3, graduated: false, grade: 78 },
    { id: 4, graduated: true, grade: 96 },
];
Let's sort this list by two rules in the following priority:

Students who Graduated
Highest Grades
const students = [
    { id: 4, graduated: true, grade: 96 },
    { id: 1, graduated: true, grade: 86 },
    { id: 2, graduated: false, grade: 96 },
    { id: 3, graduated: false, grade: 78 },
];
 Now the list shows the graduated students at the top and then it sorts those groups by the highest grades.

 To compare students, this can be broken up into three scenarios.


 Comparing Students
When we write our comparison function for the students, we can break this up into three scenarios:

The first student graduated and the second student didn't - We'll return -1, so the first student is sorted first.

The second student graduated and the first student didn't - We'll return 1, so the second student is sorted first.

The students have the same graduation status. - We can take the second student's grade and subtract the first student's (just like we did when we sorted numbers descending).

 Your Goal: Sort Students
Given an array of students, sort first by graduated then by grade like in the example above.

Each object in the students array will have properties id, graduated and grade just like in the example shown above.

 For debugging purposes, the tests will log your actual results versus the expected test results.
 */

const students = [
  { id: 1, graduated: true, grade: 86 },
  { id: 2, graduated: false, grade: 96 },
  { id: 3, graduated: false, grade: 78 },
  { id: 4, graduated: true, grade: 96 },
];
function sortStudents(students) {
  return students.sort((a, b) => {
    if (a.graduated === true && b.graduated === false) {
      return -1;
    } else if (a.graduated === false && b.graduated === true) {
      return 1;
    } else {
      return b.grade - a.grade;
    }
  });
}

console.log(sortStudents(students));
