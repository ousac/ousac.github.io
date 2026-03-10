import { ScheduleItem, Speaker, Sponsor, MemberClub } from '@/types/types';

/**
 * Global Constants and Mock Data
 *
 * This file serves as the "database" for this static website.
 * All dynamic content (Speakers, Schedule, etc.) is defined here to allow
 * for easy updates without modifying component logic.
 */

// External Links
export const GOOGLE_FORM_ABSTRACT = 'https://forms.gle/o7eMqDv9D66DeJTFA';

// Feature Flags
export const SHOW_SPEAKERS = true;
export const SHOW_SPONSORS = true;
export const SHOW_SCHEDULE = true;

// Stripe Payment Links (created in Stripe Dashboard)
export const STRIPE_PAYMENT_LINKS = {
  regularTicket: 'https://buy.stripe.com/fZueVe4Nffp5cwe8zR9Ve00',
  studentTicket: 'https://buy.stripe.com/14A7sM5Rj5OvdAi2bt9Ve01',
  virtualTicket: 'https://buy.stripe.com/28EdRa6Vnel10Nw5nF9Ve02',
};

export const TICKET_CONTENT = {
  section: {
    title: 'Get Your Ticket',
    subtitle: 'Join us for an unforgettable day of sports analytics',
    description:
      'Secure your spot at OUSAC 2026. Choose between in-person attendance or virtual streaming. In-person tickets include catered lunch and networking opportunities.',
  },
  regularTicket: {
    name: 'In-Person - Professional',
    price: '$10',
    features: [
      'In-person attendance at UofT',
      'Full conference access',
      'Keynote presentations from industry leaders',
      'Panel discussions and Q&A sessions',
      'Student research presentations',
      'Networking opportunities',
      'Catered lunch included',
    ],
  },
  studentTicket: {
    name: 'In-Person - Student',
    price: '$5',
    badge: 'Student Discount',
    features: [
      'In-person attendance at UofT',
      'Full conference access',
      'Keynote presentations from industry leaders',
      'Panel discussions and Q&A sessions',
      'Student research presentations',
      'Networking opportunities',
      'Catered lunch included',
    ],
    honorSystemNote:
      'This ticket operates on an honor system. No student verification required.',
  },
  virtualTicket: {
    name: 'Virtual Attendance',
    price: 'Free',
    badge: 'Remote',
    features: [
      'Live stream access to all keynotes',
      'Live stream of panel discussions',
      'Access to student presentations',
      'Q&A participation via chat',
      'Digital conference materials',
    ],
    note: 'Virtual ticket does not grant in-person entry. You must purchase an in-person ticket to attend physically.',
  },
};

export const SITE_CONTENT = {
  navbar: {
    title: 'OUSAC',
    logoAlt: 'OUSAC Logo',
  },
  hero: {
    statusBadge: 'Registration Open',
    headlinePrefix: 'Data Driven.',
    headlineSuffix: 'Game Changing.',
    subtext:
      'The 2nd Annual Ontario Universities Sports Analytics Conference. Where academic rigor meets professional application.',
    ctaMain: 'Register',
    ctaSecondary: 'View Schedule',
    date: 'March 14, 2026',
    location: 'University of Toronto',
    statsTitle: 'Live Data Challenges',
    statsText: 'Compete with student talent across the province.',
    imageAlt: 'Analytics Visualization',
  },
  valueProp: {
    title: 'Bridging the Gap',
    text: 'OUSAC unites the brightest student minds with industry leaders from the MLB, NHL, NBA, and top analytics firms. Experience invited talks, panels, and our signature data challenge showcase.',
  },
  speakers: {
    label: 'Voices',
    title: 'Featured Speakers',
    link: 'View All Speakers',
  },
  socials: {
    instagram: 'https://www.instagram.com/ousacsportsanalytics/',
    linkedin:
      'https://www.linkedin.com/company/ontario-universities-sports-analytics-coalition/',
  },
};


