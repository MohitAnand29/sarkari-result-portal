// components/AdmitCardSection.js
import React from 'react';
import JobSection from './JobSection';

const AdmitCardSection = () => {
  const admitCardJobs = [
    {
      id: 5,
      title: "Railway RRB Group D Admit Card 2025",
      department: "Railway Recruitment Board",
      posts: "1,03,769",
      lastDate: "10 Oct 2025",
      views: "4.2k"
    },
    {
      id: 6,
      title: "BPSC 71th Pre Admit Card 2025",
      department: "Bihar Public Service Commission",
      posts: "N/A",
      lastDate: "05 Sep 2025",
      views: "3.5k"
    },
    {
      id: 7,
      title: "SBI Bank Clerk Pre Admit Card 2025",
      department: "State Bank of India",
      posts: "8773",
      lastDate: "28 Aug 2025",
      views: "5.1k"
    },
    {
      id: 8,
      title: "UPSSSC PET Admit Card 2025",
      department: "UP Subordinate Services Selection Commission",
      posts: "N/A",
      lastDate: "20 Aug 2025",
      views: "3.8k"
    }
  ];

  return (
    <JobSection 
      title="Admit Cards" 
      jobs={admitCardJobs} 
      viewAllLink="/admit-cards" 
    />
  );
};

export default AdmitCardSection;