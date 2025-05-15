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
  ,
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
];
