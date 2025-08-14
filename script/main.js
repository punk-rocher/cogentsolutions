// Mouse trailer (follower) effect
      const trailer = document.createElement("div");
      trailer.id = "mouse-trailer";
      document.body.appendChild(trailer);

      const trailerStyle = trailer.style;
      trailerStyle.position = "fixed";
      trailerStyle.top = "0";
      trailerStyle.left = "0";
      trailerStyle.width = "18px";
      trailerStyle.height = "18px";
      trailerStyle.background = "#ffe500"; // yellow
      trailerStyle.borderRadius = "50%";
      trailerStyle.pointerEvents = "none";
      trailerStyle.zIndex = "9999";
      trailerStyle.transform = "translate(-50%, -50%)";
      trailerStyle.transition = "background 0.2s";
      trailerStyle.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";

      let mouseX = window.innerWidth / 2,
        mouseY = window.innerHeight / 2;
      let trailerX = mouseX,
        trailerY = mouseY;

      window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      function animateTrailer() {
        // Lerp for smooth trailing
        trailerX += (mouseX - trailerX) * 0.18;
        trailerY += (mouseY - trailerY) * 0.18;
        trailerStyle.left = trailerX + "px";
        trailerStyle.top = trailerY + "px";
        requestAnimationFrame(animateTrailer);
      }
      animateTrailer();
// Mouse trailer (follower) effect





