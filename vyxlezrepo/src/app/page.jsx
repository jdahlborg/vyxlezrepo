"use client";
import React, { useState } from "react";
import { 
  Home, 
  User, 
  Gamepad2, 
  Handshake, 
  Mail, 
  Menu, 
  X, 
  Play, 
  MessageCircle, 
  ClipboardList, 
  Code, 
  CheckCircle, 
  Star, 
  Check, 
  Tags,
  Heart
} from "lucide-react";

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
      <style>{`
        @keyframes neonGlow {
          0%, 100% {
            text-shadow: 0 0 5px #facc15, 0 0 10px #facc15, 0 0 15px #facc15;
          }
          50% {
            text-shadow: 0 0 8px #facc15, 0 0 15px #facc15, 0 0 20px #facc15;
          }
        }

        .neon-glow {
          animation: neonGlow 2s ease-in-out infinite;
        }

        .neon-text {
          text-shadow: 0 0 5px #facc15, 0 0 10px #facc15, 0 0 15px #facc15;
        }

        .neon-border {
          box-shadow: 0 0 15px rgba(250, 204, 21, 0.5), 0 0 25px rgba(250, 204, 21, 0.3);
        }

        .gaming-card {
          background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(20,20,20,0.8));
          backdrop-filter: blur(10px);
        }

        .gaming-card:hover {
          background: linear-gradient(135deg, rgba(10,10,10,0.9), rgba(30,30,30,0.9));
        }

        html {
          scroll-behavior: smooth;
        }

        section {
          scroll-margin-top: 80px;
        }

        .grid-bg {
          background-image: 
            linear-gradient(rgba(250, 204, 21, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(250, 204, 21, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          width: 100%;
          height: 100%;
        }

        .mobile-menu {
          animation: slideDown 0.3s ease-out;
        }

        .mobile-menu-item {
          animation: fadeInLeft 0.5s ease-out forwards;
          opacity: 0;
          transform: translateX(-20px);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .terminal-line {
          font-family: 'Courier New', monospace;
          text-shadow: 0 0 8px currentColor;
        }
      `}</style>

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
              className="absolute top-4 right-4 text-white text-2xl hover:text-yellow-400 z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setPopupImage(null)}
            >
              <X size={20} />
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
              className="text-2xl font-bold text-yellow-400 cursor-pointer neon-text flex items-center"
              onClick={() => scrollToSection("home")}
            >
              <Gamepad2 className="mr-2" size={24} />
              VYXLEZ
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home", icon: Home },
                { id: "about", label: "About", icon: User },
                { id: "projects", label: "Projects", icon: Gamepad2 },
                { id: "commission", label: "Commission", icon: Handshake },
                { id: "contact", label: "Contact", icon: Mail },
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
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-yellow-400 neon-text"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 border-t-2 border-yellow-400 mobile-menu">
              {[
                { id: "home", label: "Home", icon: Home },
                { id: "about", label: "About", icon: User },
                { id: "projects", label: "Projects", icon: Gamepad2 },
                { id: "commission", label: "Commission", icon: Handshake },
                { id: "contact", label: "Contact", icon: Mail },
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 w-full text-left px-4 py-3 hover:text-yellow-400 hover:neon-text transition-all duration-300 border-l-4 border-transparent hover:border-yellow-400 hover:bg-yellow-400/10 mobile-menu-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon size={18} />
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
          <div className="text-gray-300 mb-8 text-lg">
            Creating immersive experiences in the Roblox metaverse
          </div>
          <button
            onClick={() => scrollToSection("projects")}
            className="mx-auto bg-yellow-400 text-black px-6 py-3 font-bold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 border-2 border-yellow-400 hover:border-yellow-300 flex items-center rounded"
          >
            <Play className="mr-2" size={16} />
            VIEW PROJECTS
          </button>
        </header>

        {/* About Section */}
        <section
          id="about"
          className="mb-16 min-h-screen flex flex-col justify-center"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 neon-text flex items-center">
            <User className="mr-2" size={24} />
            ABOUT ME
          </h2>
          <div className="gaming-card bg-gray-900/50 p-6 border border-yellow-400/30 rounded-lg">
            <p className="text-gray-200 mb-6 leading-relaxed text-lg">
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
                  className="text-center p-3 bg-black/50 rounded border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
                >
                  <div className="text-yellow-400 font-bold mb-1">
                    {item.skill}
                  </div>
                  <div className={`text-sm ${item.color} font-semibold`}>{item.rating}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 neon-text flex items-center">
            <Gamepad2 className="mr-2" size={24} />
            PROJECTS
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
                className="gaming-card bg-gray-900/50 border border-yellow-400/30 rounded-lg overflow-hidden hover:border-yellow-400/60 transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
                onClick={() => setPopupImage(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-white mb-2 text-lg">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    {project.description}
                  </p>
                  <div className="text-yellow-400 text-sm font-mono font-semibold">
                    {project.tech}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Commission Process Section */}
        <section id="commission" className="mb-16">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 neon-text flex items-center">
            <Handshake className="mr-2" size={24} />
            COMMISSION PROCESS
          </h2>
          <div className="gaming-card bg-gray-900/50 p-6 border border-yellow-400/30 rounded-lg">
            <p className="text-gray-200 mb-6 text-center text-lg">
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
                  icon: MessageCircle,
                },
                {
                  step: "02",
                  title: "Project Discussion",
                  description:
                    "We discuss details, timeline, budget, and create a clear project scope.",
                  icon: ClipboardList,
                },
                {
                  step: "03",
                  title: "Development",
                  description:
                    "I start building your project with regular updates and progress reports.",
                  icon: Code,
                },
                {
                  step: "04",
                  title: "Delivery",
                  description:
                    "Final testing, revisions if needed, and delivery of your completed project.",
                  icon: CheckCircle,
                },
              ].map((process, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-black/50 rounded border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-yellow-400 text-2xl font-bold mb-2">
                    {process.step}
                  </div>
                  <process.icon className="text-yellow-400 neon-text mx-auto mb-3" size={24} />
                  <h3 className="text-white font-bold mb-2">{process.title}</h3>
                  <p className="text-gray-300 text-sm">{process.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
              <h3 className="text-yellow-400 font-bold mb-2 text-center flex items-center justify-center">
                <Star className="mr-2" size={20} />
                What I Offer
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-gray-200 flex items-center">
                  <Check className="text-green-400 mr-2" size={16} />
                  Custom game development
                </div>
                <div className="text-gray-200 flex items-center">
                  <Check className="text-green-400 mr-2" size={16} />
                  3D modeling & textures
                </div>
                <div className="text-gray-200 flex items-center">
                  <Check className="text-green-400 mr-2" size={16} />
                  Advanced lighting
                </div>
                <div className="text-gray-200 flex items-center">
                  <Check className="text-green-400 mr-2" size={16} />
                  Map designing
                </div>
                <div className="text-gray-200 flex items-center">
                  <Check className="text-green-400 mr-2" size={16} />
                  Atmosphere fixing
                </div>
                <div className="text-gray-200 flex items-center">
                  <Check className="text-green-400 mr-2" size={16} />
                  Environmental editor
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 neon-text text-center flex items-center justify-center">
            <Tags className="mr-2" size={24} />
            PRICING
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
                className="bg-black/50 border border-yellow-400/20 rounded-lg p-6 gaming-card hover:border-yellow-400 transform hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-yellow-400 font-bold text-xl mb-3">
                  {plan.title}
                </h3>
                <p className="text-3xl font-extrabold text-white mb-4">
                  {plan.price}
                </p>
                <ul className="text-sm text-gray-200 space-y-2">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center justify-center">
                      <Check className="text-green-400 mr-2" size={16} />
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
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 neon-text flex items-center">
            <Mail className="mr-2" size={24} />
            CONTACT
          </h2>
          <div className="gaming-card bg-gray-900/50 p-6 border border-yellow-400/30 rounded-lg">
            <p className="text-gray-200 mb-6 text-center text-lg">
              Ready to collaborate on your next Roblox project? Let's create
              something amazing together!
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "vyxlez@gmail.com",
                  color: "text-red-400",
                },
                {
                  icon: MessageCircle,
                  label: "Discord",
                  value: "vyxlez",
                  color: "text-purple-400",
                },
                {
                  icon: Gamepad2,
                  label: "Roblox",
                  value: "aVyxlez",
                  color: "text-green-400",
                },
              ].map((contact, index) => (
                <div key={index} className="text-center">
                  <contact.icon
                    className={`${contact.color} neon-text mx-auto mb-2`}
                    size={32}
                  />
                  <div className="text-sm text-gray-300 mb-1">
                    {contact.label}
                  </div>
                  <div className="text-white font-mono text-sm font-semibold">
                    {contact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 pt-8 border-t border-yellow-400/20">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            © 2025 Vyxlez. Made with <Heart className="text-yellow-400 mx-1" size={16} fill="currentColor" /> and lots of Robux.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default MainComponent;
