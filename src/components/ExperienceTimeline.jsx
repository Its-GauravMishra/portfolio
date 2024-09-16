import React from 'react';

const experienceData = [
  {
    role: 'Technical Support Engineer Intern',
    company: 'EduBuddy',
    duration: 'Jun 2024 - Aug 2024',
    description: 'Worked on resolving technical issues for educational software and supported customers through phone and email.'
  },
  {
    role: 'Cybersecurity Intern',
    company: 'XYZ Company',
    duration: 'Jan 2024 - May 2024',
    description: 'Assisted in vulnerability assessments, penetration testing, and cybersecurity awareness training for internal teams.'
  },
  {
    role: 'Frontend Developer',
    company: 'ABC Tech',
    duration: 'Sept 2023 - Dec 2023',
    description: 'Developed and maintained responsive web applications using React, integrating various third-party APIs for real-time data processing.'
  }
];

const ExperienceTimeline = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <h2 className='text-4xl font-bold mb-8'>
        My <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Experience</span>
      </h2>
      <div className="relative border-l border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
        {experienceData.map((item, index) => (
          <div key={index} className="mb-10 ml-4 relative transform transition-transform duration-300 hover:scale-105">
            <div className="absolute w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full -left-1.5 border border-white"></div>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {item.role}
              </h3>
              <span className="block text-lg font-medium text-gray-400">
                {item.company} - {item.duration}
              </span>
            </div>
            <p className="text-gray-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
