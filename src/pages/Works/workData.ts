import kabadijee from './kabadijee.png';
import Zamplia from '../../assets/workSampleImg/zamplia.jpeg';
import PlutosOne from './PlutosOne.png';
import boostroom from './boostroom.png';
import neumyth from './neumyth.png';
import neumythLogo from './neumyth_logo.png';
import svtech from './svtech.png';
import svtechLogo from './svtechLogo.jpg';
import hasthshilpLogo from './hasthshilpLogo.jpg';
import hasthshilp from './hasthshilp.png';
// company logo
import PandoIndia from '../../assets/CompanyLogo/LogoPando.fdd261119702b077a65f.png'
// Aonetech projects - using external images
const AONETECH_MONEY_VISIONARIES = 'https://www.aonetech.in/_next/image?url=%2Fdownload11.png&w=1200&q=75';
const AONETECH_INSPIRING_TOGETHER = 'https://www.aonetech.in/_next/image?url=%2Fdownload14.png&w=1200&q=75';
const AONETECH_MULTIFOLKS = 'https://www.aonetech.in/_next/image?url=%2Fdownload12.png&w=1200&q=75';
const AONETECH_MULTIFOLKS_FITCAM = 'https://www.aonetech.in/_next/image?url=%2Fdownload13.png&w=1200&q=75';
const AONETECH_VANKAZO = 'https://www.aonetech.in/_next/image?url=%2Fdownload9.png&w=1200&q=75';
const AONETECH_SOULSYNCING = 'https://www.aonetech.in/_next/image?url=%2Fdownload7.png&w=1200&q=75';

