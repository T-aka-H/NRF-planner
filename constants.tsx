
import { Session } from './types';

const KEYNOTE_DATA: Session[] = [
  {
    "id": "kn-1",
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "08:30",
    "time_end": "09:15",
    "title": "NRF Chairman’s opening remarks: Welcome to The Next Now!",
    "type": "KeyNote",
    "location": "Main Stage",
    "speakers": [
      { "name": "Bob Eddy", "title": "Chairman and CEO", "company": "BJ's Wholesale Club, Inc." },
      { "name": "Ed Stack", "title": "Executive Chairman", "company": "DICK'S Sporting Goods" }
    ]
  },
  {
    "id": "kn-2",
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "09:15",
    "time_end": "09:45",
    "title": "Opening Keynote – Rewriting the commerce playbook",
    "type": "KeyNote",
    "location": "Main Stage",
    "speakers": [
      { "name": "Sara Eisen", "title": "Co-Anchor", "company": "CNBC" },
      { "name": "Michael Rubin", "title": "Founder and CEO", "company": "Fanatics" }
    ]
  },
  {
    "id": "kn-3",
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "09:45",
    "time_end": "10:15",
    "title": "The AI Platform Shift and the Opportunity Ahead for Retail",
    "type": "KeyNote",
    "location": "Main Stage",
    "speakers": [
      { "name": "John Furner", "title": "President and CEO", "company": "Walmart U.S." },
      { "name": "Sundar Pichai", "title": "CEO", "company": "Google and Alphabet" }
    ]
  },
  {
    "id": "kn-4",
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "14:30",
    "time_end": "15:00",
    "title": "Ascending Together: Driving Growth, Community, and Innovation at REI",
    "type": "KeyNote",
    "location": "Main Stage",
    "speakers": [
      { "name": "Mary Beth Laughton", "title": "President and CEO", "company": "REI Co-op" },
      { "name": "Amy Farley", "title": "Executive Editor", "company": "Fast Company" }
    ]
  },
  {
    "id": "kn-5",
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "15:00",
    "time_end": "15:30",
    "title": "Where craft meets intelligence: How LVMH Is reimagining luxury",
    "type": "KeyNote",
    "location": "Main Stage",
    "speakers": [
      { "name": "Ali Furman", "title": "Partner", "company": "PwC" },
      { "name": "Gonzague de Pirey", "title": "Chief OmniChannel and Data Officer", "company": "LVMH" },
      { "name": "Soumia Hadjali", "title": "Global SVP Client Development", "company": "Louis Vuitton" }
    ]
  },
  {
    "id": "kn-6",
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "15:30",
    "time_end": "16:00",
    "title": "Building the Store of Tomorrow: FairPrice Group’s Blueprint",
    "type": "KeyNote",
    "location": "Main Stage",
    "speakers": [
      { "name": "Vipul Chawla", "title": "Group CEO", "company": "FairPrice Group" },
      { "name": "Jordan Berke", "title": "Founder & CEO", "company": "TOMORROW" }
    ]
  },
  {
    "id": "kn-7",
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "09:15",
    "time_end": "09:45",
    "title": "Shaping the Next Now: A fireside chat with Fran Horowitz",
    "type": "KeyNote",
    "location": "Main Stage",
    "speakers": [
      { "name": "Matthew Shay", "title": "President and CEO", "company": "National Retail Federation" },
      { "name": "Fran Horowitz", "title": "CEO", "company": "Abercrombie & Fitch Co." },
      { "name": "Colleen Taylor", "title": "President, Merchant Services", "company": "American Express" }
    ]
  },
  {
    "id": "kn-8",
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "09:45",
    "time_end": "10:15",
    "title": "The future of an icon: Ralph Lauren’s journey",
    "type": "KeyNote",
    "location": "Main Stage",
    "speakers": [
      { "name": "Matthew Shay", "title": "President and CEO", "company": "National Retail Federation" },
      { "name": "David Lauren", "title": "Chief Branding and Innovation Officer", "company": "Ralph Lauren Corporation" },
      { "name": "Shelley Bransten", "title": "CVP, Worldwide Industry Solutions", "company": "Microsoft Corporation" }
    ]
  },
  {
    "id": "kn-9",
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "14:30",
    "time_end": "15:00",
    "title": "“The Icons” - Discussion about building defining brands",
    "type": "KeyNote",
    "location": "Main Stage",
    "speakers": [
      { "name": "Harley Finkelstein", "title": "President", "company": "Shopify" },
      { "name": "Emma Grede", "title": "Founder", "company": "Good American" },
      { "name": "Ben Francis", "title": "CEO & Founder", "company": "Gymshark" }
    ]
  },
  {
    "id": "kn-10",
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "15:00",
    "time_end": "15:30",
    "title": "Saks Global’s vision & Future-Fit Growth (PepsiCo)",
    "type": "KeyNote",
    "location": "Main Stage",
    "speakers": []
  },
  {
    "id": "kn-11",
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "15:30",
    "time_end": "16:00",
    "title": "Ulta Beauty unleashed: Shaping the future of beauty",
    "type": "KeyNote",
    "location": "Main Stage",
    "speakers": [
      { "name": "Kecia Steelman", "title": "President & CEO", "company": "Ulta Beauty" },
      { "name": "Bobby Stephens", "title": "Head of US Retail", "company": "Deloitte Digital" }
    ]
  },
  {
    "id": "kn-12",
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "08:45",
    "time_end": "09:15",
    "title": "Day trading attention: Leveraging brand, speed and relevance",
    "type": "KeyNote",
    "location": "Main Stage",
    "speakers": [
      { "name": "Gary Vaynerchuk", "title": "Chairman", "company": "VaynerMedia" },
      { "name": "Christopher Zara", "title": "News Director", "company": "Fast Company" }
    ]
  },
  {
    "id": "kn-13",
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "09:15",
    "time_end": "09:45",
    "title": "Trailblazers in action: VF Corp.’s brand leadership",
    "type": "KeyNote",
    "location": "Main Stage",
    "speakers": [
      { "name": "Sun Choe", "title": "Global Brand President", "company": "Vans" },
      { "name": "Nina Flood", "title": "Global Brand President", "company": "Timberland" },
      { "name": "Mindy Grossman", "title": "Partner & Vice Chair", "company": "Consello" },
      { "name": "Caroline Brown", "title": "Global Brand President", "company": "The North Face" }
    ]
  },
  {
    "id": "kn-14",
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "09:45",
    "time_end": "10:15",
    "title": "Heritage Meets Innovation: Leading Iconic Brands",
    "type": "KeyNote",
    "location": "Main Stage",
    "speakers": [
      { "name": "Linda Hubbard", "title": "President & CEO", "company": "Carhartt, Inc." },
      { "name": "Anne Mehlman", "title": "EVP and Brand President", "company": "Crocs" },
      { "name": "Phil Wahba", "title": "Senior Writer", "company": "Fortune" }
    ]
  },
  {
    "id": "kn-15",
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "14:00",
    "time_end": "14:30",
    "title": "Designing for devotion: Consumer-obsessed product innovation",
    "type": "KeyNote",
    "location": "Main Stage",
    "speakers": [
      { "name": "Mark Barrocas", "title": "CEO", "company": "SharkNinja" },
      { "name": "Sarah Nassauer", "title": "Retail Reporter", "company": "The Wall Street Journal" }
    ]
  },
  {
    "id": "kn-16",
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "14:30",
    "time_end": "15:00",
    "title": "Commerce Disrupted: Rise of the AI Native Consumer",
    "type": "KeyNote",
    "location": "Main Stage",
    "speakers": [
      { "name": "Jason Goldberg", "title": "Chief Commerce Strategy Officer", "company": "Publicis Groupe" }
    ]
  }
];

// AI Stage Data
const AI_STAGE_RAW = [
  // Sunday
  { "day": "Sunday", "time_start": "10:30", "time_end": "11:00", "title": "The Intelligent Store: How dm and Vusion Are Shaping the Future of Retail", "location": "River Pavilion, Snowflake Stage" },
  { "day": "Sunday", "time_start": "11:20", "time_end": "11:50", "title": "AI Stage - General Roundtable Discussions", "location": "River Pavilion, Snowflake Stage" },
  { "day": "Sunday", "time_start": "12:10", "time_end": "12:40", "title": "AI-first by 2026: The new baseline for every retail brand", "location": "River Pavilion, Snowflake Stage" },
  { "day": "Sunday", "time_start": "13:00", "time_end": "13:30", "title": "AI Stage - Agentic Roundtable Discussions", "location": "River Pavilion, Snowflake Stage" },
  { "day": "Sunday", "time_start": "14:00", "time_end": "14:30", "title": "AI-powered productivity: Elevating your customer experience through business insights, digital simulation, and advanced robotics", "location": "River Pavilion, Snowflake Stage" },

  // Monday
  { "day": "Monday", "time_start": "10:30", "time_end": "11:00", "title": "Harnessing AI in retail: Progress, pitfalls, and potential", "location": "River Pavilion, Snowflake Stage" },
  { "day": "Monday", "time_start": "11:20", "time_end": "11:50", "title": "AI Stage - General Roundtable Discussions", "location": "River Pavilion, Snowflake Stage" },
  { "day": "Monday", "time_start": "12:10", "time_end": "12:40", "title": "AI at human scale: How SiriusXM builds experiences that feel personal at every touchpoint", "location": "River Pavilion, Snowflake Stage" },
  { "day": "Monday", "time_start": "13:00", "time_end": "13:30", "title": "AI Stage - Agentic Roundtable Discussions", "location": "River Pavilion, Snowflake Stage" },
  { "day": "Monday", "time_start": "14:00", "time_end": "14:30", "title": "Winning in the Agentic Era: Ulta’s Take on the Commerce Roadmap to Success", "location": "River Pavilion, Snowflake Stage" },

  // Tuesday
  { "day": "Tuesday", "time_start": "10:30", "time_end": "11:00", "title": "Beyond the 'buy' button: Thriving in the new agentic commerce era", "location": "River Pavilion, Snowflake Stage" },
  { "day": "Tuesday", "time_start": "11:20", "time_end": "11:50", "title": "AI Stage - Agentic Roundtable Discussions", "location": "River Pavilion, Snowflake Stage" },
  { "day": "Tuesday", "time_start": "12:10", "time_end": "12:40", "title": "Styling the Future of Retail: AI Patterns That Work", "location": "River Pavilion, Snowflake Stage" }
];

const AI_STAGE_DATA: Session[] = AI_STAGE_RAW.map((s, idx) => ({
  id: `ai-stage-${idx}`,
  date: s.day === 'Sunday' ? '2026-01-11' : s.day === 'Monday' ? '2026-01-12' : '2026-01-13',
  day: s.day,
  time_start: s.time_start,
  time_end: s.time_end,
  title: s.title,
  type: 'AI Stage',
  location: s.location,
  isSelected: false,
  speakers: []
}));

// Ask Speaker Data
const ASK_SPEAKER_RAW = [
  // Sunday
  { "day": "Sunday", "time_start": "11:00", "time_end": "11:20", "title": "Ask the Speaker - Q&A: Ira Kalish", "location": "Overview Lounge, Javits North, Level 5" },
  { "day": "Sunday", "time_start": "11:20", "time_end": "11:40", "title": "Ask the Speaker - Q&A", "location": "Overview Lounge, Javits North, Level 5" },
  { "day": "Sunday", "time_start": "11:55", "time_end": "12:15", "title": "Ask the Speaker - Q&A", "location": "Overview Lounge, Javits North, Level 5" },
  { "day": "Sunday", "time_start": "12:15", "time_end": "12:35", "title": "Ask the Speaker - Q&A: Christiane Pendarvis", "location": "Overview Lounge, Javits North, Level 5" },
  { "day": "Sunday", "time_start": "12:50", "time_end": "13:05", "title": "Ask the Speaker - Q&A", "location": "Overview Lounge, Javits North, Level 5" },
  { "day": "Sunday", "time_start": "13:05", "time_end": "13:30", "title": "Ask the Speaker - Q&A: Brieane Olson", "location": "Overview Lounge, Javits North, Level 5" },

  // Monday
  { "day": "Monday", "time_start": "11:00", "time_end": "11:20", "title": "Ask the Speaker - Q&A: Kevin Kelley", "location": "Overview Lounge, Javits North, Level 5" },
  { "day": "Monday", "time_start": "11:20", "time_end": "11:40", "title": "Ask the Speaker - Q&A: Linda Li", "location": "Overview Lounge, Javits North, Level 5" },
  { "day": "Monday", "time_start": "11:55", "time_end": "12:15", "title": "Ask the Speaker - Q&A: Matthias Haase", "location": "Overview Lounge, Javits North, Level 5" },
  { "day": "Monday", "time_start": "12:15", "time_end": "12:35", "title": "Ask the Speaker - Q&A", "location": "Overview Lounge, Javits North, Level 5" },
  { "day": "Monday", "time_start": "12:50", "time_end": "13:05", "title": "Ask the Speaker - Q&A: Julie Bornstein", "location": "Overview Lounge, Javits North, Level 5" },
  { "day": "Monday", "time_start": "13:05", "time_end": "13:30", "title": "Ask the Speaker - Q&A", "location": "Overview Lounge, Javits North, Level 5" },

  // Tuesday
  { "day": "Tuesday", "time_start": "11:00", "time_end": "11:20", "title": "Ask the Speaker - Q&A: Jason Goldberg", "location": "Overview Lounge, Javits North, Level 5" },
  { "day": "Tuesday", "time_start": "11:20", "time_end": "11:40", "title": "Ask the Speaker - Q&A", "location": "Overview Lounge, Javits North, Level 5" },
  { "day": "Tuesday", "time_start": "11:55", "time_end": "12:15", "title": "Ask the Speaker - Q&A", "location": "Overview Lounge, Javits North, Level 5" },
  { "day": "Tuesday", "time_start": "12:15", "time_end": "12:35", "title": "Ask the Speaker - Q&A", "location": "Overview Lounge, Javits North, Level 5" },
  { "day": "Tuesday", "time_start": "12:50", "time_end": "13:05", "title": "Ask the Speaker - Q&A", "location": "Overview Lounge, Javits North, Level 5" },
  { "day": "Tuesday", "time_start": "13:05", "time_end": "13:30", "title": "Ask the Speaker - Q&A", "location": "Overview Lounge, Javits North, Level 5" }
];

