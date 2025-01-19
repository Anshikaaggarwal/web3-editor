import { LocationIcon,SalaryIcon,CompanyIcon,CalendarIcon} from "./Icons";
interface JobCardProps {
    job: {
      id: number;
      companyName: string;
      role: string;
      website: string;
      employeeSize: string;
      location: string;
      salary: string;
      deadline: string;
      duration: string;
      posted: string;
    }
  }
  
  export default function JobCard({ job }: JobCardProps) {
    return (
      <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-semibold">{job.role}</h2>
            <div className="text-gray-600 mt-1">{job.companyName}</div>
            <a href={`https://${job.website}`} className="text-gray-500 text-sm hover:underline">
              {job.website}
            </a>
          </div>
          <span className="text-gray-500 text-sm">{job.posted}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
          <div className="flex items-center text-gray-600">
            <LocationIcon />
            {job.location}
          </div>
          <div className="flex items-center text-gray-600">
            <SalaryIcon />
            {job.salary}
          </div>
          <div className="flex items-center text-gray-600">
            <CompanyIcon />
            {job.employeeSize} employees
          </div>
          <div className="flex items-center text-gray-600">
            <CalendarIcon />
            Deadline: {job.deadline}
          </div>
        </div>
  
        <div className="mt-4 flex gap-2">
          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
            {job.duration}
          </span>
        </div>
      </div>
    );
  }
