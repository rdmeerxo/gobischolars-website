// import React from 'react';
// import { Link, useParams, Navigate } from 'react-router-dom';
// import { Calendar, User, FileText, Download, Share2, BookOpen, ArrowLeft, Quote } from 'lucide-react';

// interface ResearchPaperData {
//   slug: string;
//   title: string;
//   subtitle?: string;
//   type: string;
//   date: string;
//   authors: string[];
//   abstract: string;
//   keywords: string[];
//   sections: {
//     heading: string;
//     content: string[];
//   }[];
//   keyFindings?: string[];
//   recommendations?: string[];
//   references?: string[];
// }

// const papers: ResearchPaperData[] = [
//   {
//     slug: 'state-of-education-mongolia',
//     title: 'The State of Education in Modern Mongolia',
//     subtitle: 'Challenges and Opportunities',
//     type: 'Research Paper',
//     date: 'March 2024',
//     authors: ['Dr. Tuya Enkhjargal', 'Dr. James Morrison', 'Batkhuyag Ganbold'],
//     abstract: 'This comprehensive research paper examines the current state of Mongolia\'s education system, analyzing key challenges and identifying opportunities for systemic improvement. Through extensive data collection, interviews with stakeholders, and comparative analysis with regional education systems, we present a nuanced understanding of educational access, quality, and outcomes in contemporary Mongolia. Our findings reveal significant disparities between urban and rural educational opportunities, persistent resource constraints, and the need for curriculum modernization. However, we also identify promising initiatives and pathways for transformative change.',
//     keywords: ['Mongolia education', 'educational reform', 'access to education', 'curriculum development', 'policy analysis'],
//     sections: [
//       {
//         heading: 'Introduction',
//         content: [
//           'Mongolia\'s education system has undergone significant transformation since the country\'s democratic transition in 1990. Moving from a Soviet-influenced model to a system seeking to balance traditional Mongolian values with global competitiveness, the nation faces both unprecedented opportunities and persistent challenges.',
//           'This research examines three decades of educational development in Mongolia, with particular attention to the period from 2015-2024. Our analysis draws on quantitative data from the Ministry of Education and Culture, UNESCO reports, and original survey data collected from 2,500 students, 450 teachers, and 180 administrators across all 21 aimags (provinces).',
//           'The central question guiding this research is: How can Mongolia build an education system that ensures equitable access, maintains cultural identity, and prepares students for a rapidly changing global economy?'
//         ]
//       },
//       {
//         heading: 'Current Landscape',
//         content: [
//           'Mongolia\'s literacy rate stands at an impressive 98.4%, one of the highest in Asia. However, this aggregate figure masks significant disparities. Urban students in Ulaanbaatar benefit from better-resourced schools, more qualified teachers, and greater access to supplementary educational opportunities compared to their rural counterparts.',
//           'The education system serves approximately 685,000 students across 800 schools. Of these, 58% are located in Ulaanbaatar, creating significant infrastructure strain in the capital while rural areas experience chronic underfunding and teacher shortages.',
//           'Recent PISA assessments reveal mixed results. While Mongolian students perform at or above the regional average in mathematics, scores in reading comprehension and scientific literacy lag behind regional leaders such as South Korea, Japan, and Singapore. This suggests a need for pedagogical innovation and curriculum reform.',
//           'Teacher quality remains a critical concern. Only 64% of teachers hold bachelor\'s degrees in their teaching subject, and professional development opportunities are limited, particularly in rural areas. Teacher turnover rates in countryside schools exceed 25% annually, creating instability in educational delivery.'
//         ]
//       },
//       {
//         heading: 'Key Challenges',
//         content: [
//           'Urban-Rural Divide: The concentration of educational resources in Ulaanbaatar creates a two-tiered system. Rural students face overcrowded classrooms (averaging 42 students per teacher compared to 28 in Ulaanbaatar), limited access to technology, and fewer elective course options. Additionally, many rural students must board away from their families to access secondary education, creating social and emotional challenges.',
//           'Infrastructure Deficits: Approximately 35% of schools require major structural repairs. In winter months, inadequate heating affects student attendance and learning outcomes. Access to digital infrastructure remains limited, with only 42% of rural schools having reliable internet connectivity.',
//           'Curriculum Relevance: The current national curriculum, last comprehensively revised in 2015, struggles to balance traditional knowledge transmission with skills needed for the 21st century. Employers consistently report that graduates lack critical thinking, creativity, and problem-solving skills. There is also limited integration of Mongolian history, culture, and language in ways that are engaging for contemporary students.',
//           'Resource Constraints: Per-student spending in Mongolia ($1,240 USD annually) is significantly lower than OECD averages ($10,759 USD). This limits investment in teacher training, infrastructure improvement, technology integration, and supplementary programs. Budget constraints have also led to overcrowded classrooms and limited support for students with special needs.',
//           'Assessment and Accountability: Mongolia lacks a comprehensive system for measuring educational quality and student outcomes. While national standardized tests exist, they focus primarily on rote memorization rather than higher-order thinking skills. There is limited data on student learning trajectories, making it difficult to identify struggling students early or evaluate the effectiveness of educational interventions.'
//         ]
//       },
//       {
//         heading: 'International Comparisons',
//         content: [
//           'Examining high-performing education systems in East Asia provides valuable insights. South Korea\'s investment in teacher training and professional development has created a highly qualified teaching workforce. Finland\'s emphasis on equity and comprehensive support systems ensures that all students, regardless of background, receive high-quality education.',
//           'Singapore\'s curriculum framework emphasizes both academic excellence and character development, integrating 21st-century competencies throughout the educational experience. Estonia\'s successful integration of digital learning demonstrates how technology can enhance educational outcomes even with limited resources.',
//           'These international examples suggest several promising directions for Mongolia: comprehensive teacher training programs, equity-focused funding models, curriculum modernization, strategic technology integration, and robust assessment systems that measure authentic learning.'
//         ]
//       },
//       {
//         heading: 'Opportunities for Reform',
//         content: [
//           'Despite challenges, Mongolia possesses several advantages that create opportunities for educational transformation. The country\'s high literacy rate and strong cultural value placed on education provide a foundation for improvement. Recent economic growth, driven by mining and other sectors, creates potential for increased educational investment.',
//           'Mongolia\'s relatively small population and centralized governance structure enable rapid policy implementation compared to larger nations. The country\'s young demographic profile means that educational investments will yield long-term economic and social benefits.',
//           'Technological advancement offers opportunities to bridge the urban-rural divide. Online learning platforms, digital resources, and distance education can provide rural students access to quality instruction and diverse course offerings. Mobile technology, with high penetration rates across Mongolia, can serve as a platform for educational delivery.',
//           'Growing international partnerships with educational institutions and organizations provide opportunities for knowledge exchange, capacity building, and resource mobilization. Programs like GobiScholars demonstrate how targeted interventions can identify and support talented students from underserved communities.'
//         ]
//       },
//       {
//         heading: 'Conclusion',
//         content: [
//           'Mongolia stands at a critical juncture in its educational development. The challenges are significant: infrastructure needs, resource constraints, urban-rural disparities, and curriculum modernization requirements. However, these challenges are not insurmountable.',
//           'With strategic investment, evidence-based policy reforms, and sustained commitment from government, educators, and civil society, Mongolia can build an education system that serves all students effectively. The country\'s high literacy rates, cultural emphasis on education, and growing economy provide a strong foundation.',
//           'The path forward requires bold vision combined with practical implementation. Incremental improvements in teacher training, infrastructure development, curriculum reform, and assessment systems can accumulate into transformative change. International partnerships and evidence-based practices can accelerate progress.',
//           'Most importantly, education must remain at the center of national development priorities. Mongolia\'s future prosperity depends on equipping the next generation with knowledge, skills, and values needed to navigate an increasingly complex world while maintaining connection to Mongolian cultural heritage.'
//         ]
//       }
//     ],
//     keyFindings: [
//       'Urban-rural education divide remains the most significant challenge facing Mongolia\'s education system',
//       'Teacher quality and retention issues, particularly in rural areas, require immediate attention',
//       'Current curriculum emphasizes rote memorization over critical thinking and problem-solving skills',
//       'Infrastructure deficits, including inadequate heating and limited internet access, affect learning outcomes',
//       'Per-student spending significantly below international standards limits educational quality',
//       'Mongolia possesses strong foundations (high literacy, cultural emphasis on education) for educational improvement'
//     ],
//     recommendations: [
//       'Implement equity-focused funding model that allocates additional resources to underserved rural areas',
//       'Develop comprehensive teacher training and professional development programs with incentives for rural service',
//       'Modernize national curriculum to emphasize 21st-century skills while maintaining cultural identity',
//       'Invest in digital infrastructure and leverage technology to bridge urban-rural educational divide',
//       'Create robust assessment and accountability systems measuring authentic student learning',
//       'Expand successful programs like GobiScholars that identify and support talented students from all backgrounds',
//       'Strengthen public-private partnerships to mobilize resources and expertise for educational improvement'
//     ],
//     references: [
//       'Ministry of Education and Culture of Mongolia. (2023). Annual Education Statistics Report.',
//       'UNESCO. (2024). Education for All: Mongolia Country Report.',
//       'OECD. (2023). PISA 2022 Results: Mongolia Analysis.',
//       'World Bank. (2023). Mongolia Education Sector Review.',
//       'Asian Development Bank. (2024). Improving Education Quality in Mongolia.',
//       'National Statistics Office of Mongolia. (2024). Education Indicators 2023.',
//       'Batkhishig, O. (2023). Rural Education in Mongolia: Challenges and Solutions. Ulaanbaatar University Press.',
//       'Morrison, J., & Enkhjargal, T. (2023). "Teacher Quality and Student Outcomes in Mongolia." Journal of Asian Education Studies, 45(3), 234-259.'
//     ]
//   },
//   {
//     slug: 'education-systems-east-asia',
//     title: 'Comparative Analysis',
//     subtitle: 'Educational Systems in East Asia',
//     type: 'Policy Brief',
//     date: 'January 2024',
//     authors: ['Dr. Kenji Tanaka', 'Dr. Li Wei', 'Dr. Batdelger Sukhbaatar'],
//     abstract: 'This policy brief provides a comparative analysis of education systems across East Asia, examining Mongolia, South Korea, Japan, Singapore, and China. By identifying best practices and common challenges, we offer evidence-based recommendations for educational policy reform in Mongolia. Our analysis focuses on curriculum design, teacher training, assessment systems, technology integration, and equity measures. The brief concludes with actionable policy recommendations tailored to Mongolia\'s specific context.',
//     keywords: ['comparative education', 'East Asia', 'education policy', 'best practices', 'systemic reform'],
//     sections: [
//       {
//         heading: 'Executive Summary',
//         content: [
//           'East Asian education systems consistently rank among the world\'s highest performers, yet each nation has taken distinct paths to educational excellence. This comparative analysis examines five education systems—Mongolia, South Korea, Japan, Singapore, and China—to identify transferable lessons for Mongolian educational reform.',
//           'Key findings reveal that high-performing systems share several characteristics: substantial investment in teacher quality, rigorous curriculum standards balanced with holistic student development, strategic technology integration, and robust support systems for struggling students. However, each system also faces unique challenges related to equity, student well-being, and curriculum relevance.',
//           'For Mongolia, this analysis suggests prioritizing teacher professional development, modernizing curriculum while maintaining cultural identity, leveraging technology for rural access, and implementing evidence-based assessment practices. These reforms, adapted to Mongolia\'s specific context, can accelerate educational improvement while avoiding pitfalls experienced by regional neighbors.'
//         ]
//       },
//       {
//         heading: 'South Korea: Excellence Through Investment',
//         content: [
//           'South Korea\'s education system exemplifies how sustained investment and cultural emphasis on education can drive national development. The country spends 5.1% of GDP on education, significantly above the OECD average of 4.9%. This investment has created world-class infrastructure, highly qualified teachers, and comprehensive student support systems.',
//           'Teacher quality stands as South Korea\'s greatest strength. Teaching is among the nation\'s most prestigious professions, with only the top 5% of university graduates admitted to teacher training programs. All teachers receive intensive pre-service training and ongoing professional development throughout their careers.',
//           'However, South Korea\'s system also reveals cautionary lessons. Extreme academic pressure has created a parallel private tutoring industry ("hagwon") costing families billions annually and contributing to student stress and mental health challenges. Recent reforms attempt to address work-life balance and reduce excessive competition while maintaining academic excellence.',
//           'Lesson for Mongolia: Invest systematically in teacher quality and professional prestige. However, design systems that promote student well-being alongside academic achievement, avoiding the excessive pressure that characterizes South Korean education.'
//         ]
//       },
//       {
//         heading: 'Japan: Holistic Development and Cultural Values',
//         content: [
//           'Japan\'s education system emphasizes not just academic knowledge but character development, citizenship, and practical life skills. Students participate in daily cleaning of their schools, learn traditional arts, and engage in community service, fostering responsibility and social cohesion.',
//           'The Japanese curriculum balances subject knowledge with "whole person" development. Schools incorporate moral education, club activities, and experiential learning. Class sizes are relatively large (average 35 students), but teachers employ collaborative learning and peer support to maximize effectiveness.',
//           'Japan faces challenges related to rigid tracking, limited flexibility for diverse learning needs, and intense entrance examination pressure. Recent reforms emphasize critical thinking over memorization and greater accommodation for students with special needs.',
//           'Lesson for Mongolia: Cultural values and character development can be authentically integrated into formal education. Mongolia\'s rich cultural heritage offers opportunities for meaningful incorporation into curriculum and school culture.'
//         ]
//       },
//       {
//         heading: 'Singapore: Strategic Planning and Adaptation',
//         content: [
//           'Singapore\'s rapid transformation from developing nation to education leader demonstrates how strategic planning, consistent implementation, and willingness to adapt can drive improvement. The government invests heavily in education (3% of GDP, but with highly efficient spending) and regularly revises policies based on evidence.',
//           'Singapore\'s curriculum framework, "21st Century Competencies," explicitly teaches skills like critical thinking, collaboration, and cross-cultural understanding alongside traditional subjects. Teachers receive 100 hours of professional development annually, ensuring continuous improvement.',
//           'Bilingual education (English plus mother tongue) prepares students for global participation while maintaining cultural identity. Streaming tracks students by ability, though recent reforms increase flexibility and reduce early selection.',
//           'Lesson for Mongolia: Small nations can achieve educational excellence through strategic planning, efficient resource use, and evidence-based adaptation. Bilingual approaches can prepare students for international opportunities while preserving cultural heritage.'
//         ]
//       },
//       {
//         heading: 'China: Scale and Standardization',
//         content: [
//           'China\'s education system serves 270 million students, presenting unprecedented scale challenges. The national curriculum, standardized assessments, and centralized governance ensure consistency but sometimes limit local adaptation and innovation.',
//           'China has made remarkable progress in educational access. Net enrollment rates exceed 99% for primary education and 95% for junior secondary education. However, the urban-rural divide remains pronounced, with significant disparities in school quality, teacher qualification, and resources.',
//           'Recent reforms attempt to reduce examination pressure, promote creativity and critical thinking, and address equity concerns. The government has substantially increased rural education investment and implemented policies to retain qualified teachers in underserved areas.',
//           'Lesson for Mongolia: Large-scale challenges require systemic solutions. China\'s targeted interventions in rural education, including teacher incentives and infrastructure investment, offer models for addressing Mongolia\'s urban-rural divide.'
//         ]
//       },
//       {
//         heading: 'Comparative Insights',
//         content: [
//           'Despite different approaches, high-performing East Asian systems share key characteristics. All invest substantially in teacher quality through rigorous selection, comprehensive training, and ongoing professional development. Teachers are respected professionals with clear career pathways and competitive compensation.',
//           'Curriculum in successful systems balances foundational knowledge with higher-order thinking skills. While approaches differ, all emphasize mathematics and science proficiency, literacy, and increasingly, 21st-century competencies like creativity and collaboration.',
//           'Assessment systems in high-performing countries have evolved beyond simple standardized testing. Singapore, Japan, and increasingly China incorporate formative assessment, project-based evaluation, and holistic measures of student development.',
//           'Technology integration varies, but successful systems use digital tools strategically to enhance teaching and learning rather than as ends in themselves. Singapore and South Korea lead in educational technology, leveraging it for personalized learning and access to resources.',
//           'Equity remains an ongoing challenge across the region. All countries struggle with ensuring that rural, low-income, and minority students receive equal educational opportunities. Successful interventions include targeted funding, teacher incentives for rural service, and technology-enabled access.'
//         ]
//       }
//     ],
//     keyFindings: [
//       'Teacher quality is the single most important factor in educational excellence across East Asia',
//       'High-performing systems balance academic rigor with holistic student development',
//       'Strategic technology integration can enhance learning outcomes and bridge geographic divides',
//       'Centralized standards combined with local flexibility enable both consistency and innovation',
//       'Urban-rural educational divides persist even in high-performing systems and require targeted interventions',
//       'Recent reforms across the region emphasize critical thinking over rote memorization'
//     ],
//     recommendations: [
//       'Elevate teaching profession through improved compensation, prestige, and rigorous training programs',
//       'Modernize curriculum to emphasize 21st-century skills while maintaining Mongolian cultural identity',
//       'Implement comprehensive teacher professional development with minimum 80 hours annually',
//       'Develop technology strategy that leverages digital tools for rural access and personalized learning',
//       'Create targeted interventions addressing urban-rural divide, including incentives for rural teaching',
//       'Establish robust assessment systems measuring authentic learning beyond standardized test scores',
//       'Foster international partnerships enabling knowledge exchange and capacity building',
//       'Pilot promising innovations on small scale before system-wide implementation'
//     ],
//     references: [
//       'OECD. (2023). Education at a Glance: OECD Indicators.',
//       'World Bank. (2024). Educational Systems in East Asia: Comparative Study.',
//       'UNESCO. (2023). Global Education Monitoring Report: East Asia Regional Analysis.',
//       'Lee, M., & Kim, S. (2023). Teacher Quality in South Korea. Seoul Education Press.',
//       'Tanaka, K. (2024). "Holistic Education in Japan: Lessons for Asia." Asian Education Review, 38(2), 145-170.',
//       'Goh, C.B., & Gopinathan, S. (2023). Education in Singapore: Strategies for Success. Springer.',
//       'China Ministry of Education. (2024). Education Statistical Yearbook.',
//       'Asian Development Bank. (2023). Comparative Education Policy in Asia.'
//     ]
//   },
//   {
//     slug: 'framework-educational-reform',
//     title: 'Building Excellence',
//     subtitle: 'A Framework for Educational Reform',
//     type: 'White Paper',
//     date: 'November 2023',
//     authors: ['GobiScholars Foundation Advisory Board', 'Dr. Sarah Williams', 'Odbayar Tumur'],
//     abstract: 'This white paper presents a comprehensive framework for educational reform in Mongolia, synthesizing research findings, international best practices, and stakeholder input into actionable recommendations. The framework addresses five critical domains: teacher development, curriculum modernization, infrastructure improvement, equity and access, and assessment and accountability. Each domain includes specific goals, implementation strategies, success metrics, and resource requirements. The paper concludes with a phased implementation plan designed to generate quick wins while building toward systemic transformation.',
//     keywords: ['educational reform', 'policy framework', 'implementation strategy', 'systemic change', 'Mongolia'],
//     sections: [
//       {
//         heading: 'Introduction: The Case for Reform',
//         content: [
//           'Mongolia\'s education system has achieved remarkable successes over the past three decades, including high literacy rates, near-universal primary enrollment, and growing higher education participation. However, the system now faces challenges that threaten its ability to prepare students for 21st-century opportunities.',
//           'This white paper presents a comprehensive framework for educational reform designed to address current limitations while building on existing strengths. The framework emerged from two years of research, consultation, and analysis involving educators, students, parents, policymakers, employers, and international experts.',
//           'The framework is grounded in three core principles: First, excellence with equity—ensuring all Mongolian students, regardless of location or background, receive high-quality education. Second, cultural authenticity—modernizing education while honoring Mongolian heritage, values, and identity. Third, evidence-based practice—implementing reforms proven effective in similar contexts and continuously evaluating outcomes.',
//           'Implementation will require sustained commitment, adequate resources, and collaboration across government, education sector, civil society, and private sector. However, the cost of inaction exceeds the cost of reform. Without significant improvement, Mongolia risks falling behind regional competitors, failing to develop human capital needed for economic growth, and leaving a generation of young people unprepared for rapidly changing demands.'
//         ]
//       },
//       {
//         heading: 'Domain 1: Teacher Development',
//         content: [
//           'Teachers are the cornerstone of educational quality. No system can exceed the quality of its teachers. Mongolia must therefore prioritize comprehensive reforms to teacher recruitment, training, support, and retention.',
//           'Current Challenge: Only 64% of Mongolian teachers hold subject-specific degrees, professional development opportunities are limited, rural teacher turnover exceeds 25% annually, and teaching salaries are not competitive with other professional opportunities.',
//           'Reform Goals: (1) Recruit top-performing students into teaching through competitive scholarships and enhanced professional prestige. (2) Provide rigorous pre-service training through upgraded teacher education programs. (3) Ensure all teachers receive minimum 80 hours of professional development annually. (4) Implement performance-based career ladders with clear progression pathways. (5) Increase teacher salaries by 30% over five years, with additional incentives for rural service.',
//           'Implementation Strategy: Establish National Teacher Development Institute coordinating training and professional development. Create teacher residency programs pairing new teachers with experienced mentors. Develop online professional development modules accessible to rural teachers. Implement teacher leader programs recognizing and leveraging expertise. Partner with international teacher training institutions for capacity building.',
//           'Success Metrics: Percentage of teachers with subject-specific degrees increases to 85% by 2028. Annual teacher turnover in rural areas decreases below 15%. Student learning outcomes improve as measured by national and international assessments. Teacher satisfaction and professional identity strengthen as measured by annual surveys.'
//         ]
//       },
//       {
//         heading: 'Domain 2: Curriculum Modernization',
//         content: [
//           'Mongolia\'s national curriculum requires comprehensive modernization to emphasize critical thinking, creativity, problem-solving, and practical skills alongside foundational knowledge. The curriculum must also authentically integrate Mongolian culture, history, and values.',
//           'Current Challenge: Curriculum emphasizes memorization over application, limited integration of 21st-century competencies, insufficient connection between school learning and real-world contexts, and inadequate incorporation of Mongolian cultural content in engaging ways.',
//           'Reform Goals: (1) Revise curriculum to emphasize inquiry-based learning and higher-order thinking. (2) Integrate explicit instruction in critical thinking, collaboration, creativity, and communication. (3) Increase project-based and experiential learning opportunities. (4) Strengthen Mongolian language, history, and cultural education. (5) Ensure curriculum prepares students for both further education and workforce entry.',
//           'Implementation Strategy: Establish diverse curriculum review committee including educators, employers, students, and international experts. Pilot revised curriculum in select schools before system-wide implementation. Provide comprehensive teacher training on new pedagogical approaches. Develop high-quality instructional materials and resources. Create flexible implementation timeline allowing schools to adapt to local contexts.',
//           'Success Metrics: Student performance on critical thinking and problem-solving assessments improves measurably. Employer satisfaction with graduate competencies increases. Student engagement and motivation strengthen. Mongolian cultural knowledge and identity deepen as measured by surveys and assessments.'
//         ]
//       },
//       {
//         heading: 'Domain 3: Infrastructure and Resources',
//         content: [
//           'Physical infrastructure, technology access, and learning resources directly impact educational quality. Mongolia must address infrastructure deficits while strategically investing in digital capabilities.',
//           'Current Challenge: 35% of schools require major structural repairs, heating systems are inadequate in many buildings, only 42% of rural schools have reliable internet, library resources are limited, and science laboratories lack basic equipment.',
//           'Reform Goals: (1) Renovate or rebuild all structurally deficient schools by 2030. (2) Ensure all schools have adequate heating, lighting, and sanitation. (3) Provide reliable internet access to 100% of schools by 2027. (4) Equip schools with modern learning resources including libraries, science labs, and technology. (5) Implement sustainable maintenance systems preventing future deterioration.',
//           'Implementation Strategy: Conduct comprehensive infrastructure assessment identifying priorities. Develop phased construction and renovation plan with clear timelines and budgets. Partner with private sector and international donors for resource mobilization. Implement school maintenance management system. Leverage low-cost technology solutions like satellite internet for remote areas.',
//           'Success Metrics: All schools meet minimum infrastructure standards by 2030. Internet access reaches 100% of schools. Student attendance improves, particularly in winter months. Teacher retention improves in schools with upgraded facilities. Learning outcomes increase in schools receiving infrastructure investments.'
//         ]
//       },
//       {
//         heading: 'Domain 4: Equity and Access',
//         content: [
//           'Educational excellence requires ensuring all students, regardless of location, income, ethnicity, or ability, receive equal opportunities to learn and succeed. Addressing the urban-rural divide remains Mongolia\'s most pressing equity challenge.',
//           'Current Challenge: Significant disparities exist between urban and rural educational opportunities, herder families face barriers to consistent student attendance, limited support for students with disabilities, and insufficient programs for gifted and talented students from disadvantaged backgrounds.',
//           'Reform Goals: (1) Eliminate achievement gaps between urban and rural students by 2035. (2) Implement equity-focused funding formula directing additional resources to underserved areas. (3) Develop comprehensive support for students with special needs. (4) Create pathways for high-potential students from all backgrounds. (5) Address attendance barriers through flexible learning options.',
//           'Implementation Strategy: Implement weighted student funding allocating more resources per student in rural and disadvantaged areas. Create mobile and distance learning programs serving nomadic communities. Establish regional boarding schools with family support systems. Expand scholarship programs like GobiScholars identifying talent in underserved communities. Train teachers in inclusive education and differentiated instruction.',
//           'Success Metrics: Achievement gap between urban and rural students decreases by 50% by 2030. Enrollment and completion rates reach 95%+ for all demographic groups. Students with special needs receive appropriate support and achieve grade-level standards. Identified gifted students from all backgrounds access advanced opportunities.'
//         ]
//       },
//       {
//         heading: 'Domain 5: Assessment and Accountability',
//         content: [
//           'Effective assessment and accountability systems provide information needed to identify struggling students, evaluate program effectiveness, and drive continuous improvement. Mongolia needs comprehensive systems measuring authentic learning.',
//           'Current Challenge: Limited assessment of higher-order thinking and practical skills, insufficient early identification of learning difficulties, inadequate data systems for tracking student progress, and accountability focused on inputs rather than outcomes.',
//           'Reform Goals: (1) Implement comprehensive assessment system measuring diverse competencies. (2) Create formative assessment practices enabling real-time instructional adjustments. (3) Establish longitudinal data systems tracking student progress. (4) Develop balanced accountability framework evaluating schools on multiple measures. (5) Build educator and public capacity to interpret and use assessment data.',
//           'Implementation Strategy: Develop national assessment framework defining what students should know and be able to do at each level. Create formative assessment tools and training for teachers. Implement secure, efficient data management system. Design accountability framework recognizing improvement, not just absolute performance. Provide accessible data dashboards for educators, policymakers, and public.',
//           'Success Metrics: Assessment system reliably measures intended outcomes. Teachers report regular use of formative assessment to guide instruction. Schools use data to identify struggling students early and provide targeted support. Education policy decisions informed by comprehensive, accurate data. Public confidence in education system strengthens.'
//         ]
//       },
//       {
//         heading: 'Implementation Roadmap',
//         content: [
//           'Transforming Mongolia\'s education system requires sustained effort over multiple years. This implementation roadmap provides a phased approach generating momentum through early successes while building toward comprehensive change.',
//           'Phase 1 (Years 1-2): Foundation Building - Establish governance structures and secure political commitment. Conduct comprehensive system assessments. Develop detailed implementation plans for each reform domain. Launch pilot programs in select schools. Begin teacher professional development initiatives. Create public awareness campaign building support for reform.',
//           'Phase 2 (Years 3-5): Expansion and Refinement - Scale successful pilots to additional schools. Implement revised curriculum in all primary schools. Complete infrastructure renovations in highest-need schools. Roll out equity-focused funding formula. Establish national assessment system. Expand teacher training programs.',
//           'Phase 3 (Years 6-10): Institutionalization and Sustainability - Achieve system-wide implementation of all reforms. Embed continuous improvement processes. Develop local capacity for ongoing leadership. Reduce dependence on external technical assistance. Evaluate comprehensive reform impact. Identify next-generation improvements.',
//           'Resource Requirements: Full implementation requires estimated $450 million over 10 years, representing a 25% increase over current education spending. Primary investments include teacher salaries and professional development (40%), infrastructure (30%), curriculum and materials (15%), technology (10%), and administration and assessment (5%). Resources should be mobilized through government budget increases, international partnerships, private sector collaboration, and efficiency improvements.',
//           'Critical Success Factors: Sustained political commitment across election cycles, adequate and predictable funding, professional implementation management, continuous stakeholder engagement, flexibility to adapt based on evidence, and realistic expectations about timeline for change.'
//         ]
//       }
//     ],
//     keyFindings: [
//       'Comprehensive reform requires coordinated action across five domains: teachers, curriculum, infrastructure, equity, and assessment',
//       'Teacher development is the highest-priority investment area for improving educational quality',
//       'Equity-focused funding and targeted interventions are essential for closing urban-rural achievement gaps',
//       'Phased implementation allows learning from pilot programs and building political support',
//       'Estimated $450 million over 10 years required for full implementation',
//       'Success depends on sustained commitment, adequate resources, and evidence-based adaptation'
//     ],
//     recommendations: [
//       'Establish National Education Reform Commission with political authority and resources to drive implementation',
//       'Increase education budget by 25% over 10 years with focus on teacher development and rural equity',
//       'Launch teacher development initiative as highest priority, with immediate salary increases and professional development expansion',
//       'Pilot curriculum reforms in select schools before system-wide rollout',
//       'Implement equity-focused funding formula directing additional resources to underserved areas',
//       'Develop comprehensive assessment and data systems enabling evidence-based decision-making',
//       'Create public-private partnerships mobilizing resources and expertise',
//       'Establish regular evaluation and reporting mechanisms ensuring accountability and transparency',
//       'Build implementation capacity through training, technical assistance, and international partnerships',
//       'Maintain reform momentum through leadership transitions via institutional structures and public support'
//     ],
//     references: [
//       'McKinsey & Company. (2023). How the World\'s Best-Performing School Systems Come Out on Top.',
//       'OECD. (2023). Effective Teacher Policies: Insights from PISA.',
//       'World Bank. (2024). System-Level Education Reform: Implementation Guide.',
//       'UNESCO. (2023). Rethinking Education: Towards a Global Common Good.',
//       'Fullan, M. (2023). Educational Change: Theory and Practice. Teachers College Press.',
//       'Mourshed, M., Chijioke, C., & Barber, M. (2023). How the World\'s Most Improved School Systems Keep Getting Better.',
//       'Darling-Hammond, L. (2024). Powerful Teacher Education: Lessons from Exemplary Programs. Jossey-Bass.',
//       'Asian Development Bank. (2023). Financing Education Reform in Developing Countries.',
//       'GobiScholars Foundation. (2020-2023). Program Evaluation Reports and Scholar Outcome Data.'
//     ]
//   }
// ];

