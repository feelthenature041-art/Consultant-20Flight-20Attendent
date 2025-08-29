export type Mentor = {
  id: string;
  name: string;
  role: string;
  company?: string;
  years: number;
  price: number; // per 30m in INR
  rating: number; // 0-5
  online: boolean;
  languages: string[];
  gender: "Male" | "Female" | "Other";
  tags: string[];
  img?: string; // avatar
  cover?: string; // banner image
  bio: string;
  specialties: string[];
  outcomes: string[];
  sampleQuestions: string[];
  reviews: { name: string; rating: number; text: string }[];
  policies: string[];
};

export const mentors: Mentor[] = [
  {
    id: "meera-iyer",
    name: "Meera Iyer",
    role: "Senior Cabin Crew",
    company: "Emirates",
    years: 6,
    price: 39,
    rating: 4.8,
    online: true,
    languages: ["English", "Hindi"],
    gender: "Female",
    tags: ["Cabin Crew", "Interview", "Grooming"],
    img: "https://images.pexels.com/photos/17694889/pexels-photo-17694889.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    cover: "https://images.pexels.com/photos/17694889/pexels-photo-17694889.jpeg?auto=compress&cs=tinysrgb&w=1600",
    bio: "Senior cabin crew with long-haul experience across EU/ME routes. I help aspiring flight attendants prepare interviews and onboard grooming.",
    specialties: ["Interview drills", "Customer service scenarios", "Image & grooming"],
    outcomes: ["Roadmap PDF after call", "Interview question bank", "Checklist for medical & docs"],
    sampleQuestions: [
      "How do I prepare for Emirates assessment day?",
      "What grooming standards should I follow?",
      "How to answer difficult passenger scenarios?",
    ],
    reviews: [
      { name: "Sanya", rating: 5, text: "Got a 3-month roadmap and passed my first interview!" },
      { name: "Priya", rating: 5, text: "Clear tips on grooming and resume. Super helpful." },
    ],
    policies: ["24h reschedule", "Refunds if mentor no-show", "No file uploads in chat"],
  },
  {
    id: "arjun-malhotra",
    name: "Arjun Malhotra",
    role: "Cabin Crew Trainer",
    company: "IndiGo",
    years: 9,
    price: 49,
    rating: 4.9,
    online: true,
    languages: ["English", "Hindi"],
    gender: "Male",
    tags: ["Interview Prep", "Service Excellence", "Resume"],
    img: "https://images.pexels.com/photos/5778301/pexels-photo-5778301.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    cover: "https://images.pexels.com/photos/5778301/pexels-photo-5778301.jpeg?auto=compress&cs=tinysrgb&w=1600",
    bio: "Trainer for domestic and international crew. Focus on interview performance and service excellence.",
    specialties: ["Assessment day coaching", "Resume review", "Onboard etiquette"],
    outcomes: ["Personalized prep plan", "Mock interview feedback"],
    sampleQuestions: ["How to stand out on assessment day?", "What resume format works best?"],
    reviews: [{ name: "Aman", rating: 5, text: "Arjun's mock interview felt real. I gained a lot of confidence." }],
    policies: ["48h refund window", "Chat unlocked after booking"],
  },
  {
    id: "sara-khan",
    name: "Sara Khan",
    role: "Flight Attendant",
    company: "Air India",
    years: 4,
    price: 29,
    rating: 4.7,
    online: false,
    languages: ["English", "Hindi"],
    gender: "Female",
    tags: ["International Routes", "English Skills"],
    img: "https://images.pexels.com/photos/32829123/pexels-photo-32829123.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    cover: "https://images.pexels.com/photos/32829123/pexels-photo-32829123.jpeg?auto=compress&cs=tinysrgb&w=1600",
    bio: "International routes experience. I help with English polish and real cabin scenarios.",
    specialties: ["English improvement", "Cabin safety basics"],
    outcomes: ["Practice scripts", "Role-play scenarios"],
    sampleQuestions: ["What English questions are common?"],
    reviews: [{ name: "Vikram", rating: 5, text: "Great language guidance and tips." }],
    policies: ["Reschedule up to 12h before"]
  },
  {
    id: "daniel-lee",
    name: "Daniel Lee",
    role: "Purser",
    company: "Singapore Airlines",
    years: 11,
    price: 69,
    rating: 4.9,
    online: true,
    languages: ["English"],
    gender: "Male",
    tags: ["Leadership", "Cabin Safety", "Career Roadmap"],
    img: "https://images.pexels.com/photos/32829123/pexels-photo-32829123.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    cover: "https://images.pexels.com/photos/32829123/pexels-photo-32829123.jpeg?auto=compress&cs=tinysrgb&w=1600",
    bio: "Purser focused on leadership and safety culture. Ideal for experienced candidates moving up.",
    specialties: ["Leadership path", "Safety SOPs"],
    outcomes: ["Promotion plan", "Study references"],
    sampleQuestions: ["How to transition to Purser?"],
    reviews: [{ name: "Neha", rating: 5, text: "Structured plan and clear milestones." }],
    policies: ["No refunds less than 24h", "Session recordings not provided"],
  },
];
