import { Question, PersonalityType } from '../types';

// Quiz title and subtitle
export const quizTitle = "The Mind-Body Connection Assessment [QUIZ]";
export const quizSubtitle = "Discover your somatic awareness score in just 3 minutes";

export const scoreQuestions: Question[] = [
  {
    id: 1,
    text: "When you experience stress, how aware are you of physical sensations in your body?",
    options: [
      { text: "Rarely notice any physical sensations", score: 1, icon: "😶" },
      { text: "Only notice when sensations become intense", score: 2, icon: "😐" },
      { text: "Sometimes notice moderate sensations", score: 3, icon: "🤔" },
      { text: "Often notice subtle bodily responses", score: 4, icon: "😌" },
      { text: "Consistently aware of even slight changes", score: 5, icon: "🧘" }
    ]
  },
  {
    id: 2,
    text: "How often do you pause to check in with how your body is feeling throughout the day?",
    options: [
      { text: "Almost never", score: 1, icon: "⏱️" },
      { text: "Rarely, only when reminded", score: 2, icon: "📅" },
      { text: "Sometimes, a few times a week", score: 3, icon: "🔄" },
      { text: "Often, once or twice daily", score: 4, icon: "✅" },
      { text: "Regularly, multiple times throughout the day", score: 5, icon: "🔁" }
    ]
  },
  {
    id: 3,
    text: "How would you describe your ability to identify where tension is held in your body?",
    options: [
      { text: "Very difficult, can't pinpoint sensations", score: 1, icon: "❓" },
      { text: "Challenging, only notice major areas", score: 2, icon: "🔍" },
      { text: "Moderate, can identify some tension areas", score: 3, icon: "👀" },
      { text: "Good, usually aware of specific locations", score: 4, icon: "👍" },
      { text: "Excellent, precise awareness of subtle tension", score: 5, icon: "🎯" }
    ]
  },
  {
    id: 4,
    text: "When experiencing emotions, how connected are you to corresponding physical sensations?",
    options: [
      { text: "Rarely make any connection", score: 1, icon: "❌" },
      { text: "Occasionally notice strong emotional-physical links", score: 2, icon: "🔗" },
      { text: "Sometimes aware of the connection", score: 3, icon: "🔄" },
      { text: "Often notice how emotions affect my body", score: 4, icon: "💫" },
      { text: "Deeply attuned to the emotion-body relationship", score: 5, icon: "✨" }
    ]
  },
  {
    id: 5,
    text: "How effective are you at using breath to influence your physical and emotional state?",
    options: [
      { text: "Never considered breath as a tool", score: 1, icon: "😶" },
      { text: "Rarely use breath intentionally", score: 2, icon: "💨" },
      { text: "Sometimes use breath when reminded", score: 3, icon: "🌬️" },
      { text: "Often use breath to shift my state", score: 4, icon: "🧘" },
      { text: "Regularly use breath as a primary regulation tool", score: 5, icon: "✨" }
    ]
  },
  {
    id: 6,
    text: "When you're in physical discomfort, how well can you differentiate between types of sensations?",
    options: [
      { text: "Just feel general discomfort", score: 1, icon: "😣" },
      { text: "Basic awareness of pain vs. tension", score: 2, icon: "😖" },
      { text: "Moderate ability to distinguish sensations", score: 3, icon: "🤔" },
      { text: "Good at identifying specific sensation qualities", score: 4, icon: "👁️" },
      { text: "Precisely differentiate between subtle sensations", score: 5, icon: "🔬" }
    ]
  },
  {
    id: 7,
    text: "How would you rate your ability to release tension through movement or mindfulness?",
    options: [
      { text: "Very limited, tension feels permanent", score: 1, icon: "🪨" },
      { text: "Slight ability, can release major tension sometimes", score: 2, icon: "🧱" },
      { text: "Moderate, can release some tension with effort", score: 3, icon: "⚖️" },
      { text: "Good, regularly release tension through practice", score: 4, icon: "💧" },
      { text: "Excellent, can efficiently release tension at will", score: 5, icon: "🌊" }
    ]
  },
  {
    id: 8,
    text: "How often do you notice the connection between your thoughts and physical sensations?",
    options: [
      { text: "Rarely see any connection", score: 1, icon: "🔀" },
      { text: "Occasionally notice with very strong reactions", score: 2, icon: "📎" },
      { text: "Sometimes aware of how thoughts affect my body", score: 3, icon: "🔄" },
      { text: "Often observe the thought-sensation relationship", score: 4, icon: "🔍" },
      { text: "Consistently track how thoughts create sensations", score: 5, icon: "⚡" }
    ]
  },
  {
    id: 9,
    text: "During movement (walking, exercise, etc.), how aware are you of your body's subtle signals?",
    options: [
      { text: "Rarely pay attention to my body", score: 1, icon: "🚶" },
      { text: "Notice only when there's pain or discomfort", score: 2, icon: "😣" },
      { text: "Sometimes aware of major movements and positions", score: 3, icon: "🤸" },
      { text: "Often attuned to how my body feels while moving", score: 4, icon: "🧘" },
      { text: "Deeply connected to subtle sensations throughout movement", score: 5, icon: "✨" }
    ]
  },
  {
    id: 10,
    text: "How would you describe your relationship with your body's signals and needs?",
    options: [
      { text: "Often ignore or override body signals", score: 1, icon: "🙉" },
      { text: "Occasionally listen when signals become intense", score: 2, icon: "🔇" },
      { text: "Sometimes responsive to clear needs", score: 3, icon: "👂" },
      { text: "Usually respectful and responsive to my body", score: 4, icon: "🤝" },
      { text: "Deeply collaborative relationship with my body", score: 5, icon: "💞" }
    ]
  },
  {
    id: 11,
    text: "When practicing mindfulness, how easy is it for you to maintain awareness of bodily sensations?",
    options: [
      { text: "Very difficult, mind constantly wanders", score: 1, icon: "🌪️" },
      { text: "Challenging, can focus briefly before distraction", score: 2, icon: "⏱️" },
      { text: "Moderate ability to stay with sensations", score: 3, icon: "⚖️" },
      { text: "Good ability to maintain body awareness", score: 4, icon: "🧠" },
      { text: "Excellent, sustained awareness with minimal effort", score: 5, icon: "🧘" }
    ]
  },
  {
    id: 12,
    text: "How often do you use movement as a way to connect with your body and emotions?",
    options: [
      { text: "Rarely or never", score: 1, icon: "🛑" },
      { text: "Occasionally, but not intentionally", score: 2, icon: "🚶" },
      { text: "Sometimes use movement for connection", score: 3, icon: "🕺" },
      { text: "Regularly practice mindful movement", score: 4, icon: "💃" },
      { text: "Daily intentional movement for mind-body integration", score: 5, icon: "✨" }
    ]
  }
];

