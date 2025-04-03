type Project = {
  name: string
  description: string
  link: string
  video?: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Andromeda',
    description:
      'NikeId for homes',
    link: 'https://www.alloyterra.com',
    image: 'andromedabanner.png',
    id: 'project1',
  },
  {
    name: 'SalesProAI',
    description: 'AI-powered sales analysis app',
    link: 'https://salesproai.app/',
    image: 'spaibanr.png',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'AlloyTerra',
    title: 'Founder',
    start: '2024',
    end: 'Present',
    link: 'https://alloyterra.com',
    id: 'work1',
  },
  {
    company: 'LPUSA',
    title: 'Director of Development',
    start: '2024',
    end: '2025',
    link: 'localpowerusa.com',
    id: 'work2',
  },
  {
    company: 'Independent',
    title: 'Energy Consultant',
    start: '2021',
    end: '2024',
    link: 'https://lawrencejosephcirillo.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Automation',
    description: 'How AI is changing the way we work',
    link: '/blog/exploring-the-intersection-of-design-ai-and-automation',
    uid: 'blog-1',
  },
  {
    title: 'Why I am leaving the Solar Industry',
    description:
      'A deep dive into my the US residential solar industry and its challenges',
    link: '/blog/why-i-am-leaving-the-solar-industry',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from building five AI-powered apps in a year',
    description:
      'A look back at my first year truly developing applications',
    link: '/blog/what-i-learned-from-building-five-ai-powered-apps-in-a-year',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/LawrenceCirillo',
  },
  {
    label: 'X',
    link: 'https://x.com/AlloyTerra',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/lawrencecirillo/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/joey.cirillo',
  },
]

export const EMAIL = 'ljcirills@gmail.com'
