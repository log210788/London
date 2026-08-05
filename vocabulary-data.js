const LONDON_VOCAB_DATA = {
  studentName: "Gabriela",
  destination: "London, UK 🇬🇧",
  tripTime: "January / February",
  nativeLanguage: "Portuguese 🇵🇹",
  
  categories: [
    {
      id: "airport",
      title: "Airport & Arrival",
      icon: "✈️",
      description: "Essential vocabulary for navigating Heathrow/Gatwick airport and border control.",
      words: [
        {
          word: "Passport Control",
          ptTranslation: "Controlo de Passaportes 🇵🇹",
          phonetic: "/ˈpɑːspɔːt kənˈtrəʊl/",
          pos: "noun",
          definition: "The place at an airport where officials check your passport.",
          example: "Please have your passport open at passport control.",
          tip: "Keep your return ticket and hotel address details handy here!"
        },
        {
          word: "Baggage Reclaim",
          ptTranslation: "Recolha de Bagagem 🇵🇹",
          phonetic: "/ˈbæɡɪdʒ rɪˈkleɪm/",
          pos: "noun",
          definition: "The area in an airport where arriving passengers collect luggage.",
          example: "Our suitcases should be at baggage reclaim belt number 4.",
          tip: "Look for the luggage symbol on airport signs."
        },
        {
          word: "Customs",
          ptTranslation: "Alfândega 🇵🇹",
          phonetic: "/ˈkʌstəmz/",
          pos: "noun",
          definition: "The officer or place where goods brought into a country are checked.",
          example: "Walk through the green channel if you have nothing to declare at customs.",
          tip: "Green channel = Nothing to declare. Red channel = Goods to declare."
        },
        {
          word: "Purpose of visit",
          ptTranslation: "Motivo da viagem / visita 🇵🇹",
          phonetic: "/ˈpɜːpəs əv ˈvɪzɪt/",
          pos: "phrase",
          definition: "The main reason why you are traveling to a country.",
          example: "My purpose of visit is tourism and sightseeing for two weeks.",
          tip: "Answer clearly: 'I am here on vacation' or 'I am visiting for sightseeing'."
        },
        {
          word: "Accommodation",
          ptTranslation: "Alojamento / Hotel 🇵🇹",
          phonetic: "/əˌkɒməˈdeɪʃn/",
          pos: "noun",
          definition: "A place to live or stay, such as a hotel or apartment.",
          example: "I have booked accommodation at a boutique hotel in central London.",
          tip: "Border control officers often ask for your hotel name and postcode."
        }
      ],
      quizzes: [
        {
          id: "air_q1",
          type: "mcq",
          question: "When the border control officer asks 'What is the purpose of your visit?', how should Gabriela answer?",
          options: [
            "I am here for tourism and vacation.",
            "I want a cup of tea please.",
            "My baggage is over there.",
            "Where is the Tube station?"
          ],
          correct: 0,
          explanation: "State clearly that you are traveling for tourism/vacation. (Resposta: Estou aqui de férias/turismo)."
        },
        {
          id: "air_q2",
          type: "fill_blank",
          sentence: "After landing, walk to _____ Reclaim to pick up your luggage.",
          correctAnswer: "Baggage",
          hint: "Starts with 'B' (Recolha de bagagem)."
        },
        {
          id: "air_q3",
          type: "mcq",
          question: "If you have no goods or items that need taxes paid, which channel do you walk through at UK Customs?",
          options: [
            "Red Channel",
            "Green Channel",
            "Blue Channel",
            "Gold Channel"
          ],
          correct: 1,
          explanation: "The Green Channel is for passengers with 'Nothing to Declare' (Nada a declarar)."
        }
      ]
    },
    {
      id: "tube",
      title: "The Tube & Transport",
      icon: "🚇",
      description: "Mastering the London Underground, Oyster Cards, and buses like a local.",
      words: [
        {
          word: "Mind the gap",
          ptTranslation: "Atenção ao vão (entre o comboio e a plataforma) 🇵🇹",
          phonetic: "/maɪnd ðə ɡæp/",
          pos: "phrase",
          definition: "A famous warning spoken at Tube stations to watch the space between the train and platform.",
          example: "Please mind the gap between the train and the platform.",
          tip: "You will hear this automated announcement at almost every London Tube station!"
        },
        {
          word: "Oyster Card",
          ptTranslation: "Cartão Oyster (cartão de transportes de Londres) 🇵🇹",
          phonetic: "/ˈɔɪstə kɑːd/",
          pos: "noun",
          definition: "A smart card used to pay for public transport in London.",
          example: "I tap my Oyster Card at the yellow reader to enter the station.",
          tip: "You can also tap your contactless bank card or phone on the yellow card readers."
        },
        {
          word: "Platform",
          ptTranslation: "Plataforma / Cais de embarque 🇵🇹",
          phonetic: "/ˈplætfɔːm/",
          pos: "noun",
          definition: "The area where passengers wait for a train.",
          example: "The eastbound Piccadilly line train leaves from platform 2.",
          tip: "Check whether you need Northbound, Southbound, Eastbound, or Westbound."
        },
        {
          word: "Double-decker",
          ptTranslation: "Autocarro vermelho de dois andares 🇵🇹",
          phonetic: "/ˌdʌbl ˈdekə/",
          pos: "noun",
          definition: "The iconic red two-story bus in London.",
          example: "Gabriela sat on the top floor of the red double-decker bus for a great view!",
          tip: "Sit at the very front of the top deck for the best sightseeing view."
        },
        {
          word: "Change lines",
          ptTranslation: "Mudar de linha / Fazer transbordo 🇵🇹",
          phonetic: "/tʃeɪndʒ laɪnz/",
          pos: "verb phrase",
          definition: "To transfer from one underground train line to another at an interchange station.",
          example: "At King's Cross station, we need to change lines to the Victoria Line.",
          tip: "Follow the colored signs inside the station to find your interchange line."
        }
      ],
      quizzes: [
        {
          id: "tube_q1",
          type: "fill_blank",
          sentence: "At London underground stations, always '_____ the gap' when stepping onto the train.",
          correctAnswer: "Mind",
          hint: "Means 'Atenção a' or 'Cuidado com'."
        },
        {
          id: "tube_q2",
          type: "mcq",
          question: "Where should you tap your Oyster card or phone to pay for your journey?",
          options: [
            "On the yellow reader at the ticket gates",
            "Show it to the train driver",
            "Give it to the police officer",
            "Scan it at a grocery store"
          ],
          correct: 0,
          explanation: "Always tap in and tap out on the yellow circular readers at the station gates."
        },
        {
          id: "tube_q3",
          type: "mcq",
          question: "Which escalator rule is strictly followed in London Tube stations?",
          options: [
            "Stand on the left, walk on the right",
            "Stand on the right, walk on the left",
            "Stand in the middle",
            "Run down as fast as possible"
          ],
          correct: 1,
          explanation: "In London, stand on the RIGHT side if you want to stand still; keep the left side open for people walking! (Fique à direita se estiver parado)."
        }
      ]
    },
    {
      id: "cafe",
      title: "Cafes & Dining",
      icon: "☕",
      description: "Ordering tea, coffee, scones, and polite restaurant dining.",
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
          example: "It's drizzling outside, so carry a lightweight umbrella in your bag.",
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
          example: "Keep your receipt if you want to claim tax-free refund or exchange items.",
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
          question: "What is the best way for Gabriela to dress for London weather in January/February?",
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
          sentence: "When buying clothes in Oxford Street, ask: 'Where is the _____ room?' to try them on.",
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
          example: "This sandwich costs five quid (£5).",
          tip: "10 quid = £10. It never takes an 's' at the end ('10 quid', not '10 quids')."
        },
        {
          word: "The Loo",
          ptTranslation: "O WC / Casa de Banho 🇵🇹",
          phonetic: "/ðə luː/",
          pos: "noun (slang)",
          definition: "Polite British informal word for the toilet/restroom.",
          example: "Excuse me, where is the loo?",
          tip: "Very natural and polite word used everywhere in the UK."
        },
        {
          word: "Sorted",
          ptTranslation: "Resolvido / Tudo organizado 🇵🇹",
          phonetic: "/ˈsɔːtɪd/",
          pos: "adjective (slang)",
          definition: "Arranged, resolved, or successfully organized.",
          example: "My hotel reservation is all sorted!",
          tip: "If someone says 'That's all sorted!', it means everything is taken care of."
        },
        {
          word: "Queue / Queueing",
          ptTranslation: "Fila de espera / Fazer fila 🇵🇹",
          phonetic: "/kjuː/",
          pos: "noun/verb",
          definition: "A line of people waiting patiently for something.",
          example: "Please join the queue to buy tickets for the London Eye.",
          tip: "Queueing politely is a sacred British tradition. Always wait your turn!"
        }
      ],
      quizzes: [
        {
          id: "slang_q1",
          type: "fill_blank",
          sentence: "If a Londoner says 'That sandwich costs five _____', they mean £5 sterling.",
          correctAnswer: "quid",
          hint: "Gíria britânica para libra (£1)."
        },
        {
          id: "slang_q2",
          type: "mcq",
          question: "What is a polite British word for restroom / toilet?",
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
      title: "☕ Ordering Coffee & Scones at a Soho Cafe",
      description: "Practice ordering food and drinks in a cozy London cafe.",
      steps: [
        {
          speaker: "Barista",
          line: "Good morning! Welcome to Soho Grind. Are you drinking in or taking away today?",
          options: [
            { text: "Good morning! We'd like to drink in, please. Table for two?", correct: true, feedback: "Excellent! Friendly, polite, and clear. (Excelente! Muito educado)." },
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
      id: "rp_hotel",
      title: "🏨 Checking into your London Hotel",
      description: "Practice arriving at your boutique London hotel receptionist.",
      steps: [
        {
          speaker: "Receptionist",
          line: "Good afternoon, welcome to The Covent Garden Hotel! How may I assist you today?",
          options: [
            { text: "Hello! Good afternoon. I have a reservation under the name Gabriela.", correct: true, feedback: "Perfect greeting and clear reservation mention." },
            { text: "I need a room.", correct: false, feedback: "Stating you already have a reservation under your name is more helpful." }
          ]
        },
        {
          speaker: "Receptionist",
          line: "Ah yes, Miss Gabriela! We have your reservation for 5 nights. May I please see your passport?",
          options: [
            { text: "Here you go! Here is my passport.", correct: true, feedback: "Polite and helpful!" },
            { text: "Why do you need it?", correct: false, feedback: "Hotels in the UK require passport identification at check-in for guest registration." }
          ]
        },
        {
          speaker: "Receptionist",
          line: "Thank you. Here is your keycard for Room 304 on the 3rd floor. Breakfast is served from 7:00 to 10:30 AM in the lounge. Enjoy your stay!",
          options: [
            { text: "Thank you so much! What time does the Underground station close nearby?", correct: true, feedback: "Great follow-up travel question!" },
            { text: "Okay bye.", correct: false, feedback: "'Thank you so much!' or 'Have a lovely day' is warmer!" }
          ]
        }
      ]
    }
  ],

  winterTips: [
    {
      icon: "🧥",
      title: "Dressing for Jan/Feb Weather",
      ptSubtitle: "Vestir-se para o tempo de Inverno",
      text: "Temperatures range between 3°C - 9°C (37°F - 48°F). Pack thermal base layers, a warm stylish coat, a soft scarf, gloves, and comfortable walking boots."
    },
    {
      icon: "☂️",
      title: "The Famous London Drizzle",
      ptSubtitle: "O famoso chuvisco de Londres",
      text: "Rain in London winter is often a light drizzle. Always carry a compact umbrella or hooded jacket when exploring Oxford Street or Hyde Park."
    },
    {
      icon: "🚇",
      title: "Escalator Etiquette",
      ptSubtitle: "Etiqueta nas escadas rolantes",
      text: "On Tube escalators, ALWAYS stand on the RIGHT side. The left side is strictly reserved for commuters who are walking. (Fique sempre à direita)."
    },
    {
      icon: "☕",
      title: "Polite Language Power Words",
      ptSubtitle: "Palavras mágicas de cortesia",
      text: "British conversation relies heavily on 'Please', 'Thank you', 'Excuse me', and 'Cheers'. Saying 'Sorry' when accidentally bumping into someone is essential etiquette!"
    }
  ]
};

if (typeof module !== 'undefined') {
  module.exports = LONDON_VOCAB_DATA;
}