// export default function ResearchPaper() {
//   const { slug } = useParams<{ slug: string }>();
//   const paper = papers.find(p => p.slug === slug);

//   if (!paper) {
//     return <Navigate to="/foundation/research" replace />;
//   }

//   return (
//     <div className="bg-white">
//       {/* Header */}
//       <section className="py-12 bg-[#F8F8F8] border-b border-gray-200">
//         <div className="max-w-5xl mx-auto px-6 lg:px-12">
//           <Link
//             to="/foundation/research"
//             className="inline-flex items-center gap-2 text-[#c4151c] hover:underline mb-6"
//             style={{ fontSize: '0.9rem', fontWeight: 500 }}
//           >
//             <ArrowLeft size={18} />
//             Back to Research
//           </Link>

//           <div className="flex items-center gap-3 mb-6">
//             <div className="px-3 py-1 bg-[#c4151c] text-white" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
//               {paper.type.toUpperCase()}
//             </div>
//             <div className="flex items-center gap-2 text-gray-500" style={{ fontSize: '0.85rem' }}>
//               <Calendar size={14} />
//               <span>{paper.date}</span>
//             </div>
//           </div>

//           <h1 className="serif text-black mb-3">{paper.title}</h1>
//           {paper.subtitle && (
//             <p className="text-gray-600 mb-6" style={{ fontSize: '1.3rem', lineHeight: 1.4 }}>
//               {paper.subtitle}
//             </p>
//           )}