// ----------------------------------------------------------------------
// DATA COLLECTIONS
// ----------------------------------------------------------------------

/**
 * List of confirmed speakers.
 * Note: 'isKeynote' determines inclusion in the Home page carousel.
 */
// RAW data
const ALL_SPEAKERS: Speaker[] = [
  {
    id: 's1',
    firstName: 'Liam',
    lastName: 'Stevenson',
    role: 'Lead Data Scientist - Strategic Modeling',
    organization: 'Toronto Blue Jays',
    bio: "U of T Engineering grad, has spent 7 years in the Blue Jays' R&D department",
    imagePath: '/img/speakers/liam_stevenson.jpeg',
    companyLogo: '/img/sponsors/toronto_bluejays_logo.png',
    category: 'Keynote',
    isKeynote: true,
    isAnnounced: true,
    socials: {
      linkedin: 'https://www.linkedin.com/in/liam-stevenson-9b753483/',
    },
  },
  {
    id: 's2',
    firstName: 'Devin',
    lastName: 'Pleuler',
    role: 'Sr. Director, R&D – Team Ops',
    organization: 'MLSE',
    bio: 'Devin Pleuler is the Senior Director of Research and Development at Maple Leaf Sports & Entertainment, where he leads the Sport Performance Lab — an applied research group integrating analytics, biomechanics, and technology across MLSE’s teams. He also recently taught a graduate course on Artificial Intelligence in Sports Analytics at the University of Toronto.',
    imagePath: '/img/speakers/devin_pleuler.jpeg',
    companyLogo: '/img/sponsors/mlse_logo.png',
    category: 'Keynote',
    isKeynote: true,
    isAnnounced: true,
    socials: { linkedin: 'https://www.linkedin.com/in/dpleuler/' },
  },
  {
    id: 's3',
    firstName: 'Meredith',
    lastName: 'Wills',
    role: 'Senior Data Scientist and SMT-U Program Director',
    organization: 'SMT',
    bio: 'Dr. Meredith Wills is a Senior Data Scientist and the SMT-U Program Director at SportsMEDIA Technology (SMT). Prior to joining the company in 2018, Wills did astrophysics research, studying the solar corona and the origins of solar storms. In her current role, she is a driving force behind the SMT Data Challenge. In her spare time, Wills does independent research on baseball construction, documenting numerous changes to the Major League baseball over the years. She is an alumna of Harvard University (’96) and has a M.S. (’99) and Ph.D. (’03) in Physics from Montana State University.',
    imagePath: '/img/speakers/meredith_willis.png',
    companyLogo: '/img/sponsors/smt_logo.webp',
    category: 'Keynote',
    isKeynote: true,
    isAnnounced: true,
    socials: {
      linkedin: 'https://www.linkedin.com/in/meredith-wills-0536765b',
    },
  },
  {
    id: 'p1',
    firstName: 'Jack',
    lastName: 'Davis',
    role: 'Assistant Professor',
    organization: 'University of Waterloo',
    bio: 'Leader in sports analytics education and co-founder of UWAGGS.',
    imagePath: '/img/ousac_logo.png',
    category: 'Featured',
    isKeynote: false,
    isAnnounced: false,
    socials: {},
  },
  {
    id: 'p2',
    firstName: 'Phil',
    lastName: 'Jevtovic',
    role: "Assistant General Manager, Men's 3x3 and High Performance Analytics",
    organization: 'Canada Basketball',
    bio: "Assistant General Manager, Men's 3x3 and High Performance Analytics, Canada Basketball and Assistant Coach on the Senior Men's National Team.",
    imagePath: '/img/speakers/philip_jevtovic.jpeg',
    category: 'Featured',
    isKeynote: false,
    isAnnounced: true,
    socials: {
      linkedin: 'https://www.linkedin.com/in/philip-jevtovic-99083947/',
    },
  },
  {
    id: 'p3',
    firstName: 'Brendan',
    lastName: 'Kumagai',
    role: 'Senior Data Scientist',
    organization: 'Teamworks Intelligence',
    bio: "Brendan is a Data Scientist at Teamworks Intelligence (formerly Zelus Analytics), focused on leveraging player and puck tracking data to provided partnered NHL teams with a competitive edge. Prior to his current role, Brendan graduated with a Master's in Statistics from Simon Fraser University where he worked on several sports analytics projects highlighted by a 1st place submission to the NFL's Big Data Bowl. As a Toronto native and lifelong math nerd, Brendan has a passion for pushing the frontier of hockey analytics using cutting-edge data and computational tools.",
    imagePath: '/img/speakers/brendan_kumagai.jpeg',
    category: 'Featured',
    isKeynote: false,
    isAnnounced: true,
    socials: {},
  },
  {
    id: 'p4',
    firstName: 'Mike',
    lastName: 'Heenan',
    role: 'Director of Analytics',
    organization: 'Shoreview Sports Analytics',
    bio: 'Mike Heenan is the Director of Analytics at Shoreview Sports Analytics, and previously served as Manager of Analytics at Canadian Tire Bank on behalf of the Canadian Olympic and Paralympic teams.',
    imagePath: '/img/speakers/mike_heenan.jpeg',
    category: 'Featured',
    isKeynote: false,
    isAnnounced: true,
    socials: {},
  },
  {
    id: 'c1',
    firstName: 'OJ',
    lastName: 'Adeyemi',
    role: 'Computer Science Student',
    organization: 'University of Toronto',
    bio: 'Presentation of the winning submission for the Canada Basketball Data Challenge.',
    imagePath: '/img/speakers/oj_adeyemi.jpg',
    category: 'Student',
    isKeynote: false,
    isAnnounced: false,
    socials: { linkedin: 'https://www.linkedin.com/in/ojadeyemi/' },
  },
];

