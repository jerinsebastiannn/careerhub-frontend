function JobCard({ job }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px 0",
      borderRadius: "10px"
    }}>
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
    </div>
  );
}

export default JobCard;