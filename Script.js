let students = [
    { name: "Aarav", roll: "101", marks: 85 },
    { name: "Riya", roll: "102", marks: 67 },
    { name: "Kunal", roll: "103", marks: 74 }
  ];

  const studentList = document.getElementById("studentList");

  // Function to display students
  function displayStudents(list) {
    studentList.innerHTML = "";
    list.forEach(student => {
      const div = document.createElement("div");
      div.className = "student";
      div.textContent = `Name: ${student.name}, Roll No: ${student.roll}, Marks: ${student.marks}`;
      studentList.appendChild(div);
    });
  }

  // Initial display
  displayStudents(students);

  // Show Top Scorers
  function showTopScorers() {
    const topScorers = students.filter(s => s.marks > 70);
    displayStudents(topScorers);
  }

  // Add new student
  document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const marks = parseInt(document.getElementById("marks").value);

    students.push({ name, roll, marks });

    displayStudents(students);

    // Clear form
    e.target.reset();
  });
