const LONDON_VOCAB_DATA = {
  studentName: "Student",
  activeWeek: 2,

  // 8-Week Course Roadmap
  eightWeekSyllabus: [
    {
      week: 1,
      title: "Hypothetical Choices ('Would You Rather...?')",
      ptTitle: "Escolhas Hipotéticas e Justificações 🇵🇹",
      focus: "Expressing preferences, weighing pros & cons, hesitating naturally.",
      grammar: "Second Conditionals (If + past -> would)",
      status: "Completed / Practice Available",
      isActive: false,
      link: "#"
    },
    {
      week: 2,
      title: "The Art of Storytelling & Personal Anecdotes",
      ptTitle: "Histórias e Histórias Pessoais 🇵🇹",
      focus: "Sharing personal anecdotes, narrative hooks, building tension, dramatic pauses.",
      grammar: "Narrative Tenses (Past Simple, Past Continuous, Past Perfect) & Connectors",
      status: "Active Week 🌟",
      isActive: true,
      link: "#"
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
  ],

  // Week-Specific Data Collections
  weeks: {
    1: {
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
      ]
    },

    2: {
      lessonTitle: "The Art of Storytelling & Personal Anecdotes",
      targetLevel: "Intermediate (B1/B2)",
      duration: "50–60 minutes",
      nativeLanguage: "Portuguese 🇵🇹",
      focus: "Structuring personal anecdotes (Hook ➔ Background ➔ Twist ➔ Resolution), using narrative tenses (Past Simple, Past Continuous, Past Perfect), dramatic pauses, and time connectors.",

      teacherLessonPlan: {
        lessonTitle: "Preply 1-on-1 Lesson Plan: 'The Art of Storytelling & Personal Anecdotes' (Week 2)",
        duration: "50–60 Minutes",
        level: "Intermediate (B1/B2)",
        studentProfile: "Intermediate ESL learner",
        focus: "Spontaneous storytelling, keeping listeners engaged, dramatic pauses, and narrative tenses.",

        timeline: [
          {
            time: "00:00 - 00:10 (5–10 mins)",
            stage: "1. Warm-Up & Story Hooks",
            goal: "Spark spontaneous storytelling with engaging narrative openings.",
            activity: "Ask the student to complete 3 narrative hooks with a real or imaginary memory:\n1. 'You won't believe what happened to me last year...'\n2. 'That reminds me of a crazy coincidence that happened to me...'\n3. 'It all started on a rainy Sunday morning...'",
            teacherPrompt: "Observe her natural pacing and enthusiasm. If she stops quickly, ask: 'And what was going through your mind at that exact second?'"
          },
          {
            time: "00:10 - 00:20 (10 mins)",
            stage: "2. The 4-Stage Anecdote Arc & Narrative Tenses",
            goal: "Teach the 4-Stage Story Matrix and narrative tense contrast.",
            activity: "Break down storytelling into 4 key stages:\n1. The Hook ('Guess what happened...')\n2. The Background Scene [Past Continuous] ('I was walking through Soho when...')\n3. The Plot Twist / Interruption [Past Simple] ('Out of nowhere, a stray cat leaped out...')\n4. Resolution & Reflection [Past Perfect / Reflection] ('By the time I realized, everyone had already burst into laughter!')",
            teacherPrompt: "Model dramatic pauses right before transition phrases ('And then... [1 sec pause] ... out of nowhere!').",
            phrases: [
              { category: "Story Hooks", list: ["You won't believe what happened...", "That reminds me of the time when...", "It all started a few years ago..."] },
              { category: "Building Tension & Sequencing", list: ["Out of nowhere...", "Before I knew it...", "To make matters worse...", "Meanwhile..."] },
              { category: "Dramatic Climax", list: ["Much to my surprise...", "Believe it or not...", "All of a sudden..."] },
              { category: "Reflecting & Concluding", list: ["Looking back on it now...", "It turned out that...", "Long story short...", "Lesson learned!"] }
            ]
          },
          {
            time: "00:20 - 00:50 (30 mins)",
            stage: "3. Interactive Conversation Cards & Story Grid Game",
            goal: "Practice live storytelling using prompt cards and the Add-the-Grid Story Game.",
            activity: "• Practice 4 Anecdote Prompt Cards (e.g. The Embarrassing Misunderstanding, Craziest Travel Story).\n• Have her play 'The Storyteller's Add-The-Grid Game' on the screen.\n• Encourage her to add story blocks to the grid while correctly conjugating narrative tenses.",
            teacherPrompt: "Prompt her for sensory details: 'What could you hear/see in the background while that was happening?'"
          },
          {
            time: "00:50 - 01:00 (5–10 mins)",
            stage: "4. Feedback & Homework Assignment",
            goal: "Review past tense corrections and assign the Week 2 Grid Game.",
            activity: "• Highlight 2-3 great storytelling moments.\n• Correct common errors ('When I was arrive' ➔ 'When I arrived', 'I had lived there before' vs 'I lived there').\n• Assign Week 2 Grid Game homework report.",
            teacherPrompt: "Remind her to complete the Add-The-Grid Game on the portal and click 'Copy/Download Preply Homework Report'."
          }
        ],

        teacherTips: [
          {
            title: "Mastering Dramatic Pauses & Intonation 🎭",
            desc: "Encourage her to slow down before the plot twist. A short pause after 'And then, out of nowhere...' builds suspense and draws listeners in!"
          },
          {
            title: "Narrative Tense Contrast Made Easy ⏱️",
            desc: "Past Continuous sets the ambient scene ('I was riding the train'), Past Simple creates the main action ('the lights went out'), and Past Perfect provides background reason ('because storm had struck')."
          },
          {
            title: "Portuguese Transfer Watch 🇵🇹",
            desc: "Watch out for: 'Do nada' ➔ 'Out of nowhere', 'No final das contas' ➔ 'At the end of the day / Long story short', 'Acontece que' ➔ 'It turned out that'."
          }
        ]
      },

      functionalLanguage: [
        {
          category: "Story Hooks & Openings",
          ptSubtitle: "Ganchos e Início de Histórias 🇵🇹",
          phrases: [
            { text: "You won’t believe what happened to me...", pt: "Não vais acreditar no que me aconteceu...", phonetic: "/juː wəʊnt bɪˈliːv wɒt ˈhæpənd/" },
            { text: "That reminds me of the time when...", pt: "Isso faz-me lembrar da altura em que...", phonetic: "/ðæt rɪˈmaɪndz miː əv ðə taɪm/" },
            { text: "It all started a few years ago when...", pt: "Tudo começou há uns anos quando...", phonetic: "/ɪt ɔːl ˈstɑːtɪd ə fjuː jɪəz əˈɡəʊ/" }
          ]
        },
        {
          category: "Building Tension & Sequencing",
          ptSubtitle: "Criar Tensão e Sequência 🇵🇹",
          phrases: [
            { text: "Out of nowhere...", pt: "Do nada / De repente...", phonetic: "/aʊt əv ˈnəʊweə/" },
            { text: "Before I knew it...", pt: "Antes que me desse conta...", phonetic: "/bɪˈfɔːr aɪ njuː ɪt/" },
            { text: "To make matters worse...", pt: "Para piorar as coisas...", phonetic: "/tə meɪk ˈmætəz wɜːs/" },
            { text: "Just as I was about to [verb]...", pt: "Mesmo quando eu estava prestes a...", phonetic: "/dʒʌst æz aɪ wəz əˈbaʊt tə/" }
          ]
        },
        {
          category: "Dramatic Climax & Surprises",
          ptSubtitle: "Clímax Dramático e Surpresas 🇵🇹",
          phrases: [
            { text: "Much to my surprise...", pt: "Para minha grande surpresa...", phonetic: "/mʌtʃ tə maɪ səˈpraɪz/" },
            { text: "Believe it or not...", pt: "Acredites ou não...", phonetic: "/bɪˈliːv ɪt ɔː nɒt/" },
            { text: "All of a sudden...", pt: "De um momento para o outro...", phonetic: "/ɔːl əv ə ˈsʌdən/" }
          ]
        },
        {
          category: "Reflecting & Concluding",
          ptSubtitle: "Refletir e Concluir a História 🇵🇹",
          phrases: [
            { text: "Looking back on it now...", pt: "Olhando para trás agora...", phonetic: "/ˈlʊkɪŋ bæk ɒn ɪt naʊ/" },
            { text: "It turned out that...", pt: "Acontece que...", phonetic: "/ɪt tɜːnd aʊt ðæt/" },
            { text: "Long story short...", pt: "Resumindo a história...", phonetic: "/lɒŋ ˈstɔːri ʃɔːt/" },
            { text: "Lesson learned!", pt: "Lição aprendida!", phonetic: "/ˈlesən lɜːnd/" }
          ]
        }
      ],

      visualCards: [
        {
          id: "vis_story_tube",
          title: "Lost on the London Tube 🚇",
          category: "Category A: City Anecdotes",
          image: "images/tube_guide.jpg",
          badge: "London Underground Story",
          ptTranslation: "Perdida no Metropolitano de Londres 🇵🇹",
          description: "You were taking the Central Line during rush hour when out of nowhere the train stopped in a dark tunnel, and a passenger started playing opera!",
          targetPhrases: ["I was riding the Tube when...", "Out of nowhere...", "It turned out that he was a West End singer!"],
          discussionFlow: {
            step1: "The Hook: 'Have you ever had a strange encounter on public transport?'",
            step2: "The Background: 'Describe what you were doing right before it happened.'",
            step3: "The Twist & Resolution: 'How did people react and how did it end?'"
          }
        },
        {
          id: "vis_story_cafe",
          title: "The Soho Cafe Encounter ☕",
          category: "Category B: Social Anecdotes",
          image: "images/soho_cafe.jpg",
          badge: "Cafe Coincidence",
          ptTranslation: "O Encontro Inesperado num Café em Soho 🇵🇹",
          description: "While you were sipping a cappuccino outside a cozy Soho cafe, someone sat next to you who had lived in your hometown 10 years ago!",
          targetPhrases: ["That reminds me of...", "Before I knew it...", "Believe it or not, we had mutual friends!"],
          discussionFlow: {
            step1: "The Hook: 'Tell me about a surprise meeting or small-world moment.'",
            step2: "The Setting: 'What were you wearing / doing when you noticed them?'",
            step3: "The Climax: 'What was the funniest piece of shared news?'"
          }
        },
        {
          id: "vis_story_tea",
          title: "The Afternoon Tea Mishap 🫖",
          category: "Category C: Funny Mishaps",
          image: "images/afternoon_tea.jpg",
          badge: "Dinner / Dining Mishap",
          ptTranslation: "O Incidente no Chá da Tarde 🇵🇹",
          description: "During a elegant afternoon tea in London, just as you were reaching for a scone, you accidentally knocked over the vintage silver teapot!",
          targetPhrases: ["Just as I was about to...", "To make matters worse...", "Looking back on it now, I can only laugh!"],
          discussionFlow: {
            step1: "The Hook: 'What is your most memorable embarrassing moment?'",
            step2: "The Background: 'Who were you with and how formal was the setting?'",
            step3: "The Resolution: 'How did you handle the situation gracefully?'"
          }
        },
        {
          id: "vis_story_travel",
          title: "The Airport Travel Delay ✈️",
          category: "Category D: Travel Stories",
          image: "images/dilemma_travel.jpg",
          badge: "Travel Adventure",
          ptTranslation: "A Aventura do Voo Atrasado 🇵🇹",
          description: "Your flight was delayed by 8 hours during a thunderstorm. Instead of panicking, you teamed up with 4 strangers and rented a car to drive across the country!",
          targetPhrases: ["We were waiting at the gate when...", "Much to my surprise...", "Long story short, it became the best night of the trip!"],
          discussionFlow: {
            step1: "The Hook: 'What was your worst travel delay that turned into a good story?'",
            step2: "The Conflict: 'What went wrong first?'",
            step3: "The Moral: 'What did you learn about spontaneous decisions?'"
          }
        }
      ],

      conversationCards: [
        {
          id: "card_story1",
          category: "Category A: Funny & Embarrassing",
          icon: "😅",
          title: "The Embarrassing Misunderstanding",
          ptTitle: "O Mal-Entendido Engraçado 🇵🇹",
          question: "Tell a story about a time when you misunderstood what someone said or made a funny language mistake!",
          options: ["Language Misunderstanding", "Wrong Person / Mistaken Identity"],
          prompt: "Use 'Just as I was about to...' and 'Much to my embarrassment...'"
        },
        {
          id: "card_story2",
          category: "Category B: Travel & Adventures",
          icon: "✈️",
          title: "The Unexpected Travel Twist",
          ptTitle: "Revés Inesperado numa Viagem 🇵🇹",
          question: "Share an anecdote about a travel disruption (lost luggage, missed train, wrong destination) that turned into an adventure!",
          options: ["Lost Luggage or Passport", "Missed Train or Flight"],
          prompt: "Use 'Out of nowhere...' and 'By the time we realized...'"
        },
        {
          id: "card_story3",
          category: "Category C: Coincidences",
          icon: "🍀",
          title: "A Small World Moment",
          ptTitle: "Um Momento 'Mundo Pequeno' 🇵🇹",
          question: "Have you ever met someone far away from home who was connected to your life in an unexpected way?",
          options: ["Met a Friend Abroad", "Discovered a Shared Connection"],
          prompt: "Use 'That reminds me of the time when...' and 'Believe it or not...'"
        },
        {
          id: "card_story4",
          category: "Category D: Surprises",
          icon: "🎁",
          title: "The Unforgettable Surprise",
          ptTitle: "A Surpresa Inesquecível 🇵🇹",
          question: "Describe a memorable surprise party, unexpected gift, or sudden good news you received!",
          options: ["Surprise Party / Event", "Unexpected Opportunity or News"],
          prompt: "Use 'It all started when...' and 'Much to my surprise...'"
        },
        {
          id: "card_story5",
          category: "Category A: Funny & Embarrassing",
          icon: "🧭",
          title: "A Time You Got Completely Lost",
          ptTitle: "Uma Vez em que Te Perdeste 🇵🇹",
          question: "Tell the story of a time when your GPS failed or you took the wrong road in a foreign city or park!",
          options: ["Lost in a Big Foreign City", "Lost in Nature or Hiking"],
          prompt: "Use 'Before I knew it...' and 'Long story short...'"
        },
        {
          id: "card_story6",
          category: "Category B: Travel & Adventures",
          icon: "⛈️",
          title: "Weather Chaos Story",
          ptTitle: "História de Tempestade ou Imprevisto 🇵🇹",
          question: "Describe a moment when unexpected heavy rain, snow, or heat completely changed your plans for the day!",
          options: ["Sudden Heavy Downpour", "Snowstorm or Flight Cancelation"],
          prompt: "Use 'To make matters worse...' and 'Looking back on it now...'"
        },
        {
          id: "card_story7",
          category: "Category C: Coincidences",
          icon: "💼",
          title: "The Unusual Job Interview",
          ptTitle: "Uma Entrevista de Emprego Inusitada 🇵🇹",
          question: "What is the most memorable or surprising interview or business meeting you have ever had?",
          options: ["Funny Interview Moment", "Unexpected Test or Question"],
          prompt: "Use 'It turned out that...' and 'Lesson learned!'"
        },
        {
          id: "card_story8",
          category: "Category D: Surprises",
          icon: "🐾",
          title: "An Animal Encounter Anecdote",
          ptTitle: "Encontro Inesperado com Animais 🇵🇹",
          question: "Have you ever had a funny or scary moment involving a pet, wildlife, or unexpected animal?",
          options: ["Playful Pet Mishap", "Wild Animal Encounter"],
          prompt: "Use 'All of a sudden...' and 'Believe it or not...'"
        },
        {
          id: "card_story9",
          category: "Category A: Funny & Embarrassing",
          icon: "🍕",
          title: "The Restaurant / Dining Disaster",
          ptTitle: "O Desastre num Restaurante 🇵🇹",
          question: "Tell a story about ordering something strange, spilling food, or dealing with a crazy waiter!",
          options: ["Spilled Dish / Glass", "Wrong Order Delivered"],
          prompt: "Use 'Just as I was about to...' and 'Long story short...'"
        },
        {
          id: "card_story10",
          category: "Category D: Surprises",
          icon: "🏆",
          title: "A Lucky Break or Victory",
          ptTitle: "Uma Vitória Inesperada 🇵🇹",
          question: "Describe a time when luck was completely on your side and you won a competition, raffle, or upgrade!",
          options: ["Hotel / Flight Upgrade", "Won a Competition or Prize"],
          prompt: "Use 'You won't believe what happened...' and 'Looking back...'"
        }
      ],

      // WEEK 2 INTERACTIVE HOMEWORK: THE ADD THE GRID GAME!
      gridGame: {
        title: "🧩 The Storyteller's 'Add-The-Grid' Challenge",
        subtitle: "Build 4 Complete Story Arcs across the 4x4 Grid Matrix! Select tiles from your Deck, complete narrative tense challenges, and ADD them to the Grid!",
        instructions: "Click any available Story Block tile in your deck below. Answer the missing connector challenge to ADD the tile to its matching slot on the Grid. Completing a full row unlocks a Story Arc Combo (+100 Pts)!",
        
        // 4x4 Grid Matrix (16 Tiles: 4 Story Arcs x 4 Narrative Stages)
        gridDimensions: { rows: 4, cols: 4 },
        
        columnsHeader: [
          { key: "hook", label: "🎣 1. Hook", pt: "Início / Gancho" },
          { key: "background", label: "🖼️ 2. Background", pt: "Cenário (Past Continuous)" },
          { key: "twist", label: "⚡ 3. Plot Twist", pt: "Conflito (Past Simple)" },
          { key: "resolution", label: "🌅 4. Resolution", pt: "Desfecho (Past Perfect)" }
        ],

        arcs: [
          {
            id: "arc_1",
            title: "The London Tube Violinist 🚇",
            color: "#c86b7b",
            tiles: [
              {
                id: "g_1_1",
                row: 0,
                col: 0,
                stage: "Hook",
                connector: "You won't believe",
                missingWord: "believe",
                text: "You won't ______ what happened on the Central Line last week!",
                pt: "Não vais acreditar no que aconteceu no metro...",
                audioText: "You won't believe what happened on the Central Line last week!",
                options: ["believe", "believe in", "believing", "believed"]
              },
              {
                id: "g_1_2",
                row: 0,
                col: 1,
                stage: "Background",
                connector: "was riding",
                missingWord: "was riding",
                text: "I ______ (ride) the train home when the lights suddenly flickered.",
                pt: "Eu estava a andar de comboio quando...",
                audioText: "I was riding the train home when the lights suddenly flickered.",
                options: ["was riding", "rode", "had ridden", "were riding"]
              },
              {
                id: "g_1_3",
                row: 0,
                col: 2,
                stage: "Plot Twist",
                connector: "Out of nowhere",
                missingWord: "nowhere",
                text: "Out of ______, a musician stood up and played a violin solo!",
                pt: "Do nada, um músico levantou-se...",
                audioText: "Out of nowhere, a musician stood up and played a violin solo!",
                options: ["nowhere", "somewhere", "anywhere", "everywhere"]
              },
              {
                id: "g_1_4",
                row: 0,
                col: 3,
                stage: "Resolution",
                connector: "had started",
                missingWord: "had started",
                text: "By the time we reached Oxford Circus, everyone ______ (start) dancing!",
                pt: "Quando chegámos a Oxford Circus, todos já tinham começado a dançar!",
                audioText: "By the time we reached Oxford Circus, everyone had started dancing!",
                options: ["had started", "was starting", "started", "have started"]
              }
            ]
          },

          {
            id: "arc_2",
            title: "The Soho Cafe Encounter ☕",
            color: "#3a6073",
            tiles: [
              {
                id: "g_2_1",
                row: 1,
                col: 0,
                stage: "Hook",
                connector: "That reminds me",
                missingWord: "reminds",
                text: "That ______ me of a crazy coincidence in a Soho coffee shop...",
                pt: "Isso faz-me lembrar de uma grande coincidência num café em Soho...",
                audioText: "That reminds me of a crazy coincidence in a Soho coffee shop...",
                options: ["reminds", "reminded", "remembering", "remind"]
              },
              {
                id: "g_2_2",
                row: 1,
                col: 1,
                stage: "Background",
                connector: "was sipping",
                missingWord: "was sipping",
                text: "While I ______ (sip) my espresso outside in the sunshine...",
                pt: "Enquanto eu estava a beber o meu café no exterior...",
                audioText: "While I was sipping my espresso outside in the sunshine...",
                options: ["was sipping", "sipped", "had sipped", "am sipping"]
              },
              {
                id: "g_2_3",
                row: 1,
                col: 2,
                stage: "Plot Twist",
                connector: "Before I knew it",
                missingWord: "knew",
                text: "Before I ______ it, my childhood best friend sat at the next table!",
                pt: "Antes que me me desse conta, a minha melhor amiga de infância sentou-se na mesa ao lado!",
                audioText: "Before I knew it, my childhood best friend sat at the next table!",
                options: ["knew", "know", "had known", "was knowing"]
              },
              {
                id: "g_2_4",
                row: 1,
                col: 3,
                stage: "Resolution",
                connector: "had moved",
                missingWord: "had moved",
                text: "It turned out she ______ (move) to London three months earlier!",
                pt: "Acontece que ela se tinha mudado para Londres três meses antes!",
                audioText: "It turned out she had moved to London three months earlier!",
                options: ["had moved", "was moving", "moved", "has moved"]
              }
            ]
          },

          {
            id: "arc_3",
            title: "The Afternoon Tea Spills 🫖",
            color: "#d4af37",
            tiles: [
              {
                id: "g_3_1",
                row: 2,
                col: 0,
                stage: "Hook",
                connector: "It all started",
                missingWord: "started",
                text: "It all ______ during a formal afternoon tea at a fancy hotel...",
                pt: "Tudo começou num chá da tarde formal num hotel chique...",
                audioText: "It all started during a formal afternoon tea at a fancy hotel...",
                options: ["started", "was starting", "had started", "starts"]
              },
              {
                id: "g_3_2",
                row: 2,
                col: 1,
                stage: "Background",
                connector: "was reaching",
                missingWord: "was reaching",
                text: "Just as I ______ (reach) for a freshly baked scone...",
                pt: "Mesmo quando eu estava prestes a alcançar um scone...",
                audioText: "Just as I was reaching for a freshly baked scone...",
                options: ["was reaching", "reached", "had reached", "reach"]
              },
              {
                id: "g_3_3",
                row: 2,
                col: 2,
                stage: "Plot Twist",
                connector: "To make matters worse",
                missingWord: "worse",
                text: "To make matters ______, I knocked over the entire tray of teacups!",
                pt: "Para piorar as coisas, derrubei o tabuleiro inteiro!",
                audioText: "To make matters worse, I knocked over the entire tray of teacups!",
                options: ["worse", "bad", "worst", "badly"]
              },
              {
                id: "g_3_4",
                row: 2,
                col: 3,
                stage: "Resolution",
                connector: "Looking back",
                missingWord: "back",
                text: "Looking ______ on it now, it became my favorite story to tell!",
                pt: "Olhando para trás agora, tornou-se a minha história favorita!",
                audioText: "Looking back on it now, it became my favorite story to tell!",
                options: ["back", "behind", "after", "backward"]
              }
            ]
          },

          {
            id: "arc_4",
            title: "The Rainy Flight Rescue ✈️",
            color: "#2e7d32",
            tiles: [
              {
                id: "g_4_1",
                row: 3,
                col: 0,
                stage: "Hook",
                connector: "Believe it or not",
                missingWord: "not",
                text: "Believe it or ______, our 10-hour flight delay was a blessing!",
                pt: "Acredites ou não, o atraso de 10 horas do voo foi uma bênção!",
                audioText: "Believe it or not, our 10-hour flight delay was a blessing!",
                options: ["not", "no", "never", "neither"]
              },
              {
                id: "g_4_2",
                row: 3,
                col: 1,
                stage: "Background",
                connector: "were waiting",
                missingWord: "were waiting",
                text: "While we ______ (wait) nervously at Gate 14 during a rainstorm...",
                pt: "Enquanto estávamos a esperar no portão 14 durante uma tempestade...",
                audioText: "While we were waiting nervously at Gate 14 during a rainstorm...",
                options: ["were waiting", "waited", "had waited", "are waiting"]
              },
              {
                id: "g_4_3",
                row: 3,
                col: 2,
                stage: "Plot Twist",
                connector: "Much to my surprise",
                missingWord: "surprise",
                text: "Much to my ______, the airline gave everyone free luxury hotel vouchers!",
                pt: "Para minha grande surpresa, a companhia aérea deu a todos cupões de hotel de luxo!",
                audioText: "Much to my surprise, the airline gave everyone free luxury hotel vouchers!",
                options: ["surprise", "surprised", "surprising", "surprisingly"]
              },
              {
                id: "g_4_4",
                row: 3,
                col: 3,
                stage: "Resolution",
                connector: "had made",
                missingWord: "had made",
                text: "Long story short, I ______ (make) 4 new lifelong friends by morning!",
                pt: "Resumindo a história, eu tinha feito 4 novos amigos para a vida inteira!",
                audioText: "Long story short, I had made 4 new lifelong friends by morning!",
                options: ["had made", "was making", "makes", "have made"]
              }
            ]
          }
        ]
      },

      quizzes: [
        {
          id: "q_narr1",
          type: "mcq",
          category: "Narrative Tenses",
          question: "Which tense combination is used to show an ongoing background action interrupted by a sudden main event?",
          options: [
            "Past Continuous ('I was walking') + Past Simple ('when I dropped my phone')",
            "Past Simple ('I walked') + Past Perfect ('when I had dropped my phone')",
            "Present Continuous ('I am walking') + Past Simple ('when I dropped')",
            "Past Perfect ('I had walked') + Past Continuous ('when I was dropping')"
          ],
          correct: 0,
          explanation: "Use Past Continuous (was/were + -ing) for background scene setting, interrupted by Past Simple for the main event! 🇵🇹 'Eu estava a andar quando deixei cair o telemóvel.'"
        },
        {
          id: "q_phrase_story1",
          type: "fill_blank",
          category: "Story Connectors",
          sentence: "To introduce a sudden, unexpected plot twist in your story, say: 'Out of ______, a stray dog ran into the restaurant!'",
          correctAnswer: "nowhere",
          hint: "Expressão em inglês para 'do nada / de repente' (starts with 'n')."
        },
        {
          id: "q_narr2",
          type: "mcq",
          category: "Past Perfect Practice",
          question: "When explaining an action that happened BEFORE another past event in your story, which tense do you use?",
          options: [
            "Past Perfect (had + past participle: 'By the time I arrived, the train had left')",
            "Past Simple ('By the time I arrived, the train left')",
            "Present Perfect ('By the time I arrived, the train has left')",
            "Past Continuous ('By the time I arrived, the train was leaving')"
          ],
          correct: 0,
          explanation: "Past Perfect (had + past participle) shows that something happened earlier in time before another past event! 🇵🇹 'Quando cheguei, o comboio já tinha partido.'"
        },
        {
          id: "q_phrase_story2",
          type: "fill_blank",
          category: "Story Summaries",
          sentence: "When summarizing the conclusion of a long story, say: 'Long story ______, we ended up missing the flight but having an amazing weekend.'",
          correctAnswer: "short",
          hint: "Expressão em inglês para 'resumindo a história' (starts with 's')."
        }
      ]
    }
  }
};

