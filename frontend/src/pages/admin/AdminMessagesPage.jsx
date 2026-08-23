import { useAuth } from '../../context/AuthContext';

function AdminMessagesPage() {
  const { consultations } = useAuth();

  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Admin</div>
          <h1>Messages and consultation requests</h1>
        </div>
        <div className="table-card">
          <div className="table-header">
            <strong>Messages</strong>
          </div>
          <div className="table-body">
            {consultations.length === 0 ? (
              <p style={{ margin: 0, color: '#dfe7ef' }}>No consultation messages are available yet.</p>
            ) : (
              <table className="simple-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Project</th>
                    <th>Message</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {consultations.map((consultation) => (
                    <tr key={consultation.id}>
                      <td>{consultation.name}</td>
                      <td>{consultation.email}</td>
                      <td>{consultation.phone}</td>
                      <td>{consultation.project_idea}</td>
                      <td>{consultation.message}</td>
                      <td><span className="badge warning">{consultation.status}</span></td>
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

export default AdminMessagesPage;
