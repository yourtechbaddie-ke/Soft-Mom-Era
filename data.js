const SOFT_MOM_DATA = {
  home: {
    title: "Your soft season starts here.",
    subtitle:
      "A gentle space for your body, your baby, your children, and the woman you are becoming.",

    featured: [
      [
        "Postpartum Care",
        "🤎",
        "Recovery, feeding, sleep, body changes and when to seek care.",
        "postpartum"
      ],
      [
        "My Cycle",
        "🌙",
        "Understand your cycle, symptoms and everyday patterns.",
        "cycle"
      ],
      [
        "Nourish",
        "🥗",
        "Simple nutrition ideas for mothers and families.",
        "nutrition"
      ],
      [
        "Fitness & Movement",
        "🧘🏽‍♀️",
        "Gentle movement from recovery to strength.",
        "fitness"
      ],
      [
        "Raising Kids",
        "🧸",
        "Age-aware guidance for babies, toddlers, kids and teens.",
        "kids"
      ],
      [
        "Mental Wellness",
        "🧠",
        "Support for stress, overwhelm, rest and emotional wellbeing.",
        "mental"
      ]
    ]
  },

  me: {
    title: "Me",
    subtitle:
      "Care for the mother behind the motherhood.",

    items: [
      [
        "My Body",
        "♡",
        "Cycle, hormones, pelvic floor, sexual health and body changes.",
        "body"
      ],
      [
        "Postpartum Care",
        "🤎",
        "Fourth trimester, recovery, feeding, sleep and warning signs.",
        "postpartum"
      ],
      [
        "Nourish",
        "🥗",
        "Nutrition, hydration, meal planning and family food.",
        "nutrition"
      ],
      [
        "Fitness & Movement",
        "🧘🏽‍♀️",
        "Recovery, mobility, strength and short home workouts.",
        "fitness"
      ],
      [
        "Mental Wellness",
        "🧠",
        "Stress, anxiety, burnout, mom guilt and emotional care.",
        "mental"
      ],
      [
        "Self-Care",
        "✨",
        "Beauty, routines, journaling, rest and confidence.",
        "selfcare"
      ],
      [
        "Relationships",
        "❤️",
        "Partner communication, boundaries and connection.",
        "relationships"
      ],
      [
        "Money & Work",
        "💰",
        "Career, childcare, budgeting and returning to work.",
        "money"
      ]
    ]
  },

  kids: {
    title: "Kids",
    subtitle:
      "Guidance that grows with your family.",

    items: [
      [
        "Baby Care",
        "👶🏽",
        "Newborn care, feeding, sleep, development and safety.",
        "baby"
      ],
      [
        "Toddlers",
        "🧸",
        "Tantrums, speech, routines, potty learning and independence.",
        "toddler"
      ],
      [
        "Preschool",
        "🎨",
        "Play, social skills, emotions and school readiness.",
        "preschool"
      ],
      [
        "School Age",
        "📚",
        "Learning, friendships, confidence, behavior and routines.",
        "school"
      ],
      [
        "Teens",
        "💕",
        "Puberty, periods, emotions, body image and independence.",
        "teens"
      ],
      [
        "Health & Safety",
        "🩺",
        "Symptoms, prevention, first aid and knowing when to seek care.",
        "safety"
      ]
    ]
  },

  library: {
    title: "Mom Library",
    subtitle:
      "Saveable, source-aware education for everyday motherhood.",

    items: [
      [
        "Women's Health",
        "🌷",
        "Cycle, reproductive health and body literacy.",
        "body"
      ],
      [
        "Postpartum",
        "🤎",
        "Evidence-informed recovery and adjustment after birth.",
        "postpartum"
      ],
      [
        "Nutrition",
        "🥗",
        "Healthy eating for moms, babies and children.",
        "nutrition"
      ],
      [
        "Parenting",
        "🧸",
        "Development, behavior and family relationships.",
        "kids"
      ],
      [
        "Wellness",
        "✨",
        "Rest, stress, movement and self-care.",
        "mental"
      ],
      [
        "Health & Safety",
        "🩺",
        "Practical safety and care-seeking guidance.",
        "safety"
      ]
    ]
  }
};


