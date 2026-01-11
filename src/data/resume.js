const resume = {
  education: [
    {
      school: 'California State University, Fullerton',
      degree: 'Master of Science, Computer Science',
      gpa: '3.74',
      end: 'May 2025',
      location: 'Fullerton, CA',
    },
    {
      school: 'Dr. Ambedkar Institute of Technology',
      degree: 'B.E., Computer Science and Engineering',
      gpa: '3.48',
      end: 'Aug 2022',
      location: 'Bengaluru, India',
    },
  ],
  experience: [
    {
      company: 'ReplyQuick.AI',
      role: 'Software Engineer',
      start: 'Aug 2025',
      end: 'Present',
      bullets: [
        'Led implementation of DentalScan V1 backend workflows for school deployments, enabling multi-portal access and supporting enrollment, consent validation, and scan visibility for 1,000+ student profiles.',
        'Designed and optimized scalable REST APIs for multi-tenant systems, improving request routing efficiency and reducing server load by 15%, contributing to higher service reliability.',
        'Integrated telecom and messaging infrastructure using Twilio, Telnyx, RetellAI, and OpenAI, automating high-volume communication flows and reducing manual outreach by 30%.',
        'Engineered cross-provider telecom automation supporting number provisioning, failover routing, and metadata tracking, improving provisioning throughput by 40% and reducing operational overhead by 20%.',
        'Investigated and resolved latency and delivery issues in voice and messaging pipelines by analyzing provider responses, traffic flow, and retry behavior.',
      ],
    },
    {
      company: 'Microsoft',
      role: 'Remote Future Ready Talent Intern',
      start: 'Oct 2021',
      end: 'Mar 2022',
      bullets: [
        'Engineered and deployed a healthcare web application on Azure enabling real-time doctor–patient interactions for simulated users with secure data exchange.',
        'Architected and integrated Cosmos DB schemas to store and manage over 1,000 simulated patient records.',
        'Implemented Azure Communication Services for instant messaging, boosting engagement in pilot demos by ~60%.',
      ],
    },
    {
      company: 'Take It Smart (OPC) Pvt. Ltd',
      role: 'Full Stack Web Development Intern',
      start: 'Sep 2021',
      end: 'Oct 2021',
      bullets: [
        'Built a full-stack E‑Library Management System with React and MySQL, improving data retrieval by ~40%.',
        'Constructed modular components for CRUD operations and role-based access, managing 500+ books and 100+ users.',
        'Collaborated within a 3‑member Agile team to deliver a full‑stack solution in 4 weeks meeting all feature requirements.',
      ],
    },
  ],
  projects: [
    {
      name: 'Mapvia',
      dates: '2025',
      bullets: [
        'Built a map-first discovery prototype visualizing 500+ Bay Area tech companies with clustered pins, detail drawers, and outbound site links.',
        'Implemented a geospatial API with bbox, keyword, and tag filtering, cutting client-side processing by ~60%.',
        'Delivered a high-performance map UI using Next.js, TypeScript, and Leaflet with sub-second interactions.',
      ],
    },
    {
      name: 'Blockchain-based Supply Chain Management',
      dates: 'Jan 2025 – May 2025',
      bullets: [
        'Created an Ethereum-based DApp simulating supply chain workflows for 4 key roles (Manufacturer → Consumer).',
        'Developed smart contracts with role-based access and state transitions to track 20+ product records.',
        'Integrated React.js with MetaMask for role-based access and deployed on Ethereum testnet.',
      ],
    },
    {
      name: 'Decentralized Exchange and NFT Marketplace Platform',
      dates: 'Oct 2024 – Dec 2024',
      bullets: [
        'Developed a proof-of-concept DEX with support for mock token swaps, NFT trading, and staking rewards.',
        'Implemented custom smart contracts for staking and validated reward distribution logic with 50+ tests.',
        'Built a Next.js frontend with wallet connectivity and tested with 10 simulated user accounts.',
      ],
    },
    {
      name: 'Image Generation using GANs (DCGAN & StyleGAN)',
      dates: 'Feb 2024 – May 2024',
      bullets: [
        'Trained DCGAN and StyleGAN on ~1,000 images to explore AI-based image generation and evaluation techniques.',
        'Analyzed output with similarity scores, clarity metrics, and performance trends across 50+ generated images.',
        'Optimized hyperparameters in PyTorch and visualized results across 100+ epochs.',
      ],
    },
    {
      name: 'Cloud Service Access Management System',
      dates: 'Oct 2023 – Dec 2023',
      bullets: [
        'Built a Node.js backend simulating access control for cloud APIs with 3 subscription tiers.',
        'Configured RBAC for 3 user roles and evaluated API quota enforcement with 100+ requests.',
        'Verified authentication via JWT and MongoDB; achieved 100% success on 30+ Postman integration tests.',
      ],
    },
  ],
  skills: [
    {
      category: 'Languages & Databases',
      items: ['C', 'C++', 'Java', 'JavaScript', 'Python', 'Solidity', 'Rust', 'TypeScript', 'MySQL', 'NoSQL'],
    },
    {
      category: 'Web & Frameworks',
      items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'TailwindCSS'],
    },
    {
      category: 'Blockchain Tools',
      items: ['Hardhat', 'Ethers.js', 'MetaMask', 'WAGMI', 'Chainlink', 'Ganache', 'Alchemy'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['Microsoft Azure', 'Google Cloud Platform', 'AWS', 'Git', 'Jira', 'Postman'],
    },
    {
      category: 'Other Tools & AI',
      items: ['MongoDB', 'JWT', 'REST APIs', 'PyTorch', 'Generative AI'],
    },
  ],
  certifications: [
    'Smart Contracts (University at Buffalo, Coursera)',
    'AWS Services for Solutions Architect Associate (Udemy)',
  ],
  publications: [
    'A Survey on Supply Chain Management Using Blockchain. International Journal of Advances in Engineering and Management (IJAEM), Volume 4, Issue 7, July 2022.',
  ],
};

export default resume;
