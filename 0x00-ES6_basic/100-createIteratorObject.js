export default function createIteratorObject (report) {
  const allEmployees = report.allEmployees;
  const departments = Object.keys(allEmployees);
  let currentIndex = 0;
  let currentDepartmentIndex = 0;

  const iterator = {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const currentDepartment = departments[currentDepartmentIndex];
      const employeesInDepartment = allEmployees[currentDepartment];

      if (currentIndex >= employeesInDepartment.length) {
        currentIndex = 0;
        currentDepartmentIndex += 1;
        return this.next();
      }

      const result = {
        value: employeesInDepartment[currentIndex],
        done: false
      };

      currentIndex += 1;

      return result;
    }
  };

  return iterator;
}
