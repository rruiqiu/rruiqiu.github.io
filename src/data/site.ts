export const site = {
  name: 'Richard Qiu',
  fullName: 'Rui (Richard) Qiu',
  role: 'Software Engineer',
  /** Short interest tags shown under the name on the home page. */
  focus: ['Software engineering', 'Machine learning', 'Quant trading'],
  company: { name: 'ArcTrade', url: 'https://www.arctrade.com' },
  location: 'Toronto, ON',
  description:
    'Richard Qiu — software engineer in Toronto building CI/CD and platform tooling on AWS.',
  bio: [
    'I build the CI/CD and platform tooling that ships 300+ AWS services across regions, and I care about making software delivery boring in the best way.',
    'Previously I built manufacturing and warehouse software at Veoneer. McMaster EE grad, starting Georgia Tech’s OMSCS in 2027.',
    'Away from the keyboard you’ll find me on a climbing wall, a badminton court, or a bike somewhere around Toronto.',
  ],
  currently: 'Building CI/CD & platform tooling at ArcTrade · Starting Georgia Tech OMSCS in 2027',
  email: 'richardqiurui@outlook.com',
  resume: '/Richard_Qiu_Resume.pdf',
  links: {
    github: 'https://github.com/rruiqiu',
    linkedin: 'https://www.linkedin.com/in/rruiqiu/',
  },
  year: new Date().getFullYear(),
} as const;
