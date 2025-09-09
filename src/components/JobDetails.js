// components/JobDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch job details based on the ID
  // For this example, we'll use mock data
  const jobDetails = {
    1: {
      title: "Railway RRB Group D Result 2025",
      department: "Railway Recruitment Board",
      posts: "1,03,769",
      lastDate: "15 October 2025",
      applicationStart: "12 March 2025",
      examDate: "15 August 2025",
      resultDate: "10 September 2025",
      description: "Railway Recruitment Board has announced the results for Group D positions. Candidates can check their results on the official website.",
      importantLinks: [
        { text: "Download Result", url: "#" },
        { text: "Answer Key", url: "#" },
        { text: "Syllabus", url: "#" }
      ],
      eligibility: {
        age: "18-33 years",
        education: "10th Pass or ITI from recognized institution"
      }
    },
    9: {
      title: "UP Police SI Online Form 2025",
      department: "Uttar Pradesh Police",
      posts: "4543",
      lastDate: "30 November 2025",
      applicationStart: "1 September 2025",
      examDate: "15 January 2026",
      resultDate: "To be announced",
      description: "Uttar Pradesh Police Recruitment and Promotion Board has released notification for Sub-Inspector positions. Eligible candidates can apply online.",
      importantLinks: [
        { text: "Apply Online", url: "#" },
        { text: "Notification PDF", url: "#" },
        { text: "Syllabus", url: "#" }
      ],
      eligibility: {
        age: "21-28 years",
        education: "Graduate from any recognized university"
      }
    }
  };

  const job = jobDetails[id] || jobDetails[1]; // Fallback to first job if not found

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Home
      </Link>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{job.title}</h1>
        <p className="text-gray-600 mb-4">{job.department}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Vacancy Details</h3>
            <p className="text-gray-600">Total Posts: <span className="font-medium">{job.posts}</span></p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Important Dates</h3>
            <p className="text-gray-600">Apply Start: <span className="font-medium">{job.applicationStart}</span></p>
            <p className="text-gray-600">Last Date: <span className="font-medium">{job.lastDate}</span></p>
            {job.examDate && <p className="text-gray-600">Exam Date: <span className="font-medium">{job.examDate}</span></p>}
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold text-gray-700 mb-2">Eligibility Criteria</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600">Age Limit: <span className="font-medium">{job.eligibility.age}</span></p>
            <p className="text-gray-600">Education: <span className="font-medium">{job.eligibility.education}</span></p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold text-gray-700 mb-2">Job Description</h3>
          <p className="text-gray-600">{job.description}</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Important Links</h3>
          <div className="flex flex-wrap gap-3">
            {job.importantLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;