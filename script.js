//var employeeName="Sumalatha";
//console.log(employeeName);

//let employeeAge=22;
//console.log(employeeAge);

//const companyName="Stackly";
//console.log(companyName);

//var employeeName="Sumalatha";
//let employeeAge=22;
//const companyName="Stackly";
//console.log(employeeName);
//console.log(employeeAge);
//console.log(companyName);


//alert("Welcome to Employee Portal")

//let taskCompleted=confirm("Have you completed the today's task?");
//console.log(taskCompleted);

//let employeeName=prompt("Enter your name");
//console.log(employeeName);

//let employeeName=prompt("Enter your name");
//document.writeln("Welcome"+employeeName);

//console.warn("Task submitted successfully");

//console.warn("Task submitted failed");

//let employeeAge=22;
//console.log("Before Promotion",employeeAge);
//employeeAge=23;
//console.log("After Promotion",employeeAge);

//day2

// // Task 1

// let name = "Naveen";
// let id = "EMP101";
// let department = "Development";
// let salary = 50000;
// let permanent = true;

// console.log("Employee Details");
// console.log("Name : " + name);
// console.log("ID : " + id);
// console.log("Department : " + department);
// console.log("Salary : " + salary);
// console.log("Permanent : " + permanent);


// // Task 2

// let skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];

// console.log("First Skill : " + skills[0]);
// console.log("Third Skill : " + skills[2]);
// console.log("Last Skill : " + skills[skills.length - 1]);
// console.log("Total Skills : " + skills.length);


// // Task 3

// let company = {
//     companyName: "Stackly IT",
//     location: "Coimbatore",
//     employees: 100,
//     technologies: ["HTML", "CSS", "JavaScript", "React"]
// };

// console.log("Company Name : " + company.companyName);
// console.log("Location : " + company.location);
// console.log("Second Technology : " + company.technologies[1]);
// console.log("Total Technologies : " + company.technologies.length);


// // Task 4

// let basicSalary = 30000;
// let bonus = 5000;

// let totalSalary = basicSalary + bonus;
// let tax = totalSalary * 10 / 100;
// let finalSalary = totalSalary - tax;

// console.log("Total Salary : " + totalSalary);
// console.log("Tax : " + tax);
// console.log("Final Salary : " + finalSalary);


// // Task 5

// let attendance = 92;

// let result = attendance >= 75 ? "Eligible for Exam" : "Not Eligible";

// console.log(result);


// // Task 6

// let username = "admin";
// let password = "12345";

// if (username == "admin" && password == "12345") {
//     console.log("Login Successful");
// } else {
//     console.log("Invalid Credentials");
// }


// // Task 7

// let productName = "Laptop";
// let productPrice = 45000;
// let quantity = 2;

// let total = productPrice * quantity;

// console.log("Product : " + productName);
// console.log("Price : " + productPrice);
// console.log("Quantity : " + quantity);
// console.log("Total : " + total);


// // Task 8

// let visitors = 100;

// console.log(++visitors);
// console.log(visitors++);
// console.log(--visitors);
// console.log(visitors--);


// // Task 9

// console.log(10 == "10");
// console.log(10 === "10");
// console.log(20 != "20");
// console.log(20 !== "20");
// console.log(5 < 10);
// console.log(15 >= 20);
// console.log(100 <= 100);


// // Task 10

// let empName = prompt("Enter Employee Name");
// let empAge = prompt("Enter Employee Age");

// let join = confirm("Do you want to join our company?");

// if (join) {
//     alert("Welcome " + empName);
// } else {
//     alert("Thank You");
// }


// let employee = {
//     name: "Naveen",
//     id: "EMP101",
//     department: "Development",
//     experience: 3,
//     salary: 50000
// };

// let skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];

// let company = {
//     companyName: "Stackly IT",
//     location: "Coimbatore"
// };

// let username = "admin";
// let password = "12345";

// let loginStatus = (username == "admin" && password == "12345") ? "Success" : "Failed";

// let attendance = 92;
// let examStatus = attendance >= 75 ? "Eligible" : "Not Eligible";

// let bonus = 5000;
// let finalSalary = employee.salary + bonus;

// let join = confirm("Do you want to join our company?");

// if (join) {
//     alert("Welcome " + employee.name);
// } else {
//     alert("Thank You");
// }

// console.log("==============================");
// console.log("      EMPLOYEE PORTAL");
// console.log("==============================");
// console.log("Employee Name : " + employee.name);
// console.log("Employee ID   : " + employee.id);
// console.log("Department    : " + employee.department);
// console.log("Experience    : " + employee.experience + " Years");
// console.log("Salary        : ₹" + employee.salary);
// console.log("Bonus         : ₹" + bonus);
// console.log("Final Salary  : ₹" + finalSalary);
// console.log("Skills        : " + skills.join(", "));
// console.log("Attendance    : " + attendance + "%");
// console.log("Exam Status   : " + examStatus);
// console.log("Login Status  : " + loginStatus);
// console.log("Company       : " + company.companyName);
// console.log("Location      : " + company.location);
// console.log("==============================");

//bonus task

// let product = "Laptop";
// let price = 45000;
// let quantity = 2;

// let total = price * quantity;
// let gst = total * 18 / 100;
// let finalBill = total + gst;

// let customer = prompt("Enter Customer Name");
// let confirmOrder = confirm("Do you want to place the order?");

// let orderStatus = confirmOrder ? "Order Confirmed" : "Order Cancelled";

// alert("Thank You " + customer);

// console.log("==========================");
// console.log(" SHOPPING BILL GENERATOR ");
// console.log("==========================");
// console.log("Customer : " + customer);
// console.log("Product  : " + product);
// console.log("Price    : " + price);
// console.log("Quantity : " + quantity);
// console.log("Total    : " + total);
// console.log("GST      : " + gst);
// console.log("Final Bill : " + finalBill);
// console.log("Status   : " + orderStatus);
// console.log("==========================");