// Set top-level getters / default active week references for backwards compatibility
function syncActiveWeekData(weekNum) {
  const w = LONDON_VOCAB_DATA.weeks[weekNum] || LONDON_VOCAB_DATA.weeks[2];
  LONDON_VOCAB_DATA.activeWeek = weekNum;
  LONDON_VOCAB_DATA.lessonTitle = w.lessonTitle;
  LONDON_VOCAB_DATA.targetLevel = w.targetLevel;
  LONDON_VOCAB_DATA.duration = w.duration;
  LONDON_VOCAB_DATA.nativeLanguage = w.nativeLanguage;
  LONDON_VOCAB_DATA.focus = w.focus;
  LONDON_VOCAB_DATA.teacherLessonPlan = w.teacherLessonPlan;
  LONDON_VOCAB_DATA.functionalLanguage = w.functionalLanguage;
  LONDON_VOCAB_DATA.visualCards = w.visualCards;
  LONDON_VOCAB_DATA.conversationCards = w.conversationCards;
  LONDON_VOCAB_DATA.quizzes = w.quizzes;
  LONDON_VOCAB_DATA.gridGame = w.gridGame;
}

// Initial sync to activeWeek = 2
syncActiveWeekData(2);

if (typeof module !== 'undefined') {
  module.exports = { LONDON_VOCAB_DATA, syncActiveWeekData };
}
