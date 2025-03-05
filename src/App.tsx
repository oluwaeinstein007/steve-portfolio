import React, { useState } from 'react';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Award, 
  Briefcase, 
  Code, 
  BookOpen, 
  ChevronDown, 
  ExternalLink, 
  User, 
  FileText, 
  Medal, 
  PenTool, 
  ChevronUp 
} from 'lucide-react';
import steveImage from './steve.png';

function App() {
  const [showMoreExperience, setShowMoreExperience] = useState(false);

  const toggleMoreExperience = () => {
    setShowMoreExperience(!showMoreExperience);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">OGBAJE Stephen A.</h1>
              <h2 className="text-xl md:text-2xl mb-6">Technical Product Manager</h2>
              <p className="text-lg mb-8">Building innovative products with a focus on blockchain technology and digital transformation.</p>
              <div className="flex space-x-4">
                <a href="https://x.com/iamsirsteve" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-100 transition">
                  <Twitter size={24} />
                </a>
                <a href="https://github.com/Softdev1" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-100 transition">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/stephen-ogbaje" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-100 transition">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="bg-white p-4 rounded-lg shadow-lg text-gray-800">
                <div className="mb-2">
                  <span className="font-semibold">Email:</span> <a href="mailto:ogbajestephen94@gmail.com" className="text-blue-600 hover:underline">ogbajestephen94@gmail.com</a>
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Phone:</span> <a href="tel:+2348108369089" className="text-blue-600 hover:underline">(+234) 8108369089</a>
                </div>
                <div>
                  <span className="font-semibold">Location:</span> Lagos, Nigeria
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section with Picture */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img 
                src={steveImage}
                alt="Stephen Ogbaje" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-6">
                Technical Product Manager with a proven track record of developing and launching successful products. 
                Adept at collaborating with cross-functional teams, conducting market research, and analyzing customer 
                feedback to drive product strategy. Managed a portfolio of products with a total revenue of $2M, 
                resulting in a 20% increase in sales.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Key Skills:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                <li className="flex items-center"><span className="text-blue-600 mr-2">•</span> Blockchain and Web3 Technologies</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">•</span> Digital Payment Systems</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">•</span> Product Management</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">•</span> Power Apps Development</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">•</span> Web and Mobile Development</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">•</span> Critical Thinking and Problem-Solving</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">•</span> Team Leadership</li>
              </ul>
              
              <p className="text-lg">
                Stephen is motivated by a passion for innovation and is dedicated to using technology for positive change. 
                With a proven track record of success and a commitment to continuous learning and growth, 
                Stephen is ready to make significant contributions in any role or project he undertakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">
                <Award size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Departmental President</h3>
              <p>Served as President of Computer Engineering Department at Obafemi Awolowo University (2018/2019)</p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-indigo-600 mb-4">
                <Code size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">First Inclusive Hackathon</h3>
              <p>Organized the first-ever all-inclusive hackathon at the university, fostering innovation</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-purple-600 mb-4">
                <BookOpen size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competition Victory</h3>
              <p>Led the school team to victory in a prestigious computer science competition</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">
                <Briefcase size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Blockchain Pioneer</h3>
              <p>Organized the first-ever blockchain conference and built a food ordering solution on campus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Services and Awards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Community Services and Awards</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold">Blockchain Student Conference: OAU</h3>
                  <p className="text-lg italic">Organizer</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">June 2023</span>
                </div>
              </div>
              <p className="mb-2">I organized the first Blockchain Student Conference, which gathered over 1,500 individuals to discuss the rapidly evolving world of blockchain technology. The main focus of the conference was to equip students with essential Web3 skills that are necessary to excel in the modern economy.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold">Google DevFest Festival: Lagos</h3>
                  <p className="text-lg italic">Volunteer</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Nov 2019</span>
                </div>
              </div>
              <p className="mb-2">I played a key role in coordinating the registration process and logistical arrangements. My efforts contributed to the seamless participation of attendees, ensuring a well-organized and engaging event.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold">Lagos Finance Conference: Lagos</h3>
                  <p className="text-lg italic">Speaker</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">June 2023</span>
                </div>
              </div>
              <p className="mb-2">Delivered a keynote on cryptocurrency's role in financial inclusion and economic transformation.</p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold">Future of Work :University of Accra,Ghana</h3>
                  <p className="text-lg italic">Speaker and Hackathon Judge</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">March 2025</span>
                </div>
              </div>
              <p className="mb-2">Delivered a talk on the Academia and industry in Ghana and also was part of the Judges for the hackathon competition.</p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold">NFT, NYC</h3>
                  <p className="text-lg italic">Speaker (Panelist)</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Nov 2022</span>
                </div>
              </div>
              <p className="mb-2">I spoke in a panel session alongside several speakers across the globe, about digitizing African art and preserving originality using NFT, during a conference, in the United Kingdom.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-xl font-bold">IQ.Wiki: Remote, USA</h3>
                <p className="text-lg">Technical Product Manager</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">June 2022 - Present</span>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Successfully spearheaded the launch of IQ.wiki, the largest blockchain encyclopedia on the Polygon blockchain</li>
              <li>Led the prioritization of the product backlog and shipped over 60% of customer's requests within 9 months</li>
              <li>Directed a talented product team through the intricate software development life cycle</li>
              <li>Pioneered the introduction of IQ.opt, an AI-powered search engine specializing in cryptocurrency and blockchain</li>
            </ul>
            <div className="mt-4">
              <a href="https://iq.wiki" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                Visit Website <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-xl font-bold">NITDA Agency, Nigeria</h3>
                <p className="text-lg">Lead Product Manager</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Dec 2023 - Dec 2024</span>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Spearheaded the development of AccessTrak, an attendance management system that optimized agency operations</li>
              <li>Designed and implemented SpendTrak, leveraging Microsoft PowerApps to streamline over 2,000+ annual approval requests</li>
              <li>Led the creation of AssetTrak, a comprehensive solution for managing agency assets</li>
            </ul>
            <div className="mt-4">
              <a href="https://nitda.gov.ng" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                Visit Website <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
          
          {showMoreExperience && (
            <>
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold">UBA Bank, USA</h3>
                    <p className="text-lg">Contract Senior Product Manager / UX Designer</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Jan 2022 - Dec 2022</span>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Spearheaded the design and development of an internal hiring application, delivering innovative features to streamline the recruitment process</li>
                  <li>Conducted user research and usability testing, gathering insights to enhance user experience and align with stakeholders' goals</li>
                  <li>Defined product vision, roadmap, and feature prioritization to ensure timely delivery of project milestones</li>
                  <li>Designed wireframes, prototypes, and high-fidelity mockups to communicate product concepts effectively to developers and stakeholders</li>
                  <li>Collaborated with cross-functional teams, including engineers and business analysts, to ensure feature feasibility and alignment with technical requirements</li>
                  <li>Implemented agile methodologies to optimize workflow, ensuring adaptability and focus on delivering customer-centric solutions</li>
                </ul>
                <div className="mt-4">
                  <a href="https://www.ubaamerica.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                    Visit Website <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Garden venture: Ikeja, Lagos</h3>
                    <p className="text-lg">Digital Product Manager</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">August 2021 - Dec 2021</span>
                  </div>
                </div>
                <p className="mb-4 italic text-gray-600">Garden Ventures is a tech company focusing on integrating automation with analytics, offering solutions like SpendTrak, AccessTrak, and AssetTrak to optimize business processes. Specializing in low-code platforms, it transforms data into actionable insights, enhancing decision-making and productivity. Known for innovation and customer-centric solutions in the automation-to-analytics sector.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Effectively communicated with key stakeholders such as NXY and significant customers to gather valuable insights and requirements</li>
                  <li>Collaborated closely with internal teams and customers to ensure a collaborative approach to product development and success for products like Spendtrak, Leavetrak, Accesstrak, and Risktrak</li>
                  <li>Demonstrated a passion for innovation, driving continuous improvements in products and processes to achieve a 20% increase in customer satisfaction</li>
                  <li>Optimized program evaluation processes and data analysis for clients through effective data interpretation, enhancing the performance of products like Spendtrak and leading to a revenue turnover of $1.5M</li>
                  <li>Leveraged mobile technology to pioneer the development of Spendtrak, a Microsoft PowerApps-powered internal tool, streamlining over 2,000+ approval and non-approval-based requests annually</li>
                  <li>Monitored product performance and customer feedback to continuously improve products, transforming market insights and customer feedback into actionable improvements for LeaveTrak, a time-off management application</li>
                </ul>
                <div className="mt-4">
                  <a href="https://gardenventures.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                    Visit Website <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </>
          )}
          
          <div className="text-center mt-8">
            <button 
              onClick={toggleMoreExperience} 
              className="flex items-center mx-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
            >
              {showMoreExperience ? (
                <>Hide Experience <ChevronUp size={20} className="ml-2" /></>
              ) : (
                <>View More Experience <ChevronDown size={20} className="ml-2" /></>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Product Management Tools Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Product Management Tools</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">
                <PenTool size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Github Issues</h3>
              <p className="text-gray-600">For task tracking and project management in development workflows</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">
                <PenTool size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Jira</h3>
              <p className="text-gray-600">For agile project management and issue tracking</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">
                <PenTool size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trello</h3>
              <p className="text-gray-600">For visual task management and team collaboration</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">
                <PenTool size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Odoo</h3>
              <p className="text-gray-600">For integrated business management and ERP solutions</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">
                <PenTool size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Aha!</h3>
              <p className="text-gray-600">For product roadmapping and strategic planning</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">
                <PenTool size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">GitLab</h3>
              <p className="text-gray-600">For DevOps lifecycle and CI/CD pipelines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">
                <FileText size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">How to Become a Product Manager</h3>
              <p className="text-gray-600">Udemy</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">
                <FileText size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Building Digital Product</h3>
              <p className="text-gray-600">Product School</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">
                <FileText size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Google UX Design Professional</h3>
              <p className="text-gray-600">Google</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">
                <FileText size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Product Analytics</h3>
              <p className="text-gray-600">Product School</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">
                <FileText size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Training on Scrum Master</h3>
              <p className="text-gray-600">Scrum.org</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">
                <FileText size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Python and JavaScript</h3>
              <p className="text-gray-600">Codecademy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-blue-600 mr-2"><Medal size={24} /></span>
                Design
              </h3>
              <p>Figma, CorelDraw, Photoshop, Canva</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-blue-600 mr-2"><FileText size={24} /></span>
                Documentation
              </h3>
              <p>Notion, Google Docs</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-blue-600 mr-2"><Briefcase size={24} /></span>
                Product Management
              </h3>
              <p>Agile Methodology, Customer Facing, Emerging Technology, Product Management, Strategic Thinking, Quality Assurance, Leadership, Product strategy, Roadmap development, Analytical skill, Customer focus, UX Review, KPI Tracking, Product Vision and Roadmap, Stakeholder Management, Collaboration with Engineering Team, Requirements Building, Competitive Analysis, presentation skills, Scrum master, Competitive Analysis, decision Making, Prototyping, Backlog Refinement, Data-Driven Decision Making, Customer Interviews, Commercial Success, Customer-Centricity</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-blue-600 mr-2"><Code size={24} /></span>
                Frontend
              </h3>
              <p>HTML, CSS, JavaScript, React</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-blue-600 mr-2"><Code size={24} /></span>
                Blockchain Technologies
              </h3>
              <p>solidity,IPFS</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-blue-600 mr-2"><User size={24} /></span>
                Languages
              </h3>
              <p>English, Yoruba,Igbo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-xl font-bold">Obafemi Awolowo University</h3>
                <p className="text-lg">B.Sc Computer Science with Mathematics</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">2nd Class</span>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-lg mb-2">Leadership & Achievements:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>President, National Association of Computer Students</li>
                <li>Organized the University's first Hackathon, strengthened student-faculty relations</li>
                <li>Built a food ordering solution as a student on campus</li>
                <li>Led the school to win a computer science related competition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academic & Research Interests */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Academic & Research Interests</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Product Development</h3>
              <p>Digital innovation, user experience design, and product strategy</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Artificial Intelligence</h3>
              <p>AI applications and blockchain integration for innovative solutions</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Business Strategy</h3>
              <p>Market-driven product design and business development</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Software Architecture</h3>
              <p>Scalable software architecture and engineering principles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          
          <div className="max-w-xl mx-auto bg-white text-gray-800 rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Your Email" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Subject" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea className="w-full p-2 border border-gray-300 rounded-md h-32" placeholder="Your Message"></textarea>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition w-full">Send Message</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">OGBAJE Stephen A.</h3>
              <p>Technical Product Manager</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://x.com/iamsirsteve" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <Twitter size={24} />
              </a>
              <a href="https://github.com/Softdev1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/stephen-ogbaje" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} OGBAJE Stephen A. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
