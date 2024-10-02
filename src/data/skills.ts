import {
  type IconType,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiPostman,
  SiFigma,
  SiAsana,
  SiTrello,
  SiExpress,

} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'HTML', icon: SiHtml5 },
        { skill: 'CSS', icon: SiCss3 },
        { skill: 'Javascript', icon: SiJavascript },
        { skill: 'React', icon: SiReact },
        { skill: 'Angular', icon: SiAngular },
        { skill: 'Nextjs', icon: SiNextdotjs },
        { skill: 'Tailwind', icon: SiTailwindcss },
      ],
    },
    {
      field: 'Backend',
      skills: [
        { skill: 'NodeJs', icon: SiNodedotjs },
        { skill: 'ExpressJs',icon: SiExpress },
        { skill: 'postgreSQL', icon: SiPostgresql },
        { skill: 'mySQL', icon: SiMysql },
        { skill: 'Postman', icon: SiPostman },
      ],
    },
    {
      field: 'Conception',
      skills: [
        { skill: 'Trello', icon: SiTrello },
        { skill: 'Asana', icon: SiAsana },
        { skill: 'Figma', icon: SiFigma },
      ],
    },
  ]

export default SKILLS
