import { PageNavigation } from "../../components/PageNavigation/PageNavigation.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
// import DoubleSlash from "../../assets/images/about_us_images/doubleslash.svg?react"

// export default function AboutUs(){
//     return(
// <>
//     <PageNavigation />
//         <section  className="h-[365px] bg-gradient-to-r from-[#FC6441]/20 to-[#0E2A46]/20 flex flex-col items-center justify-center">
//             <h1 className="text-[calc(100vw*(60/1920))] leading-[1.1] text-[#0E2A46] font-(family-name:--font-family-body) font-bold   ">
//             ABOUT US
//             </h1>
//             <p className="flex flex-row">
//                 Home  < DoubleSlash /> About Us
//             </p>
//         </section>

// </>
//     )
// };

import { useState } from "react";

// ─── COLOR PALETTE (customize here) ───────────────────────────────────────────
// Primary accent: orange/coral  → #F97316  (Tailwind: orange-500)
// Dark background: slate-900
// Light section bg: slate-50 / blue-50
// Text dark: slate-800
// Text muted: slate-500
// ──────────────────────────────────────────────────────────────────────────────

// ─── DATA ─────────────────────────────────────────────────────────────────────

const STATS = [
  { icon: "🎓", value: "3K+", label: "Successful Students" },
  { icon: "📚", value: "15K+", label: "Online Courses" },
  { icon: "👩‍🏫", value: "97K+", label: "Certified Teachers" },
  { icon: "🌐", value: "102K+", label: "Students Community" },
];

const FEATURES = [
  "Expert-led video lessons",
  "Flexible learning schedules",
  "Industry-recognised certificates",
  "Live mentorship sessions",
  "Peer collaboration tools",
  "Lifetime course access",
];

const TESTIMONIALS = [
  {
    quote:
      "Edunity transformed my career. The structured curriculum and expert mentors gave me the confidence to land my dream job in data science.",
    author: "Sarah Johnson",
    role: "Data Analyst, Google",
  },
  {
    quote:
      "The community aspect is incredible. I made lifelong connections and learned more in three months than I did in two years of self-study.",
    author: "Marcus Lee",
    role: "Full-Stack Developer",
  },
  {
    quote:
      "Outstanding content quality. Every lesson is thoughtfully crafted, and the instructors are genuinely passionate about what they teach.",
    author: "Priya Sharma",
    role: "UX Designer, Airbnb",
  },
];

