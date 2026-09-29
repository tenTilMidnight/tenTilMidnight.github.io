import { useEffect, useState } from 'react';
import { HashRouter, Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Plus, Check } from 'lucide-react';
import { profile, githubUrl } from './data/profile';
import { projects, type Project } from './data/projects';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); document.title = pathname === '/' ? 'Grace Tian — Maker & Product Thinker' : `${pathname.startsWith('/work/') ? projects.find(p => pathname.endsWith(p.slug))?.name ?? 'Project' : pathname.slice(1).replace(/^./, c => c.toUpperCase())} — Grace Tian`; }, [pathname]);
  return null;
}
function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return <header className="header"><div className="shell nav-row">
    <Link className="brand" to="/" aria-label="Grace Tian home"><span className="monogram">gt.</span><span>Grace Tian</span></Link>
    <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
    <nav id="main-nav" className={open ? 'navigation open' : 'navigation'} aria-label="Main navigation">
      <NavLink to="/work">Work</NavLink><NavLink to="/about">About</NavLink><NavLink to="/contact">Contact</NavLink>
      {profile.resumePath && <a href={`${import.meta.env.BASE_URL}${profile.resumePath.replace(/^\//, '')}`} target="_blank" rel="noreferrer">Resume</a>}
      <a className="nav-contact" href={`mailto:${profile.email}`}>Say hello</a>
    </nav>
  </div></header>;
}
function Footer() {
  return <footer className="shell footer"><Link className="brand" to="/">Grace Tian<span className="footer-note">Always making something.</span></Link><div className="footer-links">{githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>}<a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={`mailto:${profile.email}`}>Email</a></div><span className="copyright">© {new Date().getFullYear()} Grace Tian</span></footer>;
}
function ProjectGraphic({ type }: { type: Project['visual'] }) {
  return <div className={`project-graphic graphic-${type}`} aria-hidden="true">
    {type === 'agent' && <div className="agent-map"><span className="map-label">USER INTENT</span><div className="intent-dots">{Array.from({length:6}, (_,i) => <i key={i} className={i<2 ? 'chosen' : ''}/>)}</div><div className="connector"/><div className="agent-output"><span>6 intentions.</span><strong>2 focused paths.</strong></div></div>}
    {type === 'matrix' && <div className="matrix-map"><span className="map-label">CAREER DEVELOPMENT</span><div className="matrix">{Array.from({length:9}, (_,i) => <span key={i}>{i === 4 ? <Plus size={26}/> : ''}</span>)}</div><span className="graphic-caption">A little structure. A clearer next step.</span></div>}
    {type === 'courses' && <div className="course-map"><span className="map-label">A BETTER WAY TO COMPARE</span><div className="comparison"><div><span>Content</span><span>Teaching style</span><span>Peer context</span></div><div><i/><i/><i/></div><div><i/><i/><i/></div></div><span className="graphic-caption">Shared knowledge, made useful.</span></div>}
    {type === 'time' && <div className="time-map"><span className="map-label">TWO VIEWS. ONE DAY.</span><div className="time-line"><span>Plan</span><div><i/><i/><i/></div></div><div className="time-line actual"><span>Reflect</span><div><i/><i/><i/></div></div><span className="graphic-caption">The space between intention and action.</span></div>}
  </div>;
}
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <Link className="project-card" to={`/work/${project.slug}`}>
    <div className="graphic-wrap"><ProjectGraphic type={project.visual}/><span className="graphic-disclaimer">Concept diagram</span><span className="project-number">0{index+1}</span></div>
    <div className="card-meta"><span>{project.name}</span><span>{project.category}</span></div>
    <h3>{project.title}</h3><p>{project.summary}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    <span className="text-link">Explore project <Plus size={15}/></span>
  </Link>;
}
function Home() {
  return <><section className="hero shell"><div className="hero-top"><span className="eyebrow">Maker at heart. Product-minded.</span><span className="hero-location">CMU · Pittsburgh</span></div><h1>I turn ideas into<br/><span className="serif">things people can use.</span></h1><div className="hero-bottom"><p>{profile.intro}</p><Link className="button primary" to="/work">Explore my work</Link></div><div className="hero-rule"><span>Think it through.</span><span>Make it real.</span><span>Keep learning.</span></div></section>
    <section className="section shell"><div className="section-heading"><div><span className="eyebrow">01 / Selected work</span><h2>From a question<br/>to something <em>tangible.</em></h2></div><Link className="text-link" to="/work">All four projects <Plus size={16}/></Link></div><div className="project-grid">{projects.slice(0,3).map((p,i) => <ProjectCard key={p.slug} project={p} index={i}/>)}</div></section>
    <section className="experience-section"><div className="shell experience-layout"><div><span className="eyebrow">02 / In practice</span><h2>Learning by<br/><em>building.</em></h2><p>Two AI product internships.<br/>Different questions, hands-on work.</p></div><div className="experience-list">{projects.slice(0,2).map(p => <Link to={`/work/${p.slug}`} className="experience-item" key={p.slug}><span className="small-label">{p.period}</span><div><h3>{p.name}</h3><p>{p.role}</p></div><Plus size={22}/></Link>)}</div></div></section>
    <section className="shell about-teaser"><span className="eyebrow">03 / Beyond the projects</span><h2>Off screen.<br/><em>On the field.</em></h2><div><p>There’s more to me than the project list. Away from product work, my interests include ultimate frisbee and football.</p><Link className="text-link" to="/about">A little more about me <Plus size={16}/></Link></div></section><ContactStrip/>
  </>;
}
function ContactStrip() { return <section className="contact-strip shell"><div><span className="eyebrow">Let’s connect</span><h2>Have something<br/><em>worth making?</em></h2></div><a className="button primary" href={`mailto:${profile.email}`}>Say hello</a></section>; }
function Work() { return <section className="section shell page-section"><span className="eyebrow">Work / Ideas in practice</span><h1 className="page-title">A few things<br/>I’ve been <em>working on.</em></h1><p className="page-intro">AI career services, shared academic knowledge, and a clearer view of time. Four projects, each starting with a human question.</p><div className="project-grid work-grid">{projects.map((p,i) => <ProjectCard key={p.slug} project={p} index={i}/>)}</div></section>; }
function ProjectPage() {
  const { slug } = useParams(); const project = projects.find(p => p.slug === slug);
  if (!project) return <NotFound/>;
  const next = projects[(projects.indexOf(project)+1)%projects.length];
  return <article className="shell page-section detail-page"><Link className="text-link" to="/work">All work</Link><div className="detail-heading"><span className="eyebrow">{project.name} / {project.category}</span><h1 className="page-title">{project.title}</h1><p className="page-intro">{project.summary}</p></div><div className="detail-meta"><div><span className="small-label">When</span><p>{project.period}</p></div>{project.role && <div><span className="small-label">My role</span><p>{project.role}</p></div>}{project.stage && <div><span className="small-label">Stage</span><p>{project.stage}</p></div>}<div><span className="small-label">Focus</span><p>{project.tags.join(' · ')}</p></div></div><div className="detail-visual"><ProjectGraphic type={project.visual}/><span className="graphic-disclaimer">Concept diagram · not a product screenshot</span></div><div className="case-body"><section><span className="eyebrow">01 / The question</span><h2>{project.focus}</h2><p>{project.problem}</p></section><section><span className="eyebrow">02 / The work</span><h2>The product approach.</h2><ol className="approach-list">{project.approach.map((item,i) => <li key={item}><span>0{i+1}</span><p>{item}</p></li>)}</ol></section>{project.evidence.length>0 && <section><span className="eyebrow">03 / Supporting work</span><h2>A closer look.</h2>{project.evidence.map(e => <a className="evidence-link" key={e.href} href={e.href} target="_blank" rel="noreferrer">{e.label}</a>)}</section>}</div><Link className="next-project" to={`/work/${next.slug}`}><span className="small-label">Next project</span><h3>{next.name}</h3><Plus size={24}/></Link></article>;
}
function About() {
  return <><section className="shell page-section about-page"><span className="eyebrow">About / The person behind the work</span><h1 className="page-title">A maker.<br/>And a <em>work in progress.</em></h1><div className="about-intro"><div className="type-portrait" aria-label="Grace Tian monogram"><span>gt.</span><span className="small-label">CURIOUS. HANDS-ON. STILL LEARNING.</span></div><div><h2>Hi, I’m Grace.</h2><p>{profile.intro}</p><p>I like taking an idea beyond the conversation and into something concrete. My work spans career-service agents, a course comparison platform, and a time-insight app.</p><div className="education"><span className="eyebrow">Currently at</span><h3>{profile.education.school}</h3><p>{profile.education.degree}<br/>{profile.education.detail}<br/>{profile.education.graduation}</p></div></div></div><div className="interests"><span className="eyebrow">Away from the screen</span><h2>Room for the <em>rest of life.</em></h2><div className="interest-grid">{profile.interests.map((interest,i) => <div className="interest-card" key={interest}><span className="interest-num">0{i+1}</span><h3>{interest}</h3><span className="small-label">Beyond work</span></div>)}</div></div></section><ContactStrip/></>;
}
function Contact() {
  const [copied,setCopied] = useState(false);
  async function copy() { try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false),2500); } catch { setCopied(false); } }
  return <section className="shell page-section contact-page"><span className="eyebrow">Contact / Start a conversation</span><h1 className="page-title">Good things start<br/>with a <em>hello.</em></h1><p className="page-intro">I’d love to connect about product ideas, things you’re building, or work we could do together.</p><div className="contact-options"><div className="email-card"><Mail size={26}/><span className="small-label">Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a><button className="text-link" onClick={copy}>{copied ? <><Check size={16}/> Copied</> : 'Copy email'}</button><span className="sr-only" role="status">{copied ? 'Email copied to clipboard' : ''}</span></div><a className="social-card" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={25}/><span>LinkedIn</span><Plus size={22}/></a>{githubUrl && <a className="social-card" href={githubUrl} target="_blank" rel="noreferrer"><Github size={25}/><span>GitHub</span><Plus size={22}/></a>}</div></section>;
}
function NotFound() { return <section className="shell page-section"><span className="eyebrow">404</span><h1 className="page-title">A little <em>off course.</em></h1><p>This page doesn’t exist. Let’s get you back to the work.</p><Link className="button primary" to="/work">View work</Link></section>; }
export default function App() { return <HashRouter><ScrollToTop/><a className="skip-link" href="#main" onClick={event => { event.preventDefault(); document.getElementById('main')?.focus(); document.getElementById('main')?.scrollIntoView(); }}>Skip to content</a><Header/><main id="main" tabIndex={-1}><Routes><Route path="/" element={<Home/>}/><Route path="/work" element={<Work/>}/><Route path="/work/:slug" element={<ProjectPage/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></HashRouter>; }
