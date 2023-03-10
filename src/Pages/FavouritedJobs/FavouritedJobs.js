import React from 'react'
import { Text,View } from 'react-native'
import FavouriteJobCard from '../../components/FavouriteJobCard';

export default() => {
    const Job = 
        {
          "contents": "<p>Are you passionate about solving some of the world's most pressing challenges and making buildings smarter, more efficient, and more productive?  Are you interested in developing your career path within a global technology powerhouse which empowers employee creativity to change, challenge, and influence our business and customer relationships?<br><br>This is the career for you!<br><br>SIEMENS Smart Infrastructure is seeking an <strong>Automation Sr.</strong> <strong>Service Sales Manager</strong> to lead, manage and develop a team of sales professionals focused on driving life cycle and value based services such as system migrations, digital and energy related services to facility owners and end users within the local metropolitan market. This position reports to the Branch Sales Manager, Automation Service Portfolio.<br><br><strong>Responsibilities</strong><br><br><ul><li>To embrace and lead an ownership culture which embodies accountability, empowerment, teamwork and collaboration.</li><li>Be able to articulate and drive our Digitalization strategy of Remote Services and Big Data Analytics through tools such as Fault Detection and Diagnostics within our Proven Outcomes approach.</li><li>Ability to develop and drive energy related projects which focus on reducing a customer's utility spend while financially tailoring the solution to fit within their capital / operating budget requirements.</li><li>With a strong knowledge in strategic sales be able to develop and lead a team of sales professionals to be strategic, innovative thinkers developing digital, energy and life cycle service solutions for our customers.</li><li>Posses the ability to coach a sales team on how to create customer need and drive business closed within a new and existing customer base.</li><li>Collaborate with other Siemens sales groups such as construction sales, fire life safety and security sales to expand Siemens position.</li><li>Actively participate in senior-level selling on strategic projects or accounts as well as maintain senior-level relationships with existing owner / end user customers.</li><li>Be actively involved in meetings, presentations and entertainment events with customers.</li><li>Develop and implement a sales and marketing plan to drive market awareness and growth to meet business objectives.</li><li>Actively seek out and leverage resources (tools, best practices, subject matter experts) within the company to drive innovation and new offerings.</li><li>Key performance metrics include growth of: service contract base, service / migration and energy related projects.</li></ul><br><strong>Preferred Knowledge/Skills, Education, And Experience</strong><br><br><ul><li>Preferred education: Bachelor's Degree</li><li>Technical proficiency in IT, building technologies, demand side energy management and other related components</li><li>Successful history of managing and developing a sales team</li><li>Knowledge of and strong networking relationships within the local building market such as building owners and general/electrical/mechanical contractors strongly desired</li><li>Knowledge and experience utilizing the Challenger Sales Model strongly preferred</li><li>Must be willing and available to travel 5% overnight for training and business development</li><li>Must be legally authorized for employment in the United States and must not require employer sponsored work authorization now or in the future for employment in the United States</li><li>Must possess a valid, clean Driver's license in good standing and be at least 21 years of age in order to participate in the required Siemens vehicle FAVR program</li></ul><br><strong>This position supports a Siemens customer whorequires all employees and vendors to be fully vaccinated against COVID-19where permitted by applicable law and in accordance with an accommodation basedon legally protected reasons.</strong><br><br><strong>#LI-SW1</strong><br><br>#RSS<br><br><b>Organization:</b> Smart Infrastructure<br><br><b>Company:</b> Siemens Industry, Inc.<br><br><b>Experience Level:</b> Experienced Professional<br><br><b>Full / Part time:</b> Full-time<br><br><b>Equal Employment Opportunity Statement</b><br>Siemens is an Equal Opportunity and Affirmative Action Employer encouraging diversity in the workplace. All qualified applicants will receive consideration for employment without regard to their race, color, creed, religion, national origin, citizenship status, ancestry, sex, age, physical or mental disability unrelated to ability, marital status, family responsibilities, pregnancy, genetic information, sexual orientation, gender expression, gender identity, transgender, sex stereotyping, order of protection status, protected veteran or military status, or an unfavorable discharge from military service, and other categories protected by federal, state or local law.<br><br><b>EEO is the Law</b><br>Applicants and employees are protected under Federal law from discrimination. To learn more, Click here.<br><br><b>Pay Transparency Non-Discrimination Provision</b><br>Siemens follows Executive Order 11246, including the Pay Transparency Nondiscrimination Provision. To learn more, Click here.<br><br><b>California Privacy Notice</b><br>California residents have the right to receive additional notices about their personal information. To learn more, click here.</p>",
          "name": "Sr. Sales Manager, Automation Service ~ Boston",
          "type": "external",
          "publication_date": "2022-12-28T23:36:46Z",
          "short_name": "sr-sales-manager-automation-service-boston",
          "model_type": "jobs",
          "id": 10637098,
          "locations": [
            {
              "name": "Stoughton, MA"
            }
          ],
          "categories": [
            {
              "name": "Sales"
            }
          ],
          "levels": [
            {
              "name": "Senior Level",
              "short_name": "senior"
            }
          ],
          "tags": [
            
          ],
          "refs": {
            "landing_page": "https://www.themuse.com/jobs/siemens/sr-sales-manager-automation-service-boston"
          },
          "company": {
            "id": 11913,
            "short_name": "siemens",
            "name": "Siemens"
          }
        }

    return  <FavouriteJobCard Job={Job} onClick={()=>{}}/>;
};