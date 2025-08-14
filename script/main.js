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

        //our speakers