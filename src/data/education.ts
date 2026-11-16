export interface Education {
  school: string;
  url?: string;
  logo?: string;
  logoFull?: boolean;
  degree: string;
  detail?: string;
  start: string;
  end: string;
}

export const education: Education[] = [
  {
    school: 'Georgia Institute of Technology',
    logo: '/logos/gatech.png',
    logoFull: true,
    url: 'https://omscs.gatech.edu',
    degree: 'M.S. Computer Science',
    detail: 'Part-time, online',
    start: '2027',
    end: '2029 (expected)',
  },
  {
    school: 'McMaster University',
    logo: '/logos/mcmaster.png',
    url: 'https://www.mcmaster.ca',
    degree: 'B.Eng. Electrical Engineering',
    detail: 'GPA 3.7 / 4.0',
    start: '2020',
    end: '2025',
  },
];

export const certifications = [
  { name: 'AWS Certified Solutions Architect – Associate (SAA-C03)', year: '2026' },
];