export const SPEAKERS: Speaker[] = ALL_SPEAKERS.filter(
  (s) => s.isAnnounced === true
);

/**
 * Conference Schedule.
 * Times are display strings. Types are used for color coding and filtering.
 */
export const SCHEDULE: ScheduleItem[] = [
  {
    id: 'sch1',
    startTime: '9:00 AM',
    endTime: '9:50 AM',
    title: 'Registration',
    type: 'Networking',
    description: 'Check-in and breakfast.',
    speakerIds: [],
  },
  {
    id: 'sch2',
    startTime: '9:50 AM',
    endTime: '10:00 AM',
    title: 'Opening Remarks + Housekeeping',
    type: 'Keynote',
    description: 'Welcome to OUSAC 2026.',
    speakerIds: [],
  },
  {
    id: 'sch3',
    startTime: '10:00 AM',
    endTime: '10:30 AM',
    title: 'Keynote 1',
    type: 'Keynote',

    description: 'Keynote Address.',
    speakerIds: [],
  },
  {
    id: 'sch4',
    startTime: '10:30 AM',
    endTime: '10:45 AM',
    title: 'Canada Basketball Winner',
    type: 'Competition',
    track: 'Technical',

    description: 'Canada Basketball Analytics Competition winner presentation.',
    speakerIds: [],
  },
  {
    id: 'sch5',
    startTime: '10:45 AM',
    endTime: '11:00 AM',
    title: 'Stretch Break',
    type: 'Break',

    description: '',
    speakerIds: [],
  },
  {
    id: 'sch6',
    startTime: '11:00 AM',
    endTime: '12:00 PM',
    title: 'Panel',
    type: 'Keynote',

    description: 'Industry Panel Discussion.',
    speakerIds: [],
  },
  {
    id: 'sch7',
    startTime: '12:00 PM',
    endTime: '1:00 PM',
    title: 'Lunch',
    type: 'Networking',

    description: 'Catered lunch served.',
    speakerIds: [],
  },
  {
    id: 'sch8',
    startTime: '1:00 PM',
    endTime: '1:30 PM',
    title: 'Keynote 2',
    type: 'Keynote',

    description: 'Keynote Address.',
    speakerIds: [],
  },
  {
    id: 'sch9',
    startTime: '1:30 PM',
    endTime: '1:45 PM',
    title: 'SPL Presentation 1',
    type: 'Competition',
    track: 'Technical',

    description: 'Sport Performance Lab presentation.',
    speakerIds: [],
  },
  {
    id: 'sch10',
    startTime: '1:45 PM',
    endTime: '2:00 PM',
    title: 'SPL Presentation 2',
    type: 'Competition',
    track: 'Technical',

    description: 'Sport Performance Lab presentation.',
    speakerIds: [],
  },
  {
    id: 'sch11',
    startTime: '2:00 PM',
    endTime: '2:15 PM',
    title: 'SPL Presentation 3',
    type: 'Competition',
    track: 'Technical',

    description: 'Sport Performance Lab presentation.',
    speakerIds: [],
  },
  {
    id: 'sch12',
    startTime: '2:15 PM',
    endTime: '2:30 PM',
    title: 'Stretch Break',
    type: 'Break',

    description: '',
    speakerIds: [],
  },
  {
    id: 'sch13',
    startTime: '2:30 PM',
    endTime: '2:45 PM',
    title: 'Student Presentation 1',
    type: 'Competition',
    track: 'Technical',

    description: 'Research track presentation.',
    speakerIds: [],
  },
  {
    id: 'sch14',
    startTime: '2:45 PM',
    endTime: '3:00 PM',
    title: 'Student Presentation 2',
    type: 'Competition',
    track: 'Technical',

    description: 'Research track presentation.',
    speakerIds: [],
  },
  {
    id: 'sch15',
    startTime: '3:00 PM',
    endTime: '3:15 PM',
    title: 'Student Presentation 3',
    type: 'Competition',
    track: 'Technical',

    description: 'Research track presentation.',
    speakerIds: [],
  },
  {
    id: 'sch16',
    startTime: '3:15 PM',
    endTime: '3:30 PM',
    title: 'Student Presentation 4',
    type: 'Competition',
    track: 'Technical',

    description: 'Research track presentation.',
    speakerIds: [],
  },
  {
    id: 'sch17',
    startTime: '3:30 PM',
    endTime: '3:45 PM',
    title: 'Student Presentation 5',
    type: 'Competition',
    track: 'Technical',

    description: 'Research track presentation.',
    speakerIds: [],
  },
  {
    id: 'sch18',
    startTime: '3:45 PM',
    endTime: '4:00 PM',
    title: 'Stretch Break',
    type: 'Break',

    description: '',
    speakerIds: [],
  },
  {
    id: 'sch19',
    startTime: '4:00 PM',
    endTime: '4:30 PM',
    title: 'Keynote 3',
    type: 'Keynote',

    description: 'Closing Keynote Address.',
    speakerIds: [],
  },
  {
    id: 'sch20',
    startTime: '4:30 PM',
    endTime: '4:55 PM',
    title: "Final Remarks + Student Awards + Thank You's",
    type: 'Keynote',

    description: "Closing remarks, student awards, and thank you's.",
    speakerIds: [],
  },
  {
    id: 'sch21',
    startTime: '4:55 PM',
    endTime: '',
    title: 'Conference Adjourns',
    type: 'Networking',

    description: 'End of OUSAC 2026.',
    speakerIds: [],
  },
];

