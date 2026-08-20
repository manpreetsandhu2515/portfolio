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
    title: 'Information Technology Professional & Tech Specialist',
    location: 'Fatehgarh Sahib, Punjab, India',
    email: 'manpreetk9866@gmail.com',
    phone: '+91-8837700684',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    profileImage: '/manpreet.jpg',
    summary:
      'Analytical and solution-oriented Information Technology undergraduate with strong technical capabilities spanning software engineering, database query pipelines, system analysis, algorithms, and data engineering. Open and adaptable for all IT, Software, Data, Technical Consulting, and Client-Facing Technology roles.',
  },
  stats: [
    { label: 'LeetCode Solved', value: 150, suffix: '+' },
    { label: 'Academic Score', value: 87, suffix: '%' },
    { label: 'Hackathons Attended', value: 3, suffix: '+' },
    { label: 'Featured Projects', value: 4, suffix: '' },
  ],
  education: [
    {
      degree: 'Bachelor of Engineering in Information Technology',
      institution: 'Chandigarh University',
      period: 'Current Undergraduate',
      highlights: ['Information Technology Systems', 'Data Structures & Algorithms', 'Database Querying & Web Development'],
    },
    {
      degree: 'Higher Secondary Education (12th Standard)',
      institution: 'Mata Gujri Senior Secondary School',
      period: 'Completed',
      score: '87%',
      highlights: ['Core Science & Mathematics', 'Academic Distinction'],
    },
  ],
  skillCategories: [
    {
      title: 'Languages & Core CS',
      description: 'Strong problem solving, data structures, and multi-language development',
      icon: 'Code2',
      skills: [
        { name: 'Python', highlight: true },
        { name: 'TypeScript', highlight: true },
        { name: 'JavaScript', highlight: true },
        { name: 'C++', highlight: true },
        { name: 'Java', highlight: false },
        { name: 'SQL', highlight: true },
        { name: 'Data Structures & Algorithms (DSA)', highlight: true },
        { name: 'HTML5 / CSS3', highlight: false },
      ],
    },
    {
      title: 'IT & Web Technologies',
      description: 'Web development, RESTful APIs, security platforms, and deployment',
      icon: 'Cpu',
      skills: [
        { name: 'RESTful APIs', highlight: true },
        { name: 'React', highlight: true },
        { name: 'Streamlit', highlight: true },
        { name: 'Git & GitHub', highlight: true },
        { name: 'GitHub Pages & CI/CD', highlight: true },
        { name: 'Web Security Basics', highlight: true },
      ],
    },
    {
      title: 'Data & Intelligent Systems',
      description: 'Data analytics, relational SQL pipelines, and machine learning models',
      icon: 'Brain',
      skills: [
        { name: 'SQL Query Pipelines', highlight: true },
        { name: 'Predictive Modeling', highlight: true },
        { name: 'Feature Engineering', highlight: true },
        { name: 'Scikit-Learn', highlight: true },
        { name: 'Pandas & NumPy', highlight: true },
        { name: 'RAG & Vector Search', highlight: true },
      ],
    },
    {
      title: 'Tools & Intrapersonal',
      description: 'Version control, system analysis, leadership, and critical problem solving',
      icon: 'Wrench',
      skills: [
        { name: 'VS Code', highlight: false },
        { name: 'Jupyter Notebook', highlight: false },
        { name: 'Critical System Analysis', highlight: true },
        { name: 'Adaptable Problem Solving', highlight: true },
        { name: 'Self-Directed Learning', highlight: true },
        { name: 'Technical Team Leadership', highlight: true },
      ],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: 'smarty',
      title: 'Smarty',
      subtitle: 'RAG & Interactive Learning Platform',
      category: 'Full-Stack',
      period: '2026',
      description:
        'Interactive application supporting multi-modal document ingestion, voice interaction, and low-latency contextual retrieval.',
      bulletPoints: [
        'Engineered an interactive learning application using TypeScript supporting multi-modal document ingestion and voice interaction.',
        'Built vector indexing pipelines to transform unstructured PDF documents into high-dimensional embeddings for fast contextual retrieval.',
        'Implemented custom evaluation checkpoints to monitor output accuracy and minimize hallucination risks.',
      ],
      tags: ['TypeScript', 'Full-Stack', 'Vector Indexing', 'Multi-modal', 'Voice AI'],
      featured: true,
      githubUrl: 'https://github.com',
      demoUrl: 'https://example.com',
      metrics: 'High-speed retrieval architecture',
      architectureHighlights: [
        'High-dimensional vector embedding store',
        'Real-time document chunking & tokenization pipeline',
        'Custom hallucination scoring filter before answer generation',
      ],
    },
    {
      id: 'telecom-churn',
      title: 'Telecom Churn Engine',
      subtitle: 'Customer Churn Prediction & Analytics Engine',
      category: 'Machine Learning',
      period: '2026',
      description:
        'End-to-end machine learning application analyzing customer parameters to predict retention risk probabilities with natural language recommendations.',
      bulletPoints: [
        'Developed an end-to-end machine learning model in Python analyzing customer parameters to predict retention risk probabilities.',
        'Integrated low-latency Groq AI endpoints to generate automated, natural language retention recommendations based on model outputs.',
        'Deployed a dark-themed Streamlit user interface to visualize key decision metrics and feature importance.',
      ],
      tags: ['Python', 'Scikit-Learn', 'Groq AI API', 'Streamlit', 'Predictive Modeling'],
      featured: true,
      githubUrl: 'https://github.com',
      demoUrl: 'https://example.com',
      metrics: 'Sub-50ms Inference Response',
      architectureHighlights: [
        'RandomForest/XGBoost classification model',
        'Feature importance waterfall visualization',
        'Fast LLM inference for personalized retention offers',
      ],
    },
    {
      id: 'internshield',
      title: 'InternShield',
      subtitle: 'Fraud Detection & Student Safety Platform',
      category: 'Web & Security',
      period: '2025',
      description:
        'Web platform parsing internship listings in real-time to flag predatory patterns and protect students from scams.',
      bulletPoints: [
        'Built a web platform using JavaScript to parse internship listings and flag risk patterns to protect students from predatory offers.',
        'Managed automated continuous integration and hosting on GitHub Pages to maintain public accessibility.',
      ],
      tags: ['JavaScript', 'Web Engineering', 'Pattern Parsing', 'GitHub Pages', 'CI/CD'],
      featured: true,
      githubUrl: 'https://github.com',
      demoUrl: 'https://example.com',
      metrics: '100% Client-side privacy',
      architectureHighlights: [
        'RegEx and keyword threat detection heuristics',
        'Instant security badge assignment',
        'Zero-server footprint hosted via GitHub Actions & Pages',
      ],
    },
    {
      id: 'phonepe-analytics',
      title: 'PhonePe Data Analysis',
      subtitle: 'Comprehensive transaction & demographic intelligence platform',
      category: 'Data Analytics',
      period: '2025',
      description:
        'Multi-dimensional payment ecosystem analytics examining digital transaction trends, user behavior, and regional demographics across India.',
      bulletPoints: [
        "Developed an end-to-end data analysis pipeline examining PhonePe's digital payment ecosystem across 28+ Indian states and 600+ districts using Python and Jupyter Notebooks.",
        'Built exploratory data analysis workflows to extract transaction trends, user behavior patterns, and demographic correlations from multi-year, multi-quarterly datasets.',
        'Engineered data quality validation checks comparing state-level aggregates against district-level rollups to identify inconsistencies and ensure data integrity.',
      ],
      tags: ['Python', 'Pandas', 'Data Analysis', 'EDA', 'Jupyter', 'Business Intelligence'],
      featured: true,
      githubUrl: 'https://github.com',
      metrics: '28+ States & 600+ Districts',
      architectureHighlights: [
        'Multi-sheet Excel data pipeline with state, district, and device-level granularity',
        'Time-series transaction trend analysis (yearly and quarterly decomposition)',
        'Advanced merging & correlation analysis (population density vs. transaction volume)',
        'Data visualization suite (line plots, bar charts, pie charts, scatter plots)',
      ],
    },
    {
      id: 'walmart-analytics',
      title: 'Walmart Data Analytics',
      subtitle: 'Retail Sales Performance Query Framework',
      category: 'Data Analytics',
      period: '2025',
      description:
        'Relational data query pipelines to clean, aggregate, and evaluate sales performance across store locations.',
      bulletPoints: [
        'Formulated relational data query pipelines to clean, aggregate, and evaluate sales performance across retail store locations.',
        'Built complex SQL aggregation routines for trend analysis and store performance ranking.',
      ],
      tags: ['SQL', 'Data Analytics', 'Pandas', 'Relational DB', 'ETL Pipelines'],
      featured: false,
      githubUrl: 'https://github.com',
      metrics: 'Multi-store aggregate insights',
      architectureHighlights: [
        'Optimized indexed SQL queries',
        'Automated data cleaning & missing value treatment',
      ],
    },
  ] as Project[],
  experience: [
    {
      role: 'Technical Team Anchor',
      organization: 'NGO “Jago”',
      period: 'Leadership Experience',
      location: 'Punjab, India',
      description:
        'Digitized field operations and led technical initiative for regional field logs and real-time reporting.',
      bulletPoints: [
        'Digitized paper-based field logs into structured database queries to support real-time reporting across regional pods.',
        'Oversaw operational schedules, ensuring team milestones were achieved within designated timelines.',
      ],
    },
  ],
  achievements: [
    {
      title: 'Rapid Prototyping & Hackathons',
      organization: 'EY-Techathon 6.0 | CosmoHacks ’26 | SIH',
      description:
        'Designed functional software & tech prototypes under tight time constraints across prestigious national hackathons.',
      type: 'Hackathon',
      badge: 'Hackathon finalist',
    },
    {
      title: 'Algorithmic Optimization',
      organization: 'LeetCode',
      description:
        'Solved 150+ coding problems focusing on data structures, array manipulations, and complex search algorithms.',
      type: 'Competitive Programming',
      badge: '150+ Solved',
    },
  ] as Achievement[],
  hobbies: [
    {
      title: 'AI & Tech Blogging',
      icon: 'BookOpen',
      description: 'Writing technical walkthroughs on software architectures, system analysis, and tech trends.',
    },
    {
      title: 'Culinary Formulation',
      icon: 'Utensils',
      description: 'Experimenting with precise temperature controls in specialty frozen desserts and layered rice dishes.',
    },
    {
      title: 'Quantitative Logic',
      icon: 'TrendingUp',
      description: 'Solving logical puzzles, mathematical brainteasers, and tracking financial market trends.',
    },
  ],
}
