
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

export const MASTER_SESSIONS: Session[] = [
  ...KEYNOTE_DATA,
  ...PROCESSED_ASK_SPEAKER_DATA,
  ...PROCESSED_RAW_DATA.map(session => {
    // Inject speakers if available
    const speakers = FEATURED_SPEAKERS_DATA[session.title];
    if (speakers) {
      return { ...session, speakers };
    }
    return session;
  }),
].sort((a, b) => a.time_start.localeCompare(b.time_start));
```
