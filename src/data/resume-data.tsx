import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Michael Wojtanowicz",
  initials: "MW",
  location: "Philadelphia, Pennsylvania, United States",
  locationLink: "https://www.google.com/maps/place/Philadelphia",
  about:
    "Security Engineer focused on building solutions for enterprise, data, and software supply chains.",
  summary:
    "I'm a determined problem solver with experience building security automation, infrastructure, and tooling at scaling FinTech startups. ",
  avatarUrl: "https://avatars.githubusercontent.com/u/32144498?u=92aa5aecaa75c27bbbf90f3c608cd3a69d85a2b5&v=4",
  contact: {
    email: "michaeljwojo@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mikewojtanowicz",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mike-wojtanowicz/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "New York University: Tandon School of Engineering",
      degree: "Master of Science in Cybersecurity",
      start: "2021",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Greenlight",
      link: "https://greenlight.com",
      badges: ["Remote"],
      title: "Security Engineer II",
      logo: ParabolLogo,
      start: "July 2023",
      end: "Present",
      description:
        "DESCRIPTION",
    },
    {
      company: "Dwolla",
      link: "https://dwolla.com",
      badges: ["Remote"],
      title: "Information Security Engineer",
      logo: ClevertechLogo,
      start: "August 2022",
      end: "July 2023",
      description:
        "DESCRIPTION",
    },
    {
      company: "Lincoln Financial Group",
      link: "https://lincolnfinancial.com",
      badges: ["Remote"],
      title: "Cloud Security Engineer",
      logo: JojoMobileLogo,
      start: "June 2022",
      end: "August 2022",
      description:
        "DESCRIPTION",
    },
    {
      company: "Siemens Healthineers",
      link: "https://siemens-healthineers.com",
      badges: ["Remote"],
      title: "IT Engineer",
      logo: NSNLogo,
      start: "October 2021",
      end: "May 2022",
      description: "DESCRIPTION",
    },
  ],
  skills: [
    "Python",
    "Bash",
    "Linux",
    "MacOS",
    "Windows",
    "AWS-CDK",
    "Terraform",
    "Docker",
    "Splunk",
    "TCP/IP",
    "DNS",
    "TLS",
    "Tenable",
    "Jenkins",
    "Wireshark",
    "GitHub/GitLab/Bitbucket",
    "Jira",
  ],
} as const;
