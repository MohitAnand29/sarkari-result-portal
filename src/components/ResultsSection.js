// components/ResultsSection.js
import React from 'react';
import JobSection from './JobSection';

const ResultsSection = () => {
  const resultsJobs = [
    {
      id: 1,
      title: "Railway RRB Group D Result 2025",
      department: "Railway Recruitment Board",
      posts: "1,03,769",
      lastDate: "15 Oct 2025",
      views: "2.5k"
    },
    {
      id: 2,
      title: "BSEB DEIEd 1st & 2nd Year Result",
      department: "Bihar School Examination Board",
      posts: "N/A",
      lastDate: "12 Sep 2025",
      views: "1.8k"
    },
    {
      id: 3,
      title: "PNB Specialist Officer SO Final Result 2025",
      department: "Punjab National Bank",
      posts: "1025",
      lastDate: "30 Aug 2025",
      views: "3.2k"
    },
    {
      id: 4,
      title: "UPHESC Assistant Professor Result 2025",
      department: "UP Higher Education Service Commission",
      posts: "1276",
      lastDate: "25 Aug 2025",
      views: "2.1k"
    }
  ];

  return (
    <JobSection 
      title="Results" 
      jobs={resultsJobs} 
      viewAllLink="/results" 
    />
  );
};

export default ResultsSection;