const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Profile = require('./models/Profile');
const Project = require('./models/Project');
const env = require('./config/env');

const seed = async () => {
  await connectDB();

  await Profile.deleteMany({});
  await Project.deleteMany({});

  await Profile.create({
    name: 'Kaushik Nagarajan',
    title: 'Engineering Manager',
    summary: 'Innovative and hands-on Engineering Manager skilled in leading managers and teams towards high performing applications and successful product releases. Committed to cross-functional collaboration to maximize customer satisfaction, minimize waste, and accelerate development-to-live turnaround. Passionate about creating an engaging environment that fosters team growth and driving AI integration across both products and internal engineering workflows. I have high english proficiency as I studied and worked in the U.S. for close to a decade. I can communicate effectively with both technical and non-technical stakeholders.',
    email: 'kaushik16.n@gmail.com',
    location: 'India',
    social: {
      linkedin: 'https://www.linkedin.com/in/kaushiknagarajan/',
    },
    skills: [
      { name: 'Engineering Leadership', category: 'Management', level: 5 },
      { name: 'Product Ownership & Delivery', category: 'Management', level: 5 },
      { name: 'Managing Managers', category: 'Management', level: 5 },
      { name: 'Gen AI Adoption', category: 'Innovation', level: 5 },
      { name: 'Hiring & Mentoring', category: 'Management', level: 5 },
      { name: 'Decision Making & Conflict Resolution', category: 'Management', level: 4 },
      { name: 'Full-Stack Development', category: 'Development', level: 5 },
      { name: 'Backend Development', category: 'Backend', level: 5 },
      { name: 'RESTful APIs', category: 'Backend', level: 5 },
      { name: 'Test Automation', category: 'Testing', level: 5 },
      { name: 'JavaScript', category: 'Frontend', level: 4 },
      { name: 'React', category: 'Frontend', level: 4 },
      { name: 'Node.js', category: 'Backend', level: 4 },
      { name: 'Java / J2EE', category: 'Backend', level: 4 },
      { name: 'Spring', category: 'Backend', level: 3 },
      { name: 'C++', category: 'Languages', level: 3 },
      { name: 'SQL / Hibernate', category: 'Backend', level: 3 },
      { name: 'HTML / CSS', category: 'Frontend', level: 4 },
      { name: 'Tailwind CSS', category: 'Frontend', level: 4 },
      { name: 'MongoDB', category: 'Backend', level: 3 },
      { name: 'Jest', category: 'Testing', level: 4 },
    ],
    experience: [
      {
        company: 'MathWorks',
        role: 'Engineering Manager',
        startDate: new Date('2018-01-01'),
        endDate: null,
        description: 'Lead, drive and deliver highly successful products across releases with average 30% growth year over year. Manage and mentor high performing engineering team of size 20+ including 2 managers and a team lead covering multiple products.',
        highlights: [
          'Managed team remotely across multiple geographies and time zones',
          'Started with a team size of 4, built the team ground up by hiring at all levels since 2018',
          'Initiate and execute multiple cross-functional initiatives to reduce technical debt, improve performance and tackle usability concerns',
          'Champion the adoption of AI technologies into engineering workflows and product development',
          'Collaborate with cross functional team to gather customer insights, set a vision and create a roadmap',
          'Create a positive culture where engineers are encouraged to challenge each other and thrive as a team',
          'Coach managers on performance assessment, delivery and critical thinking',
        ],
      },
      {
        company: 'MathWorks',
        role: 'Senior Engineer',
        startDate: new Date('2011-01-01'),
        endDate: new Date('2017-12-31'),
        description: 'Design, develop and test software for APIs, Apps and hardware connectivity.',
        highlights: [
          'Work with a team on migrating legacy Java based desktop Apps to JS based Web Apps and expand the impact across org-wide software components',
          'Improve speed performance of software scope App by developing and testing a C++ based module',
          'Follow design spec review process, collaborate with customer facing engineering and gain buy-in during design reviews',
        ],
      },
      {
        company: 'Cognizant',
        role: 'Full Stack Web Developer',
        startDate: new Date('2007-01-01'),
        endDate: new Date('2009-12-31'),
        description: 'Create a full stack web application from scratch using Java (J2EE), Spring, JavaScript, HTML/CSS and SQL (Hibernate).',
        highlights: [
          'Maintained complex technology infrastructure and collaborated with product team to implement new features and strategically plan for future products',
          'Developed efficient and maintainable software according to business objectives and needs of clients',
          'Developed functional databases, applications and servers to support websites on back-end',
          'Developed unit test cases for testing and automation',
        ],
      },
    ],
    education: [
      {
        institution: 'University of Texas, Dallas',
        degree: 'M.S.',
        field: 'Electrical Engineering',
        startYear: 2009,
        endYear: 2011,
      },
      {
        institution: 'Mepco Schlenk Engineering College',
        degree: 'B.E.',
        field: 'Electronics & Communication Engineering',
        startYear: 2003,
        endYear: 2007,
      },
    ],
  });

  await Project.create([
    {
      title: 'Portfolio Website',
      description: 'Full-stack portfolio application built with React, Node.js, and MongoDB following MVC architecture.',
      longDescription: 'A modular, well-architected portfolio website showcasing engineering leadership, software development skills, and project work. Features a RESTful API backend with Express, React frontend with responsive design, MongoDB data persistence, and comprehensive test coverage.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Jest', 'CSS3', 'Tailwind CSS'],
      category: 'Web Development',
      featured: true,
      status: 'completed',
      repoUrl: '#',
      highlights: [
        'MVC architecture with service layer pattern',
        'RESTful API with validation and error handling',
        'Responsive React frontend with custom hooks',
        'Unit tests for both API and UI components',
      ],
    },
    {
      title: 'AI Integration Initiative',
      description: 'Championing the adoption of AI technologies into engineering workflows and product development.',
      longDescription: 'Leading cross-functional initiative to integrate Gen AI capabilities into both internal engineering workflows and customer-facing products, driving efficiency and innovation across the organization.',
      technologies: ['Gen AI', 'LLMs', 'RAG', 'Python', 'TypeScript'],
      category: 'AI / ML',
      featured: true,
      status: 'in-progress',
      highlights: [
        'Driving organization-wide AI adoption strategy',
        'Integrating LLM capabilities into product features',
        'Building internal AI-powered developer tools',
      ],
    },
    {
      title: 'Scope App',
      description: 'Streaming time domain data and measurements visualization tool developed with C++ and MATLAB backend and JavaScript frontend.',
      longDescription: 'A high-performance scope application for visualizing streaming time domain data and measurements in real-time. Built with a C++ and MATLAB backend for signal processing and a JavaScript frontend for interactive visualization. Tested using xUnit patterns in MATLAB adhering to the test automation pyramid.',
      technologies: ['C++', 'MATLAB', 'JavaScript', 'xUnit', 'Signal Processing'],
      category: 'Desktop Application',
      featured: true,
      status: 'completed',
      repoUrl: 'https://in.mathworks.com/help/dsp/ug/configure-time-scope.html',
      highlights: [
        'Real-time streaming data visualization with C++ and MATLAB backend',
        'JavaScript frontend for interactive time domain measurements',
        'Comprehensive test suite using xUnit patterns in MATLAB',
        'Adhered to test automation pyramid for balanced test coverage',
      ],
    },
    {
      title: 'Speech Enhancement CLI',
      description: 'CLI tool for speech enhancement built in C++ with custom data types, algorithm development, and third-party plotting integration.',
      longDescription: 'A command-line interface for speech enhancement developed in C++, featuring custom data type implementations, advanced audio processing algorithms, and integration with third-party plotting libraries for result visualization.',
      technologies: ['C++', 'CLI', 'Audio Processing', 'Algorithm Development', 'Data Structures'],
      category: 'CLI Tool',
      featured: true,
      status: 'completed',
      repoUrl: 'https://github.com/mathEnthusaistCodes/Signal-Processing',
      highlights: [
        'Built custom C++ data types for efficient audio signal representation',
        'Developed speech enhancement algorithms for noise reduction',
        'Integrated third-party plotting libraries for waveform visualization',
        'Designed intuitive CLI interface for parameter configuration',
      ],
    },
    {
      title: 'Satellite Communication Toolbox',
      description: 'Part of a team that delivered the Satellite Communication Toolbox for designing, simulating, and verifying satellite communications systems.',
      longDescription: 'Contributed to the MathWorks Satellite Communication Toolbox, providing MATLAB APIs, wireless algorithms, and test automation for designing and simulating satellite communication links. Involved in design, customer engagement, and a major product release.',
      technologies: ['MATLAB', 'Wireless Algorithms', 'Test Automation', 'API Design'],
      category: 'Toolbox Development',
      featured: true,
      status: 'completed',
      repoUrl: 'https://in.mathworks.com/products/satellite-communications.html',
      highlights: [
        'Developed MATLAB APIs for satellite communication link design and simulation',
        'Implemented wireless algorithms for satellite signal processing',
        'Built test automation framework ensuring quality across releases',
        'Engaged with customers to gather requirements and validate features',
        'Delivered as part of a major product release',
      ],
    },
  ]);

  console.log('Database seeded successfully');
  process.exit(0);
};

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
