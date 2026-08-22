/* =========================================================
   SOFT MOM ERA — STAGE 3
   Mom Library Content Engine
   Slogan: Finding Peace in Chaos
   ========================================================= */

const LIBRARY_CONTENT = {
  postpartum: {
    title: "Postpartum Care",
    intro: "Gentle, practical education for the physical and emotional transition after birth.",
    sections: [
      { title: "Your recovery is individual", body: "Recovery after birth does not look exactly the same for every mother. Rest, nourishment, hydration, emotional support and appropriate follow-up care all matter." },
      { title: "When to seek professional care", body: "Severe or worsening symptoms should not be managed through an app. Seek qualified medical assessment for concerning symptoms, including significant bleeding, breathing difficulty, chest pain, severe headache or other urgent changes." },
      { title: "The fourth trimester", body: "The early weeks can involve physical recovery, feeding decisions, sleep disruption and major emotional changes. Small routines and asking for help can make this period more manageable." }
    ],
    sourceCategories: ["ACOG", "WHO", "CDC"]
  },

  cycle: {
    title: "My Cycle",
    intro: "Understand menstrual-cycle basics without turning every symptom into a diagnosis.",
    sections: [
      { title: "Cycle basics", body: "Menstrual cycles can vary in length and symptoms. Tracking bleeding, pain, mood and other patterns can help you understand your own baseline." },
      { title: "Know your normal", body: "A meaningful change from your usual pattern can be worth discussing with a healthcare professional, especially when symptoms are persistent, severe or disruptive." },
      { title: "Cycle literacy", body: "Soft Mom Era can help you learn terminology and prepare questions for a clinician. It should not diagnose reproductive or hormonal conditions." }
    ],
    sourceCategories: ["ACOG", "WHO"]
  },

  nutrition: {
    title: "Nourish",
    intro: "Simple, realistic nutrition education for mothers and families.",
    sections: [
      { title: "Build simple meals", body: "Aim for practical combinations of vegetables or fruit, protein, whole grains or other carbohydrate sources, and healthy fats according to your needs and circumstances." },
      { title: "Feed yourself too", body: "Busy mothers can easily put their own meals last. Keeping simple snacks and easy meals available can make consistent nourishment easier." },
      { title: "Avoid food fear", body: "Healthy eating does not require perfection. Soft Mom Era will avoid restrictive diet culture and will not promote harmful weight-control practices for mothers or children." }
    ],
    sourceCategories: ["WHO", "CDC"]
  },

  mental: {
    title: "Mental Wellness",
    intro: "A softer approach to stress, overwhelm, emotional wellbeing and asking for support.",
    sections: [
      { title: "You are allowed to feel overwhelmed", body: "Motherhood can involve major changes in identity, sleep, relationships, finances and responsibilities. Difficult emotions deserve compassion rather than shame." },
      { title: "Small resets", body: "A short walk, quiet shower, breathing exercise, nourishing meal, conversation with someone you trust or a few minutes of uninterrupted rest can be meaningful moments of care." },
      { title: "When support is needed", body: "Persistent or severe emotional distress deserves professional support. An app should never be treated as a substitute for qualified mental-health care." }
    ],
    sourceCategories: ["WHO", "ACOG"]
  },

  baby: {
    title: "Baby Care",
    intro: "Age-aware educational resources for the early months of your baby's life.",
    sections: [
      { title: "Safe sleep", body: "Infant sleep safety should follow current guidance from trusted pediatric and public-health organizations. Soft Mom Era should surface the latest source guidance rather than relying on viral sleep hacks." },
      { title: "Feeding", body: "Breastfeeding, expressed milk and formula feeding are important conversations that can vary by family. Feeding concerns, poor intake or signs of illness should be discussed with a qualified clinician." },
      { title: "Development", body: "Babies develop at different rates. Developmental milestones can be useful conversation starters, not a reason to compare one baby with another." }
    ],
    sourceCategories: ["CDC", "WHO", "AAP"]
  },

  toddler: {
    title: "Toddlers",
    intro: "Practical support for big feelings, growing independence and everyday toddler chaos.",
    sections: [
      { title: "Big feelings are part of development", body: "Toddlers are still learning language, emotional regulation and impulse control. Calm boundaries and predictable routines can help." },
      { title: "Connection before correction", body: "When appropriate and safe, getting down to a child's level, naming feelings and giving simple choices can support cooperation without humiliation or fear." },
      { title: "Safety first", body: "Behavior guidance should never replace attention to immediate safety. Serious developmental, behavioral or health concerns should be discussed with an appropriate professional." }
    ],
    sourceCategories: ["CDC", "AAP"]
  },

  preschool: {
    title: "Preschool",
    intro: "Resources for play, learning, emotional development and school readiness.",
    sections: [
      { title: "Play is learning", body: "Play supports language, social development, problem solving and creativity. Everyday household activities can become opportunities for learning." },
      { title: "Build predictable routines", body: "Consistent routines around waking, meals, play, learning and bedtime can help children know what to expect." },
      { title: "Encourage curiosity", body: "Questions, books, conversation and hands-on exploration can support early learning without turning childhood into constant academic work." }
    ],
    sourceCategories: ["CDC", "UNICEF"]
  },

  school: {
    title: "School Age",
    intro: "Support for learning, confidence, friendships and family routines.",
    sections: [
      { title: "School-life balance", body: "Children benefit from time for schoolwork, sleep, movement, friendships, family connection and unstructured play." },
      { title: "Talk, don't only check", body: "Asking open questions about a child's day can create space for concerns that may not appear in homework or grades." },
      { title: "Digital wellbeing", body: "Technology conversations work best when families set clear expectations while also talking about safety, privacy, kindness and healthy boundaries." }
    ],
    sourceCategories: ["UNICEF", "AAP"]
  },

  teens: {
    title: "Teens",
    intro: "A calm space for puberty, independence, identity, boundaries and connection.",
    sections: [
      { title: "Keep communication open", body: "Teenagers need increasing independence while still benefiting from trusted adults who listen without immediately judging or lecturing." },
      { title: "Body changes", body: "Puberty brings physical and emotional changes at different times for different young people. Questions about unusual or concerning symptoms belong with a healthcare professional." },
      { title: "Digital life", body: "Families can discuss privacy, online relationships, cyberbullying, screen boundaries and responsible digital behavior without assuming every online experience is the same." }
    ],
    sourceCategories: ["UNICEF", "AAP"]
  },

  selfcare: {
    title: "Self-Care",
    intro: "Self-care that fits real motherhood—not another impossible checklist.",
    sections: [
      { title: "Make it small", body: "Self-care does not have to mean an expensive day out. A shower, nap, meal, walk, journal entry or quiet cup of tea can count." },
      { title: "Care without guilt", body: "Taking care of yourself does not make you less devoted to your family. Sustainable caregiving requires attention to the caregiver too." },
      { title: "Build support", body: "Sharing responsibilities, asking family for help and finding trusted communities can be more sustainable than trying to do everything alone." }
    ],
    sourceCategories: ["WHO"]
  },

  relationships: {
    title: "Relationships",
    intro: "Communication, boundaries and connection through changing seasons of family life.",
    sections: [
      { title: "Say what you need", body: "Clear, respectful communication can be easier when needs are stated directly instead of being left for others to guess." },
      { title: "Boundaries are information", body: "A boundary communicates what you will and will not participate in. Healthy boundaries can protect time, energy and emotional wellbeing." },
      { title: "Safety matters", body: "If a relationship involves fear, coercion, threats or violence, general relationship advice is not enough. Seek appropriate professional and emergency support." }
    ],
    sourceCategories: ["WHO"]
  },

  money: {
    title: "Money & Work",
    intro: "Practical ideas for balancing motherhood, work, childcare and financial responsibilities.",
    sections: [
      { title: "Start with visibility", body: "A simple picture of regular income, essential expenses, debt obligations and savings goals can make financial decisions less overwhelming." },
      { title: "Motherhood and work", body: "Returning to work, working from home, running a business or staying home are different paths. Soft Mom Era should support mothers without treating one choice as universally superior." },
      { title: "Plan for support", body: "Childcare, transport, school costs and family support can materially affect a household budget. Planning for these realities can reduce surprises." }
    ],
    sourceCategories: ["UN Women", "ILO"]
  },

  fitness: {
    title: "Fitness & Movement",
    intro: "Movement that supports your body instead of punishing it.",
    sections: [
      { title: "Start where you are", body: "Walking, stretching, mobility work, strength training and other forms of movement can all have a place depending on your health and circumstances." },
      { title: "Postpartum considerations", body: "After pregnancy and birth, return to exercise should reflect individual recovery. Pain, concerning symptoms or complications should be discussed with a qualified professional." },
      { title: "No punishment required", body: "Soft Mom Era will not promote exercise as punishment for eating or as a requirement to achieve a particular body shape." }
    ],
    sourceCategories: ["WHO", "ACOG"]
  },

  body: {
    title: "My Body",
    intro: "Body literacy for mothers, with room for questions and professional care.",
    sections: [
      { title: "Learn your baseline", body: "Knowing what is typical for your own cycle, energy, sleep, pain and other body patterns can make changes easier to notice." },
      { title: "Persistent symptoms deserve attention", body: "Don't let social media normalize severe or persistent symptoms. A qualified healthcare professional can assess symptoms in context." },
      { title: "Body respect", body: "Health education should not require shame about weight, appearance, age or motherhood changes." }
    ],
    sourceCategories: ["ACOG", "WHO"]
  },

  safety: {
    title: "Health & Safety",
    intro: "Know when an online resource is useful—and when professional care is the right next step.",
    sections: [
      { title: "Emergency situations", body: "If you or your child may be in immediate danger, do not wait for an AI response. Seek urgent professional or emergency assistance." },
      { title: "AI has limits", body: "Aura can explain general educational information, but it cannot examine a patient, diagnose a condition or replace a clinician." },
      { title: "Source-first design", body: "Health information in Soft Mom Era should identify its source, date or review information where practical and be updated as authoritative guidance changes." }
    ],
    sourceCategories: ["WHO", "CDC", "ACOG", "AAP"]
  }
};

