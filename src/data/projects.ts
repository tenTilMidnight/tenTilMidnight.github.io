export type Project = {
  slug: string; name: string; title: string; category: string; period: string;
  summary: string; focus: string; problem: string; approach: string[];
  tags: string[]; visual: 'agent' | 'matrix' | 'courses' | 'time';
  role: string | null; stage: string | null;
  evidence: { label: string; href: string }[];
};
export const projects: Project[] = [
  {
    slug: 'viaway', name: 'Viaway', title: 'A more focused career conversation.',
    category: 'AI product internship', period: 'Jul – Aug 2026',
    summary: 'A career-diagnosis agent that connects user intent to a more relevant next step.',
    focus: 'Scoping an agent around the needs it can meaningfully serve.',
    problem: 'A peer-services marketplace needed a career-diagnosis experience that could understand job seekers’ intentions and guide relevant users toward its services.',
    approach: ['Defined six user-intent categories and focused the experience on two best-fit intents.', 'Authored prompts for conversation, diagnosis, and report generation, refining them with examples and failure cases.', 'Structured personalized reports around user archetypes, gap analysis, and role recommendations.'],
    tags: ['Agent design', 'Product scope', 'Evaluation'], visual: 'agent',
    role: 'AI Product Manager Intern', stage: null, evidence: [],
  },
  {
    slug: 'vinsoo', name: 'Vinsoo', title: 'From job-search overload to a plan.',
    category: 'AI product internship', period: 'May – Jul 2026',
    summary: 'Research-informed career planning and a conversational onboarding experience.',
    focus: 'Translating a research insight into a product direction.',
    problem: 'User interviews surfaced decision fatigue and anxiety in the job search. The product direction centered on proactive career planning rather than another list of jobs.',
    approach: ['Used interview findings to inform positioning, roadmap trade-offs, and agent design.', 'Organized model recommendations into a 3 × 3 career development matrix.', 'Built a conversational onboarding flow informed by live job data.'],
    tags: ['User research', 'Onboarding', 'Product strategy'], visual: 'matrix',
    role: 'AI Product Manager Intern', stage: null, evidence: [],
  },
  {
    slug: 'academic-pathways', name: 'Academic Pathways', title: 'Make the next course a clearer choice.',
    category: 'Product project', period: 'Aug 2026 – Present',
    summary: 'A peer-contributed platform for exploring academic paths and comparing courses.',
    focus: 'Making useful peer knowledge easier to find and compare.',
    problem: 'Students repeatedly seek course advice through personal networks. Useful context is scattered across individual conversations and is difficult to reuse.',
    approach: ['Connected course histories, evolving interests, and career outcomes in a peer-contributed platform.', 'Designed structured comparisons of course content emphasis and teaching style.'],
    tags: ['Information design', 'Peer knowledge', 'Decision support'], visual: 'courses',
    role: null, stage: null, evidence: [],
  },
  {
    slug: 'time-insight', name: 'Time Insight', title: 'See where the day actually goes.',
    category: 'Product project', period: 'Feb 2026 – Present',
    summary: 'A productivity app that separates planning time from understanding time spent.',
    focus: 'Bringing planned and actual time into the same conversation.',
    problem: 'The way people schedule their time can be disconnected from how they actually spend it. Planning alone does not make that gap visible.',
    approach: ['Designed separate planning and logging views to make time use easier to understand.', 'Connected task management, a focus timer, and calendar logging in a lightweight flow.'],
    tags: ['Interaction design', 'Productivity', 'Everyday tools'], visual: 'time',
    role: null, stage: null, evidence: [],
  },
];
