// Types
export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  text: string;
  type: string;
  icon: string;
}

export interface PersonalityType {
  type: string;
  description: string;
  strengths: string[];
  challenges: string[];
  tips: string[];
  image?: string;
}

// Quiz title and subtitle
export const quizTitle = "What Kind of Leader Are You? (5-Minute Quiz)";
export const quizSubtitle = "Discover your natural leadership superpower and why it explains EVERYTHING about your management style! 🚀";

// Questions array with type-specific options
export const typeQuestions: Question[] = [
  {
    id: 1,
    text: "[Name], your team is facing a major challenge. What's your FIRST instinct?",
    options: [
      {
        text: "Let's break this down into clear steps and create a detailed plan",
        type: "Strategic",
        icon: "🎯"
      },
      {
        text: "I see an amazing opportunity here! Let me share my vision...",
        type: "Visionary",
        icon: "🌟"
      },
      {
        text: "Let's check in with everyone and see how they're feeling about this",
        type: "Empathetic",
        icon: "👥"
      },
      {
        text: "Time to roll up our sleeves and tackle this head-on!",
        type: "Dynamic",
        icon: "⚡"
      }
    ]
  },
  {
    id: 2,
    text: "In a high-stakes meeting, you're most likely to be the one who...",
    options: [
      {
        text: "Presents the data and analysis to support our decision",
        type: "Strategic",
        icon: "📊"
      },
      {
        text: "Shares an inspiring story that gets everyone excited",
        type: "Visionary",
        icon: "🎭"
      },
      {
        text: "Makes sure everyone's voice is heard and valued",
        type: "Empathetic",
        icon: "🤝"
      },
      {
        text: "Pushes for immediate action and quick wins",
        type: "Dynamic",
        icon: "🏃"
      }
    ]
  },
  {
    id: 3,
    text: "[Name], when your team achieves something amazing, you typically...",
    options: [
      {
        text: "Analyze what worked and how we can optimize further",
        type: "Strategic",
        icon: "📈"
      },
      {
        text: "Share the vision of what this means for our future",
        type: "Visionary",
        icon: "🎉"
      },
      {
        text: "Take time to personally celebrate each team member",
        type: "Empathetic",
        icon: "💝"
      },
      {
        text: "Set the next ambitious goal to keep the momentum going",
        type: "Dynamic",
        icon: "🏆"
      }
    ]
  },
  {
    id: 4,
    text: "Your ideal work environment is one where...",
    options: [
      {
        text: "Everything runs like a well-oiled machine with clear processes",
        type: "Strategic",
        icon: "🏢"
      },
      {
        text: "Innovation and new ideas are celebrated daily",
        type: "Visionary",
        icon: "🚀"
      },
      {
        text: "People feel supported and valued for who they are",
        type: "Empathetic",
        icon: "🤗"
      },
      {
        text: "We're constantly pushing boundaries and achieving goals",
        type: "Dynamic",
        icon: "🎯"
      }
    ]
  },
  {
    id: 5,
    text: "[Name], when faced with a tough decision, you tend to...",
    options: [
      {
        text: "Gather all the data and analyze every angle",
        type: "Strategic",
        icon: "📋"
      },
      {
        text: "Focus on the long-term vision and possibilities",
        type: "Visionary",
        icon: "🔮"
      },
      {
        text: "Consider how it will impact everyone involved",
        type: "Empathetic",
        icon: "💭"
      },
      {
        text: "Trust your gut and move forward quickly",
        type: "Dynamic",
        icon: "⚡"
      }
    ]
  },
  {
    id: 6,
    text: "Your team would describe your leadership style as...",
    options: [
      {
        text: "Methodical and well-organized",
        type: "Strategic",
        icon: "🎓"
      },
      {
        text: "Inspiring and future-focused",
        type: "Visionary",
        icon: "✨"
      },
      {
        text: "Supportive and people-focused",
        type: "Empathetic",
        icon: "💝"
      },
      {
        text: "Dynamic and results-driven",
        type: "Dynamic",
        icon: "🚀"
      }
    ]
  },
  {
    id: 7,
    text: "In a crisis, you're most likely to...",
    options: [
      {
        text: "Create a systematic plan to address the issue",
        type: "Strategic",
        icon: "📊"
      },
      {
        text: "Share an inspiring vision of how we'll overcome this",
        type: "Visionary",
        icon: "🌟"
      },
      {
        text: "Focus on supporting and calming the team",
        type: "Empathetic",
        icon: "🤝"
      },
      {
        text: "Take immediate action to resolve the situation",
        type: "Dynamic",
        icon: "⚡"
      }
    ]
  },
  {
    id: 8,
    text: "Your biggest leadership pet peeve is...",
    options: [
      {
        text: "People who don't follow established processes",
        type: "Strategic",
        icon: "😤"
      },
      {
        text: "Those who can't see the bigger picture",
        type: "Visionary",
        icon: "😤"
      },
      {
        text: "Leaders who don't care about their team",
        type: "Empathetic",
        icon: "😤"
      },
      {
        text: "Anyone who moves too slowly",
        type: "Dynamic",
        icon: "😤"
      }
    ]
  },
  {
    id: 9,
    text: "[Name], your ideal team meeting is one where...",
    options: [
      {
        text: "We review data and make strategic decisions",
        type: "Strategic",
        icon: "📈"
      },
      {
        text: "We explore exciting new possibilities",
        type: "Visionary",
        icon: "💫"
      },
      {
        text: "Everyone feels heard and connected",
        type: "Empathetic",
        icon: "👥"
      },
      {
        text: "We set clear goals and get things done",
        type: "Dynamic",
        icon: "🎯"
      }
    ]
  }
];

