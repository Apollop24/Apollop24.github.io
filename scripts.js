
  // Smooth scroll accounting for dynamic header height
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetID = this.getAttribute('href');
      const target = document.querySelector(targetID);

      if (target) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;

        // Get actual position and subtract header height
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });





        // Project modal functionality
        function openModal(projectId) {
            const modal = document.getElementById('projectModal');
            const modalContent = document.getElementById('modalContent');
            
            const projectDetails = {
                project1: {
                    title: "Interactive Business Dashboard",
                    challenge: "A retail client needed to monitor sales performance across multiple locations while identifying emerging trends and opportunities for growth.",
                    approach: [
                        "Integrated disparate data sources (POS systems, inventory management, and CRM data)",
                        "Designed an interactive dashboard with real-time KPI tracking capabilities",
                        "Implemented data refresh protocols and automated reporting workflows",
                        "Created drill-down functionality for granular analysis of performance metrics"
                    ],
                    technologies: ["Power BI", "SQL", "Excel", "Python"],
                    outcome: "The dashboard provided immediate visibility into underperforming product categories and seasonal sales patterns, enabling strategic inventory adjustments that increased quarterly revenue by 12%. The automated reporting reduced manual data processing time by approximately 15 hours weekly."
                },
                project2: {
                    title: "Healthcare Analytics Dashboard",
                    challenge: "A healthcare provider needed to visualize performance metrics across departments to identify efficiency opportunities and improve patient care.",
                    approach: [
                        "Conducted stakeholder interviews to define key metrics and requirements",
                        "Designed and implemented a comprehensive dashboard system",
                        "Integrated data from electronic health records, scheduling systems, and financial databases",
                        "Created customized visualizations for different departmental needs"
                    ],
                    technologies: ["Tableau", "SQL", "Python", "Power BI"],
                    outcome: "The unified dashboard eliminated siloed reporting and provided administrators with a holistic view of operations. This led to a 22% reduction in patient wait times and helped identify scheduling inefficiencies that, when addressed, increased facility utilization by 17%."
                },
                project3: {
                    title: "Bike Rental Demand Forecasting",
                    challenge: "A bike-sharing company needed to understand how weather conditions affect rental patterns to optimize fleet distribution and marketing strategies.",
                    approach: [
                        "Merged historical rental data with weather station records",
                        "Performed exploratory data analysis to identify initial patterns",
                        "Developed multiple regression models to quantify relationships",
                        "Conducted diagnostic testing and model validation"
                    ],
                    technologies: ["R", "ggplot2", "SPSS"],
                    outcome: "The analysis revealed that temperature had a strong positive correlation with rental numbers (R² = 0.78), while humidity showed a moderate negative correlation. These insights allowed the client to implement weather-based dynamic pricing and targeted marketing campaigns, resulting in a 23% increase in rental utilization during previously low-demand periods."
                },
                project4: {
                    title: "Time Series Forecasting",
                    challenge: "A client needed reliable forecasts of key performance indicators to support strategic planning and resource allocation.",
                    approach: [
                        "Cleaned and transformed historical time series data",
                        "Tested for seasonality, trends, and cyclical patterns",
                        "Applied appropriate forecasting models (ARIMA, exponential smoothing)",
                        "Validated models using out-of-sample testing"
                    ],
                    technologies: ["R", "Python", "statsmodels", "Excel"],
                    outcome: "The forecasting model achieved an accuracy rate of approximately 90% for short-term predictions, enabling the client to optimize inventory management and reduce stockout incidents by 34%. The model's seasonal decomposition also revealed previously unrecognized patterns in customer behavior."
                },
                project5: {
                    title: "Bayesian Amazon ASIN Forecasting System",
                    challenge: "A global e-commerce client needed to forecast Amazon review counts, star ratings, and revenue across thousands of ASINs, accounting for complex interdependencies, seasonal trends, and algorithmic changes.",
                    approach: [
                        "Implemented hierarchical Bayesian models using PyMC and JAX for scalable probabilistic inference across 50K+ ASINs",
                        "Designed automated feature discovery pipeline identifying weekend effects, seasonal patterns, and Amazon algorithm changes",
                        "Developed Poisson-Gamma conjugate priors for review count modeling with dynamic rate parameters",
                        "Created sophisticated pooling mechanisms using partial pooling for cross-ASIN information sharing",
                        "Integrated Amazon-specific factors: Best Seller Rank fluctuations, A9 algorithm updates, and promotional calendar effects",
                        "Implemented variational inference with normalizing flows for complex posterior approximations",
                        "Built real-time model adaptation system responding to Amazon's algorithmic changes and market shifts"
                    ],
                    technologies: ["PyMC", "JAX", "NumPyro", "TensorFlow Probability", "Python", "Apache Spark", "PostgreSQL", "Redis"],
                    outcome: "The system achieved a 34% improvement in forecast accuracy over traditional time series methods, enabling clients to optimize inventory allocation and pricing strategies. Revenue optimization reached $2.3M across managed ASINs, while automated insights reduced manual analysis time by 89%. The hierarchical modeling approach successfully captured Amazon's complex ecosystem dynamics, including cross-category spillover effects and algorithm-driven visibility changes."
                },
                project6: {
                    title: "Multimodal LLM Intelligence Platform",
                    challenge: "An enterprise client required an AI system capable of processing multimodal inputs (text, images, audio, video) with contextual reasoning, advanced retrieval-augmented generation (RAG), and real-time adaptation to evolving business needs.",
                    approach: [
                        "Architected a multimodal transformer pipeline combining vision encoders, language models, and cross-attention mechanisms",
                        "Implemented advanced RAG system with hierarchical vector databases and semantic chunking strategies",
                        "Developed custom attention mechanisms for multimodal fusion and cross-domain reasoning capabilities",
                        "Created dynamic prompt engineering system with in-context learning and few-shot adaptation",
                        "Built distributed inference system with model parallelization across multiple GPUs using DeepSpeed",
                        "Implemented continuous learning framework with human feedback integration and model fine-tuning",
                        "Designed real-time knowledge graph construction and updating mechanisms for contextual awareness",
                        "Integrated reinforcement learning from human feedback (RLHF) for output optimization"
                    ],
                    technologies: ["PyTorch", "Transformers", "LangChain", "Chroma DB", "FAISS", "CUDA", "DeepSpeed", "Weights & Biases", "Docker"],
                    outcome: "The platform transformed enterprise decision-making processes, reducing analysis time by 67% while maintaining 94% accuracy on complex reasoning tasks. Implementation led to a 45% reduction in operational costs through automated insights generation. The system successfully processed 100K+ multimodal queries daily, with average response times under 2 seconds. Advanced RAG capabilities enabled contextual reasoning across 50+ data sources, significantly improving strategic planning and operational efficiency."
                }
            };

            const project = projectDetails[projectId];
            
            modalContent.innerHTML = `
                <h2>${project.title}</h2>
                <div style="margin: 2rem 0;">
                    <h3 style="color: #14a800; margin-bottom: 1rem;">Challenge</h3>
                    <p style="line-height: 1.6; margin-bottom: 2rem;">${project.challenge}</p>
                    
                    <h3 style="color: #14a800; margin-bottom: 1rem;">Approach</h3>
                    <ul style="line-height: 1.6; margin-bottom: 2rem; padding-left: 2rem;">
                        ${project.approach.map(item => `<li style="margin-bottom: 0.5rem;">${item}</li>`).join('')}
                    </ul>
                    
                    <h3 style="color: #14a800; margin-bottom: 1rem;">Technologies Used</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
                        ${project.technologies.map(tech => `<span style="background: #14a800; color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">${tech}</span>`).join('')}
                    </div>
                    
                    <h3 style="color: #14a800; margin-bottom: 1rem;">Outcome</h3>
                    <div style="background: #d4edda; color: #155724; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #14a800; line-height: 1.6;">
                        ${project.outcome}
                    </div>
                </div>
            `;
            
            modal.style.display = 'block';
        }

        function closeModal() {
            document.getElementById('projectModal').style.display = 'none';
        }

        // Close modal when clicking outside of it
        window.onclick = function(event) {
            const modal = document.getElementById('projectModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }

        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Counter animation for stats
        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.textContent);
                const increment = target / 100;
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    counter.textContent = Math.floor(current) + (counter.textContent.includes('+') ? '+' : '') + (counter.textContent.includes('%') ? '%' : '') + (counter.textContent.includes('.') ? '.0' : '');
                }, 20);
            });
        }

        // Trigger counter animation when stats section is visible
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const statsSection = document.querySelector('.stats');
        if (statsSection) {
            statsObserver.observe(statsSection);
        }

        // Add active navigation highlighting
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Add typing effect to hero title
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            
            type();
        }

        // Initialize typing effect after page load
        window.addEventListener('load', () => {
            const heroTitle = document.querySelector('.hero-text h1');
            if (heroTitle) {
                typeWriter(heroTitle, 'Kibet Philip', 150);
            }
        });

        // Add parallax effect to hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroSection = document.querySelector('.hero');
            if (heroSection) {
                heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // Add floating animation to skill tags
        document.querySelectorAll('.skill-tag').forEach((tag, index) => {
            tag.style.animationDelay = `${index * 0.1}s`;
            tag.style.animation = 'float 3s ease-in-out infinite';
        });

        // Add CSS for floating animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-5px); }
            }
            
            .nav-links a.active {
                color: #14a800;
                font-weight: bold;
            }
            
            .skill-tag {
                transition: all 0.3s ease;
            }
            
            .skill-tag:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(20, 168, 0, 0.3);
            }
            
            .project-card {
                position: relative;
                overflow: hidden;
            }
            
            .project-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                transition: left 0.5s ease;
            }
            
            .project-card:hover::before {
                left: 100%;
            }
            
            .testimonial-card {
                transition: all 0.3s ease;
            }
            
            .testimonial-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }
            
            .contact-item {
                transition: all 0.3s ease;
            }
            
            .contact-item:hover {
                transform: translateY(-3px);
            }
            
            .contact-item:hover .contact-icon {
                transform: rotate(360deg);
                transition: transform 0.5s ease;
            }
        `;
        document.head.appendChild(style);

        // Add smooth reveal animation for sections
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.skill-category, .project-card, .testimonial-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            revealObserver.observe(el);
        });

        // Add revealed class styles
        const revealStyle = document.createElement('style');
        revealStyle.textContent = `
            .revealed {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(revealStyle);
    