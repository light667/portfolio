// Non-translatable data (links, stacks, images). Texts live in src/locales/*/translation.json.

export const PROFILE = {
  email: 'nethaniahdjossou@gmail.com',
  phone: '+228 70 70 31 11',
  whatsapp: 'https://wa.me/22870703111',
  github: 'https://github.com/light667',
  linkedin: 'https://www.linkedin.com/in/kokou-light-djossou-90216233b/',
  instagram: 'https://www.instagram.com/l_ight.ai/',
  cv: '/cv.pdf',
  cvFileName: 'CV_Light_DJOSSOU_AI_ML_Engineer.pdf',
};

export const EXPERIENCES = [
  {
    id: 'analystlab',
    company: 'AnalystLab Africa',
    url: 'https://github.com/light667/Machine-Learning-Internship-AnalystLab-Africa',
    tags: ['scikit-learn', 'Pandas', 'Feature engineering', 'Classification'],
  },
  {
    id: 'mawaba',
    company: 'Mawaba Technologies',
    url: 'https://mawabatechnologies.com/',
    tags: ['RAG', 'LangChain', 'ChromaDB', 'Mistral', 'Gemini'],
  },
  {
    id: 'neuractif',
    company: 'Neuractif Initiatives',
    url: 'https://neuractif.org/en/',
    tags: ['Python', 'Agile', 'Git', 'AI'],
  },
];

// category: ml | rag | agent | product
export const PROJECTS = [
  {
    id: 'oren',
    category: 'agent',
    featured: true,
    stack: ['Next.js', 'TypeScript', 'Supabase', 'LLM tool calling', 'Vision', 'Speech-to-text'],
    live: 'https://oren-agent.vercel.app/',
    code: 'https://github.com/light667/Oren-META-AI-HACKATHON',
  },
  {
    id: 'arcep',
    category: 'rag',
    stack: ['LangChain', 'ChromaDB', 'Mistral', 'Gemini'],
  },
  {
    id: 'churn',
    category: 'ml',
    stack: ['scikit-learn', 'Pandas', 'Jupyter'],
    code: 'https://github.com/light667/Machine-Learning-Internship-AnalystLab-Africa',
  },
  {
    id: 'credit',
    category: 'ml',
    wip: true,
    stack: ['LightGBM', 'SHAP', 'FastAPI', 'Docker', 'pytest'],
    code: 'https://github.com/light667/Credit-Scoring',
  },
  {
    id: 'otr',
    category: 'rag',
    wip: true,
    stack: ['Python', 'PDF parsing', 'RAG', 'pytest'],
    code: 'https://github.com/light667/otr-rag',
  },
  {
    id: 'belvedere',
    category: 'rag',
    stack: ['SQL', 'LLM', 'RAG', 'Jupyter'],
    code: 'https://github.com/light667/RAG-Hotel-Belvedere',
  },
  {
    id: 'orderbot',
    category: 'agent',
    stack: ['Gemini 1.5 Flash', 'Chainlit', 'Python'],
    code: 'https://github.com/light667/LIGHTFOOD-ORDERBOT',
  },
  {
    id: 'pulse',
    category: 'product',
    image: '/projects/pulseai.jpg',
    stack: ['Next.js', 'Mistral', 'Groq', 'Supabase'],
    live: 'https://pulse-34ai.vercel.app/',
    code: 'https://github.com/light667/PulseAI-34AI',
  },
  {
    id: 'flyai',
    category: 'product',
    image: '/projects/flyai.jpg',
    stack: ['Flutter', 'Next.js', 'Supabase', 'Mistral', 'LangChain', 'RAG'],
    live: 'https://fly-ai-page.vercel.app/',
  },
];