const TOPICS = {
  body: {
    title: "My Body",
    description:
      "Understand your body without shame or overwhelm.",

    topics: [
      "Menstrual cycle",
      "Period tracking",
      "Ovulation & fertility",
      "PMS",
      "Hormonal changes",
      "Pelvic floor",
      "Vaginal health",
      "Breast health",
      "Sexual health",
      "Birth control",
      "Pregnancy planning",
      "Body image"
    ],

    sources: [
      "ACOG",
      "WHO",
      "NIH / MedlinePlus"
    ]
  },

  cycle: {
    title: "My Cycle",
    description:
      "Track patterns and learn what changes across your cycle may mean.",

    topics: [
      "Period days",
      "Cycle length",
      "Symptoms",
      "Mood patterns",
      "Cramps",
      "PMS",
      "Ovulation",
      "Fertility awareness",
      "Irregular cycles",
      "When to talk to a clinician"
    ],

    sources: [
      "ACOG",
      "NIH / MedlinePlus"
    ]
  },

  postpartum: {
    title: "Postpartum Care",
    description:
      "Support for the fourth trimester and the months beyond.",

    topics: [
      "Fourth trimester",
      "C-section recovery",
      "Vaginal birth recovery",
      "Postpartum bleeding",
      "Pain & discomfort",
      "Pelvic floor recovery",
      "Breastfeeding",
      "Pumping & milk supply",
      "Sleep & fatigue",
      "Postpartum mood",
      "Postpartum anxiety",
      "Contraception",
      "Postpartum checkups",
      "Warning signs"
    ],

    sources: [
      "ACOG",
      "WHO",
      "CDC",
      "NIH / MedlinePlus"
    ]
  },

  nutrition: {
    title: "Nourish",
    description:
      "Food guidance that fits real mom life.",

    topics: [
      "Healthy eating",
      "Postpartum nutrition",
      "Breastfeeding nutrition",
      "Pregnancy nutrition",
      "Quick meals",
      "Family meals",
      "Toddler nutrition",
      "Picky eating",
      "First foods",
      "Hydration",
      "Iron",
      "Calcium",
      "Protein",
      "Meal planning"
    ],

    sources: [
      "WHO",
      "CDC",
      "NIH / MedlinePlus",
      "AAP / HealthyChildren.org"
    ]
  },

  fitness: {
    title: "Fitness & Movement",
    description:
      "Move gently, build strength and respect recovery.",

    topics: [
      "Postpartum movement",
      "Walking",
      "Pelvic floor",
      "Core recovery",
      "Strength training",
      "Home workouts",
      "5-minute movement",
      "Stretching",
      "Yoga",
      "Mobility",
      "Fitness with baby",
      "Return-to-exercise"
    ],

    sources: [
      "ACOG",
      "WHO"
    ]
  },

  mental: {
    title: "Mental Wellness",
    description:
      "Your emotional wellbeing deserves care too.",

    topics: [
      "Stress",
      "Anxiety",
      "Overwhelm",
      "Mom guilt",
      "Burnout",
      "Postpartum depression",
      "Postpartum anxiety",
      "Self-esteem",
      "Body image",
      "Mindfulness",
      "Journaling",
      "Sleep",
      "Loneliness",
      "Asking for help"
    ],

    sources: [
      "ACOG",
      "WHO",
      "NIH / MedlinePlus"
    ]
  },

  selfcare: {
    title: "Self-Care",
    description:
      "Small rituals that help you feel like yourself.",

    topics: [
      "Skincare",
      "Hair care",
      "Bath & body",
      "Morning routine",
      "Evening routine",
      "Journaling",
      "Meditation",
      "Affirmations",
      "Me time",
      "Confidence",
      "Personal style",
      "Hobbies",
      "Rest days"
    ],

    sources: [
      "WHO",
      "NIH / MedlinePlus"
    ]
  },

  relationships: {
    title: "Relationships",
    description:
      "Connection, communication and boundaries after motherhood changes everything.",

    topics: [
      "Partner communication",
      "Intimacy after baby",
      "Division of responsibilities",
      "Parenting together",
      "Boundaries",
      "Extended family",
      "Friendships",
      "Mom friends",
      "Asking for help"
    ],

    sources: [
      "ACOG",
      "AAP / HealthyChildren.org"
    ]
  },

  money: {
    title: "Money & Work",
    description:
      "Practical support for working and financially planning as a mother.",

    topics: [
      "Returning to work",
      "Maternity leave",
      "Childcare",
      "Family budget",
      "Saving for children",
      "Emergency fund",
      "Working from home",
      "Career development",
      "Work-life balance"
    ],

    sources: [
      "General educational content — verify local rules and financial advice with qualified professionals."
    ]
  },

  baby: {
    title: "Baby Care",
    description:
      "Newborn and infant care, development and safety.",

    topics: [
      "Newborn care",
      "Breastfeeding",
      "Formula feeding",
      "Baby sleep",
      "Crying",
      "Colic",
      "Burping",
      "Diapering",
      "Bathing",
      "Umbilical cord",
      "Baby skin",
      "Teething",
      "Milestones",
      "Tummy time",
      "Baby routines",
      "Childcare"
    ],

    sources: [
      "AAP / HealthyChildren.org",
      "WHO",
      "CDC"
    ]
  },

  toddler: {
    title: "Toddlers",
    description:
      "Support for the big feelings and rapid development of toddlerhood.",

    topics: [
      "Tantrums",
      "Speech",
      "Potty learning",
      "Sleep",
      "Routines",
      "Food",
      "Picky eating",
      "Independence",
      "Positive discipline",
      "Play",
      "Social skills"
    ],

    sources: [
      "AAP / HealthyChildren.org",
      "CDC"
    ]
  },

  preschool: {
    title: "Preschool",
    description:
      "Help your little one build confidence, language and social skills.",

    topics: [
      "School readiness",
      "Play",
      "Language",
      "Social skills",
      "Emotional development",
      "Behavior",
      "Sleep",
      "Nutrition",
      "Independence"
    ],

    sources: [
      "AAP / HealthyChildren.org",
      "CDC"
    ]
  },

  school: {
    title: "School Age",
    description:
      "Learning, confidence, friendships and healthy routines.",

    topics: [
      "Homework",
      "Learning",
      "Friendships",
      "Bullying",
      "Confidence",
      "Behavior",
      "Sleep",
      "Nutrition",
      "Physical activity",
      "Digital habits"
    ],

    sources: [
      "AAP / HealthyChildren.org",
      "CDC"
    ]
  },

  teens: {
    title: "Teens",
    description:
      "Support your child through puberty, identity and growing independence.",

    topics: [
      "Puberty",
      "Periods",
      "Body image",
      "Emotional health",
      "Friendships",
      "Social media",
      "School stress",
      "Communication",
      "Independence",
      "Healthy relationships"
    ],

    sources: [
      "AAP / HealthyChildren.org",
      "CDC",
      "NIH / MedlinePlus"
    ]
  },

  safety: {
    title: "Health & Safety",
    description:
      "Recognize common concerns, prevention steps and situations that need professional care.",

    topics: [
      "Fever",
      "Cough & cold",
      "Vomiting",
      "Diarrhea",
      "Rashes",
      "Allergies",
      "Medication safety",
      "Vaccinations",
      "First aid",
      "Choking",
      "Injury prevention",
      "Emergency warning signs"
    ],

    sources: [
      "AAP / HealthyChildren.org",
      "CDC",
      "WHO",
      "NIH / MedlinePlus"
    ]
  }
};