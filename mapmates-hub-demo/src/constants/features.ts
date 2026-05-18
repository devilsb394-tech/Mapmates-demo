export interface Feature {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string; // Keep for backward compatibility or main thumb
  images?: string[]; // New: for storytelling carousel
  imageCaptions?: string[]; // Optional captions for each image in carousel
  icon: string;
  stats?: { label: string; value: string }[];
  vision?: string;
  story?: string;
}

export const FEATURES: Feature[] = [
  {
    id: 'live-social-map',
    title: 'Live Social World',
    description: 'The heartbeat of your city, in realtime.',
    longDescription: 'Imagine a world where the map isn\'t just a grid of lines, but a living, breathing social tissue. MapMates Hub turns the static concept of geography into a dynamic network of human presence. You aren\'t just looking at coordinates; you\'re seeing the pulse of your community as it moves and interacts in the real world.',
    story: 'I built this because I tired of feeling like a ghost in my own city. We pass hundreds of people every day but remain strangers. This map is the first step toward rehumanizing our surroundings.',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1200&auto=format&fit=crop'
    ],
    imageCaptions: [
      'A city breathing in realtime.',
      'Connecting nodes across sectors.',
      'The pulse of human movement.'
    ],
    icon: 'Map',
    vision: 'Future cities will be navigated through human presence, not just GPS coordinates. Social connectivity will be spatial.',
    stats: [{ label: 'Update Speed', value: '0.1s' }, { label: 'Sync Rate', value: 'High' }]
  },
  {
    id: 'realtime-tracking',
    title: 'Squad Tracking',
    description: 'Never lose your people again.',
    longDescription: 'Geography shouldn\'t be a barrier to friendship. High-fidelity location sharing allows you to see your squad moving with fluid precision. Whether it\'s a busy festival or a daily commute, you stay connected through a shared spatial awareness that feels like being in the same room.',
    story: 'The "where are you?" text is the most common and most annoying message in human history. I wanted to kill that message forever. Now, you just know.',
    image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop'
    ],
    imageCaptions: [
      'Seamless squad sync.',
      'Never lose the core group.',
      'Absolute spatial awareness.'
    ],
    icon: 'Radio',
    vision: 'A unified presence where every friend is a beacon of connection, protected by ironclad privacy.',
    stats: [{ label: 'Precision', value: '0.5m' }, { label: 'Battery Opt', value: '98%' }]
  },
  {
    id: 'destiny-missions',
    title: 'Destiny Missions',
    description: 'Turn the world into your playground.',
    longDescription: 'Adventure is a social experience. Destiny Missions allow users to create and share realtime goals. Discover hidden spots, complete community challenges, and see your friends participating in the same world-scale games. It\'s Google Maps meets massive multiplayer social gaming.',
    story: 'I spent too much time looking at screens playing games. I wanted to take that excitement and bring it to the actual streets of Lahore.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop'
    ],
    imageCaptions: [
      'Real world gamification.',
      'Community quests active.',
      'Digital achievements, real world exploration.'
    ],
    icon: 'Target',
    vision: 'The entire planet becomes a canvas for social play and collective exploration.',
    stats: [{ label: 'Quests', value: '500+' }, { label: 'Rewards', value: 'Digital' }]
  },
  {
    id: 'family-safety',
    title: 'Guardians Hub',
    description: 'Protecting those who matter most.',
    longDescription: 'Safety is the foundation of freedom. Guardians Hub provides intelligent perimeter monitoring and instant check-ins. It\'s built with the understanding that knowing your loved ones are safe is the greatest peace of mind a technology can offer.',
    story: 'My parents always worry when I\'m out late working on my projects. This feature started as a way to tell them "I\'m okay" without even having to think about it.',
    image: 'https://images.unsplash.com/photo-1600880210819-bfca93292404?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600880210819-bfca93292404?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581571225463-3b7f2894580b?q=80&w=1200&auto=format&fit=crop'
    ],
    imageCaptions: [
      'Intelligent hub monitoring.',
      'Active safety perimeter.',
      'Peace of mind for the home.'
    ],
    icon: 'ShieldCheck',
    vision: 'A future where anxiety about loved ones is replaced by spatial certainty and AI assistance.',
    stats: [{ label: 'Alert Speed', value: '<1s' }, { label: 'Trust Score', value: 'Max' }]
  },
  {
    id: 'sos-system',
    title: 'SOS Omega',
    description: 'A lifeline in your pocket.',
    longDescription: 'In an emergency, every millisecond counts. SOS Omega isn\'t just an alert; it\'s a smart coordination system. When triggered, it broadcasts your live vitals, route history, and exact surroundings to your emergency circle, ensuring help arrives with full context.',
    story: 'Security shouldn\'t be a luxury. I wanted to build a feature that could literally save a life, simple enough to use in a moment of panic.',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521791136064-7986c29574af?q=80&w=1200&auto=format&fit=crop'
    ],
    imageCaptions: [
      '“I’m scared… how do I get home safely?”',
      'Activating SOS Omega context.',
      'Connected mates receiving alert.',
      'Safe arrival. Community protected.'
    ],
    icon: 'AlertTriangle',
    vision: 'A world where no one is ever truly alone or unprotected during a crisis.',
  },
  {
    id: 'realtime-messaging',
    title: 'Spatial Chat',
    description: 'Talk to the map, not just the person.',
    longDescription: 'Communication is context. Spatial Chat integrates messaging directly into the map’s geometry. Share locations, movement phases, and environmental cues as part of your conversation. It\'s not just texting; it\'s expressing yourself through the space you occupy.',
    story: 'Texting is flat. Living is 3D. Why should we communicate in flat bubbles when we live in a rich, spatial world?',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552061081-999715bb324e?q=80&w=1200&auto=format&fit=crop'
    ],
    imageCaptions: [
      'Contextual map bubbles.',
      'Spatial presence in chat.',
      'Living conversations.'
    ],
    icon: 'MessageSquare',
    vision: 'Communication that follows the natural flow and rhythm of human movement.',
  }
];
