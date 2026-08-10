const LONDON_VOCAB_DATA = {
  studentName: "Gabriela",
  destination: "London, UK 🇬🇧",
  tripTime: "January / February",
  nativeLanguage: "Portuguese 🇵🇹",
  
  categories: [
    {
      id: "landmarks",
      title: "Landmarks & Places",
      icon: "🏰",
      description: "Famous London sights and neighborhoods Gabriela will visit during her trip.",
      words: [
        {
          word: "Buckingham Palace",
          ptTranslation: "Palácio de Buckingham (Residência Real) 🇵🇹",
          phonetic: "/ˈbʌkɪŋəm ˈpælɪs/",
          pos: "noun",
          definition: "The official London residence of the British monarch.",
          example: "Gabriela watched the Changing of the Guard outside Buckingham Palace.",
          tip: "Located near Victoria and St James's Park stations!"
        },
        {
          word: "Natural History Museum",
          ptTranslation: "Museu de História Natural 🇵🇹",
          phonetic: "/ˈnætʃrəl ˈhɪstri mjuːˈziːəm/",
          pos: "noun",
          definition: "A famous world-class museum in South Kensington known for dinosaur skeletons and architecture.",
          example: "Admission to the Natural History Museum is free!",
          tip: "Take the Tube to South Kensington station."
        },
        {
          word: "Leicester Square",
          ptTranslation: "Leicester Square (Praça dos teatros e cinemas) 🇵🇹",
          phonetic: "/ˈlestə skweə/",
          pos: "noun",
          definition: "A vibrant square in central London famous for West End theaters, film premieres, and shops.",
          example: "Let's meet at Leicester Square for a musical show in the evening.",
          tip: "Pronounced 'Lester Square' (not Lay-ces-ter)!"
        },
        {
          word: "Notting Hill",
          ptTranslation: "Bairro de Notting Hill 🇵🇹",
          phonetic: "/ˈnɒtɪŋ hɪl/",
          pos: "noun",
          definition: "A charming neighborhood famous for pastel-colored houses and Portobello Road Market.",
          example: "Gabriela loves taking photos of the colorful houses in Notting Hill.",
          tip: "Take the Central line or District line to Notting Hill Gate station."
        },
        {
          word: "Covent Garden",
          ptTranslation: "Covent Garden (Mercado e zona pedonal) 🇵🇹",
          phonetic: "/ˈkɒvənt ˈɡɑːdn/",
          pos: "noun",
          definition: "A famous shopping and entertainment hub with street performers and cozy cafes.",
          example: "We had afternoon tea near the historic market in Covent Garden.",
          tip: "Great place for shopping and watching street artists!"
        }
      ],
      quizzes: [
        {
          id: "landmark_q1",
          type: "mcq",
          question: "Which famous London residence of the King is located near St James's Park?",
          options: [
            "Buckingham Palace",
            "Natural History Museum",
            "Leicester Square",
            "Notting Hill Gate"
          ],
          correct: 0,
          explanation: "Buckingham Palace is the official London residence of the monarch. (Palácio de Buckingham)."
        },
        {
          id: "landmark_q2",
          type: "fill_blank",
          sentence: "To see dinosaur skeletons and beautiful architecture, visit the Natural History _____ in South Kensington.",
          correctAnswer: "Museum",
          hint: "Starts with 'M' (Museu)."
        },
        {
          id: "landmark_q3",
          type: "mcq",
          question: "How do Londoners pronounce 'Leicester Square'?",
          options: [
            "Lester Square",
            "Lay-ces-ter Square",
            "Lee-chester Square",
            "Lie-ces-ter Square"
          ],
          correct: 0,
          explanation: "Leicester Square is pronounced 'Lester Square'! (Pronuncia-se 'Lester')."
        }
      ]
    },
    {
      id: "tube",
      title: "Tube Directions & Transport",
      icon: "🚇",
      description: "Navigating London using Northbound, Southbound, Eastbound, and Westbound train lines.",
      words: [
        {
          word: "Westbound",
          ptTranslation: "Direção Oeste (Sentido Oeste) 🇵🇹",
          phonetic: "/ˈwestbaʊnd/",
          pos: "adjective",
          definition: "Traveling towards the west.",
          example: "Take the Westbound Central line to go to Notting Hill Gate.",
          tip: "Check platform signs for 'Westbound' before stepping onto the train."
        },
        {
          word: "Eastbound",
          ptTranslation: "Direção Este / Leste 🇵🇹",
          phonetic: "/ˈiːstbaʊnd/",
          pos: "adjective",
          definition: "Traveling towards the east.",
          example: "The Eastbound Piccadilly line takes you from Hyde Park Corner to Leicester Square.",
          tip: "Eastbound trains travel towards Covent Garden and the City of London."
        },
        {
          word: "Northbound",
          ptTranslation: "Direção Norte (Sentido Norte) 🇵🇹",
          phonetic: "/ˈnɔːθbaʊnd/",
          pos: "adjective",
          definition: "Traveling towards the north.",
          example: "Take the Northbound Northern Line from Waterloo to Leicester Square.",
          tip: "Look for Northbound platform signs when heading towards Camden or King's Cross."
        },
        {
          word: "Southbound",
          ptTranslation: "Direção Sul (Sentido Sul) 🇵🇹",
          phonetic: "/ˈsaʊθbaʊnd/",
          pos: "adjective",
          definition: "Traveling towards the south.",
          example: "To go to the Natural History Museum, take a Southbound train to South Kensington.",
          tip: "Southbound trains head across the River Thames towards South London."
        },
        {
          word: "Mind the gap",
          ptTranslation: "Atenção ao vão (entre o comboio e a plataforma) 🇵🇹",
          phonetic: "/maɪnd ðə ɡæp/",
          pos: "phrase",
          definition: "A famous warning spoken at Tube stations to watch the space between train and platform.",
          example: "Please mind the gap when boarding the train at Leicester Square.",
          tip: "Automated message heard at every station!"
        },
        {
          word: "Oyster Card",
          ptTranslation: "Cartão Oyster (cartão de transportes) 🇵🇹",
          phonetic: "/ˈɔɪstə kɑːd/",
          pos: "noun",
          definition: "Smart card used to pay for Tube and bus travel in London.",
          example: "Gabriela tapped her Oyster Card at Notting Hill station.",
          tip: "You can also tap your contactless bank card or phone!"
        },
        {
          word: "Contactless",
          ptTranslation: "Pagamento por aproximação (sem contacto) 🇵🇹",
          phonetic: "/ˈkɒntæktləs/",
          pos: "adjective",
          definition: "Paying by tapping a bank card or smartphone on a payment terminal without typing a PIN.",
          example: "You can use contactless payment at all London Tube station gates.",
          tip: "Works for buses, Tube, cafes, and shops across London!"
        },
        {
          word: "Overground",
          ptTranslation: "Comboios de superfície de Londres 🇵🇹",
          phonetic: "/ˈəʊvəɡraʊnd/",
          pos: "noun",
          definition: "The orange-line suburban rail network in London.",
          example: "Take the London Overground to visit trendy markets and local parks.",
          tip: "Uses the same Oyster and Contactless system as the Tube!"
        }
      ],
      quizzes: [
        {
          id: "tube_q1",
          type: "mcq",
          question: "Gabriela is at Oxford Circus and wants to go west to Notting Hill Gate. Which platform direction should she follow?",
          options: [
            "Westbound",
            "Eastbound",
            "Northbound",
            "Southbound"
          ],
          correct: 0,
          explanation: "Notting Hill is in West London, so follow signs for the Westbound platform! (Direção Oeste)."
        },
        {
          id: "tube_q4",
          type: "mcq",
          question: "Which Tube station stop should Gabriela use to visit the Natural History Museum?",
          options: [
            "South Kensington",
            "Baker Street",
            "London Bridge",
            "King's Cross"
          ],
          correct: 0,
          explanation: "South Kensington station is right next to the Natural History Museum! (Estação de South Kensington)."
        }
      ]
    },


    {
      id: "cafe",
      title: "Cafes & Dining",
      icon: "☕",
      description: "Ordering tea, coffee, scones, and polite restaurant dining in London.",
      words: [
        {
          word: "Afternoon Tea",
          ptTranslation: "Chá da Tarde tradicional inglês 🇵🇹",
          phonetic: "/ˌɑːftəˈnuːn tiː/",
          pos: "noun",
          definition: "A traditional British light meal served with tea, finger sandwiches, scones, and cakes.",
          example: "Let's book afternoon tea near Covent Garden for a lovely afternoon treat.",
          tip: "Scones are eaten with clotted cream and strawberry jam!"
        },
        {
          word: "Eat in or take away?",
          ptTranslation: "Para comer aqui ou para levar? 🇵🇹",
          phonetic: "/iːt ɪn ɔː teɪk əˈweɪ/",
          pos: "phrase",
          definition: "Asked by staff to know if you will eat inside the cafe or carry your food outside.",
          example: "'Would you like to eat in or take away?' - 'Take away, please!'",
          tip: "Eating in sometimes incurs a small extra service charge."
        },
        {
          word: "The bill",
          ptTranslation: "A conta (do restaurante/café) 🇵🇹",
          phonetic: "/ðə bɪl/",
          pos: "noun",
          definition: "The statement showing how much you owe for food/drinks (in US: 'the check').",
          example: "Could we have the bill, please?",
          tip: "In Britain, say 'the bill' instead of 'the check'."
        },
        {
          word: "Service charge",
          ptTranslation: "Taxa de serviço (gorjeta incluída na conta) 🇵🇹",
          phonetic: "/ˈsɜːvɪs tʃɑːdʒ/",
          pos: "noun",
          definition: "An extra percentage added to a restaurant bill for staff service (usually 12.5%).",
          example: "A 12.5% optional service charge is included on the bill.",
          tip: "If service charge is included, you don't need to leave an extra cash tip!"
        },
        {
          word: "Sparkling or Still?",
          ptTranslation: "Água com gás ou sem gás? 🇵🇹",
          phonetic: "/ˈspɑːklɪŋ ɔː stɪl/",
          pos: "phrase",
          definition: "Asked when ordering water: carbonated (bubbly) vs non-carbonated (regular water).",
          example: "I would like a bottle of still water, please.",
          tip: "You can also ask for 'tap water' if you want free tap water!"
        },
        {
          word: "Flat White",
          ptTranslation: "Café com leite cremoso (estilo britânico) 🇵🇹",
          phonetic: "/flæt waɪt/",
          pos: "noun",
          definition: "A popular espresso coffee drink prepared with steamed milk and fine microfoam.",
          example: "Gabriela ordered an oat milk Flat White at Leicester Square Grind.",
          tip: "Extremely popular coffee order in London cafes!"
        },
        {
          word: "Scone",
          ptTranslation: "Bolinho tradicional britânico de chá 🇵🇹",
          phonetic: "/skɒn/",
          pos: "noun",
          definition: "A classic British baked cake eaten warm with clotted cream and strawberry jam.",
          example: "Warm scones served with clotted cream and strawberry jam are delicious.",
          tip: "Pronounced 'skon' or 'skohn'!"
        }
      ],
      quizzes: [
        {
          id: "cafe_q1",
          type: "fill_blank",
          sentence: "In London, when asking for the total cost at the end of a restaurant meal, say 'Could we have the _____, please?'",
          correctAnswer: "bill",
          hint: "Em inglês britânico, a conta diz-se 'b...' (bill)."
        },
        {
          id: "cafe_q2",
          type: "mcq",
          question: "How do you ask for free tap water in a London restaurant?",
          options: [
            "May I have a glass of tap water, please?",
            "Give me river water please.",
            "Can I get a soda water for free?",
            "Water isn't available."
          ],
          correct: 0,
          explanation: "Asking politely for 'tap water' (água da torneira) is standard and free in UK restaurants."
        }
      ]
    },
    {
      id: "weather_shopping",
      title: "Winter Weather & Shopping",
      icon: "🧥",
      description: "Dressing for London's January/February winter, boutique shopping, and polite retail interactions.",
      words: [
        {
          word: "Layering up",
          ptTranslation: "Vestir-se em camadas (roupa quente) 🇵🇹",
          phonetic: "/ˈleɪərɪŋ ʌp/",
          pos: "phrase",
          definition: "Wearing several garments on top of each other to stay warm in winter.",
          example: "January in London is chilly, so Gabriela is layering up with a thermal shirt, sweater, and coat.",
          tip: "Jan/Feb temperatures average 3°C to 9°C (37°F - 48°F)."
        },
        {
          word: "Drizzle",
          ptTranslation: "Chuvisco / Chuva miúda 🇵🇹",
          phonetic: "/ˈdrɪzl/",
          pos: "noun/verb",
          definition: "Light, fine rain falling continuously.",
          example: "It's drizzling outside near Buckingham Palace, so carry a lightweight umbrella.",
          tip: "London winter often brings light drizzle rather than heavy snow."
        },
        {
          word: "Fitting Room",
          ptTranslation: "Provador de roupa 🇵🇹",
          phonetic: "/ˈfɪtɪŋ ruːm/",
          pos: "noun",
          definition: "A room in a clothes shop where you can try on clothes before buying.",
          example: "Excuse me, where are the fitting rooms?",
          tip: "In British English, 'fitting room' is more common than 'dressing room'."
        },
        {
          word: "Receipt",
          ptTranslation: "Talão de compra / Recibo 🇵🇹",
          phonetic: "/rɪˈsiːt/",
          pos: "noun",
          definition: "A printed paper showing proof of payment.",
          example: "Keep your receipt if you buy clothes in Notting Hill or Covent Garden.",
          tip: "Notice the 'p' is silent! Pronounced /rɪ-seet/."
        },
        {
          word: "Winter Sale",
          ptTranslation: "Saldos de Inverno 🇵🇹",
          phonetic: "/ˈwɪntə seɪl/",
          pos: "noun",
          definition: "Discounted shopping period in January across London stores.",
          example: "Oxford Street stores have great discounts during the January winter sales!",
          tip: "January is one of the best months for fashion shopping in London!"
        }
      ],
      quizzes: [
        {
          id: "ws_q1",
          type: "mcq",
          question: "What is the best way for Gabriela to dress for walking around Buckingham Palace in January/February?",
          options: [
            "Wear layers (thermal top, warm jumper/sweater, stylish coat, and scarf)",
            "Just a light t-shirt and shorts",
            "Heavy scuba diving suit",
            "Flip-flops and swimsuit"
          ],
          correct: 0,
          explanation: "Winter in London is crisp and cool. Wearing layers (vestir em camadas) allows you to stay warm!"
        },
        {
          id: "ws_q2",
          type: "fill_blank",
          sentence: "When buying clothes in Oxford Street or Notting Hill, ask: 'Where is the _____ room?' to try them on.",
          correctAnswer: "fitting",
          hint: "Provador de roupa em inglês (fitting room)."
        }
      ]
    },
    {
      id: "slang_culture",
      title: "British Slang & Etiquette",
      icon: "💬",
      description: "Fun local expressions and social customs that will make Gabriela feel like a local.",
      words: [
        {
          word: "Cheers!",
          ptTranslation: "Obrigado(a)! / Saúde! 🇵🇹",
          phonetic: "/tʃɪəz/",
          pos: "exclamation",
          definition: "Used as a friendly way to say 'Thank you', 'Goodbye', or when clinking glasses.",
          example: "'Here is your coffee, Gabriela.' - 'Cheers!'",
          tip: "British people say 'cheers' dozens of times a day!"
        },
        {
          word: "Quid",
          ptTranslation: "Libra (gíria informal para £1) 🇵🇹",
          phonetic: "/kwɪd/",
          pos: "noun (slang)",
          definition: "Informal British word for one Pound Sterling (£1).",
          example: "This souvenir costs five quid (£5).",
          tip: "10 quid = £10. It never takes an 's' at the end ('10 quid', not '10 quids')."
        },
        {
          word: "The Loo",
          ptTranslation: "O WC / Casa de Banho 🇵🇹",
          phonetic: "/ðə luː/",
          pos: "noun (slang)",
          definition: "Polite British informal word for the toilet/restroom.",
          example: "Excuse me, where is the loo near Leicester Square?",
          tip: "Very natural and polite word used everywhere in the UK."
        },
        {
          word: "Sorted",
          ptTranslation: "Resolvido / Tudo organizado 🇵🇹",
          phonetic: "/ˈsɔːtɪd/",
          pos: "adjective (slang)",
          definition: "Arranged, resolved, or successfully organized.",
          example: "My hotel reservation and museum tickets are all sorted!",
          tip: "If someone says 'That's all sorted!', it means everything is taken care of."
        },
        {
          word: "Queue / Queueing",
          ptTranslation: "Fila de espera / Fazer fila 🇵🇹",
          phonetic: "/kjuː/",
          pos: "noun/verb",
          definition: "A line of people waiting patiently for something.",
          example: "Please join the queue to enter the Natural History Museum.",
          tip: "Queueing politely is a sacred British tradition. Always wait your turn!"
        }
      ],
      quizzes: [
        {
          id: "slang_q1",
          type: "fill_blank",
          sentence: "If a Londoner near Leicester Square says 'That theater ticket costs twenty _____', they mean £20.",
          correctAnswer: "quid",
          hint: "Gíria britânica para libra (£1)."
        },
        {
          id: "slang_q2",
          type: "mcq",
          question: "What is a polite British word for restroom / toilet when visiting London landmarks?",
          options: [
            "The Loo",
            "The Bank",
            "The Tube",
            "The Pub"
          ],
          correct: 0,
          explanation: "'The Loo' é a palavra britânica amigável para casa de banho/WC."
        }
      ]
    }
  ],

  roleplays: [
    {
      id: "rp_cafe",
      title: "☕ Ordering Coffee near Leicester Square",
      description: "Practice ordering food and drinks in a cozy West End London cafe.",
      steps: [
        {
          speaker: "Barista",
          line: "Good morning! Welcome to Leicester Square Grind. Are you dining in today?",
          options: [
            { text: "Good morning! We'd like to dine in, please. Table for two?", correct: true, feedback: "Excellent! Friendly, polite, and clear. (Excelente! Muito educado)." },
            { text: "Give me coffee now.", correct: false, feedback: "A bit too abrupt. In the UK, adding 'Good morning' and 'please' is customary!" }
          ]
        },

        {
          speaker: "Barista",
          line: "Right this way! What can I get started for you?",
          options: [
            { text: "Could I have an Oat Flat White and warm scones with clotted cream, please?", correct: true, feedback: "Perfect British order! Scones with clotted cream are iconic." },
            { text: "I don't know, what is good?", correct: false, feedback: "You can ask for recommendations: 'What do you recommend?', but ordering specifically is great practice." }
          ]
        },
        {
          speaker: "Barista",
          line: "Lovely choice! Would you like still or sparkling water with that?",
          options: [
            { text: "Just a glass of tap water, please. Thank you!", correct: true, feedback: "Spot on! Free tap water is standard and polite. (Água da torneira é grátis)." },
            { text: "No water, just money.", correct: false, feedback: "Not quite natural! Saying 'Just tap water, please' is the right response." }
          ]
        },
        {
          speaker: "Barista",
          line: "Coming right up! That will be £12.50 altogether. You can tap your card on the reader.",
          options: [
            { text: "Great, thank you! *taps card* Cheers!", correct: true, feedback: "Perfect! Using 'Cheers!' makes you sound like a true London local." }
          ]
        }
      ]
    },
    {
      id: "rp_directions",
      title: "🗺️ Asking Directions to Buckingham Palace & Notting Hill",
      description: "Practice asking London locals for Tube lines and cardinal directions.",
      steps: [
        {
          speaker: "Londoner",
          line: "Excuse me, love! You look a bit lost. Can I help you with directions?",
          options: [
            { text: "Hello! Yes please, which platform should I take for the Westbound train to Notting Hill?", correct: true, feedback: "Fantastic question! Clear and polite." },
            { text: "Where am I?", correct: false, feedback: "Asking specifically for directions (e.g. 'Westbound to Notting Hill') is clearer." }
          ]
        },
        {
          speaker: "Londoner",
          line: "Follow the red Central line signs over there and head down to the Westbound platform!",
          options: [
            { text: "Thank you so much! And is South Kensington near the Natural History Museum?", correct: true, feedback: "Brilliant follow-up question!" },
            { text: "Okay bye.", correct: false, feedback: "Saying 'Thank you so much!' or 'Have a great day!' is much warmer." }
          ]
        },
        {
          speaker: "Londoner",
          line: "Yes, exactly! Get off at South Kensington station and follow the underground walkway straight into the museum.",
          options: [
            { text: "Wonderful! Thank you for your help. Cheers!", correct: true, feedback: "Spot on! Perfect polite British farewell." }
          ]
        }
      ]
    }
  ],

  winterTips: [
    {
      icon: "🏰",
      title: "Visiting London Sights",
      ptSubtitle: "Visitar os Pontos Turísticos",
      text: "Buckingham Palace, Natural History Museum, and Leicester Square are in Central London. Book free tickets online for Natural History Museum entry!"
    },
    {
      icon: "🚇",
      title: "Tube Directions (North/South/East/West)",
      ptSubtitle: "Direções no Metro de Londres",
      text: "Tube platform signs always show Northbound, Southbound, Eastbound, or Westbound. To go to Notting Hill from central London, follow Westbound!"
    },
    {
      icon: "🧥",
      title: "Dressing for Jan/Feb Weather",
      ptSubtitle: "Vestir-se para o tempo de Inverno",
      text: "Temperatures range between 3°C - 9°C (37°F - 48°F). Pack thermal base layers, a warm coat, scarf, gloves, and comfortable walking shoes."
    },
    {
      icon: "☕",
      title: "Polite Language Power Words",
      ptSubtitle: "Palavras mágicas de cortesia",
      text: "British conversation relies heavily on 'Please', 'Thank you', 'Excuse me', and 'Cheers'. Saying 'Sorry' when accidentally bumping into someone is essential etiquette!"
    }
  ],

  visualCards: [
    {
      id: "vis_tea",
      title: "Traditional British Afternoon Tea 🫖",
      subtitle: "Covent Garden & Kensington Tea Salons",
      image: "images/afternoon_tea.jpg",
      badge: "Culinary & Social Etiquette",
      ptTranslation: "Chá da Tarde Tradicional Inglês 🇵🇹",
      description: "An elegant British tradition featuring tiered stands of warm scones with clotted cream, berry jam, delicate finger sandwiches, and fragrant Earl Grey or English Breakfast tea.",
      targetVocab: [
        { word: "Scone", translation: "Bolinho tradicional de chá", phonetic: "/skɒn/" },
        { word: "Clotted Cream", translation: "Creme de leite espesso britânico", phonetic: "/ˈklɒtɪd kriːm/" },
        { word: "Tiered Stand", translation: "Prato de servir em camadas", phonetic: "/tɪəd stænd/" },
        { word: "Finger Sandwiches", translation: "Mini sanduíches sem côdea", phonetic: "/ˈfɪŋɡə ˈsænwɪdʒɪz/" }
      ],
      speakingPrompt: "Gabriela, describe how you would like your tea served when you visit Covent Garden!"
    },
    {
      id: "vis_cafe",
      title: "Cozy Soho Cafe & Coffee Culture ☕",
      subtitle: "Ordering in Central London",
      image: "images/soho_cafe.jpg",
      badge: "Cafe & Dining Phrases",
      ptTranslation: "Cafés de Soho e Expressões de Atendimento 🇵🇹",
      description: "London cafes in Soho and Leicester Square are perfect for warming up with a hot coffee, pastry, or quick light lunch during winter sightseeing.",
      targetVocab: [
        { word: "Flat White", translation: "Café com leite cremoso", phonetic: "/flæt waɪt/" },
        { word: "Eat in or take away?", translation: "Para comer aqui ou levar?", phonetic: "/iːt ɪn ɔː teɪk əˈweɪ/" },
        { word: "The bill, please", translation: "A conta, por favor", phonetic: "/ðə bɪl pliːz/" },
        { word: "Contactless", translation: "Pagamento por aproximação", phonetic: "/ˈkɒntæktləs/" }
      ],
      speakingPrompt: "Roleplay: Practice ordering your favorite hot drink and pastry with your teacher!"
    },
    {
      id: "vis_tube",
      title: "London Underground Tube & Directions 🚇",
      subtitle: "Navigating London Trains",
      image: "images/tube_guide.jpg",
      badge: "Transport & Directions",
      ptTranslation: "Metro de Londres e Direções Cardinais 🇵🇹",
      description: "London's Tube network relies on platform direction signs (Northbound, Southbound, Eastbound, Westbound) and escalator etiquette.",
      targetVocab: [
        { word: "Westbound Platform", translation: "Plataforma Sentido Oeste", phonetic: "/ˈwestbaʊnd ˈplætfɔːm/" },
        { word: "Stand on the right", translation: "Manter-se à direita na escada", phonetic: "/stænd ɒn ðə raɪt/" },
        { word: "Mind the gap", translation: "Cuidado com o vão do comboio", phonetic: "/maɪnd ðə ɡæp/" },
        { word: "Oyster / Contactless", translation: "Passe / Cartão bancário", phonetic: "/ˈɔɪstə/" }
      ],
      speakingPrompt: "Explain how to travel from Oxford Circus to Notting Hill Gate using Northbound/Westbound platform signs!"
    },
    {
      id: "vis_fashion",
      title: "Winter London Style & Weather Guide 🧥",
      subtitle: "Dressing for Jan/Feb (3°C - 9°C)",
      image: "images/winter_fashion.jpg",
      badge: "Winter Travel & Shopping",
      ptTranslation: "Guia de Estilo de Inverno e Roupa 🇵🇹",
      description: "Staying stylish and warm while walking around Buckingham Palace and Oxford Street during chilly winter days in London.",
      targetVocab: [
        { word: "Layering up", translation: "Vestir-se em camadas", phonetic: "/ˈleɪərɪŋ ʌp/" },
        { word: "Fitting room", translation: "Provador de roupa", phonetic: "/ˈfɪtɪŋ ruːm/" },
        { word: "Drizzle", translation: "Chuvisco / Chuva leve", phonetic: "/ˈdrɪzl/" },
        { word: "Winter Sale", translation: "Saldos de Inverno", phonetic: "/ˈwɪntə seɪl/" }
      ],
      speakingPrompt: "Describe the outfit you are packing in your suitcase for London in January!"
    }
  ],

  teacherLessonPlan: {
    lessonTitle: "Preply 1-on-1 Lesson Plan: Gabriela's London Travel English",
    duration: "50 Minutes",
    level: "Elementary to Pre-Intermediate (A2/B1)",
    studentProfile: "Gabriela (Portuguese native speaker, traveling to London in Jan/Feb)",
    lessonGoals: [
      "Master essential London travel vocabulary (Tube, cafes, winter weather, landmarks).",
      "Confidently order food/drinks and ask for the bill in British English.",
      "Understand Tube cardinal directions (Northbound/Westbound) and platform signs.",
      "Correct common Portuguese ESL errors (e.g. 'make/do', 'stand on the right', 'the bill')."
    ],
    timeline: [
      {
        time: "00:00 - 00:05 (5 mins)",
        stage: "Warm-Up & Icebreaker",
        activity: "Ask Gabriela about her upcoming London itinerary and winter weather expectations in January (3°C - 9°C).",
        teacherPrompt: "'Hi Gabriela! Are you excited for London? Let me show you today's visual cards! What clothes are you packing?'"
      },
      {
        time: "00:05 - 00:15 (10 mins)",
        stage: "Visual Flashcards & Audio Drill",
        activity: "Review the 4 Visual Learning Cards (Afternoon Tea, Soho Cafe, Tube Guide, Winter Style). Practice British pronunciation with Web Speech audio.",
        teacherPrompt: "Ask Gabriela to repeat key words like 'Flat White', 'Mind the gap', 'Clotted cream', and 'Fitting room'."
      },
      {
        time: "00:15 - 00:30 (15 mins)",
        stage: "Interactive Cafe & Tube Roleplays",
        activity: "Perform Roleplay #1 (Ordering at Leicester Square Grind) and Roleplay #2 (Navigating Tube to Notting Hill Gate). Swap roles!",
        teacherPrompt: "Pay attention to polite British tags: 'Could I have... please?', 'Cheers!', and 'Just tap water, please'."
      },
      {
        time: "00:30 - 00:40 (10 mins)",
        stage: "5-Stage Vocab Grid Challenge",
        activity: "Guide Gabriela through the interactive audio grid game in the web app to reinforce auditory recognition of London target words.",
        teacherPrompt: "Play target audio clips and have Gabriela identify the coordinates on the 5x5 grid."
      },
      {
        time: "00:40 - 00:45 (5 mins)",
        stage: "Portuguese ESL Error Correction",
        activity: "Review Portuguese false cognates and preposition traps for native Portuguese speakers.",
        corrections: [
          "❌ 'I want coffee' -> ✔️ 'Could I have a coffee, please?'",
          "❌ 'The check' -> ✔️ 'The bill' (in UK English)",
          "❌ 'Train to West' -> ✔️ 'Westbound platform'",
          "❌ 'Walk on the right' -> ✔️ 'Stand on the right' (on Tube escalators)"
        ]
      },
      {
        time: "00:45 - 00:50 (5 mins)",
        stage: "Homework Assignment & Wrap-Up",
        activity: "Assign the Interactive Homework Module in the app. Show Gabriela how to download her .txt report and upload it on Preply chat!",
        teacherPrompt: "'Gabriela, complete the homework exercises on the site and click 'Download Homework (.txt)' to send me your score before our next class!'"
      }
    ]
  }
};

if (typeof module !== 'undefined') {
  module.exports = LONDON_VOCAB_DATA;
}