//our speakers


            const speakers = [
        {
          name: "Faisal Alghefari",
          title: "Chief Compliance Officer — Banking Sector, KSA",
          img: "https://cogentsolutions.ae/events/upcoming-physical-events/saudi_arabia_financial_crime_compliance/assets//img//speakers//sp1.jpg",
          desc: "Faisal AlGhefari is a distinguished Chief Compliance Officer with more than 16 years of experience in Compliance, AML, Enforcement, and Internal Controls at Saudi and international Banks. He excels in Regulatory Frameworks, Compliance, and Governance, and has played a key role in various digital transformation projects within the compliance domain. His certifications in Compliance, Governance, and AML underscore his extensive expertise.",
        },
        {
          name: "Gordon Berrie",
          title: "MENA Regional Head",
          img: "https://cogentsolutions.ae/events/upcoming-physical-events/saudi_arabia_financial_crime_compliance/assets//img//speakers//sp2.jpg",
          desc: "Gordon Berrie is Napier AI's Head of Middle East Region. Previously Head of Professional Services & Customer Success MENA at Fenergo and Director at PwC Middle East, Gordon has 20 years of experience leading agile teams in various industries, and specialises in Client Lifecycle Management (Onboarding, KYC, AML, Offboarding), software development and delivery, and program and project management in large scope complex initiatives.",
        },
        {
          name: "Nour Jamil",
          title: "Senior Solutions Consultant",
          img: "https://cogentsolutions.ae/events/upcoming-physical-events/saudi_arabia_financial_crime_compliance/assets//img//speakers/sp3.jpg",
          desc: "Nour Jamil is a Senior Client Solutions Consultant at Napier, managing the MENA region. With extensive experience in AML, financial crime compliance, and regulatory technology, he specialises in helping financial institutions enhance their compliance frameworks through AI-driven solutions. Nour has worked closely with banks, fintechs, and regulators to implement innovative risk-based approaches, optimise transaction monitoring, and streamline client screening processes.",
        },
        {
          name: "Abdulrahman Aladel",
          title: "SVP - Head of Anti-Financial Crimes Compliance — Riyad Bank",
          img: "https://cogentsolutions.ae/events/upcoming-physical-events/saudi_arabia_financial_crime_compliance/assets//img//speakers/sp4.jpg",
          desc: "A seasoned Financial Crime Compliance Professional with over 18 years of experience in the banking and financial services industry. Currently serves as Head of Anti-Financial Crime Compliance at Riyad Bank. Previously held the position of Chief Compliance Officer at American Express for over 9 years. Extensive experience as CCO, MLRO, and in other senior Compliance and AML roles at multinational and local institutions and banks. Holds a bachelor’s degree in business administration and has completed post-graduate studies at INSEAD.",
        },
        {
          name: "Mishal Al Ismail",
          title: "Head of Compliance & AML — Albilad Capital",
          img: "https://cogentsolutions.ae/events/upcoming-physical-events/saudi_arabia_financial_crime_compliance/assets//img//speakers/sp6.jpg",
          desc: "Mishal Al Ismail currently holds the esteemed position of Chairman of the Governance Capital Market Institution Committee while serving as the Head of Compliance & AML at Albilad Capital. With over 20 years of experience, he has demonstrated exemplary leadership in both Finance and Administration. He holds a bachelor’s degree in Business Administration (Finance Management) from King Saud University, a postgraduate diploma in Marketing Management (equivalent to a master’s) from the Institute of Public Administration, and has pursued advanced studies at Henley Business School, University of Reading, UK. His credentials include professional diplomas in regulation, compliance, Anti-Money Laundering, and Corporate Governance, along with all requisite CMA professional certificates.",
        },
        {
          name: "Abdulaziz Alanezi",
          title: "Head of Compliance & AML — Leading International Bank in KSA",
          img: "https://cogentsolutions.ae/events/upcoming-physical-events/saudi_arabia_financial_crime_compliance/assets//img//speakers/sp7.jpg",
          desc: "Abdulaziz AlAnezi is a seasoned compliance and anti-money laundering (AML) leader with over 12 years of experience in the banking and financial services sector in both local and international banks. Currently serving as the Head of Compliance and AML Department in the banking sector, he has spearheaded the development and implementation of comprehensive compliance programs, ensuring adherence to regulatory requirements and fostering a culture of ethical behavior across the organization. He holds a bachelor’s degree in Economics from Leeds Becket University and numerous professional certifications in compliance, risk management, and financial analysis.",
        },
        {
          name: "Manar Saif Al-Assaf",
          title: "Head of Compliance — Emirates NBD",
          img: "https://cogentsolutions.ae/events/upcoming-physical-events/saudi_arabia_financial_crime_compliance/assets/img/speakers/sp8.jpg",
          desc: "Manar holds a bachelor’s degree in accounting with a professional license in compliance and AML from CMA, ACAMS, and certificates in Governance GRCP & GCRCA, along with leadership programs from Harvard, INSEAD, and IESCE. With around 19 years of experience in Internal Audit, Compliance, and AML, she is a role model for women leaders in GRC. She was nominated as one of the Women Leaders for the Kingdom Vision 2030 and served as a G20/B20 Integrity and Compliance Task Force Member in 2020. In 2023, she was appointed by the Central Bank as Chairman of the Anti-Financial Crime and Money Laundering Committee.",
        },
        {
          name: "Khushnood Khan",
          title: "Financial Crime Leader — Deloitte Middle East",
          img: "https://randomuser.me/api/portraits/men/38.jpg",
          desc: "Khush is the Financial Crime Leader for Deloitte Middle East and focuses on supporting financial institutions to be regulatory compliant. With over 20 years of experience working extensively with banks and regulators across the GCC and Europe, his areas of expertise include FCC Strategy, large-scale transformation programs, and regulatory reviews. Khush developed and leads Deloitte’s Fincrime Technology Lab.",
        },
      ];

      function showSpeakerModal(idx) {
        const s = speakers[idx];
        document.getElementById("modal-img").src = s.img;
        document.getElementById("modal-img").alt = s.name;
        document.getElementById("modal-name").textContent = s.name;
        document.getElementById("modal-title").textContent = s.title;
        document.getElementById("modal-desc").textContent = s.desc;
        document.getElementById("speaker-modal").style.display = "flex";
      }
      function closeSpeakerModal() {
        document.getElementById("speaker-modal").style.display = "none";
      }
      document
        .getElementById("speaker-modal")
        .addEventListener("click", function (e) {
          if (e.target === this) closeSpeakerModal();
        });

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS (Animate On Scroll) first
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
      delay: 0,
    });
  }

  // Initialize existing functionality
  switchLanguage("en");

  // Initialize Timeline Agent
  const timelineAgent = new TimelineAgent();

  // Initialize Registration Form Agent
  const registrationAgent = new RegistrationFormAgent();

  // Initialize Back to Top Agent
  const backToTopAgent = new BackToTopAgent();

  // Expose agents globally for debugging
  window.timelineAgent = timelineAgent;
  window.registrationAgent = registrationAgent;
  window.backToTopAgent = backToTopAgent;

  // Add scroll-triggered timeline progress indicator
  const timelineSection = document.querySelector(".table-section");
  if (timelineSection) {
    const progressBar = document.createElement("div");
    progressBar.className = "timeline-progress";
    progressBar.style.cssText = `
              position: fixed;
              top: 0;
              left: 0;
              width: 0%;
              height: 4px;
              background: linear-gradient(90deg, var(--primary-yellow), var(--accent-400));
              z-index: 10000;
              transition: width 0.3s ease;
              box-shadow: 0 2px 10px rgba(255, 229, 0, 0.5);
            `;
    document.body.appendChild(progressBar);

    window.addEventListener("scroll", () => {
      const rect = timelineSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.max(
          0,
          Math.min(
            100,
            ((windowHeight - rect.top) / (rect.height + windowHeight)) * 100
          )
        );
        progressBar.style.width = progress + "%";
      } else if (rect.top >= windowHeight) {
        progressBar.style.width = "0%";
      } else if (rect.bottom <= 0) {
        progressBar.style.width = "100%";
      }
    });
  }

  // Add floating particle effects
  addFloatingParticles();

  // Add section entrance animations
  addSectionEntranceAnimations();

  // Add hover effects
  addHoverEffects();
});

// Timeline Animation Agent
class TimelineAgent {
  constructor() {
    this.timelineItems = document.querySelectorAll(".timeline__item");
    this.observer = null;
    this.init();
  }

  init() {
    this.setupIntersectionObserver();
    this.addHoverEffects();
  }

  setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add staggered animation delay
            setTimeout(() => {
              entry.target.classList.add("animate");
            }, index * 200); // 200ms delay between each item

            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    this.timelineItems.forEach((item) => {
      this.observer.observe(item);
    });
  }

  addHoverEffects() {
    this.timelineItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        this.enhanceItem(item);
        this.addRippleEffect(item);
      });

      item.addEventListener("mouseleave", () => {
        this.resetItem(item);
      });

      // Add click effect for better interactivity
      item.addEventListener("click", () => {
        this.addClickEffect(item);
      });
    });
  }

  addRippleEffect(item) {
    const ripple = document.createElement("div");
    ripple.style.cssText = `
              position: absolute;
              top: 50%;
              left: 50%;
              width: 0;
              height: 0;
              background: rgba(255, 229, 0, 0.3);
              border-radius: 50%;
              transform: translate(-50%, -50%);
              pointer-events: none;
              z-index: 1;
              animation: ripple 0.6s ease-out;
            `;

    item.style.position = "relative";
    item.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  addClickEffect(item) {
    item.style.transform = "scale(0.98)";
    setTimeout(() => {
      item.style.transform = "";
    }, 150);
  }

  enhanceItem(item) {
    item.style.transform = "translateY(-5px) scale(1.02)";
    item.style.boxShadow = "0 8px 32px rgba(255, 229, 0, 0.4)";
    item.style.borderColor = "var(--primary-yellow)";
  }

  resetItem(item) {
    item.style.transform = "";
    item.style.boxShadow = "";
    item.style.borderColor = "";
  }

  // Method to reset all animations (for testing)
  resetAll() {
    this.timelineItems.forEach((item) => {
      item.classList.remove("animate");
    });
  }

  // Method to replay animations
  replay() {
    this.resetAll();
    this.timelineItems.forEach((item) => {
      this.observer.observe(item);
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS (Animate On Scroll) first
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
      delay: 0,
    });
  }

  // Initialize existing functionality
  switchLanguage("en");

  // Initialize Timeline Agent
  const timelineAgent = new TimelineAgent();

  // Initialize Registration Form Agent
  const registrationAgent = new RegistrationFormAgent();

  // Initialize Back to Top Agent
  const backToTopAgent = new BackToTopAgent();

  // Expose agents globally for debugging
  window.timelineAgent = timelineAgent;
  window.registrationAgent = registrationAgent;
  window.backToTopAgent = backToTopAgent;

  // Add scroll-triggered timeline progress indicator
  const timelineSection = document.querySelector(".table-section");
  if (timelineSection) {
    const progressBar = document.createElement("div");
    progressBar.className = "timeline-progress";
    progressBar.style.cssText = `
              position: fixed;
              top: 0;
              left: 0;
              width: 0%;
              height: 4px;
              background: linear-gradient(90deg, var(--primary-yellow), var(--accent-400));
              z-index: 10000;
              transition: width 0.3s ease;
              box-shadow: 0 2px 10px rgba(255, 229, 0, 0.5);
            `;
    document.body.appendChild(progressBar);

    window.addEventListener("scroll", () => {
      const rect = timelineSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.max(
          0,
          Math.min(
            100,
            ((windowHeight - rect.top) / (rect.height + windowHeight)) * 100
          )
        );
        progressBar.style.width = progress + "%";
      } else if (rect.top >= windowHeight) {
        progressBar.style.width = "0%";
      } else if (rect.bottom <= 0) {
        progressBar.style.width = "100%";
      }
    });
  }

  // Add floating particle effects
  addFloatingParticles();

  // Add section entrance animations
  addSectionEntranceAnimations();

  // Add hover effects
  addHoverEffects();
});


// Add floating particle effects
function addFloatingParticles() {
  const sections = document.querySelectorAll(
    ".hero, .speakers-section, .registration-section, .footer-section"
  );

  sections.forEach((section, sectionIndex) => {
    const particleCount = 5 + sectionIndex * 2; // More particles for each section

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "floating-particle";
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 8 + 4}px;
        height: ${Math.random() * 8 + 4}px;
        background: rgba(255, 229, 0, ${Math.random() * 0.3 + 0.1});
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        animation: float-particle ${
          Math.random() * 10 + 8
        }s ease-in-out infinite;
        animation-delay: ${Math.random() * 5}s;
      `;

      section.appendChild(particle);
    }
  });
}

// Add entrance animations for sections
function addSectionEntranceAnimations() {
  const sections = document.querySelectorAll(
    ".hero, .event-overview, .features-section, .speakers-section, .table-section, .registration-section"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(section);
  });
}


// Add shimmer effects to sections
function addShimmerEffects() {
  const shimmerSections = document.querySelectorAll(
    ".hero, .speakers-section, .registration-section"
  );

  shimmerSections.forEach((section) => {
    const shimmer = document.createElement("div");
    shimmer.className = "shimmer-effect";
    shimmer.style.cssText = `
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 229, 0, 0.1), transparent);
      animation: shimmer 3s ease-in-out infinite;
      pointer-events: none;
      z-index: 1;
    `;

    section.appendChild(shimmer);
  });
}

// Initialize shimmer effects
document.addEventListener("DOMContentLoaded", function () {
  addShimmerEffects();
});
