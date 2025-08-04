"use client";
import React, { useState } from "react";

function MainComponent() {
  const [activeSection, setActiveSection] = React.useState("home");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [popupImage, setPopupImage] = useState(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "commission", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
  <div className="bg-black text-white min-h-screen font-mono relative">
    {/* Image Popup (if active) */}
    {popupImage && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={() => setPopupImage(null)}
      >
        <div
          className="relative max-w-3xl w-full p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl hover:text-yellow-400"
            onClick={() => setPopupImage(null)}
          >
            &times;
          </button>
          <img
            src={popupImage}
            alt="Enlarged"
            className="w-full h-auto rounded border-4 border-yellow-400"
          />
        </div>
      </div>
    )}

    {/* Subtle background effect */}
    <div className="fixed inset-0 opacity-10 pointer-events-none">
      <div className="grid-bg"></div>
    </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b-2 border-yellow-400 neon-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className="text-2xl font-bold text-yellow-400 cursor-pointer neon-text"
              onClick={() => scrollToSection("home")}
            >
              <i className="fas fa-gamepad mr-2"></i>VYXLEZ
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home", icon: "fa-home" },
                { id: "about", label: "About", icon: "fa-user" },
                { id: "projects", label: "Projects", icon: "fa-gamepad" },
                { id: "commission", label: "Commission", icon: "fa-handshake" },
                { id: "contact", label: "Contact", icon: "fa-envelope" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 transition-all duration-300 hover:text-yellow-400 hover:neon-text px-3 py-2 border border-transparent hover:border-yellow-400 rounded ${
                    activeSection === item.id
                      ? "text-yellow-400 neon-text border-yellow-400"
                      : "text-white"
                  }`}
                >
                  <i className={`fas ${item.icon} text-sm`}></i>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-yellow-400 neon-text"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i
                className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
              ></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 border-t-2 border-yellow-400 mobile-menu">
              {[
                { id: "home", label: "Home", icon: "fa-home" },
                { id: "about", label: "About", icon: "fa-user" },
                { id: "projects", label: "Projects", icon: "fa-gamepad" },
                { id: "commission", label: "Commission", icon: "fa-handshake" },
                { id: "contact", label: "Contact", icon: "fa-envelope" },
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 w-full text-left px-4 py-3 hover:text-yellow-400 hover:neon-text transition-all duration-300 border-l-4 border-transparent hover:border-yellow-400 hover:bg-yellow-400/10 mobile-menu-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <i className={`fas ${item.icon}`}></i>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 pt-24">
        {/* Header */}
        <header
          id="home"
          className="text-center mb-16 min-h-screen flex flex-col justify-center"
        >
          <div className="w-32 h-32 mx-auto mb-6 bg-gray-800 rounded-full border-2 border-yellow-400 overflow-hidden">
  <img
    src="/images/vyxlogo.png"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>

                 <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400 neon-glow">
                  VYXLEZ
                  </h1>

          <div className="terminal-line text-green-400 text-lg mb-6">
            {">"} Roblox Game Builder
          </div>
          <div className="text-gray-400 mb-8">
            Creating immersive experiences in the Roblox metaverse
          </div>
          <button
            onClick={() => scrollToSection("projects")}
            className="mx-auto bg-yellow-400 text-black px-6 py-3 font-bold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 border-2 border-yellow-400 hover:border-yellow-300"
          >
            <i className="fas fa-play mr-2"></i>VIEW PROJECTS
          </button>
        </header>

        {/* About Section */}
        <section
          id="about"
          className="mb-16 min-h-screen flex flex-col justify-center"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 neon-text">
            <i className="fas fa-user mr-2"></i>ABOUT ME
          </h2>
          <div className="gaming-card bg-gray-900/50 p-6 border border-yellow-400/30 rounded-lg">
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Roblox developer specializing in creating
              engaging games and experiences. With years of experience in
              building, modeling, and scripting, I bring creative visions to
              life in the Roblox platform. I love crafting unique gameplay
              mechanics and stunning visual environments.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  skill: "Building",
                  rating: "Expert",
                  color: "text-green-400",
                },
                {
                  skill: "Modelling",
                  rating: "Expert",
                  color: "text-green-400",
                },
                {
                  skill: "Animating",
                  rating: "Learning",
                  color: "text-yellow-400",
                },
                {
                  skill: "Scripting",
                  rating: "Learning",
                  color: "text-yellow-400",
                },
              ].map((item) => (
                <div
                  key={item.skill}
                  className="text-center p-3 bg-black/30 rounded border border-yellow-400/20"
                >
                  <div className="text-yellow-400 font-bold mb-1">
                    {item.skill}
                  </div>
                  <div className={`text-sm ${item.color}`}>{item.rating}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
      <section id="projects" className="mb-16">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 neon-text">
          <i className="fas fa-gamepad mr-2"></i>PROJECTS
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Forest Showecase",
              tech: "Building",
              description: "Build to showcase skills",
              image: "/images/scary.png",
            },
            {
              title: "Social Hangout Club",
              tech: "Building, Modeling, Physics",
              description: "Club made in 2h to test skills",
              image: "/images/club.png",
            },
            {
              title: "Haunted House",
              tech: "Building",
              description: "Haunted house with an eerie environment",
              image: "/images/horror.png",
            },
            {
              title: "Dead Sands",
              tech: "Advanced Building",
              description:
                "Map made for popular game Dead Sands, similar to Dead Rails, which peaked at over 10k CCU",
              image: "/images/road.png",
            },
            {
              title: "Go Kart Game Lobby",
              tech: "Building",
              description: "Build for a go kart game, similar to RIVALS",
              image: "/images/room.png",
            },
            {
              title: "Death Penalty",
              tech: "Advanced Building and Modeling",
              description: "Game map for Death Penalty",
              image: "/images/roulette.png",
            },
            {
              title: "Snowy Mountain",
              tech: "Building",
              description:
                "Realistic game map for a snowy moutain based off of a real life location",
              image: "/images/snow.png",
            },
            {
              title: "Castles Island",
              tech: "Advanced Building",
              description:
                "Massive floating castle islands made for YouTuber PPyth0n",
              image: "/images/castles.png",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="gaming-card bg-gray-900/50 border border-yellow-400/30 rounded-lg overflow-hidden hover:border-yellow-400/60 transition-all duration-300 cursor-pointer"
              onClick={() => setPopupImage(project.image)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-2">
                  {project.description}
                </p>
                <div className="text-yellow-400 text-sm font-mono">
                  {project.tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

        {/* Commission Process Section */}
        <section id="commission" className="mb-16">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 neon-text">
            <i className="fas fa-handshake mr-2"></i>COMMISSION PROCESS
          </h2>
          <div className="gaming-card bg-gray-900/50 p-6 border border-yellow-400/30 rounded-lg">
            <p className="text-gray-300 mb-6 text-center">
              Here's how working with Vyxlez works - simple, transparent, and
              professional!
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Initial Contact",
                  description:
                    "Reach out via Discord or Email with your project idea and requirements.",
                  icon: "fa-comments",
                },
                {
                  step: "02",
                  title: "Project Discussion",
                  description:
                    "We discuss details, timeline, budget, and create a clear project scope.",
                  icon: "fa-clipboard-list",
                },
                {
                  step: "03",
                  title: "Development",
                  description:
                    "I start building your project with regular updates and progress reports.",
                  icon: "fa-code",
                },
                {
                  step: "04",
                  title: "Delivery",
                  description:
                    "Final testing, revisions if needed, and delivery of your completed project.",
                  icon: "fa-check-circle",
                },
              ].map((process, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-black/30 rounded border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <div className="text-yellow-400 text-2xl font-bold mb-2">
                    {process.step}
                  </div>
                  <i
                    className={`fas ${process.icon} text-yellow-400 text-xl mb-3 neon-text`}
                  ></i>
                  <h3 className="text-white font-bold mb-2">{process.title}</h3>
                  <p className="text-gray-400 text-sm">{process.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
              <h3 className="text-yellow-400 font-bold mb-2 text-center">
                <i className="fas fa-star mr-2"></i>What I Offer
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-gray-300">
                  <i className="fas fa-check text-green-400 mr-2"></i>Custom
                  game development
                </div>
                <div className="text-gray-300">
                  <i className="fas fa-check text-green-400 mr-2"></i>3D
                  modeling & textures
                </div>
                <div className="text-gray-300">
                  <i className="fas fa-check text-green-400 mr-2"></i>Advanced lighting
                </div>
                <div className="text-gray-300">
                  <i className="fas fa-check text-green-400 mr-2"></i>Map designing
                </div>
                <div className="text-gray-300">
                  <i className="fas fa-check text-green-400 mr-2"></i>Atmosphere fixing
                </div>
                <div className="text-gray-300">
                  <i className="fas fa-check text-green-400 mr-2"></i>Environmental editor
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Pricing Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 neon-text text-center">
          <i className="fas fa-tags mr-2"></i>PRICING
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            {
              title: "Basic",
              price: "$15",
              features: ["Small maps", "1-2 buildings", "Low poly style"],
            },
            {
              title: "Standard",
              price: "$30",
              features: ["Medium-sized maps", "5+ structures", "Polished detail"],
            },
            {
              title: "Premium",
              price: "$60+",
              features: [
                "Large-scale maps",
                "Complex modeling",
                "Atmosphere + terrain",
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="bg-black/40 border border-yellow-400/20 rounded-lg p-6 gaming-card hover:border-yellow-400"
            >
              <h3 className="text-yellow-400 font-bold text-xl mb-3">
                {plan.title}
              </h3>
              <p className="text-3xl font-extrabold text-white mb-4">
                {plan.price}
              </p>
              <ul className="text-sm text-gray-300 space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i}>
                    <i className="fas fa-check text-green-400 mr-2"></i>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 neon-text">
            <i className="fas fa-envelope mr-2"></i>CONTACT
          </h2>
          <div className="gaming-card bg-gray-900/50 p-6 border border-yellow-400/30 rounded-lg">
            <p className="text-gray-300 mb-6 text-center">
              Ready to collaborate on your next Roblox project? Let's create
              something amazing together!
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "fa-solid fa-envelope",
                  label: "Email",
                  value: "vyxlez@gmail.com",
                  color: "text-red-400",
                },
                {
                  icon: "fab fa-discord",
                  label: "Discord",
                  value: "vyxlez",
                  color: "text-purple-400",
                },
                {
                  icon: "fas fa-gamepad",
                  label: "Roblox",
                  value: "aVyxlez",
                  color: "text-green-400",
                },
              ].map((contact, index) => (
                <div key={index} className="text-center">
                  <i
                    className={`${contact.icon} ${contact.color} text-3xl mb-2 neon-text`}
                  ></i>
                  <div className="text-sm text-gray-400 mb-1">
                    {contact.label}
                  </div>
                  <div className="text-white font-mono text-sm">
                    {contact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="text-center mt-12 pt-8 border-t border-yellow-400/20">
        <p className="text-gray-500 text-sm">
          © 2025 Vyxlez. Made with <span className="text-yellow-400">❤️</span> and lots of Robux.
        </p>
      </footer>

      <style jsx global>{`
        @keyframes neonGlow {
          0%, 100% {
            text-shadow: 0 0 3px #facc15, 0 0 6px #facc15;
          }
          50% {
            text-shadow: 0 0 4px #facc15, 0 0 8px #facc15;
          }
        }

        .neon-glow {
          animation: neonGlow 2s ease-in-out infinite;
        }

        .neon-text {
          text-shadow: 0 0 3px #facc15, 0 0 6px #facc15;
        }

        .neon-border {
          box-shadow: 0 0 10px rgba(250, 204, 21, 0.3);
        }

        .gaming-card {
          background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(20,20,20,0.7));
          backdrop-filter: blur(5px);
        }

        html {
          scroll-behavior: smooth;
        }

        section {
          scroll-margin-top: 80px;
        }
      `}</style>
        
    </div>
  );
}

export default MainComponent;