const PROCESSED_ASK_SPEAKER_DATA: Session[] = ASK_SPEAKER_RAW.map((s, idx) => ({
  id: `ask-speaker-${idx}`,
  date: s.day === 'Sunday' ? '2026-01-11' : s.day === 'Monday' ? '2026-01-12' : '2026-01-13',
  day: s.day,
  time_start: s.time_start,
  time_end: s.time_end,
  title: s.title,
  type: 'Ask the Speaker',
  location: s.location,
  isSelected: false,
  speakers: []
}));

const RAW_LIST = [
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "09:30",
    "time_end": "10:00",
    "type": "Exhibitor Big Ideas",
    "title": "Shelf awareness: How smart stores win shoppers",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "09:30",
    "time_end": "10:00",
    "type": "Exhibitor Big Ideas",
    "title": "From reactive to proactive: How Rocky Brands scaled omnichannel support with AI",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "09:30",
    "time_end": "10:00",
    "type": "Exhibitor Big Ideas",
    "title": "Gymshark & SAP: Winning in retail with cloud, AI, and resilient strategies",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "09:30",
    "time_end": "10:00",
    "type": "Exhibitor Big Ideas",
    "title": "One store, one forecast: Transforming retail operations with a unified platform",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "09:30",
    "time_end": "10:00",
    "type": "Exhibitor Big Ideas",
    "title": "From storefront to edge: Scaling secure retail experiences",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "10:15",
    "time_end": "10:45",
    "type": "Exhibitor Big Ideas",
    "title": "AI in eCommerce operations: Lessons from the front lines",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "10:15",
    "time_end": "10:45",
    "type": "Exhibitor Big Ideas",
    "title": "From reactive to predictive: How retailers are rewriting fulfillment for margin, speed, and resilience",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "10:15",
    "time_end": "10:45",
    "type": "Exhibitor Big Ideas",
    "title": "Profit starts at checkout",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "10:15",
    "time_end": "10:45",
    "type": "Exhibitor Big Ideas",
    "title": "Driving conversions: How 3 retailers win with dynamic, AI-powered eCommerce messages",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "10:15",
    "time_end": "10:45",
    "type": "Exhibitor Big Ideas",
    "title": "Exhibitor Big Ideas session produced by Firework",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "10:30",
    "time_end": "11:00",
    "type": "Featured Session",
    "title": "New business models: How retail organizations have evolved into business ecosystems",
    "location": "Javits North, Level 4, Klaviyo Stage"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "10:30",
    "time_end": "11:00",
    "type": "Featured Session",
    "title": "How Mobile Technology is Shaping Customer Experience",
    "location": "Javits North, Level 4, ReturnPro Stage"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "10:30",
    "time_end": "11:00",
    "type": "Featured Session",
    "title": "AWS and PepsiCo: Accelerating AI-driven transformation from customer service to supply chain innovation",
    "location": "Javits North, Level 4, Mirakl Stage"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "10:30",
    "time_end": "11:00",
    "type": "Featured Session",
    "title": "Experts face off: Debating solutions to tomorrow’s retail struggles",
    "location": "Javits North, Level 4, Logicbroker Stage"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "11:00",
    "time_end": "11:30",
    "type": "Exhibitor Big Ideas",
    "title": "China's AI-driven retail transformation: Implications for global brands",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "11:00",
    "time_end": "11:30",
    "type": "Exhibitor Big Ideas",
    "title": "Personalization at Scale: Using AI to unlock the next phase of growth",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "11:00",
    "time_end": "11:30",
    "type": "Exhibitor Big Ideas",
    "title": "The Agentic Enteprise: How Salesforce helps retailers thrive in today’s AI native world",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "11:00",
    "time_end": "11:30",
    "type": "Exhibitor Big Ideas",
    "title": "Designing certainty: How MillerKnoll masters complexity with probabilistic planning",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "11:00",
    "time_end": "11:30",
    "type": "Exhibitor Big Ideas",
    "title": "In-store retail media networks: Screen time that pays",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "11:20",
    "time_end": "11:50",
    "type": "Featured Session",
    "title": "Breaking through the noise: How emerging brands are capturing attention",
    "location": "Javits North, Level 4, Logicbroker Stage"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "11:20",
    "time_end": "11:50",
    "type": "Featured Session",
    "title": "The rise of agentic commerce: What AI means for the future of shopping",
    "location": "Javits North, Level 4, ReturnPro Stage"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "11:20",
    "time_end": "11:50",
    "type": "Featured Session",
    "title": "Building bold global brands in 2026 - strategy, scale and staying power",
    "location": "Javits North, Level 4, Mirakl Stage"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "11:20",
    "time_end": "11:50",
    "type": "Featured Session",
    "title": "Walmart fireside chat: The future of retail in a digital-first world",
    "location": "Javits North, Level 4, Klaviyo Stage"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "11:45",
    "time_end": "12:15",
    "type": "Exhibitor Big Ideas",
    "title": "From production to customer experience: The power of agentic ecosystems",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "11:45",
    "time_end": "12:15",
    "type": "Exhibitor Big Ideas",
    "title": "Winning the modern buyer: How a strong digital foundation delivers the customer experiences shoppers expect",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "11:45",
    "time_end": "12:15",
    "type": "Exhibitor Big Ideas",
    "title": "Turning schedules into action – how Kendra Scott drives performance",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "11:45",
    "time_end": "12:15",
    "type": "Exhibitor Big Ideas",
    "title": "The future shopper in the Agentic era with Kyndryl & VML",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "11:45",
    "time_end": "12:15",
    "type": "Exhibitor Big Ideas",
    "title": "From weeks to hours: Accelerating speed-to-market with Agentic AI",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "12:10",
    "time_end": "12:40",
    "type": "Featured Session",
    "title": "Economic insights and trends: Observations from Chief Economist Ira Kalish",
    "location": "Javits North, Level 4, Mirakl Stage"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "12:10",
    "time_end": "12:40",
    "type": "Featured Session",
    "title": "Agentic commerce in action: How URBN meets shoppers where they are",
    "location": "Javits North, Level 4, Klaviyo Stage"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "12:10",
    "time_end": "12:40",
    "type": "Featured Session",
    "title": "Leading the perpetually adaptive retail enterprise: Thriving through disruption",
    "location": "Javits North, Level 4, ReturnPro Stage"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "12:10",
    "time_end": "12:40",
    "type": "Featured Session",
    "title": "An in-depth look at new Gen Z research",
    "location": "Javits North, Level 4, Logicbroker Stage"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "13:00",
    "time_end": "13:30",
    "type": "Featured Session",
    "title": "Looking ahead: Future proofing retail in 2028",
    "location": "Javits North, Level 4, Mirakl Stage"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "13:00",
    "time_end": "13:30",
    "type": "Featured Session",
    "title": "Building and scaling: Winning in a multichannel world",
    "location": "Javits North, Level 4, ReturnPro Stage"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "13:00",
    "time_end": "13:30",
    "type": "Featured Session",
    "title": "Powering a retail revolution with AI innovation",
    "location": "Javits North, Level 4, Logicbroker Stage"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "13:00",
    "time_end": "13:30",
    "type": "Featured Session",
    "title": "SEO vs GEO … from ranking to relevance",
    "location": "Javits North, Level 4, Klaviyo Stage"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "13:00",
    "time_end": "13:30",
    "type": "Exhibitor Big Ideas",
    "title": "Building the AI-ready enterprise: How JD Sports is scaling smarter",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "13:00",
    "time_end": "13:30",
    "type": "Exhibitor Big Ideas",
    "title": "Redefining customer loyalty through smarter post-purchase journeys",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "13:00",
    "time_end": "13:30",
    "type": "Exhibitor Big Ideas",
    "title": "The future of retail: How RFID lays a foundation for AI-driven analytics",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "13:00",
    "time_end": "13:30",
    "type": "Exhibitor Big Ideas",
    "title": "AI meets home services: Taskrabbit’s integration with Alexa+",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "13:00",
    "time_end": "13:30",
    "type": "Exhibitor Big Ideas",
    "title": "Turning discovery into revenue: Tapestry's AI-powered retail transformation",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "14:00",
    "time_end": "15:00",
    "type": "Exhibitor Big Ideas",
    "title": "Beyond loss prevention: Building resilient retail",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "14:00",
    "time_end": "15:00",
    "type": "Exhibitor Big Ideas",
    "title": "AI as the retail game-changer: Leading the frontier firm transformation",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "14:00",
    "time_end": "15:00",
    "type": "Exhibitor Big Ideas",
    "title": "Beyond the low-hanging fruit: Driving a bold digital transformation",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "14:00",
    "time_end": "15:00",
    "type": "Exhibitor Big Ideas",
    "title": "Drive growth with unified Agentforce commerce",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "14:00",
    "time_end": "15:00",
    "type": "Exhibitor Big Ideas",
    "title": "AI in retail: From hype to sustainable success",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "15:15",
    "time_end": "15:45",
    "type": "Exhibitor Big Ideas",
    "title": "Every shift counts: Michael Kors & Sprouts on turning execution into revenue",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "15:15",
    "time_end": "15:45",
    "type": "Exhibitor Big Ideas",
    "title": "From pilots to profit - Agentic AI at scale",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "15:15",
    "time_end": "15:45",
    "type": "Exhibitor Big Ideas",
    "title": "Merchandising agility: Innovation at Urban Outfitters with velocity data & strategy AI",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "15:15",
    "time_end": "15:45",
    "type": "Exhibitor Big Ideas",
    "title": "AI innovation: From design to customer satisfaction",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "15:15",
    "time_end": "15:45",
    "type": "Exhibitor Big Ideas",
    "title": "Improve customer loyalty with Agentic marketing",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "16:00",
    "time_end": "16:30",
    "type": "Exhibitor Big Ideas",
    "title": "Smart commitment management with CLM: Lessons from Lands’ End",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "16:00",
    "time_end": "16:30",
    "type": "Exhibitor Big Ideas",
    "title": "Smarter scheduling, happier teams: How Marine Layer elevates the retail experience",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "16:00",
    "time_end": "16:30",
    "type": "Exhibitor Big Ideas",
    "title": "Modernizing frontline work: Pilot's journey",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "16:00",
    "time_end": "16:30",
    "type": "Exhibitor Big Ideas",
    "title": "Securing the AI agents that power the future of retail",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-11",
    "day": "Sunday",
    "time_start": "16:00",
    "time_end": "16:30",
    "type": "Exhibitor Big Ideas",
    "title": "Localization: Where data meets place",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "09:15",
    "time_end": "10:00",
    "type": "Exhibitor Big Ideas",
    "title": "Renovating your business model to ignite strategic growth: A fireside chat with Lowe’s",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "09:15",
    "time_end": "10:00",
    "type": "Exhibitor Big Ideas",
    "title": "From chaos to clarity: AI-powered pricing & inventory as the new margin engine",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "09:15",
    "time_end": "10:00",
    "type": "Exhibitor Big Ideas",
    "title": "Reimagining retail with AI - Cognizant, Academy Sport, Monro & El Puerto de Liverpool",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "09:15",
    "time_end": "10:00",
    "type": "Exhibitor Big Ideas",
    "title": "AI for retail - Powered by partnerships",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "09:15",
    "time_end": "10:00",
    "type": "Exhibitor Big Ideas",
    "title": "Empowering the frontline with AI: 7-Eleven and Hy-Vee’s Workday transformation",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "10:15",
    "time_end": "10:45",
    "type": "Exhibitor Big Ideas",
    "title": "Smashing retail silos with AI-powered network transparency",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "10:15",
    "time_end": "10:45",
    "type": "Exhibitor Big Ideas",
    "title": "How customer experience still creates retail’s competitive edge",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "10:15",
    "time_end": "10:45",
    "type": "Exhibitor Big Ideas",
    "title": "AI frontier: Blending innovation and tradition",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "10:15",
    "time_end": "10:45",
    "type": "Exhibitor Big Ideas",
    "title": "Democratizing retail media: Technology that powers growth",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "10:15",
    "time_end": "10:45",
    "type": "Exhibitor Big Ideas",
    "title": "Accelerating retail transformation: Lessons from a multi-phase enterprise rollout",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "10:30",
    "time_end": "11:00",
    "type": "Featured Session",
    "title": "The Z Suite Meets the CMO: Insights into how Gen Z Is using AI to shop for fashion",
    "location": "Javits North, Level 4, Klaviyo Stage"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "10:30",
    "time_end": "11:00",
    "type": "Featured Session",
    "title": "Reimagining retail in the age of AI: Macy's bold new chapter",
    "location": "Javits North, Level 4, ReturnPro Stage"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "10:30",
    "time_end": "11:00",
    "type": "Featured Session",
    "title": "Rewired: How AI is reshaping the path to purchase in fashion and beauty",
    "location": "Javits North, Level 4, Mirakl Stage"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "10:30",
    "time_end": "11:00",
    "type": "Featured Session",
    "title": "NYC urban retail treasures: The 2026 Shopping Playbook",
    "location": "Javits North, Level 4, Logicbroker Stage"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "11:00",
    "time_end": "11:30",
    "type": "Exhibitor Big Ideas",
    "title": "The pragmatic path to composability: Lessons from the world’s largest athletic retailer",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "11:00",
    "time_end": "11:30",
    "type": "Exhibitor Big Ideas",
    "title": "Is Agentic AI already rewriting the rules of retail leadership?",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "11:00",
    "time_end": "11:30",
    "type": "Exhibitor Big Ideas",
    "title": "Revolutionizing fresh operations: Embracing RFID in grocery",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "11:00",
    "time_end": "11:30",
    "type": "Exhibitor Big Ideas",
    "title": "Winning peak season: How leading retailers redefine Black Friday with AI",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "11:00",
    "time_end": "11:30",
    "type": "Exhibitor Big Ideas",
    "title": "How Kroger drives better frontline experience with AI",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "11:20",
    "time_end": "11:50",
    "type": "Featured Session",
    "title": "Think like a marketer, act like a creator: Brands share their secrets to success on TikTok Shop",
    "location": "Javits North, Level 4, Mirakl Stage"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "11:20",
    "time_end": "11:50",
    "type": "Featured Session",
    "title": "Revolutionizing retail: Landmark’s RFID rollout across DCs and stores",
    "location": "Javits North, Level 4, ReturnPro Stage"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "11:20",
    "time_end": "11:50",
    "type": "Featured Session",
    "title": "The art and science of modern marketing: A fireside chat with Kelly Mahoney, CMO, Ulta Beauty",
    "location": "Javits North, Level 4, Klaviyo Stage"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "11:20",
    "time_end": "11:50",
    "type": "Featured Session",
    "title": "The power of private brands: Luring today’s cost-conscious shopper",
    "location": "Javits North, Level 4, Logicbroker Stage"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "11:45",
    "time_end": "12:15",
    "type": "Exhibitor Big Ideas",
    "title": "The quiet backbone of retail: IoT supply chain systems that prevent store failure",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "11:45",
    "time_end": "12:15",
    "type": "Exhibitor Big Ideas",
    "title": "Scaling AI in retail: Tractor Supply and RELEX on what’s next",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "11:45",
    "time_end": "12:15",
    "type": "Exhibitor Big Ideas",
    "title": "Inventory in sync: How digital twin technology protects the brand promise",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "11:45",
    "time_end": "12:15",
    "type": "Exhibitor Big Ideas",
    "title": "Becoming a frontier firm: Unlocking the new ROI — return on intelligence",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "11:45",
    "time_end": "12:15",
    "type": "Exhibitor Big Ideas",
    "title": "The AI-powered shopper: How generative agents are building retail’s new front door",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "12:10",
    "time_end": "12:40",
    "type": "Featured Session",
    "title": "Returns are the new retail battleground",
    "location": "Javits North, Level 4, ReturnPro Stage"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "12:10",
    "time_end": "12:40",
    "type": "Featured Session",
    "title": "Can AI fix online fashion discovery?",
    "location": "Javits North, Level 4, Klaviyo Stage"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "12:10",
    "time_end": "12:40",
    "type": "Featured Session",
    "title": "The Power of connection: How merchandising and innovation drive meaningful member moments at Sam’s Club",
    "location": "Javits North, Level 4, Mirakl Stage"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "12:10",
    "time_end": "12:40",
    "type": "Featured Session",
    "title": "A New Era of Retail: Inside Target’s Tech-led Transformation with Open AI",
    "location": "Javits North, Level 4, Logicbroker Stage"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "12:30",
    "time_end": "13:15",
    "type": "Exhibitor Big Ideas",
    "title": "The ultimate customer experience: Hilton & Universal Music Group's data & AI journeys",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "12:30",
    "time_end": "13:15",
    "type": "Exhibitor Big Ideas",
    "title": "Data, innovation and AI at Tapestry: Coach and Kate Spade",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "12:30",
    "time_end": "13:15",
    "type": "Exhibitor Big Ideas",
    "title": "When AI works for people: Transforming engagement, retention and efficiency",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "12:30",
    "time_end": "13:15",
    "type": "Exhibitor Big Ideas",
    "title": "Digital resilience: Inside the tech transformation at Burger King",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "12:30",
    "time_end": "13:15",
    "type": "Exhibitor Big Ideas",
    "title": "The retail leader's Edge: Pricing for AI, tariffs, and the new consumer",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "13:00",
    "time_end": "13:30",
    "type": "Featured Session",
    "title": "Retail creators: Culture that converts",
    "location": "Javits North, Level 4, Logicbroker Stage"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "13:00",
    "time_end": "13:30",
    "type": "Featured Session",
    "title": "The new loyalty engine: How AI is redefining customer acquisition and retention",
    "location": "Javits North, Level 4, ReturnPro Stage"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "13:00",
    "time_end": "13:30",
    "type": "Featured Session",
    "title": "Supercharging Customer Experience with Community-First Strategies: a conversation featuring Kevin Kelley and Barnes & Noble",
    "location": "Javits North, Level 4, Klaviyo Stage"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "13:00",
    "time_end": "13:30",
    "type": "Featured Session",
    "title": "Lessons from DTC trailblazers: Surviving and thriving",
    "location": "Javits North, Level 4, Mirakl Stage"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "13:30",
    "time_end": "14:00",
    "type": "Exhibitor Big Ideas",
    "title": "Redefining retail resilience: Prioritizing transactions with 5G network slicing",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "13:30",
    "time_end": "14:00",
    "type": "Exhibitor Big Ideas",
    "title": "Transforming retail frontlines: Real-world wins with frontline AI",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "13:30",
    "time_end": "14:00",
    "type": "Exhibitor Big Ideas",
    "title": "Growing market share in a disrupted retail landscape",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "13:30",
    "time_end": "14:00",
    "type": "Exhibitor Big Ideas",
    "title": "How Amazon and adidas are setting new fulfillment standards",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "13:30",
    "time_end": "14:00",
    "type": "Exhibitor Big Ideas",
    "title": "An AI holiday: Unpacking changing shopper habits and planning for 2026",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "13:45",
    "time_end": "14:15",
    "type": "Featured Session",
    "title": "Beyond the website: Reinventing retail for AI-native shoppers",
    "location": "Javits North, Level 4, ReturnPro Stage"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "13:45",
    "time_end": "14:15",
    "type": "Featured Session",
    "title": "How to break through in 2026 without burning cash",
    "location": "Javits North, Level 4, Logicbroker Stage"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "14:15",
    "time_end": "15:00",
    "type": "Exhibitor Big Ideas",
    "title": "From vision to value: How Agentic and Perceptive AI are shaping the future of retail",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "14:15",
    "time_end": "15:00",
    "type": "Exhibitor Big Ideas",
    "title": "How Lowe’s is super powering associates to enhance customer service",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "14:15",
    "time_end": "15:00",
    "type": "Exhibitor Big Ideas",
    "title": "From complexity to performance & productivity: How TravelCenters of America, Ford & Avis unlock productivity",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "14:15",
    "time_end": "15:00",
    "type": "Exhibitor Big Ideas",
    "title": "Transform customer experience with AI: Lessons from Saks Global and Dine Brands",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "14:15",
    "time_end": "15:00",
    "type": "Exhibitor Big Ideas",
    "title": "Retail under attack: Safeguarding operations in a world of constant threats",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "15:15",
    "time_end": "15:45",
    "type": "Exhibitor Big Ideas",
    "title": "Modern data, modern retail: How leaders are transforming for what’s next",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "15:15",
    "time_end": "15:45",
    "type": "Exhibitor Big Ideas",
    "title": "The future of retail spend",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "15:15",
    "time_end": "15:45",
    "type": "Exhibitor Big Ideas",
    "title": "The new payment methods boosting checkout conversion",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "15:15",
    "time_end": "15:45",
    "type": "Exhibitor Big Ideas",
    "title": "The AI-empowered organization: Setting a new bar for innovation and pace of change",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "15:15",
    "time_end": "15:45",
    "type": "Exhibitor Big Ideas",
    "title": "AI-powered content at scale: The Home Depot marketing reinvention",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "16:00",
    "time_end": "16:30",
    "type": "Exhibitor Big Ideas",
    "title": "Serving relevance at Scale: Modernizing digital discovery with AI",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "16:00",
    "time_end": "16:30",
    "type": "Exhibitor Big Ideas",
    "title": "The decision excellence playbook for retail leaders",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "16:00",
    "time_end": "16:30",
    "type": "Exhibitor Big Ideas",
    "title": "“Bring the outside in”: Operationalizing weather analytics to successfully manage demand volatility",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "16:00",
    "time_end": "16:30",
    "type": "Exhibitor Big Ideas",
    "title": "Accelerating agentic commerce at the intelligent retail edge with HPE and NVIDIA",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-12",
    "day": "Monday",
    "time_start": "16:00",
    "time_end": "16:30",
    "type": "Exhibitor Big Ideas",
    "title": "Redefining retail payments: Seamless, secure, omnichannel commerce",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "09:15",
    "time_end": "09:45",
    "type": "Exhibitor Big Ideas",
    "title": "From vision to value: How innovative brands are powering their AI transformation",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "09:15",
    "time_end": "09:45",
    "type": "Exhibitor Big Ideas",
    "title": "Fulfilling 80% of online orders from stores: How Dick’s Sporting Goods achieved omnichannel excellence",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "09:15",
    "time_end": "09:45",
    "type": "Exhibitor Big Ideas",
    "title": "Localized, optimized & not surprised! Leveraging weather-driven demand in a retail business",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "09:15",
    "time_end": "09:45",
    "type": "Exhibitor Big Ideas",
    "title": "Turning data into action: A journey to operational excellence",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "09:15",
    "time_end": "09:45",
    "type": "Exhibitor Big Ideas",
    "title": "Retail’s new advantage: Sustainable growth powered by location intelligence",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "10:15",
    "time_end": "11:00",
    "type": "Exhibitor Big Ideas",
    "title": "AI for retail in action: Where intelligent insights meet authentic experiences",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "10:15",
    "time_end": "11:00",
    "type": "Exhibitor Big Ideas",
    "title": "How Alo Yoga and Tailored Brands drive merchandising growth with AI",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "10:15",
    "time_end": "11:00",
    "type": "Exhibitor Big Ideas",
    "title": "From “markdowns” to a “waste ecosystem”: How M&S is redesigning exit, freshness and margin",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "10:15",
    "time_end": "11:00",
    "type": "Exhibitor Big Ideas",
    "title": "The 25% comp sales gap you can’t ignore",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "10:15",
    "time_end": "11:00",
    "type": "Exhibitor Big Ideas",
    "title": "AI and the connected retail journey: Unifying products, people, and experiences",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "10:30",
    "time_end": "11:00",
    "type": "Featured Session",
    "title": "Elevating retail experiences in the digital age: Building the future of in-store media",
    "location": "Javits North, Level 4, Klaviyo Stage"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "10:30",
    "time_end": "11:00",
    "type": "Featured Session",
    "title": "North American retail economic outlook 2026: What’s next for consumers, retailers and the connected economy",
    "location": "Javits North, Level 4, Mirakl Stage"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "10:30",
    "time_end": "11:00",
    "type": "Featured Session",
    "title": "Hungry for Innovation: Inside Taco Bell's tech-driven evolution",
    "location": "Javits North, Level 4, Logicbroker Stage"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "11:20",
    "time_end": "11:50",
    "type": "Featured Session",
    "title": "How retail media is navigating its first economic crisis",
    "location": "Javits North, Level 4, Logicbroker Stage"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "11:20",
    "time_end": "11:50",
    "type": "Featured Session",
    "title": "The Connected network redefining modern commerce—with Saks Fifth Avenue",
    "location": "Javits North, Level 4, Klaviyo Stage"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "11:20",
    "time_end": "11:50",
    "type": "Featured Session",
    "title": "The future of retail through services — how service-led strategies are reshaping retail",
    "location": "Javits North, Level 4, Mirakl Stage"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "11:30",
    "time_end": "12:30",
    "type": "Exhibitor Big Ideas",
    "title": "From runway to checkout: The data exposing the trends that will reshape apparel, luxury & footwear in 2026",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "11:30",
    "time_end": "12:30",
    "type": "Exhibitor Big Ideas",
    "title": "From insight to action: How AI is rewriting retail execution",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "11:30",
    "time_end": "12:30",
    "type": "Exhibitor Big Ideas",
    "title": "Future under pressure: Inside the moves retailers are making for 2026",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "11:30",
    "time_end": "12:30",
    "type": "Exhibitor Big Ideas",
    "title": "AI-powered grocery: Driving margin, security, and shopper loyalty",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "11:30",
    "time_end": "12:30",
    "type": "Exhibitor Big Ideas",
    "title": "Rewriting commerce with AI: How data, creators, and platforms shape retail discovery and growth",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "12:10",
    "time_end": "12:40",
    "type": "Featured Session",
    "title": "Giving Walmart fashion cred: A conversation with Denise Incandela",
    "location": "Javits North, Level 4, Mirakl Stage"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "12:10",
    "time_end": "12:40",
    "type": "Featured Session",
    "title": "Empowering the AI shopper: Creating friction-free experiences in the age of agentic commerce",
    "location": "Javits North, Level 4, Klaviyo Stage"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "12:10",
    "time_end": "12:40",
    "type": "Featured Session",
    "title": "How traditional retailers are managing marketplaces",
    "location": "Javits North, Level 4, Logicbroker Stage"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "13:00",
    "time_end": "13:30",
    "type": "Featured Session",
    "title": "Keys to connection: Creating campaigns that tap cultural relevance and drive brand preference",
    "location": "Javits North, Level 4, Logicbroker Stage"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "13:00",
    "time_end": "13:30",
    "type": "Featured Session",
    "title": "Fact or Fiction? Retail Realities with Two Industry Veterans",
    "location": "Javits North, Level 4, Klaviyo Stage"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "13:00",
    "time_end": "13:45",
    "type": "Exhibitor Big Ideas",
    "title": "The new omnichannel playbook for grocery leaders",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "13:00",
    "time_end": "13:45",
    "type": "Exhibitor Big Ideas",
    "title": "How Tecovas and Mattress Firm are scaling with AI for inventory, planning and IT",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "13:00",
    "time_end": "13:45",
    "type": "Exhibitor Big Ideas",
    "title": "AI for resilient supply chains",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "13:00",
    "time_end": "13:45",
    "type": "Exhibitor Big Ideas",
    "title": "Exhibitor Big Ideas session produced by Symphony AI",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "13:00",
    "time_end": "13:45",
    "type": "Exhibitor Big Ideas",
    "title": "AI and Cybersecurity: Protecting the retail environment of the future",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "14:00",
    "time_end": "14:30",
    "type": "Exhibitor Big Ideas",
    "title": "The future of social retail: Where shopping meets community",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "14:00",
    "time_end": "14:30",
    "type": "Exhibitor Big Ideas",
    "title": "From video to value: Turning cameras into retail growth engines",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "14:00",
    "time_end": "14:30",
    "type": "Exhibitor Big Ideas",
    "title": "Reimaging merchant payments: How Bank of America and FreedomPay are shaping the future of global commerce",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "14:00",
    "time_end": "14:30",
    "type": "Exhibitor Big Ideas",
    "title": "Why intelligent inventory is the new retail currency",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "14:00",
    "time_end": "14:30",
    "type": "Exhibitor Big Ideas",
    "title": "Turning transactions into transformations: How payment data fuels the future of retail",
    "location": "Exhibitor Big Ideas Stage 5"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "14:45",
    "time_end": "15:15",
    "type": "Exhibitor Big Ideas",
    "title": "Scaling connectivity across every storefront: How Meter is simplifying multi-site retail networks",
    "location": "Exhibitor Big Ideas Stage 1"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "14:45",
    "time_end": "15:15",
    "type": "Exhibitor Big Ideas",
    "title": "The top 10 retention moves the fastest-growing brands swear by in 2026",
    "location": "Exhibitor Big Ideas Stage 2"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "14:45",
    "time_end": "15:15",
    "type": "Exhibitor Big Ideas",
    "title": "From pen & paper to robots: Inside Staples Canada’s robotics rollout",
    "location": "Exhibitor Big Ideas Stage 3"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "14:45",
    "time_end": "15:15",
    "type": "Exhibitor Big Ideas",
    "title": "Retail resilience: How back office functions enable agility amid tariffs, legislation, and consumer shifts",
    "location": "Exhibitor Big Ideas Stage 4"
  },
  {
    "date": "2026-01-13",
    "day": "Tuesday",
    "time_start": "14:45",
    "time_end": "15:15",
    "type": "Exhibitor Big Ideas",
    "title": "The million-dollar associate: Supercharging human connection with AI-powered clienteling",
    "location": "Exhibitor Big Ideas Stage 5"
  }
];

