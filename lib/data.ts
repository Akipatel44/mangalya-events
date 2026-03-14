// Unsplash image URLs for event management
export const images = {
  hero: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
  about: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80",
  services: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=1920&q=80",
  gallery: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80",
  events: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80",
  testimonials: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=1920&q=80",
  contact: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920&q=80",

  // Gallery images
  wedding1: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  wedding2: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
  wedding3: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
  wedding4: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=800&q=80",
  corporate1: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  corporate2: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
  corporate3: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
  birthday1: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
  birthday2: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80",
  engagement1: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
  engagement2: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
  decoration1: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80",
  decoration2: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
  stage1: "https://images.unsplash.com/photo-1492684223f8-e1f24f5d6b14?w=800&q=80",

  // Team
  team1: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  team2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  team3: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  team4: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",

  // Slider images
  slider1: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80", // Wedding
  slider2: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80", // Business event
  slider3: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80", // Concert/Music event
  slider4: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&q=80", // Gala/Celebration
};

export const heroSliderImages = [
  {
    image: images.slider1,
    title: "Luxury Weddings",
    subtitle: "Celebrate Your Love Story",
  },
  {
    image: images.slider2,
    title: "Corporate Events",
    subtitle: "Professional Excellence",
  },
  {
    image: images.slider3,
    title: "Concert & Music Events",
    subtitle: "Entertainment at Its Best",
  },
  {
    image: images.slider4,
    title: "Gala Celebrations",
    subtitle: "Elegance & Grandeur",
  },
];

export const services = [
  {
    title: "Wedding Planning",
    description:
      "From intimate ceremonies to grand celebrations, we craft every detail of your dream wedding with elegance and precision.",
    icon: "rings",
  },
  {
    title: "Corporate Events",
    description:
      "Professional event management for conferences, seminars, product launches, and corporate galas that leave lasting impressions.",
    icon: "briefcase",
  },
  {
    title: "Product Launch Events",
    description:
      "Create buzz and excitement for your product launches with innovative presentations, demonstrations, and memorable brand experiences.",
    icon: "cake",
  },
  {
    title: "Engagement Ceremonies",
    description:
      "Beautifully crafted engagement celebrations that mark the beginning of your love story with grace and grandeur.",
    icon: "heart",
  },
  {
    title: "Education Events",
    description:
      "Comprehensive educational seminars, workshops, conferences, and training sessions designed to inspire learning and professional growth.",
    icon: "plane",
  },
  {
    title: "Festival Events",
    description:
      "Large-scale festival planning with vibrant decorations, entertainment, crowd management, and unforgettable experiences for hundreds of attendees.",
    icon: "sparkles",
  },
];

export const galleryImages = [
  { src: images.wedding1, alt: "Royal Wedding Ceremony", category: "Weddings" },
  { src: images.corporate1, alt: "Corporate Conference", category: "Corporate" },
  { src: images.birthday1, alt: "Birthday Celebration", category: "Birthdays" },
  { src: images.wedding2, alt: "Garden Wedding Setup", category: "Weddings" },
  { src: images.engagement1, alt: "Engagement Ceremony", category: "Engagements" },
  { src: images.decoration1, alt: "Floral Decoration", category: "Weddings" },
  { src: images.corporate2, alt: "Business Summit", category: "Corporate" },
  { src: images.wedding3, alt: "Wedding Reception", category: "Weddings" },
  { src: images.birthday2, alt: "Themed Birthday Party", category: "Birthdays" },
  { src: images.corporate3, alt: "Team Building Event", category: "Corporate" },
  { src: images.engagement2, alt: "Ring Ceremony", category: "Engagements" },
  { src: images.decoration2, alt: "Stage Decoration", category: "Weddings" },
];

export const eventsList = [
  {
    image: images.wedding1,
    title: "The Royal Wedding",
    description:
      "A magnificent celebration of love featuring grand floral arrangements, crystal chandeliers, and a 500-guest reception at the Palace Grounds.",
    date: "Dec 15, 2025",
  },
  {
    image: images.corporate1,
    title: "TechCorp Annual Conference",
    description:
      "A three-day corporate conference with keynote speakers, networking sessions, and an awards gala for 1,200 attendees.",
    date: "Nov 22, 2025",
  },
  {
    image: images.birthday1,
    title: "Golden 50th Birthday Bash",
    description:
      "An elegant black-tie celebration featuring live jazz, gourmet dining, and a spectacular fireworks display.",
    date: "Oct 10, 2025",
  },
  {
    image: images.engagement1,
    title: "Sunset Engagement Ceremony",
    description:
      "A romantic beachside engagement with fairy lights, live music, and a breathtaking sunset backdrop.",
    date: "Sep 5, 2025",
  },
];

export const testimonials = [
  {
    name: "Priya & Rahul Sharma",
    eventType: "Wedding",
    review:
      "Mangalya made our wedding truly magical. Every detail was perfect, from the stunning floral arrangements to the seamless coordination. Our guests are still talking about it!",
    rating: 5,
  },
  {
    name: "Anita Desai",
    eventType: "Corporate Event",
    review:
      "Professional, creative, and incredibly organized. Our annual gala was the best one yet, thanks to the Mangalya team. They exceeded all our expectations.",
    rating: 5,
  },
  {
    name: "Vikram Patel",
    eventType: "Birthday Party",
    review:
      "They turned my daughter's 10th birthday into a fairy tale. The decorations, entertainment, and attention to detail were absolutely phenomenal.",
    rating: 5,
  },
  {
    name: "Meera & Arjun Kapoor",
    eventType: "Engagement Ceremony",
    review:
      "Our engagement was everything we dreamed of and more. Mangalya's creativity and dedication made every moment special and memorable.",
    rating: 4,
  },
  {
    name: "Sunita Reddy",
    eventType: "Destination Wedding",
    review:
      "Planning a destination wedding seemed daunting, but Mangalya handled everything flawlessly. From venue selection to guest management, it was perfect.",
    rating: 5,
  },
  {
    name: "Rajesh Iyer",
    eventType: "Corporate Conference",
    review:
      "Impeccable execution of our 3-day tech conference. Mangalya's team managed logistics, AV setup, and catering with remarkable precision.",
    rating: 5,
  },
];

export const teamMembers = [
  {
    name: "Arun Mehta",
    role: "Founder & Creative Director",
    image: images.team1,
  },
  {
    name: "Kavita Sharma",
    role: "Head of Wedding Planning",
    image: images.team2,
  },
  {
    name: "Deepak Verma",
    role: "Corporate Events Lead",
    image: images.team3,
  },
  {
    name: "Neha Gupta",
    role: "Design & Decoration Head",
    image: images.team4,
  },
];