const COURSES = [
  {
    category: "Data Science",
    title: "Introduction to Data Science And Business Analysis",
    rating: 4.8,
    reviews: 320,
    lessons: 24,
    hours: 18,
    students: 1200,
    instructor: "Dr. Alan Torres",
    // Replace with real image URLs
    thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    avatar: "https://i.pravatar.cc/40?img=12",
  },
  {
    category: "Design",
    title: "UI/UX Design Fundamentals for Modern Products",
    rating: 4.9,
    reviews: 214,
    lessons: 18,
    hours: 14,
    students: 980,
    instructor: "Emily Carter",
    thumb: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
  {
    category: "Development",
    title: "React & Node.js Full-Stack Web Development Bootcamp",
    rating: 4.7,
    reviews: 507,
    lessons: 32,
    hours: 28,
    students: 2100,
    instructor: "James Wu",
    thumb: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&q=80",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];

const INSTRUCTORS = [
  {
    name: "Dr. Alan Torres",
    role: "Data Science Lead",
    // Replace with real instructor photos
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
  {
    name: "Emily Carter",
    role: "UI/UX Design Expert",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
  },
  {
    name: "James Wu",
    role: "Full-Stack Engineer",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80",
  },
  {
    name: "Naomi Osei",
    role: "Business & Marketing",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&q=80",
  },
];

const FOOTER_LINKS = [
  "Web Development",
  "Data Science",
  "Mobile Apps",
  "UI/UX Design",
  "Digital Marketing",
  "Cybersecurity",
];

// Tiny gallery thumbnails – replace with real URLs
const GALLERY_THUMBS = [
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=100&q=70",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&q=70",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&q=70",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=100&q=70",
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=100&q=70",
  "https://images.unsplash.com/photo-1605711285791-0219e80e43a3?w=100&q=70",
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function StarRating({ rating }) {
  return (
    
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className={`w-3.5 h-3.5 ${s <= Math.round(rating) ? "text-orange-400" : "text-slate-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.95 2.878c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
      <span className="ml-1 text-xs text-slate-500 font-medium">{rating}</span>
    </span>
  );
}

function SectionTag({ children }) {
  return (
    <span className="inline-block text-orange-500 font-bold text-sm uppercase tracking-widest mb-3 font-mono">
      — {children}
    </span>
  );
}

// ─── SECTIONS ─────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-orange-50 py-24 text-center">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-orange-200 opacity-30 blur-3xl" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-indigo-200 opacity-30 blur-3xl" />
      <div className="absolute top-10 right-1/4 w-40 h-40 rounded-full bg-blue-100 opacity-40 blur-2xl" />

      <div className="relative z-10">
        <h1 className="text-6xl font-black tracking-tight text-slate-800 mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          ABOUT US
        </h1>
        <nav className="text-sm text-slate-500 font-medium tracking-wide">
          <span className="hover:text-orange-500 cursor-pointer transition-colors">Home</span>
          <span className="mx-2 text-slate-300">›</span>
          <span className="text-orange-500">About Us</span>
        </nav>
      </div>
    </header>
  );
}

function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image Collage */}
        <div className="relative grid grid-cols-2 gap-3 h-[480px]">
          {/* Primary image – uses about.jpg */}
          <div className="row-span-2 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="about.jpg"
              alt="Learning environment"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Secondary images – replace URLs as needed */}
          {/* Placeholder image 1 */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&q=80"
              alt="Students collaborating"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Placeholder image 2 */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=300&q=80"
              alt="Online learning"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Experience badge */}
          <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white rounded-2xl px-6 py-4 shadow-2xl text-center">
            <p className="text-4xl font-black leading-none">35+</p>
            <p className="text-xs font-semibold uppercase tracking-widest mt-1 opacity-90">Years Experience</p>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <SectionTag>Who We Are</SectionTag>
          <h2 className="text-4xl font-black text-slate-800 leading-tight mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Benefit From Our Online Learning Expertise &amp; Earn Professional
          </h2>
          <p className="text-slate-500 leading-relaxed mb-8">
            We've spent over three decades building world-class learning experiences. Our platform blends industry expertise with cutting-edge technology to help you grow, upskill, and thrive in any career path you choose.
          </p>

          <ul className="grid grid-cols-2 gap-3 mb-10">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-orange-200 hover:-translate-y-0.5">
            Get Started Today →
          </button>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-16">
      <div className="bg-orange-500 rounded-3xl px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <span className="text-4xl">{s.icon}</span>
              <p className="text-3xl font-black leading-none">{s.value}</p>
              <p className="text-sm font-semibold opacity-90 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <SectionTag>Testimonials</SectionTag>
          <h2 className="text-4xl font-black text-slate-800 max-w-xl mx-auto" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Creating A Community Of Life Long Learners
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <article key={t.author} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <span className="text-5xl text-orange-300 leading-none font-serif">"</span>
              <p className="text-slate-600 leading-relaxed mb-6 -mt-2">{t.quote}</p>
              <div>
                <p className="font-bold text-slate-800">{t.author}</p>
                <p className="text-sm text-orange-500 font-medium">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoursesSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
        <div>
          <SectionTag>Our Courses</SectionTag>
          <h2 className="text-4xl font-black text-slate-800 max-w-sm" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Creating A Community Of Life Long Learners
          </h2>
        </div>
        <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold px-6 py-3 rounded-xl transition-all duration-200">
          View All Courses →
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-7">
        {COURSES.map((c) => (
          <article key={c.title} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100 overflow-hidden flex flex-col">
            <div className="relative h-44 overflow-hidden">
              <img src={c.thumb} alt={c.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {c.category}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <StarRating rating={c.rating} />
              <h3 className="font-bold text-slate-800 text-base leading-snug mt-2 mb-4 flex-1">{c.title}</h3>

              <div className="flex gap-4 text-xs text-slate-500 mb-5 border-t border-slate-100 pt-4">
                <span>📖 {c.lessons} Lessons</span>
                <span>⏱ {c.hours}h</span>
                <span>👥 {c.students.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={c.avatar} alt={c.instructor} className="w-8 h-8 rounded-full object-cover border-2 border-orange-200" />
                  <span className="text-xs font-semibold text-slate-600">{c.instructor}</span>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function InstructorsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const visible = INSTRUCTORS.slice(activeIdx, activeIdx + 4);

  return (
    <section className="bg-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <SectionTag>Our Team</SectionTag>
            <h2 className="text-4xl font-black text-slate-800" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Meet Our Instructors
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveIdx(Math.max(0, activeIdx - 1))}
              className="w-10 h-10 rounded-full border-2 border-slate-300 hover:border-orange-500 hover:text-orange-500 transition-colors flex items-center justify-center text-slate-500"
            >‹</button>
            <button
              onClick={() => setActiveIdx(Math.min(INSTRUCTORS.length - 1, activeIdx + 1))}
              className="w-10 h-10 rounded-full border-2 border-slate-300 hover:border-orange-500 hover:text-orange-500 transition-colors flex items-center justify-center text-slate-500"
            >›</button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {INSTRUCTORS.map((inst) => (
            <article key={inst.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={inst.photo}
                  alt={inst.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Social share badge */}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-slate-500 hover:text-orange-500 transition-colors text-xs">
                  ↗
                </button>
              </div>
              <div className="p-4 text-center">
                <p className="font-bold text-slate-800">{inst.name}</p>
                <p className="text-sm text-orange-500 font-medium mt-0.5">{inst.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactStrip() {
  return (
    <div className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-700">
        {[
          { icon: "📍", label: "Our Address", value: "1925 Boggess Street, NY 10001" },
          { icon: "📞", label: "Phone Number", value: "+1 (800) 123-4567" },
          { icon: "✉️", label: "Email Address", value: "hello@edunity.com" },
        ].map((c) => (
          <div key={c.label} className="flex items-center gap-4 py-2 md:px-8 first:pl-0 last:pr-0">
            <span className="text-3xl">{c.icon}</span>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-0.5">{c.label}</p>
              <p className="font-bold text-white">{c.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// function Footer() {
//   const [email, setEmail] = useState("");

//   return (
//     <footer className="bg-slate-900 text-slate-400">
//       <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
//         {/* Col 1: Brand */}
//         <div>
//           <h3 className="text-2xl font-black text-white mb-3 tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
//             edu<span className="text-orange-500">nity</span>
//           </h3>
//           <p className="text-sm leading-relaxed mb-6">
//             Empowering learners worldwide with expert-led courses, live mentorship, and a vibrant community of lifelong learners.
//           </p>
//           <div className="flex gap-3">
//             {["f", "in", "tw", "yt"].map((s) => (
//               <button key={s} className="w-9 h-9 rounded-full bg-slate-700 hover:bg-orange-500 text-white text-xs font-bold transition-colors flex items-center justify-center uppercase">
//                 {s}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Col 2: Services */}
//         <div>
//           <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs">Our Services</h4>
//           <ul className="space-y-3">
//             {FOOTER_LINKS.map((l) => (
//               <li key={l}>
//                 <a href="#" className="text-sm hover:text-orange-400 transition-colors flex items-center gap-2">
//                   <span className="text-orange-500 text-xs">›</span>{l}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Col 3: Gallery */}
//         <div>
//           <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs">Gallery</h4>
//           <div className="grid grid-cols-3 gap-1.5">
//             {GALLERY_THUMBS.map((src, i) => (
//               <div key={i} className="aspect-square rounded-lg overflow-hidden">
//                 <img src={src} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Col 4: Subscribe */}
//         <div>
//           <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs">Newsletter</h4>
//           <p className="text-sm mb-5 leading-relaxed">Subscribe for the latest courses, tips, and exclusive learning resources.</p>
//           <div className="flex flex-col gap-3">
//             <input
//               type="email"
//               placeholder="Your email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
//             />
//             <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors text-sm">
//               Subscribe Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-600">
//         © {new Date().getFullYear()} Edunity. All rights reserved. Built with ❤️ for learners everywhere.
//       </div>
//     </footer>
//   );
// }

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white font-sans">
     
      <PageNavigation />
      <Hero />
      <FeaturesSection />
      <StatsBar />
      <TestimonialsSection />
      <CoursesSection />
      <InstructorsSection />
      <ContactStrip />
      <Footer />
    </div>
  );
}
