// Step 1: Initialize the employees array
const employees = [
  { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
  { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Recruitment' },
  { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Accounting' },
  { id: 4, name: 'Eve Adams', age: 26, department: 'IT', salary: 55000, specialization: 'JavaScript' }
];


// Step 2: Display all employees
function displayEmployees() {
  const totalEmployees = employees
    .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
    .join('');
  document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// Step 3: Calculate total salaries
function calculateTotalSalaries() {
  const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
  alert(`Total Salaries: $${totalSalaries}`);
}

// Step 4: Display only HR employees
function displayHREmployees() {
  const hrEmployees = employees.filter(employee => employee.department === 'HR');
  const hrEmployeesDisplay = hrEmployees
    .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
    .join('');
  document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// Step 5: Find an employee by ID
function findEmployeeById(employeeId) {
  const foundEmployee = employees.find(employee => employee.id === employeeId);
  if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =
      `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
  } else {
    document.getElementById('employeesDetails').innerHTML = 'No employee found with this ID';
  }
}

function displayJavaScriptEmployees() {
  const jsEmployees = employees.filter(employee => employee.specialization === 'JavaScript');
  if (jsEmployees.length > 0) {
    const jsEmployeesDisplay = jsEmployees
      .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization} - $${employee.salary}</p>`)
      .join('');
    document.getElementById('employeesDetails').innerHTML = jsEmployeesDisplay;
  } else {
    document.getElementById('employeesDetails').innerHTML = 'No employees found with JavaScript specialization';
  }
}
