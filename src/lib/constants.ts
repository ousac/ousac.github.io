import { ScheduleItem, Speaker, Sponsor, MemberClub } from '@/types/types';

/**
 * Global Constants and Mock Data
 *
 * This file serves as the "database" for this static website.
 * All dynamic content (Speakers, Schedule, etc.) is defined here to allow
 * for easy updates without modifying component logic.
 */

// External Links
// These point to the Google Forms used for the data collection.
export const GOOGLE_FORM_REGISTRATION =
  'https://docs.google.com/forms/d/e/1FAIpQLSfHvBEd57RvGRmxztjD1M2PZwhWuNZsap0N4w2VJgPBGA3Sgg/viewform';
export const GOOGLE_FORM_ABSTRACT = 'https://forms.gle/o7eMqDv9D66DeJTFA';

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
    title: 'OUSAC 2026',
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
    text: 'OUSAC 2026 unites the brightest student minds with industry leaders from the NHL, NBA, and top analytics firms. Experience invited talks, panels, and our signature data challenge showcase.',
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
export const SPEAKERS: Speaker[] = [
  {
    id: 's1',
    firstName: 'Liam',
    lastName: 'Stevenson',
    role: 'Senior Data Scientist',
    organization: 'Toronto Blue Jays',
    bio: 'Leads predictive modelling products focusing on pro players and player evaluation. Driven by evolving analytical frameworks to quantify decisions at the highest level.',
    imagePath: '/img/liam_stevenson.jpeg',
    companyLogo: '/img/toronto_bluejays_logo.png',
    category: 'Keynote',
    isKeynote: true,
    socials: {
      linkedin: 'https://www.linkedin.com/in/liam-stevenson-9b753483/',
    },
  },
  {
    id: 's2',
    firstName: 'Devin',
    lastName: 'Pleuler',
    role: 'Sr. Director, R&D',
    organization: 'MLSE',
    bio: 'Leads the Sport Performance Lab at MLSE, working closely with teams on strategic research in sports analytics and player performance.',
    imagePath: '/img/ousac_logo.png',
    companyLogo: '/img/mlse_logo.png',
    category: 'Keynote',
    isKeynote: true,
    socials: { linkedin: 'https://www.linkedin.com/in/dpleuler/' },
  },
  {
    id: 's3',
    firstName: 'Meredith',
    lastName: 'Wills',
    role: 'Data Scientist',
    organization: 'SMT',
    bio: 'Ph.D. physicist with 20 years in solar astrophysics now applying automated tracking methods to measure player skills in live-game settings.',
    imagePath: '/img/meredith_willis.jpeg',
    companyLogo: '/img/smt_logo.webp',
    category: 'Keynote',
    isKeynote: true,
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
    socials: {},
  },
  {
    id: 'p2',
    firstName: 'Phil',
    lastName: 'Jevtovic',
    role: 'Analyst',
    organization: 'Canada Basketball',
    bio: 'Performance Analyst for Canada Basketball.',
    imagePath: '/img/ousac_logo.png',
    category: 'Featured',
    isKeynote: false,
    socials: {},
  },
  {
    id: 'p3',
    firstName: 'Tianyu',
    lastName: 'Guan',
    role: 'Assistant Professor',
    organization: 'York University',
    bio: 'Principal Investigator for the CANSSI Collaborative Research Team in Sports Analytics.',
    imagePath: '/img/ousac_logo.png',
    category: 'Featured',
    isKeynote: false,
    socials: {},
  },
  {
    id: 'p4',
    firstName: 'Brendan',
    lastName: 'Kumagai',
    role: 'Data Scientist',
    organization: 'Zelus Analytics',
    bio: 'Specializes in spatiotemporal tracking data and Bayesian models in hockey.',
    imagePath: '/img/ousac_logo.png',
    category: 'Featured',
    isKeynote: false,
    socials: {},
  },
  {
    id: 'c1',
    firstName: 'OJ',
    lastName: 'Adeyemi',
    role: 'Winner',
    organization: 'Canada Basketball Competition',
    bio: 'Presentation of the winning submission for the Canada Basketball Data Challenge.',
    imagePath: '/img/ousac_logo.png',
    category: 'Student',
    isKeynote: false,
    socials: {},
  },
];

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
    location: 'Main Hall',
    description: 'Check-in and breakfast.',
    speakerIds: [],
  },
  {
    id: 'sch2',
    startTime: '9:50 AM',
    endTime: '10:00 AM',
    title: 'Opening Remarks + Housekeeping',
    type: 'Keynote',
    location: 'Auditorium A',
    description: 'Welcome to OUSAC 2026.',
    speakerIds: [],
  },
  {
    id: 'sch3',
    startTime: '10:00 AM',
    endTime: '10:30 AM',
    title: 'Keynote 1',
    type: 'Keynote',
    location: 'Auditorium A',
    description: 'Keynote Address by Liam Stevenson.',
    speakerIds: ['s1'],
  },
  {
    id: 'sch4',
    startTime: '10:30 AM',
    endTime: '10:45 AM',
    title: 'Canada Basketball Winner',
    type: 'Competition',
    track: 'Technical',
    location: 'Auditorium A',
    description: 'Presentation by OJ Adeyemi.',
    speakerIds: ['c1'],
  },
  {
    id: 'sch5',
    startTime: '10:45 AM',
    endTime: '11:00 AM',
    title: 'Stretch Break',
    type: 'Break',
    location: 'Main Hall',
    description: '',
    speakerIds: [],
  },
  {
    id: 'sch6',
    startTime: '11:00 AM',
    endTime: '12:00 PM',
    title: 'Panel',
    type: 'Keynote',
    location: 'Auditorium A',
    description: 'Industry Panel Discussion.',
    speakerIds: ['p1', 'p2', 'p3', 'p4'],
  },
  {
    id: 'sch7',
    startTime: '12:00 PM',
    endTime: '1:00 PM',
    title: 'Lunch',
    type: 'Networking',
    location: 'Main Hall',
    description: 'Catered lunch served.',
    speakerIds: [],
  },
  {
    id: 'sch8',
    startTime: '1:00 PM',
    endTime: '1:30 PM',
    title: 'Keynote 2',
    type: 'Keynote',
    location: 'Auditorium A',
    description: 'Keynote Address by Devin Pleuler.',
    speakerIds: ['s2'],
  },
  {
    id: 'sch9',
    startTime: '1:30 PM',
    endTime: '1:40 PM',
    title: 'SPL Presentation 1',
    type: 'Competition',
    track: 'Technical',
    location: 'Auditorium A',
    description: 'Sport Performance Lab presentation.',
    speakerIds: [],
  },
  {
    id: 'sch10',
    startTime: '1:40 PM',
    endTime: '1:50 PM',
    title: 'SPL Presentation 2',
    type: 'Competition',
    track: 'Technical',
    location: 'Auditorium A',
    description: 'Sport Performance Lab presentation.',
    speakerIds: [],
  },
  {
    id: 'sch11',
    startTime: '1:50 PM',
    endTime: '2:15 PM',
    title: 'SPL Presentation 3',
    type: 'Competition',
    track: 'Technical',
    location: 'Auditorium A',
    description: 'Sport Performance Lab presentation.',
    speakerIds: [],
  },
  {
    id: 'sch12',
    startTime: '2:15 PM',
    endTime: '2:30 PM',
    title: 'Stretch Break',
    type: 'Break',
    location: 'Main Hall',
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
    location: 'Auditorium A',
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
    location: 'Auditorium A',
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
    location: 'Auditorium A',
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
    location: 'Auditorium A',
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
    location: 'Auditorium A',
    description: 'Research track presentation.',
    speakerIds: [],
  },
  {
    id: 'sch18',
    startTime: '3:45 PM',
    endTime: '4:00 PM',
    title: 'Stretch Break',
    type: 'Break',
    location: 'Main Hall',
    description: '',
    speakerIds: [],
  },
  {
    id: 'sch19',
    startTime: '4:00 PM',
    endTime: '4:30 PM',
    title: 'Keynote Closer',
    type: 'Keynote',
    location: 'Auditorium A',
    description: 'Closing Keynote by Meredith Wills.',
    speakerIds: ['s3'],
  },
  {
    id: 'sch20',
    startTime: '4:30 PM',
    endTime: '4:55 PM',
    title: 'Final Remarks + Awards',
    type: 'Keynote',
    location: 'Auditorium A',
    description: 'Student Awards and Thank You.',
    speakerIds: [],
  },
  {
    id: 'sch21',
    startTime: '4:55 PM',
    endTime: '5:00 PM',
    title: 'Conference Adjourns',
    type: 'Networking',
    location: 'Auditorium A',
    description: 'End of OUSAC 2026.',
    speakerIds: [],
  },
];