const PROCESSED_RAW_DATA: Session[] = RAW_LIST.map((s, idx) => ({
  ...s,
  id: `provided-${idx}`,
  speakers: [],
  isSelected: false
})) as Session[];

// ----------------------------------------------------------------------
// 8. MASTER SESSIONS (Merged)
// ----------------------------------------------------------------------

// Helper to find and update speakers for Featured Sessions
const FEATURED_SPEAKERS_DATA: Record<string, { name: string; title: string; company: string }[]> = {
  "New business models: How retail organizations have evolved into business ecosystems": [
    { name: "Alberto Serrentino", title: "Founder", company: "Varese Retail" },
    { name: "Frederico Trajano Inácio Rodrigues", title: "CEO", company: "Magalu" },
    { name: "Gui Serrano", title: "AVP, Corporate Strategy and Development", company: "CVS Health" }
  ],
  "How Mobile Technology is Shaping Customer Experience": [
    { name: "Tyler Gipson", title: "VP Head of MX B2B", company: "Samsung Electronics America" },
    { name: "Chris Padilla", title: "Acting CIO", company: "Dine Brands" }
  ],
  "AWS and PepsiCo: Accelerating AI-driven transformation from customer service to supply chain innovation": [
    { name: "Kris Satterthwaite", title: "GM/Head of Sales, US Retail, Restaurants & CPG", company: "AWS" },
    { name: "Dave Dohnalik", title: "SVP Technology Strategy and Enterprise Products", company: "PepsiCo" }
  ],
  "Experts face off: Debating solutions to tomorrow's retail struggles": [
    { name: "Christine Russo", title: "Founder and Creator", company: "What Just Happened and RCCA" },
    { name: "Oliver Chen", title: "Managing Director, Senior Equity Research Analyst", company: "TD Cowen" },
    { name: "Stacey Widlitz", title: "Chief International Store Hunter", company: "SW Retail Advisors" }
  ],
  "Breaking through the noise: How emerging brands are capturing attention amidst a cacophony of messaging": [
    { name: "Jess Jacobs", title: "CEO", company: "Coterie" },
    { name: "Brooke DiPalma", title: "Senior Reporter", company: "Yahoo Finance" },
    { name: "Noura Sakkijha", title: "CEO and Co-Founder", company: "Mejuri" },
    { name: "Katie Babineau", title: "CMO", company: "Beyond Yoga" }
  ],
  "The rise of agentic commerce: What AI means for the future of shopping": [
    { name: "Mike Edmonds", title: "VP of Agentic Commerce, Commercial Growth", company: "PayPal" },
    { name: "Fiona Tan", title: "CTO", company: "Wayfair" },
    { name: "Angie Brown", title: "CIO", company: "The Home Depot" },
    { name: "Jason Del Rey", title: "Founder and Author", company: "The Aisle" }
  ],
  "Building bold global brands in 2026 - strategy, scale and staying power": [
    { name: "Shane Grenley", title: "International Retail Director", company: "MANGO" },
    { name: "Jennifer Yue", title: "SVP, Tapestry & Coach Strategy & Consumer Insights", company: "Coach" },
    { name: "Elizabeth Preis", title: "CMO and Chief Customer Officer", company: "Victoria's Secret & Co" },
    { name: "Vic Drabicky", title: "Founder and CEO", company: "January Digital" }
  ],
  "Walmart fireside chat: The future of retail in a digital-first world": [
    { name: "Jon Fortt", title: "\"Closing Bell: Overtime\" Co-Anchor", company: "CNBC" },
    { name: "Hari Vasudev", title: "EVP and CTO", company: "Walmart U.S." }
  ],
  "Economic insights and trends: Observations from Chief Economist Ira Kalish": [
    { name: "Ira Kalish", title: "Chief US and Global Economist", company: "Deloitte" }
  ],
  "Agentic commerce in action: How URBN meets shoppers where they are": [
    { name: "Maia Josebachvili", title: "CRO of AI", company: "Stripe" },
    { name: "Rob Frieman", title: "CIO", company: "URBN Urban Outfitters, Inc." }
  ],
  "Leading the perpetually adaptive retail enterprise: Thriving through disruption": [
    { name: "Krishnan Ramanujam", title: "President; Head, Consumer Business Group", company: "Tata Consultancy Services" },
    { name: "David Wood", title: "CEO", company: "Wickes Group plc" },
    { name: "Hannu Krook", title: "Chairman & CEO", company: "S-Group" }
  ],
  "An in-depth look at new Gen Z research": [
    { name: "Brieane Olson", title: "CEO", company: "PacSun, Inc." },
    { name: "Sheena Butler-Young", title: "Senior Correspondent", company: "The Business of Fashion" }
  ],
  "Looking ahead: Future proofing retail in 2028": [
    { name: "Cassandra Napoli", title: "Head of Marketing, Events + Culture Forecasting", company: "WGSN" }
  ],
  "Building and scaling: Winning in a multichannel world": [
    { name: "Melissa Gonzalez", title: "Principal/Founder", company: "MG2/MG2 Advisory" },
    { name: "Christiane Pendarvis", title: "Co-CEO", company: "Pattern Beauty" }
  ],
  "Powering a retail revolution with AI innovation": [
    { name: "Martin Sokalski", title: "Principal, Advisory", company: "KPMG" },
    { name: "Yang Lu", title: "Chief Information & Digital Officer", company: "Tapestry Inc." }
  ],
  "SEO vs GEO … from ranking to relevance": [
    { name: "Rick Egan", title: "CMO", company: "Riviera Marketing" },
    { name: "Samir Desai", title: "EVP, Chief Digital and Technology Officer", company: "Abercrombie & Fitch Co." },
    { name: "Neelima Sharma", title: "SVP Omnichannel and Ecommerce Technology", company: "Lowe's Companies" }
  ],
  "The Z Suite Meets the CMO: Insights into how Gen Z Is using AI to shop for fashion": [
    { name: "Clay Lute", title: "Global Merchant Men's Denim", company: "The Z Suite" },
    { name: "Olivia Meyer", title: "Gen Z Speaker & Consultant", company: "The Z Suite" },
    {
      name: "Sofia Sahai", title": "", company: "The Z Suite" },
    { name: "Kristen D'Arcy", title: "CMO and Head of Digital Growth", company: "True Religion" },
    { name: "Naomi Barrales", title: "Gen Z Consultant, Global Fashion Marketing", company: "The Z Suite" }
  ],
  "Reimagining retail in the age of AI: Macy's bold new chapter": [
    { name: "Max Magni", title: "Chief Customer & Digital Officer", company: "Macy's, Inc." },
    { name: "Stephen Frieder", title: "Chief Revenue Officer, Enterprise", company: "Adobe" }
  ],
  "Rewired: How AI is reshaping the path to purchase in fashion and beauty": [
    { name: "Matthias Haase", title: "VP, Content Solutions", company: "Zalando" },
    { name: "Brendan Witcher", title: "VP, Principal Analyst", company: "Forrester Research" },
    { name: "Linda Li", title: "Managing Director", company: "COS North America" },
    { name: "Nadine Graham", title: "SVP & GM, Ecommerce", company: "Sephora" }
  ],
  "NYC urban retail treasures: The 2026 Shopping Playbook": [
    { name: "José Raul Padron", title: "Design Lead - The Hershey Experience", company: "Hersheys" },
    { name: "Cynthia Ortiz", title: "International President", company: "Retail Design Institute" }
  ],
  "Think like a marketer, act like a creator: Brands share their secrets to success on TikTok Shop": [
    { name: "Richard Cox", title: "Chief Merchandising Officer", company: "Pacsun" },
    { name: "Neil Saunders", title: "Managing Director", company: "GlobalData" },
    { name: "Feliz Papich", title: "SVP Digital Technology, Experience and Insights", company: "Crocs, Inc" },
    { name: "Jenna Manula Linares", title: "VP, Digital Marketing", company: "tarte cosmetics" }
  ],
  "Revolutionizing retail: Landmark's RFID rollout across DCs and stores": [
    { name: "Gopal Chari", title: "Regional Manager", company: "ClarityRFID" },
    { name: "Rahul Arya", title: "VP & Head - Business Excellence Centrepoint", company: "Landmark Group" }
  ],
  "The art and science of modern marketing: A fireside chat with Kelly Mahoney, CMO, Ulta Beauty": [
    { name: "Kelly Mahoney", title: "CMO", company: "Ulta Beauty" },
    { name: "Curtis Wilson", title: "VP and General Manager, National Client Group", company: "American Express" }
  ],
  "The power of private brands: Luring today's cost-conscious shopper": [
    { name: "Emily Erusha-Hilleque", title: "SVP, Private Brands", company: "Macy's" },
    { name: "Scott Morris", title: "SVP - Food, Consumables, and Manufacturing", company: "Walmart Inc." },
    { name: "Mike Wier", title: "VP, CVS Store Brands", company: "CVS Health" },
    { name: "Melissa Repko", title: "Retail Reporter", company: "CNBC" },
  ],
  "Returns are the new retail battleground": [
    { name: "Sender Shamiss", title: "CEO and Co-founder", company: "ReturnPro" },
    { name: "Sylvester John", title: "VP & Head, Reverse Supply Chain", company: "Walmart US" },
    { name: "Jessica Dickler", title: "Personal Finance Reporter", company: "CNBC" }
  ],
  "Can AI fix online fashion discovery?": [
    { name: "Hilary Milnes", title: "Executive Americas Editor", company: "Vogue Business" },
    { name: "Julie Bornstein", title: "Founder and CEO", company: "Daydream" },
    { name: "Lauren Price", title: "SVP, Ecommerce & Digital Marketing", company: "COS" },
    { name: "Kristen Sosa", title: "CEO", company: "Zadig&Voltaire" }
  ],
  "The Power of connection: How merchandising and innovation drive meaningful member moments at Sam's Club": [
    { name: "Jason Goldberg", title: "Chief Commerce Strategy Officer", company: "Publicis Groupe" },
    { name: "Julie Barber", title: "EVP, Chief Merchandising Officer", company: "Sam's Club" }
  ],
  "A New Era of Retail: Inside Target's Tech-led Transformation with Open AI": [
    { name: "Prat Vemana", title: "EVP and Chief Information and Product Officer", company: "Target" },
    { name: "Poonam Goyal", title: "Sr Equity Research Analyst", company: "Bloomberg Intelligence" },
    { name: "Ashley Kramer", title: "VP, Enterprise", company: "OpenAI" }
  ],
  "Retail creators: Culture that converts": [
    { name: "Sarah Henry", title: "Head of Content, Influencer, & Commerce", company: "Walmart" },
    { name: "Jenn Volk", title: "Head of Digital", company: "H&M Americas" },
    { name: "Jill Manoff", title: "Editor-in-chief", company: "Glossy & Modern Retail" },
    { name: "Ashley Schapiro", title: "VP Marketing", company: "American Eagle" }
  ],
  "The new loyalty engine: How AI is redefining customer acquisition and retention": [
    { name: "Jason Johnson", title: "CIO", company: "Sweetwater Sound" },
    { name: "Eleanor Preston", title: "Regional VP, Strategic Accounts", company: "Twilio" },
    { name: "Meera Bhatia", title: "President and COO", company: "Fabletics" }
  ],
  "Supercharging Customer Experience with Community-First Strategies: a conversation featuring Kevin Kelley and Barnes & Noble": [
    { name: "Kevin Kelley", title: "Principal and Co-Founder", company: "Shook Kelley" },
    { name: "Shannon DeVito", title: "Senior Director, Books", company: "Barnes & Noble Inc." }
  ],
  "Lessons from DTC trailblazers: Surviving and thriving": [
    { name: "Dayna Quanbeck", title: "President", company: "Rothy's" },
    { name: "Emily Heyward", title: "Co-founder and Chief Brand Officer", company: "Red Antler" },
    { name: "Jessica Schinazi", title: "CEO", company: "Away" },
    { name: "Ashley Kechter", title: "Global President", company: "Vuori" }
  ],
  "Beyond the website: Reinventing retail for AI-native shoppers": [
    { name: "David Clark", title: "Chief Customer Officer", company: "Frasers Group" },
    { name: "Bernadette Nixon", title: "Board Member", company: "Algolia" },
    { name: "Jennifer Myers", title: "Head of Strategic Partnerships", company: "Microsoft Shopping" }
  ],
  "How to break through in 2026 without burning cash": [
    { name: "Erik Huberman", title: "Founder and CEO", company: "Hawke Media" },
    { name: "Oliver Trevena", title: "Co-Founder and CEO", company: "Caliwater" },
    { name: "Jake Sloan", title: "Sr. Director of Marketing", company: "Electrolit" }
  ],
  "Elevating retail experiences in the digital age: Building the future of in-store media": [
    { name: "Michael Budzisz", title: "VP, In-Store Creative & Innovation", company: "Dick's Sporting Goods" },
    { name: "Ariel Haroush", title: "CEO and Founder", company: "Outform" },
    { name: "Alex Rangel", title: "VP of Strategy & Marketing", company: "Outform Group" }
  ],
  "North American retail economic outlook 2026: What's next for consumers, retailers and the connected economy": [
    { name: "Joyce Chang", title: "Chair of Global Research", company: "JPMorgan" }
  ],
  "Hungry for Innovation: Inside Taco Bell's tech-driven evolution": [
    { name: "Dane Mathews", title: "Chief Digital & Technology Officer", company: "Taco Bell" },
    { name: "Phillip Jackson", title: "CEO", company: "Future Commerce" }
  ],
  "How retail media is navigating its first economic crisis": [
    { name: "Max Willens", title: "Principal Analyst", company: "Emarketer" },
    { name: "Mark Williamson", title: "AVP Retail Media", company: "Costco Wholesale" },
    { name: "Aaron Dunford", title: "VP of Nordstrom Media", company: "Nordstrom" },
    { name: "Lisa Valentino", title: "President", company: "Best Buy Ads" }
  ],
  "The Connected network redefining modern commerce—with Saks Fifth Avenue": [
    { name: "Chris Akrimi", title: "VP Supplier Network & B2B GTM", company: "Lightspeed Commerce" },
    { name: "Dax Dasilva", title: "CEO", company: "Lightspeed Commerce Inc." },
    { name: "Mark Cudina", title: "VP Transformation Commercial Buying & Planning", company: "Saks Global" }
  ],
  "The future of retail through services — how service-led strategies are reshaping retail": [
    { name: "Eduardo Yamashita", title: "Operations Director", company: "Gouvea Ecosystem" },
    { name: "Rogerio Barreira", title: "President", company: "McDonald's / Arcos Dorados" }
  ],
  "Giving Walmart fashion cred: A conversation with Denise Incandela": [
    { name: "Denise Incandela", title: "EVP, Fashion", company: "Walmart" },
    { name: "Rachel Dalton", title: "Head of Retailer Insights, Americas", company: "Kantar" }
  ],
  "Empowering the AI shopper: Creating friction-free experiences in the age of agentic commerce": [
    { name: "Ryan Marks", title: "Dir., NA Grocery & Drug", company: "Visa" },
    { name: "Jack Hilger", title: "Sr. Director, North America Product", company: "Visa" },
    { name: "Andrew Laudato", title: "EVP and COO", company: "The Vitamin Shoppe" }
  ],
  "How traditional retailers are managing marketplaces": [
    { name: "Miguel Almeida", title: "President of Digital & Customer Experience", company: "Nordstrom" },
    { name: "Sarah Travis", title: "EVP and Chief Digital and Revenue Officer", company: "Target" },
    { name: "Ken Pilot", title: "Founder", company: "Ken Pilot Ventures" },
    { name: "Frank Bedo", title: "Chief Marketplace & eCommerce Officer", company: "Best Buy" }
  ],
  "Keys to connection: Creating campaigns that tap cultural relevance and drive brand preference": [
    { name: "Hope King", title: "Founder", company: "Macro Talk" },
    { name: "Stefani Fleurant", title: "EVP, Sports & Lifestyle Marketing", company: "Authentic Brands Group" }
  ],
  "Fact or Fiction? Retail Realities with Two Industry Veterans": [
    { name: "Billy May", title: "CEO", company: "Brooklinen, Inc." },
    { name: "Josh Krepon", title: "President, DTC", company: "Steven Madden, Ltd" }
  ]
};

// Exhibitor Big Ideas Speakers
const EXHIBITOR_SPEAKERS_DATA: Record<string, { name: string; title: string; company: string }[]> = {
  "Shelf awareness: How smart stores win shoppers": [
    { name: "Finn Wikander", title: "Global CPO", company: "Pricer" },
    { name: "Rob Smith", title: "CTO", company: "EoE Co-op" }
  ],
  "From reactive to proactive: How Rocky Brands scaled omnichannel support with AI": [
    { name: "Amy Williams", title: "VP", company: "Global Customer Experience, Talkdesk" },
    { name: "Michael Klein", title: "Industry Marketing Director", company: "Talkdesk" }
  ],
  "Gymshark & SAP: Winning in retail with cloud, AI, and resilient strategies": [
    { name: "Andre Bechtold", title: "President SAP Industries & Experiences", company: "SAP" },
    { name: "John Douglas", title: "CTO", company: "GymShark" },
    { name: "Sophia Christmann", title: "Moderator | Senior Business Development Specialist", company: "SAP" }
  ],
  "One store, one forecast: Transforming retail operations with a unified platform": [
    { name: "Tom Herman", title: "Chief Strategy Officer", company: "Northgate Markets" },
    { name: "Evelyn McMullen", title: "Senior Industry Analyst", company: "Nucleus Research" },
    { name: "Rick Schlenker", title: "Co-Founder", company: "SVP Strategic Sales, LOGILE, INC." }
  ],
  "From storefront to edge: Scaling secure retail experiences": [
    { name: "Jesse Wolcott", title: "Assistant Director of IT", company: "Royal Farms" },
    { name: "Richard Newman", title: "Chief Strategy Officer", company: "Scale Computing" },
    { name: "Eric Yoo", title: "Deputy CISO", company: "MCM Worldwide" },
    { name: "Dave Stubbs", title: "CTO", company: "Avolta" }
  ],
  "AI in eCommerce operations: Lessons from the front lines": [
    { name: "Mark Simon", title: "VP", company: "Strategy, Celigo" },
    { name: "Ronen Vengosh", title: "Chief Strategy Office", company: "Celigo" },
    { name: "Jefrey Hill", title: "Sr. Director", company: "Global Supply Chain, Titan Brands" }
  ],
  "From reactive to predictive: How retailers are rewriting fulfillment for margin, speed, and resilience": [
    { name: "Vikas Aron", title: "Chief Product Officer", company: "Bricz" },
    { name: "Dennis Mullahy", title: "Retail Advisor", company: "Bricz" },
    { name: "Ronnie Robinson", title: "Board Member", company: "Duluth Trading Company" }
  ],
  "Profit starts at checkout": [
    { name: "Priyanka Agrawal", title: "Vertical Manager", company: "Retail, Adyen" },
    { name: "Glynis Doyle", title: "Director", company: "Global Retail Experience, Benefit Cosmetics" },
    { name: "Elisse Shank", title: "Senior Director", company: "Omni, Aritzia" },
    { name: "John Head", title: "Director of Payments", company: "Slalom" }
  ],
  "Driving conversions: How 3 retailers win with dynamic, AI-powered eCommerce messages": [
    { name: "Ken Pilot", title: "Founder", company: "Ken Pilot Ventures" },
    { name: "Bob Yarbrough", title: "SVP Ecommerce", company: "Knitwell Group" },
    { name: "Kristi LeVeque", title: "VP", company: "Ecommerce, Saks OFF 5TH" },
    { name: "Kacey Sharrett", title: "Chief Digital Officer", company: "Hanna Andersson" }
  ],
  "China's AI-driven retail transformation: Implications for global brands": [
    { name: "Betty McIntosh", title: "Senior Business Development Manager", company: "Alibaba Cloud" },
    { name: "Feiran Liu", title: "U.S. Head of Beauty & Personal Care", company: "Tmall Global, Alibaba Group" },
    { name: "Nishant Agrawal", title: "Industry Solutions Architect", company: "Alibaba Cloud" }
  ],
  "Personalization at Scale: Using AI to unlock the next phase of growth": [
    { name: "Kathleen Mitford", title: "Corporate Vice President of Global Industry Marketing", company: "Microsoft" },
    { name: "Shekhar Gowda", title: "Vice President of Global Marketing Technology", company: "The Coca Cola Company" },
    { name: "Leo Griffin", title: "GM of Retail & Consumer Goods Digital Strategy Group", company: "Adobe" }
  ],
  "The Agentic Enterprise: How Salesforce helps retailers thrive in today's AI native world": [
    { name: "Celeste Richardson", title: "Sr Director", company: "Retail Industry Advisor, Salesforce" },
    { name: "Martin Priest", title: "Director", company: "Retail Industry Advisor, Salesforce" },
    { name: "Ricky Wilson", title: "SVP Channels", company: "Pandora" },
    { name: "Sivaraman Jagadeesen", title: "Business Analytics and AI", company: "The Children's Place" }
  ],
  "Designing certainty: How MillerKnoll masters complexity with probabilistic planning": [
    { name: "Jennifer Ferrando", title: "SVP of Global Retail Operations", company: "MillerKnoll" }
  ],
  "In-store retail media networks: Screen time that pays": [
    { name: "Jessica Creces", title: "SVP", company: "Strategic Growth, Creative Realities" }
  ],
  "From production to customer experience: The power of agentic ecosystems": [
    { name: "Melissa Minkow", title: "Global Director of Retail Strategy", company: "CI&T" },
    { name: "Tony D'Onofrio", title: "President at Sensormatic", company: "CEO of TD Insights" },
    { name: "Teniola Adedipe", title: "VP", company: "Omni Strategy & Experience, Old Navy" }
  ],
  "Winning the modern buyer: How a strong digital foundation delivers the customer experiences shoppers expect": [
    { name: "Jon Gobeli", title: "VP of Digital Commerce", company: "CITY Furniture" },
    { name: "Craig Hewitt", title: "Chief Operating Officer", company: "The Paper Store" }
  ],
  "Turning schedules into action – how Kendra Scott drives performance with optimized scheduling and AI": [
    { name: "Aaron Locke", title: "Sr. Director", company: "Retail Planning & Asset Protection, Kendra Scott" },
    { name: "Laurence Painell", title: "Chief Product and Technology Officer", company: "Quinyx" }
  ],
  "The future shopper in the Agentic era with Kyndryl & VML": [
    { name: "Jessica Saperstein", title: "Executive", company: "VP and Consult Partner, North America Lead, Kyndryl Vital, Kyndryl" },
    { name: "Brian Yamada", title: "Chief Innovation & Tech Transformation Officer", company: "VML" }
  ],
  "From weeks to hours: Accelerating speed-to-market with Agentic AI": [
    { name: "Erick Barbor", title: "VP Strategy and Program Delivery Europe", company: "Philip Morris International" },
    { name: "Christos Tsagkalidis", title: "Head Strategy and Program Delivery Europe", company: "Philip Morris International" }
  ],
  "Building the AI-ready enterprise: How JD Sports is scaling smarter": [
    { name: "Olivier Nachba", title: "Deputy CTO", company: "JD Sports" },
    { name: "Nicola Kinsella", title: "Chief Strategy Officer", company: "Fluent Commerce" },
    { name: "Jamie Cairns", title: "Chief Growth Officer", company: "Fluent Commerce" }
  ],
  "Redefining customer loyalty through smarter post-purchase journeys": [
    { name: "Julian Krenge", title: "Co-Founder and Chief Product Officer", company: "parcelLab" },
    { name: "Jordan Gesky", title: "Associate Director Customer Experience", company: "True Classic" }
  ],
  "The future of retail: How RFID lays a foundation for AI-driven analytics in supply chains and in-store experiences": [
    { name: "Bill Toney", title: "Vice President", company: "Advanced Technology, Avery Dennison" },
    { name: "Bill Hardgrave", title: "President", company: "University of Memphis" },
    { name: "Art Miller", title: "Vice President of Business Development and Global Head of Retail IoT", company: "Qualcomm Technologies" },
    { name: "Hervé d'Halluin", title: "Leader", company: "RFID & Traceability, Decathlon" }
  ],
  "AI meets home services: Taskrabbit's integration with Alexa+": [
    { name: "Mike Murphy", title: "Director of Business Development", company: "Amazon Alexa+" },
    { name: "Petra Schindler-Carter", title: "GM Retail and Consumer Goods", company: "AWS" },
    { name: "Ania Smith", title: "CEO", company: "Taskrabbit" }
  ],
  "Turning discovery into revenue: Tapestry's AI-powered retail transformation with Adobe AI": [
    { name: "Loni Stark", title: "Vice President of Strategy & Product", company: "Adobe Experience Cloud, Adobe" },
    { name: "Manav Gulati", title: "Sr. Director", company: "Digital Architecture & Engineering, Tapestry" }
  ],
  "Beyond loss prevention: Building resilient retail through science, strategy, and smart technology": [
    { name: "Dr. Read Hayes", title: "Executive Director", company: "Loss Prevention Research Council and Research Scientist, The University of Florida" },
    { name: "Jonathan Novack", title: "Loss Prevention Manager US", company: "CA & PR, H&M" }
  ],
  "AI as the retail game-changer: Leading the frontier firm transformation": [
    { name: "Ruth Harrison", title: "Global Lead R&CG", company: "Avanade" },
    { name: "John Khoury", title: "CTO", company: "Strand Bags" },
    { name: "Regis Litre", title: "CIO", company: "Rag & Bone" },
    { name: "Felice Miller", title: "Global Business Strategy Lead R&CG", company: "Microsoft Corporation" }
  ],
  "Drive growth with unified Agentforce commerce": [
    { name: "Ricky Wilson", title: "SVP Channels", company: "Pandora" },
    { name: "Nitin Mangtani", title: "SVP/GM Agentforce Commerce", company: "Salesforce" },
    { name: "Brian Quill", title: "VP Omni-channel", company: "Under Armour" }
  ],
  "AI in retail: From hype to sustainable success": [
    { name: "Gonzague de Pirey", title: "Chief OmniChannel and Data Officer", company: "LVMH" },
    { name: "Patricia Wilkey", title: "Sr Vice President & General Manager", company: "Lenovo Solutions and Services Group, Lenovo" },
    { name: "Ran Hu", title: "Director of Strategic Business Development", company: "NVIDIA" },
    { name: "Morgan Mao", title: "Global CEO", company: "SKAI Intelligence" }
  ],
  "Every shift counts: Michael Kors & Sprouts on turning execution into revenue": [
    { name: "Joe Horton", title: "Senior Director", company: "Retail Sales and Operations, Michael Kors" },
    { name: "Kyle Eynon", title: "Director Training & Development", company: "Sprouts Farmers Market" }
  ],
  "From pilots to profit - Agentic AI at scale": [
    { name: "Valentina Labate", title: "Chief Strategy Officer", company: "PittaRosso and ScarpeScarpe" },
    { name: "Prashant Agrawal", title: "CEO and Founder", company: "Impact Analytics" }
  ],
  "Merchandising agility: Innovation at Urban Outfitters with velocity data & strategy AI": [
    { name: "Paul Reigel", title: "Senior Director Information Technology", company: "URBN Urban Outfitters, Inc" },
    { name: "Sean Rattay", title: "Senior Manager Business Intelligence", company: "URBN Urban Outfitters, Inc" },
    { name: "Grace Barruga", title: "Director", company: "Retail Strategy, Strategy" }
  ],
  "AI innovation: From design to customer satisfaction": [
    { name: "Kris Satterthwaite", title: "GM/Head of Sales", company: "US Retail, Restaurants & CPG, AWS" },
    { name: "Fabio Luzzi", title: "Chief Data and Analytics Officer", company: "Tapestry" },
    { name: "Ann Scharenberg", title: "Director of Architecture and Services", company: "Nestlé Purina" }
  ],
  "Improve customer loyalty with Agentic marketing": [
    { name: "James Murphy", title: "Director", company: "Retail Industry Advisor, Salesforce" },
    { name: "Collin Kemble", title: "Distinguished Strategic SE", company: "Salesforce" },
    { name: "Leia Smith", title: "Marketing Manager", company: "ListEngage" },
    { name: "Roger Graell Sole", title: "CDO", company: "Guess Europe" }
  ],
  "Smart commitment management with CLM: Lessons from Lands' End": [
    { name: "Shannon Kreps", title: "VP Marketing", company: "Raindrop" },
    { name: "Duane Walz", title: "Senior Director", company: "IT Planning, Lands' End" },
    { name: "Mayank Joshi", title: "Senior Customer Success", company: "Raindrop" }
  ],
  "Smarter scheduling, happier teams: How Marine Layer elevates the retail experience": [
    { name: "Jillian Graves", title: "Retail People Operations Senior Associate", company: "Marine Layer" },
    { name: "Isabella Feder", title: "People and Operations Administrator", company: "Marine Layer" },
    { name: "Adam Ferris", title: "VP of Sales", company: "Deputy" }
  ],
  "Modernizing frontline work: Pilot's journey to connect people, and drive operational excellence": [
    { name: "Jorge Valdes", title: "SVP of Operations", company: "Pilot Company" },
    { name: "Erin Valade", title: "Strategic Account Director", company: "YOOBIC" },
    { name: "David Dawson", title: "VP", company: "Retail and Digital Technology, Pilot Company" },
    { name: "Bahareh Ghazinoori", title: "Global VP of Account Management", company: "YOOBIC" }
  ],
  "Securing the AI agents that power the future of retail": [
    { name: "Harish Peri", title: "SVP and General Manager for AI Security", company: "Okta" },
    { name: "Daniel McClure", title: "Director", company: "Technology Services, Warby Parker" }
  ],
  "Localization: Where data meets place": [
    { name: "John Bullock", title: "Business Intelligence Manager", company: "Ashley Furniture Industries" },
    { name: "Ada Amatucci", title: "Financial Controller", company: "HONOR Bridal" },
    { name: "Alexandra Scott", title: "Geospatial Developer", company: "Ashley Furniture Industries" }
  ],
  "Renovating your business model to ignite strategic growth: A fireside chat with Lowe's": [
    { name: "Sophie Marchessou", title: "Chief Customer Officer", company: "Mirakl" },
    { name: "Joe Cano", title: "SVP of Digital", company: "Lowe's" }
  ],
  "From chaos to clarity: AI-powered pricing & inventory as the new margin engine": [
    { name: "Prashant Agrawal", title: "CEO and Founder", company: "Impact Analytics" },
    { name: "Chris Norris", title: "Retail Director", company: "Group Technology and Digital Platforms, al Futtiam" }
  ],
  "Reimagining retail with AI - Cognizant, Academy Sport, Monro & El Puerto de Liverpool": [
    { name: "Sushant Warikoo", title: "SVP & Business Unit Head Retail", company: "Cognizant" },
    { name: "Joe Condomina", title: "Head of Enterprise Architecture & Integration", company: "Academy Sports + Outdoors" },
    { name: "Nick Hawryschuk", title: "Senior Vice President of Operations", company: "Monro" },
    { name: "Gerardo Muñoz Martin", title: "CTIO", company: "El Puerto de Liverpool" }
  ],
  "AI for retail - Powered by partnerships": [
    { name: "Hayley Tabor", title: "Vice President", company: "Global Alliances, Industries, Dell Technologies" },
    { name: "Azita Martin", title: "Vice President and General Manager Retail & CPG", company: "NVIDIA" },
    { name: "Brett Leary", title: "Global Gen AI Lead – Retail Industry", company: "Accenture" },
    { name: "Joe White", title: "Chief Executive Officer", company: "Everseen" }
  ],
  "Empowering the frontline with AI: 7-Eleven and Hy-Vee's Workday transformation": [
    { name: "Kalan Comba", title: "CTO - Americas", company: "Workday" },
    { name: "Becky Olson", title: "Senior Principal Product Manager", company: "Hy-Vee, Inc." },
    { name: "Rachel Allen", title: "Head of Talent Acquisition", company: "7-Eleven Inc." }
  ],
  "Smashing retail silos with AI-powered network transparency": [
    { name: "Andrea Morgan-Vandome", title: "Chief Innovation Officer", company: "Blue Yonder" },
    { name: "Tom Farrell", title: "VP", company: "Merchandising Systems and Technologies, Fabletics" },
    { name: "Amit Kulkarni", title: "VP", company: "Supply Chain Merchandising & Co-op Brands Tech, REI" }
  ],
  "How customer experience still creates retail's competitive edge": [
    { name: "Marc Iannotta", title: "Vice President of Operations", company: "Veronica Beard" },
    { name: "Jason Lerman", title: "VP of Information Technology and Systems", company: "UNTUCKit" },
    { name: "Harsha Bellur", title: "Chief Information Officer", company: "James Avery Artisan Jewelry" },
    { name: "Cailin Broccoli", title: "VP", company: "Customer Experience, NewStore" }
  ],
  "AI frontier: Blending innovation and tradition": [
    { name: "Sterling Raehtz", title: "Head of Sales", company: "ShopperTrak Analytics, Americas, Sensormatic Solutions" },
    { name: "Michael Love", title: "Chief Retail Officer", company: "Boot Barn" }
  ],
  "Democratizing retail media: Technology that powers growth": [
    { name: "Celeste Donahoe", title: "Director of Amazon Retail Ad Service", company: "Amazon" },
    { name: "Michael Krans", title: "Vice President of Retail Media", company: "Macy's" },
    { name: "Mike Feldman", title: "SVP", company: "Commerce, Flywheel" },
    { name: "Jason O'Toole", title: "Head of Connected Commerce & Media", company: "Gildan/HanesBrands" }
  ],
  "Accelerating retail transformation: Lessons from a multi-phase enterprise rollout": [
    { name: "Mike Bonamy", title: "VP", company: "Selling Applications Architecture, Solutions Development, Delivery & Support, Hibbett" },
    { name: "Tim Boggess", title: "VP", company: "Strategy, Innovation, and Applications Delivery & Support, Hibbett" },
    { name: "Jason Bjork", title: "VP", company: "Retail Consulting, Oracle" },
    { name: "Becky Wrzosek", title: "VP", company: "NA Sales, Retail Consult" }
  ],
  "Is Agentic AI already rewriting the rules of retail leadership?": [
    { name: "Karen Beebe", title: "CTO", company: "Bealls, Inc." },
    { name: "Sanjeev Siotia", title: "CTO", company: "Manhattan" },
    { name: "Dave Stevens", title: "CTO", company: "Groupe Dynamite Inc." },
    { name: "Eduardo Frias", title: "Field CTO", company: "Lifestyle, Shopify" }
  ],
  "Revolutionizing fresh operations: Embracing RFID in grocery to reduce waste and boost profits": [
    { name: "Julie Vargas", title: "VP/GM Enterprise Intelligent Label Growth", company: "Avery Dennison" },
    { name: "Jonathan Olsen", title: "Senior Director", company: "In Stock & Innovation, The Kroger Co." }
  ],
  "Winning peak season: How leading retailers redefine Black Friday with AI": [
    { name: "Tarun Luthra", title: "Global VP", company: "SAP Industries and Customer Experience, SAP" },
    { name: "Naresh Krisnamurthy", title: "Senior Manager", company: "Business Transformation, Molton Brown" },
    { name: "Kristin Howell", title: "SAP Global Vice President - Retail Industry BU", company: "SAP" },
    { name: "Suhaim Mohamed", title: "Head of Architecture & Application Portfolio", company: "Douglas Group Technology" }
  ],
  "How Kroger drives better frontline experience with AI": [
    { name: "Karl Niemann", title: "Vice President of Human Resources", company: "The Kroger Co." }
  ],
  "The quiet backbone of retail: IoT supply chain systems that prevent store failure": [
    { name: "Guy Yehiav", title: "President", company: "SmartSense by Digi" },
    { name: "Zoli Stahl", title: "Food Safety Specialist", company: "Sprouts" },
    { name: "Dave Steck", title: "President & Founder", company: "Steck Consulting" },
    { name: "Matt Bunker", title: "Director of Asset Protection & Workplace Safety", company: "Lowes Foods" }
  ],
  "Scaling AI in retail: Tractor Supply and RELEX on what's next": [
    { name: "Glenn Allison", title: "VP", company: "Enterprise AI Platforms and AI Solution Engineering, Tractor Supply Company" },
    { name: "Mikko Kärkkäinen", title: "CEO and Co-founder", company: "RELEX Solutions" }
  ],
  "Inventory in sync: How digital twin technology protects the brand promise": [
    { name: "Sharon Gai", title: "AI and Innovation Expert", company: "Culture Fluid" },
    { name: "Jakub Szkopowicz", title: "Product Owner Tech Retail", company: "BESTSELLER" },
    { name: "Tracey Strober", title: "Global Senior Director of Retail Technology", company: "URBN" },
    { name: "Hilbert Dijkstra", title: "General Manager Retail", company: "Nedap" }
  ],
  "Becoming a frontier firm: Unlocking the new ROI — return on intelligence": [
    { name: "Keith Mercier", title: "Vice President of Worldwide Retail and Consumer Goods", company: "Microsoft" }
  ],
  "The AI-powered shopper: How generative agents are building retail's new front door for consumers": [
    { name: "Jose Gomes", title: "Vice President Retail & Consumer", company: "Google Cloud" },
    { name: "Yael Cosset", title: "EVP", company: "Chief Digital and Technology Officer, Kroger" },
    { name: "Jordan Broggi", title: "EVP Customer Experience and Online", company: "The Home Depot" }
  ],
  "The ultimate customer experience: Hilton & Universal Music Group's data & AI journeys": [
    { name: "Holly Moreland", title: "Senior Director", company: "Customer Engagement & MarTech, Hilton" },
    { name: "Shailesh Mohanty", title: "Sr. Director of Product Management", company: "Universal Music Group" },
    { name: "Karen Wood", title: "Chief Marketing Officer", company: "Treasure Data" }
  ],
  "Data, innovation and AI at Tapestry: Coach and Kate Spade": [
    { name: "Mandeep Bhatia", title: "SVP of Global Digital Product & Omnichannel Innovation", company: "Tapestry, Inc." },
    { name: "Melissa Wong", title: "CEO & Co-Founder", company: "Zipline" }
  ],
  "When AI works for people: Transforming engagement, retention and efficiency": [
    { name: "Sanish Mondkar", title: "Founder & CEO", company: "Legion Technologies" },
    { name: "Ryan Holm", title: "Divisional Vice President of Retail Innovation and Operations", company: "Helzberg" },
    { name: "Karen Beebe", title: "CTO", company: "Bealls, Inc." },
    { name: "Steve Page", title: "Global Head of Transformations", company: "Ingka Group - IKEA" }
  ],
  "Digital resilience: Inside the tech transformation at Burger King": [
    { name: "Thibault Roux", title: "Chief Digital Officer", company: "Burger King" },
    { name: "Marybeth Pearce", title: "Vice President", company: "Global Enterprise Sales, Comcast Business" },
    { name: "Melissa Lapp-LoBasso", title: "Executive Director", company: "Brand Growth & Innovation, Comcast Business" }
  ],
  "The retail leader's Edge: Pricing for AI, tariffs, and the new consumer": [
    { name: "Matthew Pavich", title: "Sr. Director", company: "Strategy and Innovation, Revionics" },
    { name: "Janet Rickford", title: "Vice President", company: "Stores and Merchandising Solutions, Loblaw Companies Limited" },
    { name: "Scott Winburn", title: "Senior Director of Pricing Strategy", company: "Coborn's, Inc." },
    { name: "Youssef Seffar", title: "Group Pricing Director", company: "LabelVie" }
  ],
  "Redefining retail resilience: Prioritizing transactions with 5G network slicing": [
    { name: "John Hill", title: "Director of Solutions Engineering", company: "T-Mobile For Business" },
    { name: "Anthony Lawson", title: "Sr. Director", company: "Product Management, Ericsson" },
    { name: "Deborah Weinswig", title: "CEO and Founder", company: "Coresight Research Inc." },
    { name: "Scott Spearin", title: "Sr. Manager", company: "Retail Strategy, Columbia" }
  ],
  "Transforming retail frontlines: Real-world wins with frontline AI": [
    { name: "Art Miller", title: "Vice President of Business Development and Global Head of Retail IoT", company: "Qualcomm Technologies" },
    { name: "Tom Kooser", title: "Chief Technology Officer", company: "Total Wine & More" },
    { name: "Alexandra Powers", title: "Director of Program Management", company: "Office Depot OfficeMax" },
    { name: "Yogesh Kulkarni", title: "Vice President", company: "Strategy Products & Solutions, Zebra Technologies" }
  ],
  "Growing market share in a disrupted retail landscape": [
    { name: "Erich Kahner", title: "Head of Competitive Strategy & Insights", company: "Americas, dunnhumby" },
    { name: "Ryan Draude", title: "Head of Loyalty", company: "Giant Food" },
    { name: "Alain Tadros", title: "Vice President and CMO & Digital Strategy", company: "Metro Inc." },
    { name: "Ethan Chernofsky", title: "Chief Marketing Officer", company: "Placer.ai" }
  ],
  "How Amazon and adidas are setting new fulfillment standards for the footwear industry": [
    { name: "Petra Schindler-Carter", title: "GM Retail and Consumer Goods", company: "AWS" },
    { name: "Peter Larsen", title: "Vice President of Multichannel Commerce & Fulfillment", company: "Amazon" },
    { name: "Erin Chaney", title: "Senior Vice President of eCommerce", company: "adidas NA" }
  ],
  "An AI holiday: Unpacking changing shopper habits and planning for 2026": [
    { name: "Caila Schwarz", title: "Director", company: "Industry Insights, Salesforce" },
    { name: "Parnell Eagle", title: "President and Chief Commercial Officer", company: "Janie and Jack" }
  ],
  "From vision to value: How Agentic and Perceptive AI are shaping the future of retail": [
    { name: "Andy Szanger", title: "Director of Strategy", company: "CDW" },
    { name: "Andy Cadwell", title: "VP Strategic Enterprise", company: "CDW" },
    { name: "Dan Connors", title: "Sr. AI Developer and Advocate", company: "Nvidia" }
  ],
  "How Lowe's is super powering associates to enhance customer service": [
    { name: "Mark Loebach", title: "VP", company: "Store Operations Technology, Lowe's" },
    { name: "Kiran Ramaraju", title: "Vice President", company: "Technology, Post Sale, Associate Productivity and Contact Center, Lowe's" },
    { name: "Matthew Guiste", title: "Global Retail Technology Strategist", company: "Zebra Technologies" }
  ],
  "From complexity to performance & productivity: How TravelCenters of America, Ford & Avis unlock productivity for their frontline": [
    { name: "Steven Kramer", title: "CEO & Founder", company: "WorkJam" },
    { name: "Deborah Shelton", title: "VP of Hospitality Operations Support", company: "TravelCenters of America" },
    { name: "LaShawn Swann", title: "Business Development and Strategy Specialist", company: "Ford Motor Company" },
    { name: "Phil Chen", title: "Senior Director of Workforce Planning & Analysis", company: "Avis Budget Group" },
    { name: "Will Eadie", title: "Chief Strategy Officer", company: "WorkJam" }
  ],
  "Transform customer experience with AI: Lessons from Saks Global and Dine Brands": [
    { name: "Petra Schindler-Carter", title: "GM Retail and Consumer Goods", company: "AWS" },
    { name: "Chris Padilla", title: "Acting CIO", company: "Dine Brands" },
    { name: "Jessica Bengzten", title: "Senior Vice President of Customer Support", company: "Saks Global" }
  ],
  "Retail under attack: Safeguarding operations in a world of constant threats": [
    { name: "Jason James", title: "CIO", company: "Aptos" },
    { name: "Krithika Ganesamoorthi", title: "Solutions Architect", company: "Amazon Web Services" },
    { name: "Roger Delph", title: "Head of Security", company: "Oxford Industries" },
    { name: "Rosemary DeAragon", title: "Global Head of Retail & Consumer Goods", company: "Snowflake" }
  ],
  "Modern data, modern retail: How leaders are transforming for what's next": [
    { name: "Neda Nia", title: "Chief Product & Growth Officer", company: "Stibo Systems" },
    { name: "Danson Huang", title: "Global Vice President of Omnichannel & Digital Commerce", company: "Diageo" },
    { name: "Kranthi Malreddy", title: "Chief Information Officer", company: "Batteries Plus" }
  ],
  "The future of retail spend": [
    { name: "Jacob King", title: "Senior Vice President", company: "Head of Amex Offers Digital Media, American Express" },
    { name: "Jill Krizelman", title: "SVP of Global Marketing & eCommerce", company: "TUMI" },
    { name: "Alex Paull", title: "Vice president & General Manager", company: "Retail National Client Group, American Express" }
  ],
  "The new payment methods boosting checkout conversion": [
    { name: "Dan Coates", title: "Director Product Management", company: "ACI Worldwide" },
    { name: "Stan Wilson", title: "VP", company: "Merchant Market Development, Paze" }
  ],
  "The AI-empowered organization: Setting a new bar for innovation and pace of change": [
    { name: "Carrie Tharp", title: "VP", company: "Solutions & Industries, Google Cloud" },
    { name: "Fiona Tan", title: "Chief Technology Officer", company: "Wayfair" },
    { name: "Philip Glebow", title: "Chief Enterprise Architect & VP Data", company: "AI and MarTech, Catalyst Brands LLC" }
  ],
  "AI-powered content at scale: The Home Depot marketing reinvention": [
    { name: "Hannah Elsakr", title: "Vice President of GenAI New Business Ventures", company: "Adobe" },
    { name: "Marta Frattini", title: "Director", company: "Retail and Consumer Industry Strategy, Adobe" },
    { name: "Stacie Santana", title: "Senior Director", company: "Marketing Operations, The Home Depot" }
  ],
  "Serving relevance at Scale: Modernizing digital discovery with AI": [
    { name: "Lauren Amundson", title: "Product Owner Search & Product Discovery", company: "US Foods" },
    { name: "Peter Curran", title: "General Manager of Commerce", company: "Coveo" }
  ],
  "The decision excellence playbook for retail leaders": [
    { name: "Sandeep Baghel", title: "SVP of Information Systems Applications", company: "Perry Ellis International" },
    { name: "Amy Shore", title: "Director", company: "Process Innovation, Supply Chain Transformation, Tiffany & Co." },
    { name: "Lindsay DiPietro", title: "Head of Retail Product Management", company: "Anaplan" },
    { name: "James Theuerkauf", title: "VP", company: "Product, Anaplan (former Syrup Tech)" }
  ],
  "\"Bring the outside in\": Operationalizing weather analytics to successfully manage demand volatility": [
    { name: "Mohan Valluri", title: "Executive Vice President", company: "Alamance Foods" },
    { name: "Joe Mondella", title: "Vice President of Sales", company: "Randa Apparel & Accessories" }
  ],
  "Accelerating agentic commerce at the intelligent retail edge with HPE and NVIDIA": [
    { name: "Azita Martin", title: "Vice President and General Manager Retail & CPG", company: "NVIDIA" },
    { name: "Rom Kosla", title: "CIO", company: "HPE" },
    { name: "Amy Santucci", title: "VP and GM", company: "HPE Industries, HPE" }
  ],
  "Redefining retail payments: Seamless, secure, omnichannel commerce": [
    { name: "Rajeev Yerukalapudi", title: "EVP", company: "Global Head of Strategy & Partnerships, Verifone" },
    { name: "Jeff Pomeroy", title: "SVP", company: "Enterprise Payments and PSP Platform, PayPal" }
  ],
  "From vision to value: How innovative brands are powering their AI transformation": [
    { name: "Ellie Quartel", title: "AVP", company: "Retail Industry GTM, ServiceNow" },
    { name: "Tamesha Henry", title: "VP of Tech Ops", company: "Gap Inc." },
    { name: "Mike Maresca", title: "Chief Technology & Transformation Officer", company: "Ulta Beauty" },
    { name: "Mike Bassani", title: "Senior Vice President Enterprise Technology", company: "Starbucks Coffee Company" }
  ],
  "Fulfilling 80% of online orders from stores: How Dick's Sporting Goods achieved omnichannel excellence": [
    { name: "Diego Mazzitelli", title: "VP of Technology - Retail AI Studio", company: "Globant" },
    { name: "Jeremy Graham", title: "VP of Engineering for Athlete Technology", company: "Dick's Sporting Goods" }
  ],
  "Localized, optimized & not surprised! Leveraging weather-driven demand in a retail business": [
    { name: "Björn Olausson", title: "Director of Data & Analytics", company: "Reitan Convenience" },
    { name: "Erin Blackburn-Smith", title: "Vice President", company: "Brand Analytics, Tropical Smoothie Cafe" }
  ],
  "Turning data into action: A journey to operational excellence": [
    { name: "Scott Gehrke", title: "Director", company: "Technical Support, Radial" },
    { name: "Shash Anand", title: "SVP", company: "Product Strategy, SOTI" }
  ],
  "Retail's new advantage: Sustainable growth powered by location intelligence": [
    { name: "Steve Rowen", title: "Managing Partner", company: "Retail Systems Research" },
    { name: "Michael Rao", title: "Manager", company: "Acquisition Analytics, Nestlé Nespresso USA" }
  ],
  "AI for retail in action: Where intelligent insights meet authentic experiences": [
    { name: "Rosemary DeAragon", title: "Global Head of Retail & Consumer Goods", company: "Snowflake" },
    { name: "Kayla Itsines", title: "Co-Founder & Head Trainer", company: "Sweat" },
    { name: "Low Ngai Yuen", title: "Managing Director", company: "AEON360" }
  ],
  "How Alo Yoga and Tailored Brands drive merchandising growth with AI": [
    { name: "Gurhan Kok", title: "Founder & CEO", company: "invent.ai" },
    { name: "Jamie Bragg", title: "EVP", company: "Chief Supply Chain Officer, Tailored Brands" },
    { name: "Priya Swamy", title: "VP Corporate IT", company: "Mattress Firm" }
  ],
  "From \"markdowns\" to a \"waste ecosystem\": How M&S is redesigning exit, freshness and margin—end to end": [
    { name: "Stuart Kinghorn", title: "Head of Food Operations & Transformation", company: "Marks & Spencer" }
  ],
  "The 25% comp sales gap you can't ignore": [
    { name: "Sean Bonnell", title: "Client Success Manager", company: "StoreForce" },
    { name: "William Bennett", title: "Director of Retail Data Analytics", company: "Journeys" }
  ],
  "AI and the connected retail journey: Unifying products, people, and experiences": [
    { name: "Paul Woodward", title: "Vice President of Retail Products", company: "Oracle" },
    { name: "Amanda Woodly", title: "Sr. Product Strategy Director", company: "Oracle" }
  ],
  "From runway to checkout: The data exposing the trends that will reshape apparel, luxury & footwear in 2026": [
    { name: "Michael Gunther", title: "VP Head of Insights", company: "Consumer Edge" },
    { name: "Dan Frommer", title: "Founder and Editor in Chief", company: "The New Consumer" },
    { name: "Jordan Welling", title: "Senior Consumer Insights Manager", company: "Tecovas" }
  ],
  "From insight to action: How AI is rewriting retail execution": [
    { name: "Fabrice Haiat", title: "CEO and Co-founder", company: "YOOBIC" },
    { name: "Noreen Allen", title: "CMO", company: "YOOBIC" },
    { name: "Gabriel Bertoli", title: "Chief Digital Transformation Officer", company: "L'Oréal" }
  ],
  "Future under pressure: Inside the moves retailers are making for 2026": [
    { name: "Jeff Szabo", title: "Vice President", company: "Supply Chain Planning, Canadian Tire Corporation" },
    { name: "Owen Carr", title: "Chief Merchandising Officer", company: "Spreetail" },
    { name: "Robert Brace", title: "Vice President of Distribution", company: "Rona" },
    { name: "Tony DiPaolo", title: "Vice President", company: "Head of Retail, Sales & Customer Success, SPS Commerce" }
  ],
  "AI-powered grocery: Driving margin, security, and shopper loyalty": [
    { name: "Peter Schultz", title: "NVIDIA AI Technologist / BDM Role – Retail", company: "Lenovo" },
    { name: "João Diogo Falcão", title: "CEO", company: "AiFi" },
    { name: "Joshua Mora", title: "Chief Product Officer", company: "RocketBoots" },
    { name: "Carlos Landrau", title: "Director of Security & Surveillance", company: "Bozzutos" }
  ],
  "Rewriting commerce with AI: How data, creators, and platforms shape retail discovery and growth": [
    { name: "James van Leuven", title: "Sr. Director of Retail Solutions", company: "iSoftStone" },
    { name: "Andy Javaheri", title: "North America Regional Manager & VP of Sales", company: "Alibaba Cloud" },
    { name: "Dwight Pitter", title: "Chief Information Officer", company: "Westcon-Comstor" },
    { name: "Christopher Carl", title: "Head of US Marketing", company: "AliExpress" }
  ],
  "The new omnichannel playbook for grocery leaders": [
    { name: "Ryan Hamburger", title: "VP Commercial Partnerships", company: "Instacart" },
    { name: "Justin Weinstein", title: "Executive Vice President and Chief Merchandising & Marketing Officer", company: "Giant Eagle" }
  ],
  "How Tecovas and Mattress Firm are scaling with AI for inventory, planning and IT": [
    { name: "Gurhan Kok", title: "Founder & CEO", company: "invent.ai" },
    { name: "Casey Hahn", title: "VP", company: "Store Planning, Allocations, S&Op, Alo" },
    { name: "Kevin Harwood", title: "CTO", company: "Tecovas" }
  ],
  "AI for resilient supply chains": [
    { name: "Marc Del Vecchio", title: "Staff Solution Manager", company: "Supermicro" },
    { name: "Greg Bellon", title: "Principal Consultant", company: "Kinetic Vision" },
    { name: "Tarik Hammadou", title: "Senior Developer Relation Manager", company: "NVIDIA" },
    { name: "Anna Farberov", title: "General Manager", company: "PepsiCo Labs, PepsiCo" }
  ],
  "AI and Cybersecurity: Protecting the retail environment of the future": [
    { name: "Kenneth Ogami", title: "Security Leader for Retail and Hospitality", company: "Palo Alto Networks" },
    { name: "Elias Oxendine IV", title: "CISO", company: "Tractor Supply Company" },
    { name: "Gianni D'Aprile", title: "CISO", company: "BJ's Wholesale Club" }
  ],
  "The future of social retail: Where shopping meets community": [
    { name: "Olga Dogadkina", title: "co-founder & CEO", company: "Emperia" },
    { name: "Justin Breton", title: "Head of Brand Partnerships & Emerging Experiences", company: "Walmart" }
  ],
  "From video to value: Turning cameras into retail growth engines": [
    { name: "Karissa Price", title: "Chief Customer Officer", company: "Dragonfruit AI" },
    { name: "Randy Meadows", title: "Board Advisor", company: "Former Head of Loss Prevention for Kohl's, Dragonfruit AI" },
    { name: "David Sherwood", title: "CEO", company: "Daniel's Jewelers" },
    { name: "Don Stenger", title: "Portfolio Lead", company: "Insight" }
  ],
  "Reimaging merchant payments: How Bank of America and FreedomPay are shaping the future of global commerce": [
    { name: "Juan Garrido", title: "Managing Director", company: "Head of Global Banking Merchant Product, Bank of America" },
    { name: "Kevin Carson", title: "Senior Vice President", company: "Global Partnerships, FreedomPay" },
    { name: "Dan Carr", title: "Principal", company: "Flagship Advisory Partners" }
  ],
  "Turning transactions into transformations: How payment data fuels the future of retail": [
    { name: "Kate Walton", title: "CCO", company: "Merchant Payments, J.P. Morgan Payments" },
    { name: "Delphine Herve", title: "CFO", company: "Sephora USA Inc." },
    { name: "Thomas Chiang", title: "Global Payments & Loyalty Strategy Manager", company: "PLSO Energy Products, ExxonMobil Corporation" }
  ],
};

// AI Stage Speakers
const AI_STAGE_SPEAKERS_DATA: Record<string, { date: string; time_start: string; speakers: { name: string; title: string; company: string }[] }[]> = {
  "The Intelligent Store: How dm and Vusion Are Shaping the Future of Retail": [
    {
      date: "2026-01-11", time_start: "10:30", speakers: [
        { name: "Christian Wild", title: "Director Instore Logistics", company: "dm-drogiere markt" },
        { name: "Jenny Jasper", title: "Director Instore Logistics", company: "dmTECH GmbH" },
        { name: "Aaron Cheris", title: "Global Retail Practice Head", company: "Bain & Company" },
        { name: "Andreas Roessl", title: "Group CTO of VusionGroup", company: "VusionGroup" }
      ]
    },
  ],
  "AI Stage - General Roundtable Discussions": [
    {
      date: "2026-01-11", time_start: "11:20", speakers: [
        { name: "Matt McKinney", title: "CEO & Co-founder", company: "Loop" },
        { name: "George Trantas", title: "VP", company: "Global Accelerator Sales, Avalara" },
        { name: "Lindsey Peters", title: "Director", company: "Value Engineering, Celonis" },
        { name: "Thaddeus Segura", title: "Senior Vice President of Product", company: "Vusion" },
        { name: "Scott Sorokin", title: "Global Head Born Group", company: "Tech Mahindra" }
      ]
    },
    {
      date: "2026-01-12", time_start: "12:10", speakers: [
        { name: "Steve Norris", title: "VP", company: "Digital Commerce, Logicbroker" },
        { name: "Royanna Chappell", title: "VP Global Partnerships and Alliances", company: "Ocado Intelligent Automation" },
        { name: "Craig Reed", title: "General Manager", company: "Cross-border, Avalara" },
        { name: "Chintan Shah", title: "CEO", company: "Said Differently" },
        { name: "Matt Tyler", title: "VP", company: "Strategic Innovation, Wachter" },
        { name: "Dean Tarpley", title: "Industry Principal", company: "Celonis" },
        { name: "Edouard Maupilé", title: "Head of Channel & Alliance - North America", company: "Odoo" },
        { name: "Matt Roman", title: "Chief Technology Officer", company: "KWI" },
        { name: "Cathy Leous", title: "Global Account Team Director", company: "Microsoft Corporation" },
        { name: "Chris Reese", title: "Vice President of Customer Success", company: "Cresta" },
        { name: "Sameer Sharma", title: "AVP of the IOT BU (Americas & Europe)", company: "MediaTek" }
      ]
    },
  ],
  "AI-first by 2026: The new baseline for every retail brand": [
    {
      date: "2026-01-11", time_start: "12:10", speakers: [
        { name: "Jamie Domenici", title: "Chief Marketing Officer", company: "Klaviyo" },
        { name: "Amy Carr", title: "Chief Marketing and Digital Officer", company: "Thirdlove" }
      ]
    },
  ],
  "AI Stage - Agentic Roundtable Discussions": [
    {
      date: "2026-01-11", time_start: "13:00", speakers: [
        { name: "Danilo Sato", title: "Global VP of AI", company: "Thoughtworks" },
        { name: "Patrick Harding", title: "Chief Product Architect", company: "Ping Identity" },
        { name: "Jamie Domenici", title: "Chief Marketing Officer", company: "Klaviyo" },
        { name: "Ty Sweet", title: "Sr. Director of Technical Marketing", company: "KIBO Commerce" },
        { name: "Sandeep Sharma", title: "SVP", company: "Global Head, Retail & CPG Vertical, Tech Mahindra" },
        { name: "Brian Yoon", title: "VP of Product", company: "Ping Identity" },
        { name: "Marc Celler", title: "Sr. Director", company: "Rocketium" },
        { name: "Elizabeth Lachhar", title: "Executive Vice President", company: "Americas, Rezolve AI" },
        { name: "Bradford Peirce", title: "Staff Product Marketing Manager", company: "Retail, Okta" }
      ]
    },
    {
      date: "2026-01-12", time_start: "13:50", speakers: [
        { name: "Keith Blankenship", title: "Retail Customer Liaison", company: "Celonis" },
        { name: "Vic Miles", title: "General Manager", company: "Industry Advisory, Microsoft" },
        { name: "Sanjeev Vishwakarma", title: "CEO", company: "Aretove Inc." },
        { name: "Anna Beck", title: "Business Solutions Director", company: "Aretove Inc." },
        { name: "Scott MacDonald", title: "Vice President Product & Marketing", company: "Exchange Solutions" },
        { name: "Bruce Richards", title: "Head of Global Industry Strategy - Consumer Goods", company: "Adobe Systems Incorporated" },
        { name: "Jules Levy", title: "Head of Generative & Agentic AI GTM", company: "Enterprise, ServiceNow" },
        { name: "Ally Johnston", title: "Product Marketing Lead", company: "Sierra" },
        { name: "Marc Celler", title: "Sr. Director", company: "Rocketium" },
        { name: "Brendan O'Shaughnessy", title: "VP Sales | Partners", company: "Rezolve" }
      ]
    },
    {
      date: "2026-01-13", time_start: "12:10", speakers: [
        { name: "Anne-Claire Baschet", title: "Chief Data & AI Officer", company: "Mirakl" },
        { name: "Jed Dougherty", title: "Head of AI Architecture", company: "Dataiku" },
        { name: "Scott MacDonald", title: "Vice President Product & Marketing", company: "Exchange Solutions" },
        { name: "Corey Spencer", title: "GM & GVP", company: "AI, UKG" },
        { name: "Mike Gordon", title: "Enterprise Account Executive", company: "UiPath" },
        { name: "Karan Katyal", title: "VP", company: "Digital Commercial Strategy, Adyen" },
        { name: "Shawnna DelHierro", title: "Chief Information Officer", company: "SoundHound AI" },
        { name: "Carla Winston", title: "Solutions Consultant", company: "Retail & CPG, Dataiku" },
        { name: "Tom Occhino", title: "Chief Product Officer", company: "Vercel" }
      ]
    },
  ],
  "AI-powered productivity: Elevating your customer experience through business insights, digital simulation, and advanced robotics": [
    {
      date: "2026-01-12", time_start: "10:30", speakers: [
        { name: "Mark Richardson", title: "CEO", company: "Ocado Intelligent Automation" }
      ]
    },
  ],
  "Harnessing AI in retail: Progress, pitfalls, and potential": [
    {
      date: "2026-01-12", time_start: "11:20", speakers: [
        { name: "Sameer Sharma", title: "AVP of the IOT BU (Americas & Europe)", company: "MediaTek" },
        { name: "Patrick Blanc", title: "CTO", company: "Ingenico" },
        { name: "Chris Edwards", title: "Director Global Retail Platforms", company: "Circle K" }
      ]
    },
  ],
  "AI at human scale: How SiriusXM builds experiences that feel personal at every touchpoint": [
    {
      date: "2026-01-12", time_start: "13:00", speakers: [
        { name: "Anika Ayyar", title: "Product Manager", company: "Sierra" },
        { name: "Kate Anissimov", title: "VP", company: "Strategic Partnership, SiriusXM" }
      ]
    },
  ],
  "Winning in the Agentic Era: Ulta's Take on the Commerce Roadmap to Success": [
    {
      date: "2026-01-13", time_start: "10:30", speakers: [
        { name: "Anne-Claire Baschet", title: "Chief Data & AI Officer", company: "Mirakl" },
        { name: "Josh Friedman", title: "SVP", company: "Ecommerce & Digital, Ulta Beauty" },
        { name: "Adrien Nussenbaum", title: "Co-founder & Co-CEO", company: "Mirakl" }
      ]
    },
  ],
  "Beyond the 'buy' button: Thriving in the new agentic commerce era": [
    {
      date: "2026-01-13", time_start: "11:20", speakers: [
        { name: "Karan Katyal", title: "VP", company: "Digital Commercial Strategy, Adyen" },
        { name: "Kate Thomas", title: "Senior Director", company: "Global Digital Product and Experience Design, VF Corporation" },
        { name: "Yelena Reznikova", title: "B2B Partnerships", company: "OpenAI" }
      ]
    },
  ],
  "Styling the Future of Retail: AI Patterns That Work": [
    {
      date: "2026-01-13", time_start: "13:00", speakers: [
        { name: "Jed Dougherty", title: "Head of AI Architecture", company: "Dataiku" },
        { name: "Tony Bacos", title: "Chief Product & Technology Officer", company: "Stitch Fix" }
      ]
    },
  ],
};

export const MASTER_SESSIONS: Session[] = [
  ...KEYNOTE_DATA,
  ...PROCESSED_ASK_SPEAKER_DATA,
  ...PROCESSED_RAW_DATA.map(session => {
    // 1. Featured Sessions (Title Match)
    let speakers = FEATURED_SPEAKERS_DATA[session.title];
    if (speakers) {
      return { ...session, speakers };
    }

    // 2. Exhibitor Big Ideas (Title Match)
    speakers = EXHIBITOR_SPEAKERS_DATA[session.title];
    if (speakers) {
      return { ...session, speakers };
    }

    // 3. AI Stage (Title + Date + Time Match)
    const aiStageEntries = AI_STAGE_SPEAKERS_DATA[session.title];
    if (aiStageEntries) {
      // Try exact match
      let match = aiStageEntries.find(entry => entry.date === session.date && entry.time_start === session.time_start);

      // Fallback: If no exact time match, check if there's only one entry for this title, or lax match
      if (!match && aiStageEntries.length === 1) {
        match = aiStageEntries[0];
      }

      if (match) {
        return { ...session, speakers: match.speakers };
      }
    }

    return session;
  }),
].sort((a, b) => a.time_start.localeCompare(b.time_start));
