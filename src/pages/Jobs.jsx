import jobs from "../data/jobs";
import JobCard from "../components/JobCard";

function Jobs() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Jobs</h2>

      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      
    </div>
  );
}

export default Jobs;