export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentEmployeeIndex < employees[currentDepartmentIndex].length) {
        const result = {
          value: employees[currentDepartmentIndex][currentEmployeeIndex],
          done: false
        };
        currentEmployeeIndex++;
        return result;
      }

      if (currentDepartmentIndex < employees.length - 1) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
        return this.next();
      }

      return { done: true };
    }
  };
}
