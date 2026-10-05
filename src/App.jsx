import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const main = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.hero-element', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.2
      });

      // Sections Fade Up
      gsap.utils.toArray('.section-animate').forEach(section => {
        gsap.from(section, {
          y: 60,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
          ease: 'power3.out'
        });
      });

      // Timeline Cards
      gsap.utils.toArray('.timeline-card').forEach((card, i) => {
        gsap.from(card, {
          x: i % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          ease: 'power3.out'
        });
      });

      // Skills Animation
      gsap.from('.skill-tag', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.skills-container',
          start: 'top 80%',
        }
      });
      
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={main} className="relative w-full">
      {/* NAVBAR */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 rounded-full px-6 py-3 flex items-center gap-8 ${
        isScrolled ? 'bg-[#18181B]/80 backdrop-blur-xl border border-white/10' : 'bg-transparent'
      }`}>
        <div className="font-sora font-bold text-lg tracking-tight text-white">FN</div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#F0EFF4]">
          <a href="#about" className="hover:text-[#7B61FF] transition-colors translate-y-0 hover:-translate-y-px">À propos</a>
          <a href="#experience" className="hover:text-[#7B61FF] transition-colors translate-y-0 hover:-translate-y-px">Expérience</a>
          <a href="#skills" className="hover:text-[#7B61FF] transition-colors translate-y-0 hover:-translate-y-px">Compétences</a>
        </div>
        <a href="#contact" className="bg-[#7B61FF] text-white px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(123,97,255,0.4)]">
          Contact
        </a>
      </nav>

      {/* HERO */}
      <section className="min-h-[100dvh] flex flex-col items-center justify-center relative px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7B61FF]/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="z-10 flex flex-col items-center text-center mt-20">
          <div className="hero-element w-32 h-32 rounded-full border-2 border-[#7B61FF] flex items-center justify-center bg-[#18181B] mb-8 relative group overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#7B61FF]/20 to-transparent"></div>
             <span className="text-3xl font-sora font-bold text-white relative z-10">FN</span>
          </div>
          
          <h1 className="hero-element text-5xl md:text-7xl font-sora font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
            Fatou
          </h1>
          
          <h2 className="hero-element text-3xl md:text-4xl font-instrument italic text-[#F0EFF4]/80 mb-8">
            Développeuse Web
          </h2>
          
          <div className="hero-element flex flex-wrap justify-center items-center gap-4 text-[#7B61FF] font-fira text-sm mb-12">
            <span>3 ans d'expérience</span>
            <span className="hidden sm:inline">|</span>
            <span>10+ projets</span>
            <span className="hidden sm:inline">|</span>
            <span>Paris</span>
          </div>
          
          <div className="hero-element flex flex-col sm:flex-row gap-4">
            <a href="#" download className="group flex items-center justify-center gap-2 bg-[#7B61FF] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(123,97,255,0.3)]">
              Télécharger CV
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a href="#contact" className="group flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/5 hover:scale-105 transition-all duration-300">
              Me contacter
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-animate py-32 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          <h2 className="text-4xl md:text-5xl font-instrument italic text-white md:w-1/3 shrink-0">
            Le Manifeste
          </h2>
          <div className="relative pl-6 md:pl-0">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[#7B61FF] md:hidden"></div>
            <p className="text-xl md:text-2xl text-[#F0EFF4]/90 font-sora leading-relaxed max-w-2xl">
              Je suis une développeuse passionnée par la création d'expériences web performantes et esthétiques. J'aime allier code propre et design soigné pour offrir le meilleur rendu possible.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-32 px-6 md:px-12 max-w-6xl mx-auto relative">
        <h2 className="section-animate text-4xl md:text-5xl font-instrument italic text-white text-center mb-24">
          Parcours
        </h2>
        
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-24">
            {[
              {
                year: "2021-2023",
                title: "Développeur Frontend",
                company: "TechCorp",
                desc: "Création d'interfaces web réactives et performantes. Optimisation de l'expérience utilisateur et intégration de designs complexes."
              },
              {
                year: "2019-2021",
                title: "Webdesigner Freelance",
                company: "Indépendant",
                desc: "Conception et développement de sites vitrines pour des clients variés. Gestion complète du cycle de vie du projet."
              },
              {
                year: "2018",
                title: "Stage Dev Web",
                company: "Agence",
                desc: "Participation au développement d'applications web internes. Apprentissage des bonnes pratiques de code."
              }
            ].map((exp, i) => (
              <div key={i} className={`timeline-card relative flex flex-col md:flex-row gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 flex flex-col justify-center relative pl-20 md:pl-0">
                   <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#7B61FF] border-4 border-[#0A0A14] shadow-[0_0_10px_rgba(123,97,255,0.8)] ${i % 2 === 0 ? 'left-[24px] md:left-auto md:right-[-40px]' : 'left-[24px] md:left-[-40px]'}`}></div>
                   
                   <div className="bg-[#18181B] p-8 rounded-[2rem] border border-white/5 hover:border-[#7B61FF]/30 transition-colors group">
                     <div className="font-fira text-[#7B61FF] text-sm mb-4">{exp.year}</div>
                     <h3 className="text-2xl font-sora font-bold text-white mb-2">{exp.title}</h3>
                     <h4 className="text-lg font-sora text-[#F0EFF4]/70 mb-4">{exp.company}</h4>
                     <p className="text-[#F0EFF4]/60 leading-relaxed group-hover:text-[#F0EFF4]/80 transition-colors">
                       {exp.desc}
                     </p>
                   </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="section-animate text-4xl md:text-5xl font-instrument italic text-white text-center mb-24">
          Compétences
        </h2>
        
        <div className="skills-container flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {[
            { name: "React", level: "high" },
            { name: "TailwindCSS", level: "high" },
            { name: "GSAP", level: "high" },
            { name: "UI/UX Design", level: "mid" },
            { name: "TypeScript", level: "mid" }
          ].map((skill, i) => (
            <div key={i} className={`skill-tag flex items-center justify-center rounded-full px-8 py-4 font-sora font-medium transition-all duration-300 hover:scale-110 cursor-default ${
              skill.level === 'high' 
                ? 'bg-[#7B61FF] text-white shadow-[0_0_20px_rgba(123,97,255,0.3)]' 
                : 'bg-transparent border border-[#7B61FF]/50 text-[#F0EFF4] hover:bg-[#7B61FF]/10'
            }`}>
              {skill.name}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-animate py-32 px-6 md:px-12 max-w-6xl mx-auto border-t border-white/10 mt-20">
        <div className="bg-[#18181B] rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B61FF]/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7B61FF]/20 rounded-full blur-[100px]"></div>
          
          <h2 className="text-4xl md:text-6xl font-instrument italic text-white mb-8 relative z-10">
            Travaillons ensemble
          </h2>
          <p className="text-[#F0EFF4]/70 max-w-md mb-12 font-sora relative z-10">
            Ouvert aux nouvelles opportunités et aux collaborations créatives. N'hésitez pas à me contacter.
          </p>
          
          <div className="flex gap-6 mb-16 relative z-10">
            <a href="#" className="p-4 rounded-full bg-white/5 hover:bg-[#7B61FF] text-white transition-all duration-300 hover:scale-110 group">
              <Mail size={24} className="group-hover:-translate-y-1 transition-transform" />
            </a>
            <a href="#" className="p-4 rounded-full bg-white/5 hover:bg-[#7B61FF] text-white transition-all duration-300 hover:scale-110 group">
              <Linkedin size={24} className="group-hover:-translate-y-1 transition-transform" />
            </a>
            <a href="#" className="p-4 rounded-full bg-white/5 hover:bg-[#7B61FF] text-white transition-all duration-300 hover:scale-110 group">
              <Github size={24} className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
          
          <a href="mailto:contact@example.com" className="bg-[#7B61FF] text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(123,97,255,0.4)] relative z-10">
            Envoyer un message
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#05050A] py-12 rounded-t-[4rem] text-center px-6 mt-10">
        <div className="font-sora text-white mb-4">Fatou</div>
        <p className="text-[#F0EFF4]/50 text-sm mb-6">Fait avec le vibe coding © {new Date().getFullYear()}</p>
        <div className="inline-flex items-center gap-2 bg-[#18181B] px-4 py-2 rounded-full border border-white/5">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="font-fira text-xs text-white/70">En ligne</span>
        </div>
      </footer>
    </div>
  );
}
