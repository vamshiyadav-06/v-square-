import { useAuth } from '../../context/AuthContext';

function AdminDashboardPage() {
  const { students } = useAuth();

  const cards = [
    { label: 'Total Students', value: String(students.length) },
    { label: 'New Requests', value: String(students.length) },
    { label: 'Active Projects', value: '0' },
    { label: 'Completed Projects', value: '0' },
    { label: 'Pending Payments', value: '0' },
    { label: 'Total Referrals', value: '0' },
  ];

  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Admin dashboard</div>
          <h1>Operations overview</h1>
        </div>

        <div className="stat-grid">
          {cards.map((card) => (
            <div key={card.label} className="stat-box">
              <span className="label">{card.label}</span>
              <strong>{card.value}</strong>
            </div>
          ))}
        </div>

        <div className="table-card">
          <div className="table-header">
            <strong>Registered students</strong>
          </div>
          <div className="table-body">
            {students.length === 0 ? (
              <p style={{ margin: 0, color: '#dfe7ef' }}>No students registered yet.</p>
            ) : (
              <table className="simple-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>College</th>
                    <th>Course</th>
                    <th>City</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id || student.email}>
                      <td>{student.fullName}</td>
                      <td>{student.email}</td>
                      <td>{student.phone}</td>
                      <td>{student.college}</td>
                      <td>{student.course}</td>
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

export default AdminDashboardPage;
