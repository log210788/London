const LONDON_VOCAB_DATA = {
  studentName: "Student",
  lessonTitle: "Would You Rather...? (Hypothetical Choices & Justifications)",
  targetLevel: "Intermediate (B1/B2)",
  duration: "50–60 minutes",
  nativeLanguage: "Portuguese 🇵🇹",
  focus: "Spontaneous speaking, expressing preferences, justifying opinions, second conditionals, and weighing pros and cons.",

  teacherLessonPlan: {
    lessonTitle: "Preply 1-on-1 Lesson Plan: 'Would You Rather...?' (Hypothetical Choices & Justifications)",
    duration: "50–60 Minutes",
    level: "Intermediate (B1/B2)",
    studentProfile: "Intermediate ESL learner",
    focus: "Spontaneous speaking, expressing preferences, justifying opinions, and weighing pros and cons.",
    
    timeline: [
      {
        time: "00:00 - 00:10 (5–10 mins)",
        stage: "1. Warm-Up & Concept Intro",
        goal: "Introduce the structure naturally without heavy grammar explanations.",
        activity: "Ask the student two quick, low-stakes questions to break the ice:\n1. 'Would you rather drink coffee or tea every morning for the rest of your life?'\n2. 'Would you rather have a hot summer vacation or a cold winter vacation?'",
        teacherPrompt: "Notice her instinctual answer. If she answers with just one word (e.g. 'Coffee'), gently prompt her for the reason: 'Why coffee? What would you miss about tea?'"
      },
      {
        time: "00:10 - 00:20 (10 mins)",
        stage: "2. Functional Language & Target Structures",
        goal: "Introduce phrases that make her answers sound natural and conversational rather than repetitive.",
        activity: "Model and practice 3 key conversational functions:\n• Expressing Choice\n• Weighing Pros & Cons\n• Hesitating / Being Indecisive",
        teacherPrompt: "Drill natural pronunciation and stress on phrases like 'I'd definitely go with...' and 'I'm really torn, but...'.",
        phrases: [
          { category: "Expressing Choice", list: ["I’d definitely go with...", "I’d much rather [verb] than [verb]...", "If I had to choose between the two, I’d pick..."] },
          { category: "Weighing Pros & Cons", list: ["On one hand... but on the other hand...", "The main drawback of [X] is...", "While [X] sounds nice, [Y] is more practical."] },
          { category: "Hesitating / Being Indecisive", list: ["I’m really torn, but...", "It depends on...", "That’s a tough one, but I’d say..."] }
        ]
      },
      {
        time: "00:20 - 00:50 (30 mins)",
        stage: "3. 'Would You Rather' Conversation Cards",
        goal: "Engage in deep, spontaneous speaking using the 3-Step Discussion Flow.",
        activity: "Pick 4–6 conversation cards across Lifestyle, Travel, Superpowers, and Food. Apply the 3-Step Discussion Flow for each card:\n1. The Choice: Have her pick an option.\n2. The Justification: Ask her why she chose it using target phrases.\n3. The Counter-Argument: Challenge her choice gently ('But wouldn't you miss...?') to push for deeper speaking.",
        teacherPrompt: "Use counter-arguments to encourage the student to elaborate and use second conditional patterns ('If I had to choose... I would...')."
      },
      {
        time: "00:50 - 01:00 (5–10 mins)",
        stage: "4. Language Feedback & Real-Life Wrap-Up",
        goal: "Provide constructive feedback and reinforce learning.",
        activity: "• Feedback: Share 2–3 positive examples of phrases she used well, and correct 2–3 minor errors (focus on second conditionals like 'If I would choose' -> 'If I had to choose').\n• Wrap-Up Question: 'Which of the choices today was the hardest for you to make, and why?'",
        teacherPrompt: "Remind the student to complete their Preply homework worksheet and upload their score report!"
      }
    ],

    teacherTips: [
      {
        title: "Encourage Personal Stories & Anecdotes",
        desc: "When she makes a choice, ask for a real-life anecdote. For example, if she chooses 'Countryside House', ask: 'Have you ever lived in a quiet area before?'"
      },
      {
        title: "Focus on Second Conditionals (If + past verb -> would + base verb)",
        desc: "Naturally model the pattern 'If I had the choice, I would pick...' without turning the session into a dry grammar drill."
      },
      {
        title: "Support for Native Portuguese Speakers 🇵🇹",
        desc: "Watch out for Portuguese structure transfer: 'If I would choose' -> correct to 'If I HAD to choose'. Remind her to use 'I'd' (/aɪd/) as short for 'I would'."
      }
    ]
  },

  functionalLanguage: [
    {
      category: "Expressing Choice",
      ptSubtitle: "Expressar Preferência 🇵🇹",
      phrases: [
        { text: "I’d definitely go with...", pt: "Eu escolheria com certeza...", phonetic: "/aɪd ˈdefɪnətli ɡəʊ wɪð/" },
        { text: "I’d much rather [verb] than [verb]...", pt: "Eu preferiria muito mais...", phonetic: "/aɪd mʌtʃ ˈrɑːðə/" },
        { text: "If I had to choose between the two, I’d pick...", pt: "Se eu tivesse de escolher entre os dois...", phonetic: "/ɪf aɪ hæd tə tʃuːz/" }
      ]
    },
    {
      category: "Weighing Pros & Cons",
      ptSubtitle: "Ponderar Prós e Contras 🇵🇹",
      phrases: [
        { text: "On one hand... but on the other hand...", pt: "Por um lado... mas por outro lado...", phonetic: "/ɒn wʌn hænd... bʌt ɒn ðə ˈʌðə hænd/" },
        { text: "The main drawback of [X] is...", pt: "A principal desvantagem de [X] é...", phonetic: "/ðə meɪn ˈdrɔːbæk əv/" },
        { text: "While [X] sounds nice, [Y] is more practical.", pt: "Embora [X] pareça bom, [Y] é mais prático.", phonetic: "/waɪl... saʊndz naɪs/" }
      ]
    },
    {
      category: "Hesitating / Being Indecisive",
      ptSubtitle: "Hesitar / Estar Indecisa 🇵🇹",
      phrases: [
        { text: "I’m really torn, but...", pt: "Estou muito indecisa, mas...", phonetic: "/aɪm ˈrɪəli tɔːn bʌt/" },
        { text: "It depends on...", pt: "Depende de...", phonetic: "/ɪt dɪˈpendz ɒn/" },
        { text: "That’s a tough one, but I’d say...", pt: "Essa é difícil, mas eu diria...", phonetic: "/ðæts ə tʌf wʌn bʌt aɪd seɪ/" }
      ]
    }
  ],

  visualCards: [
    {
      id: "vis_dilemma_house",
      title: "Countryside House vs. City Apartment 🏡🏢",
      category: "Category A: Lifestyle",
      image: "images/dilemma_house_city.jpg",
      badge: "Lifestyle Dilemma",
      ptTranslation: "Casa no Campo vs. Apartamento na Cidade 🇵🇹",
      description: "Would you rather live in a quiet countryside house with a huge garden OR a modern apartment in the absolute heart of a vibrant city?",
      targetPhrases: ["I’d definitely go with...", "While the countryside sounds peaceful, the city is more practical.", "I’m really torn, but..."],
      discussionFlow: {
        step1: "Choice: Countryside House OR City Apartment?",
        step2: "Justification: What is the biggest advantage of your choice?",
        step3: "Counter-Argument: 'But wouldn't you miss the convenience / peace?'"
      }
    },
    {
      id: "vis_dilemma_travel",
      title: "Luxury Pre-Booked vs. Spontaneous Trip ✈️🧳",
      category: "Category B: Travel",
      image: "images/dilemma_travel.jpg",
      badge: "Travel Dilemma",
      ptTranslation: "Viagem Luxuosa Planeada vs. Aventura Espontânea 🇵🇹",
      description: "Would you rather go on a luxury vacation where every detail is pre-booked OR an unplanned trip where you decide where to go every morning?",
      targetPhrases: ["I’d much rather plan ahead...", "The main drawback of spontaneity is...", "If I had to choose..."],
      discussionFlow: {
        step1: "Choice: 100% Pre-booked Luxury OR 100% Spontaneous Exploration?",
        step2: "Justification: Why does this travel style suit your personality?",
        step3: "Counter-Argument: 'What if something goes wrong or feels too rigid?'"
      }
    },
    {
      id: "vis_dilemma_skills",
      title: "All World Languages vs. All Musical Instruments 🌍🎶",
      category: "Category C: Superpowers",
      image: "images/dilemma_skills.jpg",
      badge: "Superpower Dilemma",
      ptTranslation: "Falar Todas as Línguas vs. Tocar Todos os Instrumentos 🇵🇹",
      description: "Would you rather be able to speak every language in the world fluently OR play every musical instrument masterfully?",
      targetPhrases: ["If I had to choose between the two, I’d pick...", "On one hand languages allow connection, but on the other hand music is emotional."],
      discussionFlow: {
        step1: "Choice: Fluent in all 7,000+ languages OR Master of all instruments?",
        step2: "Justification: How would this superpower change your daily life?",
        step3: "Counter-Argument: 'Isn't music a universal language anyway?'"
      }
    },
    {
      id: "vis_dilemma_food",
      title: "Savory/Salty Foods vs. Sweet Treats Forever 🧀🍩",
      category: "Category D: Food & Sensations",
      image: "images/dilemma_food.jpg",
      badge: "Culinary Dilemma",
      ptTranslation: "Apenas Comida Salgada vs. Apenas Comida Doce 🇵🇹",
      description: "Would you rather eat only savory/salty foods for the rest of your life OR only sweet foods?",
      targetPhrases: ["That’s a tough one, but I’d say...", "The main drawback of sweet food is...", "I’d definitely go with savory."],
      discussionFlow: {
        step1: "Choice: Only Savory (Cheese, Pasta, Pizza) OR Only Sweet (Pastries, Desserts, Fruit)?",
        step2: "Justification: Which meal of the day would be hardest to change?",
        step3: "Counter-Argument: 'Could you really live without dessert/breakfast cheese forever?'"
      }
    }
  ],

  conversationCards: [
    {
      id: "card_1",
      category: "Category A: Lifestyle & Daily Routine",
      icon: "🏡",
      title: "House vs. City Apartment",
      ptTitle: "Casa vs. Apartamento 🇵🇹",
      question: "Would you rather live in a quiet countryside house with a huge garden OR a modern apartment in the absolute heart of a vibrant city?",
      options: ["Quiet Countryside House with Huge Garden", "Modern Apartment in Heart of Vibrant City"],
      prompt: "Use 'I'd definitely go with...' or 'While [X] sounds nice, [Y] is more practical.'"
    },
    {
      id: "card_2",
      category: "Category A: Lifestyle & Daily Routine",
      icon: "🧹",
      title: "Chores Dilemma",
      ptTitle: "Cozinhar vs. Limpar 🇵🇹",
      question: "Would you rather never have to cook a meal again OR never have to do any cleaning or house chores again?",
      options: ["Never Cook Again (Free Chef)", "Never Clean/Do Chores Again (Free Cleaner)"],
      prompt: "Use 'The main drawback of [X] is...' to explain your decision."
    },
    {
      id: "card_3",
      category: "Category A: Lifestyle & Daily Routine",
      icon: "⏰",
      title: "Time Management",
      ptTitle: "Tempo Extra vs. Sono Perfeito 🇵🇹",
      question: "Would you rather have an extra 2 hours added to every day OR be guaranteed 8 hours of perfect, restful sleep every single night?",
      options: ["Extra 2 Hours Daily", "8 Hours Guaranteed Perfect Sleep"],
      prompt: "Use 'I'm really torn, but...' to express hesitation before choosing."
    },
    {
      id: "card_4",
      category: "Category B: Travel & Adventure",
      icon: "🗺️",
      title: "Travel Style",
      ptTitle: "Estilo de Viagem 🇵🇹",
      question: "Would you rather spend a full month deeply exploring one single country OR visit 8 different countries for 3 days each?",
      options: ["1 Month Deeply Exploring 1 Country", "8 Countries for 3 Days Each"],
      prompt: "Use 'I'd much rather [explore] than [rush]...' to state your preference."
    },
    {
      id: "card_5",
      category: "Category B: Travel & Adventure",
      icon: "🎒",
      title: "Planning vs. Spontaneity",
      ptTitle: "Planeamento vs. Espontaneidade 🇵🇹",
      question: "Would you rather go on a luxury vacation where every detail is pre-booked OR an unplanned trip where you decide where to go every morning?",
      options: ["Luxury Vacation Pre-Booked", "Unplanned Spontaneous Trip"],
      prompt: "Use 'On one hand... but on the other hand...' to compare both styles."
    },
    {
      id: "card_6",
      category: "Category B: Travel & Adventure",
      icon: "⏳",
      title: "Time Travel",
      ptTitle: "Viagem no Tempo 🇵🇹",
      question: "Would you rather travel back in time 100 years to meet your ancestors OR travel forward in time 100 years to see what the world looks like?",
      options: ["Back 100 Years (Meet Ancestors)", "Forward 100 Years (See Future World)"],
      prompt: "Use 'If I had to choose between the two, I’d pick...'."
    },
    {
      id: "card_7",
      category: "Category C: Superpowers & Skills",
      icon: "🗣️",
      title: "Languages vs. Music",
      ptTitle: "Idiomas vs. Música 🇵🇹",
      question: "Would you rather be able to speak every language in the world fluently OR play every musical instrument masterfully?",
      options: ["Speak Every Language Fluently", "Play Every Instrument Masterfully"],
      prompt: "Explain how this superpower would change your career or social life."
    },
    {
      id: "card_8",
      category: "Category C: Superpowers & Skills",
      icon: "🔮",
      title: "Truth vs. Persuasion",
      ptTitle: "Saber a Verdade vs. Persuadir 🇵🇹",
      question: "Would you rather always know when someone is lying to you OR always be able to persuade anyone to agree with you?",
      options: ["Always Know When Someone Lies", "Always Persuade Anyone to Agree"],
      prompt: "Consider the moral pros and cons of each ability."
    },
    {
      id: "card_9",
      category: "Category D: Food & Sensations",
      icon: "🍕",
      title: "Flavor Choice",
      ptTitle: "Salgado vs. Doce 🇵🇹",
      question: "Would you rather eat only savory/salty foods for the rest of your life OR only sweet foods?",
      options: ["Only Savory/Salty Foods", "Only Sweet Foods"],
      prompt: "Which meals would be most difficult to eat?"
    },
    {
      id: "card_10",
      category: "Category D: Food & Sensations",
      icon: "📱",
      title: "Modern Comforts",
      ptTitle: "Sem Café vs. Sem Smartphone 🇵🇹",
      question: "Would you rather give up coffee/tea for a year OR give up smartphones and internet for a month?",
      options: ["Give up Coffee/Tea for 1 Year", "Give up Smartphone & Internet for 1 Month"],
      prompt: "Use 'That's a tough one, but I'd say...'."
    }
  ],

  quizzes: [
    {
      id: "q_cond1",
      type: "mcq",
      category: "Second Conditionals",
      question: "Which of the following is the correct second conditional structure for hypothetical choices?",
      options: [
        "If I had to choose between the two, I’d pick the apartment.",
        "If I will choose between the two, I pick the apartment.",
        "If I would choose between the two, I choose the apartment.",
        "If I choose between the two, I would picked the apartment."
      ],
      correct: 0,
      explanation: "Second conditional uses 'If + past verb' (If I had to choose) followed by 'would + base verb' (I'd pick). In Portuguese: 'Se eu tivesse de escolher, escolheria...'"
    },
    {
      id: "q_phrase1",
      type: "fill_blank",
      category: "Functional Language",
      sentence: "When you are undecided between two choices, say: 'I’m really _____, but I’d probably go with the countryside house.'",
      correctAnswer: "torn",
      hint: "Palavra em inglês para 'indecisa/dividida' (starts with 't')."
    },
    {
      id: "q_phrase2",
      type: "mcq",
      category: "Weighing Options",
      question: "How do you naturally express a negative point or disadvantage of an option?",
      options: [
        "The main drawback of [X] is...",
        "The main bad point of [X] is...",
        "The drawback main is [X]...",
        "I hate drawbacks of [X]..."
      ],
      correct: 0,
      explanation: "'The main drawback of [X] is...' is the most natural, professional way to discuss disadvantages!"
    },
    {
      id: "q_cond2",
      type: "fill_blank",
      category: "Grammar Practice",
      sentence: "If I _____ (have) the power to speak every language, I would travel around the world without a translator.",
      correctAnswer: "had",
      hint: "Use past tense of 'have' for 2nd conditional (had)."
    }
  ],

  eightWeekSyllabus: [
    {
      week: 1,
      title: "Hypothetical Choices ('Would You Rather...?')",
      ptTitle: "Escolhas Hipotéticas e Justificações 🇵🇹",
      focus: "Expressing preferences, weighing pros & cons, hesitating naturally.",
      grammar: "Second Conditionals (If + past -> would)",
      status: "Active Week 🌟",
      isActive: true,
      link: "student_homework.html"
    },
    {
      week: 2,
      title: "The Art of Storytelling & Personal Anecdotes",
      ptTitle: "Histórias e Histórias Pessoais 🇵🇹",
      focus: "Sharing personal stories, keeping listeners engaged, dramatic pauses.",
      grammar: "Narrative Tenses (Past Simple, Past Continuous, Past Perfect)",
      status: "Upcoming (Week 2)",
      isActive: false
    },
    {
      week: 3,
      title: "Travel, Luxury Hotels & Airport Scenarios",
      ptTitle: "Viagens, Hotéis de Luxo e Aeroportos 🇵🇹",
      focus: "Airport scenarios, handling delays, asking for room upgrades politely.",
      grammar: "Indirect / Polite Questions (I was wondering if...)",
      status: "Upcoming (Week 3)",
      isActive: false
    },
    {
      week: 4,
      title: "Gastronomy, Cafes & Social Dining",
      ptTitle: "Gastronomia, Cafés e Jantares Sociais 🇵🇹",
      focus: "Ordering afternoon tea, describing flavors, making food/wine recommendations.",
      grammar: "Sensory Adjectives (crisp, subtle, rich, savory)",
      status: "Upcoming (Week 4)",
      isActive: false
    },
    {
      week: 5,
      title: "Pop Culture, Movies & Binge-Worthy Series",
      ptTitle: "Cultura Pop, Filmes e Séries 🇵🇹",
      focus: "Reviewing shows, debating character choices, recommending books/movies.",
      grammar: "Relative Clauses & Expressive Adjectives",
      status: "Upcoming (Week 5)",
      isActive: false
    },
    {
      week: 6,
      title: "Fashion, Personal Style & Boutique Shopping",
      ptTitle: "Moda, Estilo Pessoal e Compras 🇵🇹",
      focus: "Describing outfits, fit, textures, asking for fitting rooms & returns.",
      grammar: "Comparative & Superlative Modifiers",
      status: "Upcoming (Week 6)",
      isActive: false
    },
    {
      week: 7,
      title: "Modern Debates: Work-Life Balance & Technology",
      ptTitle: "Debates Modernos e Tecnologia 🇵🇹",
      focus: "Expressing strong vs. soft opinions, disagreeing politely without conflict.",
      grammar: "Modal Verbs of Probability & Softening",
      status: "Upcoming (Week 7)",
      isActive: false
    },
    {
      week: 8,
      title: "Future Dreams, Bucket Lists & Graduation",
      ptTitle: "Sonhos Futuros e Celebração Final 🇵🇹",
      focus: "Pitching travel bucket-list destinations, future goals, course recap.",
      grammar: "Future Perfect & Future Continuous",
      status: "Upcoming (Week 8)",
      isActive: false
    }
  ]
};

if (typeof module !== 'undefined') {
  module.exports = LONDON_VOCAB_DATA;
}