export const scoreProfiles: PersonalityType[] = [
  {
    type: "Disconnection Zone",
    description: "You're experiencing significant separation between mind and body, which may be contributing to physical tension and emotional stress. The good news is that this awareness is the perfect starting point for transformation. Simple daily check-ins with your body can create remarkable shifts in your awareness.",
    scoreRange: { min: 12, max: 24 },
    image: "https://images.unsplash.com/photo-1523803326055-13a0ed2ba465?w=800&auto=format&fit=crop",
    tips: [
      "Try a 3-minute body scan each morning",
      "Notice one physical sensation when emotions arise",
      "Practice pausing to take three conscious breaths throughout your day",
      "Experiment with gentle stretching while focusing on sensations"
    ]
  },
  {
    type: "Awareness Building",
    description: "You have foundational awareness but still miss important body signals during stress or emotional challenges. You're at an exciting threshold where simple, consistent practices can substantially deepen your mind-body connection. Your increasing awareness is opening doors to greater emotional regulation.",
    scoreRange: { min: 25, max: 36 },
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop",
    tips: [
      "Practice breath-body connection during daily activities",
      "Create an emotion-sensation mapping journal",
      "Try gentle movement meditation for 5-10 minutes daily",
      "Develop a personalized check-in practice for stressful moments"
    ]
  },
  {
    type: "Integrated Presence",
    description: "You maintain good mind-body connection in most situations but can deepen this awareness for healing. Your established foundation allows you to explore subtler dimensions of somatic awareness. The consistency you've developed is a powerful platform for advanced practices.",
    scoreRange: { min: 37, max: 48 },
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop",
    tips: [
      "Explore subtle energy awareness practices",
      "Develop intentional movement meditation sequences",
      "Practice tracking sensation flows throughout your body",
      "Integrate mindful awareness into challenging emotional states"
    ]
  },
  {
    type: "Embodied Wisdom",
    description: "You have exceptional mind-body integration and can use this foundation for advanced healing practices. Your highly developed somatic awareness is a profound resource for navigating life's challenges. The depth of your connection allows you to access intuitive wisdom through your body.",
    scoreRange: { min: 49, max: 60 },
    image: "https://images.unsplash.com/photo-1506126279646-a697353d3166?w=800&auto=format&fit=crop",
    tips: [
      "Share your embodiment practices with others",
      "Explore nuanced somatic release techniques",
      "Develop a personalized movement meditation practice",
      "Integrate somatic awareness into creative expression"
    ]
  }
]; 