export default function StudentCard({ student, onDelete }) {
  return (
    <div className="flex items-center justify-between rounded-lg border bg-white p-4">
      <div>
        <h2 className="font-bold">{student.name}</h2>
        <p className="text-gray-600">{student.course}</p>
      </div>

      <button
        onClick={() => onDelete(student.id)}
        className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
}