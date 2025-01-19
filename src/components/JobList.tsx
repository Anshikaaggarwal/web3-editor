import JobCard from './JobCard';
import { jobData } from '@/data/jobs';

import { readContract } from "thirdweb";
import { contract } from '@/thirdweb';


export default async function JobList() {
    const data = await readContract({
      contract,
      method:
        "function getAllJobs() view returns ((uint256 id, address owner, string companyName, uint256 salary, uint256 workHours, string role, string skillsRequired, string education, string jobDescription, string jobTask, bool isOpen, uint256 timestamp)[])",
      params: [],
    });

    console.log(data);
    return (
        <div className="space-y-4">
            {jobData.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
}