//           <div className="flex items-center gap-2 text-gray-600 mb-8">
//             <User size={16} />
//             <span style={{ fontSize: '0.9rem' }}>{paper.authors.join(', ')}</span>
//           </div>

//           <div className="flex gap-3">
//             <button className="inline-flex items-center gap-2 bg-[#c4151c] text-white px-6 py-3 hover:bg-[#a01117] transition-colors rounded-md" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//               <Download size={18} />
//               Download PDF
//             </button>
//             <button className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 hover:border-[#c4151c] hover:text-[#c4151c] transition-colors rounded-md" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//               <Share2 size={18} />
//               Share
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Abstract */}
//       <section className="py-12 bg-white border-b border-gray-200">
//         <div className="max-w-5xl mx-auto px-6 lg:px-12">
//           <div className="bg-gradient-to-br from-[#c4151c]/5 to-white border-l-4 border-[#c4151c] p-10">
//             <h2 className="serif text-black mb-4">Abstract</h2>
//             <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
//               {paper.abstract}
//             </p>
//             {paper.keywords && (
//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <p className="text-gray-500 mb-3" style={{ fontSize: '0.85rem', letterSpacing: '0.05em' }}>
//                   KEYWORDS:
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {paper.keywords.map((keyword, index) => (
//                     <span
//                       key={index}
//                       className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-300"
//                       style={{ fontSize: '0.85rem' }}
//                     >
//                       {keyword}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto px-6 lg:px-12">
//           <div className="grid lg:grid-cols-4 gap-12">
//             {/* Table of Contents */}
//             <div className="lg:col-span-1">
//               <div className="sticky top-8">
//                 <h3 className="serif text-black mb-6" style={{ fontSize: '1rem' }}>Contents</h3>
//                 <nav className="space-y-3">
//                   {paper.sections.map((section, index) => (
//                     <a
//                       key={index}
//                       href={`#section-${index}`}
//                       className="block text-gray-600 hover:text-[#c4151c] transition-colors"
//                       style={{ fontSize: '0.9rem' }}
//                     >
//                       {section.heading}
//                     </a>
//                   ))}
//                   {paper.keyFindings && (
//                     <a
//                       href="#key-findings"
//                       className="block text-gray-600 hover:text-[#c4151c] transition-colors"
//                       style={{ fontSize: '0.9rem' }}
//                     >
//                       Key Findings
//                     </a>
//                   )}
//                   {paper.recommendations && (
//                     <a
//                       href="#recommendations"
//                       className="block text-gray-600 hover:text-[#c4151c] transition-colors"
//                       style={{ fontSize: '0.9rem' }}
//                     >
//                       Recommendations
//                     </a>
//                   )}
//                   {paper.references && (
//                     <a
//                       href="#references"
//                       className="block text-gray-600 hover:text-[#c4151c] transition-colors"
//                       style={{ fontSize: '0.9rem' }}
//                     >
//                       References
//                     </a>
//                   )}
//                 </nav>
//               </div>
//             </div>

//             {/* Article Content */}
//             <div className="lg:col-span-3 space-y-16">
//               {paper.sections.map((section, index) => (
//                 <div key={index} id={`section-${index}`}>
//                   <h2 className="serif text-black mb-6">{section.heading}</h2>
//                   <div className="space-y-6">
//                     {section.content.map((paragraph, pIndex) => (
//                       <p
//                         key={pIndex}
//                         className="text-gray-700"
//                         style={{ fontSize: '1.05rem', lineHeight: 1.9 }}
//                       >
//                         {paragraph}
//                       </p>
//                     ))}
//                   </div>
//                 </div>
//               ))}

//               {/* Key Findings */}
//               {paper.keyFindings && (
//                 <div id="key-findings" className="bg-[#F8F8F8] border border-gray-200 p-10">
//                   <h2 className="serif text-black mb-6">Key Findings</h2>
//                   <ul className="space-y-4">
//                     {paper.keyFindings.map((finding, index) => (
//                       <li key={index} className="flex gap-3">
//                         <Quote className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//                         <span className="text-gray-700" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
//                           {finding}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               {/* Recommendations */}
//               {paper.recommendations && (
//                 <div id="recommendations">
//                   <h2 className="serif text-black mb-6">Recommendations</h2>
//                   <div className="space-y-4">
//                     {paper.recommendations.map((rec, index) => (
//                       <div key={index} className="flex gap-3 border-l-2 border-[#c4151c] pl-6 py-2">
//                         <span className="text-gray-700" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
//                           {rec}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* References */}
//               {paper.references && (
//                 <div id="references" className="border-t-2 border-gray-200 pt-12">
//                   <h2 className="serif text-black mb-6">References</h2>
//                   <ol className="space-y-3">
//                     {paper.references.map((ref, index) => (
//                       <li
//                         key={index}
//                         className="text-gray-600 pl-6"
//                         style={{ fontSize: '0.9rem', lineHeight: 1.7 }}
//                       >
//                         <span className="text-gray-400 mr-2">[{index + 1}]</span>
//                         {ref}
//                       </li>
//                     ))}
//                   </ol>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Related Research */}
//       <section className="py-20 bg-[#F8F8F8] border-t border-gray-200">
//         <div className="max-w-5xl mx-auto px-6 lg:px-12">
//           <h3 className="serif text-black mb-8 text-center">Related Research</h3>
//           <div className="grid md:grid-cols-2 gap-6">
//             {papers
//               .filter(p => p.slug !== paper.slug)
//               .slice(0, 2)
//               .map((relatedPaper) => (
//                 <Link
//                   key={relatedPaper.slug}
//                   to={`/publications/${relatedPaper.slug}`}
//                   className="bg-white border border-gray-200 p-8 hover:border-[#c4151c] transition-colors"
//                 >
//                   <div className="flex items-center gap-2 mb-3">
//                     <FileText className="text-[#c4151c]" size={18} />
//                     <span className="text-gray-500" style={{ fontSize: '0.85rem' }}>
//                       {relatedPaper.type}
//                     </span>
//                   </div>
//                   <h4 className="serif text-black mb-2" style={{ fontSize: '1.1rem' }}>
//                     {relatedPaper.title}
//                   </h4>
//                   {relatedPaper.subtitle && (
//                     <p className="text-gray-600 mb-3" style={{ fontSize: '0.9rem' }}>
//                       {relatedPaper.subtitle}
//                     </p>
//                   )}
//                   <p className="text-[#c4151c] hover:underline" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                     Read Paper →
//                   </p>
//                 </Link>
//               ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
//           <BookOpen className="text-[#c4151c] mx-auto mb-6" size={56} />
//           <h3 className="serif text-black mb-4">Stay Informed</h3>
//           <p className="text-gray-600 mb-8" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
//             Subscribe to receive updates on our latest research and publications
//           </p>
//           <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white px-10 py-4 hover:shadow-xl transition-all rounded-md" style={{ fontSize: '1rem', fontWeight: 500 }}>
//             Subscribe to Updates
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }
