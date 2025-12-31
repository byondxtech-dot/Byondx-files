
// <!-- Service Data and Dynamic Loading Script -->
{/* <script> */}
  // Mobile menu functionality (same as before)
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-menu-overlay');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const body = document.body;
  let isMenuOpen = false;

  const openMobileMenu = () => {
    mobileMenu.classList.add('menu-open');
    mobileOverlay.classList.add('active');
    body.classList.add('menu-open');
    isMenuOpen = true;
    
    const menuIcon = document.getElementById('menu-icon');
    menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
  };

  const closeMobileMenu = () => {
    mobileMenu.classList.remove('menu-open');
    mobileOverlay.classList.remove('active');
    body.classList.remove('menu-open');
    isMenuOpen = false;
    
    const menuIcon = document.getElementById('menu-icon');
    menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
  };

  menuBtn.addEventListener('click', openMobileMenu);
  mobileCloseBtn.addEventListener('click', closeMobileMenu);
  mobileOverlay.addEventListener('click', closeMobileMenu);

  document.querySelectorAll('#mobile-menu a, #mobile-menu button').forEach(element => {
    if (!element.classList.contains('mobile-dropdown-header')) {
      element.addEventListener('click', closeMobileMenu);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      closeMobileMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && isMenuOpen) {
      closeMobileMenu();
    }
  });

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.remove('navbar-transparent');
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
      navbar.classList.add('navbar-transparent');
    }
  });

  // Mobile dropdown functionality
  function toggleMobileDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const header = dropdown.previousElementSibling;
    
    dropdown.classList.toggle('active');
    header.classList.toggle('active');
    
    const allDropdowns = document.querySelectorAll('.mobile-dropdown-content');
    const allHeaders = document.querySelectorAll('.mobile-dropdown-header');
    
    allDropdowns.forEach(d => {
      if (d.id !== dropdownId && d.classList.contains('active')) {
        d.classList.remove('active');
      }
    });
    
    allHeaders.forEach(h => {
      if (h !== header && h.classList.contains('active')) {
        h.classList.remove('active');
      }
    });
  }

  // Two-Level Mega Menu Functionality
  document.addEventListener('DOMContentLoaded', function() {
    const categoryItems = document.querySelectorAll('.category-item');
    const subcategoryPanels = document.querySelectorAll('.subcategory-panel');
    
    if (categoryItems.length > 0) {
      categoryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
          categoryItems.forEach(i => i.classList.remove('active'));
          this.classList.add('active');
          
          const category = this.getAttribute('data-category');
          
          subcategoryPanels.forEach(panel => panel.classList.remove('active'));
          
          const targetPanel = document.getElementById(`${category}-panel`);
          if (targetPanel) {
            targetPanel.classList.add('active');
          }
        });
      });
      
      categoryItems[0].classList.add('active');
      subcategoryPanels[0].classList.add('active');
    }
    
    // Initialize button hover text
    document.querySelectorAll('.btn-animate').forEach(button => {
      const hoverText = button.getAttribute('data-hover');
      if (hoverText) {
        const style = document.createElement('style');
        style.textContent = `
          .btn-animate[data-hover="${hoverText}"]::after {
            content: "${hoverText}";
          }
        `;
        document.head.appendChild(style);
      }
    });

   // Complete Service Data for all services
const servicesData = {
  // AI & Automation Services
  'ai-agents': {
    title: 'AI Agents Development',
    icon: 'fas fa-robot',
    description: 'Build intelligent AI agents that automate complex business processes, make data-driven decisions, and enhance operational efficiency.',
    features: [
      'Custom AI Agent Development',
      'Process Automation',
      'Real-time Decision Making',
      '24/7 Monitoring & Support'
    ],
    content: `
      <p>Our AI Agents are intelligent software programs designed to perform specific tasks autonomously, making decisions based on real-time data and predefined rules. These agents can handle everything from customer service interactions to complex data analysis.</p>
      
      <h3>What We Offer</h3>
      <p>We develop custom AI agents tailored to your business needs:</p>
      <ul>
        <li><strong>Customer Service Agents:</strong> Handle inquiries, complaints, and support tickets 24/7</li>
        <li><strong>Data Analysis Agents:</strong> Process large datasets and provide actionable insights</li>
        <li><strong>Process Automation Agents:</strong> Automate repetitive business processes</li>
        <li><strong>Monitoring Agents:</strong> Track system performance and alert for anomalies</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Reduce operational costs by up to 60%</li>
        <li>Improve response times by 90%</li>
        <li>Scale operations without increasing headcount</li>
        <li>Make data-driven decisions with real-time insights</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Discovery & Analysis', desc: 'We analyze your business processes and identify automation opportunities'},
      {step: 2, title: 'Design & Planning', desc: 'Create detailed specifications and architecture for your AI agent'},
      {step: 3, title: 'Development & Training', desc: 'Develop the agent and train it with your data and rules'},
      {step: 4, title: 'Testing & Deployment', desc: 'Thorough testing followed by deployment in your environment'},
      {step: 5, title: 'Monitoring & Optimization', desc: 'Continuous monitoring and improvement based on performance'}
    ],
    facts: [
      {icon: 'fas fa-clock', text: '24/7 Availability'},
      {icon: 'fas fa-chart-line', text: '90% Faster Response'},
      {icon: 'fas fa-money-bill-wave', text: '60% Cost Reduction'},
      {icon: 'fas fa-user-check', text: '95% Accuracy Rate'}
    ],
    benefits: [
      {icon: 'fas fa-bolt', title: 'Lightning Fast', desc: 'Process requests in milliseconds'},
      {icon: 'fas fa-brain', title: 'Intelligent', desc: 'Learns and improves over time'},
      {icon: 'fas fa-shield-alt', title: 'Secure', desc: 'Enterprise-grade security'},
      {icon: 'fas fa-expand', title: 'Scalable', desc: 'Handles millions of requests'},
      {icon: 'fas fa-cogs', title: 'Customizable', desc: 'Tailored to your needs'},
      {icon: 'fas fa-headset', title: 'Support', desc: '24/7 technical support'}
    ],
    faq: [
      {q: 'What types of AI agents can you develop?', a: 'We can develop various AI agents including customer service bots, data analysis agents, process automation agents, monitoring agents, and more.'},
      {q: 'How long does it take to develop an AI agent?', a: 'Development time varies based on complexity, typically ranging from 4-12 weeks.'},
      {q: 'Can AI agents integrate with our existing systems?', a: 'Yes, our AI agents are designed to integrate seamlessly with your existing software and systems.'},
      {q: 'What ongoing support do you provide?', a: 'We provide 24/7 monitoring, regular updates, performance optimization, and technical support.'}
    ]
  },

  'automation-solutions': {
    title: 'Business Automation Solutions',
    icon: 'fas fa-cogs',
    description: 'Comprehensive automation solutions that streamline your business operations, reduce manual work, and increase productivity.',
    features: [
      'Workflow Automation',
      'Process Optimization',
      'Integration Services',
      'Performance Analytics'
    ],
    content: `
      <p>Our automation solutions transform your manual processes into efficient, automated workflows that save time, reduce errors, and boost productivity across your organization.</p>
      
      <h3>Our Automation Expertise</h3>
      <ul>
        <li><strong>CRM Automation:</strong> Automate customer interactions and follow-ups</li>
        <li><strong>Marketing Automation:</strong> Streamline marketing campaigns and lead nurturing</li>
        <li><strong>Sales Automation:</strong> Automate sales processes and pipeline management</li>
        <li><strong>HR Automation:</strong> Streamline recruitment, onboarding, and employee management</li>
        <li><strong>Finance Automation:</strong> Automate invoicing, payments, and financial reporting</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Reduce manual work by up to 80%</li>
        <li>Improve process accuracy to 99.9%</li>
        <li>Scale operations efficiently</li>
        <li>Enhance employee satisfaction by eliminating repetitive tasks</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Process Audit', desc: 'Analyze current workflows and identify automation opportunities'},
      {step: 2, title: 'Solution Design', desc: 'Design customized automation workflows for your business'},
      {step: 3, title: 'Development & Integration', desc: 'Build and integrate automation solutions with your systems'},
      {step: 4, title: 'Testing & Training', desc: 'Test automation and train your team on using new systems'},
      {step: 5, title: 'Optimization', desc: 'Continuously monitor and optimize automation performance'}
    ],
    facts: [
      {icon: 'fas fa-tasks', text: '80% Time Saved'},
      {icon: 'fas fa-chart-pie', text: '99.9% Accuracy'},
      {icon: 'fas fa-users', text: 'Team Scalability'},
      {icon: 'fas fa-sync', text: '24/7 Operation'}
    ],
    benefits: [
      {icon: 'fas fa-clock', title: 'Time Saving', desc: 'Automate repetitive tasks and save hours daily'},
      {icon: 'fas fa-check-circle', title: 'Error Reduction', desc: 'Minimize human errors in critical processes'},
      {icon: 'fas fa-chart-line', title: 'Performance Insights', desc: 'Gain insights into process efficiency'},
      {icon: 'fas fa-exchange-alt', title: 'Seamless Integration', desc: 'Integrate with your existing tools'},
      {icon: 'fas fa-expand-arrows-alt', title: 'Scalability', desc: 'Easily scale operations as you grow'},
      {icon: 'fas fa-shield-alt', title: 'Compliance', desc: 'Ensure regulatory compliance automatically'}
    ],
    faq: [
      {q: 'Which business processes can be automated?', a: 'We can automate a wide range of processes including data entry, customer support, lead management, reporting, inventory management, and more.'},
      {q: 'How do you ensure automation doesn\'t disrupt existing workflows?', a: 'We implement automation gradually, conduct thorough testing, and provide comprehensive training to ensure smooth transition.'},
      {q: 'Can automation solutions be customized for specific industries?', a: 'Yes, we customize automation solutions for various industries including healthcare, finance, retail, manufacturing, and more.'},
      {q: 'What ROI can we expect from automation?', a: 'Most clients see ROI within 3-6 months, with typical cost savings of 40-60% on automated processes.'}
    ]
  },

  'technical-optimization': {
    title: 'Technical Process Optimization',
    icon: 'fas fa-chart-line',
    description: 'Optimize your technical infrastructure and processes for maximum efficiency, performance, and cost-effectiveness.',
    features: [
      'Infrastructure Optimization',
      'Performance Tuning',
      'Cost Reduction',
      'Scalability Planning'
    ],
    content: `
      <p>Our technical optimization services help you streamline your technical infrastructure, improve system performance, reduce costs, and prepare for future growth.</p>
      
      <h3>Optimization Areas</h3>
      <ul>
        <li><strong>Cloud Infrastructure:</strong> Optimize cloud resources and reduce costs</li>
        <li><strong>Database Optimization:</strong> Improve database performance and efficiency</li>
        <li><strong>Application Performance:</strong> Enhance application speed and responsiveness</li>
        <li><strong>Network Optimization:</strong> Streamline network infrastructure and connectivity</li>
        <li><strong>Security Optimization:</strong> Strengthen security while maintaining performance</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Reduce technical costs by 30-50%</li>
        <li>Improve system performance by 60%+</li>
        <li>Enhance scalability and reliability</li>
        <li>Optimize resource utilization</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Assessment', desc: 'Comprehensive analysis of your current technical infrastructure'},
      {step: 2, title: 'Audit & Analysis', desc: 'Identify optimization opportunities and bottlenecks'},
      {step: 3, title: 'Recommendations', desc: 'Provide detailed optimization recommendations and roadmap'},
      {step: 4, title: 'Implementation', desc: 'Execute optimization strategies and improvements'},
      {step: 5, title: 'Monitoring', desc: 'Continuous monitoring and further optimization'}
    ],
    facts: [
      {icon: 'fas fa-money-bill-wave', text: '30-50% Cost Saving'},
      {icon: 'fas fa-rocket', text: '60% Performance Gain'},
      {icon: 'fas fa-bolt', text: 'Faster Response'},
      {icon: 'fas fa-shield-alt', text: 'Enhanced Security'}
    ],
    benefits: [
      {icon: 'fas fa-dollar-sign', title: 'Cost Effective', desc: 'Reduce unnecessary technical expenses'},
      {icon: 'fas fa-tachometer-alt', title: 'Better Performance', desc: 'Faster systems and applications'},
      {icon: 'fas fa-expand', title: 'Improved Scalability', desc: 'Handle growth without issues'},
      {icon: 'fas fa-heartbeat', title: 'Reliability', desc: 'More stable and reliable systems'},
      {icon: 'fas fa-lock', title: 'Security', desc: 'Enhanced security posture'},
      {icon: 'fas fa-chart-bar', title: 'Insights', desc: 'Better visibility into technical operations'}
    ],
    faq: [
      {q: 'What types of technical systems do you optimize?', a: 'We optimize cloud infrastructure, databases, applications, networks, and complete technical ecosystems.'},
      {q: 'How long does technical optimization take?', a: 'Depending on complexity, optimization projects typically take 2-8 weeks from assessment to implementation.'},
      {q: 'Will optimization cause downtime?', a: 'We plan optimizations to minimize disruption, often performing work during off-hours with minimal to no downtime.'},
      {q: 'Do you provide ongoing optimization services?', a: 'Yes, we offer ongoing optimization and monitoring services to ensure continued peak performance.'}
    ]
  },

  'ai-automation': {
    title: 'AI Automation Solutions',
    icon: 'fas fa-robot',
    description: 'End-to-end AI automation solutions that transform your business processes with intelligent automation and machine learning.',
    features: [
      'Intelligent Process Automation',
      'Machine Learning Integration',
      'Predictive Analytics',
      'Continuous Learning'
    ],
    content: `
      <p>Our AI automation solutions combine artificial intelligence with automation technologies to create intelligent systems that learn, adapt, and improve over time.</p>
      
      <h3>AI Automation Capabilities</h3>
      <ul>
        <li><strong>Intelligent Document Processing:</strong> Automate data extraction from documents</li>
        <li><strong>Predictive Maintenance:</strong> Anticipate equipment failures before they happen</li>
        <li><strong>Smart Customer Service:</strong> AI-powered support and engagement</li>
        <li><strong>Automated Quality Control:</strong> AI-based quality assurance and inspection</li>
        <li><strong>Intelligent Supply Chain:</strong> Optimize logistics and inventory management</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Automate complex decision-making processes</li>
        <li>Reduce operational costs by 40-70%</li>
        <li>Improve accuracy and consistency</li>
        <li>Enable 24/7 intelligent operations</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Requirement Analysis', desc: 'Understand your business needs and automation goals'},
      {step: 2, title: 'AI Model Selection', desc: 'Choose appropriate AI models and algorithms'},
      {step: 3, title: 'Development & Training', desc: 'Develop AI models and train with your data'},
      {step: 4, title: 'Integration & Testing', desc: 'Integrate with your systems and conduct testing'},
      {step: 5, title: 'Deployment & Monitoring', desc: 'Deploy solutions and monitor performance'}
    ],
    facts: [
      {icon: 'fas fa-brain', text: 'AI-Powered'},
      {icon: 'fas fa-cogs', text: 'Smart Automation'},
      {icon: 'fas fa-chart-line', text: 'Predictive Insights'},
      {icon: 'fas fa-sync', text: 'Continuous Learning'}
    ],
    benefits: [
      {icon: 'fas fa-robot', title: 'Intelligent Automation', desc: 'Smart systems that learn and adapt'},
      {icon: 'fas fa-lightbulb', title: 'Innovative Solutions', desc: 'Cutting-edge AI technologies'},
      {icon: 'fas fa-chart-bar', title: 'Data-Driven', desc: 'Decisions based on data and patterns'},
      {icon: 'fas fa-expand', title: 'Scalable AI', desc: 'Scale AI capabilities as needed'},
      {icon: 'fas fa-shield-alt', title: 'Secure AI', desc: 'Enterprise-grade AI security'},
      {icon: 'fas fa-headset', title: 'Expert Support', desc: 'AI specialists available 24/7'}
    ],
    faq: [
      {q: 'What makes AI automation different from regular automation?', a: 'AI automation uses machine learning to make intelligent decisions and adapt to new situations, while regular automation follows fixed rules.'},
      {q: 'How much data is needed for AI automation?', a: 'The amount of data needed varies by use case, but we can work with both small and large datasets.'},
      {q: 'Can AI automation replace human workers?', a: 'AI automation augments human capabilities rather than replacing them, handling repetitive tasks so humans can focus on higher-value work.'},
      {q: 'How do you ensure AI automation is ethical?', a: 'We follow ethical AI principles, including transparency, fairness, accountability, and privacy protection.'}
    ]
  },

  'whatsapp-chatbots': {
    title: 'WhatsApp Chatbots',
    icon: 'fab fa-whatsapp',
    description: 'Intelligent WhatsApp chatbots that engage customers, provide instant support, and automate conversations on the world\'s most popular messaging platform.',
    features: [
      '24/7 Customer Support',
      'Instant Responses',
      'Multi-language Support',
      'Seamless Integration'
    ],
    content: `
      <p>Our WhatsApp Chatbots transform your customer communication by providing instant, personalized responses to inquiries, automating support, and engaging customers directly on WhatsApp.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Automated Customer Support:</strong> Handle common inquiries 24/7</li>
        <li><strong>Order Tracking:</strong> Provide real-time order updates</li>
        <li><strong>Appointment Scheduling:</strong> Book appointments directly via WhatsApp</li>
        <li><strong>Product Recommendations:</strong> Suggest products based on customer preferences</li>
        <li><strong>Payment Processing:</strong> Accept payments through secure links</li>
      </ul>
      
      <h3>Business Benefits</h3>
      <ul>
        <li>Reduce customer support costs by up to 80%</li>
        <li>Increase customer satisfaction with instant responses</li>
        <li>Generate more leads through automated engagement</li>
        <li>Provide personalized customer experiences</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Requirement Analysis', desc: 'Understand your business needs and customer interaction patterns'},
      {step: 2, title: 'Conversation Design', desc: 'Design natural conversation flows and response patterns'},
      {step: 3, title: 'Development', desc: 'Build and train the chatbot with your business data'},
      {step: 4, title: 'Integration', desc: 'Integrate with WhatsApp Business API and your systems'},
      {step: 5, title: 'Testing & Launch', desc: 'Thorough testing followed by deployment'}
    ],
    facts: [
      {icon: 'fas fa-users', text: '2B+ WhatsApp Users'},
      {icon: 'fas fa-rocket', text: 'Instant Responses'},
      {icon: 'fas fa-globe', text: 'Multi-language'},
      {icon: 'fas fa-sync', text: '24/7 Availability'}
    ],
    benefits: [
      {icon: 'fas fa-comments', title: 'Instant Support', desc: 'Reply to customers in seconds'},
      {icon: 'fas fa-robot', title: 'Smart Automation', desc: 'Handle multiple conversations simultaneously'},
      {icon: 'fas fa-chart-line', title: 'Analytics', desc: 'Track performance and customer insights'},
      {icon: 'fas fa-shield-alt', title: 'Secure', desc: 'End-to-end encryption'},
      {icon: 'fas fa-money-bill', title: 'Cost Effective', desc: 'Reduce support costs significantly'},
      {icon: 'fas fa-mobile-alt', title: 'Mobile First', desc: 'Optimized for mobile users'}
    ],
    faq: [
      {q: 'Do you need WhatsApp Business API approval?', a: 'Yes, we help you get approved for WhatsApp Business API and handle the entire setup process.'},
      {q: 'Can the chatbot handle payments?', a: 'Yes, we can integrate secure payment gateways for transactions within WhatsApp.'},
      {q: 'How many conversations can it handle simultaneously?', a: 'Our chatbots can handle thousands of conversations simultaneously without any lag.'},
      {q: 'Can it integrate with our CRM?', a: 'Yes, we integrate with popular CRMs like Salesforce, HubSpot, Zoho, and custom systems.'}
    ]
  },

  'web-chatbots': {
    title: 'Web Chatbots',
    icon: 'fas fa-globe',
    description: 'Smart web chatbots that engage website visitors, capture leads, and provide instant support directly on your website.',
    features: [
      'Website Visitor Engagement',
      'Lead Capture Automation',
      'Real-time Support',
      'Conversation Analytics'
    ],
    content: `
      <p>Our web chatbots enhance your website experience by engaging visitors, answering questions, capturing leads, and providing instant support 24/7.</p>
      
      <h3>Web Chatbot Capabilities</h3>
      <ul>
        <li><strong>Visitor Engagement:</strong> Proactively engage website visitors</li>
        <li><strong>Lead Qualification:</strong> Qualify leads based on conversation</li>
        <li><strong>FAQ Automation:</strong> Answer common questions instantly</li>
        <li><strong>Appointment Booking:</strong> Schedule meetings directly through chat</li>
        <li><strong>Product Guidance:</strong> Guide visitors to relevant products/services</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Increase lead conversion by up to 40%</li>
        <li>Reduce bounce rates by engaging visitors</li>
        <li>Provide instant support without human intervention</li>
        <li>Gain insights into visitor behavior and needs</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Website Analysis', desc: 'Analyze your website traffic and visitor behavior'},
      {step: 2, title: 'Chatbot Design', desc: 'Design chatbot appearance and conversation flows'},
      {step: 3, title: 'Development & Training', desc: 'Develop chatbot and train with your content'},
      {step: 4, title: 'Integration', desc: 'Integrate with your website and analytics tools'},
      {step: 5, title: 'Launch & Optimization', desc: 'Launch chatbot and continuously optimize'}
    ],
    facts: [
      {icon: 'fas fa-mouse-pointer', text: 'Visitor Engagement'},
      {icon: 'fas fa-chart-line', text: '40% More Leads'},
      {icon: 'fas fa-clock', text: 'Instant Support'},
      {icon: 'fas fa-chart-bar', text: 'Detailed Analytics'}
    ],
    benefits: [
      {icon: 'fas fa-bullseye', title: 'Lead Generation', desc: 'Capture and qualify leads automatically'},
      {icon: 'fas fa-headset', title: 'Customer Support', desc: 'Provide 24/7 instant support'},
      {icon: 'fas fa-paint-brush', title: 'Custom Design', desc: 'Match chatbot to your website design'},
      {icon: 'fas fa-cogs', title: 'Easy Integration', desc: 'Integrate with your existing tools'},
      {icon: 'fas fa-chart-line', title: 'Performance Insights', desc: 'Track chatbot performance metrics'},
      {icon: 'fas fa-expand', title: 'Scalable', desc: 'Handle unlimited conversations'}
    ],
    faq: [
      {q: 'Can web chatbots work on any website?', a: 'Yes, our web chatbots can be integrated with any website regardless of the platform or technology used.'},
      {q: 'How do you train the chatbot for our specific business?', a: 'We use your website content, FAQs, product information, and customer service data to train the chatbot.'},
      {q: 'Can the chatbot transfer to human agents?', a: 'Yes, the chatbot can seamlessly transfer conversations to human agents when needed.'},
      {q: 'Do you provide analytics for chatbot performance?', a: 'Yes, we provide detailed analytics on conversations, lead capture, user satisfaction, and more.'}
    ]
  },

  'instagram-chatbots': {
    title: 'Instagram Chatbots',
    icon: 'fab fa-instagram',
    description: 'Instagram chatbots that automate DMs, engage followers, and provide customer support through Instagram Direct Messages.',
    features: [
      'DM Automation',
      'Follower Engagement',
      'Order Status Updates',
      'Content Delivery'
    ],
    content: `
      <p>Our Instagram chatbots help you automate customer interactions, engage followers, and provide instant support through Instagram Direct Messages.</p>
      
      <h3>Instagram Chatbot Features</h3>
      <ul>
        <li><strong>Automated Responses:</strong> Instant replies to common DM inquiries</li>
        <li><strong>Lead Capture:</strong> Capture leads directly through Instagram</li>
        <li><strong>Content Delivery:</strong> Send content, catalogs, or menus via DM</li>
        <li><strong>Order Management:</strong> Handle order inquiries and status updates</li>
        <li><strong>Appointment Booking:</strong> Schedule appointments through Instagram</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Engage Instagram followers 24/7</li>
        <li>Convert DMs into sales opportunities</li>
        <li>Provide instant customer support</li>
        <li>Automate routine inquiries and responses</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Instagram Audit', desc: 'Analyze your Instagram presence and DM patterns'},
      {step: 2, title: 'Response Design', desc: 'Design automated responses and conversation flows'},
      {step: 3, title: 'Development', desc: 'Develop Instagram chatbot with Instagram API'},
      {step: 4, title: 'Integration', desc: 'Integrate with Instagram and your business systems'},
      {step: 5, title: 'Testing & Launch', desc: 'Test chatbot and launch on your Instagram account'}
    ],
    facts: [
      {icon: 'fab fa-instagram', text: '1B+ Active Users'},
      {icon: 'fas fa-comments', text: 'DM Automation'},
      {icon: 'fas fa-users', text: 'Follower Engagement'},
      {icon: 'fas fa-shopping-cart', text: 'Sales Conversion'}
    ],
    benefits: [
      {icon: 'fas fa-comment-dots', title: 'Instant Replies', desc: 'Reply to DMs instantly 24/7'},
      {icon: 'fas fa-user-plus', title: 'Lead Generation', desc: 'Convert followers into leads'},
      {icon: 'fas fa-shopping-bag', title: 'Sales Support', desc: 'Support sales through Instagram'},
      {icon: 'fas fa-chart-line', title: 'Engagement Metrics', desc: 'Track DM engagement and response rates'},
      {icon: 'fas fa-cogs', title: 'Automation', desc: 'Automate routine customer interactions'},
      {icon: 'fas fa-mobile-alt', title: 'Mobile Optimized', desc: 'Perfect for mobile Instagram users'}
    ],
    faq: [
      {q: 'Can Instagram chatbots handle comments too?', a: 'Yes, we can create chatbots that respond to comments as well as DMs.'},
      {q: 'How do you ensure compliance with Instagram policies?', a: 'We design chatbots to comply with all Instagram API and automation policies.'},
      {q: 'Can the chatbot send images and videos via DM?', a: 'Yes, our Instagram chatbots can send multimedia content including images, videos, and documents.'},
      {q: 'How do you handle privacy and data security?', a: 'We implement strict data security measures and comply with all privacy regulations.'}
    ]
  },

  'custom-saas': {
    title: 'Custom SaaS Development',
    icon: 'fas fa-cloud',
    description: 'Build custom Software-as-a-Service (SaaS) applications tailored to your unique business needs and scalability requirements.',
    features: [
      'Custom SaaS Development',
      'Multi-tenant Architecture',
      'Subscription Management',
      'Scalable Infrastructure'
    ],
    content: `
      <p>We develop custom SaaS applications that are scalable, secure, and designed to grow with your business. Our SaaS solutions are built for performance and user experience.</p>
      
      <h3>SaaS Development Services</h3>
      <ul>
        <li><strong>SaaS MVP Development:</strong> Build minimum viable products for validation</li>
        <li><strong>Enterprise SaaS:</strong> Large-scale SaaS solutions for enterprises</li>
        <li><strong>SaaS Migration:</strong> Migrate existing software to SaaS model</li>
        <li><strong>SaaS Integration:</strong> Integrate with third-party services and APIs</li>
        <li><strong>SaaS Security:</strong> Implement enterprise-grade security</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Recurring revenue model</li>
        <li>Global scalability</li>
        <li>Lower customer acquisition costs</li>
        <li>Continuous product improvement</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Discovery & Planning', desc: 'Define SaaS vision, features, and business model'},
      {step: 2, title: 'Architecture Design', desc: 'Design scalable SaaS architecture and tech stack'},
      {step: 3, title: 'Development', desc: 'Develop SaaS application with agile methodology'},
      {step: 4, title: 'Testing & Security', desc: 'Comprehensive testing and security implementation'},
      {step: 5, title: 'Deployment & Scaling', desc: 'Deploy to cloud and implement scaling strategies'}
    ],
    facts: [
      {icon: 'fas fa-cloud', text: 'Cloud Native'},
      {icon: 'fas fa-users', text: 'Multi-tenant'},
      {icon: 'fas fa-chart-line', text: 'Scalable'},
      {icon: 'fas fa-shield-alt', text: 'Secure'}
    ],
    benefits: [
      {icon: 'fas fa-dollar-sign', title: 'Recurring Revenue', desc: 'Establish predictable revenue streams'},
      {icon: 'fas fa-expand', title: 'Global Reach', desc: 'Serve customers worldwide'},
      {icon: 'fas fa-cogs', title: 'Automated Updates', desc: 'Deliver updates to all users automatically'},
      {icon: 'fas fa-chart-bar', title: 'Usage Analytics', desc: 'Track usage and customer behavior'},
      {icon: 'fas fa-lock', title: 'Data Security', desc: 'Enterprise-grade security measures'},
      {icon: 'fas fa-mobile-alt', title: 'Accessibility', desc: 'Accessible from any device'}
    ],
    faq: [
      {q: 'What technologies do you use for SaaS development?', a: 'We use modern stacks including React/Node.js, Python/Django, AWS, Azure, and microservices architecture.'},
      {q: 'How do you handle SaaS scalability?', a: 'We design for scalability from the ground up using cloud-native technologies and auto-scaling infrastructure.'},
      {q: 'Can you migrate our existing software to SaaS?', a: 'Yes, we specialize in migrating legacy software to modern SaaS platforms.'},
      {q: 'Do you provide ongoing SaaS maintenance?', a: 'Yes, we offer comprehensive SaaS maintenance and support packages.'}
    ]
  },

  'saas-maintenance': {
    title: 'SaaS Maintenance & Support',
    icon: 'fas fa-tools',
    description: 'Comprehensive maintenance and support services to keep your SaaS application running smoothly, securely, and efficiently.',
    features: [
      '24/7 Monitoring',
      'Regular Updates',
      'Security Patches',
      'Performance Optimization'
    ],
    content: `
      <p>Our SaaS maintenance services ensure your application remains secure, up-to-date, and performing optimally, so you can focus on growing your business.</p>
      
      <h3>Maintenance Services</h3>
      <ul>
        <li><strong>Proactive Monitoring:</strong> 24/7 monitoring of application performance</li>
        <li><strong>Security Management:</strong> Regular security updates and vulnerability scanning</li>
        <li><strong>Performance Optimization:</strong> Continuous performance tuning and optimization</li>
        <li><strong>Backup Management:</strong> Automated backups and disaster recovery</li>
        <li><strong>Compliance Management:</strong> Ensure regulatory compliance</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>99.9% uptime guarantee</li>
        <li>Proactive issue resolution</li>
        <li>Reduced downtime and business disruption</li>
        <li>Enhanced security and compliance</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Assessment', desc: 'Assess current SaaS application and infrastructure'},
      {step: 2, title: 'Maintenance Plan', desc: 'Create customized maintenance plan and SLA'},
      {step: 3, title: 'Implementation', desc: 'Implement monitoring and maintenance tools'},
      {step: 4, title: 'Ongoing Maintenance', desc: 'Regular maintenance, updates, and optimizations'},
      {step: 5, title: 'Reporting', desc: 'Regular performance and security reports'}
    ],
    facts: [
      {icon: 'fas fa-shield-alt', text: 'Security First'},
      {icon: 'fas fa-bolt', text: 'Performance'},
      {icon: 'fas fa-sync', text: '24/7 Support'},
      {icon: 'fas fa-chart-line', text: 'Uptime 99.9%'}
    ],
    benefits: [
      {icon: 'fas fa-heartbeat', title: 'Proactive Monitoring', desc: 'Detect and resolve issues before they impact users'},
      {icon: 'fas fa-lock', title: 'Security Assurance', desc: 'Regular security updates and patches'},
      {icon: 'fas fa-tachometer-alt', title: 'Performance', desc: 'Optimized performance and speed'},
      {icon: 'fas fa-history', title: 'Backup & Recovery', desc: 'Reliable backup and disaster recovery'},
      {icon: 'fas fa-headset', title: 'Expert Support', desc: 'Access to technical experts 24/7'},
      {icon: 'fas fa-chart-bar', title: 'Transparency', desc: 'Detailed reports and insights'}
    ],
    faq: [
      {q: 'What does SaaS maintenance include?', a: 'Maintenance includes monitoring, security updates, performance optimization, backups, bug fixes, and technical support.'},
      {q: 'How quickly do you respond to issues?', a: 'We offer 24/7 support with response times as low as 15 minutes for critical issues.'},
      {q: 'Can you handle maintenance for SaaS built by other developers?', a: 'Yes, we can maintain and support SaaS applications regardless of who developed them.'},
      {q: 'Do you offer different maintenance tiers?', a: 'Yes, we offer various maintenance packages to suit different needs and budgets.'}
    ]
  },

  // Digital Marketing Services
  'digital-marketing-strategy': {
    title: 'Digital Marketing Strategy',
    icon: 'fas fa-bullseye',
    description: 'Comprehensive digital marketing strategies that align with your business goals and drive measurable results.',
    features: [
      'Market Analysis',
      'Strategy Development',
      'KPI Setting',
      'Performance Tracking'
    ],
    content: `
      <p>We develop data-driven digital marketing strategies that help you reach your target audience, achieve business objectives, and maximize ROI.</p>
      
      <h3>Strategic Components</h3>
      <ul>
        <li><strong>Market Research:</strong> Analyze market trends and competitor strategies</li>
        <li><strong>Audience Analysis:</strong> Understand your target audience and buyer personas</li>
        <li><strong>Channel Strategy:</strong> Select optimal digital channels for your business</li>
        <li><strong>Content Strategy:</strong> Plan content that engages and converts</li>
        <li><strong>Measurement Framework:</strong> Define KPIs and measurement methodology</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Clear roadmap for digital marketing success</li>
        <li>Improved ROI on marketing investments</li>
        <li>Better alignment between marketing and business goals</li>
        <li>Data-driven decision making</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Discovery', desc: 'Understand business objectives and current marketing efforts'},
      {step: 2, title: 'Research & Analysis', desc: 'Analyze market, competitors, and audience'},
      {step: 3, title: 'Strategy Development', desc: 'Develop comprehensive digital marketing strategy'},
      {step: 4, title: 'Implementation Plan', desc: 'Create detailed implementation roadmap'},
      {step: 5, title: 'Performance Framework', desc: 'Establish measurement and optimization framework'}
    ],
    facts: [
      {icon: 'fas fa-chart-line', text: 'Data-Driven'},
      {icon: 'fas fa-bullseye', text: 'Goal-Oriented'},
      {icon: 'fas fa-search', text: 'Market Insights'},
      {icon: 'fas fa-chart-bar', text: 'ROI Focused'}
    ],
    benefits: [
      {icon: 'fas fa-road', title: 'Clear Direction', desc: 'Roadmap for marketing success'},
      {icon: 'fas fa-users', title: 'Audience Focus', desc: 'Targeted approach to reach ideal customers'},
      {icon: 'fas fa-money-bill-wave', title: 'Budget Optimization', desc: 'Allocate budget for maximum impact'},
      {icon: 'fas fa-chart-pie', title: 'Measurable Results', desc: 'Track and measure performance'},
      {icon: 'fas fa-lightbulb', title: 'Competitive Edge', desc: 'Stay ahead of competitors'},
      {icon: 'fas fa-sync', title: 'Adaptability', desc: 'Flexible strategies that adapt to changes'}
    ],
    faq: [
      {q: 'How long does it take to develop a digital marketing strategy?', a: 'Typically 2-4 weeks depending on business complexity and research requirements.'},
      {q: 'Do you include competitor analysis in the strategy?', a: 'Yes, comprehensive competitor analysis is a key component of our strategy development.'},
      {q: 'Can you help implement the strategy you develop?', a: 'Yes, we offer both strategy development and implementation services.'},
      {q: 'How do you measure strategy success?', a: 'We establish clear KPIs and measurement frameworks to track strategy performance.'}
    ]
  },

  'marketing-analytics': {
    title: 'Marketing Analytics',
    icon: 'fas fa-chart-line',
    description: 'Advanced marketing analytics and insights to measure performance, optimize campaigns, and maximize ROI.',
    features: [
      'Campaign Tracking',
      'ROI Analysis',
      'Customer Insights',
      'Performance Reporting'
    ],
    content: `
      <p>Our marketing analytics services help you understand campaign performance, customer behavior, and marketing effectiveness through data analysis and insights.</p>
      
      <h3>Analytics Services</h3>
      <ul>
        <li><strong>Campaign Analytics:</strong> Track and analyze marketing campaign performance</li>
        <li><strong>Conversion Tracking:</strong> Measure conversions and attribution</li>
        <li><strong>Customer Analytics:</strong> Analyze customer behavior and journeys</li>
        <li><strong>ROI Analysis:</strong> Calculate return on marketing investment</li>
        <li><strong>Predictive Analytics:</strong> Forecast marketing outcomes and trends</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Data-driven marketing decisions</li>
        <li>Improved campaign performance and ROI</li>
        <li>Better understanding of customer behavior</li>
        <li>Optimized marketing spend allocation</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Data Assessment', desc: 'Assess available data sources and tracking setup'},
      {step: 2, title: 'Implementation', desc: 'Implement analytics tracking and measurement tools'},
      {step: 3, title: 'Data Analysis', desc: 'Analyze marketing data and generate insights'},
      {step: 4, title: 'Reporting', desc: 'Create comprehensive reports and dashboards'},
      {step: 5, title: 'Optimization', desc: 'Provide recommendations for optimization'}
    ],
    facts: [
      {icon: 'fas fa-database', text: 'Data Analysis'},
      {icon: 'fas fa-chart-bar', text: 'Performance Insights'},
      {icon: 'fas fa-search-dollar', text: 'ROI Tracking'},
      {icon: 'fas fa-eye', text: 'Visibility'}
    ],
    benefits: [
      {icon: 'fas fa-chart-pie', title: 'Performance Insights', desc: 'Understand what works and what doesn\'t'},
      {icon: 'fas fa-dollar-sign', title: 'ROI Optimization', desc: 'Maximize return on marketing investment'},
      {icon: 'fas fa-users', title: 'Customer Understanding', desc: 'Gain insights into customer behavior'},
      {icon: 'fas fa-bullseye', title: 'Targeted Marketing', desc: 'Refine targeting based on data'},
      {icon: 'fas fa-clock', title: 'Time Savings', desc: 'Automated reporting saves time'},
      {icon: 'fas fa-lightbulb', title: 'Strategic Insights', desc: 'Data-driven strategic decisions'}
    ],
    faq: [
      {q: 'Which analytics tools do you use?', a: 'We use Google Analytics, Adobe Analytics, Mixpanel, as well as custom analytics solutions.'},
      {q: 'Can you help set up tracking if we don\'t have it?', a: 'Yes, we can implement comprehensive tracking and analytics setups from scratch.'},
      {q: 'How often do you provide analytics reports?', a: 'We provide regular reports (weekly, monthly, quarterly) as well as real-time dashboards.'},
      {q: 'Can you integrate analytics across multiple platforms?', a: 'Yes, we specialize in cross-platform analytics integration.'}
    ]
  },

  'content-strategy': {
    title: 'Content Strategy',
    icon: 'fas fa-file-alt',
    description: 'Strategic content planning and development that engages audiences, builds authority, and drives business growth.',
    features: [
      'Content Planning',
      'Audience Research',
      'Content Calendar',
      'Performance Measurement'
    ],
    content: `
      <p>Our content strategy services help you create and distribute valuable, relevant content that attracts and retains your target audience, ultimately driving profitable customer action.</p>
      
      <h3>Content Strategy Components</h3>
      <ul>
        <li><strong>Audience Research:</strong> Understand audience needs and content preferences</li>
        <li><strong>Content Audit:</strong> Assess existing content and identify gaps</li>
        <li><strong>Content Planning:</strong> Plan content topics, formats, and distribution</li>
        <li><strong>Editorial Calendar:</strong> Schedule content creation and publication</li>
        <li><strong>Performance Metrics:</strong> Define content success metrics</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Increased brand awareness and authority</li>
        <li>Higher engagement and conversion rates</li>
        <li>Improved SEO and organic traffic</li>
        <li>Consistent and purposeful content creation</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Research & Analysis', desc: 'Research audience, competitors, and content landscape'},
      {step: 2, title: 'Strategy Development', desc: 'Develop comprehensive content strategy'},
      {step: 3, title: 'Content Planning', desc: 'Plan content topics, formats, and calendar'},
      {step: 4, title: 'Implementation Framework', desc: 'Create content creation and distribution framework'},
      {step: 5, title: 'Measurement Plan', desc: 'Establish content performance measurement'}
    ],
    facts: [
      {icon: 'fas fa-pen', text: 'Strategic Planning'},
      {icon: 'fas fa-users', text: 'Audience Focused'},
      {icon: 'fas fa-calendar', text: 'Content Calendar'},
      {icon: 'fas fa-chart-line', text: 'Performance Driven'}
    ],
    benefits: [
      {icon: 'fas fa-bullseye', title: 'Clear Direction', desc: 'Strategic approach to content'},
      {icon: 'fas fa-users', title: 'Audience Engagement', desc: 'Content that resonates with audience'},
      {icon: 'fas fa-search', title: 'SEO Benefits', desc: 'Improved search engine visibility'},
      {icon: 'fas fa-chart-line', title: 'Measurable Results', desc: 'Track content performance'},
      {icon: 'fas fa-lightbulb', title: 'Thought Leadership', desc: 'Establish industry authority'},
      {icon: 'fas fa-sync', title: 'Consistency', desc: 'Consistent content delivery'}
    ],
    faq: [
      {q: 'What types of content do you strategize for?', a: 'We strategize for blog posts, articles, videos, social media content, whitepapers, case studies, and more.'},
      {q: 'How do you determine what content to create?', a: 'We use audience research, keyword analysis, competitor analysis, and business goals to determine content topics.'},
      {q: 'Do you help with content creation too?', a: 'Yes, we offer both content strategy and content creation services.'},
      {q: 'How long does a content strategy take to show results?', a: 'Typically 3-6 months to see significant results, though some metrics improve sooner.'}
    ]
  },

  'facebook-management': {
    title: 'Facebook Management',
    icon: 'fab fa-facebook',
    description: 'Comprehensive Facebook management services including page management, content creation, advertising, and community engagement.',
    features: [
      'Page Management',
      'Content Creation',
      'Community Engagement',
      'Advertising Management'
    ],
    content: `
      <p>Our Facebook management services help you build and engage your Facebook community, grow your following, and achieve your marketing objectives on the world\'s largest social network.</p>
      
      <h3>Facebook Management Services</h3>
      <ul>
        <li><strong>Page Optimization:</strong> Optimize Facebook page for maximum visibility</li>
        <li><strong>Content Strategy:</strong> Develop engaging content strategy for Facebook</li>
        <li><strong>Community Management:</strong> Engage with followers and manage comments</li>
        <li><strong>Advertising Management:</strong> Create and optimize Facebook ads</li>
        <li><strong>Analytics & Reporting:</strong> Track performance and provide insights</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Increased brand visibility and engagement</li>
        <li>Higher reach and follower growth</li>
        <li>Improved customer relationships</li>
        <li>Better return on Facebook advertising</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Audit & Analysis', desc: 'Audit current Facebook presence and performance'},
      {step: 2, title: 'Strategy Development', desc: 'Develop Facebook strategy and content plan'},
      {step: 3, title: 'Content Creation', desc: 'Create engaging content for Facebook'},
      {step: 4, title: 'Community Management', desc: 'Manage community engagement and interactions'},
      {step: 5, title: 'Performance Optimization', desc: 'Monitor performance and optimize strategy'}
    ],
    facts: [
      {icon: 'fab fa-facebook', text: '2.9B+ Users'},
      {icon: 'fas fa-users', text: 'Community Building'},
      {icon: 'fas fa-bullhorn', text: 'Advertising'},
      {icon: 'fas fa-chart-line', text: 'Performance'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Brand Visibility', desc: 'Increase brand awareness on Facebook'},
      {icon: 'fas fa-users', title: 'Community Growth', desc: 'Grow engaged Facebook community'},
      {icon: 'fas fa-comments', title: 'Customer Engagement', desc: 'Engage with customers directly'},
      {icon: 'fas fa-ad', title: 'Targeted Advertising', desc: 'Reach ideal audience with ads'},
      {icon: 'fas fa-chart-bar', title: 'Performance Tracking', desc: 'Track and measure results'},
      {icon: 'fas fa-headset', title: 'Expert Management', desc: 'Professional Facebook management'}
    ],
    faq: [
      {q: 'How often do you post on Facebook?', a: 'Posting frequency depends on your audience and goals, typically 3-7 times per week.'},
      {q: 'Do you handle Facebook advertising?', a: 'Yes, we manage complete Facebook advertising campaigns including strategy, creation, and optimization.'},
      {q: 'How do you handle negative comments?', a: 'We have protocols for handling negative comments professionally and maintaining brand reputation.'},
      {q: 'What metrics do you track?', a: 'We track engagement rate, reach, follower growth, click-through rate, conversion rate, and ROI.'}
    ]
  },

  'instagram-management': {
    title: 'Instagram Management',
    icon: 'fab fa-instagram',
    description: 'Complete Instagram management including content creation, community engagement, story management, and advertising.',
    features: [
      'Content Creation',
      'Story Management',
      'Community Engagement',
      'Advertising Management'
    ],
    content: `
      <p>Our Instagram management services help you build a compelling Instagram presence that engages your audience, showcases your brand, and drives business results.</p>
      
      <h3>Instagram Management Services</h3>
      <ul>
        <li><strong>Profile Optimization:</strong> Optimize Instagram profile for maximum impact</li>
        <li><strong>Content Strategy:</strong> Develop visual content strategy for Instagram</li>
        <li><strong>Story Management:</strong> Create engaging Instagram Stories</li>
        <li><strong>Reels Creation:</strong> Create trending Instagram Reels</li>
        <li><strong>Community Engagement:</strong> Engage with followers and manage comments</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Increased brand visibility and engagement</li>
        <li>Higher follower growth and reach</li>
        <li>Improved brand aesthetics and storytelling</li>
        <li>Better return on Instagram advertising</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Audit & Analysis', desc: 'Audit current Instagram presence and performance'},
      {step: 2, title: 'Strategy Development', desc: 'Develop Instagram strategy and content plan'},
      {step: 3, title: 'Content Creation', desc: 'Create visual content for feed and stories'},
      {step: 4, title: 'Community Management', desc: 'Engage with community and respond to comments'},
      {step: 5, title: 'Performance Optimization', desc: 'Monitor performance and optimize strategy'}
    ],
    facts: [
      {icon: 'fab fa-instagram', text: 'Visual Platform'},
      {icon: 'fas fa-images', text: 'Content Creation'},
      {icon: 'fas fa-users', text: 'Community'},
      {icon: 'fas fa-chart-line', text: 'Engagement'}
    ],
    benefits: [
      {icon: 'fas fa-paint-brush', title: 'Visual Branding', desc: 'Strong visual brand presence'},
      {icon: 'fas fa-users', title: 'Community Building', desc: 'Build engaged Instagram community'},
      {icon: 'fas fa-video', title: 'Storytelling', desc: 'Tell brand stories through visuals'},
      {icon: 'fas fa-hashtag', title: 'Hashtag Strategy', desc: 'Strategic hashtag use for reach'},
      {icon: 'fas fa-chart-bar', title: 'Performance Insights', desc: 'Track and measure results'},
      {icon: 'fas fa-mobile-alt', title: 'Mobile Optimized', desc: 'Optimized for mobile experience'}
    ],
    faq: [
      {q: 'How often do you post on Instagram?', a: 'Typically 3-5 times per week for feed posts, plus daily stories and regular reels.'},
      {q: 'Do you create Instagram Reels?', a: 'Yes, we create engaging Instagram Reels as part of our management services.'},
      {q: 'How do you develop content themes?', a: 'We develop content themes based on your brand, audience preferences, and trending topics.'},
      {q: 'Do you handle Instagram shopping features?', a: 'Yes, we can set up and manage Instagram shopping features for e-commerce businesses.'}
    ]
  },

  'twitter-management': {
    title: 'Twitter Management',
    icon: 'fab fa-twitter',
    description: 'Professional Twitter management including content creation, community engagement, trend monitoring, and brand building.',
    features: [
      'Content Creation',
      'Community Engagement',
      'Trend Monitoring',
      'Brand Building'
    ],
    content: `
      <p>Our Twitter management services help you build a strong Twitter presence, engage in relevant conversations, and establish your brand as an industry thought leader.</p>
      
      <h3>Twitter Management Services</h3>
      <ul>
        <li><strong>Profile Optimization:</strong> Optimize Twitter profile for maximum impact</li>
        <li><strong>Content Strategy:</strong> Develop Twitter content and engagement strategy</li>
        <li><strong>Tweet Creation:</strong> Create engaging tweets and threads</li>
        <li><strong>Community Engagement:</strong> Engage with followers and industry conversations</li>
        <li><strong>Trend Monitoring:</strong> Monitor trends and relevant conversations</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Increased brand visibility and authority</li>
        <li>Higher engagement and follower growth</li>
        <li>Better customer service and support</li>
        <li>Industry thought leadership</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Audit & Analysis', desc: 'Audit current Twitter presence and performance'},
      {step: 2, title: 'Strategy Development', desc: 'Develop Twitter strategy and content plan'},
      {step: 3, title: 'Content Creation', desc: 'Create tweets and engagement content'},
      {step: 4, title: 'Community Engagement', desc: 'Engage with community and industry conversations'},
      {step: 5, title: 'Performance Optimization', desc: 'Monitor performance and optimize strategy'}
    ],
    facts: [
      {icon: 'fab fa-twitter', text: 'Real-time Platform'},
      {icon: 'fas fa-comments', text: 'Conversations'},
      {icon: 'fas fa-bolt', text: 'Trending Topics'},
      {icon: 'fas fa-users', text: 'Community'}
    ],
    benefits: [
      {icon: 'fas fa-bullhorn', title: 'Brand Voice', desc: 'Establish strong brand voice on Twitter'},
      {icon: 'fas fa-comments', title: 'Conversation Engagement', desc: 'Engage in relevant conversations'},
      {icon: 'fas fa-lightbulb', title: 'Thought Leadership', desc: 'Establish industry authority'},
      {icon: 'fas fa-headset', title: 'Customer Support', desc: 'Provide customer service via Twitter'},
      {icon: 'fas fa-chart-bar', title: 'Performance Tracking', desc: 'Track engagement and growth'},
      {icon: 'fas fa-bolt', title: 'Real-time Engagement', desc: 'Real-time response and engagement'}
    ],
    faq: [
      {q: 'How often do you tweet?', a: 'Typically 3-10 tweets per day depending on your industry and engagement goals.'},
      {q: 'Do you handle Twitter customer service?', a: 'Yes, we can manage customer service and support through Twitter.'},
      {q: 'How do you handle Twitter crises or negative situations?', a: 'We have crisis management protocols to handle negative situations professionally.'},
      {q: 'Do you use Twitter advertising?', a: 'Yes, we can manage Twitter advertising campaigns as part of our services.'}
    ]
  },

  'onpage-seo': {
    title: 'On-page SEO',
    icon: 'fas fa-search',
    description: 'Comprehensive on-page SEO optimization to improve your website\'s search engine visibility and rankings.',
    features: [
      'Keyword Optimization',
      'Content Optimization',
      'Technical SEO',
      'Metadata Optimization'
    ],
    content: `
      <p>Our on-page SEO services optimize every element on your website to improve search engine rankings, increase organic traffic, and enhance user experience.</p>
      
      <h3>On-page SEO Services</h3>
      <ul>
        <li><strong>Keyword Research:</strong> Research and target relevant keywords</li>
        <li><strong>Content Optimization:</strong> Optimize website content for target keywords</li>
        <li><strong>Technical SEO:</strong> Improve technical aspects of your website</li>
        <li><strong>Metadata Optimization:</strong> Optimize title tags, meta descriptions, and headings</li>
        <li><strong>Image Optimization:</strong> Optimize images for SEO and performance</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Higher search engine rankings</li>
        <li>Increased organic traffic</li>
        <li>Better user experience</li>
        <li>Improved conversion rates</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Website Audit', desc: 'Comprehensive SEO audit of your website'},
      {step: 2, title: 'Keyword Research', desc: 'Research and select target keywords'},
      {step: 3, title: 'On-page Optimization', desc: 'Optimize website pages for SEO'},
      {step: 4, title: 'Content Optimization', desc: 'Optimize existing content for better rankings'},
      {step: 5, title: 'Monitoring & Reporting', desc: 'Monitor rankings and provide reports'}
    ],
    facts: [
      {icon: 'fas fa-search', text: 'SEO Optimization'},
      {icon: 'fas fa-key', text: 'Keyword Focus'},
      {icon: 'fas fa-chart-line', text: 'Ranking Improvement'},
      {icon: 'fas fa-tachometer-alt', text: 'Performance'}
    ],
    benefits: [
      {icon: 'fas fa-arrow-up', title: 'Higher Rankings', desc: 'Improve search engine rankings'},
      {icon: 'fas fa-users', title: 'More Traffic', desc: 'Increase organic website traffic'},
      {icon: 'fas fa-dollar-sign', title: 'Cost Effective', desc: 'Long-term organic traffic growth'},
      {icon: 'fas fa-chart-bar', title: 'Measurable Results', desc: 'Track ranking improvements'},
      {icon: 'fas fa-user-check', title: 'Better UX', desc: 'Improved user experience'},
      {icon: 'fas fa-shield-alt', title: 'Sustainable', desc: 'Long-lasting SEO results'}
    ],
    faq: [
      {q: 'How long does on-page SEO take to show results?', a: 'Typically 3-6 months to see significant improvements, though some changes show results sooner.'},
      {q: 'Do you optimize existing content or create new content?', a: 'We optimize existing content and can also create new SEO-optimized content.'},
      {q: 'How often should on-page SEO be updated?', a: 'On-page SEO should be reviewed and updated regularly, at least quarterly.'},
      {q: 'Can you optimize e-commerce product pages?', a: 'Yes, we specialize in e-commerce SEO including product page optimization.'}
    ]
  },

  'offpage-seo': {
    title: 'Off-page SEO',
    icon: 'fas fa-link',
    description: 'Strategic off-page SEO services including link building, social signals, and brand mentions to improve search engine authority.',
    features: [
      'Link Building',
      'Brand Mentions',
      'Social Signals',
      'Local SEO'
    ],
    content: `
      <p>Our off-page SEO services build your website\'s authority and reputation through strategic link building, social signals, and online brand presence.</p>
      
      <h3>Off-page SEO Services</h3>
      <ul>
        <li><strong>Link Building:</strong> Build high-quality backlinks from authoritative sites</li>
        <li><strong>Content Promotion:</strong> Promote content to gain links and shares</li>
        <li><strong>Brand Mentions:</strong> Monitor and build brand mentions online</li>
        <li><strong>Social Signals:</strong> Build social media presence and engagement</li>
        <li><strong>Local SEO:</strong> Improve local search presence and citations</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Increased domain authority</li>
        <li>Higher search engine rankings</li>
        <li>Improved online reputation</li>
        <li>More referral traffic</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Link Profile Analysis', desc: 'Analyze current backlink profile and opportunities'},
      {step: 2, title: 'Strategy Development', desc: 'Develop off-page SEO strategy'},
      {step: 3, title: 'Link Building', desc: 'Execute link building campaigns'},
      {step: 4, title: 'Brand Building', desc: 'Build brand mentions and online presence'},
      {step: 5, title: 'Monitoring & Reporting', desc: 'Monitor results and provide reports'}
    ],
    facts: [
      {icon: 'fas fa-link', text: 'Link Building'},
      {icon: 'fas fa-share-alt', text: 'Social Signals'},
      {icon: 'fas fa-bullhorn', text: 'Brand Building'},
      {icon: 'fas fa-map-marker-alt', text: 'Local SEO'}
    ],
    benefits: [
      {icon: 'fas fa-award', title: 'Authority Building', desc: 'Build website authority and trust'},
      {icon: 'fas fa-arrow-up', title: 'Better Rankings', desc: 'Improve search engine rankings'},
      {icon: 'fas fa-users', title: 'Brand Awareness', desc: 'Increase online brand visibility'},
      {icon: 'fas fa-traffic-light', title: 'Traffic Diversification', desc: 'Diversify traffic sources'},
      {icon: 'fas fa-chart-bar', title: 'Measurable Impact', desc: 'Track link growth and impact'},
      {icon: 'fas fa-shield-alt', title: 'White Hat SEO', desc: 'Ethical, sustainable SEO practices'}
    ],
    faq: [
      {q: 'What types of links do you build?', a: 'We build high-quality, relevant links from authoritative websites using white hat techniques.'},
      {q: 'How many links do you build per month?', a: 'Link building quantity varies based on strategy, typically 5-20 high-quality links per month.'},
      {q: 'Do you guarantee specific rankings?', a: 'We don\'t guarantee specific rankings as search algorithms change, but we guarantee our work and efforts.'},
      {q: 'How do you measure off-page SEO success?', a: 'We measure success through domain authority improvement, ranking increases, referral traffic, and link quality.'}
    ]
  },

  'seo-analytics': {
    title: 'SEO Analytics',
    icon: 'fas fa-chart-bar',
    description: 'Comprehensive SEO analytics and reporting to track performance, identify opportunities, and optimize SEO strategies.',
    features: [
      'Performance Tracking',
      'Competitor Analysis',
      'Opportunity Identification',
      'ROI Measurement'
    ],
    content: `
      <p>Our SEO analytics services provide deep insights into your SEO performance, competitor strategies, and opportunities for improvement.</p>
      
      <h3>SEO Analytics Services</h3>
      <ul>
        <li><strong>Performance Tracking:</strong> Track rankings, traffic, and conversions</li>
        <li><strong>Competitor Analysis:</strong> Analyze competitor SEO strategies</li>
        <li><strong>Keyword Tracking:</strong> Monitor keyword rankings and performance</li>
        <li><strong>Technical SEO Analysis:</strong> Analyze technical SEO factors</li>
        <li><strong>ROI Analysis:</strong> Measure SEO return on investment</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Data-driven SEO decisions</li>
        <li>Better understanding of SEO performance</li>
        <li>Identification of optimization opportunities</li>
        <li>Improved ROI from SEO efforts</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Setup & Configuration', desc: 'Set up analytics and tracking tools'},
      {step: 2, title: 'Data Collection', desc: 'Collect SEO performance data'},
      {step: 3, title: 'Analysis', desc: 'Analyze data and identify insights'},
      {step: 4, title: 'Reporting', desc: 'Create comprehensive SEO reports'},
      {step: 5, title: 'Recommendations', desc: 'Provide data-driven recommendations'}
    ],
    facts: [
      {icon: 'fas fa-chart-line', text: 'Performance Insights'},
      {icon: 'fas fa-search', text: 'Keyword Tracking'},
      {icon: 'fas fa-users', text: 'Competitor Analysis'},
      {icon: 'fas fa-dollar-sign', text: 'ROI Measurement'}
    ],
    benefits: [
      {icon: 'fas fa-chart-pie', title: 'Performance Visibility', desc: 'Clear view of SEO performance'},
      {icon: 'fas fa-lightbulb', title: 'Insights', desc: 'Actionable SEO insights'},
      {icon: 'fas fa-bullseye', title: 'Goal Tracking', desc: 'Track SEO goals and KPIs'},
      {icon: 'fas fa-clock', title: 'Time Savings', desc: 'Automated reporting saves time'},
      {icon: 'fas fa-money-bill-wave', title: 'ROI Focus', desc: 'Focus on high-ROI SEO activities'},
      {icon: 'fas fa-shield-alt', title: 'Data Security', desc: 'Secure data handling and storage'}
    ],
    faq: [
      {q: 'Which SEO analytics tools do you use?', a: 'We use a combination of tools including Google Analytics, Google Search Console, SEMrush, Ahrefs, and custom analytics.'},
      {q: 'How often do you provide SEO reports?', a: 'We provide monthly SEO reports as standard, with options for weekly or quarterly reporting.'},
      {q: 'Can you track local SEO performance?', a: 'Yes, we track local SEO performance including local pack rankings and local business metrics.'},
      {q: 'Do you provide competitor SEO analysis?', a: 'Yes, comprehensive competitor SEO analysis is included in our services.'}
    ]
  },

  'email-campaigns': {
    title: 'Email Marketing Campaigns',
    icon: 'fas fa-mail-bulk',
    description: 'Strategic email marketing campaigns that engage subscribers, nurture leads, and drive conversions.',
    features: [
      'Campaign Strategy',
      'Email Design',
      'List Segmentation',
      'Performance Analytics'
    ],
    content: `
      <p>Our email marketing campaigns help you build relationships with your audience, nurture leads, and drive sales through strategic email communications.</p>
      
      <h3>Email Campaign Services</h3>
      <ul>
        <li><strong>Campaign Strategy:</strong> Develop comprehensive email marketing strategy</li>
        <li><strong>Email Design:</strong> Design engaging email templates</li>
        <li><strong>Content Creation:</strong> Create compelling email content</li>
        <li><strong>List Segmentation:</strong> Segment email lists for targeted campaigns</li>
        <li><strong>Automation Setup:</strong> Set up email automation sequences</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Higher email engagement and open rates</li>
        <li>Improved lead nurturing and conversion</li>
        <li>Better customer retention and loyalty</li>
        <li>Higher ROI from email marketing</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Strategy Development', desc: 'Develop email marketing strategy and goals'},
      {step: 2, title: 'Audience Segmentation', desc: 'Segment email lists for targeting'},
      {step: 3, title: 'Content Creation', desc: 'Create email content and design templates'},
      {step: 4, title: 'Campaign Execution', desc: 'Execute email campaigns and automation'},
      {step: 5, title: 'Analysis & Optimization', desc: 'Analyze performance and optimize campaigns'}
    ],
    facts: [
      {icon: 'fas fa-envelope', text: 'Email Marketing'},
      {icon: 'fas fa-users', text: 'Audience Engagement'},
      {icon: 'fas fa-chart-line', text: 'Conversion Focused'},
      {icon: 'fas fa-cogs', text: 'Automation'}
    ],
    benefits: [
      {icon: 'fas fa-bullseye', title: 'Targeted Communication', desc: 'Reach right audience with right message'},
      {icon: 'fas fa-chart-line', title: 'High ROI', desc: 'Email marketing offers highest marketing ROI'},
      {icon: 'fas fa-user-check', title: 'Relationship Building', desc: 'Build relationships with subscribers'},
      {icon: 'fas fa-cogs', title: 'Automation', desc: 'Automate lead nurturing and follow-ups'},
      {icon: 'fas fa-chart-bar', title: 'Measurable Results', desc: 'Track opens, clicks, and conversions'},
      {icon: 'fas fa-expand', title: 'Scalability', desc: 'Scale email marketing as business grows'}
    ],
    faq: [
      {q: 'Which email platforms do you work with?', a: 'We work with all major platforms including Mailchimp, HubSpot, SendGrid, Constant Contact, and custom solutions.'},
      {q: 'How often should we send email campaigns?', a: 'Frequency depends on your audience and goals, typically 1-4 times per week for newsletters.'},
      {q: 'Do you help grow email lists?', a: 'Yes, we implement strategies to grow your email list organically.'},
      {q: 'Can you create automated email sequences?', a: 'Yes, we create automated sequences for welcome emails, lead nurturing, onboarding, and more.'}
    ]
  },

  'newsletter-management': {
    title: 'Newsletter Management',
    icon: 'fas fa-list',
    description: 'Professional newsletter management including design, content creation, distribution, and performance tracking.',
    features: [
      'Newsletter Design',
      'Content Creation',
      'List Management',
      'Performance Tracking'
    ],
    content: `
      <p>Our newsletter management services help you create engaging newsletters that keep your audience informed, build brand loyalty, and drive business results.</p>
      
      <h3>Newsletter Services</h3>
      <ul>
        <li><strong>Newsletter Strategy:</strong> Develop newsletter strategy and content plan</li>
        <li><strong>Template Design:</strong> Design professional newsletter templates</li>
        <li><strong>Content Creation:</strong> Create engaging newsletter content</li>
        <li><strong>List Management:</strong> Manage subscriber lists and segmentation</li>
        <li><strong>Distribution & Tracking:</strong> Distribute newsletters and track performance</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Consistent communication with your audience</li>
        <li>Increased brand awareness and loyalty</li>
        <li>Higher website traffic and engagement</li>
        <li>Better customer retention</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Strategy Development', desc: 'Develop newsletter strategy and objectives'},
      {step: 2, title: 'Template Design', desc: 'Design newsletter templates and branding'},
      {step: 3, title: 'Content Planning', desc: 'Plan newsletter content and schedule'},
      {step: 4, title: 'Production & Distribution', desc: 'Produce and distribute newsletters'},
      {step: 5, title: 'Performance Analysis', desc: 'Analyze performance and optimize'}
    ],
    facts: [
      {icon: 'fas fa-newspaper', text: 'Regular Updates'},
      {icon: 'fas fa-paint-brush', text: 'Professional Design'},
      {icon: 'fas fa-users', text: 'Audience Engagement'},
      {icon: 'fas fa-chart-line', text: 'Performance Tracking'}
    ],
    benefits: [
      {icon: 'fas fa-bullhorn', title: 'Brand Awareness', desc: 'Regular brand visibility'},
      {icon: 'fas fa-users', title: 'Audience Connection', desc: 'Stay connected with audience'},
      {icon: 'fas fa-traffic-light', title: 'Traffic Driver', desc: 'Drive consistent website traffic'},
      {icon: 'fas fa-lightbulb', title: 'Thought Leadership', desc: 'Share insights and expertise'},
      {icon: 'fas fa-chart-bar', title: 'Measurable Impact', desc: 'Track opens, clicks, and engagement'},
      {icon: 'fas fa-cogs', title: 'Time Saving', desc: 'Professional management saves time'}
    ],
    faq: [
      {q: 'How often should newsletters be sent?', a: 'Typically weekly, bi-weekly, or monthly depending on your audience and content availability.'},
      {q: 'What type of content should newsletters include?', a: 'Newsletters should include valuable content such as industry news, tips, company updates, and promotions.'},
      {q: 'Do you help with newsletter subscriber growth?', a: 'Yes, we implement strategies to grow your newsletter subscriber list.'},
      {q: 'Can you create different newsletters for different audience segments?', a: 'Yes, we can create segmented newsletters for different audience groups.'}
    ]
  },

  // Web Development Services
  'custom-website': {
    title: 'Custom Website Development',
    icon: 'fas fa-code',
    description: 'Build high-performance, custom websites that are tailored to your brand identity and business objectives.',
    features: [
      'Custom Design & Development',
      'Mobile Responsive',
      'SEO Optimized',
      'Fast Loading'
    ],
    content: `
      <p>We create bespoke websites that are not just visually stunning but also strategically designed to achieve your business goals. Every website we build is unique, optimized for performance, and focused on user experience.</p>
      
      <h3>Our Approach</h3>
      <ul>
        <li><strong>Strategic Planning:</strong> Align website design with business objectives</li>
        <li><strong>User-Centered Design:</strong> Create intuitive user experiences</li>
        <li><strong>Performance Optimization:</strong> Ensure fast loading times</li>
        <li><strong>SEO Ready:</strong> Built with best SEO practices</li>
        <li><strong>Security:</strong> Implement robust security measures</li>
      </ul>
      
      <h3>Technologies We Use</h3>
      <ul>
        <li>React.js / Next.js for frontend</li>
        <li>Node.js / Python for backend</li>
        <li>WordPress for CMS solutions</li>
        <li>Shopify for e-commerce</li>
        <li>Modern CSS frameworks</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Discovery', desc: 'Understand your business, goals, and target audience'},
      {step: 2, title: 'Planning', desc: 'Create sitemap, wireframes, and project roadmap'},
      {step: 3, title: 'Design', desc: 'Develop visual design and user interface'},
      {step: 4, title: 'Development', desc: 'Code the website with modern technologies'},
      {step: 5, title: 'Testing & Launch', desc: 'Thorough testing followed by deployment'}
    ],
    facts: [
      {icon: 'fas fa-mobile-alt', text: '100% Responsive'},
      {icon: 'fas fa-bolt', text: '<3s Load Time'},
      {icon: 'fas fa-search', text: 'SEO Friendly'},
      {icon: 'fas fa-shield-alt', text: 'Secure Hosting'}
    ],
    benefits: [
      {icon: 'fas fa-paint-brush', title: 'Unique Design', desc: 'Custom designs that reflect your brand'},
      {icon: 'fas fa-tachometer-alt', title: 'Fast Performance', desc: 'Optimized for speed and performance'},
      {icon: 'fas fa-search', title: 'SEO Optimized', desc: 'Built with SEO best practices'},
      {icon: 'fas fa-mobile-alt', title: 'Mobile First', desc: 'Perfect on all devices'},
      {icon: 'fas fa-cogs', title: 'Easy Maintenance', desc: 'User-friendly content management'},
      {icon: 'fas fa-chart-line', title: 'Analytics Ready', desc: 'Integrated analytics and tracking'}
    ],
    faq: [
      {q: 'How long does it take to build a custom website?', a: 'Typically 4-8 weeks depending on complexity and features required.'},
      {q: 'Do you provide hosting and maintenance?', a: 'Yes, we offer hosting solutions and maintenance packages to keep your website running smoothly.'},
      {q: 'Can I update the content myself?', a: 'Yes, we provide training and user-friendly CMS for easy content updates.'},
      {q: 'Do you provide SEO services with website development?', a: 'Yes, we implement basic SEO during development and offer ongoing SEO services.'}
    ]
  },

  'wordpress-website': {
    title: 'WordPress Website Development',
    icon: 'fab fa-wordpress',
    description: 'Professional WordPress website development with custom themes, plugins, and comprehensive CMS solutions.',
    features: [
      'Custom WordPress Themes',
      'Plugin Development',
      'CMS Implementation',
      'Performance Optimization'
    ],
    content: `
      <p>We build powerful, scalable WordPress websites that combine the flexibility of WordPress with custom development to meet your specific business needs.</p>
      
      <h3>WordPress Services</h3>
      <ul>
        <li><strong>Custom Theme Development:</strong> Build custom WordPress themes from scratch</li>
        <li><strong>Plugin Development:</strong> Develop custom plugins for specific functionality</li>
        <li><strong>E-commerce Solutions:</strong> WooCommerce setup and customization</li>
        <li><strong>Multisite Networks:</strong> WordPress multisite setup and management</li>
        <li><strong>Migration Services:</strong> Migrate existing websites to WordPress</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>User-friendly content management</li>
        <li>Extensive plugin ecosystem</li>
        <li>SEO-friendly structure</li>
        <li>Scalable and flexible platform</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Requirement Analysis', desc: 'Understand your needs and WordPress requirements'},
      {step: 2, title: 'Theme Development', desc: 'Develop custom WordPress theme'},
      {step: 3, title: 'Functionality Implementation', desc: 'Implement required functionality and plugins'},
      {step: 4, title: 'Content Integration', desc: 'Integrate content and configure CMS'},
      {step: 5, title: 'Testing & Launch', desc: 'Test thoroughly and launch website'}
    ],
    facts: [
      {icon: 'fab fa-wordpress', text: 'WordPress Experts'},
      {icon: 'fas fa-paint-brush', text: 'Custom Themes'},
      {icon: 'fas fa-plug', text: 'Plugin Development'},
      {icon: 'fas fa-cogs', text: 'CMS Solutions'}
    ],
    benefits: [
      {icon: 'fas fa-edit', title: 'Easy Content Management', desc: 'User-friendly admin interface'},
      {icon: 'fas fa-puzzle-piece', title: 'Extensible', desc: 'Thousands of plugins available'},
      {icon: 'fas fa-search', title: 'SEO Friendly', desc: 'Built-in SEO features'},
      {icon: 'fas fa-users', title: 'Large Community', desc: 'Active developer community'},
      {icon: 'fas fa-expand', title: 'Scalable', desc: 'Grow with your business needs'},
      {icon: 'fas fa-shield-alt', title: 'Secure', desc: 'Regular security updates'}
    ],
    faq: [
      {q: 'Do you use page builders or custom code?', a: 'We primarily use custom code for better performance and flexibility, but can work with page builders when appropriate.'},
      {q: 'Can you migrate my existing website to WordPress?', a: 'Yes, we specialize in website migration to WordPress.'},
      {q: 'Do you provide WordPress training?', a: 'Yes, we provide comprehensive WordPress training for your team.'},
      {q: 'How do you ensure WordPress security?', a: 'We implement security best practices including regular updates, security plugins, and secure hosting.'}
    ]
  },

  'shopify-ecommerce': {
    title: 'Shopify E-commerce Development',
    icon: 'fas fa-shopping-cart',
    description: 'Professional Shopify store development with custom themes, app integration, and complete e-commerce solutions.',
    features: [
      'Custom Shopify Themes',
      'App Integration',
      'Payment Gateway Setup',
      'Inventory Management'
    ],
    content: `
      <p>We build high-converting Shopify stores that provide seamless shopping experiences, drive sales, and scale with your business growth.</p>
      
      <h3>Shopify Services</h3>
      <ul>
        <li><strong>Store Setup:</strong> Complete Shopify store setup and configuration</li>
        <li><strong>Custom Theme Development:</strong> Build custom Shopify themes</li>
        <li><strong>App Integration:</strong> Integrate essential Shopify apps</li>
        <li><strong>Payment Gateway Setup:</strong> Configure payment gateways and shipping</li>
        <li><strong>Migration Services:</strong> Migrate from other platforms to Shopify</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Easy-to-use platform</li>
        <li>Scalable infrastructure</li>
        <li>Built-in payment processing</li>
        <li>Mobile-optimized shopping</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Store Planning', desc: 'Plan store structure, products, and features'},
      {step: 2, title: 'Theme Development', desc: 'Develop custom Shopify theme'},
      {step: 3, title: 'Product Setup', desc: 'Set up products, collections, and inventory'},
      {step: 4, title: 'Configuration', desc: 'Configure payments, shipping, and taxes'},
      {step: 5, title: 'Testing & Launch', desc: 'Test store functionality and launch'}
    ],
    facts: [
      {icon: 'fas fa-store', text: 'E-commerce Specialists'},
      {icon: 'fas fa-mobile-alt', text: 'Mobile Optimized'},
      {icon: 'fas fa-credit-card', text: 'Payment Integration'},
      {icon: 'fas fa-truck', text: 'Shipping Setup'}
    ],
    benefits: [
      {icon: 'fas fa-bolt', title: 'Fast Setup', desc: 'Get store up and running quickly'},
      {icon: 'fas fa-shield-alt', title: 'Secure', desc: 'Enterprise-grade security'},
      {icon: 'fas fa-mobile-alt', title: 'Mobile Ready', desc: 'Optimized for mobile shopping'},
      {icon: 'fas fa-chart-line', title: 'Scalable', desc: 'Handle high traffic and sales'},
      {icon: 'fas fa-cogs', title: 'Easy Management', desc: 'User-friendly admin interface'},
      {icon: 'fas fa-globe', title: 'Global Reach', desc: 'Sell to customers worldwide'}
    ],
    faq: [
      {q: 'Can you migrate my existing store to Shopify?', a: 'Yes, we specialize in migrating stores from platforms like WooCommerce, Magento, and others to Shopify.'},
      {q: 'Do you provide Shopify app development?', a: 'Yes, we develop custom Shopify apps for specific business needs.'},
      {q: 'How do you optimize Shopify stores for conversions?', a: 'We implement conversion optimization strategies including UX improvements, trust signals, and checkout optimization.'},
      {q: 'Do you provide ongoing Shopify maintenance?', a: 'Yes, we offer Shopify maintenance and support packages.'}
    ]
  },

  'web-applications': {
    title: 'Web Application Development',
    icon: 'fas fa-window-restore',
    description: 'Custom web application development with modern frameworks, scalable architecture, and robust functionality.',
    features: [
      'Custom Web Apps',
      'Scalable Architecture',
      'API Integration',
      'Real-time Features'
    ],
    content: `
      <p>We develop custom web applications that solve complex business problems, streamline operations, and provide competitive advantages.</p>
      
      <h3>Web Application Services</h3>
      <ul>
        <li><strong>Custom Web Apps:</strong> Build bespoke web applications</li>
        <li><strong>Progressive Web Apps:</strong> Develop PWAs for mobile-like experience</li>
        <li><strong>Single Page Applications:</strong> Create SPAs with modern frameworks</li>
        <li><strong>Real-time Applications:</strong> Build apps with real-time features</li>
        <li><strong>API Development:</strong> Develop RESTful APIs and microservices</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Automate complex business processes</li>
        <li>Improve operational efficiency</li>
        <li>Provide better customer experiences</li>
        <li>Gain competitive advantage</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Discovery & Planning', desc: 'Understand requirements and plan solution'},
      {step: 2, title: 'Architecture Design', desc: 'Design application architecture and tech stack'},
      {step: 3, title: 'Development', desc: 'Develop web application with agile methodology'},
      {step: 4, title: 'Testing', desc: 'Comprehensive testing including unit and integration tests'},
      {step: 5, title: 'Deployment & Maintenance', desc: 'Deploy application and provide maintenance'}
    ],
    facts: [
      {icon: 'fas fa-laptop-code', text: 'Custom Development'},
      {icon: 'fas fa-expand', text: 'Scalable'},
      {icon: 'fas fa-bolt', text: 'High Performance'},
      {icon: 'fas fa-shield-alt', text: 'Secure'}
    ],
    benefits: [
      {icon: 'fas fa-cogs', title: 'Process Automation', desc: 'Automate business processes'},
      {icon: 'fas fa-chart-line', title: 'Business Insights', desc: 'Provide data and analytics'},
      {icon: 'fas fa-users', title: 'User Experience', desc: 'Create intuitive user interfaces'},
      {icon: 'fas fa-expand', title: 'Scalability', desc: 'Scale as your business grows'},
      {icon: 'fas fa-sync', title: 'Real-time Updates', desc: 'Real-time data and updates'},
      {icon: 'fas fa-mobile-alt', title: 'Cross-platform', desc: 'Accessible on all devices'}
    ],
    faq: [
      {q: 'Which technologies do you use for web app development?', a: 'We use modern stacks including React, Angular, Vue.js for frontend, and Node.js, Python, Java for backend.'},
      {q: 'Can you develop progressive web apps (PWAs)?', a: 'Yes, we specialize in developing PWAs that work offline and provide app-like experience.'},
      {q: 'How do you ensure web application security?', a: 'We implement security best practices including encryption, authentication, authorization, and regular security audits.'},
      {q: 'Do you provide ongoing maintenance for web apps?', a: 'Yes, we offer maintenance and support packages for web applications.'}
    ]
  },

  'website-redesign': {
    title: 'Website Redesign',
    icon: 'fas fa-redo',
    description: 'Professional website redesign services that modernize your website, improve user experience, and boost conversions.',
    features: [
      'Modern Design',
      'Improved UX/UI',
      'Performance Optimization',
      'Content Strategy'
    ],
    content: `
      <p>We transform outdated websites into modern, high-performing digital assets that engage visitors, reflect your brand evolution, and drive business growth.</p>
      
      <h3>Redesign Services</h3>
      <ul>
        <li><strong>Design Modernization:</strong> Update visual design to current standards</li>
        <li><strong>UX/UI Improvement:</strong> Enhance user experience and interface</li>
        <li><strong>Mobile Optimization:</strong> Ensure perfect mobile experience</li>
        <li><strong>Content Restructuring:</strong> Improve content organization and presentation</li>
        <li><strong>Technology Upgrade:</strong> Update to modern technologies and frameworks</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Modern, professional appearance</li>
        <li>Improved user engagement</li>
        <li>Higher conversion rates</li>
        <li>Better search engine rankings</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Current Website Audit', desc: 'Analyze current website strengths and weaknesses'},
      {step: 2, title: 'Strategy Development', desc: 'Develop redesign strategy and goals'},
      {step: 3, title: 'Design & Development', desc: 'Create new design and develop website'},
      {step: 4, title: 'Content Migration', desc: 'Migrate and optimize existing content'},
      {step: 5, title: 'Launch & Optimization', desc: 'Launch redesigned website and monitor performance'}
    ],
    facts: [
      {icon: 'fas fa-paint-brush', text: 'Modern Design'},
      {icon: 'fas fa-mobile-alt', text: 'Mobile First'},
      {icon: 'fas fa-tachometer-alt', text: 'Performance Boost'},
      {icon: 'fas fa-chart-line', text: 'Conversion Focus'}
    ],
    benefits: [
      {icon: 'fas fa-paint-brush', title: 'Fresh Look', desc: 'Modern, updated design'},
      {icon: 'fas fa-users', title: 'Better UX', desc: 'Improved user experience'},
      {icon: 'fas fa-bolt', title: 'Faster Performance', desc: 'Optimized for speed'},
      {icon: 'fas fa-search', title: 'SEO Improvement', desc: 'Better search engine visibility'},
      {icon: 'fas fa-chart-line', title: 'Higher Conversions', desc: 'Improved conversion rates'},
      {icon: 'fas fa-shield-alt', title: 'Enhanced Security', desc: 'Updated security measures'}
    ],
    faq: [
      {q: 'How long does a website redesign take?', a: 'Typically 4-12 weeks depending on website size and complexity.'},
      {q: 'Will my SEO rankings be affected?', a: 'We implement SEO best practices during redesign to maintain or improve rankings.'},
      {q: 'Can you redesign only specific parts of my website?', a: 'Yes, we can do partial redesigns focused on specific sections or pages.'},
      {q: 'Do you provide training for the redesigned website?', a: 'Yes, we provide training on using and managing the redesigned website.'}
    ]
  },

  'website-maintenance': {
    title: 'Website Maintenance',
    icon: 'fas fa-tools',
    description: 'Comprehensive website maintenance services to keep your website secure, up-to-date, and performing optimally.',
    features: [
      'Security Updates',
      'Performance Monitoring',
      'Backup Management',
      'Content Updates'
    ],
    content: `
      <p>Our website maintenance services ensure your website remains secure, functional, and up-to-date, providing peace of mind and optimal performance.</p>
      
      <h3>Maintenance Services</h3>
      <ul>
        <li><strong>Security Updates:</strong> Regular security patches and updates</li>
        <li><strong>Performance Monitoring:</strong> 24/7 performance monitoring</li>
        <li><strong>Backup Management:</strong> Regular backups and disaster recovery</li>
        <li><strong>Content Updates:</strong> Content updates and additions</li>
        <li><strong>Technical Support:</strong> Technical support and troubleshooting</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>99.9% uptime guarantee</li>
        <li>Enhanced security and protection</li>
        <li>Improved website performance</li>
        <li>Peace of mind</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Website Assessment', desc: 'Assess current website status and needs'},
      {step: 2, title: 'Maintenance Plan', desc: 'Create customized maintenance plan'},
      {step: 3, title: 'Implementation', desc: 'Implement monitoring and maintenance tools'},
      {step: 4, title: 'Regular Maintenance', desc: 'Perform regular maintenance tasks'},
      {step: 5, title: 'Reporting', desc: 'Provide regular maintenance reports'}
    ],
    facts: [
      {icon: 'fas fa-shield-alt', text: 'Security First'},
      {icon: 'fas fa-heartbeat', text: '24/7 Monitoring'},
      {icon: 'fas fa-history', text: 'Regular Backups'},
      {icon: 'fas fa-sync', text: 'Continuous Updates'}
    ],
    benefits: [
      {icon: 'fas fa-lock', title: 'Enhanced Security', desc: 'Protect against threats and attacks'},
      {icon: 'fas fa-heartbeat', title: 'Proactive Monitoring', desc: 'Detect and fix issues early'},
      {icon: 'fas fa-history', title: 'Reliable Backups', desc: 'Secure data backup and recovery'},
      {icon: 'fas fa-tachometer-alt', title: 'Optimal Performance', desc: 'Ensure fast website performance'},
      {icon: 'fas fa-headset', title: 'Expert Support', desc: 'Access to technical experts'},
      {icon: 'fas fa-chart-line', title: 'Uptime Guarantee', desc: 'Maximum website availability'}
    ],
    faq: [
      {q: 'What\'s included in website maintenance?', a: 'Maintenance includes security updates, performance monitoring, backups, content updates, and technical support.'},
      {q: 'How often do you perform maintenance?', a: 'We perform regular maintenance tasks weekly, monthly, and as needed for urgent issues.'},
      {q: 'Can you maintain websites built by other developers?', a: 'Yes, we maintain websites regardless of who built them.'},
      {q: 'What happens if my website goes down?', a: 'We offer 24/7 monitoring and rapid response to resolve downtime issues quickly.'}
    ]
  },

  'landing-page-development': {
    title: 'Landing Page Development',
    icon: 'fas fa-flag',
    description: 'High-converting landing page development designed to capture leads, promote offers, and drive specific actions.',
    features: [
      'Conversion-focused Design',
      'A/B Testing',
      'Lead Capture Forms',
      'Analytics Integration'
    ],
    content: `
      <p>We create landing pages that are specifically designed to convert visitors into leads or customers, with clear calls-to-action and persuasive design.</p>
      
      <h3>Landing Page Services</h3>
      <ul>
        <li><strong>Conversion-focused Design:</strong> Design for maximum conversions</li>
        <li><strong>Copywriting:</strong> Persuasive, benefit-focused copy</li>
        <li><strong>Form Optimization:</strong> Optimized lead capture forms</li>
        <li><strong>A/B Testing:</strong> Test and optimize page elements</li>
        <li><strong>Integration:</strong> Integration with CRM and marketing tools</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Higher conversion rates</li>
        <li>Better lead quality</li>
        <li>Improved campaign performance</li>
        <li>Measurable ROI</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Goal Definition', desc: 'Define landing page goals and target audience'},
      {step: 2, title: 'Wireframing', desc: 'Create wireframes and layout plans'},
      {step: 3, title: 'Design & Development', desc: 'Design and develop landing page'},
      {step: 4, title: 'Integration', desc: 'Integrate with marketing tools and analytics'},
      {step: 5, title: 'Testing & Optimization', desc: 'Test and optimize for conversions'}
    ],
    facts: [
      {icon: 'fas fa-bullseye', text: 'Conversion Focused'},
      {icon: 'fas fa-chart-line', text: 'A/B Testing'},
      {icon: 'fas fa-users', text: 'Lead Capture'},
      {icon: 'fas fa-rocket', text: 'Fast Loading'}
    ],
    benefits: [
      {icon: 'fas fa-chart-line', title: 'Higher Conversions', desc: 'Designed specifically to convert'},
      {icon: 'fas fa-users', title: 'Lead Generation', desc: 'Effective lead capture'},
      {icon: 'fas fa-bullseye', title: 'Goal Alignment', desc: 'Focused on specific objectives'},
      {icon: 'fas fa-flask', title: 'Testing & Optimization', desc: 'Continuous improvement through testing'},
      {icon: 'fas fa-bolt', title: 'Fast Performance', desc: 'Optimized for speed and performance'},
      {icon: 'fas fa-chart-bar', title: 'Measurable Results', desc: 'Track conversions and ROI'}
    ],
    faq: [
      {q: 'How many landing pages should I have?', a: 'We recommend having multiple landing pages for different offers, campaigns, and audience segments.'},
      {q: 'Can you create landing pages for specific campaigns?', a: 'Yes, we create landing pages tailored to specific marketing campaigns and promotions.'},
      {q: 'Do you provide A/B testing for landing pages?', a: 'Yes, we set up and manage A/B testing to optimize landing page performance.'},
      {q: 'Can landing pages be integrated with my CRM?', a: 'Yes, we integrate landing pages with popular CRMs like Salesforce, HubSpot, and others.'}
    ]
  },

  'backend-management': {
    title: 'Backend Management',
    icon: 'fas fa-server',
    description: 'Professional backend management services including server administration, database management, and API maintenance.',
    features: [
      'Server Administration',
      'Database Management',
      'API Maintenance',
      'Security Monitoring'
    ],
    content: `
      <p>Our backend management services ensure your server infrastructure, databases, and APIs are secure, optimized, and running smoothly.</p>
      
      <h3>Backend Management Services</h3>
      <ul>
        <li><strong>Server Administration:</strong> Server setup, configuration, and maintenance</li>
        <li><strong>Database Management:</strong> Database optimization, backup, and recovery</li>
        <li><strong>API Management:</strong> API development, maintenance, and monitoring</li>
        <li><strong>Security Management:</strong> Security monitoring and threat prevention</li>
        <li><strong>Performance Optimization:</strong> Backend performance tuning</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Improved system reliability</li>
        <li>Enhanced security and compliance</li>
        <li>Better performance and scalability</li>
        <li>Reduced downtime and issues</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Assessment', desc: 'Assess current backend infrastructure and needs'},
      {step: 2, title: 'Planning', desc: 'Plan backend management strategy and tools'},
      {step: 3, title: 'Implementation', desc: 'Implement management and monitoring solutions'},
      {step: 4, title: 'Ongoing Management', desc: 'Provide ongoing backend management'},
      {step: 5, title: 'Reporting', desc: 'Provide regular performance and security reports'}
    ],
    facts: [
      {icon: 'fas fa-server', text: 'Server Management'},
      {icon: 'fas fa-database', text: 'Database Expert'},
      {icon: 'fas fa-shield-alt', text: 'Security Focus'},
      {icon: 'fas fa-tachometer-alt', text: 'Performance'}
    ],
    benefits: [
      {icon: 'fas fa-heartbeat', title: 'Reliability', desc: 'Ensure backend system reliability'},
      {icon: 'fas fa-lock', title: 'Security', desc: 'Protect against security threats'},
      {icon: 'fas fa-tachometer-alt', title: 'Performance', desc: 'Optimize backend performance'},
      {icon: 'fas fa-expand', title: 'Scalability', desc: 'Scale backend as needed'},
      {icon: 'fas fa-history', title: 'Backup & Recovery', desc: 'Reliable data backup and recovery'},
      {icon: 'fas fa-headset', title: 'Expert Support', desc: 'Access to backend experts'}
    ],
    faq: [
      {q: 'Which backend technologies do you manage?', a: 'We manage various technologies including Node.js, Python, Java, PHP, MySQL, MongoDB, AWS, Azure, and more.'},
      {q: 'Do you provide 24/7 backend monitoring?', a: 'Yes, we offer 24/7 monitoring and alerting for backend systems.'},
      {q: 'Can you migrate our backend to cloud services?', a: 'Yes, we specialize in cloud migration and management.'},
      {q: 'How do you ensure backend security?', a: 'We implement security best practices including firewalls, encryption, access controls, and regular security audits.'}
    ]
  },

  'business-analytics': {
    title: 'Business Analytics',
    icon: 'fas fa-chart-line',
    description: 'Comprehensive business analytics services to gain insights from your data, make informed decisions, and drive growth.',
    features: [
      'Data Analysis',
      'Performance Dashboards',
      'Predictive Analytics',
      'Strategic Insights'
    ],
    content: `
      <p>Our business analytics services help you transform data into actionable insights, enabling data-driven decision making and business growth.</p>
      
      <h3>Analytics Services</h3>
      <ul>
        <li><strong>Data Analysis:</strong> Analyze business data for insights</li>
        <li><strong>Dashboard Development:</strong> Create interactive dashboards</li>
        <li><strong>Predictive Analytics:</strong> Forecast trends and outcomes</li>
        <li><strong>KPI Tracking:</strong> Track key performance indicators</li>
        <li><strong>Reporting Automation:</strong> Automate reporting processes</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Data-driven decision making</li>
        <li>Improved business performance</li>
        <li>Better understanding of customers</li>
        <li>Competitive advantage through insights</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Data Assessment', desc: 'Assess data sources and quality'},
      {step: 2, title: 'Analytics Strategy', desc: 'Develop analytics strategy and goals'},
      {step: 3, title: 'Implementation', desc: 'Implement analytics tools and processes'},
      {step: 4, title: 'Analysis & Insights', desc: 'Analyze data and generate insights'},
      {step: 5, title: 'Reporting & Optimization', desc: 'Create reports and optimize based on insights'}
    ],
    facts: [
      {icon: 'fas fa-chart-pie', text: 'Data Insights'},
      {icon: 'fas fa-tachometer-alt', text: 'Performance Dashboards'},
      {icon: 'fas fa-crystal-ball', text: 'Predictive Analytics'},
      {icon: 'fas fa-bullseye', text: 'KPI Tracking'}
    ],
    benefits: [
      {icon: 'fas fa-lightbulb', title: 'Insights', desc: 'Gain valuable business insights'},
      {icon: 'fas fa-chart-line', title: 'Performance Tracking', desc: 'Track business performance'},
      {icon: 'fas fa-users', title: 'Customer Understanding', desc: 'Understand customer behavior'},
      {icon: 'fas fa-bullseye', title: 'Goal Alignment', desc: 'Align activities with business goals'},
      {icon: 'fas fa-clock', title: 'Time Savings', desc: 'Automated reporting saves time'},
      {icon: 'fas fa-dollar-sign', title: 'ROI Focus', desc: 'Focus on high-ROI activities'}
    ],
    faq: [
      {q: 'Which analytics tools do you use?', a: 'We use tools like Tableau, Power BI, Google Analytics, and custom analytics solutions.'},
      {q: 'Can you work with our existing data systems?', a: 'Yes, we can work with your existing data systems and integrate new analytics solutions.'},
      {q: 'How do you ensure data accuracy?', a: 'We implement data validation, cleansing, and quality control processes.'},
      {q: 'Do you provide training on analytics tools?', a: 'Yes, we provide training on using analytics tools and interpreting data.'}
    ]
  },

  'data-visualization': {
    title: 'Data Visualization',
    icon: 'fas fa-database',
    description: 'Professional data visualization services that transform complex data into clear, actionable visual insights.',
    features: [
      'Interactive Dashboards',
      'Custom Charts & Graphs',
      'Real-time Visualizations',
      'Storytelling with Data'
    ],
    content: `
      <p>We create compelling data visualizations that make complex data understandable, engaging, and actionable for decision makers.</p>
      
      <h3>Visualization Services</h3>
      <ul>
        <li><strong>Dashboard Design:</strong> Design interactive data dashboards</li>
        <li><strong>Chart Development:</strong> Create custom charts and graphs</li>
        <li><strong>Infographic Design:</strong> Design data-driven infographics</li>
        <li><strong>Real-time Visualizations:</strong> Create real-time data visualizations</li>
        <li><strong>Data Storytelling:</strong> Tell stories with data through visuals</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Better understanding of complex data</li>
        <li>Faster decision making</li>
        <li>Improved data communication</li>
        <li>Enhanced reporting and presentations</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Data Analysis', desc: 'Analyze data and identify key insights'},
      {step: 2, title: 'Visualization Planning', desc: 'Plan visualization approach and design'},
      {step: 3, title: 'Design & Development', desc: 'Design and develop visualizations'},
      {step: 4, title: 'Integration', desc: 'Integrate visualizations with data sources'},
      {step: 5, title: 'Testing & Refinement', desc: 'Test and refine visualizations'}
    ],
    facts: [
      {icon: 'fas fa-chart-bar', text: 'Visual Insights'},
      {icon: 'fas fa-tachometer-alt', text: 'Interactive Dashboards'},
      {icon: 'fas fa-paint-brush', text: 'Custom Design'},
      {icon: 'fas fa-sync', text: 'Real-time Updates'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Clarity', desc: 'Make complex data understandable'},
      {icon: 'fas fa-bolt', title: 'Quick Insights', desc: 'Gain insights at a glance'},
      {icon: 'fas fa-users', title: 'Better Communication', desc: 'Communicate data effectively'},
      {icon: 'fas fa-chart-line', title: 'Decision Support', desc: 'Support data-driven decisions'},
      {icon: 'fas fa-expand', title: 'Scalable', desc: 'Handle large datasets'},
      {icon: 'fas fa-mobile-alt', title: 'Accessible', desc: 'Accessible on all devices'}
    ],
    faq: [
      {q: 'Which data visualization tools do you use?', a: 'We use tools like D3.js, Chart.js, Tableau, Power BI, and custom visualization libraries.'},
      {q: 'Can you create real-time data visualizations?', a: 'Yes, we specialize in real-time and streaming data visualizations.'},
      {q: 'Do you design for specific industries?', a: 'Yes, we create industry-specific visualizations for finance, healthcare, retail, and more.'},
      {q: 'Can visualizations be embedded in websites or apps?', a: 'Yes, we create embeddable visualizations for websites and applications.'}
    ]
  },

  'performance-analytics': {
    title: 'Performance Analytics',
    icon: 'fas fa-chart-bar',
    description: 'Comprehensive performance analytics to measure, analyze, and optimize business and digital performance.',
    features: [
      'Performance Measurement',
      'Goal Tracking',
      'Optimization Insights',
      'ROI Analysis'
    ],
    content: `
      <p>Our performance analytics services help you measure what matters, understand performance drivers, and optimize for better results.</p>
      
      <h3>Performance Analytics Services</h3>
      <ul>
        <li><strong>KPI Definition:</strong> Define key performance indicators</li>
        <li><strong>Performance Tracking:</strong> Track performance across metrics</li>
        <li><strong>Root Cause Analysis:</strong> Analyze causes of performance issues</li>
        <li><strong>Optimization Recommendations:</strong> Provide optimization recommendations</li>
        <li><strong>ROI Analysis:</strong> Analyze return on investment</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Clear performance measurement</li>
        <li>Data-driven optimization</li>
        <li>Improved ROI</li>
        <li>Better resource allocation</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Goal Setting', desc: 'Define performance goals and metrics'},
      {step: 2, title: 'Measurement Setup', desc: 'Set up performance measurement systems'},
      {step: 3, title: 'Data Collection', desc: 'Collect performance data'},
      {step: 4, title: 'Analysis', desc: 'Analyze performance data'},
      {step: 5, title: 'Optimization', desc: 'Provide optimization recommendations'}
    ],
    facts: [
      {icon: 'fas fa-bullseye', text: 'Goal Focused'},
      {icon: 'fas fa-chart-line', text: 'Performance Tracking'},
      {icon: 'fas fa-search', text: 'Root Cause Analysis'},
      {icon: 'fas fa-dollar-sign', text: 'ROI Focus'}
    ],
    benefits: [
      {icon: 'fas fa-chart-line', title: 'Performance Visibility', desc: 'Clear view of performance'},
      {icon: 'fas fa-lightbulb', title: 'Insights', desc: 'Understand what drives performance'},
      {icon: 'fas fa-cogs', title: 'Optimization', desc: 'Optimize based on data'},
      {icon: 'fas fa-money-bill-wave', title: 'ROI Improvement', desc: 'Improve return on investment'},
      {icon: 'fas fa-clock', title: 'Time Savings', desc: 'Automated tracking saves time'},
      {icon: 'fas fa-shield-alt', title: 'Data Accuracy', desc: 'Accurate performance data'}
    ],
    faq: [
      {q: 'What types of performance do you analyze?', a: 'We analyze website performance, marketing performance, business performance, operational performance, and more.'},
      {q: 'How do you define relevant KPIs?', a: 'We work with you to define KPIs that align with your business goals and objectives.'},
      {q: 'Can you integrate with our existing systems?', a: 'Yes, we integrate with existing systems to collect performance data.'},
      {q: 'How often do you provide performance reports?', a: 'We provide regular performance reports (weekly, monthly, quarterly) and real-time dashboards.'}
    ]
  },

  'product-listing': {
    title: 'Product Listing / Catalogue Setup',
    icon: 'fas fa-list',
    description: 'Professional product listing and catalogue setup services for e-commerce websites and marketplaces.',
    features: [
      'Product Data Entry',
      'Catalogue Organization',
      'Image Optimization',
      'SEO Product Descriptions'
    ],
    content: `
      <p>We create organized, SEO-optimized product listings that showcase your products effectively and drive sales on your e-commerce platform.</p>
      
      <h3>Product Listing Services</h3>
      <ul>
        <li><strong>Product Data Entry:</strong> Enter product information accurately</li>
        <li><strong>Catalogue Structure:</strong> Organize products into logical categories</li>
        <li><strong>Image Processing:</strong> Optimize product images</li>
        <li><strong>SEO Optimization:</strong> Write SEO-friendly product descriptions</li>
        <li><strong>Bulk Upload:</strong> Handle bulk product uploads</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Professional product presentation</li>
        <li>Better search engine visibility</li>
        <li>Improved customer experience</li>
        <li>Higher conversion rates</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Catalogue Planning', desc: 'Plan product catalogue structure'},
      {step: 2, title: 'Data Collection', desc: 'Collect product information and images'},
      {step: 3, title: 'Listing Creation', desc: 'Create product listings with optimized content'},
      {step: 4, title: 'Image Processing', desc: 'Process and optimize product images'},
      {step: 5, title: 'Upload & Testing', desc: 'Upload listings and test functionality'}
    ],
    facts: [
      {icon: 'fas fa-boxes', text: 'Product Catalog'},
      {icon: 'fas fa-images', text: 'Image Optimization'},
      {icon: 'fas fa-search', text: 'SEO Focused'},
      {icon: 'fas fa-tags', text: 'Category Management'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Professional Presentation', desc: 'Showcase products professionally'},
      {icon: 'fas fa-search', title: 'Search Visibility', desc: 'Better search engine rankings'},
      {icon: 'fas fa-users', title: 'Customer Experience', desc: 'Easy product discovery and browsing'},
      {icon: 'fas fa-chart-line', title: 'Higher Conversions', desc: 'More product views and sales'},
      {icon: 'fas fa-cogs', title: 'Time Saving', desc: 'Save time on product setup'},
      {icon: 'fas fa-expand', title: 'Scalable', desc: 'Handle large product catalogues'}
    ],
    faq: [
      {q: 'How many products can you list?', a: 'We can list any number of products, from a few dozen to thousands.'},
      {q: 'Do you write product descriptions?', a: 'Yes, we write compelling, SEO-optimized product descriptions.'},
      {q: 'Can you optimize existing product listings?', a: 'Yes, we can optimize and improve existing product listings.'},
      {q: 'Do you provide product photography?', a: 'We can arrange product photography services if needed.'}
    ]
  },

  'inventory-management': {
    title: 'Inventory Management',
    icon: 'fas fa-boxes',
    description: 'Professional inventory management services including system setup, tracking, optimization, and reporting.',
    features: [
      'Inventory System Setup',
      'Stock Tracking',
      'Reorder Management',
      'Reporting & Analytics'
    ],
    content: `
      <p>We implement inventory management solutions that help you track stock levels, optimize inventory, and prevent stockouts or overstocking.</p>
      
      <h3>Inventory Management Services</h3>
      <ul>
        <li><strong>System Setup:</strong> Set up inventory management system</li>
        <li><strong>Stock Tracking:</strong> Implement stock tracking and monitoring</li>
        <li><strong>Reorder Management:</strong> Set up automatic reorder points</li>
        <li><strong>Inventory Optimization:</strong> Optimize inventory levels</li>
        <li><strong>Reporting:</strong> Create inventory reports and analytics</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Reduced stockouts and overstocking</li>
        <li>Improved cash flow</li>
        <li>Better inventory accuracy</li>
        <li>Time and cost savings</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Assessment', desc: 'Assess current inventory processes and needs'},
      {step: 2, title: 'System Selection', desc: 'Select appropriate inventory management system'},
      {step: 3, title: 'Implementation', desc: 'Implement inventory management system'},
      {step: 4, title: 'Training', desc: 'Train staff on using the system'},
      {step: 5, title: 'Optimization', desc: 'Optimize inventory processes and levels'}
    ],
    facts: [
      {icon: 'fas fa-clipboard-check', text: 'Stock Accuracy'},
      {icon: 'fas fa-chart-line', text: 'Inventory Optimization'},
      {icon: 'fas fa-bell', text: 'Reorder Alerts'},
      {icon: 'fas fa-chart-bar', text: 'Analytics'}
    ],
    benefits: [
      {icon: 'fas fa-boxes', title: 'Stock Control', desc: 'Better control over inventory'},
      {icon: 'fas fa-dollar-sign', title: 'Cost Savings', desc: 'Reduce inventory carrying costs'},
      {icon: 'fas fa-check-circle', title: 'Accuracy', desc: 'Improved inventory accuracy'},
      {icon: 'fas fa-bell', title: 'Proactive Management', desc: 'Automatic alerts for low stock'},
      {icon: 'fas fa-chart-bar', title: 'Insights', desc: 'Inventory analytics and insights'},
      {icon: 'fas fa-cogs', title: 'Efficiency', desc: 'Streamlined inventory processes'}
    ],
    faq: [
      {q: 'Which inventory systems do you work with?', a: 'We work with various systems including custom solutions, Shopify, WooCommerce, and enterprise systems.'},
      {q: 'Can you integrate inventory with our e-commerce platform?', a: 'Yes, we integrate inventory management with e-commerce platforms for real-time stock updates.'},
      {q: 'Do you provide barcode scanning solutions?', a: 'Yes, we can implement barcode scanning for inventory management.'},
      {q: 'Can you help with inventory auditing?', a: 'Yes, we provide inventory auditing and reconciliation services.'}
    ]
  },

  // Creative Design Services
  'digital-ad-creatives': {
    title: 'Digital Ad Creatives',
    icon: 'fas fa-bullhorn',
    description: 'Eye-catching digital ad creatives designed to capture attention, engage audiences, and drive conversions.',
    features: [
      'Social Media Ads',
      'Display Ads',
      'Video Ads',
      'Interactive Ads'
    ],
    content: `
      <p>We create compelling digital ad creatives that stop the scroll, engage your audience, and drive measurable results across all digital platforms.</p>
      
      <h3>Digital Ad Services</h3>
      <ul>
        <li><strong>Social Media Ads:</strong> Facebook, Instagram, LinkedIn, Twitter ads</li>
        <li><strong>Display Ads:</strong> Banner ads for websites and networks</li>
        <li><strong>Video Ads:</strong> Short-form video ads for social media</li>
        <li><strong>Interactive Ads:</strong> Engaging interactive ad experiences</li>
        <li><strong>Retargeting Ads:</strong> Creatives for retargeting campaigns</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Higher click-through rates</li>
        <li>Better ad engagement</li>
        <li>Improved conversion rates</li>
        <li>Brand consistency across platforms</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Strategy & Briefing', desc: 'Understand campaign goals and target audience'},
      {step: 2, title: 'Concept Development', desc: 'Develop creative concepts and approaches'},
      {step: 3, title: 'Design Creation', desc: 'Create ad designs and variations'},
      {step: 4, title: 'Review & Revision', desc: 'Review designs and make revisions'},
      {step: 5, title: 'Delivery & Optimization', desc: 'Deliver final files and provide optimization recommendations'}
    ],
    facts: [
      {icon: 'fas fa-eye', text: 'Attention Grabbing'},
      {icon: 'fas fa-mobile-alt', text: 'Mobile Optimized'},
      {icon: 'fas fa-paint-brush', text: 'Professional Design'},
      {icon: 'fas fa-chart-line', text: 'Performance Focused'}
    ],
    benefits: [
      {icon: 'fas fa-bullseye', title: 'Targeted Design', desc: 'Designed for specific audiences'},
      {icon: 'fas fa-chart-line', title: 'Higher CTR', desc: 'Improve click-through rates'},
      {icon: 'fas fa-users', title: 'Audience Engagement', desc: 'Engage and captivate audience'},
      {icon: 'fas fa-paint-brush', title: 'Brand Consistency', desc: 'Maintain brand identity'},
      {icon: 'fas fa-expand', title: 'Multi-platform', desc: 'Create for all digital platforms'},
      {icon: 'fas fa-bolt', title: 'Quick Turnaround', desc: 'Fast design delivery'}
    ],
    faq: [
      {q: 'What ad sizes and formats do you create?', a: 'We create all standard ad sizes for social media, display networks, and custom formats as needed.'},
      {q: 'Do you provide animated ads?', a: 'Yes, we create both static and animated ad creatives.'},
      {q: 'Can you create ads for A/B testing?', a: 'Yes, we create multiple ad variations for testing and optimization.'},
      {q: 'Do you follow platform-specific guidelines?', a: 'Yes, we adhere to all platform guidelines for ad creatives.'}
    ]
  },

  'print-ad-creatives': {
    title: 'Print Ad Creatives',
    icon: 'fas fa-newspaper',
    description: 'Professional print ad creatives designed for magazines, newspapers, brochures, and other printed materials.',
    features: [
      'Magazine Ads',
      'Newspaper Ads',
      'Brochure Design',
      'Print-ready Files'
    ],
    content: `
      <p>We create compelling print ad creatives that capture attention in physical media, communicate your message effectively, and drive response.</p>
      
      <h3>Print Ad Services</h3>
      <ul>
        <li><strong>Magazine Ads:</strong> Full-page, half-page, and other magazine ads</li>
        <li><strong>Newspaper Ads:</strong> Newspaper advertisements of all sizes</li>
        <li><strong>Brochure Design:</strong> Product and service brochures</li>
        <li><strong>Flyer Design:</strong> Promotional flyers and handouts</li>
        <li><strong>Print Collateral:</strong> Business cards, letterheads, envelopes</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Professional print presence</li>
        <li>Tangible brand representation</li>
        <li>Targeted local reach</li>
        <li>Long-lasting impact</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Print Strategy', desc: 'Define print campaign goals and audience'},
      {step: 2, title: 'Concept Development', desc: 'Develop creative concepts for print'},
      {step: 3, title: 'Design Creation', desc: 'Create print ad designs'},
      {step: 4, title: 'Proofing', desc: 'Create proofs for review and approval'},
      {step: 5, title: 'Print-ready Files', desc: 'Prepare print-ready files with proper specs'}
    ],
    facts: [
      {icon: 'fas fa-print', text: 'Print Expertise'},
      {icon: 'fas fa-ruler-combined', text: 'Precise Specifications'},
      {icon: 'fas fa-paint-brush', text: 'High-quality Design'},
      {icon: 'fas fa-palette', text: 'CMYK Color Management'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Visual Impact', desc: 'Create strong visual impact in print'},
      {icon: 'fas fa-hand-holding', title: 'Tangible', desc: 'Physical presence and credibility'},
      {icon: 'fas fa-map-marker-alt', title: 'Local Reach', desc: 'Reach local audiences effectively'},
      {icon: 'fas fa-paint-brush', title: 'Brand Representation', desc: 'Professional brand representation'},
      {icon: 'fas fa-check-circle', title: 'Print-ready', desc: 'Files prepared for professional printing'},
      {icon: 'fas fa-users', title: 'Targeted', desc: 'Reach specific demographic audiences'}
    ],
    faq: [
      {q: 'What file formats do you provide for print?', a: 'We provide print-ready files in PDF, AI, EPS, and other required formats with proper bleeds and specs.'},
      {q: 'Do you handle color management for print?', a: 'Yes, we manage CMYK color profiles and ensure color accuracy for print.'},
      {q: 'Can you coordinate with printers?', a: 'Yes, we can coordinate with printers and provide technical specifications.'},
      {q: 'Do you design for specific print publications?', a: 'Yes, we design according to publication specifications and requirements.'}
    ]
  },

  'instagram-posts': {
    title: 'Instagram Posts',
    icon: 'fab fa-instagram',
    description: 'Engaging Instagram post designs that capture attention, tell your brand story, and drive engagement.',
    features: [
      'Feed Posts',
      'Carousel Posts',
      'Story Designs',
      'Reels Covers'
    ],
    content: `
      <p>We create visually stunning Instagram posts that align with your brand aesthetic, engage your audience, and grow your Instagram presence.</p>
      
      <h3>Instagram Design Services</h3>
      <ul>
        <li><strong>Feed Posts:</strong> Regular Instagram feed posts</li>
        <li><strong>Carousel Posts:</strong> Multi-image carousel posts</li>
        <li><strong>Story Designs:</strong> Instagram Story templates and designs</li>
        <li><strong>Reels Covers:</strong> Thumbnail designs for Instagram Reels</li>
        <li><strong>Theme Development:</strong> Develop cohesive Instagram theme</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Consistent brand aesthetic</li>
        <li>Higher engagement rates</li>
        <li>Improved follower growth</li>
        <li>Professional Instagram presence</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Brand Analysis', desc: 'Understand brand identity and Instagram goals'},
      {step: 2, title: 'Theme Development', desc: 'Develop Instagram visual theme and style'},
      {step: 3, title: 'Content Planning', desc: 'Plan content types and posting schedule'},
      {step: 4, title: 'Design Creation', desc: 'Create Instagram post designs'},
      {step: 5, title: 'Delivery & Guidelines', desc: 'Deliver files and provide usage guidelines'}
    ],
    facts: [
      {icon: 'fab fa-instagram', text: 'Instagram Specialists'},
      {icon: 'fas fa-palette', text: 'Visual Aesthetic'},
      {icon: 'fas fa-users', text: 'Audience Engagement'},
      {icon: 'fas fa-heart', text: 'Like-worthy Design'}
    ],
    benefits: [
      {icon: 'fas fa-paint-brush', title: 'Visual Consistency', desc: 'Consistent brand aesthetic'},
      {icon: 'fas fa-heart', title: 'Higher Engagement', desc: 'Increase likes, comments, shares'},
      {icon: 'fas fa-user-plus', title: 'Follower Growth', desc: 'Attract and retain followers'},
      {icon: 'fas fa-mobile-alt', title: 'Mobile Optimized', desc: 'Optimized for mobile viewing'},
      {icon: 'fas fa-bolt', title: 'Quick Creation', desc: 'Fast design turnaround'},
      {icon: 'fas fa-expand', title: 'Content Variety', desc: 'Variety of post types and formats'}
    ],
    faq: [
      {q: 'How many Instagram posts do you create?', a: 'We create posts based on your content calendar, typically 8-20 posts per month.'},
      {q: 'Do you create Instagram Stories?', a: 'Yes, we create Instagram Stories including templates, animations, and interactive elements.'},
      {q: 'Can you develop an Instagram content strategy?', a: 'Yes, we provide complete Instagram content strategy along with design.'},
      {q: 'Do you provide copywriting for Instagram posts?', a: 'Yes, we provide copywriting services for Instagram captions and hashtags.'}
    ]
  },

  'facebook-posts': {
    title: 'Facebook Posts',
    icon: 'fab fa-facebook',
    description: 'Engaging Facebook post designs that communicate your message effectively and drive engagement on Facebook.',
    features: [
      'Status Updates',
      'Image Posts',
      'Video Posts',
      'Event Graphics'
    ],
    content: `
      <p>We create compelling Facebook posts that capture attention in the news feed, communicate your message clearly, and drive engagement and shares.</p>
      
      <h3>Facebook Design Services</h3>
      <ul>
        <li><strong>Status Updates:</strong> Text posts with visual elements</li>
        <li><strong>Image Posts:</strong> Single and multi-image posts</li>
        <li><strong>Video Posts:</strong> Video content and thumbnails</li>
        <li><strong>Event Graphics:</strong> Graphics for Facebook events</li>
        <li><strong>Cover Photos:</strong> Facebook page cover photos</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Higher engagement on Facebook</li>
        <li>Improved reach and visibility</li>
        <li>Professional Facebook presence</li>
        <li>Consistent brand messaging</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Content Strategy', desc: 'Develop Facebook content strategy'},
      {step: 2, title: 'Design Planning', desc: 'Plan post types and visual approach'},
      {step: 3, title: 'Design Creation', desc: 'Create Facebook post designs'},
      {step: 4, title: 'Review & Revision', desc: 'Review designs and make revisions'},
      {step: 5, title: 'Delivery & Scheduling', desc: 'Deliver files and provide scheduling recommendations'}
    ],
    facts: [
      {icon: 'fab fa-facebook', text: 'Facebook Experts'},
      {icon: 'fas fa-newspaper', text: 'News Feed Optimized'},
      {icon: 'fas fa-share-alt', text: 'Share-worthy Design'},
      {icon: 'fas fa-comments', text: 'Conversation Starters'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'News Feed Visibility', desc: 'Stand out in Facebook news feed'},
      {icon: 'fas fa-share-alt', title: 'Higher Shares', desc: 'Designs that get shared'},
      {icon: 'fas fa-comments', title: 'More Comments', desc: 'Encourage conversation and comments'},
      {icon: 'fas fa-chart-line', title: 'Better Reach', desc: 'Improve organic reach on Facebook'},
      {icon: 'fas fa-paint-brush', title: 'Brand Consistency', desc: 'Maintain brand identity on Facebook'},
      {icon: 'fas fa-bolt', title: 'Quick Creation', desc: 'Fast design turnaround for timely posts'}
    ],
    faq: [
      {q: 'What Facebook post types do you create?', a: 'We create all types including image posts, video posts, carousel posts, event posts, and cover photos.'},
      {q: 'Do you create Facebook ad creatives?', a: 'Yes, we create Facebook ad creatives as part of our Facebook services.'},
      {q: 'Can you design for Facebook Groups?', a: 'Yes, we create designs for Facebook Group posts and covers.'},
      {q: 'Do you provide copywriting for Facebook posts?', a: 'Yes, we provide copywriting services for Facebook post captions.'}
    ]
  },

  'business-presentations': {
    title: 'Business Presentations',
    icon: 'fas fa-presentation',
    description: 'Professional business presentation design that communicates your message effectively and impresses stakeholders.',
    features: [
      'PowerPoint Design',
      'Keynote Presentations',
      'Pitch Decks',
      'Annual Reports'
    ],
    content: `
      <p>We create professional business presentations that communicate your message clearly, engage your audience, and help you achieve your business objectives.</p>
      
      <h3>Presentation Services</h3>
      <ul>
        <li><strong>PowerPoint Design:</strong> Custom PowerPoint presentations</li>
        <li><strong>Keynote Presentations:</strong> Apple Keynote presentations</li>
        <li><strong>Pitch Decks:</strong> Investor pitch presentations</li>
        <li><strong>Annual Reports:</strong> Annual report design and layout</li>
        <li><strong>Sales Presentations:</strong> Sales and marketing presentations</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Professional presentation of information</li>
        <li>Improved audience engagement</li>
        <li>Better message retention</li>
        <li>Enhanced credibility and professionalism</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Content Review', desc: 'Review presentation content and objectives'},
      {step: 2, title: 'Structure Planning', desc: 'Plan presentation structure and flow'},
      {step: 3, title: 'Design Creation', desc: 'Create presentation design and layout'},
      {step: 4, title: 'Content Integration', desc: 'Integrate content into designed slides'},
      {step: 5, title: 'Review & Delivery', desc: 'Review presentation and deliver final files'}
    ],
    facts: [
      {icon: 'fas fa-chart-line', text: 'Professional Design'},
      {icon: 'fas fa-users', text: 'Audience Focused'},
      {icon: 'fas fa-bullseye', text: 'Objective Driven'},
      {icon: 'fas fa-palette', text: 'Visual Communication'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Visual Appeal', desc: 'Visually appealing presentations'},
      {icon: 'fas fa-bullseye', title: 'Message Clarity', desc: 'Clear communication of message'},
      {icon: 'fas fa-users', title: 'Audience Engagement', desc: 'Engage and retain audience attention'},
      {icon: 'fas fa-chart-line', title: 'Professionalism', desc: 'Enhance professional image'},
      {icon: 'fas fa-cogs', title: 'Easy Updates', desc: 'Easy to update and modify'},
      {icon: 'fas fa-expand', title: 'Multi-format', desc: 'Create for different platforms and uses'}
    ],
    faq: [
      {q: 'Which presentation software do you use?', a: 'We use PowerPoint, Keynote, Google Slides, and can create presentations in any required format.'},
      {q: 'Do you help with presentation content?', a: 'Yes, we can help structure and refine presentation content.'},
      {q: 'Can you create presentation templates?', a: 'Yes, we create custom presentation templates for ongoing use.'},
      {q: 'Do you provide speaker notes and handouts?', a: 'Yes, we create speaker notes and handout materials as needed.'}
    ]
  },

  'investor-decks': {
    title: 'Investor Decks',
    icon: 'fas fa-chart-bar',
    description: 'Professional investor deck design that communicates your business story, traction, and investment opportunity effectively.',
    features: [
      'Startup Pitch Decks',
      'Funding Presentations',
      'Business Plans',
      'Financial Models'
    ],
    content: `
      <p>We create compelling investor decks that tell your business story, showcase your traction, and clearly communicate your investment opportunity to potential investors.</p>
      
      <h3>Investor Deck Services</h3>
      <ul>
        <li><strong>Startup Pitch Decks:</strong> Startup funding presentations</li>
        <li><strong>Series Funding Decks:</strong> Series A, B, C funding presentations</li>
        <li><strong>Business Plan Presentations:</strong> Comprehensive business plans</li>
        <li><strong>Financial Models:</strong> Financial projections and models</li>
        <li><strong>Executive Summaries:</strong> One-page executive summaries</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Professional presentation to investors</li>
        <li>Clear communication of investment opportunity</li>
        <li>Improved investor engagement</li>
        <li>Higher funding success rates</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Business Understanding', desc: 'Understand business model and investment story'},
      {step: 2, title: 'Deck Structure', desc: 'Structure investor deck for maximum impact'},
      {step: 3, title: 'Design Creation', desc: 'Create professional investor deck design'},
      {step: 4, title: 'Content Refinement', desc: 'Refine and optimize deck content'},
      {step: 5, title: 'Presentation Coaching', desc: 'Provide presentation tips and coaching'}
    ],
    facts: [
      {icon: 'fas fa-handshake', text: 'Investor Ready'},
      {icon: 'fas fa-chart-line', text: 'Data Visualization'},
      {icon: 'fas fa-dollar-sign', text: 'Financial Focus'},
      {icon: 'fas fa-bullseye', text: 'Storytelling'}
    ],
    benefits: [
      {icon: 'fas fa-chart-line', title: 'Professional Presentation', desc: 'Professional investor presentation'},
      {icon: 'fas fa-lightbulb', title: 'Clear Story', desc: 'Clear business story and vision'},
      {icon: 'fas fa-chart-bar', title: 'Data Presentation', desc: 'Effective data and metric presentation'},
      {icon: 'fas fa-users', title: 'Investor Engagement', desc: 'Engage and impress investors'},
      {icon: 'fas fa-bullseye', title: 'Focused Message', desc: 'Focused investment proposition'},
      {icon: 'fas fa-shield-alt', title: 'Confidentiality', desc: 'Secure handling of sensitive information'}
    ],
    faq: [
      {q: 'How many slides should an investor deck have?', a: 'Typically 10-15 slides, but we customize based on your specific needs and audience.'},
      {q: 'Do you help with financial modeling?', a: 'Yes, we can help create and visualize financial models and projections.'},
      {q: 'Can you create different versions for different investors?', a: 'Yes, we create customized versions for different investor types and stages.'},
      {q: 'Do you provide printing services for investor decks?', a: 'Yes, we can arrange professional printing and binding of investor decks.'}
    ]
  },

  'brand-identity': {
    title: 'Brand Identity Design',
    icon: 'fas fa-trademark',
    description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines.',
    features: [
      'Logo Design',
      'Color Palette',
      'Typography System',
      'Brand Guidelines'
    ],
    content: `
      <p>We create comprehensive brand identities that define your brand personality, differentiate you from competitors, and create lasting connections with your audience.</p>
      
      <h3>Brand Identity Services</h3>
      <ul>
        <li><strong>Logo Design:</strong> Primary and secondary logos</li>
        <li><strong>Color System:</strong> Primary and secondary color palettes</li>
        <li><strong>Typography:</strong> Font system and hierarchy</li>
        <li><strong>Visual Elements:</strong> Patterns, icons, and graphic elements</li>
        <li><strong>Brand Guidelines:</strong> Comprehensive brand guidelines</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Strong brand recognition</li>
        <li>Consistent brand presentation</li>
        <li>Professional brand image</li>
        <li>Emotional connection with audience</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Brand Discovery', desc: 'Understand brand values, audience, and positioning'},
      {step: 2, title: 'Concept Development', desc: 'Develop brand identity concepts'},
      {step: 3, title: 'Design Creation', desc: 'Create brand identity elements'},
      {step: 4, title: 'Application Design', desc: 'Design brand applications and mockups'},
      {step: 5, title: 'Guidelines Development', desc: 'Create comprehensive brand guidelines'}
    ],
    facts: [
      {icon: 'fas fa-palette', text: 'Complete Identity'},
      {icon: 'fas fa-eye', text: 'Visual Recognition'},
      {icon: 'fas fa-users', text: 'Audience Connection'},
      {icon: 'fas fa-book', text: 'Brand Guidelines'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Brand Recognition', desc: 'Create recognizable brand identity'},
      {icon: 'fas fa-paint-brush', title: 'Visual Consistency', desc: 'Consistent visual presentation'},
      {icon: 'fas fa-users', title: 'Audience Connection', desc: 'Connect emotionally with audience'},
      {icon: 'fas fa-chart-line', title: 'Brand Value', desc: 'Increase brand value and equity'},
      {icon: 'fas fa-expand', title: 'Scalable System', desc: 'System that grows with your business'},
      {icon: 'fas fa-shield-alt', title: 'Brand Protection', desc: 'Protect brand identity and usage'}
    ],
    faq: [
      {q: 'How many logo concepts do you provide?', a: 'We typically provide 3-5 logo concepts for selection and refinement.'},
      {q: 'What\'s included in brand guidelines?', a: 'Brand guidelines include logo usage, color codes, typography, imagery, and application examples.'},
      {q: 'Do you provide brand strategy services?', a: 'Yes, we provide brand strategy along with identity design.'},
      {q: 'Can you update an existing brand identity?', a: 'Yes, we can refresh and update existing brand identities.'}
    ]
  },

  'ui-ux-design': {
    title: 'UI/UX Design',
    icon: 'fas fa-pencil-ruler',
    description: 'Professional UI/UX design services that create intuitive, engaging, and effective user experiences.',
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Usability Testing'
    ],
    content: `
      <p>We create user-centered UI/UX designs that solve user problems, provide delightful experiences, and drive business results through thoughtful design.</p>
      
      <h3>UI/UX Design Services</h3>
      <ul>
        <li><strong>User Research:</strong> Research user needs and behaviors</li>
        <li><strong>Information Architecture:</strong> Structure content and functionality</li>
        <li><strong>Wireframing:</strong> Create wireframes and user flows</li>
        <li><strong>UI Design:</strong> Design user interfaces and visual design</li>
        <li><strong>Prototyping & Testing:</strong> Create prototypes and conduct usability testing</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Improved user satisfaction</li>
        <li>Higher conversion rates</li>
        <li>Reduced development costs</li>
        <li>Competitive advantage through design</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Research & Discovery', desc: 'Research users, business goals, and context'},
      {step: 2, title: 'Strategy & Planning', desc: 'Plan UX strategy and information architecture'},
      {step: 3, title: 'Design & Prototyping', desc: 'Create wireframes, UI design, and prototypes'},
      {step: 4, title: 'Testing & Validation', desc: 'Test designs with users and validate'},
      {step: 5, title: 'Handoff & Implementation', desc: 'Handoff designs to development team'}
    ],
    facts: [
      {icon: 'fas fa-user-check', text: 'User Centered'},
      {icon: 'fas fa-mobile-alt', text: 'Responsive Design'},
      {icon: 'fas fa-bolt', text: 'Fast Prototyping'},
      {icon: 'fas fa-flask', text: 'Usability Testing'}
    ],
    benefits: [
      {icon: 'fas fa-smile', title: 'User Satisfaction', desc: 'Create satisfying user experiences'},
      {icon: 'fas fa-chart-line', title: 'Higher Conversions', desc: 'Improve conversion rates'},
      {icon: 'fas fa-dollar-sign', title: 'Cost Saving', desc: 'Reduce development costs and rework'},
      {icon: 'fas fa-users', title: 'User Retention', desc: 'Increase user retention and loyalty'},
      {icon: 'fas fa-lightbulb', title: 'Innovation', desc: 'Innovate through user-centered design'},
      {icon: 'fas fa-shield-alt', title: 'Accessibility', desc: 'Ensure accessibility for all users'}
    ],
    faq: [
      {q: 'Which design tools do you use?', a: 'We use Figma, Sketch, Adobe XD, and other modern design tools.'},
      {q: 'Do you conduct user testing?', a: 'Yes, we conduct various types of user testing including usability testing and A/B testing.'},
      {q: 'Can you design for specific platforms?', a: 'Yes, we design for web, mobile, tablets, and specific platforms as needed.'},
      {q: 'Do you provide design systems?', a: 'Yes, we create comprehensive design systems for scalability and consistency.'}
    ]
  },

  'illustration-design': {
    title: 'Illustration Design',
    icon: 'fas fa-image',
    description: 'Custom illustration design services that bring your ideas to life and add unique visual personality to your brand.',
    features: [
      'Custom Illustrations',
      'Icon Design',
      'Character Design',
      'Illustration Systems'
    ],
    content: `
      <p>We create custom illustrations that communicate ideas, tell stories, and add unique visual personality to your brand and projects.</p>
      
      <h3>Illustration Services</h3>
      <ul>
        <li><strong>Custom Illustrations:</strong> Bespoke illustrations for specific needs</li>
        <li><strong>Icon Design:</strong> Custom icon sets and systems</li>
        <li><strong>Character Design:</strong> Brand characters and mascots</li>
        <li><strong>Editorial Illustrations:</strong> Illustrations for articles and publications</li>
        <li><strong>Illustration Systems:</strong> Consistent illustration systems</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Unique visual identity</li>
        <li>Emotional connection with audience</li>
        <li>Better communication of complex ideas</li>
        <li>Memorable brand personality</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Concept Development', desc: 'Develop illustration concepts and style'},
      {step: 2, title: 'Sketching', desc: 'Create initial sketches and compositions'},
      {step: 3, title: 'Digital Creation', desc: 'Create digital illustrations'},
      {step: 4, title: 'Refinement', desc: 'Refine illustrations based on feedback'},
      {step: 5, title: 'Delivery', desc: 'Deliver illustrations in required formats'}
    ],
    facts: [
      {icon: 'fas fa-paint-brush', text: 'Handcrafted Art'},
      {icon: 'fas fa-palette', text: 'Custom Style'},
      {icon: 'fas fa-lightbulb', text: 'Creative Concepts'},
      {icon: 'fas fa-expand', text: 'Scalable Systems'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Visual Appeal', desc: 'Add visual appeal and interest'},
      {icon: 'fas fa-comments', title: 'Storytelling', desc: 'Tell stories through illustrations'},
      {icon: 'fas fa-users', title: 'Emotional Connection', desc: 'Create emotional connections'},
      {icon: 'fas fa-paint-brush', title: 'Brand Personality', desc: 'Express brand personality visually'},
      {icon: 'fas fa-lightbulb', title: 'Concept Communication', desc: 'Communicate complex concepts simply'},
      {icon: 'fas fa-expand', title: 'Versatility', desc: 'Use across various media and platforms'}
    ],
    faq: [
      {q: 'What illustration styles do you offer?', a: 'We offer various styles including flat, line, watercolor, 3D, and custom styles to match your brand.'},
      {q: 'Can you match an existing illustration style?', a: 'Yes, we can match existing illustration styles or create new ones.'},
      {q: 'Do you create vector illustrations?', a: 'Yes, we create vector illustrations that scale perfectly for all uses.'},
      {q: 'Can illustrations be animated?', a: 'Yes, we can create illustrations that are ready for animation.'}
    ]
  },

  'animated-graphics': {
    title: 'Animated Graphics',
    icon: 'fas fa-film',
    description: 'Dynamic animated graphics that capture attention, explain concepts, and enhance visual storytelling.',
    features: [
      'Motion Graphics',
      'Animated Logos',
      'Explainer Videos',
      'Social Media Animations'
    ],
    content: `
      <p>We create compelling animated graphics that bring static designs to life, explain complex concepts simply, and capture audience attention through motion.</p>
      
      <h3>Animation Services</h3>
      <ul>
        <li><strong>Motion Graphics:</strong> Animated graphics and text</li>
        <li><strong>Logo Animations:</strong> Animated logo reveals and treatments</li>
        <li><strong>Explainer Videos:</strong> Animated explainer videos</li>
        <li><strong>Social Media Animations:</strong> Animated content for social media</li>
        <li><strong>UI Animations:</strong> Micro-animations for user interfaces</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Increased attention and engagement</li>
        <li>Better explanation of complex concepts</li>
        <li>Enhanced storytelling capabilities</li>
        <li>Professional and modern presentation</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Concept & Script', desc: 'Develop animation concept and script'},
      {step: 2, title: 'Storyboarding', desc: 'Create storyboard and animation plan'},
      {step: 3, title: 'Design & Asset Creation', desc: 'Design animation assets and elements'},
      {step: 4, title: 'Animation', desc: 'Animate graphics and create motion'},
      {step: 5, title: 'Sound & Delivery', desc: 'Add sound and deliver final animation'}
    ],
    facts: [
      {icon: 'fas fa-play-circle', text: 'Motion Design'},
      {icon: 'fas fa-video', text: 'Video Production'},
      {icon: 'fas fa-bolt', text: 'Attention Grabbing'},
      {icon: 'fas fa-users', text: 'Engagement'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Attention Capture', desc: 'Capture and hold attention'},
      {icon: 'fas fa-lightbulb', title: 'Concept Explanation', desc: 'Explain concepts clearly'},
      {icon: 'fas fa-chart-line', title: 'Higher Engagement', desc: 'Increase viewer engagement'},
      {icon: 'fas fa-share-alt', title: 'Shareability', desc: 'Create shareable content'},
      {icon: 'fas fa-expand', title: 'Versatility', desc: 'Use across various platforms'},
      {icon: 'fas fa-bolt', title: 'Modern Presentation', desc: 'Modern, professional presentation'}
    ],
    faq: [
      {q: 'What animation styles do you create?', a: 'We create 2D animation, motion graphics, whiteboard animation, character animation, and more.'},
      {q: 'How long are typical animations?', a: 'Animations typically range from 15 seconds to 3 minutes depending on purpose and content.'},
      {q: 'Do you provide voiceover and sound design?', a: 'Yes, we provide complete animation production including voiceover and sound design.'},
      {q: 'Can you animate existing graphics?', a: 'Yes, we can animate existing graphics and logos.'}
    ]
  },

  'motion-graphics': {
    title: 'Motion Graphics',
    icon: 'fas fa-video',
    description: 'Professional motion graphics that combine animation, text, and sound to create compelling visual stories.',
    features: [
      'Title Sequences',
      'Infographic Animations',
      'Product Demonstrations',
      'Broadcast Graphics'
    ],
    content: `
      <p>We create professional motion graphics that transform static information into dynamic visual stories, engaging viewers and communicating messages effectively.</p>
      
      <h3>Motion Graphics Services</h3>
      <ul>
        <li><strong>Title Sequences:</strong> Opening titles and intros</li>
        <li><strong>Infographic Animations:</strong> Animated data visualizations</li>
        <li><strong>Product Demonstrations:</strong> Animated product showcases</li>
        <li><strong>Broadcast Graphics:</strong> Graphics for TV and broadcast</li>
        <li><strong>Event Graphics:</strong> Motion graphics for events and presentations</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Enhanced visual storytelling</li>
        <li>Improved information retention</li>
        <li>Professional production quality</li>
        <li>Versatile content for multiple uses</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Concept Development', desc: 'Develop motion graphics concept and approach'},
      {step: 2, title: 'Script & Storyboard', desc: 'Create script and detailed storyboard'},
      {step: 3, title: 'Design & Asset Creation', desc: 'Design graphics and create assets'},
      {step: 4, title: 'Animation & Compositing', desc: 'Animate graphics and composite scenes'},
      {step: 5, title: 'Sound Design & Delivery', desc: 'Add sound and deliver final files'}
    ],
    facts: [
      {icon: 'fas fa-film', text: 'Video Production'},
      {icon: 'fas fa-chart-bar', text: 'Data Visualization'},
      {icon: 'fas fa-broadcast-tower', text: 'Broadcast Quality'},
      {icon: 'fas fa-play', text: 'Engaging Content'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Visual Impact', desc: 'Create strong visual impact'},
      {icon: 'fas fa-chart-line', title: 'Information Retention', desc: 'Improve information retention'},
      {icon: 'fas fa-users', title: 'Audience Engagement', desc: 'Engage and captivate audience'},
      {icon: 'fas fa-expand', title: 'Versatility', desc: 'Use across various media and platforms'},
      {icon: 'fas fa-bolt', title: 'Modern Appeal', desc: 'Modern, contemporary appeal'},
      {icon: 'fas fa-share-alt', title: 'Shareability', desc: 'Create highly shareable content'}
    ],
    faq: [
      {q: 'Which software do you use for motion graphics?', a: 'We use Adobe After Effects, Cinema 4D, Blender, and other professional motion graphics tools.'},
      {q: 'Can you create 3D motion graphics?', a: 'Yes, we create both 2D and 3D motion graphics.'},
      {q: 'Do you provide templates for recurring use?', a: 'Yes, we can create motion graphics templates for ongoing use.'},
      {q: 'What video formats do you deliver?', a: 'We deliver in all standard video formats including MP4, MOV, and broadcast formats.'}
    ]
  },

  // Video Editing Services (20+ categories)
  'social-media-videos': {
    title: 'Social Media Videos',
    icon: 'fab fa-facebook',
    description: 'Professional video editing for social media platforms including Facebook, Instagram, Twitter, and LinkedIn.',
    features: [
      'Platform Optimization',
      'Short-form Content',
      'Engagement Focus',
      'Multi-format Delivery'
    ],
    content: `
      <p>We create engaging social media videos optimized for each platform's specifications and audience behavior, designed to capture attention and drive engagement.</p>
      
      <h3>Social Media Video Services</h3>
      <ul>
        <li><strong>Facebook Videos:</strong> News feed optimized videos</li>
        <li><strong>Instagram Reels & Stories:</strong> Vertical format videos</li>
        <li><strong>TikTok Videos:</strong> Short-form trending content</li>
        <li><strong>LinkedIn Videos:</strong> Professional content for business</li>
        <li><strong>Twitter Videos:</strong> Quick, attention-grabbing content</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Increased social media engagement</li>
        <li>Higher reach and visibility</li>
        <li>Better brand awareness</li>
        <li>Improved follower growth</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Platform Analysis', desc: 'Analyze platform requirements and audience'},
      {step: 2, title: 'Content Planning', desc: 'Plan video content and approach'},
      {step: 3, title: 'Editing & Optimization', desc: 'Edit and optimize for each platform'},
      {step: 4, title: 'Formatting', desc: 'Format for different platform specs'},
      {step: 5, title: 'Delivery & Scheduling', desc: 'Deliver files and provide posting schedule'}
    ],
    facts: [
      {icon: 'fas fa-share-alt', text: 'Social Media Experts'},
      {icon: 'fas fa-mobile-alt', text: 'Mobile Optimized'},
      {icon: 'fas fa-clock', text: 'Short Duration'},
      {icon: 'fas fa-heart', text: 'Engagement Focused'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Platform Optimization', desc: 'Optimized for each social platform'},
      {icon: 'fas fa-users', title: 'Audience Engagement', desc: 'Designed to engage social audiences'},
      {icon: 'fas fa-share-alt', title: 'Shareability', desc: 'Create shareable social content'},
      {icon: 'fas fa-mobile-alt', title: 'Mobile First', desc: 'Optimized for mobile viewing'},
      {icon: 'fas fa-bolt', title: 'Quick Turnaround', desc: 'Fast editing for timely content'},
      {icon: 'fas fa-expand', title: 'Multi-platform', desc: 'Create for all social platforms'}
    ],
    faq: [
      {q: 'What video lengths do you recommend for social media?', a: 'Recommendations vary by platform: 15-60 seconds for Instagram, 1-2 minutes for Facebook, 15-30 seconds for Twitter.'},
      {q: 'Do you create videos with captions?', a: 'Yes, we add captions for social media videos since most are watched without sound.'},
      {q: 'Can you edit user-generated content?', a: 'Yes, we can edit and enhance user-generated content for social media.'},
      {q: 'Do you provide social media video strategy?', a: 'Yes, we provide video strategy along with editing services.'}
    ]
  },

  'digital-marketing-videos': {
    title: 'Digital Marketing Videos',
    icon: 'fas fa-bullhorn',
    description: 'Professional video editing for digital marketing campaigns including ads, promotions, and brand storytelling.',
    features: [
      'Marketing Campaign Videos',
      'Product Promotion',
      'Brand Storytelling',
      'Conversion Optimization'
    ],
    content: `
      <p>We create compelling digital marketing videos that drive campaigns, promote products, tell brand stories, and convert viewers into customers.</p>
      
      <h3>Marketing Video Services</h3>
      <ul>
        <li><strong>Marketing Campaign Videos:</strong> Videos for marketing campaigns</li>
        <li><strong>Product Promotion Videos:</strong> Showcase products and features</li>
        <li><strong>Brand Story Videos:</strong> Tell brand stories and values</li>
        <li><strong>Testimonial Videos:</strong> Customer testimonials and case studies</li>
        <li><strong>Promotional Videos:</strong> Special offers and promotions</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Higher conversion rates</li>
        <li>Improved campaign performance</li>
        <li>Better brand recall</li>
        <li>Increased ROI on marketing</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Campaign Understanding', desc: 'Understand marketing goals and target audience'},
      {step: 2, title: 'Content Strategy', desc: 'Plan video content and messaging'},
      {step: 3, title: 'Editing & Enhancement', desc: 'Edit and enhance marketing videos'},
      {step: 4, title: 'Call-to-Action Integration', desc: 'Integrate clear calls-to-action'},
      {step: 5, title: 'Optimization & Testing', desc: 'Optimize for conversions and test performance'}
    ],
    facts: [
      {icon: 'fas fa-ad', text: 'Marketing Focus'},
      {icon: 'fas fa-bullseye', text: 'Conversion Driven'},
      {icon: 'fas fa-chart-line', text: 'ROI Focused'},
      {icon: 'fas fa-users', text: 'Audience Targeted'}
    ],
    benefits: [
      {icon: 'fas fa-chart-line', title: 'Higher Conversions', desc: 'Drive conversions and sales'},
      {icon: 'fas fa-bullseye', title: 'Goal Alignment', desc: 'Align with marketing objectives'},
      {icon: 'fas fa-eye', title: 'Brand Awareness', desc: 'Increase brand awareness'},
      {icon: 'fas fa-dollar-sign', title: 'ROI Improvement', desc: 'Improve marketing ROI'},
      {icon: 'fas fa-users', title: 'Audience Targeting', desc: 'Target specific audience segments'},
      {icon: 'fas fa-expand', title: 'Multi-channel', desc: 'Use across marketing channels'}
    ],
    faq: [
      {q: 'What types of marketing videos are most effective?', a: 'Explainer videos, product demos, testimonials, and how-to videos typically have highest conversion rates.'},
      {q: 'Do you create videos for email marketing?', a: 'Yes, we create videos optimized for email marketing campaigns.'},
      {q: 'Can you edit videos for retargeting campaigns?', a: 'Yes, we create videos specifically for retargeting and remarketing campaigns.'},
      {q: 'Do you provide A/B testing for video variations?', a: 'Yes, we create multiple versions for testing and optimization.'}
    ]
  },

  'business-company-videos': {
    title: 'Business & Company Videos',
    icon: 'fas fa-briefcase',
    description: 'Professional video editing for businesses and companies including corporate communications, training, and internal messaging.',
    features: [
      'Corporate Videos',
      'Training Videos',
      'Internal Communications',
      'Company Culture'
    ],
    content: `
      <p>We create professional business and company videos for corporate communications, employee training, internal messaging, and company culture.</p>
      
      <h3>Business Video Services</h3>
      <ul>
        <li><strong>Corporate Videos:</strong> Company overviews and profiles</li>
        <li><strong>Training Videos:</strong> Employee training and onboarding</li>
        <li><strong>Internal Communications:</strong> Messages from leadership</li>
        <li><strong>Company Culture Videos:</strong> Showcase company culture</li>
        <li><strong>Annual Report Videos:</strong> Video annual reports</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Professional corporate image</li>
        <li>Improved internal communications</li>
        <li>Better employee engagement</li>
        <li>Enhanced company culture</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Business Understanding', desc: 'Understand business objectives and audience'},
      {step: 2, title: 'Message Planning', desc: 'Plan key messages and content'},
      {step: 3, title: 'Professional Editing', desc: 'Edit with professional corporate style'},
      {step: 4, title: 'Brand Integration', desc: 'Integrate brand elements and messaging'},
      {step: 5, title: 'Internal Distribution', desc: 'Prepare for internal distribution'}
    ],
    facts: [
      {icon: 'fas fa-building', text: 'Corporate Focus'},
      {icon: 'fas fa-users', text: 'Internal Audience'},
      {icon: 'fas fa-graduation-cap', text: 'Training'},
      {icon: 'fas fa-handshake', text: 'Professional'}
    ],
    benefits: [
      {icon: 'fas fa-building', title: 'Professional Image', desc: 'Enhance corporate image'},
      {icon: 'fas fa-users', title: 'Employee Engagement', desc: 'Engage employees effectively'},
      {icon: 'fas fa-graduation-cap', title: 'Training Effectiveness', desc: 'Improve training effectiveness'},
      {icon: 'fas fa-comments', title: 'Communication', desc: 'Improve internal communications'},
      {icon: 'fas fa-heart', title: 'Company Culture', desc: 'Strengthen company culture'},
      {icon: 'fas fa-shield-alt', title: 'Confidentiality', desc: 'Handle sensitive information securely'}
    ],
    faq: [
      {q: 'Can you edit videos for internal company use only?', a: 'Yes, we specialize in internal corporate videos with appropriate security measures.'},
      {q: 'Do you create training video series?', a: 'Yes, we create comprehensive training video series with consistent style.'},
      {q: 'Can you add subtitles for training videos?', a: 'Yes, we add accurate subtitles for training and compliance purposes.'},
      {q: 'Do you work with corporate brand guidelines?', a: 'Yes, we strictly follow corporate brand guidelines and standards.'}
    ]
  },

  'educational-videos': {
    title: 'Educational Videos',
    icon: 'fas fa-graduation-cap',
    description: 'Professional video editing for educational content including courses, tutorials, lectures, and learning materials.',
    features: [
      'Course Videos',
      'Tutorial Editing',
      'Lecture Enhancement',
      'Learning Optimization'
    ],
    content: `
      <p>We create engaging educational videos that enhance learning experiences, explain concepts clearly, and keep learners engaged throughout.</p>
      
      <h3>Educational Video Services</h3>
      <ul>
        <li><strong>Course Videos:</strong> Online course and MOOC videos</li>
        <li><strong>Tutorial Videos:</strong> Step-by-step tutorial editing</li>
        <li><strong>Lecture Videos:</strong> Classroom lecture enhancement</li>
        <li><strong>Educational Content:</strong> Learning material videos</li>
        <li><strong>Training Materials:</strong> Professional training videos</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Improved learning outcomes</li>
        <li>Higher student engagement</li>
        <li>Better information retention</li>
        <li>Professional educational content</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Learning Objectives', desc: 'Understand learning objectives and audience'},
      {step: 2, title: 'Content Organization', desc: 'Organize educational content logically'},
      {step: 3, title: 'Visual Enhancement', desc: 'Enhance with visuals and graphics'},
      {step: 4, title: 'Pacing Optimization', desc: 'Optimize pacing for learning'},
      {step: 5, title: 'Assessment Integration', desc: 'Integrate assessment and review elements'}
    ],
    facts: [
      {icon: 'fas fa-book', text: 'Educational Focus'},
      {icon: 'fas fa-lightbulb', text: 'Learning Enhancement'},
      {icon: 'fas fa-users', text: 'Student Engagement'},
      {icon: 'fas fa-chart-line', text: 'Outcome Driven'}
    ],
    benefits: [
      {icon: 'fas fa-graduation-cap', title: 'Learning Effectiveness', desc: 'Improve learning effectiveness'},
      {icon: 'fas fa-users', title: 'Student Engagement', desc: 'Keep students engaged'},
      {icon: 'fas fa-lightbulb', title: 'Concept Clarity', desc: 'Make concepts clear and understandable'},
      {icon: 'fas fa-chart-line', title: 'Retention Improvement', desc: 'Improve information retention'},
      {icon: 'fas fa-expand', title: 'Scalability', desc: 'Scale educational content delivery'},
      {icon: 'fas fa-shield-alt', title: 'Accessibility', desc: 'Ensure accessibility for all learners'}
    ],
    faq: [
      {q: 'Do you edit videos for online courses?', a: 'Yes, we specialize in editing videos for online courses and learning platforms.'},
      {q: 'Can you add interactive elements to educational videos?', a: 'Yes, we can add interactive elements like quizzes and clickable content.'},
      {q: 'Do you work with educational institutions?', a: 'Yes, we work with schools, universities, and educational organizations.'},
      {q: 'Can you create different versions for different learning levels?', a: 'Yes, we create tailored versions for different learning levels and audiences.'}
    ]
  },

  'healthcare-fitness-videos': {
    title: 'Healthcare & Fitness Videos',
    icon: 'fas fa-heartbeat',
    description: 'Professional video editing for healthcare, medical, fitness, and wellness content with appropriate sensitivity and accuracy.',
    features: [
      'Medical Education',
      'Fitness Tutorials',
      'Wellness Content',
      'Patient Education'
    ],
    content: `
      <p>We create professional healthcare and fitness videos that communicate medical information accurately, demonstrate fitness techniques safely, and promote wellness effectively.</p>
      
      <h3>Healthcare Video Services</h3>
      <ul>
        <li><strong>Medical Education:</strong> Medical training and education videos</li>
        <li><strong>Fitness Tutorials:</strong> Exercise and fitness demonstrations</li>
        <li><strong>Wellness Content:</strong> Mental and physical wellness videos</li>
        <li><strong>Patient Education:</strong> Educational videos for patients</li>
        <li><strong>Healthcare Marketing:</strong> Healthcare service promotion</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Accurate medical information</li>
        <li>Safe fitness demonstrations</li>
        <li>Professional healthcare content</li>
        <li>Trustworthy wellness information</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Content Review', desc: 'Review healthcare/fitness content for accuracy'},
      {step: 2, title: 'Sensitivity Consideration', desc: 'Consider sensitivity and appropriateness'},
      {step: 3, title: 'Professional Editing', desc: 'Edit with professional healthcare standards'},
      {step: 4, title: 'Safety Integration', desc: 'Integrate safety warnings and disclaimers'},
      {step: 5, title: 'Compliance Check', desc: 'Ensure compliance with regulations'}
    ],
    facts: [
      {icon: 'fas fa-heartbeat', text: 'Healthcare Focus'},
      {icon: 'fas fa-dumbbell', text: 'Fitness Expertise'},
      {icon: 'fas fa-shield-alt', text: 'Safety First'},
      {icon: 'fas fa-stethoscope', text: 'Medical Accuracy'}
    ],
    benefits: [
      {icon: 'fas fa-shield-alt', title: 'Safety', desc: 'Ensure safety in fitness demonstrations'},
      {icon: 'fas fa-check-circle', title: 'Accuracy', desc: 'Maintain medical accuracy'},
      {icon: 'fas fa-users', title: 'Patient Education', desc: 'Educate patients effectively'},
      {icon: 'fas fa-heart', title: 'Wellness Promotion', desc: 'Promote health and wellness'},
      {icon: 'fas fa-stethoscope', title: 'Professionalism', desc: 'Maintain professional standards'},
      {icon: 'fas fa-lock', title: 'Confidentiality', desc: 'Handle sensitive health information securely'}
    ],
    faq: [
      {q: 'Do you have experience with medical content?', a: 'Yes, we have experience editing medical and healthcare content with appropriate sensitivity.'},
      {q: 'Can you add disclaimers to fitness videos?', a: 'Yes, we add appropriate disclaimers and safety warnings to fitness content.'},
      {q: 'Do you work with healthcare professionals?', a: 'Yes, we work with doctors, trainers, and healthcare organizations.'},
      {q: 'Can you edit videos for medical training?', a: 'Yes, we edit videos for medical education and training purposes.'}
    ]
  },

  'finance-videos': {
    title: 'Finance Videos',
    icon: 'fas fa-chart-bar',
    description: 'Professional video editing for financial content including market analysis, investment education, and financial news.',
    features: [
      'Market Analysis',
      'Investment Education',
      'Financial News',
      'Wealth Management'
    ],
    content: `
      <p>We create professional finance videos that present financial information clearly, explain complex concepts simply, and maintain appropriate seriousness and accuracy.</p>
      
      <h3>Finance Video Services</h3>
      <ul>
        <li><strong>Market Analysis:</strong> Stock market and economic analysis</li>
        <li><strong>Investment Education:</strong> Investment strategy and education</li>
        <li><strong>Financial News:</strong> News and updates editing</li>
        <li><strong>Wealth Management:</strong> Wealth and portfolio management content</li>
        <li><strong>Financial Planning:</strong> Personal finance and planning</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Clear presentation of financial information</li>
        <li>Professional financial content</li>
        <li>Accurate data representation</li>
        <li>Trustworthy financial communication</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Financial Review', desc: 'Review financial content for accuracy'},
      {step: 2, title: 'Data Visualization', desc: 'Plan data visualization and presentation'},
      {step: 3, title: 'Professional Editing', desc: 'Edit with professional financial style'},
      {step: 4, title: 'Regulatory Compliance', desc: 'Ensure regulatory compliance'},
      {step: 5, title: 'Disclosure Integration', desc: 'Integrate required disclosures'}
    ],
    facts: [
      {icon: 'fas fa-chart-line', text: 'Financial Expertise'},
      {icon: 'fas fa-dollar-sign', text: 'Investment Focus'},
      {icon: 'fas fa-balance-scale', text: 'Regulatory Compliance'},
      {icon: 'fas fa-shield-alt', text: 'Accuracy'}
    ],
    benefits: [
      {icon: 'fas fa-chart-line', title: 'Data Presentation', desc: 'Present financial data clearly'},
      {icon: 'fas fa-lightbulb', title: 'Concept Explanation', desc: 'Explain complex financial concepts'},
      {icon: 'fas fa-shield-alt', title: 'Compliance', desc: 'Ensure regulatory compliance'},
      {icon: 'fas fa-users', title: 'Client Communication', desc: 'Communicate effectively with clients'},
      {icon: 'fas fa-lock', title: 'Confidentiality', desc: 'Handle sensitive financial information'},
      {icon: 'fas fa-gavel', title: 'Professional Standards', desc: 'Maintain professional financial standards'}
    ],
    faq: [
      {q: 'Do you have experience with financial content?', a: 'Yes, we have experience editing financial content with appropriate seriousness and accuracy.'},
      {q: 'Can you add financial disclaimers?', a: 'Yes, we add required financial disclaimers and disclosures.'},
      {q: 'Do you work with financial institutions?', a: 'Yes, we work with banks, investment firms, and financial advisors.'},
      {q: 'Can you create data visualizations for financial videos?', a: 'Yes, we create accurate and clear data visualizations for financial content.'}
    ]
  },

  'podcast-videos': {
    title: 'Podcast Videos',
    icon: 'fas fa-podcast',
    description: 'Professional video editing for podcasts including audio enhancement, visual content, and platform optimization.',
    features: [
      'Audio Enhancement',
      'Visual Content Creation',
      'Platform Optimization',
      'Episode Packaging'
    ],
    content: `
      <p>We transform podcast audio into engaging video content that enhances the listening experience, provides visual interest, and expands reach to video platforms.</p>
      
      <h3>Podcast Video Services</h3>
      <ul>
        <li><strong>Audio Enhancement:</strong> Clean and enhance podcast audio</li>
        <li><strong>Visual Content:</strong> Create visual content for audio</li>
        <li><strong>YouTube Optimization:</strong> Optimize for YouTube platform</li>
        <li><strong>Clip Creation:</strong> Create short clips for social media</li>
        <li><strong>Full Episode Videos:</strong> Complete episode video versions</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Expanded audience reach</li>
        <li>Enhanced listener experience</li>
        <li>Improved audio quality</li>
        <li>Increased engagement</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Audio Assessment', desc: 'Assess audio quality and content'},
      {step: 2, title: 'Audio Enhancement', desc: 'Clean and enhance audio quality'},
      {step: 3, title: 'Visual Creation', desc: 'Create visual content for audio'},
      {step: 4, title: 'Video Assembly', desc: 'Assemble audio and visuals'},
      {step: 5, title: 'Platform Optimization', desc: 'Optimize for different platforms'}
    ],
    facts: [
      {icon: 'fas fa-microphone', text: 'Audio Expertise'},
      {icon: 'fas fa-video', text: 'Video Conversion'},
      {icon: 'fab fa-youtube', text: 'Platform Optimization'},
      {icon: 'fas fa-users', text: 'Audience Expansion'}
    ],
    benefits: [
      {icon: 'fas fa-expand', title: 'Audience Reach', desc: 'Reach video platform audiences'},
      {icon: 'fas fa-eye', title: 'Visual Engagement', desc: 'Add visual engagement to audio'},
      {icon: 'fas fa-volume-up', title: 'Audio Quality', desc: 'Improve audio quality significantly'},
      {icon: 'fas fa-share-alt', title: 'Content Repurposing', desc: 'Repurpose audio for video platforms'},
      {icon: 'fas fa-bolt', title: 'Efficiency', desc: 'Efficient podcast video production'},
      {icon: 'fas fa-chart-line', title: 'Growth', desc: 'Support podcast growth and discovery'}
    ],
    faq: [
      {q: 'Do you need video footage for podcast videos?', a: 'We can create videos from audio-only podcasts using visuals, text, and graphics.'},
      {q: 'Can you enhance poor quality audio?', a: 'Yes, we can significantly improve audio quality through professional editing.'},
      {q: 'Do you create YouTube-optimized podcast videos?', a: 'Yes, we specialize in YouTube optimization for podcast videos.'},
      {q: 'Can you create short clips for social media?', a: 'Yes, we create engaging short clips from podcast episodes for social media.'}
    ]
  },

  'beauty-fashion-videos': {
    title: 'Beauty & Fashion Videos',
    icon: 'fas fa-tshirt',
    description: 'Professional video editing for beauty, fashion, makeup, and lifestyle content with aesthetic appeal and trend awareness.',
    features: [
      'Makeup Tutorials',
      'Fashion Shows',
      'Product Reviews',
      'Trend Content'
    ],
    content: `
      <p>We create visually stunning beauty and fashion videos that showcase products beautifully, demonstrate techniques effectively, and capture current trends.</p>
      
      <h3>Beauty & Fashion Services</h3>
      <ul>
        <li><strong>Makeup Tutorials:</strong> Beauty and makeup tutorials</li>
        <li><strong>Fashion Shows:</strong> Runway and fashion event editing</li>
        <li><strong>Product Reviews:</strong> Beauty and fashion product reviews</li>
        <li><strong>Lookbooks:</strong> Fashion lookbook videos</li>
        <li><strong>Behind-the-Scenes:</strong> Beauty/fashion behind-the-scenes</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Visual appeal and aesthetic quality</li>
        <li>Effective product showcasing</li>
        <li>Trend-aware content</li>
        <li>Engaging tutorial content</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Aesthetic Assessment', desc: 'Assess visual style and aesthetic goals'},
      {step: 2, title: 'Color Correction', desc: 'Professional color correction and grading'},
      {step: 3, title: 'Visual Enhancement', desc: 'Enhance visual appeal and quality'},
      {step: 4, title: 'Pacing & Style', desc: 'Edit with appropriate pacing and style'},
      {step: 5, title: 'Trend Integration', desc: 'Integrate current beauty/fashion trends'}
    ],
    facts: [
      {icon: 'fas fa-paint-brush', text: 'Aesthetic Focus'},
      {icon: 'fas fa-palette', text: 'Color Expertise'},
      {icon: 'fas fa-bolt', text: 'Trend Aware'},
      {icon: 'fas fa-eye', text: 'Visual Appeal'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Visual Quality', desc: 'High visual quality and appeal'},
      {icon: 'fas fa-palette', title: 'Color Accuracy', desc: 'Accurate color representation'},
      {icon: 'fas fa-bolt', title: 'Trend Relevance', desc: 'Current and trend-aware content'},
      {icon: 'fas fa-shopping-bag', title: 'Product Showcase', desc: 'Effective product showcasing'},
      {icon: 'fas fa-users', title: 'Audience Engagement', desc: 'Engage beauty/fashion audiences'},
      {icon: 'fas fa-expand', title: 'Platform Optimization', desc: 'Optimized for beauty/fashion platforms'}
    ],
    faq: [
      {q: 'Do you specialize in beauty video editing?', a: 'Yes, we have specialized experience in beauty and fashion video editing.'},
      {q: 'Can you enhance makeup tutorial videos?', a: 'Yes, we enhance makeup tutorials with clear close-ups and color accuracy.'},
      {q: 'Do you work with fashion brands?', a: 'Yes, we work with fashion brands, designers, and beauty companies.'},
      {q: 'Can you create videos for e-commerce fashion?', a: 'Yes, we create product videos for fashion e-commerce.'}
    ]
  },

  'ecommerce-videos': {
    title: 'E-commerce Videos',
    icon: 'fas fa-shopping-bag',
    description: 'Professional video editing for e-commerce including product videos, demonstrations, and shopping experiences.',
    features: [
      'Product Demonstrations',
      'Shopping Experience',
      'Customer Reviews',
      'Conversion Optimization'
    ],
    content: `
      <p>We create effective e-commerce videos that showcase products, demonstrate features, and drive sales through compelling visual shopping experiences.</p>
      
      <h3>E-commerce Video Services</h3>
      <ul>
        <li><strong>Product Videos:</strong> Showcase products from all angles</li>
        <li><strong>Demonstration Videos:</strong> Demonstrate product features and use</li>
        <li><strong>Customer Review Videos:</strong> Video testimonials and reviews</li>
        <li><strong>Shopping Experience:</strong> Create engaging shopping videos</li>
        <li><strong>Unboxing Videos:</strong> Product unboxing experiences</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Higher conversion rates</li>
        <li>Reduced product returns</li>
        <li>Better product understanding</li>
        <li>Increased customer confidence</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Product Understanding', desc: 'Understand product features and benefits'},
      {step: 2, title: 'Conversion Focus', desc: 'Plan for maximum conversion impact'},
      {step: 3, title: 'Professional Editing', desc: 'Edit for e-commerce effectiveness'},
      {step: 4, title: 'Feature Highlighting', desc: 'Highlight key features and benefits'},
      {step: 5, title: 'Platform Optimization', desc: 'Optimize for e-commerce platforms'}
    ],
    facts: [
      {icon: 'fas fa-shopping-cart', text: 'E-commerce Focus'},
      {icon: 'fas fa-chart-line', text: 'Conversion Driven'},
      {icon: 'fas fa-box-open', text: 'Product Showcase'},
      {icon: 'fas fa-users', text: 'Customer Focus'}
    ],
    benefits: [
      {icon: 'fas fa-chart-line', title: 'Higher Sales', desc: 'Increase product sales'},
      {icon: 'fas fa-eye', title: 'Product Understanding', desc: 'Help customers understand products'},
      {icon: 'fas fa-check-circle', title: 'Confidence Building', desc: 'Build customer confidence'},
      {icon: 'fas fa-undo', title: 'Return Reduction', desc: 'Reduce product returns'},
      {icon: 'fas fa-expand', title: 'Platform Integration', desc: 'Integrate with e-commerce platforms'},
      {icon: 'fas fa-bolt', title: 'Quick Production', desc: 'Fast turnaround for product videos'}
    ],
    faq: [
      {q: 'What length are most effective for e-commerce videos?', a: 'Typically 30-90 seconds, showing key features and benefits quickly.'},
      {q: 'Can you create videos for multiple products?', a: 'Yes, we create videos for product catalogs with consistent style.'},
      {q: 'Do you optimize for mobile shopping?', a: 'Yes, we optimize for mobile e-commerce viewing.'},
      {q: 'Can you add buy links to videos?', a: 'Yes, we can add clickable links and calls-to-action.'}
    ]
  },

  'real-estate-videos': {
    title: 'Real Estate Videos',
    icon: 'fas fa-home',
    description: 'Professional video editing for real estate including property tours, virtual walkthroughs, and neighborhood showcases.',
    features: [
      'Property Tours',
      'Virtual Walkthroughs',
      'Neighborhood Showcases',
      'Drone Footage'
    ],
    content: `
      <p>We create compelling real estate videos that showcase properties effectively, provide virtual experiences, and help sell or rent properties faster.</p>
      
      <h3>Real Estate Video Services</h3>
      <ul>
        <li><strong>Property Tours:</strong> Complete property walkthroughs</li>
        <li><strong>Virtual Walkthroughs:</strong> Interactive virtual tours</li>
        <li><strong>Neighborhood Videos:</strong> Showcase neighborhoods and areas</li>
        <li><strong>Drone Footage:</strong> Aerial property views</li>
        <li><strong>Agent Profiles:</strong> Real estate agent profiles</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Faster property sales</li>
        <li>Higher property views</li>
        <li>Better buyer engagement</li>
        <li>Professional property presentation</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Property Understanding', desc: 'Understand property features and selling points'},
      {step: 2, title: 'Footage Organization', desc: 'Organize property footage logically'},
      {step: 3, title: 'Professional Editing', desc: 'Edit for real estate effectiveness'},
      {step: 4, title: 'Feature Highlighting', desc: 'Highlight key property features'},
      {step: 5, title: 'Virtual Experience', desc: 'Create engaging virtual experience'}
    ],
    facts: [
      {icon: 'fas fa-house-user', text: 'Real Estate Focus'},
      {icon: 'fas fa-walking', text: 'Virtual Tours'},
      {icon: 'fas fa-map-marked-alt', text: 'Location Showcase'},
      {icon: 'fas fa-eye', text: 'Property Presentation'}
    ],
    benefits: [
      {icon: 'fas fa-home', title: 'Property Sales', desc: 'Sell properties faster'},
      {icon: 'fas fa-eye', title: 'Property Views', desc: 'Increase property views and interest'},
      {icon: 'fas fa-users', title: 'Buyer Engagement', desc: 'Engage potential buyers effectively'},
      {icon: 'fas fa-expand', title: 'Virtual Access', desc: 'Provide virtual property access'},
      {icon: 'fas fa-chart-line', title: 'Agent Success', desc: 'Support real estate agent success'},
      {icon: 'fas fa-bolt', title: 'Quick Turnaround', desc: 'Fast editing for timely listings'}
    ],
    faq: [
      {q: 'Do you edit drone footage for real estate?', a: 'Yes, we specialize in editing drone footage for property videos.'},
      {q: 'Can you create virtual tours from photos?', a: 'Yes, we can create video tours from photo collections.'},
      {q: 'Do you work with real estate agencies?', a: 'Yes, we work with individual agents and real estate agencies.'},
      {q: 'Can you add property details to videos?', a: 'Yes, we add property details, prices, and contact information.'}
    ]
  },

  'entertainment-videos': {
    title: 'Entertainment Videos',
    icon: 'fas fa-film',
    description: 'Professional video editing for entertainment content including music videos, short films, comedy, and creative content.',
    features: [
      'Music Videos',
      'Short Films',
      'Comedy Sketches',
      'Creative Content'
    ],
    content: `
      <p>We create engaging entertainment videos that tell stories, evoke emotions, and provide enjoyable viewing experiences across various entertainment genres.</p>
      
      <h3>Entertainment Video Services</h3>
      <ul>
        <li><strong>Music Videos:</strong> Professional music video editing</li>
        <li><strong>Short Films:</strong> Narrative short film editing</li>
        <li><strong>Comedy Sketches:</strong> Comedy and sketch editing</li>
        <li><strong>Creative Content:</strong> Artistic and creative videos</li>
        <li><strong>Event Videos:</strong> Entertainment event coverage</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Professional entertainment content</li>
        <li>Engaging storytelling</li>
        <li>Emotional impact</li>
        <li>Creative expression</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Creative Vision', desc: 'Understand creative vision and goals'},
      {step: 2, title: 'Storytelling Approach', desc: 'Plan storytelling and emotional impact'},
      {step: 3, title: 'Creative Editing', desc: 'Edit with creative flair and style'},
      {step: 4, title: 'Pacing & Rhythm', desc: 'Control pacing and rhythm for impact'},
      {step: 5, title: 'Audio Integration', desc: 'Integrate music and sound effectively'}
    ],
    facts: [
      {icon: 'fas fa-music', text: 'Creative Focus'},
      {icon: 'fas fa-theater-masks', text: 'Entertainment'},
      {icon: 'fas fa-heart', text: 'Emotional Impact'},
      {icon: 'fas fa-play-circle', text: 'Storytelling'}
    ],
    benefits: [
      {icon: 'fas fa-film', title: 'Professional Quality', desc: 'Professional entertainment quality'},
      {icon: 'fas fa-heart', title: 'Emotional Connection', desc: 'Create emotional connections'},
      {icon: 'fas fa-play-circle', title: 'Engaging Content', desc: 'Create engaging viewing experiences'},
      {icon: 'fas fa-expand', title: 'Audience Reach', desc: 'Reach entertainment audiences'},
      {icon: 'fas fa-lightbulb', title: 'Creative Expression', desc: 'Support creative expression'},
      {icon: 'fas fa-share-alt', title: 'Shareability', desc: 'Create shareable entertainment content'}
    ],
    faq: [
      {q: 'Do you edit music videos?', a: 'Yes, we specialize in music video editing and synchronization.'},
      {q: 'Can you work with narrative content?', a: 'Yes, we have experience with narrative storytelling and film editing.'},
      {q: 'Do you work with independent artists?', a: 'Yes, we work with independent musicians, filmmakers, and creators.'},
      {q: 'Can you create content for streaming platforms?', a: 'Yes, we create content optimized for streaming platforms.'}
    ]
  },

  'technology-videos': {
    title: 'Technology Videos',
    icon: 'fas fa-laptop',
    description: 'Professional video editing for technology content including software demos, tech reviews, and innovation showcases.',
    features: [
      'Software Demos',
      'Tech Reviews',
      'Innovation Showcases',
      'Technical Explanations'
    ],
    content: `
      <p>We create clear, engaging technology videos that explain complex tech concepts, demonstrate software effectively, and showcase technological innovations.</p>
      
      <h3>Technology Video Services</h3>
      <ul>
        <li><strong>Software Demos:</strong> Software demonstration and tutorial videos</li>
        <li><strong>Tech Reviews:</strong> Technology product reviews</li>
        <li><strong>Innovation Showcases:</strong> Showcase technological innovations</li>
        <li><strong>Technical Explanations:</strong> Explain complex tech concepts</li>
        <li><strong>App Videos:</strong> Mobile and web app demonstrations</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Clear explanation of tech concepts</li>
        <li>Effective software demonstrations</li>
        <li>Professional tech content</li>
        <li>Engaging innovation showcases</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Technical Understanding', desc: 'Understand technical content and concepts'},
      {step: 2, title: 'Clarity Planning', desc: 'Plan for maximum clarity and understanding'},
      {step: 3, title: 'Screen Recording Enhancement', desc: 'Enhance screen recordings and demos'},
      {step: 4, title: 'Technical Accuracy', desc: 'Ensure technical accuracy and correctness'},
      {step: 5, title: 'User Focus', desc: 'Focus on user understanding and experience'}
    ],
    facts: [
      {icon: 'fas fa-code', text: 'Tech Expertise'},
      {icon: 'fas fa-desktop', text: 'Software Focus'},
      {icon: 'fas fa-lightbulb', text: 'Innovation'},
      {icon: 'fas fa-users', text: 'User Understanding'}
    ],
    benefits: [
      {icon: 'fas fa-lightbulb', title: 'Concept Clarity', desc: 'Make tech concepts clear'},
      {icon: 'fas fa-desktop', title: 'Effective Demos', desc: 'Create effective software demonstrations'},
      {icon: 'fas fa-users', title: 'User Understanding', desc: 'Help users understand technology'},
      {icon: 'fas fa-bolt', title: 'Innovation Showcase', desc: 'Showcase innovations effectively'},
      {icon: 'fas fa-expand', title: 'Platform Optimization', desc: 'Optimize for tech platforms and audiences'},
      {icon: 'fas fa-shield-alt', title: 'Accuracy', desc: 'Maintain technical accuracy'}
    ],
    faq: [
      {q: 'Do you edit screen recording videos?', a: 'Yes, we specialize in enhancing screen recordings for software demos.'},
      {q: 'Can you explain complex technical concepts?', a: 'Yes, we create videos that explain complex tech concepts simply.'},
      {q: 'Do you work with tech companies?', a: 'Yes, we work with software companies, tech startups, and IT firms.'},
      {q: 'Can you create videos for technical training?', a: 'Yes, we create technical training and tutorial videos.'}
    ]
  },

  'automobile-videos': {
    title: 'Automobile Videos',
    icon: 'fas fa-car',
    description: 'Professional video editing for automotive content including car reviews, dealership showcases, and automotive events.',
    features: [
      'Car Reviews',
      'Dealership Tours',
      'Automotive Events',
      'Vehicle Features'
    ],
    content: `
      <p>We create compelling automobile videos that showcase vehicles effectively, highlight features beautifully, and engage automotive enthusiasts and buyers.</p>
      
      <h3>Automotive Video Services</h3>
      <ul>
        <li><strong>Car Reviews:</strong> Professional car review editing</li>
        <li><strong>Dealership Tours:</strong> Dealership and showroom videos</li>
        <li><strong>Automotive Events:</strong> Car show and event coverage</li>
        <li><strong>Vehicle Features:</strong> Showcase vehicle features and specs</li>
        <li><strong>Test Drive Videos:</strong> Test drive and driving experience</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Effective vehicle showcasing</li>
        <li>Engaging automotive content</li>
        <li>Professional dealership presentation</li>
        <li>Higher car sales and interest</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Vehicle Understanding', desc: 'Understand vehicle features and selling points'},
      {step: 2, title: 'Visual Enhancement', desc: 'Enhance vehicle visuals and shots'},
      {step: 3, title: 'Feature Highlighting', desc: 'Highlight key vehicle features'},
      {step: 4, title: 'Driving Experience', desc: 'Create engaging driving experience'},
      {step: 5, title: 'Dealership Integration', desc: 'Integrate dealership information'}
    ],
    facts: [
      {icon: 'fas fa-car', text: 'Automotive Focus'},
      {icon: 'fas fa-tachometer-alt', text: 'Performance'},
      {icon: 'fas fa-eye', text: 'Vehicle Showcase'},
      {icon: 'fas fa-users', text: 'Buyer Engagement'}
    ],
    benefits: [
      {icon: 'fas fa-car', title: 'Vehicle Sales', desc: 'Support vehicle sales and interest'},
      {icon: 'fas fa-eye', title: 'Feature Showcase', desc: 'Showcase vehicle features effectively'},
      {icon: 'fas fa-users', title: 'Buyer Engagement', desc: 'Engage potential buyers'},
      {icon: 'fas fa-building', title: 'Dealership Promotion', desc: 'Promote dealerships professionally'},
      {icon: 'fas fa-expand', title: 'Platform Reach', desc: 'Reach automotive audiences'},
      {icon: 'fas fa-bolt', title: 'Quick Production', desc: 'Fast editing for timely vehicle releases'}
    ],
    faq: [
      {q: 'Do you edit car review videos?', a: 'Yes, we specialize in editing professional car review content.'},
      {q: 'Can you work with dealership footage?', a: 'Yes, we edit dealership tours and vehicle showcases.'},
      {q: 'Do you work with automotive brands?', a: 'Yes, we work with car manufacturers and dealerships.'},
      {q: 'Can you add specifications to car videos?', a: 'Yes, we add vehicle specs, features, and pricing information.'}
    ]
  },

  'travel-hospitality-videos': {
    title: 'Travel & Hospitality Videos',
    icon: 'fas fa-plane',
    description: 'Professional video editing for travel, tourism, and hospitality content including destinations, hotels, and experiences.',
    features: [
      'Destination Videos',
      'Hotel Tours',
      'Travel Experiences',
      'Tourism Promotion'
    ],
    content: `
      <p>We create inspiring travel and hospitality videos that showcase destinations beautifully, present hotels attractively, and promote travel experiences effectively.</p>
      
      <h3>Travel Video Services</h3>
      <ul>
        <li><strong>Destination Videos:</strong> Showcase travel destinations</li>
        <li><strong>Hotel Tours:</strong> Hotel and accommodation tours</li>
        <li><strong>Travel Experiences:</strong> Adventure and experience videos</li>
        <li><strong>Tourism Promotion:</strong> Promote tourism destinations</li>
        <li><strong>Culinary Tours:</strong> Food and culinary travel</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Inspiring travel content</li>
        <li>Effective destination promotion</li>
        <li>Professional hospitality presentation</li>
        <li>Increased bookings and tourism</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Destination Understanding', desc: 'Understand destination appeal and features'},
      {step: 2, title: 'Visual Enhancement', desc: 'Enhance travel visuals and scenery'},
      {step: 3, title: 'Experience Creation', desc: 'Create engaging travel experiences'},
      {step: 4, title: 'Hospitality Focus', desc: 'Focus on hospitality and service'},
      {step: 5, title: 'Booking Integration', desc: 'Integrate booking information'}
    ],
    facts: [
      {icon: 'fas fa-umbrella-beach', text: 'Travel Focus'},
      {icon: 'fas fa-hotel', text: 'Hospitality'},
      {icon: 'fas fa-eye', text: 'Destination Showcase'},
      {icon: 'fas fa-users', text: 'Tourist Engagement'}
    ],
    benefits: [
      {icon: 'fas fa-plane', title: 'Travel Inspiration', desc: 'Inspire travel and exploration'},
      {icon: 'fas fa-hotel', title: 'Hotel Promotion', desc: 'Promote hotels and accommodations'},
      {icon: 'fas fa-eye', title: 'Destination Appeal', desc: 'Showcase destination appeal'},
      {icon: 'fas fa-users', title: 'Tourist Attraction', desc: 'Attract tourists and travelers'},
      {icon: 'fas fa-expand', title: 'Platform Reach', desc: 'Reach travel audiences'},
      {icon: 'fas fa-bolt', title: 'Seasonal Relevance', desc: 'Fast editing for seasonal promotions'}
    ],
    faq: [
      {q: 'Do you edit travel vlog content?', a: 'Yes, we edit travel vlogs and personal travel experiences.'},
      {q: 'Can you work with hotel footage?', a: 'Yes, we specialize in hotel and accommodation videos.'},
      {q: 'Do you work with tourism boards?', a: 'Yes, we work with tourism organizations and destination marketers.'},
      {q: 'Can you add travel information to videos?', a: 'Yes, we add destination information, tips, and booking details.'}
    ]
  },

  'food-beverages-videos': {
    title: 'Food & Beverages Videos',
    icon: 'fas fa-utensils',
    description: 'Professional video editing for food, beverage, culinary, and restaurant content with mouth-watering appeal.',
    features: [
      'Cooking Tutorials',
      'Restaurant Tours',
      'Food Reviews',
      'Culinary Experiences'
    ],
    content: `
      <p>We create appetizing food and beverage videos that showcase culinary creations beautifully, demonstrate cooking techniques clearly, and promote restaurants effectively.</p>
      
      <h3>Food Video Services</h3>
      <ul>
        <li><strong>Cooking Tutorials:</strong> Recipe and cooking demonstration videos</li>
        <li><strong>Restaurant Tours:</strong> Restaurant and kitchen tours</li>
        <li><strong>Food Reviews:</strong> Food and restaurant review editing</li>
        <li><strong>Culinary Experiences:</strong> Fine dining and culinary experiences</li>
        <li><strong>Beverage Features:</strong> Drink and beverage showcases</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Mouth-watering food presentation</li>
        <li>Clear cooking demonstrations</li>
        <li>Effective restaurant promotion</li>
        <li>Engaging culinary content</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Culinary Understanding', desc: 'Understand food presentation and appeal'},
      {step: 2, title: 'Visual Enhancement', desc: 'Enhance food visuals and color'},
      {step: 3, title: 'Appetite Appeal', desc: 'Create appetite appeal and desire'},
      {step: 4, title: 'Technique Clarity', desc: 'Ensure cooking technique clarity'},
      {step: 5, title: 'Restaurant Promotion', desc: 'Focus on restaurant promotion'}
    ],
    facts: [
      {icon: 'fas fa-utensils', text: 'Food Focus'},
      {icon: 'fas fa-cheese', text: 'Culinary'},
      {icon: 'fas fa-eye', text: 'Appetite Appeal'},
      {icon: 'fas fa-users', text: 'Foodie Engagement'}
    ],
    benefits: [
      {icon: 'fas fa-utensils', title: 'Food Presentation', desc: 'Beautiful food presentation'},
      {icon: 'fas fa-chef-hat', title: 'Cooking Clarity', desc: 'Clear cooking demonstrations'},
      {icon: 'fas fa-restaurant', title: 'Restaurant Promotion', desc: 'Effective restaurant promotion'},
      {icon: 'fas fa-users', title: 'Foodie Engagement', desc: 'Engage food enthusiasts'},
      {icon: 'fas fa-expand', title: 'Platform Reach', desc: 'Reach food and culinary audiences'},
      {icon: 'fas fa-bolt', title: 'Quick Production', desc: 'Fast editing for timely food content'}
    ],
    faq: [
      {q: 'Do you edit cooking tutorial videos?', a: 'Yes, we specialize in cooking tutorial and recipe video editing.'},
      {q: 'Can you enhance food visuals?', a: 'Yes, we enhance food visuals to make them look appetizing.'},
      {q: 'Do you work with restaurants?', a: 'Yes, we work with restaurants, food brands, and culinary businesses.'},
      {q: 'Can you add recipes to cooking videos?', a: 'Yes, we add recipe details and cooking instructions.'}
    ]
  },

  'music-videos': {
    title: 'Music Videos',
    icon: 'fas fa-music',
    description: 'Professional music video editing that synchronizes visuals with music, tells stories, and creates emotional impact.',
    features: [
      'Song Synchronization',
      'Visual Storytelling',
      'Performance Editing',
      'Creative Concepts'
    ],
    content: `
      <p>We create compelling music videos that synchronize perfectly with music, tell engaging stories, showcase performances beautifully, and create emotional connections with audiences.</p>
      
      <h3>Music Video Services</h3>
      <ul>
        <li><strong>Performance Videos:</strong> Live performance and concert editing</li>
        <li><strong>Narrative Videos:</strong> Story-based music videos</li>
        <li><strong>Lyric Videos:</strong> Animated lyric videos</li>
        <li><strong>Concept Videos:</strong> Creative concept music videos</li>
        <li><strong>Behind-the-Scenes:</strong> Music production behind-the-scenes</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Perfect audio-visual synchronization</li>
        <li>Engaging musical storytelling</li>
        <li>Professional performance presentation</li>
        <li>Increased music engagement and shares</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Musical Understanding', desc: 'Understand music and artistic vision'},
      {step: 2, title: 'Synchronization Planning', desc: 'Plan audio-visual synchronization'},
      {step: 3, title: 'Creative Editing', desc: 'Edit with creative musical approach'},
      {step: 4, title: 'Rhythm and Pace', desc: 'Match editing to musical rhythm and pace'},
      {step: 5, title: 'Emotional Impact', desc: 'Create emotional impact through editing'}
    ],
    facts: [
      {icon: 'fas fa-music', text: 'Musical Focus'},
      {icon: 'fas fa-film', text: 'Visual Storytelling'},
      {icon: 'fas fa-sync', text: 'Perfect Sync'},
      {icon: 'fas fa-heart', text: 'Emotional Impact'}
    ],
    benefits: [
      {icon: 'fas fa-music', title: 'Audio-Visual Sync', desc: 'Perfect synchronization with music'},
      {icon: 'fas fa-film', title: 'Storytelling', desc: 'Tell stories through music video'},
      {icon: 'fas fa-eye', title: 'Performance Showcase', desc: 'Showcase musical performances'},
      {icon: 'fas fa-users', title: 'Fan Engagement', desc: 'Engage music fans effectively'},
      {icon: 'fas fa-expand', title: 'Platform Optimization', desc: 'Optimized for music platforms'},
      {icon: 'fas fa-share-alt', title: 'Shareability', desc: 'Create shareable music content'}
    ],
    faq: [
      {q: 'Do you specialize in music video editing?', a: 'Yes, we have specialized experience in music video editing and synchronization.'},
      {q: 'Can you create lyric videos?', a: 'Yes, we create animated lyric videos with perfect timing.'},
      {q: 'Do you work with independent musicians?', a: 'Yes, we work with independent artists and major labels.'},
      {q: 'Can you edit live performance footage?', a: 'Yes, we edit live concerts and performance footage.'}
    ]
  },

  'spiritual-wellness-videos': {
    title: 'Spiritual & Wellness Videos',
    icon: 'fas fa-spa',
    description: 'Professional video editing for spiritual, meditation, yoga, and wellness content with appropriate tone and atmosphere.',
    features: [
      'Meditation Guides',
      'Yoga Practices',
      'Spiritual Talks',
      'Wellness Content'
    ],
    content: `
      <p>We create calming, inspiring spiritual and wellness videos that support meditation, guide yoga practices, share spiritual teachings, and promote overall wellbeing.</p>
      
      <h3>Wellness Video Services</h3>
      <ul>
        <li><strong>Meditation Guides:</strong> Guided meditation and mindfulness videos</li>
        <li><strong>Yoga Practices:</strong> Yoga class and practice videos</li>
        <li><strong>Spiritual Talks:</strong> Spiritual teaching and discussion videos</li>
        <li><strong>Wellness Education:</strong> Health and wellness education</li>
        <li><strong>Healing Content:</strong> Healing and therapeutic video content</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Calming, peaceful atmosphere</li>
        <li>Clear guidance for practices</li>
        <li>Inspiring spiritual content</li>
        <li>Professional wellness presentation</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Atmosphere Understanding', desc: 'Understand desired atmosphere and tone'},
      {step: 2, title: 'Pace and Rhythm', desc: 'Establish appropriate pace and rhythm'},
      {step: 3, title: 'Calming Editing', desc: 'Edit with calming, peaceful approach'},
      {step: 4, title: 'Guidance Clarity', desc: 'Ensure practice guidance clarity'},
      {step: 5, title: 'Atmosphere Enhancement', desc: 'Enhance spiritual atmosphere'}
    ],
    facts: [
      {icon: 'fas fa-spa', text: 'Wellness Focus'},
      {icon: 'fas fa-peace', text: 'Spiritual'},
      {icon: 'fas fa-heart', text: 'Healing'},
      {icon: 'fas fa-users', text: 'Wellbeing'}
    ],
    benefits: [
      {icon: 'fas fa-peace', title: 'Calming Atmosphere', desc: 'Create peaceful, calming atmosphere'},
      {icon: 'fas fa-user-check', title: 'Practice Support', desc: 'Support meditation and yoga practices'},
      {icon: 'fas fa-heart', title: 'Wellbeing Promotion', desc: 'Promote health and wellbeing'},
      {icon: 'fas fa-users', title: 'Community Building', desc: 'Build spiritual and wellness community'},
      {icon: 'fas fa-expand', title: 'Platform Reach', desc: 'Reach wellness audiences'},
      {icon: 'fas fa-shield-alt', title: 'Sensitivity', desc: 'Handle spiritual content with sensitivity'}
    ],
    faq: [
      {q: 'Do you edit meditation and mindfulness videos?', a: 'Yes, we specialize in creating calming meditation and mindfulness content.'},
      {q: 'Can you work with yoga instruction footage?', a: 'Yes, we edit yoga practice and instruction videos.'},
      {q: 'Do you work with spiritual teachers?', a: 'Yes, we work with spiritual teachers, healers, and wellness practitioners.'},
      {q: 'Can you add soothing music to wellness videos?', a: 'Yes, we add appropriate music and soundscapes.'}
    ]
  },

  'news-media-videos': {
    title: 'News & Media Videos',
    icon: 'fas fa-newspaper',
    description: 'Professional video editing for news, media, journalism, and current affairs content with accuracy and timeliness.',
    features: [
      'News Reports',
      'Current Affairs',
      'Documentary Editing',
      'Media Content'
    ],
    content: `
      <p>We create professional news and media videos that present information accurately, maintain journalistic standards, and deliver timely current affairs content.</p>
      
      <h3>News Video Services</h3>
      <ul>
        <li><strong>News Reports:</strong> News story and report editing</li>
        <li><strong>Current Affairs:</strong> Current events and affairs coverage</li>
        <li><strong>Documentary Editing:</strong> Documentary and investigative content</li>
        <li><strong>Media Packages:</strong> Complete news packages</li>
        <li><strong>Interview Editing:</strong> News interview editing</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Accurate information presentation</li>
        <li>Timely content delivery</li>
        <li>Professional journalistic standards</li>
        <li>Clear current affairs communication</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'News Understanding', desc: 'Understand news content and context'},
      {step: 2, title: 'Accuracy Focus', desc: 'Focus on accuracy and factual presentation'},
      {step: 3, title: 'Timely Editing', desc: 'Edit for timeliness and urgency'},
      {step: 4, title: 'Professional Standards', desc: 'Maintain journalistic standards'},
      {step: 5, title: 'Clarity and Impact', desc: 'Ensure clarity and news impact'}
    ],
    facts: [
      {icon: 'fas fa-newspaper', text: 'News Focus'},
      {icon: 'fas fa-clock', text: 'Timeliness'},
      {icon: 'fas fa-check-circle', text: 'Accuracy'},
      {icon: 'fas fa-users', text: 'Public Information'}
    ],
    benefits: [
      {icon: 'fas fa-newspaper', title: 'News Quality', desc: 'Professional news quality'},
      {icon: 'fas fa-clock', title: 'Timeliness', desc: 'Timely news delivery'},
      {icon: 'fas fa-check-circle', title: 'Accuracy', desc: 'Accurate information presentation'},
      {icon: 'fas fa-users', title: 'Public Service', desc: 'Serve public information needs'},
      {icon: 'fas fa-expand', title: 'Platform Reach', desc: 'Reach news audiences'},
      {icon: 'fas fa-shield-alt', title: 'Standards', desc: 'Maintain journalistic standards'}
    ],
    faq: [
      {q: 'Do you edit breaking news content?', a: 'Yes, we provide fast turnaround for breaking news and urgent content.'},
      {q: 'Can you work with news organizations?', a: 'Yes, we work with news agencies, media outlets, and journalists.'},
      {q: 'Do you maintain journalistic standards?', a: 'Yes, we adhere to journalistic standards and ethics.'},
      {q: 'Can you add graphics to news videos?', a: 'Yes, we add news graphics, lower thirds, and information displays.'}
    ]
  },

  'wedding-events-videos': {
    title: 'Wedding & Events Videos',
    icon: 'fas fa-ring',
    description: 'Professional video editing for weddings, events, celebrations, and special occasions with emotional storytelling.',
    features: [
      'Wedding Highlights',
      'Event Coverage',
      'Celebration Videos',
      'Emotional Storytelling'
    ],
    content: `
      <p>We create beautiful wedding and event videos that capture special moments, tell emotional stories, and preserve memories of celebrations and important occasions.</p>
      
      <h3>Event Video Services</h3>
      <ul>
        <li><strong>Wedding Highlights:</strong> Wedding ceremony and reception highlights</li>
        <li><strong>Event Coverage:</strong> Complete event coverage editing</li>
        <li><strong>Celebration Videos:</strong> Birthday, anniversary, and celebration videos</li>
        <li><strong>Corporate Events:</strong> Business and corporate event editing</li>
        <li><strong>Special Occasions:</strong> Various special occasion videos</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Beautiful memory preservation</li>
        <li>Emotional storytelling</li>
        <li>Professional event presentation</li>
        <li>Cherished keepsake videos</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Event Understanding', desc: 'Understand event significance and moments'},
      {step: 2, title: 'Storytelling Approach', desc: 'Plan emotional storytelling approach'},
      {step: 3, title: 'Memory Preservation', desc: 'Edit to preserve important memories'},
      {step: 4, title: 'Emotional Impact', desc: 'Create emotional impact and connection'},
      {step: 5, title: 'Keepsake Creation', desc: 'Create cherished keepsake videos'}
    ],
    facts: [
      {icon: 'fas fa-heart', text: 'Emotional Focus'},
      {icon: 'fas fa-calendar-alt', text: 'Events'},
      {icon: 'fas fa-users', text: 'Celebrations'},
      {icon: 'fas fa-film', text: 'Memory Preservation'}
    ],
    benefits: [
      {icon: 'fas fa-heart', title: 'Memory Preservation', desc: 'Preserve special memories'},
      {icon: 'fas fa-film', title: 'Storytelling', desc: 'Tell emotional event stories'},
      {icon: 'fas fa-users', title: 'Celebration Capture', desc: 'Capture celebrations beautifully'},
      {icon: 'fas fa-expand', title: 'Video Types', desc: 'Create various event video types'},
      {icon: 'fas fa-bolt', title: 'Timely Delivery', desc: 'Timely delivery for events'},
      {icon: 'fas fa-shield-alt', title: 'Privacy', desc: 'Handle personal event footage privately'}
    ],
    faq: [
      {q: 'Do you edit wedding videos?', a: 'Yes, we specialize in wedding video editing and highlight reels.'},
      {q: 'Can you work with event footage?', a: 'Yes, we edit various event and celebration footage.'},
      {q: 'Do you work with event videographers?', a: 'Yes, we work with professional event videographers.'},
      {q: 'Can you add music to event videos?', a: 'Yes, we add appropriate music to enhance emotional impact.'}
    ]
  },

  'lifestyle-videos': {
    title: 'Lifestyle Videos',
    icon: 'fas fa-leaf',
    description: 'Professional video editing for lifestyle content including daily life, hobbies, interests, and personal stories.',
    features: [
      'Daily Life Content',
      'Hobby Features',
      'Personal Stories',
      'Lifestyle Branding'
    ],
    content: `
      <p>We create engaging lifestyle videos that share daily experiences, showcase hobbies and interests, tell personal stories, and build lifestyle brand content.</p>
      
      <h3>Lifestyle Video Services</h3>
      <ul>
        <li><strong>Daily Vlogs:</strong> Daily life and routine videos</li>
        <li><strong>Hobby Features:</strong> Hobby and interest showcases</li>
        <li><strong>Personal Stories:</strong> Personal experience and story videos</li>
        <li><strong>Lifestyle Branding:</strong> Lifestyle brand content creation</li>
        <li><strong>Interest-based Content:</strong> Various interest-based videos</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Authentic lifestyle content</li>
        <li>Personal connection with audience</li>
        <li>Hobby and interest promotion</li>
        <li>Lifestyle brand building</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Lifestyle Understanding', desc: 'Understand lifestyle content and audience'},
      {step: 2, title: 'Authenticity Focus', desc: 'Focus on authenticity and realness'},
      {step: 3, title: 'Personal Connection', desc: 'Edit for personal connection'},
      {step: 4, title: 'Interest Showcase', desc: 'Showcase hobbies and interests'},
      {step: 5, title: 'Brand Integration', desc: 'Integrate lifestyle branding'}
    ],
    facts: [
      {icon: 'fas fa-user', text: 'Personal Focus'},
      {icon: 'fas fa-heart', text: 'Hobbies & Interests'},
      {icon: 'fas fa-home', text: 'Daily Life'},
      {icon: 'fas fa-users', text: 'Community Building'}
    ],
    benefits: [
      {icon: 'fas fa-user', title: 'Authenticity', desc: 'Create authentic lifestyle content'},
      {icon: 'fas fa-heart', title: 'Personal Connection', desc: 'Build personal connections'},
      {icon: 'fas fa-users', title: 'Community', desc: 'Build lifestyle communities'},
      {icon: 'fas fa-expand', title: 'Content Variety', desc: 'Variety of lifestyle content types'},
      {icon: 'fas fa-bolt', title: 'Regular Content', desc: 'Support regular content creation'},
      {icon: 'fas fa-shield-alt', title: 'Privacy', desc: 'Handle personal content appropriately'}
    ],
    faq: [
      {q: 'Do you edit daily vlog content?', a: 'Yes, we specialize in editing daily vlogs and lifestyle content.'},
      {q: 'Can you work with hobby-focused content?', a: 'Yes, we edit videos about various hobbies and interests.'},
      {q: 'Do you work with lifestyle influencers?', a: 'Yes, we work with lifestyle influencers and content creators.'},
      {q: 'Can you create consistent style for lifestyle content?', a: 'Yes, we create consistent style for ongoing lifestyle content.'}
    ]
  },

  // Marketplace Services
  'meesho-account-creation': {
    title: 'Meesho Account Creation',
    icon: 'fas fa-user-plus',
    description: 'Professional Meesho seller account creation and setup services for individuals and businesses.',
    features: [
      'Account Registration',
      'Documentation Assistance',
      'Profile Optimization',
      'Verification Support'
    ],
    content: `
      <p>We provide complete Meesho seller account creation services, handling the entire registration process, documentation, and optimization for successful selling.</p>
      
      <h3>Meesho Account Services</h3>
      <ul>
        <li><strong>Account Registration:</strong> Complete seller account registration</li>
        <li><strong>Documentation Assistance:</strong> Help with required documents</li>
        <li><strong>Profile Optimization:</strong> Optimize seller profile for visibility</li>
        <li><strong>Verification Support:</strong> Support through verification process</li>
        <li><strong>Bank Account Setup:</strong> Set up payment and bank details</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Quick account approval</li>
        <li>Professional seller profile</li>
        <li>Compliance with Meesho requirements</li>
        <li>Ready-to-start selling</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Document Collection', desc: 'Collect required documents and information'},
      {step: 2, title: 'Account Registration', desc: 'Complete Meesho seller registration'},
      {step: 3, title: 'Profile Setup', desc: 'Set up complete seller profile'},
      {step: 4, title: 'Verification Assistance', desc: 'Assist with verification process'},
      {step: 5, title: 'Training & Handover', desc: 'Provide training and account handover'}
    ],
    facts: [
      {icon: 'fas fa-store', text: 'Meesho Experts'},
      {icon: 'fas fa-check-circle', text: 'Verified Accounts'},
      {icon: 'fas fa-user-tie', text: 'Professional Setup'},
      {icon: 'fas fa-bolt', text: 'Quick Process'}
    ],
    benefits: [
      {icon: 'fas fa-store', title: 'Seller Account', desc: 'Professional seller account setup'},
      {icon: 'fas fa-check-circle', title: 'Verification', desc: 'Higher verification success rate'},
      {icon: 'fas fa-user-tie', title: 'Professional Profile', desc: 'Professional seller profile'},
      {icon: 'fas fa-bolt', title: 'Quick Start', desc: 'Start selling quickly'},
      {icon: 'fas fa-shield-alt', title: 'Compliance', desc: 'Compliance with platform requirements'},
      {icon: 'fas fa-headset', title: 'Support', desc: 'Ongoing support and assistance'}
    ],
    faq: [
      {q: 'What documents are needed for Meesho account?', a: 'Typically PAN card, Aadhaar card, bank account details, and business registration if applicable.'},
      {q: 'How long does account approval take?', a: 'Usually 2-7 business days after submission of complete documents.'},
      {q: 'Can you help with business registration?', a: 'Yes, we can assist with business registration if needed for Meesho.'},
      {q: 'Do you provide training for using Meesho?', a: 'Yes, we provide training on using Meesho seller panel and features.'}
    ]
  },

  'product-listing-meesho': {
    title: 'Product Listing on Meesho',
    icon: 'fas fa-list',
    description: 'Professional product listing services for Meesho including photography, descriptions, and optimization.',
    features: [
      'Product Photography',
      'Description Writing',
      'Category Selection',
      'SEO Optimization'
    ],
    content: `
      <p>We create professional product listings for Meesho that attract buyers, provide clear information, and optimize for search visibility within the platform.</p>
      
      <h3>Meesho Listing Services</h3>
      <ul>
        <li><strong>Product Photography:</strong> Professional product photos</li>
        <li><strong>Description Writing:</strong> Compelling product descriptions</li>
        <li><strong>Category Selection:</strong> Optimal category placement</li>
        <li><strong>Pricing Strategy:</strong> Competitive pricing setup</li>
        <li><strong>SEO Optimization:</strong> Optimize for Meesho search</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Higher product visibility</li>
        <li>Better conversion rates</li>
        <li>Professional product presentation</li>
        <li>Increased sales on Meesho</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Product Analysis', desc: 'Analyze products and target audience'},
      {step: 2, title: 'Photography/Image Enhancement', desc: 'Create or enhance product images'},
      {step: 3, title: 'Content Creation', desc: 'Create compelling product content'},
      {step: 4, title: 'Listing Creation', desc: 'Create complete product listings'},
      {step: 5, title: 'Optimization & Testing', desc: 'Optimize listings and test performance'}
    ],
    facts: [
      {icon: 'fas fa-box', text: 'Product Listings'},
      {icon: 'fas fa-camera', text: 'Professional Photos'},
      {icon: 'fas fa-search', text: 'SEO Optimized'},
      {icon: 'fas fa-chart-line', text: 'Sales Focused'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Visibility', desc: 'Higher product visibility on Meesho'},
      {icon: 'fas fa-chart-line', title: 'Sales', desc: 'Increased product sales'},
      {icon: 'fas fa-users', title: 'Buyer Attraction', desc: 'Attract more buyers'},
      {icon: 'fas fa-check-circle', title: 'Professional Presentation', desc: 'Professional product presentation'},
      {icon: 'fas fa-expand', title: 'Bulk Listing', desc: 'Handle bulk product listing'},
      {icon: 'fas fa-bolt', title: 'Quick Listing', desc: 'Quick product listing process'}
    ],
    faq: [
      {q: 'How many products can you list?', a: 'We can list any number of products, from a few to thousands.'},
      {q: 'Do you provide product photography?', a: 'We can arrange product photography or enhance existing images.'},
      {q: 'Can you optimize existing listings?', a: 'Yes, we can optimize and improve existing product listings.'},
      {q: 'Do you handle inventory management?', a: 'Yes, we can set up inventory management along with listings.'}
    ]
  },

  'meesho-store-management': {
    title: 'Meesho Store Management',
    icon: 'fas fa-chart-line',
    description: 'Complete Meesho store management services including inventory, orders, customer service, and performance optimization.',
    features: [
      'Inventory Management',
      'Order Processing',
      'Customer Service',
      'Performance Analytics'
    ],
    content: `
      <p>We provide comprehensive Meesho store management services that handle day-to-day operations, optimize performance, and grow your Meesho business.</p>
      
      <h3>Store Management Services</h3>
      <ul>
        <li><strong>Inventory Management:</strong> Track and manage inventory</li>
        <li><strong>Order Processing:</strong> Process and fulfill orders</li>
        <li><strong>Customer Service:</strong> Handle customer inquiries and issues</li>
        <li><strong>Performance Monitoring:</strong> Monitor store performance metrics</li>
        <li><strong>Growth Strategy:</strong> Implement growth strategies</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Time-saving store management</li>
        <li>Improved customer satisfaction</li>
        <li>Better store performance</li>
        <li>Business growth on Meesho</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Store Assessment', desc: 'Assess current store and operations'},
      {step: 2, title: 'Management Setup', desc: 'Set up management systems and processes'},
      {step: 3, title: 'Daily Operations', desc: 'Handle daily store operations'},
      {step: 4, title: 'Performance Monitoring', desc: 'Monitor and analyze performance'},
      {step: 5, title: 'Optimization', desc: 'Continuously optimize store performance'}
    ],
    facts: [
      {icon: 'fas fa-store-alt', text: 'Store Management'},
      {icon: 'fas fa-boxes', text: 'Inventory Control'},
      {icon: 'fas fa-headset', text: 'Customer Service'},
      {icon: 'fas fa-chart-line', text: 'Performance Growth'}
    ],
    benefits: [
      {icon: 'fas fa-clock', title: 'Time Saving', desc: 'Save time on store management'},
      {icon: 'fas fa-users', title: 'Customer Satisfaction', desc: 'Improve customer satisfaction'},
      {icon: 'fas fa-chart-line', title: 'Sales Growth', desc: 'Increase store sales and growth'},
      {icon: 'fas fa-expand', title: 'Business Scaling', desc: 'Scale Meesho business efficiently'},
      {icon: 'fas fa-shield-alt', title: 'Compliance', desc: 'Ensure compliance with Meesho policies'},
      {icon: 'fas fa-headset', title: 'Professional Management', desc: 'Professional store management'}
    ],
    faq: [
      {q: 'What does store management include?', a: 'Includes inventory management, order processing, customer service, performance monitoring, and optimization.'},
      {q: 'How do you handle customer service?', a: 'We handle customer inquiries, issues, and returns according to Meesho policies.'},
      {q: 'Can you manage multiple Meesho stores?', a: 'Yes, we can manage multiple stores for the same business.'},
      {q: 'Do you provide performance reports?', a: 'Yes, we provide regular performance reports and insights.'}
    ]
  },

  'amazon-account-creation': {
    title: 'Amazon Account Creation',
    icon: 'fas fa-user-plus',
    description: 'Professional Amazon seller account creation and setup services for individuals and businesses.',
    features: [
      'Account Registration',
      'Documentation Assistance',
      'Tax Information Setup',
      'Verification Support'
    ],
    content: `
      <p>We provide complete Amazon seller account creation services, handling the complex registration process, documentation, and setup for successful Amazon selling.</p>
      
      <h3>Amazon Account Services</h3>
      <ul>
        <li><strong>Account Registration:</strong> Complete seller account registration</li>
        <li><strong>Documentation Assistance:</strong> Help with required documents</li>
        <li><strong>Tax Information Setup:</strong> Set up tax information and compliance</li>
        <li><strong>Verification Support:</strong> Support through verification process</li>
        <li><strong>Professional Plan Selection:</strong> Choose optimal selling plan</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Professional Amazon presence</li>
        <li>Compliance with Amazon requirements</li>
        <li>Optimal account setup</li>
        <li>Ready for product listing</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Document Collection', desc: 'Collect required documents and information'},
      {step: 2, title: 'Account Registration', desc: 'Complete Amazon seller registration'},
      {step: 3, title: 'Tax Setup', desc: 'Set up tax information and compliance'},
      {step: 4, title: 'Verification Assistance', desc: 'Assist with verification process'},
      {step: 5, title: 'Training & Handover', desc: 'Provide training and account handover'}
    ],
    facts: [
      {icon: 'fab fa-amazon', text: 'Amazon Experts'},
      {icon: 'fas fa-check-circle', text: 'Verified Accounts'},
      {icon: 'fas fa-file-invoice-dollar', text: 'Tax Compliance'},
      {icon: 'fas fa-user-tie', text: 'Professional Setup'}
    ],
    benefits: [
      {icon: 'fab fa-amazon', title: 'Amazon Account', desc: 'Professional Amazon seller account'},
      {icon: 'fas fa-check-circle', title: 'Verification', desc: 'Higher verification success rate'},
      {icon: 'fas fa-file-invoice-dollar', title: 'Tax Compliance', desc: 'Proper tax setup and compliance'},
      {icon: 'fas fa-bolt', title: 'Quick Start', desc: 'Start selling on Amazon quickly'},
      {icon: 'fas fa-shield-alt', title: 'Compliance', desc: 'Compliance with Amazon requirements'},
      {icon: 'fas fa-headset', title: 'Support', desc: 'Ongoing support and assistance'}
    ],
    faq: [
      {q: 'What documents are needed for Amazon account?', a: 'Typically business registration, tax documents, bank statements, and identity verification.'},
      {q: 'How long does Amazon account approval take?', a: 'Usually 1-3 weeks depending on document verification and business type.'},
      {q: 'Can you help with Amazon brand registry?', a: 'Yes, we can assist with Amazon brand registry after account setup.'},
      {q: 'Do you provide training for Amazon seller central?', a: 'Yes, we provide comprehensive training on Amazon seller central.'}
    ]
  },

  'amazon-product-listing': {
    title: 'Amazon Product Listing',
    icon: 'fas fa-list',
    description: 'Professional product listing services for Amazon including optimization, images, and content creation.',
    features: [
      'Product Optimization',
      'Image Enhancement',
      'Content Creation',
      'SEO Optimization'
    ],
    content: `
      <p>We create professional Amazon product listings that rank well in search, convert visitors into buyers, and comply with Amazon\'s strict requirements.</p>
      
      <h3>Amazon Listing Services</h3>
      <ul>
        <li><strong>Product Optimization:</strong> Optimize product details and features</li>
        <li><strong>Image Enhancement:</strong> Enhance product images to Amazon standards</li>
        <li><strong>Content Creation:</strong> Create compelling product content</li>
        <li><strong>SEO Optimization:</strong> Optimize for Amazon search algorithm</li>
        <li><strong>Compliance Check:</strong> Ensure Amazon policy compliance</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Higher search rankings on Amazon</li>
        <li>Better conversion rates</li>
        <li>Professional product presentation</li>
        <li>Increased sales on Amazon</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Product Research', desc: 'Research products and competition'},
      {step: 2, title: 'Keyword Research', desc: 'Research Amazon search keywords'},
      {step: 3, title: 'Content Creation', desc: 'Create optimized product content'},
      {step: 4, title: 'Image Enhancement', desc: 'Enhance images to Amazon standards'},
      {step: 5, title: 'Listing Creation & Optimization', desc: 'Create and optimize listings'}
    ],
    facts: [
      {icon: 'fab fa-amazon', text: 'Amazon Specialists'},
      {icon: 'fas fa-search', text: 'SEO Optimized'},
      {icon: 'fas fa-images', text: 'Image Standards'},
      {icon: 'fas fa-chart-line', text: 'Conversion Focused'}
    ],
    benefits: [
      {icon: 'fas fa-search', title: 'Search Ranking', desc: 'Higher Amazon search rankings'},
      {icon: 'fas fa-chart-line', title: 'Sales Increase', desc: 'Increased product sales'},
      {icon: 'fas fa-eye', title: 'Visibility', desc: 'Better product visibility on Amazon'},
      {icon: 'fas fa-check-circle', title: 'Compliance', desc: 'Compliance with Amazon requirements'},
      {icon: 'fas fa-expand', title: 'Bulk Listing', desc: 'Handle bulk product listing'},
      {icon: 'fas fa-bolt', title: 'Quick Listing', desc: 'Efficient listing process'}
    ],
    faq: [
      {q: 'How many products can you list on Amazon?', a: 'We can list any number of products, following Amazon\'s category and quantity limits.'},
      {q: 'Do you handle Amazon A+ content?', a: 'Yes, we create Amazon A+ content for enhanced product pages.'},
      {q: 'Can you optimize existing Amazon listings?', a: 'Yes, we can audit and optimize existing product listings.'},
      {q: 'Do you handle Amazon FBA setup?', a: 'Yes, we can assist with Amazon FBA setup and management.'}
    ]
  },

  'amazon-store-optimization': {
    title: 'Amazon Store Optimization',
    icon: 'fas fa-star',
    description: 'Professional Amazon store optimization services to improve visibility, conversion rates, and overall store performance.',
    features: [
      'Store Design',
      'SEO Optimization',
      'Conversion Rate Optimization',
      'Performance Analytics'
    ],
    content: `
      <p>We optimize Amazon stores to improve search visibility, increase conversion rates, enhance customer experience, and maximize sales performance.</p>
      
      <h3>Store Optimization Services</h3>
      <ul>
        <li><strong>Store Design:</strong> Design and optimize Amazon storefront</li>
        <li><strong>SEO Optimization:</strong> Optimize for Amazon search algorithm</li>
        <li><strong>Conversion Optimization:</strong> Improve conversion rates</li>
        <li><strong>Performance Analytics:</strong> Analyze and improve performance</li>
        <li><strong>Competitor Analysis:</strong> Analyze and beat competitors</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Higher store visibility</li>
        <li>Improved conversion rates</li>
        <li>Better customer experience</li>
        <li>Increased sales and revenue</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Store Audit', desc: 'Comprehensive store audit and analysis'},
      {step: 2, title: 'Competitor Analysis', desc: 'Analyze competitor stores and strategies'},
      {step: 3, title: 'Optimization Planning', desc: 'Plan store optimization strategies'},
      {step: 4, title: 'Implementation', desc: 'Implement optimization improvements'},
      {step: 5, title: 'Monitoring & Refinement', desc: 'Monitor results and refine strategies'}
    ],
    facts: [
      {icon: 'fab fa-amazon', text: 'Amazon Store Experts'},
      {icon: 'fas fa-chart-line', text: 'Performance Focus'},
      {icon: 'fas fa-search', text: 'SEO Optimization'},
      {icon: 'fas fa-users', text: 'Customer Experience'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Visibility', desc: 'Increase store visibility on Amazon'},
      {icon: 'fas fa-chart-line', title: 'Conversion', desc: 'Improve conversion rates'},
      {icon: 'fas fa-users', title: 'Customer Experience', desc: 'Enhance customer shopping experience'},
      {icon: 'fas fa-dollar-sign', title: 'Revenue Growth', desc: 'Increase store revenue'},
      {icon: 'fas fa-expand', title: 'Competitive Edge', desc: 'Gain competitive advantage'},
      {icon: 'fas fa-shield-alt', title: 'Compliance', desc: 'Maintain Amazon policy compliance'}
    ],
    faq: [
      {q: 'What aspects of Amazon stores do you optimize?', a: 'We optimize store design, product listings, SEO, conversion elements, and overall performance.'},
      {q: 'How long does optimization take to show results?', a: 'Typically 2-4 weeks to see initial improvements, with ongoing optimization for best results.'},
      {q: 'Can you optimize for Amazon brand registry stores?', a: 'Yes, we specialize in optimizing Amazon brand registry stores.'},
      {q: 'Do you provide ongoing optimization services?', a: 'Yes, we offer ongoing optimization and monitoring services.'}
    ]
  },

  'brand-name-registration': {
    title: 'Brand Name Registration',
    icon: 'fas fa-trademark',
    description: 'Professional brand name registration services to protect your brand identity and establish legal ownership.',
    features: [
      'Trademark Search',
      'Application Filing',
      'Legal Documentation',
      'Registration Monitoring'
    ],
    content: `
      <p>We provide comprehensive brand name registration services that protect your brand identity, establish legal ownership, and prevent unauthorized use.</p>
      
      <h3>Brand Registration Services</h3>
      <ul>
        <li><strong>Trademark Search:</strong> Comprehensive trademark availability search</li>
        <li><strong>Application Filing:</strong> Complete trademark application filing</li>
        <li><strong>Legal Documentation:</strong> Prepare and submit legal documents</li>
        <li><strong>Registration Monitoring:</strong> Monitor registration process</li>
        <li><strong>Opposition Handling:</strong> Handle opposition if it arises</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Legal brand protection</li>
        <li>Exclusive brand rights</li>
        <li>Professional registration process</li>
        <li>Peace of mind</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Trademark Search', desc: 'Search trademark database for availability'},
      {step: 2, title: 'Application Preparation', desc: 'Prepare complete trademark application'},
      {step: 3, title: 'Filing', desc: 'File application with trademark office'},
      {step: 4, title: 'Monitoring', desc: 'Monitor application progress'},
      {step: 5, title: 'Registration Completion', desc: 'Complete registration process'}
    ],
    facts: [
      {icon: 'fas fa-gavel', text: 'Legal Services'},
      {icon: 'fas fa-shield-alt', text: 'Brand Protection'},
      {icon: 'fas fa-search', text: 'Comprehensive Search'},
      {icon: 'fas fa-file-contract', text: 'Legal Documentation'}
    ],
    benefits: [
      {icon: 'fas fa-shield-alt', title: 'Brand Protection', desc: 'Protect brand from infringement'},
      {icon: 'fas fa-gavel', title: 'Legal Rights', desc: 'Establish legal brand rights'},
      {icon: 'fas fa-check-circle', title: 'Professional Process', desc: 'Professional registration process'},
      {icon: 'fas fa-expand', title: 'Business Value', desc: 'Increase business value with registered brand'},
      {icon: 'fas fa-lock', title: 'Security', desc: 'Secure brand identity'},
      {icon: 'fas fa-headset', title: 'Expert Assistance', desc: 'Expert legal assistance throughout'}
    ],
    faq: [
      {q: 'How long does trademark registration take?', a: 'Typically 6-18 months depending on jurisdiction and complexity.'},
      {q: 'What classes should I register my trademark in?', a: 'We help determine appropriate classes based on your products/services.'},
      {q: 'Can you register trademarks internationally?', a: 'Yes, we can assist with international trademark registration.'},
      {q: 'What if my desired trademark is already taken?', a: 'We provide alternatives and strategies if your preferred trademark is unavailable.'}
    ]
  },

  'trademark-registration': {
    title: 'Trademark Registration',
    icon: 'fas fa-copyright',
    description: 'Professional trademark registration services to protect your brand logos, slogans, and other brand elements.',
    features: [
      'Logo Trademarking',
      'Slogan Protection',
      'Design Mark Registration',
      'Trademark Monitoring'
    ],
    content: `
      <p>We provide comprehensive trademark registration services that protect your brand logos, slogans, designs, and other distinctive brand elements.</p>
      
      <h3>Trademark Services</h3>
      <ul>
        <li><strong>Logo Trademarking:</strong> Register logos and design marks</li>
        <li><strong>Slogan Protection:</strong> Protect brand slogans and taglines</li>
        <li><strong>Design Mark Registration:</strong> Register unique designs</li>
        <li><strong>Trademark Monitoring:</strong> Monitor for infringement</li>
        <li><strong>Renewal Services:</strong> Handle trademark renewals</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Legal protection of brand elements</li>
        <li>Prevention of brand imitation</li>
        <li>Enhanced brand value</li>
        <li>Legal recourse against infringement</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Trademark Assessment', desc: 'Assess trademark eligibility and strength'},
      {step: 2, title: 'Search & Clearance', desc: 'Search for conflicting trademarks'},
      {step: 3, title: 'Application Preparation', desc: 'Prepare trademark application'},
      {step: 4, title: 'Filing & Prosecution', desc: 'File and prosecute application'},
      {step: 5, title: 'Registration & Maintenance', desc: 'Complete registration and handle maintenance'}
    ],
    facts: [
      {icon: 'fas fa-gavel', text: 'Trademark Law'},
      {icon: 'fas fa-paint-brush', text: 'Design Protection'},
      {icon: 'fas fa-shield-alt', text: 'Legal Protection'},
      {icon: 'fas fa-eye', text: 'Monitoring'}
    ],
    benefits: [
      {icon: 'fas fa-shield-alt', title: 'Legal Protection', desc: 'Legal protection for brand elements'},
      {icon: 'fas fa-gavel', title: 'Enforcement Rights', desc: 'Right to enforce against infringement'},
      {icon: 'fas fa-chart-line', title: 'Brand Value', desc: 'Increase brand value with registered trademarks'},
      {icon: 'fas fa-expand', title: 'Business Asset', desc: 'Trademarks as valuable business assets'},
      {icon: 'fas fa-lock', title: 'Exclusive Rights', desc: 'Exclusive rights to use trademark'},
      {icon: 'fas fa-headset', title: 'Expert Guidance', desc: 'Expert trademark guidance'}
    ],
    faq: [
      {q: 'What\'s the difference between ™ and ®?', a: '™ indicates claim of trademark rights, while ® indicates registered trademark with government approval.'},
      {q: 'Can I trademark a color or sound?', a: 'Yes, colors, sounds, and other non-traditional marks can be trademarked if distinctive.'},
      {q: 'How long does trademark protection last?', a: 'Trademark protection can last indefinitely with proper renewals (typically every 10 years).'},
      {q: 'What if someone infringes my trademark?', a: 'We can assist with enforcement actions against trademark infringement.'}
    ]
  },

  'legal-documentation': {
    title: 'Legal Documentation',
    icon: 'fas fa-passport',
    description: 'Professional legal documentation services for businesses including contracts, agreements, and compliance documents.',
    features: [
      'Contract Drafting',
      'Agreement Preparation',
      'Compliance Documents',
      'Legal Review'
    ],
    content: `
      <p>We provide professional legal documentation services that create, review, and prepare legal documents to protect your business and ensure compliance.</p>
      
      <h3>Legal Documentation Services</h3>
      <ul>
        <li><strong>Contract Drafting:</strong> Draft business contracts and agreements</li>
        <li><strong>Agreement Preparation:</strong> Prepare various business agreements</li>
        <li><strong>Compliance Documents:</strong> Create compliance and regulatory documents</li>
        <li><strong>Legal Review:</strong> Review existing legal documents</li>
        <li><strong>Document Templates:</strong> Create legal document templates</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Legal protection for business</li>
        <li>Compliance with regulations</li>
        <li>Professional document preparation</li>
        <li>Risk reduction</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Requirement Analysis', desc: 'Analyze legal documentation needs'},
      {step: 2, title: 'Document Drafting', desc: 'Draft or prepare legal documents'},
      {step: 3, title: 'Review & Revision', desc: 'Review documents and make revisions'},
      {step: 4, title: 'Finalization', desc: 'Finalize legal documents'},
      {step: 5, title: 'Implementation Guidance', desc: 'Provide guidance on document implementation'}
    ],
    facts: [
      {icon: 'fas fa-gavel', text: 'Legal Expertise'},
      {icon: 'fas fa-file-contract', text: 'Document Preparation'},
      {icon: 'fas fa-shield-alt', text: 'Risk Protection'},
      {icon: 'fas fa-check-circle', text: 'Compliance'}
    ],
    benefits: [
      {icon: 'fas fa-shield-alt', title: 'Legal Protection', desc: 'Protect business legally'},
      {icon: 'fas fa-gavel', title: 'Compliance', desc: 'Ensure regulatory compliance'},
      {icon: 'fas fa-file-contract', title: 'Professional Documents', desc: 'Professional legal documents'},
      {icon: 'fas fa-exclamation-triangle', title: 'Risk Reduction', desc: 'Reduce legal and business risks'},
      {icon: 'fas fa-expand', title: 'Business Support', desc: 'Support business operations and growth'},
      {icon: 'fas fa-headset', title: 'Expert Assistance', desc: 'Expert legal documentation assistance'}
    ],
    faq: [
      {q: 'What types of legal documents do you prepare?', a: 'We prepare contracts, agreements, terms of service, privacy policies, compliance documents, and more.'},
      {q: 'Are you lawyers?', a: 'We work with legal professionals to ensure documents are legally sound, but recommend consulting with your own lawyer for specific legal advice.'},
      {q: 'Can you review existing legal documents?', a: 'Yes, we can review and provide feedback on existing legal documents.'},
      {q: 'Do you provide document templates?', a: 'Yes, we create customizable legal document templates.'}
    ]
  },

  'influencer-content-creation': {
    title: 'Influencer Content Creation',
    icon: 'fas fa-user-check',
    description: 'Professional influencer content creation services including social media posts, stories, and branded content.',
    features: [
      'Social Media Content',
      'Branded Posts',
      'Story Creation',
      'Content Strategy'
    ],
    content: `
      <p>We create engaging influencer content that resonates with audiences, promotes brands authentically, and drives engagement and conversions.</p>
      
      <h3>Influencer Content Services</h3>
      <ul>
        <li><strong>Social Media Content:</strong> Create social media posts for influencers</li>
        <li><strong>Branded Posts:</strong> Develop branded content for partnerships</li>
        <li><strong>Story Creation:</strong> Create engaging Instagram/Facebook stories</li>
        <li><strong>Content Strategy:</strong> Develop influencer content strategy</li>
        <li><strong>Video Content:</strong> Create video content for influencers</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Authentic influencer content</li>
        <li>Higher engagement rates</li>
        <li>Effective brand promotion</li>
        <li>Professional content quality</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Influencer Analysis', desc: 'Analyze influencer style and audience'},
      {step: 2, title: 'Brand Integration', desc: 'Integrate brand messaging authentically'},
      {step: 3, title: 'Content Creation', desc: 'Create engaging influencer content'},
      {step: 4, title: 'Platform Optimization', desc: 'Optimize for specific platforms'},
      {step: 5, title: 'Performance Planning', desc: 'Plan for performance and engagement'}
    ],
    facts: [
      {icon: 'fas fa-users', text: 'Influencer Focus'},
      {icon: 'fas fa-heart', text: 'Engagement'},
      {icon: 'fas fa-bullhorn', text: 'Brand Promotion'},
      {icon: 'fas fa-share-alt', text: 'Social Media'}
    ],
    benefits: [
      {icon: 'fas fa-users', title: 'Audience Connection', desc: 'Connect with influencer audiences'},
      {icon: 'fas fa-heart', title: 'Engagement', desc: 'Drive high engagement rates'},
      {icon: 'fas fa-bullhorn', title: 'Brand Promotion', desc: 'Promote brands authentically'},
      {icon: 'fas fa-chart-line', title: 'Performance', desc: 'Achieve campaign performance goals'},
      {icon: 'fas fa-expand', title: 'Content Variety', desc: 'Create various content types'},
      {icon: 'fas fa-bolt', title: 'Quick Creation', desc: 'Fast content creation for timely posts'}
    ],
    faq: [
      {q: 'Do you work with specific influencer niches?', a: 'Yes, we work with influencers across various niches including lifestyle, beauty, tech, fitness, and more.'},
      {q: 'Can you maintain influencer authenticity?', a: 'Yes, we create content that maintains influencer authenticity while promoting brands.'},
      {q: 'Do you handle influencer-brand matching?', a: 'Yes, we can help match brands with appropriate influencers.'},
      {q: 'Can you create content for influencer campaigns?', a: 'Yes, we create content for complete influencer marketing campaigns.'}
    ]
  },

  'influencer-marketing': {
    title: 'Influencer Marketing',
    icon: 'fas fa-bullhorn',
    description: 'Comprehensive influencer marketing services including strategy, influencer selection, campaign management, and analytics.',
    features: [
      'Influencer Strategy',
      'Talent Selection',
      'Campaign Management',
      'Performance Analytics'
    ],
    content: `
      <p>We provide complete influencer marketing services that develop strategies, select appropriate influencers, manage campaigns, and measure results for maximum ROI.</p>
      
      <h3>Influencer Marketing Services</h3>
      <ul>
        <li><strong>Influencer Strategy:</strong> Develop comprehensive influencer strategy</li>
        <li><strong>Talent Selection:</strong> Select appropriate influencers for brands</li>
        <li><strong>Campaign Management:</strong> Manage complete influencer campaigns</li>
        <li><strong>Performance Analytics:</strong> Measure and analyze campaign performance</li>
        <li><strong>Relationship Management:</strong> Manage influencer relationships</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Effective brand awareness</li>
        <li>Higher engagement and conversions</li>
        <li>Professional campaign management</li>
        <li>Measurable ROI</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Strategy Development', desc: 'Develop influencer marketing strategy'},
      {step: 2, title: 'Influencer Selection', desc: 'Select appropriate influencers'},
      {step: 3, title: 'Campaign Planning', desc: 'Plan complete influencer campaign'},
      {step: 4, title: 'Campaign Management', desc: 'Manage campaign execution'},
      {step: 5, title: 'Performance Analysis', desc: 'Analyze campaign performance and ROI'}
    ],
    facts: [
      {icon: 'fas fa-users', text: 'Influencer Networks'},
      {icon: 'fas fa-chart-line', text: 'Campaign Management'},
      {icon: 'fas fa-bullseye', text: 'Targeted Reach'},
      {icon: 'fas fa-dollar-sign', text: 'ROI Focus'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Brand Awareness', desc: 'Increase brand awareness through influencers'},
      {icon: 'fas fa-users', title: 'Targeted Reach', desc: 'Reach targeted audiences through influencers'},
      {icon: 'fas fa-chart-line', title: 'Engagement', desc: 'Drive high engagement rates'},
      {icon: 'fas fa-dollar-sign', title: 'ROI', desc: 'Achieve measurable ROI'},
      {icon: 'fas fa-expand', title: 'Campaign Scale', desc: 'Scale influencer campaigns effectively'},
      {icon: 'fas fa-headset', title: 'Professional Management', desc: 'Professional campaign management'}
    ],
    faq: [
      {q: 'How do you select influencers?', a: 'We select based on audience demographics, engagement rates, brand alignment, and campaign goals.'},
      {q: 'What metrics do you track for influencer campaigns?', a: 'We track reach, engagement, conversions, ROI, and other relevant metrics.'},
      {q: 'Can you manage micro-influencer campaigns?', a: 'Yes, we manage campaigns with influencers of all sizes including micro-influencers.'},
      {q: 'Do you handle influencer contracts and payments?', a: 'Yes, we handle influencer agreements, contracts, and payment processing.'}
    ]
  },

  // Business Solutions
  'crm-setup-integration': {
    title: 'CRM Setup & Integration',
    icon: 'fas fa-cogs',
    description: 'Professional CRM setup and integration services to implement and customize CRM systems for your business needs.',
    features: [
      'CRM Implementation',
      'Customization',
      'Data Migration',
      'Integration Setup'
    ],
    content: `
      <p>We provide comprehensive CRM setup and integration services that implement CRM systems, customize for your business needs, and integrate with existing tools.</p>
      
      <h3>CRM Services</h3>
      <ul>
        <li><strong>CRM Implementation:</strong> Implement CRM systems</li>
        <li><strong>Customization:</strong> Customize CRM for business needs</li>
        <li><strong>Data Migration:</strong> Migrate data to new CRM</li>
        <li><strong>Integration Setup:</strong> Integrate with other business systems</li>
        <li><strong>Training & Support:</strong> Provide training and ongoing support</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Improved customer management</li>
        <li>Better sales tracking</li>
        <li>Enhanced customer service</li>
        <li>Increased business efficiency</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Requirement Analysis', desc: 'Analyze business needs and CRM requirements'},
      {step: 2, title: 'CRM Selection', desc: 'Select appropriate CRM system'},
      {step: 3, title: 'Implementation', desc: 'Implement and customize CRM'},
      {step: 4, title: 'Data Migration', desc: 'Migrate existing data to CRM'},
      {step: 5, title: 'Training & Support', desc: 'Train users and provide ongoing support'}
    ],
    facts: [
      {icon: 'fas fa-users', text: 'Customer Focus'},
      {icon: 'fas fa-chart-line', text: 'Sales Tracking'},
      {icon: 'fas fa-cogs', text: 'System Integration'},
      {icon: 'fas fa-database', text: 'Data Management'}
    ],
    benefits: [
      {icon: 'fas fa-users', title: 'Customer Management', desc: 'Better manage customer relationships'},
      {icon: 'fas fa-chart-line', title: 'Sales Improvement', desc: 'Improve sales tracking and performance'},
      {icon: 'fas fa-headset', title: 'Customer Service', desc: 'Enhance customer service capabilities'},
      {icon: 'fas fa-cogs', title: 'Efficiency', desc: 'Increase business efficiency'},
      {icon: 'fas fa-expand', title: 'Scalability', desc: 'Scalable CRM solutions'},
      {icon: 'fas fa-shield-alt', title: 'Data Security', desc: 'Secure customer data management'}
    ],
    faq: [
      {q: 'Which CRM systems do you work with?', a: 'We work with Salesforce, HubSpot, Zoho, Microsoft Dynamics, and other popular CRM systems.'},
      {q: 'Can you customize CRM for specific industries?', a: 'Yes, we customize CRM for various industries including retail, healthcare, finance, and more.'},
      {q: 'How long does CRM implementation take?', a: 'Typically 2-8 weeks depending on complexity and customization.'},
      {q: 'Do you provide ongoing CRM support?', a: 'Yes, we provide ongoing support, maintenance, and optimization.'}
    ]
  },

  'customer-relationship-management': {
    title: 'Customer Relationship Management',
    icon: 'fas fa-users',
    description: 'Comprehensive customer relationship management services including strategy, implementation, and optimization.',
    features: [
      'CRM Strategy',
      'Customer Journey Mapping',
      'Service Optimization',
      'Loyalty Programs'
    ],
    content: `
      <p>We provide comprehensive customer relationship management services that develop strategies, implement systems, and optimize processes to build stronger customer relationships.</p>
      
      <h3>CRM Services</h3>
      <ul>
        <li><strong>CRM Strategy:</strong> Develop customer relationship strategy</li>
        <li><strong>Customer Journey Mapping:</strong> Map and optimize customer journeys</li>
        <li><strong>Service Optimization:</strong> Optimize customer service processes</li>
        <li><strong>Loyalty Programs:</strong> Develop customer loyalty programs</li>
        <li><strong>Customer Analytics:</strong> Analyze customer data and behavior</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Stronger customer relationships</li>
        <li>Higher customer retention</li>
        <li>Improved customer satisfaction</li>
        <li>Increased customer lifetime value</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Customer Analysis', desc: 'Analyze current customer relationships and needs'},
      {step: 2, title: 'Strategy Development', desc: 'Develop CRM strategy and approach'},
      {step: 3, title: 'Implementation', desc: 'Implement CRM systems and processes'},
      {step: 4, title: 'Optimization', desc: 'Optimize customer relationships and processes'},
      {step: 5, title: 'Measurement', desc: 'Measure CRM performance and results'}
    ],
    facts: [
      {icon: 'fas fa-handshake', text: 'Relationship Focus'},
      {icon: 'fas fa-heart', text: 'Customer Loyalty'},
      {icon: 'fas fa-chart-line', text: 'Retention'},
      {icon: 'fas fa-users', text: 'Customer Focus'}
    ],
    benefits: [
      {icon: 'fas fa-handshake', title: 'Relationships', desc: 'Build stronger customer relationships'},
      {icon: 'fas fa-heart', title: 'Loyalty', desc: 'Increase customer loyalty'},
      {icon: 'fas fa-chart-line', title: 'Retention', desc: 'Improve customer retention rates'},
      {icon: 'fas fa-dollar-sign', title: 'Value', desc: 'Increase customer lifetime value'},
      {icon: 'fas fa-expand', title: 'Business Growth', desc: 'Support business growth through relationships'},
      {icon: 'fas fa-shield-alt', title: 'Competitive Advantage', desc: 'Gain competitive advantage through CRM'}
    ],
    faq: [
      {q: 'What\'s the difference between CRM system and CRM strategy?', a: 'CRM system is the software tool, while CRM strategy is the overall approach to managing customer relationships.'},
      {q: 'Can you help with customer segmentation?', a: 'Yes, we help segment customers for targeted relationship management.'},
      {q: 'Do you develop customer loyalty programs?', a: 'Yes, we develop and implement customer loyalty programs.'},
      {q: 'How do you measure CRM success?', a: 'We measure through customer satisfaction, retention rates, lifetime value, and other relevant metrics.'}
    ]
  },

  'bulk-sms-marketing': {
    title: 'Bulk SMS Marketing',
    icon: 'fas fa-sms',
    description: 'Professional bulk SMS marketing services including campaign strategy, message creation, and performance tracking.',
    features: [
      'SMS Campaign Strategy',
      'Message Creation',
      'List Management',
      'Performance Analytics'
    ],
    content: `
      <p>We provide effective bulk SMS marketing services that develop strategies, create compelling messages, manage contact lists, and track campaign performance.</p>
      
      <h3>SMS Marketing Services</h3>
      <ul>
        <li><strong>SMS Campaign Strategy:</strong> Develop SMS marketing strategy</li>
        <li><strong>Message Creation:</strong> Create compelling SMS messages</li>
        <li><strong>List Management:</strong> Manage contact lists and segmentation</li>
        <li><strong>Performance Analytics:</strong> Track and analyze campaign performance</li>
        <li><strong>Compliance Management:</strong> Ensure regulatory compliance</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>High open and response rates</li>
        <li>Immediate customer reach</li>
        <li>Cost-effective marketing</li>
        <li>Measurable results</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Strategy Development', desc: 'Develop SMS marketing strategy'},
      {step: 2, title: 'Message Creation', desc: 'Create compelling SMS messages'},
      {step: 3, title: 'List Preparation', desc: 'Prepare and segment contact lists'},
      {step: 4, title: 'Campaign Execution', desc: 'Execute SMS campaigns'},
      {step: 5, title: 'Performance Analysis', desc: 'Analyze campaign performance'}
    ],
    facts: [
      {icon: 'fas fa-mobile-alt', text: 'Mobile Marketing'},
      {icon: 'fas fa-bullhorn', text: 'Direct Communication'},
      {icon: 'fas fa-chart-line', text: 'High Open Rates'},
      {icon: 'fas fa-dollar-sign', text: 'Cost Effective'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'High Open Rates', desc: 'SMS has 98% open rates'},
      {icon: 'fas fa-bolt', title: 'Immediate Reach', desc: 'Reach customers immediately'},
      {icon: 'fas fa-dollar-sign', title: 'Cost Effective', desc: 'Low-cost marketing channel'},
      {icon: 'fas fa-chart-line', title: 'Measurable', desc: 'Trackable results and ROI'},
      {icon: 'fas fa-expand', title: 'Targeted', desc: 'Target specific customer segments'},
      {icon: 'fas fa-shield-alt', title: 'Compliance', desc: 'Ensure regulatory compliance'}
    ],
    faq: [
      {q: 'What are SMS open rates compared to email?', a: 'SMS typically has 98% open rates within minutes, compared to 20-30% for email.'},
      {q: 'Can you handle opt-in compliance?', a: 'Yes, we ensure proper opt-in processes and compliance with regulations.'},
      {q: 'What types of SMS campaigns are most effective?', a: 'Promotional offers, appointment reminders, order updates, and time-sensitive alerts.'},
      {q: 'Can you integrate SMS with other marketing channels?', a: 'Yes, we integrate SMS with email, social media, and other marketing channels.'}
    ]
  },

  'messaging-solutions': {
    title: 'Messaging Solutions',
    icon: 'fas fa-envelope',
    description: 'Comprehensive messaging solutions including SMS, WhatsApp, email, and omnichannel communication platforms.',
    features: [
      'Omnichannel Messaging',
      'API Integration',
      'Automated Messaging',
      'Communication Platforms'
    ],
    content: `
      <p>We provide comprehensive messaging solutions that implement omnichannel communication platforms, integrate with business systems, and automate messaging processes.</p>
      
      <h3>Messaging Solutions</h3>
      <ul>
        <li><strong>Omnichannel Messaging:</strong> Implement multi-channel messaging</li>
        <li><strong>API Integration:</strong> Integrate messaging with business systems</li>
        <li><strong>Automated Messaging:</strong> Set up automated messaging workflows</li>
        <li><strong>Communication Platforms:</strong> Implement messaging platforms</li>
        <li><strong>Analytics & Reporting:</strong> Provide messaging analytics</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Unified communication platform</li>
        <li>Automated messaging processes</li>
        <li>Improved customer communication</li>
        <li>Increased operational efficiency</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Requirement Analysis', desc: 'Analyze messaging needs and requirements'},
      {step: 2, title: 'Solution Design', desc: 'Design messaging solution architecture'},
      {step: 3, title: 'Implementation', desc: 'Implement messaging solutions'},
      {step: 4, title: 'Integration', desc: 'Integrate with existing systems'},
      {step: 5, title: 'Training & Support', desc: 'Train users and provide support'}
    ],
    facts: [
      {icon: 'fas fa-comments', text: 'Communication Focus'},
      {icon: 'fas fa-sync', text: 'Omnichannel'},
      {icon: 'fas fa-cogs', text: 'Automation'},
      {icon: 'fas fa-expand', text: 'Integration'}
    ],
    benefits: [
      {icon: 'fas fa-comments', title: 'Communication', desc: 'Improve customer communication'},
      {icon: 'fas fa-sync', title: 'Omnichannel', desc: 'Unified omnichannel messaging'},
      {icon: 'fas fa-cogs', title: 'Automation', desc: 'Automate messaging processes'},
      {icon: 'fas fa-expand', title: 'Integration', desc: 'Integrate with business systems'},
      {icon: 'fas fa-chart-line', title: 'Efficiency', desc: 'Increase operational efficiency'},
      {icon: 'fas fa-shield-alt', title: 'Reliability', desc: 'Reliable messaging infrastructure'}
    ],
    faq: [
      {q: 'Which messaging channels do you support?', a: 'We support SMS, WhatsApp, email, web chat, social media messaging, and more.'},
      {q: 'Can you implement chatbots with messaging?', a: 'Yes, we implement chatbots within messaging platforms.'},
      {q: 'Do you provide messaging APIs for developers?', a: 'Yes, we provide and integrate messaging APIs.'},
      {q: 'Can you migrate from existing messaging systems?', a: 'Yes, we can migrate from existing messaging systems to new platforms.'}
    ]
  },

  'professional-photography': {
    title: 'Professional Photography',
    icon: 'fas fa-camera',
    description: 'Professional photography services including product, corporate, event, and commercial photography.',
    features: [
      'Product Photography',
      'Corporate Photography',
      'Event Coverage',
      'Commercial Photography'
    ],
    content: `
      <p>We provide professional photography services that capture high-quality images for products, corporate needs, events, and commercial purposes.</p>
      
      <h3>Photography Services</h3>
      <ul>
        <li><strong>Product Photography:</strong> Professional product photos</li>
        <li><strong>Corporate Photography:</strong> Corporate and business photos</li>
        <li><strong>Event Coverage:</strong> Event and occasion photography</li>
        <li><strong>Commercial Photography:</strong> Commercial and advertising photos</li>
        <li><strong>Portrait Photography:</strong> Professional portrait photography</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Professional quality images</li>
        <li>Enhanced brand presentation</li>
        <li>Increased product appeal</li>
        <li>Professional corporate image</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Planning', desc: 'Plan photography approach and requirements'},
      {step: 2, title: 'Photography Session', desc: 'Conduct professional photography session'},
      {step: 3, title: 'Image Selection', desc: 'Select best images from session'},
      {step: 4, title: 'Editing & Enhancement', desc: 'Edit and enhance selected images'},
      {step: 5, title: 'Delivery', desc: 'Deliver final images in required formats'}
    ],
    facts: [
      {icon: 'fas fa-camera', text: 'Professional Photography'},
      {icon: 'fas fa-paint-brush', text: 'Image Editing'},
      {icon: 'fas fa-eye', text: 'Visual Quality'},
      {icon: 'fas fa-expand', text: 'Various Types'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Visual Quality', desc: 'High-quality professional images'},
      {icon: 'fas fa-paint-brush', title: 'Brand Image', desc: 'Enhance brand image and presentation'},
      {icon: 'fas fa-shopping-bag', title: 'Product Appeal', desc: 'Increase product appeal and sales'},
      {icon: 'fas fa-building', title: 'Corporate Professionalism', desc: 'Professional corporate image'},
      {icon: 'fas fa-expand', title: 'Versatility', desc: 'Various photography types and styles'},
      {icon: 'fas fa-bolt', title: 'Quick Delivery', desc: 'Timely image delivery'}
    ],
    faq: [
      {q: 'What equipment do you use?', a: 'We use professional DSLR/mirrorless cameras, lighting equipment, and studio setups.'},
      {q: 'Can you travel for photography sessions?', a: 'Yes, we can travel for location photography as needed.'},
      {q: 'Do you provide image editing services?', a: 'Yes, professional image editing is included in our services.'},
      {q: 'What image formats do you deliver?', a: 'We deliver in various formats including JPEG, PNG, TIFF, and RAW files.'}
    ]
  },

  'video-production': {
    title: 'Video Production',
    icon: 'fas fa-video',
    description: 'Professional video production services including planning, filming, editing, and post-production.',
    features: [
      'Video Planning',
      'Professional Filming',
      'Post-production',
      'Final Delivery'
    ],
    content: `
      <p>We provide complete video production services that handle planning, filming, editing, and post-production to create professional video content.</p>
      
      <h3>Video Production Services</h3>
      <ul>
        <li><strong>Video Planning:</strong> Plan video concepts and scripts</li>
        <li><strong>Professional Filming:</strong> Professional filming and shooting</li>
        <li><strong>Post-production:</strong> Complete post-production editing</li>
        <li><strong>Final Delivery:</strong> Deliver final video products</li>
        <li><strong>Distribution Planning:</strong> Plan video distribution and promotion</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Professional video quality</li>
        <li>Complete production services</li>
        <li>Effective video content</li>
        <li>Professional production value</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Concept Development', desc: 'Develop video concept and approach'},
      {step: 2, title: 'Planning & Pre-production', desc: 'Plan production and prepare'},
      {step: 3, title: 'Filming', desc: 'Conduct professional filming'},
      {step: 4, title: 'Post-production', desc: 'Edit and complete post-production'},
      {step: 5, title: 'Delivery & Distribution', desc: 'Deliver final video and plan distribution'}
    ],
    facts: [
      {icon: 'fas fa-film', text: 'Video Production'},
      {icon: 'fas fa-camera', text: 'Professional Filming'},
      {icon: 'fas fa-edit', text: 'Post-production'},
      {icon: 'fas fa-play-circle', text: 'Complete Service'}
    ],
    benefits: [
      {icon: 'fas fa-film', title: 'Professional Quality', desc: 'Professional video production quality'},
      {icon: 'fas fa-play-circle', title: 'Complete Service', desc: 'Complete production services'},
      {icon: 'fas fa-eye', title: 'Visual Impact', desc: 'Create visual impact and engagement'},
      {icon: 'fas fa-expand', title: 'Video Types', desc: 'Various video types and formats'},
      {icon: 'fas fa-bolt', title: 'Efficient Production', desc: 'Efficient production process'},
      {icon: 'fas fa-shield-alt', title: 'Quality Assurance', desc: 'Quality assurance throughout production'}
    ],
    faq: [
      {q: 'What types of videos do you produce?', a: 'We produce corporate videos, product videos, commercials, explainer videos, event videos, and more.'},
      {q: 'Do you provide scripting and storyboarding?', a: 'Yes, we provide complete pre-production including scripting and storyboarding.'},
      {q: 'Can you handle location filming?', a: 'Yes, we handle both studio and location filming.'},
      {q: 'What video formats do you deliver?', a: 'We deliver in various formats for web, social media, broadcast, and other uses.'}
    ]
  },

  'print-design': {
    title: 'Print Design',
    icon: 'fas fa-print',
    description: 'Professional print design services including brochures, flyers, business cards, and other printed materials.',
    features: [
      'Brochure Design',
      'Business Cards',
      'Flyer Design',
      'Print Collateral'
    ],
    content: `
      <p>We provide professional print design services that create visually appealing printed materials for marketing, branding, and communication purposes.</p>
      
      <h3>Print Design Services</h3>
      <ul>
        <li><strong>Brochure Design:</strong> Design professional brochures</li>
        <li><strong>Business Cards:</strong> Create business card designs</li>
        <li><strong>Flyer Design:</strong> Design promotional flyers</li>
        <li><strong>Print Collateral:</strong> Various print collateral design</li>
        <li><strong>Print-ready Files:</strong> Prepare print-ready files</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Professional print materials</li>
        <li>Enhanced brand presentation</li>
        <li>Effective marketing collateral</li>
        <li>Print-ready file preparation</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Design Planning', desc: 'Plan print design approach and requirements'},
      {step: 2, title: 'Concept Development', desc: 'Develop design concepts'},
      {step: 3, title: 'Design Creation', desc: 'Create print designs'},
      {step: 4, title: 'Review & Revision', desc: 'Review designs and make revisions'},
      {step: 5, title: 'Print Preparation', desc: 'Prepare print-ready files'}
    ],
    facts: [
      {icon: 'fas fa-paint-brush', text: 'Print Design'},
      {icon: 'fas fa-print', text: 'Print Expertise'},
      {icon: 'fas fa-palette', text: 'Color Management'},
      {icon: 'fas fa-ruler-combined', text: 'Precision'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Visual Appeal', desc: 'Visually appealing print materials'},
      {icon: 'fas fa-paint-brush', title: 'Brand Presentation', desc: 'Professional brand presentation'},
      {icon: 'fas fa-bullhorn', title: 'Marketing Effectiveness', desc: 'Effective marketing collateral'},
      {icon: 'fas fa-print', title: 'Print Ready', desc: 'Print-ready file preparation'},
      {icon: 'fas fa-expand', title: 'Material Variety', desc: 'Various print materials and formats'},
      {icon: 'fas fa-bolt', title: 'Quick Design', desc: 'Fast design turnaround'}
    ],
    faq: [
      {q: 'What print materials do you design?', a: 'We design brochures, flyers, business cards, letterheads, envelopes, banners, and more.'},
      {q: 'Do you handle color management for print?', a: 'Yes, we manage CMYK color profiles and ensure print color accuracy.'},
      {q: 'Can you coordinate with printers?', a: 'Yes, we can coordinate with printers and provide technical specifications.'},
      {q: 'What file formats do you deliver for print?', a: 'We deliver print-ready files in PDF, AI, EPS, and other required formats.'}
    ]
  },

  'packaging-design': {
    title: 'Packaging Design',
    icon: 'fas fa-box',
    description: 'Professional packaging design services including product packaging, labels, and packaging structural design.',
    features: [
      'Product Packaging',
      'Label Design',
      'Structural Design',
      'Packaging Mockups'
    ],
    content: `
      <p>We provide professional packaging design services that create appealing, functional packaging that protects products, attracts customers, and communicates brand values.</p>
      
      <h3>Packaging Design Services</h3>
      <ul>
        <li><strong>Product Packaging:</strong> Design product packaging</li>
        <li><strong>Label Design:</strong> Create product labels</li>
        <li><strong>Structural Design:</strong> Design packaging structure</li>
        <li><strong>Packaging Mockups:</strong> Create packaging mockups</li>
        <li><strong>Print Preparation:</strong> Prepare packaging for print/production</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Appealing product presentation</li>
        <li>Functional packaging design</li>
        <li>Brand communication through packaging</li>
        <li>Increased product appeal and sales</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Product Analysis', desc: 'Analyze product and packaging requirements'},
      {step: 2, title: 'Concept Development', desc: 'Develop packaging design concepts'},
      {step: 3, title: 'Design Creation', desc: 'Create packaging designs'},
      {step: 4, title: 'Mockup Creation', desc: 'Create packaging mockups'},
      {step: 5, title: 'Production Preparation', desc: 'Prepare designs for production'}
    ],
    facts: [
      {icon: 'fas fa-box-open', text: 'Packaging Focus'},
      {icon: 'fas fa-paint-brush', text: 'Visual Design'},
      {icon: 'fas fa-cube', text: 'Structural Design'},
      {icon: 'fas fa-shopping-cart', text: 'Product Appeal'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Visual Appeal', desc: 'Create appealing product packaging'},
      {icon: 'fas fa-cube', title: 'Functionality', desc: 'Functional packaging design'},
      {icon: 'fas fa-paint-brush', title: 'Brand Communication', desc: 'Communicate brand through packaging'},
      {icon: 'fas fa-shopping-cart', title: 'Sales Impact', desc: 'Increase product sales through packaging'},
      {icon: 'fas fa-expand', title: 'Packaging Types', desc: 'Various packaging types and materials'},
      {icon: 'fas fa-shield-alt', title: 'Production Ready', desc: 'Production-ready packaging designs'}
    ],
    faq: [
      {q: 'What types of packaging do you design?', a: 'We design boxes, bags, bottles, labels, wraps, and various packaging types.'},
      {q: 'Do you consider packaging functionality and protection?', a: 'Yes, we design for both visual appeal and product protection.'},
      {q: 'Can you create 3D packaging mockups?', a: 'Yes, we create realistic 3D packaging mockups.'},
      {q: 'Do you work with packaging manufacturers?', a: 'Yes, we can coordinate with packaging manufacturers.'}
    ]
  },

  // Content & Copy Services
  'ad-copywriting': {
    title: 'Ad Copywriting',
    icon: 'fas fa-ad',
    description: 'Professional ad copywriting services that create compelling, persuasive copy for advertising campaigns.',
    features: [
      'Advertising Copy',
      'Headline Writing',
      'Call-to-Action Creation',
      'Campaign Messaging'
    ],
    content: `
      <p>We provide professional ad copywriting services that create compelling, persuasive copy for various advertising channels that captures attention and drives action.</p>
      
      <h3>Ad Copywriting Services</h3>
      <ul>
        <li><strong>Advertising Copy:</strong> Create copy for ads</li>
        <li><strong>Headline Writing:</strong> Write attention-grabbing headlines</li>
        <li><strong>Call-to-Action Creation:</strong> Create effective calls-to-action</li>
        <li><strong>Campaign Messaging:</strong> Develop campaign messaging</li>
        <li><strong>Ad Testing Copy:</strong> Create copy for A/B testing</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Higher ad engagement</li>
        <li>Improved conversion rates</li>
        <li>Clear brand messaging</li>
        <li>Effective advertising communication</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Campaign Understanding', desc: 'Understand advertising campaign and goals'},
      {step: 2, title: 'Audience Analysis', desc: 'Analyze target audience and messaging'},
      {step: 3, title: 'Copy Creation', desc: 'Create compelling ad copy'},
      {step: 4, title: 'Review & Refinement', desc: 'Review and refine copy'},
      {step: 5, title: 'Testing Preparation', desc: 'Prepare copy for testing and optimization'}
    ],
    facts: [
      {icon: 'fas fa-pen', text: 'Copywriting'},
      {icon: 'fas fa-bullhorn', text: 'Advertising'},
      {icon: 'fas fa-bullseye', text: 'Persuasion'},
      {icon: 'fas fa-chart-line', text: 'Conversion Focus'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Attention', desc: 'Capture attention with compelling copy'},
      {icon: 'fas fa-chart-line', title: 'Conversion', desc: 'Drive conversions through persuasive copy'},
      {icon: 'fas fa-bullhorn', title: 'Messaging', desc: 'Clear and effective messaging'},
      {icon: 'fas fa-expand', title: 'Channel Adaptation', desc: 'Adapt copy for various advertising channels'},
      {icon: 'fas fa-bolt', title: 'Quick Creation', desc: 'Fast copy creation for campaigns'},
      {icon: 'fas fa-flask', title: 'Testing', desc: 'Create copy for testing and optimization'}
    ],
    faq: [
      {q: 'What types of ad copy do you write?', a: 'We write copy for digital ads, social media ads, print ads, radio/TV scripts, and more.'},
      {q: 'Can you write for specific target audiences?', a: 'Yes, we tailor copy to specific target audiences and demographics.'},
      {q: 'Do you follow brand voice guidelines?', a: 'Yes, we adhere to brand voice and messaging guidelines.'},
      {q: 'Can you create multiple versions for testing?', a: 'Yes, we create multiple copy versions for A/B testing.'}
    ]
  },

  'blog-content': {
    title: 'Blog Content',
    icon: 'fas fa-blog',
    description: 'Professional blog content writing services including articles, posts, and editorial content for websites.',
    features: [
      'Blog Articles',
      'Editorial Content',
      'SEO Optimization',
      'Content Planning'
    ],
    content: `
      <p>We provide professional blog content writing services that create engaging, informative articles that attract readers, provide value, and support SEO goals.</p>
      
      <h3>Blog Content Services</h3>
      <ul>
        <li><strong>Blog Articles:</strong> Write blog posts and articles</li>
        <li><strong>Editorial Content:</strong> Create editorial content</li>
        <li><strong>SEO Optimization:</strong> Optimize content for search engines</li>
        <li><strong>Content Planning:</strong> Plan blog content strategy</li>
        <li><strong>Content Series:</strong> Create blog content series</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Increased website traffic</li>
        <li>Improved search engine rankings</li>
        <li>Enhanced thought leadership</li>
        <li>Better audience engagement</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Topic Research', desc: 'Research blog topics and keywords'},
      {step: 2, title: 'Content Planning', desc: 'Plan content approach and structure'},
      {step: 3, title: 'Writing', desc: 'Write engaging blog content'},
      {step: 4, title: 'SEO Optimization', desc: 'Optimize content for SEO'},
      {step: 5, title: 'Review & Delivery', desc: 'Review and deliver final content'}
    ],
    facts: [
      {icon: 'fas fa-pen', text: 'Content Writing'},
      {icon: 'fas fa-search', text: 'SEO Focus'},
      {icon: 'fas fa-lightbulb', text: 'Thought Leadership'},
      {icon: 'fas fa-users', text: 'Audience Engagement'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Traffic', desc: 'Increase website traffic through blogs'},
      {icon: 'fas fa-search', title: 'SEO', desc: 'Improve search engine rankings'},
      {icon: 'fas fa-lightbulb', title: 'Authority', desc: 'Establish thought leadership'},
      {icon: 'fas fa-users', title: 'Engagement', desc: 'Engage audience with valuable content'},
      {icon: 'fas fa-expand', title: 'Content Variety', desc: 'Various blog topics and formats'},
      {icon: 'fas fa-bolt', title: 'Regular Content', desc: 'Regular blog content creation'}
    ],
    faq: [
      {q: 'What blog topics do you write about?', a: 'We write about various topics including business, technology, lifestyle, health, finance, and industry-specific subjects.'},
      {q: 'Do you optimize blog content for SEO?', a: 'Yes, we optimize blog content for search engines with proper keywords and structure.'},
      {q: 'Can you maintain consistent brand voice in blogs?', a: 'Yes, we maintain consistent brand voice across all blog content.'},
      {q: 'Do you provide blog content strategy?', a: 'Yes, we provide complete blog content strategy and planning.'}
    ]
  },

  'website-content': {
    title: 'Website Content',
    icon: 'fas fa-file-alt',
    description: 'Professional website content writing services including pages, product descriptions, and informational content.',
    features: [
      'Website Pages',
      'Product Descriptions',
      'Service Pages',
      'Informational Content'
    ],
    content: `
      <p>We provide professional website content writing services that create clear, compelling content for website pages, products, services, and informational sections.</p>
      
      <h3>Website Content Services</h3>
      <ul>
        <li><strong>Website Pages:</strong> Write content for website pages</li>
        <li><strong>Product Descriptions:</strong> Create product descriptions</li>
        <li><strong>Service Pages:</strong> Write service page content</li>
        <li><strong>Informational Content:</strong> Create informational content</li>
        <li><strong>Conversion Optimization:</strong> Optimize content for conversions</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Clear website communication</li>
        <li>Improved user understanding</li>
        <li>Higher conversion rates</li>
        <li>Professional website presentation</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Website Analysis', desc: 'Analyze website structure and content needs'},
      {step: 2, title: 'Content Planning', desc: 'Plan website content strategy'},
      {step: 3, title: 'Content Creation', desc: 'Create website content'},
      {step: 4, title: 'SEO Optimization', desc: 'Optimize content for SEO and conversions'},
      {step: 5, title: 'Integration Support', desc: 'Support content integration into website'}
    ],
    facts: [
      {icon: 'fas fa-pen', text: 'Content Writing'},
      {icon: 'fas fa-globe', text: 'Website Focus'},
      {icon: 'fas fa-shopping-cart', text: 'Conversion'},
      {icon: 'fas fa-users', text: 'User Focus'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Clarity', desc: 'Clear website communication'},
      {icon: 'fas fa-users', title: 'User Understanding', desc: 'Help users understand offerings'},
      {icon: 'fas fa-chart-line', title: 'Conversion', desc: 'Increase website conversions'},
      {icon: 'fas fa-search', title: 'SEO', desc: 'Improve search engine visibility'},
      {icon: 'fas fa-expand', title: 'Content Types', desc: 'Various website content types'},
      {icon: 'fas fa-bolt', title: 'Complete Content', desc: 'Complete website content creation'}
    ],
    faq: [
      {q: 'What website pages do you write content for?', a: 'We write for home pages, about pages, service pages, product pages, contact pages, and more.'},
      {q: 'Do you optimize website content for SEO?', a: 'Yes, we optimize website content for search engines and user experience.'},
      {q: 'Can you write for specific industries?', a: 'Yes, we write website content for various industries and business types.'},
      {q: 'Do you provide content for website redesigns?', a: 'Yes, we provide content for new websites and website redesigns.'}
    ]
  },

  'ebook-design': {
    title: 'E-Book Design',
    icon: 'fas fa-book',
    description: 'Professional e-book design services including layout, formatting, cover design, and interactive elements.',
    features: [
      'E-book Layout',
      'Cover Design',
      'Formatting',
      'Interactive Elements'
    ],
    content: `
      <p>We provide professional e-book design services that create visually appealing, readable e-books with proper layout, formatting, and design elements.</p>
      
      <h3>E-book Design Services</h3>
      <ul>
        <li><strong>E-book Layout:</strong> Design e-book layout and structure</li>
        <li><strong>Cover Design:</strong> Create e-book cover designs</li>
        <li><strong>Formatting:</strong> Format e-book for various platforms</li>
        <li><strong>Interactive Elements:</strong> Add interactive elements</li>
        <li><strong>Multi-format Preparation:</strong> Prepare for various e-book formats</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Professional e-book presentation</li>
        <li>Enhanced readability</li>
        <li>Platform compatibility</li>
        <li>Increased reader engagement</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Content Analysis', desc: 'Analyze e-book content and requirements'},
      {step: 2, title: 'Design Planning', desc: 'Plan e-book design approach'},
      {step: 3, title: 'Design Creation', desc: 'Create e-book design and layout'},
      {step: 4, title: 'Formatting', desc: 'Format for e-book platforms'},
      {step: 5, title: 'Multi-format Delivery', desc: 'Deliver in various e-book formats'}
    ],
    facts: [
      {icon: 'fas fa-book-open', text: 'E-book Design'},
      {icon: 'fas fa-paint-brush', text: 'Visual Design'},
      {icon: 'fas fa-tablet-alt', text: 'Digital Formatting'},
      {icon: 'fas fa-expand', text: 'Multi-format'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Visual Appeal', desc: 'Visually appealing e-book design'},
      {icon: 'fas fa-book-reader', title: 'Readability', desc: 'Enhanced readability and experience'},
      {icon: 'fas fa-tablet-alt', title: 'Compatibility', desc: 'Compatibility with e-book platforms'},
      {icon: 'fas fa-expand', title: 'Format Variety', desc: 'Various e-book formats'},
      {icon: 'fas fa-bolt', title: 'Professional Design', desc: 'Professional e-book design quality'},
      {icon: 'fas fa-shield-alt', title: 'Quality Assurance', desc: 'Quality e-book production'}
    ],
    faq: [
      {q: 'What e-book formats do you create?', a: 'We create EPUB, MOBI, PDF, and other e-book formats.'},
      {q: 'Do you design e-book covers?', a: 'Yes, we design professional e-book covers.'},
      {q: 'Can you add interactive elements to e-books?', a: 'Yes, we can add interactive elements like links, quizzes, and multimedia.'},
      {q: 'Do you handle e-book distribution setup?', a: 'Yes, we can assist with e-book distribution platform setup.'}
    ]
  },

  'report-design': {
    title: 'Report Design',
    icon: 'fas fa-file-alt',
    description: 'Professional report design services including layout, data visualization, branding, and print/digital preparation.',
    features: [
      'Report Layout',
      'Data Visualization',
      'Brand Integration',
      'Print/Digital Preparation'
    ],
    content: `
      <p>We provide professional report design services that create visually appealing, clear reports with proper layout, data visualization, and brand integration.</p>
      
      <h3>Report Design Services</h3>
      <ul>
        <li><strong>Report Layout:</strong> Design report layout and structure</li>
        <li><strong>Data Visualization:</strong> Create charts, graphs, and visualizations</li>
        <li><strong>Brand Integration:</strong> Integrate brand elements</li>
        <li><strong>Print Preparation:</strong> Prepare for printing</li>
        <li><strong>Digital Preparation:</strong> Prepare for digital distribution</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Professional report presentation</li>
        <li>Clear data communication</li>
        <li>Enhanced readability</li>
        <li>Brand-consistent reports</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Content Analysis', desc: 'Analyze report content and data'},
      {step: 2, title: 'Design Planning', desc: 'Plan report design approach'},
      {step: 3, title: 'Design Creation', desc: 'Create report design and layout'},
      {step: 4, title: 'Data Visualization', desc: 'Create data visualizations'},
      {step: 5, title: 'Final Preparation', desc: 'Prepare final report for distribution'}
    ],
    facts: [
      {icon: 'fas fa-chart-bar', text: 'Data Visualization'},
      {icon: 'fas fa-file-pdf', text: 'Report Design'},
      {icon: 'fas fa-paint-brush', text: 'Visual Design'},
      {icon: 'fas fa-expand', text: 'Format Variety'}
    ],
    benefits: [
      {icon: 'fas fa-eye', title: 'Professional Presentation', desc: 'Professional report presentation'},
      {icon: 'fas fa-chart-bar', title: 'Data Clarity', desc: 'Clear data communication and visualization'},
      {icon: 'fas fa-paint-brush', title: 'Brand Consistency', desc: 'Brand-consistent report design'},
      {icon: 'fas fa-expand', title: 'Format Options', desc: 'Various report formats and distributions'},
      {icon: 'fas fa-bolt', title: 'Quick Design', desc: 'Fast report design turnaround'},
      {icon: 'fas fa-shield-alt', title: 'Accuracy', desc: 'Accurate data representation'}
    ],
    faq: [
      {q: 'What types of reports do you design?', a: 'We design annual reports, business reports, research reports, financial reports, and more.'},
      {q: 'Do you create data visualizations from raw data?', a: 'Yes, we create charts, graphs, and visualizations from raw data.'},
      {q: 'Can you design reports for specific industries?', a: 'Yes, we design reports for various industries with appropriate styling.'},
      {q: 'Do you provide report templates?', a: 'Yes, we can create report templates for ongoing use.'}
    ]
  },

  'creative-concepts': {
    title: 'Creative Concepts',
    icon: 'fas fa-lightbulb',
    description: 'Professional creative concept development services including ideas, themes, and creative directions for campaigns and projects.',
    features: [
      'Idea Generation',
      'Theme Development',
      'Creative Direction',
      'Concept Presentation'
    ],
    content: `
      <p>We provide professional creative concept development services that generate innovative ideas, develop compelling themes, and provide creative direction for campaigns and projects.</p>
      
      <h3>Creative Concept Services</h3>
      <ul>
        <li><strong>Idea Generation:</strong> Generate creative ideas and concepts</li>
        <li><strong>Theme Development:</strong> Develop themes and creative approaches</li>
        <li><strong>Creative Direction:</strong> Provide creative direction</li>
        <li><strong>Concept Presentation:</strong> Present concepts effectively</li>
        <li><strong>Brainstorming Facilitation:</strong> Facilitate creative brainstorming</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Innovative ideas and concepts</li>
        <li>Creative campaign approaches</li>
        <li>Fresh perspectives</li>
        <li>Effective creative direction</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Brief Understanding', desc: 'Understand project brief and requirements'},
      {step: 2, title: 'Research & Inspiration', desc: 'Research and gather inspiration'},
      {step: 3, title: 'Concept Development', desc: 'Develop creative concepts'},
      {step: 4, title: 'Refinement', desc: 'Refine and develop concepts further'},
      {step: 5, title: 'Presentation', desc: 'Present concepts effectively'}
    ],
    facts: [
      {icon: 'fas fa-lightbulb', text: 'Creativity'},
      {icon: 'fas fa-brain', text: 'Ideation'},
      {icon: 'fas fa-paint-brush', text: 'Creative Direction'},
      {icon: 'fas fa-expand', text: 'Innovation'}
    ],
    benefits: [
      {icon: 'fas fa-lightbulb', title: 'Innovation', desc: 'Innovative ideas and concepts'},
      {icon: 'fas fa-paint-brush', title: 'Creative Direction', desc: 'Clear creative direction'},
      {icon: 'fas fa-eye', title: 'Fresh Perspectives', desc: 'Fresh creative perspectives'},
      {icon: 'fas fa-expand', title: 'Concept Variety', desc: 'Variety of creative concepts'},
      {icon: 'fas fa-bolt', title: 'Quick Ideation', desc: 'Fast concept development'},
      {icon: 'fas fa-shield-alt', title: 'Relevance', desc: 'Relevant and appropriate concepts'}
    ],
    faq: [
      {q: 'What types of projects do you develop concepts for?', a: 'We develop concepts for marketing campaigns, branding, advertising, product launches, events, and more.'},
      {q: 'How many concepts do you typically provide?', a: 'We typically provide 3-5 developed concepts for consideration.'},
      {q: 'Do you include visual mockups with concepts?', a: 'Yes, we often include visual mockups or mood boards with concepts.'},
      {q: 'Can you develop concepts for specific target audiences?', a: 'Yes, we tailor concepts to specific target audiences and goals.'}
    ]
  },

  'idea-development': {
    title: 'Idea Development',
    icon: 'fas fa-brain',
    description: 'Professional idea development services that take initial concepts and develop them into fully-realized plans and strategies.',
    features: [
      'Concept Development',
      'Strategy Formulation',
      'Implementation Planning',
      'Feasibility Analysis'
    ],
    content: `
      <p>We provide professional idea development services that take initial concepts and develop them into fully-realized plans, strategies, and actionable implementations.</p>
      
      <h3>Idea Development Services</h3>
      <ul>
        <li><strong>Concept Development:</strong> Develop concepts into detailed plans</li>
        <li><strong>Strategy Formulation:</strong> Formulate strategies from ideas</li>
        <li><strong>Implementation Planning:</strong> Plan implementation of ideas</li>
        <li><strong>Feasibility Analysis:</strong> Analyze idea feasibility</li>
        <li><strong>Roadmap Creation:</strong> Create development roadmaps</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Fully-developed ideas and plans</li>
        <li>Actionable strategies</li>
        <li>Feasibility assessment</li>
        <li>Clear implementation paths</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Idea Analysis', desc: 'Analyze initial ideas and concepts'},
      {step: 2, title: 'Development Planning', desc: 'Plan idea development approach'},
      {step: 3, title: 'Strategy Development', desc: 'Develop strategies and plans'},
      {step: 4, title: 'Feasibility Assessment', desc: 'Assess feasibility and requirements'},
      {step: 5, title: 'Implementation Roadmap', desc: 'Create implementation roadmap'}
    ],
    facts: [
      {icon: 'fas fa-cogs', text: 'Development'},
      {icon: 'fas fa-road', text: 'Planning'},
      {icon: 'fas fa-check-circle', text: 'Feasibility'},
      {icon: 'fas fa-expand', text: 'Strategy'}
    ],
    benefits: [
      {icon: 'fas fa-cogs', title: 'Development', desc: 'Develop ideas into actionable plans'},
      {icon: 'fas fa-road', title: 'Clarity', desc: 'Clear development paths and strategies'},
      {icon: 'fas fa-check-circle', title: 'Feasibility', desc: 'Feasibility assessment and planning'},
      {icon: 'fas fa-expand', title: 'Implementation', desc: 'Clear implementation planning'},
      {icon: 'fas fa-bolt', title: 'Efficient Development', desc: 'Efficient idea development process'},
      {icon: 'fas fa-shield-alt', title: 'Risk Assessment', desc: 'Risk assessment and mitigation'}
    ],
    faq: [
      {q: 'What types of ideas do you develop?', a: 'We develop business ideas, product ideas, marketing ideas, process ideas, and various other concepts.'},
      {q: 'Do you include market research in idea development?', a: 'Yes, we often include market research and competitive analysis.'},
      {q: 'Can you develop ideas for specific industries?', a: 'Yes, we develop ideas with industry-specific considerations.'},
      {q: 'Do you provide financial projections for business ideas?', a: 'Yes, we can include financial projections and business modeling.'}
    ]
  },

  'content-editing': {
    title: 'Content Editing',
    icon: 'fas fa-edit',
    description: 'Professional content editing services including proofreading, copy editing, structural editing, and content refinement.',
    features: [
      'Proofreading',
      'Copy Editing',
      'Structural Editing',
      'Content Refinement'
    ],
    content: `
      <p>We provide professional content editing services that improve content quality through proofreading, copy editing, structural editing, and overall content refinement.</p>
      
      <h3>Content Editing Services</h3>
      <ul>
        <li><strong>Proofreading:</strong> Check for errors and consistency</li>
        <li><strong>Copy Editing:</strong> Improve clarity and style</li>
        <li><strong>Structural Editing:</strong> Improve content structure and flow</li>
        <li><strong>Content Refinement:</strong> Refine and improve content</li>
        <li><strong>Style Guide Adherence:</strong> Ensure style guide compliance</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Error-free content</li>
        <li>Improved clarity and readability</li>
        <li>Better content structure</li>
        <li>Professional content quality</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Content Assessment', desc: 'Assess content and editing needs'},
      {step: 2, title: 'Editing Approach', desc: 'Determine appropriate editing approach'},
      {step: 3, title: 'Editing Execution', desc: 'Execute editing improvements'},
      {step: 4, title: 'Review', desc: 'Review edited content'},
      {step: 5, title: 'Final Polish', desc: 'Final polish and delivery'}
    ],
    facts: [
      {icon: 'fas fa-spell-check', text: 'Proofreading'},
      {icon: 'fas fa-edit', text: 'Editing'},
      {icon: 'fas fa-book', text: 'Content Quality'},
      {icon: 'fas fa-expand', text: 'Editing Types'}
    ],
    benefits: [
      {icon: 'fas fa-check-circle', title: 'Accuracy', desc: 'Error-free, accurate content'},
      {icon: 'fas fa-book-reader', title: 'Readability', desc: 'Improved readability and clarity'},
      {icon: 'fas fa-stream', title: 'Structure', desc: 'Better content structure and flow'},
      {icon: 'fas fa-expand', title: 'Quality', desc: 'Professional content quality'},
      {icon: 'fas fa-bolt', title: 'Quick Editing', desc: 'Fast editing turnaround'},
      {icon: 'fas fa-shield-alt', title: 'Consistency', desc: 'Consistent style and tone'}
    ],
    faq: [
      {q: 'What types of content do you edit?', a: 'We edit website content, blog posts, articles, reports, marketing materials, books, and various other content.'},
      {q: 'Do you follow specific style guides?', a: 'Yes, we follow AP, Chicago, MLA, or custom style guides as required.'},
      {q: 'Can you edit for specific target audiences?', a: 'Yes, we tailor editing to specific target audiences and purposes.'},
      {q: 'Do you provide tracked changes and comments?', a: 'Yes, we provide tracked changes and editorial comments.'}
    ]
  },

  'proofreading': {
    title: 'Proofreading',
    icon: 'fas fa-spell-check',
    description: 'Professional proofreading services that check content for errors in spelling, grammar, punctuation, and consistency.',
    features: [
      'Error Checking',
      'Consistency Review',
      'Formatting Check',
      'Final Review'
    ],
    content: `
      <p>We provide professional proofreading services that thoroughly check content for errors in spelling, grammar, punctuation, consistency, and formatting.</p>
      
      <h3>Proofreading Services</h3>
      <ul>
        <li><strong>Error Checking:</strong> Check for spelling and grammar errors</li>
        <li><strong>Consistency Review:</strong> Review for consistency</li>
        <li><strong>Formatting Check:</strong> Check formatting and layout</li>
        <li><strong>Final Review:</strong> Final comprehensive review</li>
        <li><strong>Style Compliance:</strong> Ensure style guide compliance</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Error-free content</li>
        <li>Professional presentation</li>
        <li>Consistent formatting</li>
        <li>Quality assurance</li>
      </ul>
    `,
    process: [
      {step: 1, title: 'Initial Review', desc: 'Initial content review and assessment'},
      {step: 2, title: 'Detailed Proofreading', desc: 'Detailed proofreading for errors'},
      {step: 3, title: 'Consistency Check', desc: 'Check for consistency throughout'},
      {step: 4, title: 'Formatting Review', desc: 'Review formatting and layout'},
      {step: 5, title: 'Final Check', desc: 'Final comprehensive check'}
    ],
    facts: [
      {icon: 'fas fa-search', text: 'Error Checking'},
      {icon: 'fas fa-check-double', text: 'Quality Assurance'},
      {icon: 'fas fa-file-alt', text: 'Document Review'},
      {icon: 'fas fa-expand', text: 'Thorough Review'}
    ],
    benefits: [
      {icon: 'fas fa-check-circle', title: 'Accuracy', desc: 'Error-free, accurate content'},
      {icon: 'fas fa-eye', title: 'Professionalism', desc: 'Professional content presentation'},
      {icon: 'fas fa-stream', title: 'Consistency', desc: 'Consistent throughout document'},
      {icon: 'fas fa-expand', title: 'Quality', desc: 'Quality assurance for content'},
      {icon: 'fas fa-bolt', title: 'Quick Proofreading', desc: 'Fast proofreading turnaround'},
      {icon: 'fas fa-shield-alt', title: 'Reliability', desc: 'Reliable proofreading service'}
    ],
    faq: [
      {q: 'What\'s the difference between proofreading and editing?', a: 'Proofreading focuses on errors and consistency, while editing involves improving content, structure, and style.'},
      {q: 'Do you proofread for specific style guides?', a: 'Yes, we proofread according to specific style guide requirements.'},
      {q: 'Can you proofread documents in specific formats?', a: 'Yes, we proofread documents in Word, PDF, Google Docs, and other formats.'},
      {q: 'Do you provide proofreading certificates?', a: 'Yes, we can provide proofreading completion certificates if required.'}
    ]
  }
};

    // Get service parameter from URL
    function getServiceFromURL() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('service') || 'ai-agents';
    }

    // Load service data
    function loadServiceData(serviceKey) {
      const service = servicesData[serviceKey] || servicesData['ai-agents'];
      
      // Update page title
      document.title = `${service.title} | ByondX Technologies`;
      
      // Update hero section
      document.getElementById('service-title').textContent = service.title;
      document.getElementById('service-description').textContent = service.description;
      document.getElementById('service-icon').innerHTML = `<i class="${service.icon}"></i>`;
      
      // Update features
      const featuresContainer = document.getElementById('service-features');
      featuresContainer.innerHTML = service.features.map(feature => 
        `<div class="flex items-center gap-2">
          <i class="fas fa-check text-emerald-500"></i>
          <span class="text-gray-700">${feature}</span>
        </div>`
      ).join('');
      
      // Update content
      document.getElementById('service-content').innerHTML = service.content;
      
      // Update process
      const processContainer = document.getElementById('service-process');
      processContainer.innerHTML = service.process.map(step => `
        <div class="process-step">
          <div class="process-step-number">${step.step}</div>
          <h4 class="text-xl font-bold text-gray-900 mb-2">${step.title}</h4>
          <p class="text-gray-600">${step.desc}</p>
        </div>
      `).join('');
      
      // Update facts
      const factsContainer = document.getElementById('service-facts');
      factsContainer.innerHTML = service.facts.map(fact => `
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
            <i class="${fact.icon} text-blue-600"></i>
          </div>
          <span class="font-medium">${fact.text}</span>
        </div>
      `).join('');
      
      // Update benefits
      const benefitsContainer = document.getElementById('service-benefits');
      benefitsContainer.innerHTML = service.benefits.map(benefit => `
        <div class="service-feature-card">
          <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
            <i class="${benefit.icon} text-blue-600 text-xl"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">${benefit.title}</h3>
          <p class="text-gray-600">${benefit.desc}</p>
        </div>
      `).join('');
      
      // Update FAQ
      const faqContainer = document.getElementById('service-faq');
      faqContainer.innerHTML = service.faq.map((item, index) => `
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <button class="faq-question w-full px-6 py-4 text-left flex justify-between items-center">
            <span class="font-medium text-gray-900">${item.q}</span>
            <i class="fas fa-chevron-down text-blue-600"></i>
          </button>
          <div class="faq-answer px-6 pb-4 hidden">
            <p class="text-gray-600">${item.a}</p>
          </div>
        </div>
      `).join('');
      
      // Add FAQ toggle functionality
      document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', function() {
          const answer = this.nextElementSibling;
          const icon = this.querySelector('i');
          
          answer.classList.toggle('hidden');
          icon.classList.toggle('fa-chevron-down');
          icon.classList.toggle('fa-chevron-up');
        });
      });
    }

    // Initialize service page
    const serviceKey = getServiceFromURL();
    loadServiceData(serviceKey);

    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
  });
// </script>