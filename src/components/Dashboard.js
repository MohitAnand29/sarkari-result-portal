import React from "react";
import { sections } from "./Data/sectionData";
import Section from "./Section";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto p-4 md:p-6">
      {sections.map((sec, index) => (
        <Section key={index} title={sec.title} items={sec.items} />
      ))}
    </div>
  );
};

export default Dashboard;
