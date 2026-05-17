export interface Feature {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
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
    icon: 'MessageSquare',
    vision: 'Communication that follows the natural flow and rhythm of human movement.',
  }
];
