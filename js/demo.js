function showGradeEquivalent() {

  // declare the 5 students
  let student1 = "Deib Lohr Enrile";
  let student2 = "Maxwell Laurent Del Valle";
  let student3 = "Zarnaih Marchesa";
  let student4 = "Samantha Maureen De Vera";
  let student5 = "Kalix Jace Martinez";
  
  // declare their grades
  let grade1 = 75;
  let grade2 = 93;
  let grade3 = 78;
  let grade4 = 97;
  let grade5 = 98;

  let output = "<h2>Grade Equivalents</h2>";
  output += "<table>";
  output += "<tr>";
  output += "<th>Student Name</th>"; 
  output += "<th>Grade</th>";
  output += "<th>Equivalent</th>";
  output += "<th>Remark</th>";
  output += "<th>Academic Leader</th>";
  output += "</tr>";

  // process student 1
  let equivalent1 = getEquivalent(grade1);
  let remark1 = getRemark(grade1);
  let leader1 = getAcademicLeader(equivalent1);

  output += "<tr>";
  output += "<td>" + student1 + "</td>";
  output += "<td>" + grade1 + "</td>";
  output += "<td>" + equivalent1 + "</td>";
  output += "<td>" + remark1 + "</td>";
  output += "<td>" + leader1 + "</td>";
  output += "</tr>";

  // process student 2
  let equivalent2 = getEquivalent(grade2);
  let remark2 = getRemark(grade2);
  let leader2 = getAcademicLeader(equivalent2);

  output += "<tr>";
  output += "<td>" + student2 + "</td>";
  output += "<td>" + grade2 + "</td>";
  output += "<td>" + equivalent2 + "</td>";
  output += "<td>" + remark2 + "</td>";
  output += "<td>" + leader2 + "</td>";
  output += "</tr>";

  // process student 3
  let equivalent3 = getEquivalent(grade3);
  let remark3 = getRemark(grade3);
  let leader3 = getAcademicLeader(equivalent3);

  output += "<tr>";
  output += "<td>" + student3 + "</td>";
  output += "<td>" + grade3 + "</td>";
  output += "<td>" + equivalent3 + "</td>";
  output += "<td>" + remark3 + "</td>";
  output += "<td>" + leader3 + "</td>";
  output += "</tr>";

  // process student 4
  let equivalent4 = getEquivalent(grade4);
  let remark4 = getRemark(grade4);
  let leader4 = getAcademicLeader(equivalent4);

  output += "<tr>";
  output += "<td>" + student4 + "</td>";
  output += "<td>" + grade4 + "</td>";
  output += "<td>" + equivalent4 + "</td>";
  output += "<td>" + remark4 + "</td>";
  output += "<td>" + leader4 + "</td>";
  output += "</tr>";

  // process student 5
  let equivalent5 = getEquivalent(grade5);
  let remark5 = getRemark(grade5);
  let leader5 = getAcademicLeader(equivalent5);

  output += "<tr>";
  output += "<td>" + student5 + "</td>";
  output += "<td>" + grade5 + "</td>";
  output += "<td>" + equivalent5 + "</td>";
  output += "<td>" + remark5 + "</td>";
  output += "<td>" + leader5 + "</td>";
  output += "</tr>";

  output += "</table>";

  // display result in html
  document.getElementById("result").innerHTML = output; 
}

function getRemark(grade) {
  // using ternary operator as instructed
  let remark = (grade >= 75) ? "Passed" : "Failed";
  return remark;
}

function getEquivalent(grade) {
  let equivalent = "";

  if (grade >= 96) {
    equivalent = "1.0";
  } 
  else if (grade >= 94) {
    equivalent = "1.25";
  } 
  else if (grade >= 92) {
    equivalent = "1.5";
  } 
  else if (grade >= 89) {
    equivalent = "1.75";
  } 
  else if (grade >= 87) {
    equivalent = "2.0";
  } 
  else if (grade >= 84) {
    equivalent = "2.25";
  } 
  else if (grade >= 81) {
    equivalent = "2.5";
  } 
  else if (grade >= 78) {
    equivalent = "2.75";
  } 
  else if (grade >= 75) {
    equivalent = "3.0";
  } 
  else {
    equivalent = "5.0";
  }

  return equivalent;
}

function getAcademicLeader(equivalent) {
  let leader = "";

  switch (equivalent) {
    case "1.0":
    case "1.25":
      leader = "1st Class Academic Leader";
      break;
    case "1.5":
      leader = "2nd Class Academic Leader";
      break;
    case "1.75":
      leader = "3rd Class Academic Leader";
      break;
    default:
      leader = "-";
  }

  return leader;
}