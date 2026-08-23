import { useAuth } from '../../context/AuthContext';

function AdminStudentsPage() {
  const { students } = useAuth();

  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Admin</div>
          <h1>Student management</h1>
        </div>
        <div className="table-card">
          <div className="table-header">
            <strong>Students</strong>
          </div>
          <div className="table-body">
            {students.length === 0 ? (
              <p style={{ margin: 0, color: '#dfe7ef' }}>No registered students found.</p>
            ) : (
              <table className="simple-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Course</th>
                    <th>College</th>
                    <th>City</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id || student.email}>
                      <td>{student.fullName}</td>
                      <td>{student.email}</td>
                      <td>{student.phone}</td>
                      <td>{student.course}</td>
                      <td>{student.college}</td>
                      <td>{student.city}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminStudentsPage;
