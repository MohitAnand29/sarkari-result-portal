// components/LatestJobsSection.js
import React from 'react';
import JobSection from './JobSection';

const LatestJobsSection = () => {
  const latestJobs = [
    {
      id: 9,
      title: "UP Police SI Online Form 2025",
      department: "Uttar Pradesh Police",
      posts: "4543",
      lastDate: "30 Nov 2025",
      views: "12.4k"
    },
    {
      id: 10,
      title: "IBPS RRB 14th Online Form 2025",
      department: "Institute of Banking Personnel Selection",
      posts: "13,217",
      lastDate: "28 Oct 2025",
      views: "15.7k"
    },
    {
      id: 11,
      title: "RBI Officer Grade B Online Form 2025",
      department: "Reserve Bank of India",
      posts: "322",
      lastDate: "15 Oct 2025",
      views: "9.8k"
    },
    {
      id: 12,
      title: "BPSC School Teacher TRE 4.0 Online Form 2025",
      department: "Bihar Public Service Commission",
      posts: "1,70,461",
      lastDate: "12 Oct 2025",
      views: "22.3k"
    }
  ];

  return (
    <JobSection 
      title="Latest Jobs" 
      jobs={latestJobs} 
      viewAllLink="/latest-jobs" 
    />
  );
};

export default LatestJobsSection;