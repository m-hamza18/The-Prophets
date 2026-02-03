export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface StorySection {
  text: string;
  imagePrompt: string;
  image?: string;
}

export interface ProphetStory {
  id: number;
  name: string;
  arabicName: string;
  color: string;
  bgGradient: string;
  shortDescription: string;
  story: StorySection[];
  lessons: string[];
  quiz: QuizQuestion[];
}

export const prophets: ProphetStory[] = [
  {
    "id": 1,
    "name": "Prophet Adam (AS)",
    "arabicName": "آدم",
    "color": "#22C55E",
    "bgGradient": "from-emerald-400 to-green-600",
    "shortDescription": "The first human being and prophet created by Allah from clay",
    "story": [
      {
        "text": "Long ago, Allah told the angels: 'I am going to place mankind on Earth.' The angels were curious, but Allah told them, 'I know that which you do not know.' Allah took a handful of dust from all over the world—red, black, white, and yellow—and shaped it into the first man, Adam (AS).",
        "imagePrompt": "Allah's brilliance shaping a human figure from multicolored clay",
      },
      {
        "text": "After the clay became firm, Allah breathed life into him. Adam (AS) sneezed and said, 'Alhamdulillah' (All praise belongs to Allah). Allah granted him mercy. Then, Allah taught Adam the names of everything in the world so that he would be the most knowledgeable of all creatures.",
        "imagePrompt": "Prophet Adam (AS) waking up in a beautiful garden, surrounded by animals he can name",
      },
      {
        "text": "Allah presented the things to the angels and asked their names, but they didn't know. Adam (AS) informed them of the names, showing the wisdom Allah gave him. Allah then commanded the angels to bow to Adam. All did except Iblis, who was proud and said, 'I am better than him. You created me from fire and him from clay.'",
        "imagePrompt": "Angels bowing to Adam (AS) in sunlight, with one dark figure standing proudly away",
      },
      {
        "text": "Adam (AS) lived in the beautiful garden of Jannah. One day, he woke up to find a companion near him. It was Hawwa (Eve). When the angels asked her name, Adam said, 'Hawwa,' because she was created from a living thing. They lived happily together, enjoying the fruits of Paradise.",
        "imagePrompt": "Adam and Hawwa walking through a lush paradise with glowing fruits and crystal rivers",
      },
      {
        "text": "Allah told them: 'Dwell in Paradise and eat freely, but come not near this one tree.' But Shaytan (Iblis) was jealous. He whispered to them: 'Your Lord only forbade this tree so you wouldn't become immortals.' He swore he was a sincere friend to them.",
        "imagePrompt": "A shadowy figure whispering near a golden tree with mysterious fruits",
      },
      {
        "text": "Tempted by Shaytan's lies, they tasted the fruit. Immediately, they felt shame and realized they were naked, so they began to cover themselves with the large leaves of Paradise. Their Lord called out: 'Did I not forbid you that tree?'",
        "imagePrompt": "Adam and Hawwa covering themselves with large leaves, looking sad and repentant",
      },
      {
        "text": "Instead of being proud like Iblis, Adam and Hawwa immediately asked for forgiveness: 'Our Lord! We have wronged ourselves. If You forgive us not, we shall certainly be losers.' Allah accepted their repentance but sent them to live and work on Earth as a test for all mankind.",
        "imagePrompt": "Adam and Hawwa descending to a beautiful green Earth under a bright sun",
      },
      {
        "text": "On Earth, Adam (AS) worked hard, tilling the land. He had children, including twins Habil (Abel) and Qabil (Cain). He taught them to be kind and to always worship Allah alone. Before he died, he promised his children that Allah would always send prophets to guide them.",
        "imagePrompt": "Prophet Adam (AS) teaching a group of children under a large leafy tree on Earth",
      }
    ],
    "lessons": [
      "Knowledge is a great gift from Allah (He taught Adam the names of all things)",
      "Pride is a dangerous trap (Iblis's mistake)",
      "We must always be honest with ourselves and admit when we make mistakes",
      "Allah is the Most Merciful and always ready to forgive those who ask",
      "Life on Earth is a journey and a test to show our love for Allah"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "What did Allah use to create Prophet Adam (AS)?",
        "options": [
          "Water",
          "Clay from the earth",
          "Fire",
          "Air"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Who refused to bow to Adam (AS)?",
        "options": [
          "The angels",
          "Iblis (Shaytan)",
          "The animals",
          "Nobody"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "What was the name of the garden where Adam first lived?",
        "options": [
          "Makkah",
          "Madinah",
          "Jannah (Paradise)",
          "Jerusalem"
        ],
        "correctAnswer": 2
      },
      {
        "id": 4,
        "question": "Who was created to be Adam's wife?",
        "options": [
          "Maryam",
          "Hawwa (Eve)",
          "Sarah",
          "Hajar"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "What should we do when we make mistakes?",
        "options": [
          "Hide them",
          "Ask Allah for forgiveness",
          "Blame others",
          "Ignore them"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 2,
    "name": "Prophet Idris (AS)",
    "arabicName": "إدريس",
    "color": "#8B5CF6",
    "bgGradient": "from-violet-400 to-purple-600",
    "shortDescription": "The prophet who was raised to heaven and taught writing",
    "story": [
      {
        "text": "Prophet Idris (AS) was born in Babylon and was the 5th generation after Adam (AS). He was a man of great truth and wisdom. He called people back to the pure religion of his forefathers, teaching them to be just and fair in everything they did.",
        "imagePrompt": "A wise man standing on a high Babylon balcony, looking out at the city",
      },
      {
        "text": "Allah granted Idris (AS) many 'firsts.' He was the first human to use a pen for writing! He wanted to help people record knowledge so it wouldn't be forgotten. He also taught people about astronomy and how to understand the movements of the stars.",
        "imagePrompt": "A person delicately writing on a scroll with an ancient reed pen",
      },
      {
        "text": "Before Idris (AS), people mostly wore animal skins. He was the first to invent the needle and thread, teaching people how to sew beautiful, clean clothes. He would always remember Allah with every stitch he made.",
        "imagePrompt": "Close up of ancient needle and thread sewing a clean fabric",
      },
      {
        "text": "Idris (AS) had many wise sayings. He once said: 'Happy is he who looks at his own deeds and lets them speak for him to his Lord.' He encouraged everyone to share their blessings with those less fortunate.",
        "imagePrompt": "Idris (AS) sharing food with a group of people in a simple village",
      },
      {
        "text": "Allah loved Idris (AS) so much that He 'raised him to a high station.' This means Allah gave him a very special place in Heaven while he was still alive. He is remembered as 'The Truthful Prophet' in the Quran.",
        "imagePrompt": "A glowing figure ascending into the bright stars and heavens",
      }
    ],
    "lessons": [
      "Always strive to be honest and truthful in everything you say",
      "Sharing your knowledge and blessings brings true happiness",
      "Remembering Allah during your work makes the work a form of worship",
      "Wisdom is better than owning many things",
      "Allah honors those who are dedicated to His path"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "What did Prophet Idris (AS) teach people for the first time?",
        "options": [
          "How to farm",
          "How to write and read",
          "How to build houses",
          "How to cook"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "What else did Idris (AS) teach people about?",
        "options": [
          "The stars and astronomy",
          "How to fight",
          "How to swim",
          "How to hunt"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "What special honor did Allah give to Idris?",
        "options": [
          "He made him a king",
          "He raised him to the fourth heaven",
          "He gave him gold",
          "He made him young forever"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "What was Idris (AS) the first to use for making clothes?",
        "options": [
          "Animal skins only",
          "Needle and thread",
          "Machines",
          "Magic"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 3,
    "name": "Prophet Nuh (AS)",
    "arabicName": "نوح",
    "color": "#3B82F6",
    "bgGradient": "from-blue-400 to-cyan-600",
    "shortDescription": "Built a great ark to save the believers from the flood",
    "story": [
      {
        "text": "Many years after Adam (AS), people forgot Allah and started worshipping statues called Wadd, Suwa, and others. Allah chose Nuh (AS), a patient and kind man, to be His messenger. For 950 years, Nuh called his people day and night, in secret and in public, to come back to the worship of Allah.",
        "imagePrompt": "Nuh (AS) standing before a group of people worshipping tall stone statues",
      },
      {
        "text": "Only a few poor and weak people believed him. The rich and powerful laughed at Nuh (AS), saying, 'You are just a man like us! Why should we follow you?' They even put their fingers in their ears when he spoke. Finally, Allah told Nuh: 'No more of your people will believe.'",
        "imagePrompt": "People mocking Nuh (AS) and putting fingers in their ears in a busy marketplace",
      },
      {
        "text": "Allah commanded Nuh (AS) to build a massive Ark. He built it far from the sea, and people mocked him even more, asking if the ship would fly through the sand. But Nuh (AS) stayed patient, building the Ark with wood and tools under Allah's guidance.",
        "imagePrompt": "A giant wooden ship frame being built on a dry, sandy plain under a bright sun",
      },
      {
        "text": "When the oven at Nuh's house began to gush water—a sign from Allah—it was time. Nuh (AS) led pairs of every animal, male and female, into the Ark. The believers also joined. Then, the sky opened with rain like never before, and springs burst forth from the earth.",
        "imagePrompt": "Pairs of lions, elephants, and birds entering a large wooden ramp into the Ark",
      },
      {
        "text": "As the water rose higher than the mountains, Nuh (AS) saw his son struggling in the waves. He cried out, 'O my son! Embark with us!' But his son refused, thinking a mountain would save him. A great wave came between them, and the son was lost with the disbelievers.",
        "imagePrompt": "A young man on a high rock while a massive wave crashes over him, Nuh watching sadly",
      },
      {
        "text": "The Ark sailed safely over the waves for a long time. Finally, Allah commanded the earth to swallow the water and the sky to stop. The Ark landed on Mount Judi. Nuh (AS) and the believers stepped out, thanking Allah for saving them and starting a new life on a cleansed Earth.",
        "imagePrompt": "The giant Ark resting on a mountain top as the sun breaks through the clouds",
      }
    ],
    "lessons": [
      "Patience is key (Nuh preached for 950 years without giving up)",
      "Always trust in Allah's plan, even if others laugh at you",
      "Even a Prophet cannot guide those who refuse to believe (the story of Nuh's son)",
      "Allah's mercy follows those who stay true to Him",
      "We must take care of all of Allah's creatures (the pairs of animals)"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "How long did Prophet Nuh (AS) teach his people?",
        "options": [
          "10 years",
          "100 years",
          "950 years",
          "50 years"
        ],
        "correctAnswer": 2
      },
      {
        "id": 2,
        "question": "What did Allah tell Nuh (AS) to build?",
        "options": [
          "A house",
          "A mosque",
          "An Ark (big ship)",
          "A tower"
        ],
        "correctAnswer": 2
      },
      {
        "id": 3,
        "question": "How long did it rain during the great flood?",
        "options": [
          "7 days",
          "40 days and 40 nights",
          "1 year",
          "3 days"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "What sign did Allah put in the sky as a promise?",
        "options": [
          "The sun",
          "The moon",
          "A rainbow",
          "A star"
        ],
        "correctAnswer": 2
      },
      {
        "id": 5,
        "question": "What did people worship instead of Allah?",
        "options": [
          "The sun",
          "Statues and idols",
          "Animals",
          "Trees"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 4,
    "name": "Prophet Hud (AS)",
    "arabicName": "هود",
    "color": "#F59E0B",
    "bgGradient": "from-amber-400 to-orange-500",
    "shortDescription": "Sent to the people of Ad who were very tall and strong",
    "story": [
      {
        "text": "After Nuh (AS), the tribe of Ad lived in the windswept hills between Yemen and Oman. They were incredibly tall and strong—the strongest humans ever! They were famous for building tall palaces with lofty towers in their beautiful valley.",
        "imagePrompt": "Giant, strong people building massive stone towers in a desert landscape",
      },
      {
        "text": "But wealth and power made them arrogant. They started worshipping idols and thought nothing could harm them. Allah sent Hud (AS), a noble man from among them, to remind them: 'O my people! Worship Allah! You have no other God but Him.'",
        "imagePrompt": "A noble man speaking to a group of giants who are looking down at him proudly",
      },
      {
        "text": "The people of Ad laughed: 'Do you want to be our master? What payment do you want?' Hud (AS) replied, 'I ask no reward for it. My reward is only from Him Who created me. Will you not then understand?' But they remained proud of their strength.",
        "imagePrompt": "Prophet Hud (AS) preaching while people around him laugh and flex their muscles",
      },
      {
        "text": "They even doubted life after death, asking, 'Will we be resurrected after turning into dust?' Hud (AS) patiently explained Allah's justice, but they mocked him: 'You are just a man like us! Our gods have made you crazy!'",
        "imagePrompt": "A large meeting where people are pointing at Hud (AS) and whispering that he is insane",
      },
      {
        "text": "A great drought came, and the sky sent no rain. Hud warned them: 'Allah is angry. Repent and believe!' Instead, they laughed even more. One day, they saw a dense cloud approaching. They cheered: 'A cloud bringing us rain!' But Hud knew better.",
        "imagePrompt": "People cheering at a dark cloud forming over the horizon of a dry valley",
      },
      {
        "text": "Suddenly, the weather became cold and a stinging wind shook everything. For seven nights and eight days, a violent storm raged, throwing people down like hollow palm trunks. Only Hud (AS) and the believers were saved by Allah's mercy.",
        "imagePrompt": "A fierce sandstorm tearing through a city of towers, with people being lifted by the gale",
      },
      {
        "text": "The entire region of Ad was reduced to ruins. Hud (AS) and his followers migrated to peace. This story reminds us that even the strongest and richest on earth are nothing without Allah's guidance and mercy.",
        "imagePrompt": "Quiet desert ruins with the sun setting, showing the end of a proud nation",
      }
    ],
    "lessons": [
      "True strength comes from faith, not physical power",
      "Pride and arrogance lead to destruction",
      "Always be thankful for the blessings Allah gives you",
      "The Day of Judgment is certain and is a day of perfect justice",
      "Being humble allows you to see the truth clearly"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "What was special about the people of Ad?",
        "options": [
          "They were very small",
          "They were very tall and strong",
          "They could fly",
          "They lived underwater"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "What did the people of Ad worship?",
        "options": [
          "Allah only",
          "Idols",
          "The sun",
          "Animals"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "What was Allah's punishment for the people of Ad?",
        "options": [
          "A flood",
          "A terrible wind",
          "Fire from sky",
          "Earthquake"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "How long did the terrible wind blow?",
        "options": [
          "One day",
          "Seven days and eight nights",
          "One month",
          "One year"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 5,
    "name": "Prophet Salih (AS)",
    "arabicName": "صالح",
    "color": "#EC4899",
    "bgGradient": "from-pink-400 to-rose-500",
    "shortDescription": "The prophet who brought a miracle she-camel from a rock",
    "story": [
      {
        "text": "After the people of Ad, the tribe of Thamud succeeded them in power and glory. They were also skilled builders, carving massive, beautiful houses directly into the rocky mountain cliffs. However, they soon fell into the same trap of pride and idol worship as the people before them.",
        "imagePrompt": "A city of beautiful palaces carved out of solid mountain rock, under a clear sky",
      },
      {
        "text": "Allah sent Prophet Salih (AS) to them. He was a man of great wisdom and good hope among them. He told them: 'O my people! Worship Allah, you have no other God but Him.' But the people questioned him, asking why he wanted them to leave the gods of their fathers.",
        "imagePrompt": "Prophet Salih (AS) standing in a town square made of stone, pleading with his people",
      },
      {
        "text": "To test him, the leaders of Thamud demanded a miracle: 'Make a unique she-camel issue from that mountain rock!' Salih (AS) took a vow: if Allah granted their request, would they believe? They swore they would. Salih (AS) prayed, and the rock split open, bringing forth a giant, beautiful she-camel.",
        "imagePrompt": "A massive rock splitting apart to reveal a majestic, glowing she-camel walking out",
      },
      {
        "text": "The she-camel was a sign from Allah. She would drink from the well one day, and the people would take the water the next. She even provided enough milk for the whole city! Salih (AS) warned: 'Touch her not with harm, lest a near torment will seize you.'",
        "imagePrompt": "The giant she-camel drinking from a stone well while children gather to watch",
      },
      {
        "text": "But the disbelievers grew jealous. They plotted in secret and hired wicked men to kill the camel. They shot her with arrows and killed her as she came to drink. In their arrogance, they mocked Salih (AS): 'Bring about your threats if you are truly a messenger!'",
        "imagePrompt": "Wicked men with bows hiding behind rocks as the she-camel approaches the water",
      },
      {
        "text": "Salih (AS) told them sadly: 'Enjoy your homes for three more days!' Even then, they tried to kill Salih and his family. But Allah protected him. On the third day, a terrific cry came from the sky, and an earthquake destroyed the city. Only the believers who had left with Salih were saved.",
        "imagePrompt": "A city in ruins after a great storm, with only the mountain homes standing silent",
      }
    ],
    "lessons": [
      "Allah's miracles are a test of our faith and commitment",
      "Treating all of Allah's creatures with kindness is a duty",
      "Arrogance leads to ignoring clear signs of the truth",
      "Allah's protection is always with the believers during difficult times",
      "Regret comes too late once the opportunity for repentance has passed"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "What was the name of the people Salih (AS) was sent to?",
        "options": [
          "Ad",
          "Thamud",
          "Madyan",
          "Egypt"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "What miracle did Allah show the people through Salih?",
        "options": [
          "A flying horse",
          "A she-camel from a rock",
          "A talking bird",
          "A golden tree"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "What did the wicked people do to the she-camel?",
        "options": [
          "They fed her",
          "They killed her with arrows",
          "They set her free",
          "They worshipped her"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "How many days after killing the camel did the punishment come?",
        "options": [
          "One day",
          "Three days",
          "Seven days",
          "One month"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 6,
    "name": "Prophet Ibrahim (AS)",
    "arabicName": "إبراهيم",
    "color": "#F59E0B",
    "bgGradient": "from-amber-400 to-orange-500",
    "shortDescription": "The friend of Allah who broke the idols and built the Kaaba",
    "story": [
      {
        "text": "Prophet Ibrahim (AS) was born in a family of idol-makers. His father, Azer, even made the statues people worshipped! Ibrahim always wondered: 'How can people worship what they make with their own hands?' He searched for the one true Lord of the universe.",
        "imagePrompt": "Young Ibrahim (AS) watching his father carve a stone idol with a look of confusion",
      },
      {
        "text": "One night, he saw a bright star and said, 'This is my Lord!' But it set. He saw the moon and the sun, but they also disappeared. Ibrahim realized: 'I turn my face to the One Who created the heavens and the earth. I will never worship anything besides Allah!'",
        "imagePrompt": "Ibrahim (AS) pointing at the night sky while the moon and stars glow brightly",
      },
      {
        "text": "Ibrahim gently told his father: 'O my father! Why worship what cannot hear or see?' But his father was angry and threatened to stone him. Ibrahim replied with peace: 'I will ask my Lord to forgive you, for He is always gracious to me.'",
        "imagePrompt": "Ibrahim (AS) speaking kindly to his angry father in a room full of statues",
      },
      {
        "text": "One day, while the town was at a festival, Ibrahim went to the temple with an axe. He smashed all the idols except the biggest one, hanging the axe on its neck. When the people returned in a rage, Ibrahim said, 'Ask the big idol!' They realized then that their gods were silent and powerless.",
        "imagePrompt": "A destroyed temple with broken stone pieces and one large idol holding an axe",
      },
      {
        "text": "The people were so angry they threw Ibrahim (AS) into a massive, blazing fire using a catapult. But Allah commanded: 'O fire! Be you coolness and safety for Ibrahim.' He sat in the middle of the flames as if he were in a beautiful, peaceful garden.",
        "imagePrompt": "Ibrahim (AS) sitting calmly inside a bright orange fire that looks soft like a field of flowers",
      },
      {
        "text": "Later, Ibrahim (AS) and his son Ismail (AS) built the Kaaba in Makkah together. Ibrahim prayed: 'Our Lord! Make us submissive to You and show us our rites of worship.' He is known as 'Khalilullah'—the Friend of Allah.",
        "imagePrompt": "Ibrahim and a young Ismail (AS) lifting heavy stones to build the base of the Kaaba",
      },
      {
        "text": "Allah tested Ibrahim (AS) many times, and he always stayed faithful. From his family came many great prophets, including Prophet Muhammad (ﷺ). Ibrahim's life teaches us that true faith is about trusting Allah more than anything in the world.",
        "imagePrompt": "A family tree glowing with light, starting with Ibrahim (AS) and going down generations",
      }
    ],
    "lessons": [
      "Always use your mind to seek the truth about our Creator",
      "Be respectful and kind to your parents, even if you disagree",
      "Courage is standing up for what is right, even when you are alone",
      "Allah is always there to protect and comfort those who trust Him",
      "True friendship with Allah comes through complete faith and obedience"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "What did Ibrahim's father make?",
        "options": [
          "Houses",
          "Idols",
          "Food",
          "Clothes"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "What did Ibrahim do to the idols?",
        "options": [
          "Prayed to them",
          "Broke them",
          "Painted them",
          "Sold them"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "What happened when people threw Ibrahim into fire?",
        "options": [
          "He got burned",
          "The fire became cool",
          "He ran away",
          "The fire went out"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "What does 'Khalilullah' mean?",
        "options": [
          "Messenger of Allah",
          "Friend of Allah",
          "Prophet of Allah",
          "Servant of Allah"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "What did Ibrahim and Ismail build in Makkah?",
        "options": [
          "A mosque",
          "A house",
          "The Kaaba",
          "A palace"
        ],
        "correctAnswer": 2
      }
    ]
  },
  {
    "id": 7,
    "name": "Prophet Lut (AS)",
    "arabicName": "لوط",
    "color": "#6366F1",
    "bgGradient": "from-indigo-400 to-purple-600",
    "shortDescription": "Sent to the people who were doing very bad things",
    "story": [
      {
        "text": "Prophet Lut (AS) was the nephew of Ibrahim (AS). He believed in Ibrahim's message early on and traveled with him from Iraq to Egypt, and finally to the land of Sodom near the Dead Sea. Allah chose Lut to be a messenger to the people of that city.",
        "imagePrompt": "Lut (AS) and Ibrahim (AS) standing together on a desert hill, looking towards a distant city",
      },
      {
        "text": "The people of Sodom were very wicked and did shameful things that no one in the world had ever done before. Lut (AS) warned them: 'Do you commit such immorality as no one has preceded you with from among the worlds?' But they ignored him.",
        "imagePrompt": "A busy, dark city street with people behaving rudely and ignoring a man speaking to them",
      },
      {
        "text": "Lut (AS) was patient for many years, but the people only grew more arrogant. They even threatened to expel him: 'Drive them out of your city! Indeed, they are people who keep themselves pure.' Lut prayed: 'My Lord, support me against the corrupting people.'",
        "imagePrompt": "Lut (AS) standing alone while a crowd of people points at him and shouts",
      },
      {
        "text": "Allah sent three beautiful angels in the form of men to Lut's house. Lut was worried because he knew how dangerous his people were to guests. The wicked people soon surrounded his house, demanding he hand over his visitors.",
        "imagePrompt": "Lut (AS) standing at his doorway, looking worried as a crowd gathers outside his house",
      },
      {
        "text": "Lut (AS) tried to protect them, saying, 'Do not disgrace me concerning my guests!' The angels then revealed their true identity: 'O Lut, indeed we are messengers of your Lord; they will never reach you.' They told him to leave the city with his family during the night.",
        "imagePrompt": "The three men in Lut’s house glowing with a soft, divine light as Lut looks relieved",
      },
      {
        "text": "The angels warned: 'Let not one of you look back!' As Lut (AS) and his daughters fled, a terrible punishment struck the city at sunrise. Allah turned the city upside down and rained down stones of hard clay, marked by your Lord.",
        "imagePrompt": "Lut and his daughters walking away from a city that is being engulfed in a great storm",
      },
      {
        "text": "Lut (AS) reached a place of safety. His story is a reminder that Allah protects the pure of heart and that we should always stand up for what is right, even when everyone else is doing wrong.",
        "imagePrompt": "Lut (AS) sitting peacefully under a tree in a green valley, looking back at a distant mountain",
      }
    ],
    "lessons": [
      "Always stand firm in your values, even if those around you are doing wrong",
      "Honoring and protecting your guests is a great virtue in Islam",
      "Allah's help is always near for those who keep themselves pure and patient",
      "Do not look back at things that are bad for you; keep moving toward the light",
      "Truth and purity will always be saved, while falsehood and wickedness perish"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Who was Prophet Lut's uncle?",
        "options": [
          "Nuh",
          "Ibrahim",
          "Musa",
          "Isa"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "What did the wicked people demand from Lut?",
        "options": [
          "Money",
          "His guests",
          "His house",
          "His camels"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "Who came to Lut's house as travelers?",
        "options": [
          "Kings",
          "Angels",
          "Merchants",
          "Soldiers"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "What was Allah's punishment for the wicked city?",
        "options": [
          "Flood",
          "The city was flipped upside down",
          "Fire",
          "Wind"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 8,
    "name": "Prophet Ismail (AS)",
    "arabicName": "إسماعيل",
    "color": "#14B8A6",
    "bgGradient": "from-teal-400 to-cyan-500",
    "shortDescription": "The son of Ibrahim who helped build the Kaaba",
    "story": [
      {
        "text": "Prophet Ismail (AS) was the first-born son of Ibrahim (AS). When he was just a baby, Allah commanded Ibrahim to take him and his mother, Hajar, to the barren valley of Makkah. Ibrahim left them with only a bag of dates and a skin of water, trusting completely in Allah.",
        "imagePrompt": "Ibrahim (AS) leaving a young mother and baby in a vast, empty desert valley",
      },
      {
        "text": "When the water ran out, baby Ismail began to cry. Hajar ran desperately between the hills of Safa and Marwa seven times, searching for help. Suddenly, near the baby, the Angel Jibril struck the earth, and a spring of water gushed out—the well of Zamzam!",
        "imagePrompt": "Hajar running between two dusty hills while water bubbles up from the sand near the baby",
      },
      {
        "text": "People began to settle around the water, and Makkah became a city. Ismail grew up learning the language of the people and became a skilled archer and horseman. He was known for being truthful and always fulfilling his promises.",
        "imagePrompt": "A young man skillfully aiming a bow in the desert near a growing village",
      },
      {
        "text": "Years later, Ibrahim returned. He said, 'O my son, I have seen in a dream that I must sacrifice you.' Ismail (AS) replied with amazing faith: 'O my father, do what you are commanded. You will find me, if Allah wills, of the steadfast.'",
        "imagePrompt": "Ibrahim (AS) and Ismail (AS) talking seriously in a peaceful desert setting",
      },
      {
        "text": "As they prepared to obey, Shaytan tried to trick them three times, but they threw stones at him to drive him away. Just as Ibrahim was ready, Allah called out: 'O Ibrahim, you have fulfilled the vision!' and sent a ram to be sacrificed instead.",
        "imagePrompt": "A large ram with beautiful horns appears near Ibrahim, who looks up with joy",
      },
      {
        "text": "Together, Ibrahim and Ismail (AS) built the Kaaba, the first house of worship for Allah. As they raised the walls, they prayed: 'Our Lord, accept this from us. Indeed You are the Hearing, the Knowing.' The footprint of Ibrahim is still there today near the Kaaba.",
        "imagePrompt": "Ibrahim and Ismail lifting stone blocks together to build the square walls of the Kaaba",
      },
      {
        "text": "Ismail (AS) lived in Makkah and taught his children to worship Allah alone. He is the forefather of the Prophet Muhammad (ﷺ), and his story reminds us of the incredible rewards that come from total trust in Allah.",
        "imagePrompt": "A peaceful overview of the Kaaba with light shining down from the sky",
      }
    ],
    "lessons": [
      "Total trust in Allah (Tawakkul) brings miracles like the Zamzam well",
      "Patience and hard work (like Hajar's running) are always rewarded",
      "Always be truthful and keep your promises, just like Prophet Ismail",
      "True obedience means being ready to give up what we love for Allah",
      "Building a legacy of faith (like the Kaaba) benefits people for thousands of years"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Who was Ismail's mother?",
        "options": [
          "Sarah",
          "Hajar",
          "Maryam",
          "Hawwa"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "What miracle happened when Hajar ran between Safa and Marwa?",
        "options": [
          "It rained",
          "The Zamzam well appeared",
          "Angels came",
          "Food fell from sky"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "What did Ismail and Ibrahim build together?",
        "options": [
          "A palace",
          "The Kaaba",
          "A mosque",
          "A tower"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "What did Allah send instead of Ismail for sacrifice?",
        "options": [
          "A lamb",
          "A ram",
          "A cow",
          "A camel"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 9,
    "name": "Prophet Ishaq (AS)",
    "arabicName": "إسحاق",
    "color": "#F472B6",
    "bgGradient": "from-pink-400 to-rose-500",
    "shortDescription": "The miraculous son of Ibrahim born to Sarah in old age",
    "story": [
      {
        "text": "Prophet Ishaq (AS) was the second son of Ibrahim (AS). He was born to Sarah, who was very old and thought she could never have children. When three angels came to Ibrahim with the news, Sarah laughed in wonder, but the angels said, 'Do you wonder at the decree of Allah?'",
        "imagePrompt": "Three radiant guests speaking to Ibrahim (AS) while Sarah listens from behind a curtain",
      },
      {
        "text": "Allah blessed Ibrahim and Sarah with Ishaq (AS) as a gift for their patience. He was named 'Ishaq' which means 'he laughs,' reminding everyone of the joy his birth brought. He grew up under the guidance of his great father, learning the secrets of faith and wisdom.",
        "imagePrompt": "An elderly couple holding a glowing baby in a simple, peaceful tent",
      },
      {
        "text": "Ishaq (AS) became a prophet of great character and truth. He lived in the land of Canaan (Palestine) and continued the message of his father Ibrahim: to worship only Allah. He was known for his kindness and for helping those around him.",
        "imagePrompt": "A noble man with a kind face teaching a group of people in a green pasture",
      },
      {
        "text": "Allah praised Ishaq (AS) in the Quran as a man of 'strength and vision.' He was always mindful of the Hereafter and encouraged his people to do good deeds. He was a link in a golden chain of prophets that would spread light across the world.",
        "imagePrompt": "Ishaq (AS) standing on a hill at sunrise, looking out with a focused and peaceful gaze",
      },
      {
        "text": "Ishaq (AS) had twin sons, Aisu and Yaqub (AS). Before he passed away at a very old age, he blessed them both. From his son Yaqub (AS) came many more prophets, fulfilling Allah's promise to Ibrahim that his line would be blessed with many messengers.",
        "imagePrompt": "An old man laying his hands on the heads of two young boys to bless them",
      }
    ],
    "lessons": [
      "Allah's power makes the impossible possible—never lose hope",
      "True laughter and joy come from Allah's blessings and mercy",
      "Strength of character is built through faith and good vision for the future",
      "Being a link in a good family means continuing the good work of your parents",
      "Prophethood is a responsibility to guide people with kindness and truth"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Who was Ishaq's mother?",
        "options": [
          "Hajar",
          "Sarah",
          "Maryam",
          "Hawwa"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Why was Sarah surprised to have a baby?",
        "options": [
          "She was very old",
          "She was sick",
          "She was poor",
          "She was busy"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "Who was Ishaq's son who became a prophet?",
        "options": [
          "Esau",
          "Ya'qub (Jacob)",
          "Ismail",
          "Yusuf"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "Through which of Ishaq's descendants came Prophet Musa and Isa?",
        "options": [
          "Esau",
          "Ya'qub",
          "Ismail",
          "Ibrahim"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 10,
    "name": "Prophet Ya'qub (AS)",
    "arabicName": "يعقوب",
    "color": "#A855F7",
    "bgGradient": "from-purple-400 to-violet-600",
    "shortDescription": "Also called Israel, the father of twelve sons who became the twelve tribes",
    "story": [
      {
        "text": "Prophet Yaqub (AS) was the son of Ishaq (AS) and the grandson of Ibrahim (AS). He was a man of great patience and deep faith. He traveled to the land of Haran to stay with his uncle and built a large, blessed family there.",
        "imagePrompt": "A traveler with a walking stick walking towards a distant green oasis",
      },
      {
        "text": "Allah gave Yaqub (AS) the special name 'Israel,' which means 'the Servant of Allah.' He had twelve sons, who would become the fathers of the twelve tribes. Among them, he loved Yusuf (AS) the most because of his special character and beautiful soul.",
        "imagePrompt": "Yaqub (AS) sitting with a young, glowing boy (Yusuf) while other sons look on from a distance",
      },
      {
        "text": "When Yusuf's brothers were jealous and threw him into a well, they brought back his shirt covered in fake blood. They told Yaqub a wolf had eaten him. But Yaqub (AS) knew in his heart Yusuf was alive. He said, 'So beautiful patience is most fitting.'",
        "imagePrompt": "Brothers showing a stained shirt to an old man who covers his face in deep sadness",
      },
      {
        "text": "For many years, Yaqub (AS) mourned for Yusuf. He cried until his eyes became white and he lost his sight. Even when others told him to forget, he said, 'I only complain of my grief and sorrow to Allah, and I know from Allah that which you know not.'",
        "imagePrompt": "An elderly man sitting alone in a tent, looking up towards the light with pale eyes",
      },
      {
        "text": "Finally, Allah rewarded his 'beautiful patience.' Yusuf (AS) became a high minister in Egypt and sent his shirt to his father. When the shirt was placed on Yaqub's face, his sight was miraculously restored! He traveled to Egypt with his whole family for a joyful reunion.",
        "imagePrompt": "A family reunion in a grand Egyptian palace, with everyone hugging and weeping with joy",
      },
      {
        "text": "Before he passed away, Yaqub (AS) asked his sons: 'What will you worship after me?' They all replied: 'We will worship your God and the God of your fathers—the One True God.' He left this world knowing his children would stay on the right path.",
        "imagePrompt": "An old man on his deathbed holding the hands of his twelve sons as they all pray together",
      }
    ],
    "lessons": [
      "Patience isn't just waiting—it's waiting with a good heart ('Beautiful Patience')",
      "Always complain of your sorrows to Allah first, for He is the only one who can help",
      "Never lose hope in Allah's mercy, even when things look impossible for a long time",
      "True love for children means teaching them to worship Allah more than anything else",
      "Faith and family are the most important things to leave behind in this world"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "What was another name for Ya'qub?",
        "options": [
          "Israel",
          "Ishmael",
          "Isaac",
          "Aaron"
        ],
        "correctAnswer": 0
      },
      {
        "id": 2,
        "question": "How many sons did Ya'qub have?",
        "options": [
          "Ten",
          "Twelve",
          "Seven",
          "Four"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "Which son was Ya'qub's favorite?",
        "options": [
          "Yusuf",
          "Benjamin",
          "Judah",
          "Levi"
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "question": "What happened to Ya'qub when he smelled Yusuf's shirt?",
        "options": [
          "He became young",
          "His eyesight returned",
          "He could walk",
          "He became strong"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 11,
    "name": "Prophet Yusuf (AS)",
    "arabicName": "يوسف",
    "color": "#EAB308",
    "bgGradient": "from-yellow-400 to-amber-500",
    "shortDescription": "The beautiful prophet who became a king in Egypt",
    "story": [
      {
        "text": "Prophet Yusuf (AS) was the favorite son of Yaqub (AS). He was incredibly beautiful, both in his face and his heart. One night, he dreamed that eleven stars, the sun, and the moon were all bowing down to him. His father told him: 'O my son, do not relate your vision to your brothers, lest they plot against you.'",
        "imagePrompt": "A young, radiant boy telling his father about a dream of celestial bodies bowing",
      },
      {
        "text": "But the older brothers were jealous. They took Yusuf to the desert, stripped his beautiful shirt, and threw him into a dark, deep well. They brought the shirt back to their father, stained with fake blood, crying that a wolf had eaten him. Yusuf (AS), meanwhile, was found by travelers and sold into slavery in Egypt.",
        "imagePrompt": "A young boy at the bottom of a dark well looking up at a small circle of light",
      },
      {
        "text": "In Egypt, Yusuf (AS) grew up in the house of a powerful minister. He was tested with great temptations, but he chose to stay pure and loyal to Allah, even when it meant being sent to prison for many years. He told himself: 'My Lord is better to me than what they call me to.'",
        "imagePrompt": "A noble-looking young man standing tall and firm in a simple, dark prison cell",
      },
      {
        "text": "While in prison, Yusuf (AS) became famous for interpreting dreams. Years later, the King of Egypt had a strange dream of seven fat cows being eaten by seven thin ones. Yusuf explained it meant seven years of plenty followed by seven years of terrible famine. The King was so impressed he made Yusuf the Minister of Grain.",
        "imagePrompt": "Yusuf (AS) standing before a grand King in a golden palace, explaining a vision",
      },
      {
        "text": "During the famine, Yusuf's brothers came to Egypt to beg for food. They didn't recognize the powerful man before them. Yusuf (AS) tested them and eventually revealed himself: 'I am Yusuf, and this is my brother. Allah has indeed been gracious to us.' He forgave them completely for what they had done.",
        "imagePrompt": "Brothers bowing low before a powerful man in Egyptian robes who is smiling kindly",
      },
      {
        "text": "Yusuf (AS) sent for his father, Yaqub (AS). When they met, Yusuf lifted his parents onto the throne, and they all fell down in prostration. Yusuf said: 'O my father, this is the explanation of my vision of old. My Lord has made it come true.' It was the most beautiful reunion in history.",
        "imagePrompt": "A magnificent throne room where an old man and a powerful son are embracing in tears",
      }
    ],
    "lessons": [
      "Jealousy can blind people, but Allah's plan is always greater than any plot",
      "Patience (Sabr) and sticking to your values will eventually lead to success",
      "Forgiving those who hurt you is the character of a truly great person",
      "Allah's help comes in ways we least expect—from a well to a palace",
      "Always maintain hope and trust in Allah, even in the darkest prison or deepest well"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "What special ability did Allah give Yusuf?",
        "options": [
          "Flying",
          "Interpreting dreams",
          "Talking to animals",
          "Walking on water"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "What did Yusuf dream about as a boy?",
        "options": [
          "Stars, sun and moon bowing to him",
          "A palace",
          "Gold",
          "Animals"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "Where did Yusuf's brothers throw him?",
        "options": [
          "In the sea",
          "In a well",
          "Off a cliff",
          "In prison"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "What did the King of Egypt dream about?",
        "options": [
          "Seven cows and grain",
          "A dragon",
          "Flying",
          "Mountains"
        ],
        "correctAnswer": 0
      },
      {
        "id": 5,
        "question": "What did Yusuf say to his brothers when he forgave them?",
        "options": [
          "'I hate you'",
          "'There is no blame on you today'",
          "'Go away'",
          "'I will punish you'"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 12,
    "name": "Prophet Ayyub (AS)",
    "arabicName": "أيوب",
    "color": "#22C55E",
    "bgGradient": "from-green-400 to-emerald-600",
    "shortDescription": "The prophet of patience who never complained despite severe trials",
    "story": [
      {
        "text": "Prophet Ayyub (AS) was a very wealthy and righteous man who lived in the land of Hawran. Allah gave him everything: hundreds of animals, beautiful gardens, and many sons and daughters. He was always grateful and used his wealth to help the poor and needy.",
        "imagePrompt": "A noble man standing in a lush green garden with many sheep and camels grazing",
      },
      {
        "text": "To test his faith, Allah allowed Ayyub (AS) to lose everything. One by one, his children passed away, his animals were lost, and his gardens dried up. Then, he was struck with a severe illness that lasted for many years. Only his faithful wife stayed by his side to serve him.",
        "imagePrompt": "An elderly man sitting in a simple tent, looking weak but peaceful, with his wife nearby",
      },
      {
        "text": "For eighteen long years, Ayyub (AS) stayed patient. He never complained to people or asked 'Why me?' Even when his friends began to doubt him, he only turned to Allah. He said: 'Indeed, adversity has touched me, and You are the Most Merciful of the merciful.'",
        "imagePrompt": "A silhouette of a man praying under a large, dark sky full of stars",
      },
      {
        "text": "Allah was pleased with Ayyub's beautiful patience. He commanded: 'Strike the ground with your foot!' When Ayyub did, a spring of cool water gushed out. Allah said: 'This is a cool bath and a drink.' After washing and drinking, Ayyub (AS) was miraculously healed!",
        "imagePrompt": "A spring of crystal clear water splashing up from a golden desert floor",
      },
      {
        "text": "Allah not only healed Ayyub (AS) but also brought back his family and doubled his wealth as a reward for his patience. He became healthy and strong again, and lived a long, happy life. Allah says in the Quran: 'Truly! We found him patient. How excellent a slave!'",
        "imagePrompt": "A joyful man surrounded by his family and many healthy animals under a bright sun",
      }
    ],
    "lessons": [
      "True patience (Sabr) means trusting Allah even when life gets very difficult",
      "Allah's mercy is always greater than any hardship we face",
      "We should be grateful for our health and wealth while we have them",
      "Never complain to others about your troubles; turn only to Allah in prayer",
      "Those who stay steadfast during tests are given great rewards in this life and the next"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "What was Ayyub known for?",
        "options": [
          "His strength",
          "His patience",
          "His speed",
          "His wealth"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Who asked Allah to test Ayyub?",
        "options": [
          "His friends",
          "Shaytan",
          "His wife",
          "The angels"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "What did Ayyub say when he lost everything?",
        "options": [
          "'Why me?'",
          "'To Allah we belong and to Him we return'",
          "'I give up'",
          "'This is unfair'"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "How was Ayyub healed?",
        "options": [
          "By medicine",
          "By washing in spring water from the ground",
          "By magic",
          "By doctors"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 13,
    "name": "Prophet Shu’ayb (AS)",
    "arabicName": "شعيب",
    "color": "#10B981",
    "bgGradient": "from-emerald-400 to-teal-500",
    "shortDescription": "The prophet sent to Madyan who taught honesty in trade",
    "story": [
      {
        "text": "Prophet Shu’ayb (AS) was sent to the people of Madyan, who lived in a land of tall trees and lush gardens. They were skilled traders, but they had a very bad habit: they were dishonest in business. They would use 'heavy' weights when buying things and 'light' ones when selling, cheating people out of their money.",
        "imagePrompt": "A busy marketplace where a man is using uneven stone weights to measure grain",
      },
      {
        "text": "Shu’ayb (AS) was known as 'The Preacher of the Prophets' because he spoke so clearly and beautifully. He warned them: 'O my people! Give full measure and weight with justice and do not decrease the people's things.' He reminded them that honest wealth is better than a mountain of stolen gold.",
        "imagePrompt": "Prophet Shu’ayb (AS) speaking with great passion to a crowd in a dusty market square",
      },
      {
        "text": "The people of Madyan were proud. They mocked him, saying: 'Does your prayer command you that we should leave what our fathers worshipped or that we should stop doing what we like with our own wealth?' They thought their money belonged only to them and they could do whatever they wanted.",
        "imagePrompt": "Wealthy merchants in fine robes laughing and gesturing at Shu’ayb (AS)",
      },
      {
        "text": "Shu’ayb (AS) warned them of the punishment that destroyed the people of Nuh, Hud, and Salih. But the disbelievers grew angry and threatened to expel him. They even tried to block the paths to prevent people from listening to him. Shu’ayb prayed: 'Our Lord, decide between us and our people in truth.'",
        "imagePrompt": "Men standing on a high path, blocking the way for others as Shu’ayb stands far away",
      },
      {
        "text": "First, a scorching heat wave struck Madyan for seven days, and no water could cool them. Then, they saw a giant dark cloud and ran to its shade for relief. Suddenly, a terrifying blast—the 'Saih'-shook the earth, and fire rained down from the cloud. The cities of the dishonest became silent ruins.",
        "imagePrompt": "A massive dark cloud over a city with bright flashes of light and falling sparks",
      },
      {
        "text": "Allah saved Shu’ayb (AS) and those who believed. They moved to another land and lived in peace. Shu’ayb's story is a powerful reminder that being honest and fair in our work and school is a way to earn Allah's love and protection.",
        "imagePrompt": "A small group of people walking towards a peaceful green mountain as the sun rises",
      }
    ],
    "lessons": [
      "Honesty in business and everyday life is an act of worship",
      "Gaining small things through cheating leads to great loss in the end",
      "Using your voice to speak the truth (like Shu’ayb) is a noble character trait",
      "True wealth is what satisfies the heart and earns Allah's pleasure",
      "Allah's justice eventually catches up with those who consistently hurt others"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Which people was Prophet Shu’ayb (AS) sent to?",
        "options": [
          "People of Ad",
          "People of Thamud",
          "People of Madyan",
          "People of Israel"
        ],
        "correctAnswer": 2
      },
      {
        "id": 2,
        "question": "What was the main bad habit of the people of Madyan?",
        "options": [
          "They were lazy",
          "They were dishonest in trade",
          "They didn't like animals",
          "They wouldn't build houses"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "What was Shu’ayb (AS) often called because he spoke so well?",
        "options": [
          "The Teacher",
          "The Preacher of the Prophets",
          "The Wise King",
          "The Strong Leader"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "What did Shu’ayb tell people to do with weights and measures?",
        "options": [
          "Throw them away",
          "Give full measure and weight",
          "Make them smaller",
          "Hide them"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 14,
    "name": "Prophet Musa (AS)",
    "arabicName": "موسى",
    "color": "#8B5CF6",
    "bgGradient": "from-violet-400 to-purple-600",
    "shortDescription": "Spoke directly to Allah and parted the Red Sea",
    "story": [
      {
        "text": "Prophet Musa (AS) was born in Egypt during a time of great fear. The cruel King Pharaoh had ordered all baby boys to be killed. To save him, Musa's mother put him in a basket and let him float down the Nile River, while his sister watched from the tall grass. The basket was found by Pharaoh’s own family!",
        "imagePrompt": "A simple basket floating on a wide river with tall green plants on the banks",
      },
      {
        "text": "Pharaoh’s wife, Asiya, found the baby and loved him immediately. She said to Pharaoh: 'A comfort of the eye for me and for you. Do not kill him!' Musa (AS) grew up as a prince in the palace, but he always knew he was one of the Children of Israel. After an accident, he had to flee to Madyan, where he lived many years as a shepherd.",
        "imagePrompt": "A grand palace balcony where a kind queen is holding a baby as she looks at a king",
      },
      {
        "text": "While traveling with his family, Musa (AS) saw a fire on Mount Sinai. When he went closer, Allah spoke to him: 'O Musa, indeed I am your Lord! So take off your sandals. You are in the holy valley of Tuwa.' Allah gave him a great mission: 'Go to Pharaoh, for he has indeed transgressed.'",
        "imagePrompt": "A man standing before a glowing bush that is on fire but not burning up",
      },
      {
        "text": "Musa (AS) was given miracles—his staff turned into a real snake, and his hand glowed with a white light. He and his brother Harun went to Pharaoh and said: 'Let the Children of Israel go free!' Pharaoh refused and challenged them with his magicians, but Musa's snake swallowed all their magic!",
        "imagePrompt": "A large yellow snake in a grand hall, with many small ropes on the floor around it",
      },
      {
        "text": "Allah sent many signs to Pharaoh, but he was too proud to listen. Finally, Musa (AS) led his people away in the middle of the night. Pharaoh chased them with his army until they were trapped at the Red Sea. Musa (AS) struck the water with his staff, and the sea split into two massive walls of water, making a path through the middle!",
        "imagePrompt": "A man holding a wooden staff over a massive blue sea that has split in half",
      },
      {
        "text": "After the Israelites crossed safely, the sea crashed down on Pharaoh and his army. Later, Musa (AS) was called to speak with Allah for forty nights on Mount Sinai. He was given the Torah on stone tablets. He is the 'Kalimullah'—the one who spoke directly to Allah!",
        "imagePrompt": "Two heavy stone tablets with ancient letters glowing underwater or in the dark",
      }
    ],
    "lessons": [
      "No matter how powerful a tyrant is, Allah is more powerful",
      "True leadership means serving your people and standing up for justice",
      "When we feel trapped, remembering Allah's power (like the Red Sea) gives us hope",
      "Speaking the truth to power is the greatest form of courage",
      "Allah's words and guidance (the Torah) are a light for believers"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Where did baby Musa's basket float to?",
        "options": [
          "The ocean",
          "Pharaoh's palace",
          "A farm",
          "Another country"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Who found baby Musa?",
        "options": [
          "Pharaoh",
          "Queen Asiya",
          "A soldier",
          "A servant"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "What happened when Musa threw his staff?",
        "options": [
          "It broke",
          "It became a snake",
          "It disappeared",
          "It grew flowers"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "What did Allah make the Red Sea do?",
        "options": [
          "Freeze",
          "Split into two walls",
          "Disappear",
          "Become shallow"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "What did Allah give Musa on Mount Sinai?",
        "options": [
          "A crown",
          "The Ten Commandments and Torah",
          "Gold",
          "A sword"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 15,
    "name": "Prophet Harun (AS)",
    "arabicName": "هارون",
    "color": "#EC4899",
    "bgGradient": "from-pink-400 to-rose-500",
    "shortDescription": "The brother of Musa who helped him speak to Pharaoh",
    "story": [
      {
        "text": "Prophet Harun (AS) was the elder brother of Musa (AS). He was a man of great wisdom and was blessed by Allah with the gift of beautiful, clear speech. When Musa (AS) was given the mission to face Pharaoh, he prayed to Allah: 'And appoint for me a helper from my family—Harun, my brother. Increase through him my strength.'",
        "imagePrompt": "Two brothers standing together in prayer, one with a staff and the other looking wise and calm",
      },
      {
        "text": "Harun (AS) was a pillar of support for Musa (AS). He stood by him in the grand palace of Pharaoh, helping to speak the words of truth when Musa’s tongue felt heavy. Together, they showed Pharaoh the clear signs of Allah and called him to free the Children of Israel from slavery.",
        "imagePrompt": "Two noble men standing tall in a golden palace, speaking to a king on a throne",
      },
      {
        "text": "While Musa (AS) was away on Mount Sinai for forty nights, he left Harun (AS) in charge. He told him: 'Take my place among my people, do right, and do not follow the way of the corrupters.' Harun (AS) worked hard to keep the people on the right path while waiting for his brother's return.",
        "imagePrompt": "A man with a kind face talking to a large group of people in a desert camp",
      },
      {
        "text": "When a man named Samiri tricked the people into worshipping a golden calf, Harun (AS) tried his best to stop them. He said: 'O my people, you are only being tested by it, and indeed, your Lord is the Most Merciful, so follow me and obey my order.' He showed great patience even when the people turned against him.",
        "imagePrompt": "A man pointing away from a golden statue while people around him are looking at it",
      },
      {
        "text": "Harun (AS) passed away shortly before Musa (AS) during their time in the wilderness. He was loved by all for his gentle heart and his ability to make peace between people. He is remembered as a prophet who used his beautiful speech to guide others toward the light.",
        "imagePrompt": "A peaceful sunset over a mountain range in the desert",
      }
    ],
    "lessons": [
      "Using your talents (like clear speech) to help others is a form of worship",
      "Brotherhood and family support make even the hardest missions possible",
      "Patience and gentleness are key when trying to correct others' mistakes",
      "A true leader stays firm in his values even when the crowd goes the wrong way",
      "Allah rewards those who help his messengers and stand by the truth"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Who was Haroon's brother?",
        "options": [
          "Ibrahim",
          "Musa",
          "Isa",
          "Yusuf"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "What was Haroon especially good at?",
        "options": [
          "Singing",
          "Speaking",
          "Running",
          "Cooking"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "What did some Israelites make while Musa was away?",
        "options": [
          "A mosque",
          "A golden calf",
          "A house",
          "A ship"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 16,
    "name": "Prophet Dhul-Kifl (AS)",
    "arabicName": "ذو الكفل",
    "color": "#64748B",
    "bgGradient": "from-slate-400 to-gray-600",
    "shortDescription": "Known for keeping his promises and being just",
    "story": [
      {
        "text": "Prophet Dhul-Kifl (AS) was a man of extraordinary character who lived in the land of the Children of Israel. His name means 'The Possessor of the Fold' or 'One of Double Recompense.' He was famous for his amazing promise-keeping and his ability to remain patient under any pressure.",
        "imagePrompt": "A wise-looking man sitting on a simple wooden chair, looking calm and focused",
      },
      {
        "text": "Before he became a prophet, the leader of his people wanted to find a successor who could handle two big responsibilities: fasting during the day and praying during the night. Dhul-Kifl was the only one who consistently fulfilled these duties, never missing a single day or night.",
        "imagePrompt": "A silhouette of a man in prayer under a crescent moon near a quiet village",
      },
      {
        "text": "Ibn Kathir mentions that Dhul-Kifl (AS) used to judge between his people with total justice. He never grew angry or impatient, even when people brought him very difficult problems. He would say: 'I have taken it upon myself to be patient for the sake of Allah.'",
        "imagePrompt": "A man listening carefully to two people who are talking to him in a courtyard",
      },
      {
        "text": "Shaytan tried many times to make Dhul-Kifl (AS) lose his temper by sending people to annoy him at times when he should have been resting. But every time, Dhul-Kifl greeted them with a smile and a kind heart, proving that his patience was truly for Allah alone.",
        "imagePrompt": "A man smiling kindly at a group of busy people while the sun sets behind him",
      },
      {
        "text": "Allah praised Dhul-Kifl in the Quran alongside Prophet Ismail and Idris, saying they were all 'from the patient ones.' His life teaches us that being a person of your word and controlling your anger are among the highest forms of worship.",
        "imagePrompt": "A peaceful landscape with a warm, golden light shining through the clouds",
      }
    ],
    "lessons": [
      "Keeping your word is a sign of true faith and strength",
      "Controlling your anger is more important than winning an argument",
      "Consistency in good deeds (like daily prayer) is what makes a person great",
      "Being just and fair to everyone, even when you are tired, is a noble trait",
      "Patience for the sake of Allah brings peace to the heart and a high rank in the Hereafter"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "What does Dhul-Kifl mean?",
        "options": [
          "The wise one",
          "The one with responsibility",
          "The strong one",
          "The rich one"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "What was Dhul-Kifl known for?",
        "options": [
          "His wealth",
          "Keeping promises and being just",
          "His strength",
          "His speed"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "What did Dhul-Kifl teach his people?",
        "options": [
          "To fight",
          "To be patient and truthful",
          "To be rich",
          "To travel"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 17,
    "name": "Prophet Dawud (AS)",
    "arabicName": "داود",
    "color": "#84CC16",
    "bgGradient": "from-lime-400 to-green-500",
    "shortDescription": "The prophet king who could soften iron and received the Psalms",
    "story": [
      {
        "text": "Prophet Dawud (AS) was a young man from the Children of Israel who had amazing faith. When a giant, terrifying warrior named Jalut (Goliath) challenged the Israelites to a duel, everyone was afraid except Dawud. He said: 'O my people, I will fight him!' With just a simple slingshot and three smooth stones, and with Allah's help, he defeated the giant and saved his people.",
        "imagePrompt": "A young man with a simple slingshot standing before a massive warrior in heavy armor",
      },
      {
        "text": "Allah rewarded Dawud (AS) by making him both a king and a prophet. He was given a miracle: Allah made iron as soft as wax for him! He didn't need a furnace or a hammer; he could shape it with his bare hands to make strong but light coats of armor. Allah told him: 'Make full coats of mail and calculate precisely the links.'",
        "imagePrompt": "A man's hands molding a piece of dark, glowing metal as if it were soft clay",
      },
      {
        "text": "Dawud (AS) had a beautiful, powerful voice that no one could match. When he recited the Zabur (Psalms)—the holy book Allah gave him—even the birds would stop in the air and the mountains would join him in praising Allah. They would all echo his beautiful songs of worship together.",
        "imagePrompt": "A man standing on a mountain peak with birds circling around him in a golden sunset",
      },
      {
        "text": "Dawud (AS) was a very hardworking prophet. Even though he was a king, he never ate from the state's money. Instead, he worked with his own hands making armor and used that money to feed his family. He also fasted every other day, which is known as the 'Fast of Dawud.'",
        "imagePrompt": "A king in a simple workshop, carefully linking small rings of metal together",
      },
      {
        "text": "One day, two men climbed over the wall of his private prayer room to ask for a judgment. They were actually angels sent to test him. Dawud realized he had been hasty in his judgment, so he immediately fell into prostration and asked for Allah's forgiveness. Allah forgave him and praised his deep devotion.",
        "imagePrompt": "A man bowing low on a prayer rug in a room with a high stone wall and a window",
      },
      {
        "text": "Dawud (AS) ruled with justice for many years. He passed away peacefully, and it is said that tens of thousands of people attended his funeral. He left behind a legacy of strength, beautiful worship, and his son Sulayman (AS), who would become another great prophet-king.",
        "imagePrompt": "A peaceful landscape with a large, ancient city in the distance under a starry sky",
      }
    ],
    "lessons": [
      "Faith in Allah is more powerful than any giant or physical strength",
      "Using your hands to work and earn your own food is a noble and blessed act",
      "Even the most powerful leaders must be humble and seek Allah's forgiveness",
      "True worship involves the heart, the voice, and even the nature around us",
      "Justice should be shown to everyone, no matter how they come to you"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "What was Dawud's job before becoming king?",
        "options": [
          "A soldier",
          "A shepherd",
          "A merchant",
          "A teacher"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Who did Dawud defeat with his slingshot?",
        "options": [
          "Pharaoh",
          "Jalut (Goliath)",
          "Nimrod",
          "Abraha"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "What special ability did Allah give Dawud?",
        "options": [
          "Flying",
          "Softening iron with his hands",
          "Walking on water",
          "Becoming invisible"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "What book did Allah give to Dawud?",
        "options": [
          "The Torah",
          "The Zabur (Psalms)",
          "The Injeel",
          "The Quran"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 18,
    "name": "Prophet Sulayman (AS)",
    "arabicName": "سليمان",
    "color": "#EAB308",
    "bgGradient": "from-yellow-400 to-amber-500",
    "shortDescription": "The prophet king who could speak to animals and control the jinn",
    "story": [
      {
        "text": "Prophet Sulayman (AS) inherited both the kingdom and the prophethood from his father, Dawud (AS). Allah gave him a kingdom more magnificent than any other, with power over the wind, the jinn, and even the ability to speak the language of all animals!",
        "imagePrompt": "A magnificent king on a throne, with lions on the steps and birds flying above",
      },
      {
        "text": "One day, while marching with his massive army, Sulayman (AS) heard a tiny voice. It was an ant warning its colony: 'O ants, enter your dwellings lest Sulayman and his hosts crush you while they perceive not.' Sulayman (AS) smiled in wonder and thanked Allah for the gift of hearing even the smallest creatures.",
        "imagePrompt": "A large army stopping as a king leans down to look at a small crack in the ground",
      },
      {
        "text": "Sulayman (AS) had an army of birds, and one day he noticed the Hoopoe was missing. When the bird returned, it brought news of the Kingdom of Saba (Sheba), where a Queen named Bilqis ruled. The Hoopoe told him that they were very wealthy but worshipped the sun instead of Allah.",
        "imagePrompt": "A bright, colorful bird with a crown of feathers talking to a man on a throne",
      },
      {
        "text": "Sulayman sent a letter to Queen Bilqis, inviting her to Islam. She tried to send him expensive gifts, but Sulayman (AS) refused, saying: 'What Allah has given me is better than what He has given you.' He wanted only for them to find the truth, not their gold or gems.",
        "imagePrompt": "A queen looking at a small scroll with a royal seal, surrounded by gold chests",
      },
      {
        "text": "When the Queen decided to visit him, Sulayman (AS) wanted to show her the power given to him by Allah. He asked: 'Which of you can bring me her throne?' A powerful jinn offered to bring it, but a man with knowledge of the Book brought it in the blink of an eye! When she arrived and saw her throne, she was amazed.",
        "imagePrompt": "A massive, jewel-encrusted throne suddenly appearing in a grand hall",
      },
      {
        "text": "Sulayman (AS) had built a palace with a floor made of crystal glass over flowing water. Queen Bilqis thought it was deep water and lifted her skirt to walk through, until Sulayman (AS) explained it was just glass. Realizing she was in the presence of a truly blessed Prophet, she said: 'My Lord, I have wronged myself, and I submit with Sulayman to Allah, Lord of the worlds.'",
        "imagePrompt": "A woman cautiously stepping on a floor that looks like shimmering blue water",
      },
      {
        "text": "Sulayman (AS) used his power to build the magnificent Masjid Al-Aqsa. He even passed away while standing in prayer, leaning on his staff. The jinn continued to work for a long time, not knowing he had passed, until a tiny creature of the earth ate through his staff and he fell. This showed that only Allah knows the unseen.",
        "imagePrompt": "An old king leaning on a staff in a grand, unfinished temple",
      }
    ],
    "lessons": [
      "True power comes from Allah, and we must use it with humility and gratitude",
      "Even the smallest creature (like an ant) has value and should be respected",
      "Wisdom and knowledge are better than all the gold and gifts in the world",
      "A great leader always checks on everyone, even a small bird (the Hoopoe)",
      "Only Allah knows the unseen (Ghaib); even powerful jinn are limited in knowledge"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Who was Sulayman's father?",
        "options": [
          "Dawud",
          "Musa",
          "Ibrahim",
          "Isa"
        ],
        "correctAnswer": 0
      },
      {
        "id": 2,
        "question": "What could Sulayman understand?",
        "options": [
          "The language of birds and animals",
          "All languages",
          "The future",
          "People's thoughts"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "Who was the queen that Sulayman invited to Islam?",
        "options": [
          "Cleopatra",
          "Bilqis",
          "Sheba",
          "Esther"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "What did Sulayman's palace floor look like?",
        "options": [
          "Gold",
          "Glass that looked like water",
          "Diamonds",
          "Flowers"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "What did Queen Bilqis do at the end?",
        "options": [
          "She fought Sulayman",
          "She submitted to Allah",
          "She went home",
          "She stole the throne"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 19,
    "name": "Prophet Ilyas (AS)",
    "arabicName": "إلياس",
    "color": "#DC2626",
    "bgGradient": "from-red-400 to-rose-600",
    "shortDescription": "The prophet who called people to worship only Allah in Baalbek",
    "story": [
      {
        "text": "Prophet Ilyas (AS) was sent to the people of Baalbek in modern-day Lebanon. They had turned away from Allah and were worshipping a giant golden statue called 'Baal.' Ilyas (AS) stood before them and asked: 'Will you call upon Baal and forsake the Best of Creators—Allah, your Lord and the Lord of your forefathers?'",
        "imagePrompt": "A man standing before a massive, shining golden statue in a crowded city square",
      },
      {
        "text": "The people and their king grew angry and tried to harm Ilyas (AS). He had to flee and hide in a cave for several years, where Allah provided for him. During this time, a great drought struck the land, and the people began to suffer because their false god, Baal, could not bring even a single drop of rain.",
        "imagePrompt": "A man sitting in a rocky cave looking out at a dry, cracked desert landscape",
      },
      {
        "text": "Ilyas (AS) returned to the people and told them that the rain would only come if they returned to the worship of Allah. He showed them that Baal was nothing but a piece of gold that could not hear or speak. Eventually, some people realized their mistake and turned back to the truth.",
        "imagePrompt": "Gray clouds gathering over a dusty city as people look up in hope",
      },
      {
        "text": "Ibn Kathir mentions that Ilyas (AS) was a man of great strength and intensity in his faith. He traveled across the land, teaching people that Allah is the only One who deserves to be worshipped and that statues have no power to help or harm anyone.",
        "imagePrompt": "A man with a walking stick traveling along a high mountain ridge",
      },
      {
        "text": "Allah praised Ilyas (AS) in the Quran, saying: 'Peace be upon Ilyasin! Indeed, thus do We reward the doers of good.' He left a legacy of courage and stayed firm in his message until the very end, passing his mission to his student, Al-Yasa (AS).",
        "imagePrompt": "A peaceful mountain village under a clear blue sky",
      }
    ],
    "lessons": [
      "No matter how many people follow a wrong path, stay firm on the truth",
      "False gods and idols have no power; only Allah can provide rain and food",
      "Patience during times of hiding and hardship is a trait of the prophets",
      "Always call people to the 'Best of Creators' with wisdom and courage",
      "Allah's peace and rewards are for those who do good and stay faithful"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "What false god did the people of Baalbek worship?",
        "options": [
          "Allah",
          "Baal",
          "The sun",
          "The moon"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "What miracle did Allah show through Ilyas?",
        "options": [
          "Water from a rock",
          "Fire from sky",
          "Splitting the sea",
          "Healing the sick"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "How was Ilyas taken to heaven?",
        "options": [
          "By angels",
          "In a whirlwind of fire",
          "By chariot",
          "He walked"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 20,
    "name": "Prophet Al-Yasa (AS)",
    "arabicName": "اليسع",
    "color": "#8B5CF6",
    "bgGradient": "from-violet-400 to-purple-600",
    "shortDescription": "The successor of Ilyas who continued his mission",
    "story": [
      {
        "text": "Prophet Al-Yasa (AS) was the cousin and student of Prophet Ilyas (AS). He grew up watching the courage of his teacher and was chosen by Allah to continue the mission of guiding the Children of Israel after Ilyas (AS) passed away.",
        "imagePrompt": "A younger man walking beside an older man, both carrying walking sticks",
      },
      {
        "text": "Al-Yasa (AS) was blessed with many miracles. In the city of Jericho, the water had become bitter and the land was dying. Al-Yasa (AS) threw some salt into the spring and prayed to Allah, and the water immediately became sweet and healthy for everyone to drink.",
        "imagePrompt": "A man standing by a small spring, with people happily filling their jars with water",
      },
      {
        "text": "He also helped a poor widow whose sons were about to be taken as slaves because of a debt. He told her to pour her last bit of oil into as many jars as she could find. Miraculously, the oil kept flowing until every jar was full, and she was able to pay the debt.",
        "imagePrompt": "A woman pouring oil from a small pot into a much larger jar, with many jars around her",
      },
      {
        "text": "Al-Yasa (AS) was known for his extreme kindness to the poor and for being a true leader who lived a simple life. He traveled through various cities, reminding people that Allah provides for those who trust Him and work hard.",
        "imagePrompt": "A man sitting on a simple wooden bench, sharing food with a group of people",
      },
      {
        "text": "Allah mentions Al-Yasa (AS) twice in the Quran, placing him among the best of mankind. He says: 'And remember Ismail, Al-Yasa, and Dhul-Kifl, and all are among the best.' His story shows that being a good student and a kind helper leads to great honor from Allah.",
        "imagePrompt": "A warm, golden light shining over a peaceful green valley with a river",
      }
    ],
    "lessons": [
      "Being a dedicated student is the first step to becoming a great leader",
      "Allah can turn bitterness into sweetness (like the spring) if we have faith",
      "Trusting in Allah's provision (like the oil miracle) brings blessings to the home",
      "Kindness to the poor and helping those in debt is a prophetic character trait",
      "Continuing the good work started by our teachers and parents is very important"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Who was Alyasa's teacher?",
        "options": [
          "Musa",
          "Ilyas",
          "Dawud",
          "Ibrahim"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "What miracle happened with the oil?",
        "options": [
          "It turned to gold",
          "It filled many pots",
          "It became water",
          "It disappeared"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "What did Alyasa teach about helping others?",
        "options": [
          "Ignore them",
          "Be kind to the poor",
          "Only help family",
          "Ask for money first"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 21,
    "name": "Prophet Yunus (AS)",
    "arabicName": "يونس",
    "color": "#0EA5E9",
    "bgGradient": "from-sky-400 to-blue-600",
    "shortDescription": "The prophet who was swallowed by a giant fish",
    "story": [
      {
        "text": "Prophet Yunus (AS) was sent to the city of Nineveh, where more than a hundred thousand people lived. After years of calling them to Allah, they still refused to believe. Yunus (AS) grew frustrated and decided to leave the city without waiting for Allah's command, thinking he had done his duty.",
        "imagePrompt": "A man with a bag and a walking stick leaving a large, walled city as its people look on",
      },
      {
        "text": "Yunus (AS) boarded a crowded ship to sail across the sea. Suddenly, a massive storm broke out, and the ship was about to sink! The sailors thought someone on board was 'cursed' and drew lots to see who should leave. Three times, the name of Yunus (AS) came up. Realizing it was Allah's will, Yunus (AS) threw himself into the dark sea.",
        "imagePrompt": "A man standing at the edge of a rocking ship in a dark storm with massive waves",
      },
      {
        "text": "Immediately, Allah commanded a giant fish to swallow Yunus (AS) but not to harm him. Inside the fish's belly, it was dark and cramped. Yunus (AS) heard the creatures of the deep praising Allah! He realized he should have stayed at his post and prayed: 'There is no god but You; exalted are You. Indeed, I have been of the wrongdoers.'",
        "imagePrompt": "A man in a dark, cave-like space, praying with focused intensity",
      },
      {
        "text": "Allah heard his sincere prayer and commanded the fish to spit him out onto a sandy beach. Yunus (AS) was very weak and his skin was thin from the fish's stomach. Allah caused a gourd vine to grow over him, providing cool shade and food until he became healthy and strong again.",
        "imagePrompt": "A man lying peacefully on a beach under a large vine with green leaves and fruit",
      },
      {
        "text": "When Yunus (AS) returned to Nineveh, he was amazed to see that all the people had realized their mistake and were now worshipping only Allah! It was one of the few times an entire city was saved from a punishment. Allah is truly the Most Forgiving and Merciful.",
        "imagePrompt": "A happy group of people in a city square, with light shining down from the clouds",
      }
    ],
    "lessons": [
      "Never give up on your duties, even when they seem too difficult",
      "Allah's mercy can reach you in the darkest places (like the fish's belly)",
      "Admitting your mistakes and praying sincerely (Dua of Yunus) is the key to forgiveness",
      "Allah always provides for those who return to Him (like the gourd vine)",
      "Patience and returning to your mission can lead to massive success"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "What swallowed Yunus?",
        "options": [
          "A shark",
          "A giant fish",
          "A whale",
          "A dragon"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "What did Yunus pray inside the fish?",
        "options": [
          "'Get me out!'",
          "'There is no god but You'",
          "'Help!'",
          "'Why me?'"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "What grew to shade Yunus on the beach?",
        "options": [
          "A tree",
          "A gourd vine",
          "A tent",
          "An umbrella"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 22,
    "name": "Prophet Zakariyah (AS)",
    "arabicName": "زكريا",
    "color": "#10B981",
    "bgGradient": "from-emerald-400 to-teal-500",
    "shortDescription": "The prophet who was blessed with a son in old age",
    "story": [
      {
        "text": "Prophet Zakariyah (AS) was a wise and elderly priest who served in the Sacred House in Jerusalem. He was a man of great devotion and was chosen to take care of Maryam (AS). Every time he visited her, he found her with fresh food and fruits that were not in season. When he asked where they came from, she said: 'It is from Allah. Indeed, Allah provides for whom He wills without account.'",
        "imagePrompt": "An elderly man talking to a young girl in a simple, quiet room with baskets of fruit",
      },
      {
        "text": "Seeing the miracles given to Maryam, Zakariyah (AS) prayed to Allah for a son, even though he was very old and his wife was also elderly. He prayed privately: 'My Lord, indeed my bones have weakened... and never have I been in my prayer to You, my Lord, unhappy.' He wanted a son to carry on the light of prophethood.",
        "imagePrompt": "A silhouette of an old man with white hair, praying alone in a beautiful temple",
      },
      {
        "text": "While he was standing in prayer, the angels called out to him: 'Allah gives you good tidings of Yahya (John), who will confirm a word from Allah and be a leader, chaste, and a prophet from among the righteous.' Zakariyah (AS) was amazed and asked how this could be, and Allah replied: 'It is easy for Me.'",
        "imagePrompt": "A glowing light appearing before a man who is standing in a grand hall",
      },
      {
        "text": "Allah gave Zakariyah (AS) a sign: he would not be able to speak to people for three days except by gestures. During this time, he was filled with joy and kept praising Allah in his heart. Soon, the miracle came true, and they were blessed with a beautiful baby boy named Yahya (AS).",
        "imagePrompt": "A happy old man looking out at a group of people and gesturing with his hands",
      },
      {
        "text": "Zakariyah (AS) lived to see his son Yahya grow up to be a wise and noble prophet who also loved and served Allah. Zakariyah's life shows us that no matter how old we are or how impossible things look, we should never stop asking Allah for what we need.",
        "imagePrompt": "An elderly father and a young son walking together in a green valley",
      }
    ],
    "lessons": [
      "Always have high hopes in Allah, no matter how 'impossible' the situation seems",
      "The miracles given to others (like Maryam) should inspire us to pray for ourselves",
      "Allah's power is shown when He gives us blessings at the perfect time",
      "A righteous child is one of the greatest gifts a parent can receive",
      "Sincere and private prayer (Dua) is a powerful way to talk to our Creator"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Who did Zakariya take care of?",
        "options": [
          "Maryam",
          "Sarah",
          "Hajar",
          "Hawwa"
        ],
        "correctAnswer": 0
      },
      {
        "id": 2,
        "question": "What was Zakariya's son's name?",
        "options": [
          "Isa",
          "Yahya",
          "Musa",
          "Haroon"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "Why couldn't Zakariya speak for three days?",
        "options": [
          "He was sick",
          "It was a sign from Allah",
          "He was quiet",
          "He was tired"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 23,
    "name": "Prophet Yahya (AS)",
    "arabicName": "يحيى",
    "color": "#06B6D4",
    "bgGradient": "from-cyan-400 to-blue-500",
    "shortDescription": "The prophet who was gentle and never disobeyed his parents",
    "story": [
      {
        "text": "Prophet Yahya (AS) was the son of Prophet Zakariyah (AS), given as a miracle in his parents' old age. From his childhood, Yahya (AS) was unlike other children. When other boys asked him to play, he would wisely say: 'We were not created for play.' He was serious, pure, and deeply devoted to worshipping Allah even as a small boy.",
        "imagePrompt": "A young child with a calm, wise face sitting under a tree and looking at a scroll",
      },
      {
        "text": "Allah gave Yahya (AS) 'Hukm' (wisdom and prophethood) while he was still a child. He was famous for his amazing kindness, especially toward his parents. The Quran describes him as being 'kind to his parents, and he was not a tyrant or rebellious.' He never once spoke a harsh word to them.",
        "imagePrompt": "A young man kissing the hand of his elderly father in a warm, sunlit room",
      },
      {
        "text": "Yahya (AS) lived a very simple life. He often spent his time in the wilderness, eating only leaves and honey, so that he could focus entirely on his love for Allah. He would weep out of fear and love for his Creator, often calling the people to repent and turn back to the right path before they lost their way.",
        "imagePrompt": "A man in simple clothing standing in a rocky desert under a vast, starry sky",
      },
      {
        "text": "He was a very brave prophet who never feared the blame of anyone when it came to the truth. He stood up against a powerful, corrupt king who wanted to break the laws of Allah. Yahya (AS) told him clearly: 'It is not lawful for you.' He chose to follow Allah's command even though it was very dangerous.",
        "imagePrompt": "A man with a firm, calm face speaking to a king who looks angry on a throne",
      },
      {
        "text": "Ibn Kathir mentions that Yahya (AS) and Isa (AS) were cousins and often worked together to guide the people. Yahya (AS) was martyred for his courage, but he earned the highest honor from Allah. He is the only prophet whose name was chosen directly by Allah Himself: 'We give you good tidings of a boy whose name will be Yahya.'",
        "imagePrompt": "Two noble men talking together in a peaceful, green garden",
      }
    ],
    "lessons": [
      "True wisdom and devotion can begin at a very young age (like Yahya)",
      "Being exceptionally kind and obedient to parents is a prophetic quality",
      "We should value our time and remember that we weren't 'created for play' alone",
      "Speaking the truth to power, even when it is dangerous, shows ultimate faith",
      "A simple life focused on Allah is better than a life of luxury and distraction"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Who was Yahya's father?",
        "options": [
          "Ibrahim",
          "Zakariya",
          "Musa",
          "Isa"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "What was Yahya known for?",
        "options": [
          "Being rich",
          "Being gentle and never disobeying parents",
          "Being strong",
          "Being a king"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "What did Yahya tell people to do?",
        "options": [
          "Fight",
          "Repent and prepare for Isa",
          "Build houses",
          "Travel"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 24,
    "name": "Prophet Isa (AS)",
    "arabicName": "عيسى",
    "color": "#10B981",
    "bgGradient": "from-teal-400 to-emerald-500",
    "shortDescription": "Born miraculously and spoke as a baby, raised the dead by Allah's will",
    "story": [
      {
        "text": "Prophet Isa (AS) was born from a great miracle. His mother, Maryam (AS), was a pure and pious woman who was visited by Angel Jibreel. He told her: 'I am only a messenger of your Lord to give you news of a pure boy.' Maryam was amazed, but she trusted Allah. When the time came, she rested under a palm tree, and Allah provided her with fresh dates and a stream of water.",
        "imagePrompt": "A woman sitting under a large palm tree with a small stream nearby",
      },
      {
        "text": "When Maryam (AS) returned to her people with the baby, they were shocked and asked questions. Maryam remained silent as Allah commanded. Suddenly, baby Isa (AS) spoke from his cradle: 'Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet.' This was his first miracle, proving his mother's purity.",
        "imagePrompt": "A baby in a simple wooden cradle, while a group of people look on in shock",
      },
      {
        "text": "As Isa (AS) grew up, Allah gave him amazing miracles to show the people the truth. By Allah's permission, he could breathe life into birds made of clay, heal the blind, cure the skin of the leper, and even bring the dead back to life! He always told the people: 'These are by the permission of Allah, so worship Him alone.'",
        "imagePrompt": "A man's hands holding a small clay bird that is starting to flap its wings",
      },
      {
        "text": "Isa (AS) was given the Injeel (Gospel) and traveled throughout the land, teaching people to be humble, kind, and to love one another. He had twelve close followers called the 'Hawariyyun' (Disciples) who helped him share the message of Allah. He told his people: 'Allah is my Lord and your Lord, so worship Him. That is a straight path.'",
        "imagePrompt": "A man surrounded by a small group of friends in a simple village market",
      },
      {
        "text": "When some people plotted to harm Isa (AS), Allah protected him in a miraculous way. He was not killed or crucified; instead, Allah raised him up to heaven where he is still alive today. Someone else was made to look like him, and the enemies were confused. Isa (AS) is one of the five greatest prophets of Islam.",
        "imagePrompt": "Light shining down from an open sky onto a mountaintop",
      },
      {
        "text": "Muslims believe that Isa (AS) will return to earth before the Day of Judgment to establish peace and justice. He will show everyone the truth of Islam and live as a just leader. His return is one of the major signs of the Hour, and it will be a time of great victory for the believers.",
        "imagePrompt": "A peaceful landscape with a white minaret under a clear, bright sky",
      }
    ],
    "lessons": [
      "Allah can create whatever He wills, just as He created Isa without a father",
      "True miracles are a sign from Allah to bring people back to the Straight Path",
      "Patience and trust in Allah (like Maryam) lead to victory over false accusations",
      "Prophets are human servants of Allah, not Gods or children of God",
      "Doing good deeds and helping others is the best way to show our love for Allah"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Who was Isa's mother?",
        "options": [
          "Sarah",
          "Maryam",
          "Hajar",
          "Hawwa"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Who came to Maryam with the news?",
        "options": [
          "A king",
          "Angel Jibreel",
          "A wise man",
          "Her father"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "What did baby Isa do?",
        "options": [
          "Walk",
          "Speak from the cradle",
          "Fly",
          "Turn water to milk"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "What book did Allah give Isa?",
        "options": [
          "The Quran",
          "The Torah",
          "The Gospel (Injeel)",
          "The Psalms"
        ],
        "correctAnswer": 2
      },
      {
        "id": 5,
        "question": "What happened when enemies tried to kill Isa?",
        "options": [
          "He died",
          "Allah raised him to heaven",
          "He ran away",
          "He fought them"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 25,
    "name": "Prophet Muhammad ﷺ",
    "arabicName": "محمد",
    "color": "#14B8A6",
    "bgGradient": "from-teal-500 to-cyan-600",
    "shortDescription": "The final messenger who brought the Quran, mercy to all worlds",
    "story": [
      {
        "text": "Prophet Muhammad ﷺ was born in Makkah into the noble tribe of Quraysh. He was orphaned at a young age and raised by his grandfather, Abdul Muttalib, and later his uncle, Abu Talib. Even as a young man, he was known by everyone in Makkah as 'Al-Amin' (The Trustworthy) because he never once told a lie and was always fair in his dealings.",
        "imagePrompt": "A young man with a noble expression standing in a busy desert city, with people walking by",
      },
      {
        "text": "At the age of 40, while he was meditating in the Cave of Hira, Angel Jibreel appeared and brought the first revelation of the Quran: 'Read in the name of your Lord who created.' This marked the beginning of his mission as the final Prophet to all of mankind. His wife Khadijah (RA) was the first to believe and support him.",
        "imagePrompt": "A dark, rocky cave entrance with a soft, glowing light shining from within",
      },
      {
        "text": "For thirteen years in Makkah, the Prophet ﷺ called people to worship Allah alone and to treat everyone with equality and justice. Despite facing great hardship and being mocked by the leaders of Quraysh, he remained patient and kind. He once said: 'I was only sent to perfect noble character.'",
        "imagePrompt": "A man standing calmly while a group of angry people gesture toward him in a dusty street",
      },
      {
        "text": "Eventually, Allah commanded the Muslims to migrate to Madinah—this event is called the Hijrah. In Madinah, the Prophet ﷺ built the first mosque and established a community of peace and brotherhood between the migrants and the local people. He showed that people of different backgrounds could live together in harmony under the law of Allah.",
        "imagePrompt": "A group of people working together to lay simple stone blocks for a building under a date palm tree",
      },
      {
        "text": "After many years, the Prophet ﷺ returned to Makkah with a massive, peaceful army. Instead of taking revenge on those who had hurt him, he showed ultimate mercy and declared: 'Go, for you are free.' Thousands of people entered Islam after seeing his incredible character and the truth of his message.",
        "imagePrompt": "A massive group of people in white clothing standing peacefully before a grand city gate",
      },
      {
        "text": "The Prophet ﷺ performed his Farewell Hajj, where he delivered his famous sermon: 'All mankind is from Adam and Hawwa. An Arab has no superiority over a non-Arab... except by piety and good action.' He completed the mission of all the prophets before him. He is the 'Seal of the Prophets,' and his message, the Quran, is preserved forever as a light for all worlds.",
        "imagePrompt": "A bright, clear sky over a massive, peaceful gathering of people in a vast desert plain",
      }
    ],
    "lessons": [
      "Honesty and being 'Al-Amin' should be our identity before everything else",
      "Patience (Sabr) and noble character are the most powerful ways to share the truth",
      "All people are equal in the sight of Allah, regardless of where they are from",
      "Mercy and forgiveness towards those who hurt us is the way of the Prophet ﷺ",
      "The Quran and the example (Sunnah) of the Prophet ﷺ are our guides for a happy life"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "What does 'Al-Amin' mean?",
        "options": [
          "The Brave",
          "The Trustworthy",
          "The Wise",
          "The Strong"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Who was the first person to believe in the Prophet?",
        "options": [
          "Abu Bakr",
          "Ali",
          "Khadijah",
          "Umar"
        ],
        "correctAnswer": 2
      },
      {
        "id": 3,
        "question": "Where did the Prophet receive the first revelation?",
        "options": [
          "In a mosque",
          "In the cave of Hira",
          "In his house",
          "In Madinah"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "What is the Prophet called - a mercy to all worlds?",
        "options": [
          "Rasulullah",
          "Rahmatul lil Alameen",
          "Khatamun Nabiyyin",
          "Al-Mustafa"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "How long did the Quran take to be fully revealed?",
        "options": [
          "1 year",
          "5 years",
          "10 years",
          "23 years"
        ],
        "correctAnswer": 3
      }
    ]
  }
];

export const getProphetById = (id: number): ProphetStory | undefined => {
  return prophets.find(p => p.id === id);
};

export const getTotalProphets = (): number => prophets.length;
