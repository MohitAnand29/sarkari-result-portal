// components/JobSection.js
import React from 'react';
import JobCard from './JobCard';

const JobSection = ({ title, jobs, viewAllLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <a href={viewAllLink} className="text-red-600 font-medium flex items-center">
          View All <i className="fas fa-arrow-right ml-1 text-xs"></i>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobSection;