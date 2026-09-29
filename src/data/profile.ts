export const profile = {
  name: 'Grace Tian',
  fullName: 'Grace (Yuan) Tian',
  headline: 'I turn ideas into things people can use.',
  intro: 'I’m Grace, a maker studying Information Systems at Carnegie Mellon. I explore AI products and build tools around the decisions people make every day.',
  email: 'gracetia@andrew.cmu.edu',
  linkedin: 'https://www.linkedin.com/in/grace-tian-owo/',
  // GitHub username confirmed by Grace. Null values hide unavailable links.
  githubUsername: 'tenTilMidnight' as string | null,
  resumePath: null as string | null,
  interests: ['Ultimate frisbee', 'Football'],
  education: { school: 'Carnegie Mellon University', degree: 'B.S. in Information Systems', detail: 'Minors in Artificial Intelligence and Philosophy', graduation: 'Expected May 2028' },
};
export const githubUrl = profile.githubUsername ? `https://github.com/${profile.githubUsername}` : null;