/**
 * Conference Sponsors.
 * Tiers are rendered with different sizing in the Sponsors component.
 */
const ALL_SPONSORS: Sponsor[] = [
  {
    id: 'sp1',
    name: 'SMT',
    tier: 'Platinum',
    logoPath: '/img/sponsors/smt_logo.png',
    website: 'https://smt.com/',
    isVisible: false,
    darkBackground: true,
  },
  {
    id: 'sp2',
    name: 'CANSSI',
    tier: 'Platinum',
    logoPath: '/img/sponsors/canssi_logo.png',
    website: 'https://canssi.ca/',
    isVisible: true,
  },
  {
    id: 'sp3',
    name: 'TISS',
    tier: 'Gold',
    logoPath: '/img/sponsors/tiss_logo.png',
    website: 'https://tiss.ca/',
    isVisible: true,
  },
  {
    id: 'sp4',
    name: 'MLSE',
    tier: 'In-Kind',
    logoPath: '/img/sponsors/mlse_logo.png',
    website: 'https://www.mlse.com/',
    isVisible: false,
  },
  {
    id: 'sp5',
    name: 'Toronto Blue Jays',
    tier: 'In-Kind',
    logoPath: '/img/sponsors/toronto_bluejays_logo.png',
    website: 'https://www.mlb.com/bluejays',
    isVisible: false,
  },
];

