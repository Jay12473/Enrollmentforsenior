// Define an array to store enrolled students
let students = [];

// Get the enrollment form element
const form = document.querySelector('#enrollment-form');

// Add an event listener to the form submit event
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the values from the form inputs
  const studentName = document.querySelector('#student-name').value;
  const studentId = document.querySelector('#student-id').value;
  const subjects = [];
  const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
  checkboxes.forEach(function(checkbox) {
    subjects.push(checkbox.value);
  });

  // Create a student object and add it to the students array
  const student = {
    name: studentName,
    id: studentId,
    subjects: subjects
  };
  students.push(student);

  // Reset the form inputs
  form.reset();

  // Store the students array in local storage
  localStorage.setItem('students', JSON.stringify(students));
  window.location.href = 'index.html'
});
