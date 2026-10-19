import StudentCard from "./StudentCard";

export default function StudentList({ students, onDelete }) {
  return (
    <div className="space-y-3">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onDelete={onDelete}
        />
      ))}

      {students.length === 0 && (
        <p className="rounded bg-white p-4 text-gray-500">
          No students found.
        </p>
      )}
    </div>
  );
}