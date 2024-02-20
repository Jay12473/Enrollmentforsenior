// Get the student list element
const studentList = document.querySelector('#student-list');

// Function to display the enrolled students table
function displayEnrolledStudents() {
  // Get the students array from local storage
  const storedStudents = localStorage.getItem('students');
  if (storedStudents) {
    students = JSON.parse(storedStudents);
  }
  // Loop through the students array and create a table row for each student
  students.forEach(function(student) {
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const idTd = document.createElement('td');
    const subjectsTd = document.createElement('td');
    nameTd.textContent = student.name;
    idTd.textContent = student.id;
    subjectsTd.textContent = student.subjects.join(', ');
    tr.appendChild(nameTd);
    tr.appendChild(idTd);
    tr.appendChild(subjectsTd);
    studentList.appendChild(tr);

  });
}

// Call the function to display the enrolled students table
displayEnrolledStudents();


