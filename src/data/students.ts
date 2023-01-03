// function to set students data to local storage

export const setStudents = (students: any[]) => {
  localStorage.setItem("students", JSON.stringify(students));
};

export const getStudents = (): any[] => {
  return JSON.parse(localStorage.getItem("students") || "[]");
};