const CREATOR_RESEARCH = {
  purpose: "Trend research only. Creator content is used to identify themes and user needs, never to copy scripts, captions or proprietary content.",
  formats: [
    "Relatable motherhood moments",
    "Short practical tips",
    "Myth versus fact",
    "Mom routines",
    "Meal preparation",
    "Gentle parenting",
    "Mental-wellness conversations",
    "Working-mom realities",
    "Age/stage-specific questions",
    "Mom comedy and community prompts"
  ],
  researchNotes: [
    "TikTok parenting research shows strong interest in relatable everyday motherhood, practical hacks and parenting education.",
    "YouTube parenting content can provide longer-form explanations, routines, family organization and educational formats.",
    "Creator research should be balanced with authoritative medical and public-health sources for health topics.",
    "Avoid adopting viral parenting trends as medical guidance without professional-source verification."
  ]
};

const LIBRARY_SOURCES = {
  ACOG: { name: "American College of Obstetricians and Gynecologists", role: "Women's health and pregnancy/postpartum guidance" },
  WHO: { name: "World Health Organization", role: "Global health guidance" },
  CDC: { name: "Centers for Disease Control and Prevention", role: "Public health and child development information" },
  AAP: { name: "American Academy of Pediatrics", role: "Pediatric health and child safety" },
  UNICEF: { name: "UNICEF", role: "Children, parenting and family wellbeing" },
  ILO: { name: "International Labour Organization", role: "Work, employment and family-related policy context" },
  "UN Women": { name: "UN Women", role: "Women, work and economic empowerment" }
};
