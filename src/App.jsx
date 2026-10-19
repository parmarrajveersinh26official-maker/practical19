import { useState } from "react";
import StudentList from "./components/StudentList";

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul Patel", course: "BCA" },
    { id: 2, name: "Priya Shah", course: "BBA" },
    { id: 3, name: "Amit Kumar", course: "BSc IT" },
  ]);

  function deleteStudent(id) {
    setStudents((previous) =>
      previous.filter((student) => student.id !== id)
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-2xl bg-gray-100 p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Student Management
      </h1>

      <StudentList
        students={students}
        onDelete={deleteStudent}
      />
    </main>
  );
}