/**
 * Conference Sponsors.
 * Tiers are rendered with different sizing in the Sponsors component.
 */
export const SPONSORS: Sponsor[] = [
  {
    id: 'sp1',
    name: 'MLSE',
    tier: 'Platinum',
    logoPath: '/img/mlse_logo.png',
    website: 'https://www.mlse.com/',
  },
  {
    id: 'sp2',
    name: 'SMT',
    tier: 'Platinum',
    logoPath: '/img/smt_logo.webp',
    website: 'https://smt.com/',
  },
  {
    id: 'sp3',
    name: 'TISS',
    tier: 'Gold',
    logoPath: '/img/tiss_logo.png',
    website: 'https://tiss.ca/',
  },
  {
    id: 'sp4',
    name: 'CANSSI',
    tier: 'Silver',
    logoPath: '/img/canssi_logo.png',
    website: 'https://canssi.ca/',
  },
  {
    id: 'sp5',
    name: 'Toronto Blue Jays',
    tier: 'Platinum',
    logoPath: '/img/toronto_bluejays_logo.png',
    website: 'https://www.mlb.com/bluejays',
  },
  {
    id: 'sp6',
    name: 'MLSE Sport Performance Lab',
    tier: 'Dataset Partner',
    logoPath: '/img/mlse_logo.png',
    website:
      'https://www.mlsedigital.com/innovation-initiatives/sport-performance-lab',
    description: 'The Sport Performance Lab (SPL) at MLSE.',
  },
];

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
    logoPath: '/img/universities/university_of_toronto.png',
    description: 'U of T Sports Analytics Student Group.',
    linktreeUrl: 'https://linktr.ee/utspan',
  },
  {
    id: 'm2',
    name: 'UWAGGS',
    university: 'University of Waterloo',
    logoPath: '/img/universities/university_of_waterloo.avif',
    description:
      'University of Waterloo Analytics Group for Games and Sports. Established 2023.',
    linktreeUrl: 'https://linktr.ee/uwaggs',
  },
  {
    id: 'm3',
    name: 'QSAA',
    university: "Queen's University",
    logoPath: '/img/universities/queens_university.png',
    description: "Queen's Sports Analytics Organization.",
    linktreeUrl: 'https://linktr.ee/qsaoqueens2023',
  },
  {
    id: 'm4',
    name: 'Western Sports Analytics',
    university: 'Western University',
    logoPath: '/img/universities/western_university.png',
    description: 'Western Sports Analytics Club.',
    linktreeUrl: 'https://linktr.ee/wsac',
  },
  {
    id: 'm5',
    name: 'York Sports Analytics',
    university: 'York University',
    logoPath: '/img/universities/york_university.png',
    description: 'York Sports Analytics Club.',
    linktreeUrl: 'https://linktr.ee/yorkusac',
  },
];