export const SPONSORS = ALL_SPONSORS.filter((s) => s.isVisible);

/**
 * Archive Photos (2025)
 * Place the curated images in public/img/archive/2025/ and update these paths.
 * Using local paths ensures Next.js optimizes them.
 */
export const ARCHIVE_PHOTOS = [
  '/img/archive/2025/photo1.jpg',
  '/img/archive/2025/photo2.jpg',
  '/img/archive/2025/photo3.jpg',
  '/img/archive/2025/photo4.jpg',
  '/img/archive/2025/photo5.jpg',
  '/img/archive/2025/photo6.jpg',
  '/img/archive/2025/photo7.jpg',
  '/img/archive/2025/photo8.jpg',
  '/img/archive/2025/photo9.jpg',
  '/img/archive/2025/photo10.jpg',
  '/img/archive/2025/photo11.jpg',
  '/img/archive/2025/photo12.jpg',
  '/img/archive/2025/photo13.jpg',
  '/img/archive/2025/photo14.jpg',
  '/img/archive/2025/photo15.jpg',
];

/**
 * Member Clubs.
 * Displayed on the Members page to highlight student organizations.
 */
export const MEMBER_CLUBS: MemberClub[] = [
  {
    id: 'm1',
    name: 'UTSPAN',
    university: 'University of Toronto',
    logoPath: '/img/clubs/utspan_logo.webp',
    universityLogo: '/img/universities/university_of_toronto.png',
    description: 'University of Toronto Sports Analytics Student Group',
    linktreeUrl: 'https://linktr.ee/utspan',
  },
  {
    id: 'm2',
    name: 'UWAGGS',
    university: 'University of Waterloo',
    logoPath: '/img/clubs/uwaggs_logo.webp',
    universityLogo: '/img/universities/university_of_waterloo.avif',
    description: 'University of Waterloo Analytics Group for Games and Sports',
    linktreeUrl: 'https://linktr.ee/uwaggs',
  },
  {
    id: 'm3',
    name: 'QSAO',
    university: "Queen's University",
    logoPath: '/img/clubs/qsao_logo.webp',
    universityLogo: '/img/universities/queens_university.png',
    description: "Queen's Sports Analytics Organization",
    linktreeUrl: 'https://linktr.ee/qsaoqueens2023',
  },
  {
    id: 'm4',
    name: 'WSAC',
    university: 'University of Western Ontario',
    logoPath: '/img/clubs/western_logo.webp',
    universityLogo: '/img/universities/western_university.png',
    description: 'Western Sports Analytics Club',
    linktreeUrl: 'https://linktr.ee/wsac',
  },
  {
    id: 'm5',
    name: 'YSAC',
    university: 'York University',
    logoPath: '/img/clubs/ysac_logo.webp',
    universityLogo: '/img/universities/york_university.png',
    description: 'York Sports Analytics Club',
    linktreeUrl: 'https://linktr.ee/yorkusac',
  },
];