export const projects = [
  {
    name: 'Kabadijee',
    image: kabadijee,
    link: 'https://kabadijee.com/',
    githubLink: '',
    tags: ['React', 'Javascript', 'Redux-toolkit', 'Tailwind', 'Python', 'MySQL', 'Django'],
    features : ['Protected Routes', 'Lazy Loading', 'Role Beased Access Control (RBAC)', 'Dynamic Routing', '2 factor Authentication', 'Razorpay payment integration', '3 application based project'],
    organisationWorkedWith: "Pando India Software Consultants",
    organisationLogo: PandoIndia,
    description: "Kabadijee is an 3 application based single project where User or Corporate can sell their scraps and get payment to their bank account or upi and can see all the previous records of the ordering and the order is alloted to the vendor automatically based on area pincode and at the side of partner is used to confirm the users otp and confirm the pickup by clicking and uploading the image to the portal and when the admin approves the scheduled pickup then the payment is securily transfered to the partners and users bank account",
  },
  {
    name: 'Plutos One',
    image: PlutosOne,
    link: 'https://www.plutos.one/',
    githubLink: '',
    tags: ['HTML', 'CSS', 'JavaScript', "React.Js", "Redux-toolkit", "Python", "Django", "Rasa", "Postgres", "AWS"],
    features :['WhatsApp api integration, daily offers',', coupon code based on daily polls reward points','website inte'],
    organisationWorkedWith: "Plutos One",
    // organisationLogo: PandoIndia,
    description: "This is a Coupon based website where the user can get the coupon for various brands on a click, My role and responsibility was to create a chatbot into Rasa and integrate it to multiple Messaging applicaiton like whatsapp, telegram, GBM(Google Business Messaging) The coupons are based on Daily basis on trending topics they were delivering 100 points on daily basis and 50 points for referral. The flow chart was created first to clear the problem and then solved into the chunks. ",
  },
  {
    name: 'Zamplia',
    image: Zamplia,
    link: 'https://zamplia.com/',
    githubLink: '',
    tags: ['HTML', 'CSS', 'JavaScript', "React.Js", "Redux.JS", "Node.js", "Express.js", "My Sql"],
    features :['HMAC security', 'CRUD operations', 'IP address security'],
    organisationWorkedWith: "Pando India Software Consultants",
    organisationLogo: PandoIndia,
    description: "This online survey app integrates multiple vendors (Dynata, Voxco, Precision, Tap Research, Market Cube) providing diverse audience segments with varying qualifications, age groups, and more.",
  },
  {
    name: 'Neumyth Marketing',
    image: neumyth,
    link: 'https://www.neumyth.com/',
    githubLink: '',
    tags: ['HTML', 'CSS', 'JavaScript', "React.Js", "Tanstack React Query", "Node.js", "Express.js", "Postgres", "AWS", "AI/ML"],
    features :['Pdf Extraction', 'Deals Management', 'IP address security', "email verification", "payment Gateway integration(Razorpay)"],
    organisationWorkedWith: "Neumyth Marketing(freelancer)",
    organisationLogo: neumythLogo,
    description: "Neumyth is a smart digital deals platform that connects affiliates, publishers, and agents to promote and complete real-world offers. It streamlines deal tracking, proof submission, and payout processes through a unified dashboard, making deal marketing efficient, transparent, and automated.",
  },
  {
    name: 'Boostroom',
    image: boostroom,
    link: 'https://Boostroom.com/',
    githubLink: '',
    tags: ['HTML', 'CSS', 'JavaScript', "React.Js", "Redux.JS", "Node.js", "Express.js", "Postgres", "AWS", "Django", "Next.js"],
    features :['Gaming Offers Management', 'Microservices', 'IP address security'],
    organisationWorkedWith: "Mobrilz pvt. ltd.",
    organisationLogo: PandoIndia,
    description: "This online survey app integrates multiple vendors (Dynata, Voxco, Precision, Tap Research, Market Cube) providing diverse audience segments with varying qualifications, age groups, and more.",
  },
  {
    name: 'SVTech',
    image: svtech,
    link: 'https://svtechsoft.com/',
    githubLink: '',
    tags: ['HTML', 'CSS', 'JavaScript', "wordpress", "PHP", "MySQL"],
    features :['Salesforce Online Training', 'Job Support', 'Project Support'],
    organisationWorkedWith: "SVTech(freelancer)",
    organisationLogo: svtechLogo,
    description: "SV Tech Soft is a leading Salesforce online training and job support provider based in Hyderabad, India, offering expert-led live sessions, project support, and in-depth course materials. Since 2010, they've trained professionals globally in Salesforce Admin, Developer, CPQ, Marketing Cloud, and more, helping individuals and companies advance in the Salesforce ecosystem.",
  },
  {
    name: 'HashthShilp',
    image: hasthshilp,
    link: 'https://hasthshilp.com/',
    githubLink: '',
    tags: ['HTML', 'CSS', 'JavaScript', "wordpress", "PHP", "MySQL"],
    features :['E-commerce', 'Online Store', 'Payment Gateway Integration'],
    organisationWorkedWith: "SVTech(freelancer)",
    organisationLogo: hasthshilpLogo,
    description: "HasthShilp is India's first National Award-winning eCommerce platform offering authentic handlooms and handicrafts directly from artisans and weavers. Their curated collection includes textiles, home décor, and lifestyle products that reflect India's rich cultural heritage. By connecting artisans directly with customers, HasthShilp ensures authenticity and supports the livelihoods of traditional craftsmen.",
  },
  {
    name: 'Money Visionaries',
    image: AONETECH_MONEY_VISIONARIES,
    link: 'https://www.aonetech.in/our-work',
    githubLink: '',
    tags: ['React', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    features: ['Financial Insights', 'Money Management', 'Analytics Dashboard', 'Real-time Updates'],
    organisationWorkedWith: "Aonetech",
    description: "Money Visionaries is a comprehensive financial management platform built with React and TypeScript, providing users with powerful tools to track, analyze, and manage their finances. The platform delivers real-time financial insights and analytics through an intuitive, responsive interface.",
  },
  {
    name: 'Inspiring Together – NGO Volunteer & Senior Citizen Platform',
    image: AONETECH_INSPIRING_TOGETHER,
    link: 'https://www.aonetech.in/our-work',
    githubLink: '',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'AWS'],
    features: ['Volunteer Matching', 'Senior Citizen Support', 'Event Management', 'Community Engagement', 'Real-time Notifications'],
    organisationWorkedWith: "Aonetech",
    description: "Inspiring Together is a comprehensive NGO platform connecting volunteers with senior citizens for meaningful interactions and community support. Built with Next.js and TypeScript, it features volunteer matching systems, event management, and community engagement tools powered by Express.js backend and AWS infrastructure.",
  },
  {
    name: 'MultiFolks – AI Powered Eyewear eCommerce',
    image: AONETECH_MULTIFOLKS,
    link: 'https://www.aonetech.in/our-work',
    githubLink: '',
    tags: ['React', 'FastAPI', 'Python', 'TensorFlow', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel', 'MediaPipe'],
    features: ['AI-Powered Recommendations', 'Virtual Try-on', 'Product Catalog', 'Payment Integration', 'AI Computer Vision'],
    organisationWorkedWith: "Aonetech",
    description: "MultiFolks is an innovative AI-powered eyewear eCommerce platform that uses computer vision and machine learning to provide personalized eyewear recommendations. Built with React frontend and FastAPI backend, it integrates TensorFlow and MediaPipe for advanced AI features including virtual try-on capabilities.",
  },
  {
    name: 'MultiFolks AI Tool – Perfect Fit Cam',
    image: AONETECH_MULTIFOLKS_FITCAM,
    link: 'https://www.aonetech.in/our-work',
    githubLink: '',
    tags: ['React', 'TypeScript', 'Python', 'TensorFlow', 'FastAPI', 'Computer Vision', 'MediaPipe', 'PostgreSQL', 'Vercel'],
    features: ['Real-time Face Detection', 'Virtual Eyewear Try-on', 'AI Sizing Algorithm', 'Camera Integration', 'Instant Recommendations'],
    organisationWorkedWith: "Aonetech",
    description: "Perfect Fit Cam is an advanced AI tool that leverages computer vision, TensorFlow, and MediaPipe to enable real-time virtual eyewear try-on. The application uses facial recognition and sizing algorithms to recommend the perfect eyewear fit, providing users with instant, accurate recommendations through their camera.",
  },
  {
    name: 'Vankazo Dashboard',
    image: AONETECH_VANKAZO,
    link: 'https://www.aonetech.in/our-work',
    githubLink: '',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'GCP', 'GKE', 'Kubernetes'],
    features: ['Data Analytics', 'Real-time Monitoring', 'Microservices Architecture', 'Cloud Deployment', 'Scalable Infrastructure'],
    organisationWorkedWith: "Aonetech",
    description: "Vankazo Dashboard is a powerful analytics and monitoring platform deployed on Google Cloud Platform with Kubernetes orchestration. Built with React and Node.js, it features real-time data monitoring, comprehensive analytics, and a microservices architecture for exceptional scalability and performance.",
  },
  {
    name: 'soulsyncing',
    image: AONETECH_SOULSYNCING,
    link: 'https://www.aonetech.in/our-work',
    githubLink: '',
    tags: ['React Native', 'Python', 'Django', 'MySQL', 'Tailwind CSS', 'AWS'],
    features: ['Cross-platform Mobile', 'Real-time Sync', 'User Management', 'Data Persistence', 'Cloud Backend'],
    organisationWorkedWith: "Aonetech",
    description: "soulsyncing is a React Native mobile application with a powerful Django backend, designed for seamless cross-platform functionality. It features real-time data synchronization, robust user management, and persistent data storage, all backed by AWS infrastructure for reliability and scalability.",
  },
];
