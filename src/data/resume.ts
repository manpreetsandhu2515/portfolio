export interface Project {
  id: string
  title: string
  subtitle: string
  category: 'Full-Stack' | 'Machine Learning' | 'Web & Security' | 'Data Analytics'
  period: string
  description: string
  bulletPoints: string[]
  tags: string[]
  featured: boolean
  githubUrl?: string
  demoUrl?: string
  architectureHighlights: string[]
  metrics?: string
}

export interface SkillCategory {
  title: string
  description: string
  icon: string
  skills: { name: string; level?: string; highlight?: boolean }[]
}

export interface Achievement {
  title: string
  organization: string
  description: string
  type: 'Hackathon' | 'Competitive Programming' | 'Academic'
  badge: string
}

export const RESUME_DATA = {
  personalInfo: {
    name: 'Manpreet Kaur Sandhu',
    title: 'Information Technology Undergraduate & Software Developer',
    location: 'Fatehgarh Sahib, Punjab, India',
    email: 'manpreetk9866@gmail.com',
    phone: '+91-8837700684',
    github: 'https://github.com/manpreetsandhu2515',
    linkedin: 'https://linkedin.com',
    profileImage: '/manpreet.jpg',
    summary:
      'Information Technology undergraduate student (Class of 2028) at Chandigarh University with strong fundamental knowledge in computer science, programming, database management, and machine learning algorithms. Experienced in writing clean code, solving algorithmic problems, and developing web applications and backend scripts.',
  },
  stats: [
    { label: 'LeetCode Solved', value: 200, suffix: '+' },
    { label: 'Academic CGPA', value: 7.02, suffix: '' },
    { label: 'Hackathons Attended', value: 3, suffix: '+' },
    { label: 'Key Projects', value: 3, suffix: '' },
  ],
  education: [
    {
      degree: 'Bachelor of Engineering in Information Technology',
      institution: 'Chandigarh University',
      period: 'Expected Graduation: May 2028 (Class of 2028)',
      score: 'CGPA: 7.02',
      highlights: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (OOP)',
        'Database Management Systems (DBMS)',
        'Operating Systems',
        'Machine Learning',
      ],
    },
    {
      degree: 'Higher Secondary Education (12th Standard)',
      institution: 'Mata Gujri Senior Secondary School',
      period: 'Completed',
      highlights: ['Physics, Chemistry, and Mathematics (PCM)'],
    },
  ],
  skillCategories: [
    {
      title: 'Programming & Core CS',
      description: 'Strong algorithmic foundation, data structures, and multi-language development',
      icon: 'Code2',
      skills: [
        { name: 'Python', highlight: true },
        { name: 'C++', highlight: true },
        { name: 'Java', highlight: true },
        { name: 'SQL', highlight: true },
        { name: 'JavaScript', highlight: true },
        { name: 'Data Structures & Algorithms (DSA)', highlight: true },
        { name: 'Object-Oriented Programming (OOP)', highlight: true },
        { name: 'SQL Query Optimization', highlight: true },
      ],
    },
    {
      title: 'Machine Learning & Data Analysis',
      description: 'Predictive modeling, data analytics, clustering, and data reconciliation',
      icon: 'Brain',
      skills: [
        { name: 'Decision Trees', highlight: true },
        { name: 'Clustering Algorithms', highlight: true },
        { name: 'Neural Networks', highlight: true },
        { name: 'Scikit-Learn', highlight: true },
        { name: 'Data Preprocessing', highlight: true },
        { name: 'Data Reconciliation', highlight: true },
      ],
    },
    {
      title: 'Tools & Platforms',
      description: 'Database management, version control systems, and AI engineering tools',
      icon: 'Cpu',
      skills: [
        { name: 'MySQL', highlight: true },
        { name: 'Git & GitHub', highlight: true },
        { name: 'Linux Bash', highlight: true },
        { name: 'Google Colab', highlight: false },
        { name: 'Cursor AI', highlight: true },
        { name: 'Jupyter Notebook', highlight: false },
        { name: 'VS Code', highlight: false },
      ],
    },
    {
      title: 'Soft Skills & Competencies',
      description: 'Teamwork, active communication, documentation, and technical adaptability',
      icon: 'Wrench',
      skills: [
        { name: 'Team Collaboration', highlight: true },
        { name: 'Active Listening', highlight: true },
        { name: 'Verbal & Written Communication', highlight: true },
        { name: 'Technical Documentation', highlight: true },
        { name: 'Adaptability', highlight: true },
      ],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: 'internshield',
      title: 'InternShield',
      subtitle: 'Internship Safety Analytics Platform',
      category: 'Web & Security',
      period: 'Jan 2026',
      description:
        'Developed a web application using web technologies and basic machine learning techniques to evaluate internship safety.',
      bulletPoints: [
        'Developed a web application using web technologies and basic machine learning techniques to evaluate internship safety.',
        'Analyzed posting patterns to detect operational risks, unpaid work flags, and vague job descriptions for students.',
      ],
      tags: ['JavaScript', 'Machine Learning', 'Safety Analytics', 'Risk Parsing', 'GitHub Pages'],
      featured: true,
      githubUrl: 'https://github.com/manpreetsandhu2515/portfolio',
      metrics: 'Real-Time Safety Analytics',
      architectureHighlights: [
        'Pattern recognition heuristics to detect unpaid work flags and vague job descriptions',
        'Machine learning algorithms to score operational internship risk',
        'Deployed via automated CI/CD pipeline on GitHub Pages',
      ],
    },
    {
      id: 'walmart-reconciliation',
      title: 'Walmart Cash Agent Data Reconciliation Tool',
      subtitle: 'Financial Records & Data Reconciliation System',
      category: 'Data Analytics',
      period: 'Jan 2026',
      description:
        'Created a data reconciliation system for finance datasets to process financial records accurately.',
      bulletPoints: [
        'Created a data reconciliation system for finance datasets to process financial records accurately.',
        'Managed concurrent user access and implemented row-level locking to prevent data mismatch and concurrency issues.',
      ],
      tags: ['SQL', 'Data Reconciliation', 'Row-Level Locking', 'Concurrency Control', 'Finance Analytics'],
      featured: true,
      githubUrl: 'https://github.com/manpreetsandhu2515/portfolio',
      metrics: 'Zero-Mismatch Concurrency',
      architectureHighlights: [
        'Row-level database locking to enforce transaction isolation under concurrent user access',
        'Financial dataset reconciliation pipeline ensuring strict accounting accuracy',
        'Optimized relational database queries for large financial datasets',
      ],
    },
    {
      id: 'nexis',
      title: 'Nexis',
      subtitle: 'Public Welfare Scheme Platform Concept',
      category: 'Full-Stack',
      period: 'Mar 2026',
      description:
        'Designed platform workflow concepts and presentation layouts to help citizens easily find and apply for government welfare schemes.',
      bulletPoints: [
        'Designed platform workflow concepts and presentation layouts to help citizens easily find and apply for government welfare schemes.',
        'Streamlined citizen onboarding funnels for intuitive eligibility discovery and scheme application.',
      ],
      tags: ['Workflow Concepts', 'Civic Tech', 'UI/UX Layouts', 'Public Welfare'],
      featured: true,
      githubUrl: 'https://github.com/manpreetsandhu2515/portfolio',
      metrics: 'Simplified Civic Access',
      architectureHighlights: [
        'User journey mapping for simplified public scheme discovery',
        'Interactive layout structures for multi-scheme eligibility evaluation',
        'Clean multi-page presentation hierarchy for government welfare programs',
      ],
    },
  ] as Project[],
  experience: [
    {
      role: 'Technical Team Volunteer',
      organization: 'NGO “Jago”',
      period: 'May 2025 – Jun 2025',
      location: 'Punjab, India',
      description:
        'Converted paper-based field records into structured SQL database tables for easier access and reporting, working with team members to ensure technical tasks were completed according to project schedules.',
      bulletPoints: [
        'Converted paper-based field records into structured SQL database tables for easier access and reporting.',
        'Worked with team members to ensure technical tasks were completed according to project schedules.',
      ],
    },
  ],
  achievements: [
    {
      title: 'National Hackathons',
      organization: 'CosmoHacks ’26 (GNDU) | EY-Techathon 6.0 | Smart India Hackathon (SIH)',
      description:
        'Participated in CosmoHacks ’26 (Feb 2026 at GNDU), EY-Techathon 6.0, and Smart India Hackathon (SIH) to build functional software prototypes under time constraints.',
      type: 'Hackathon',
      badge: '3+ Hackathons',
    },
    {
      title: 'Competitive Programming',
      organization: 'LeetCode',
      description:
        'Solved 200+ problem-solving challenges on LeetCode covering array manipulation, trees, and decision logic.',
      type: 'Competitive Programming',
      badge: '200+ Solved',
    },
    {
      title: 'Technical Capacity Building',
      organization: 'Bio-Methanation Workshop',
      description:
        'Attended capacity building workshop on Organic Bio-Methanation in Chandigarh.',
      type: 'Academic',
      badge: 'Chandigarh',
    },
  ] as Achievement[],
  hobbies: [
    {
      title: 'Financial Markets & Investments',
      icon: 'TrendingUp',
      description: 'Tracking stock market trends, IPO grey market premiums, mutual funds, and ETFs.',
    },
    {
      title: 'Algorithmic Logic',
      icon: 'BookOpen',
      description: 'Solving complex problem-solving challenges on LeetCode spanning array manipulation, trees, and decision logic.',
    },
    {
      title: 'Technical Volunteering',
      icon: 'Utensils',
      description: 'Contributing technical expertise to community initiatives and database digitization for NGOs.',
    },
  ],
}