// Type definitions
export const leadershipTypes: PersonalityType[] = [
  {
    type: "The Visionary Catalyst",
    description: "You're the one who sees possibilities where others see problems. Your natural ability to inspire and motivate through vision makes you a powerful catalyst for change and innovation.",
    strengths: [
      "You have an incredible ability to see the bigger picture",
      "Your enthusiasm is contagious and energizes teams",
      "You're amazing at navigating uncertainty and change",
      "You excel at communicating vision and possibilities"
    ],
    challenges: [
      "Sometimes you need to balance vision with execution",
      "Remember to ground your ideas in practical reality",
      "Build patience for the implementation phase"
    ],
    tips: [
      "Start with the vision, then break it down into actionable steps",
      "Use data to support your visionary ideas",
      "Create regular check-ins to ensure vision alignment"
    ]
  },
  {
    type: "The Strategic Architect",
    description: "You're the master of creating order from chaos. Your analytical mind and systematic approach help you build sustainable success through careful planning and optimization.",
    strengths: [
      "You excel at creating efficient systems and processes",
      "Your data-driven decisions are consistently solid",
      "You're amazing at seeing patterns others miss",
      "You build strong foundations for long-term success"
    ],
    challenges: [
      "Sometimes you need to trust your intuition",
      "Remember that not everything can be measured",
      "Build more comfort with ambiguity"
    ],
    tips: [
      "Balance analysis with action",
      "Include emotional factors in your decision-making",
      "Allow room for creative solutions"
    ]
  },
  {
    type: "The Empathetic Guide",
    description: "You have an extraordinary ability to connect with and develop people. Your high emotional intelligence and genuine care for others create environments where teams thrive.",
    strengths: [
      "You're exceptional at building strong relationships",
      "Your emotional intelligence is off the charts",
      "You create environments where people feel valued",
      "You're a natural mentor and coach"
    ],
    challenges: [
      "Sometimes you need to make tough decisions",
      "Remember to set healthy boundaries",
      "Build more comfort with conflict"
    ],
    tips: [
      "Balance empathy with accountability",
      "Create clear boundaries while maintaining connection",
      "Use your emotional intelligence to navigate difficult situations"
    ]
  },
  {
    type: "The Dynamic Executor",
    description: "You're the one who gets things DONE. Your high energy, drive for results, and ability to create momentum make you a force to be reckoned with.",
    strengths: [
      "You excel at driving results and achieving goals",
      "Your energy and enthusiasm are contagious",
      "You're amazing at overcoming obstacles",
      "You create urgency and momentum naturally"
    ],
    challenges: [
      "Sometimes you need to slow down and reflect",
      "Remember to celebrate small wins",
      "Build more sustainable approaches"
    ],
    tips: [
      "Balance speed with quality",
      "Create space for reflection and learning",
      "Build sustainable momentum through systems"
    ]
  }
];

// Type-specific calculation logic
export const calculateResult = (answers: string[]): PersonalityType => {
  // Count frequency of each type in answers
  const typeCounts = answers.reduce((counts, answer) => {
    const type = answer;
    counts[type] = (counts[type] || 0) + 1;
    return counts;
  }, {} as Record<string, number>);

  // Find dominant type
  let dominantType: string | undefined;
  let maxCount = 0;

  for (const [type, count] of Object.entries(typeCounts)) {
    if (count > maxCount) {
      dominantType = type;
      maxCount = count;
    }
  }

  // Map the dominant type to the full personality profile
  const typeMap: Record<string, string> = {
    "Strategic": "The Strategic Architect",
    "Visionary": "The Visionary Catalyst",
    "Empathetic": "The Empathetic Guide",
    "Dynamic": "The Dynamic Executor"
  };

  // Find matching personality profile
  return leadershipTypes.find(
    (profile) => profile.type === (dominantType ? typeMap[dominantType] : "The Strategic Architect")
  ) || leadershipTypes[0];
}; 