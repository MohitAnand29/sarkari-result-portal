// components/JobCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg text-gray-800">{job.title}</h3>
          <p className="text-gray-600 text-sm">{job.department}</p>
        </div>
        <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">{job.posts} Posts</span>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <p className="text-gray-600 text-sm"><i className="far fa-calendar-alt mr-1"></i> Last Date: {job.lastDate}</p>
          <p className="text-gray-600 text-sm"><i className="far fa-eye mr-1"></i> {job.views} Views</p>
        </div>
        <Link 
          to={`/job/${job.id}`}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded text-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;