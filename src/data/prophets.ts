export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface StorySection {
  text: string;
  imagePrompt: string;
}

export interface ProphetStory {
  id: number;
  name: string;
  arabicName: string;
  emoji: string;
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
    "emoji": "🌿",
    "color": "#22C55E",
    "bgGradient": "from-emerald-400 to-green-600",
    "shortDescription": "The first human being and prophet created by Allah from clay",
    "story": [
      {
        "text": "Long, long ago, before there were any people, animals, or even the Earth as we know it, Allah decided to create something very special - the very first human being! Allah took some clay from the earth and shaped it into the form of a man.",
        "imagePrompt": "divine hands sculpting human from clay"
      },
      {
        "text": "Allah breathed His spirit into this clay figure, and Adam (AS) came to life! Adam was the very first prophet and human being ever created. Allah taught Adam the names of everything - all the animals, plants, and things in the world.",
        "imagePrompt": "first human in paradise with animals"
      },
      {
        "text": "When the angels saw this, they were amazed! Allah told the angels to bow to Adam as a sign of respect, and all of them did except Iblis (Shaytan), who was too proud and refused.",
        "imagePrompt": "angels bowing, one refusing"
      },
      {
        "text": "Allah placed Adam in a beautiful garden called Jannah (Paradise). In Jannah, Adam had everything he could ever want - delicious fruits, beautiful flowers, and peaceful rivers flowing with milk and honey.",
        "imagePrompt": "beautiful paradise garden"
      },
      {
        "text": "Allah then created Hawwa (Eve) to be Adam's companion and wife. They lived happily together in Jannah. But Shaytan was jealous and wanted to trick them into disobeying Allah.",
        "imagePrompt": "couple in paradise garden"
      },
      {
        "text": "Shaytan whispered to Adam and Hawwa and made the forbidden tree look beautiful. They forgot Allah's warning and ate from it. Immediately, they felt sorry and asked Allah to forgive them.",
        "imagePrompt": "forbidden tree with serpent"
      },
      {
        "text": "Allah, who is the Most Merciful, accepted their apology. He then sent Adam and Hawwa to live on Earth as a test. He promised that if they and their children followed His guidance, they could return to Jannah one day.",
        "imagePrompt": "Earth from above with divine light"
      },
      {
        "text": "Adam and Hawwa had many children. Their two sons were named Habil (Abel) and Qabil (Cain). Prophet Adam (AS) lived for almost 1000 years, teaching all his children about Allah. He is the father of all human beings!",
        "imagePrompt": "family with children in nature"
      }
    ],
    "lessons": [
      "Allah created us with love and care",
      "We should always listen to Allah's guidance",
      "When we make mistakes, we should ask Allah for forgiveness",
      "Shaytan tries to trick us, but we can be strong",
      "Family is a precious gift from Allah"
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
    "emoji": "📜",
    "color": "#8B5CF6",
    "bgGradient": "from-violet-400 to-purple-600",
    "shortDescription": "The prophet who was raised to heaven and taught writing",
    "story": [
      {
        "text": "Prophet Idris (AS) was born many generations after Prophet Adam. He was a very wise and pious man who loved to worship Allah. Allah chose him to be a prophet to guide his people back to the right path.",
        "imagePrompt": "wise man on hill at sunset"
      },
      {
        "text": "Idris (AS) was the first prophet to teach people how to write and read! Before him, people only memorized things. He also taught people about astronomy - how to look at the stars and understand the heavens.",
        "imagePrompt": "ancient scrolls and star charts"
      },
      {
        "text": "Allah blessed Idris with great knowledge. He taught his people to be honest, to help the poor, and to pray regularly. Many people listened to him and became better.",
        "imagePrompt": "teacher with students learning"
      },
      {
        "text": "Idris (AS) was also the first prophet to use a needle and thread to sew clothes! Before this, people only wore animal skins. He taught them how to make proper clothes.",
        "imagePrompt": "hands sewing with needle"
      },
      {
        "text": "Allah loved Idris so much that He raised him up to the fourth heaven while he was still alive! This was a special honor given only to Idris. He is mentioned in the Quran as being 'raised to a high station.'",
        "imagePrompt": "figure ascending to heaven"
      }
    ],
    "lessons": [
      "Knowledge is a gift from Allah",
      "We should always seek to learn new things",
      "Being honest and helpful is important",
      "Allah rewards those who are close to Him"
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
    "emoji": "🚢",
    "color": "#3B82F6",
    "bgGradient": "from-blue-400 to-cyan-600",
    "shortDescription": "Built a great ark to save the believers from the flood",
    "story": [
      {
        "text": "Long ago, people had forgotten about Allah and started worshipping statues and idols. They made statues of good people who had died and began praying to them instead of Allah.",
        "imagePrompt": "people worshipping idols"
      },
      {
        "text": "Allah chose a kind and patient man named Nuh (Noah) to be His prophet. Nuh (AS) called his people day and night, saying, 'O my people! Worship Allah alone!'",
        "imagePrompt": "prophet calling to people"
      },
      {
        "text": "But most people laughed at Nuh (AS). They made fun of him and said, 'Why should we listen to you? You're just a regular person!' Some people even threw trash at him.",
        "imagePrompt": "people laughing at prophet"
      },
      {
        "text": "Nuh (AS) never gave up! He kept teaching for 950 years - that's longer than anyone has ever lived! Even though only a few people believed in him, he stayed patient and kind.",
        "imagePrompt": "patient prophet despite mockery"
      },
      {
        "text": "Allah told Nuh (AS) that He would send a great flood to clean the earth. He commanded Nuh to build a huge ship called an Ark. When people saw Nuh building a ship on dry land, they laughed even more!",
        "imagePrompt": "ark construction on dry land"
      },
      {
        "text": "Allah told Nuh (AS) to take pairs of every animal - two of each kind, male and female - and put them on the Ark. The believers and their families came aboard too.",
        "imagePrompt": "animals boarding the ark"
      },
      {
        "text": "Then, the sky became dark and rain started falling. It rained and rained for 40 days and 40 nights! Water came from everywhere - from the sky and even from under the ground.",
        "imagePrompt": "great flood with heavy rain"
      },
      {
        "text": "The Ark floated safely on the water while everything else was washed away. Even Nuh's own son didn't believe him and refused to come on the Ark.",
        "imagePrompt": "ark floating on vast ocean"
      },
      {
        "text": "After many days, the rain stopped and the water slowly went down. The Ark landed safely on a mountain called Mount Judi. Allah put a beautiful rainbow in the sky as a promise that He would never send such a big flood again!",
        "imagePrompt": "rainbow after flood"
      }
    ],
    "lessons": [
      "Be patient even when people are mean to you",
      "Always trust Allah's promises",
      "Do what Allah says, even if others laugh at you",
      "Family should listen to each other",
      "Allah always keeps His promises"
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
    "emoji": "🏜️",
    "color": "#F59E0B",
    "bgGradient": "from-amber-400 to-orange-500",
    "shortDescription": "Sent to the people of Ad who were very tall and strong",
    "story": [
      {
        "text": "After the time of Nuh (AS), there was a people called Ad. They were very tall and strong - the strongest people ever! They built beautiful cities with tall towers and palaces in the desert.",
        "imagePrompt": "ancient desert city with tall people"
      },
      {
        "text": "But the people of Ad became proud and arrogant. They forgot about Allah and started worshipping idols. They thought their strength and buildings made them better than everyone else.",
        "imagePrompt": "proud people worshipping idols"
      },
      {
        "text": "Allah sent Prophet Hud (AS) to guide them back to the right path. Hud was one of their own people. He told them, 'O my people! Worship Allah alone! Don't be proud and arrogant!'",
        "imagePrompt": "prophet speaking to tall people"
      },
      {
        "text": "The people laughed at Hud. They said, 'You want us to leave our idols and worship just one God? Our fathers worshipped these idols!' They challenged Hud to bring Allah's punishment if he was telling the truth.",
        "imagePrompt": "people challenging prophet"
      },
      {
        "text": "Hud warned them that Allah's punishment would come if they didn't change. But they refused to listen. They said, 'Where is this punishment you keep talking about?'",
        "imagePrompt": "prophet warning people"
      },
      {
        "text": "Then, one day, a terrible wind came - the worst wind ever! It blew for seven days and eight nights. It was so strong that it lifted the people up and threw them down like dry leaves!",
        "imagePrompt": "terrible wind destroying city"
      },
      {
        "text": "Allah saved Hud (AS) and those who believed in him. When the storm ended, the proud people of Ad were gone. Their beautiful cities became empty ruins in the desert.",
        "imagePrompt": "empty ruins after storm"
      }
    ],
    "lessons": [
      "Pride and arrogance are dangerous",
      "Don't think you're better than others",
      "Always be humble and thank Allah",
      "Listen to Allah's messengers",
      "Allah's punishment is real for those who reject Him"
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
    "emoji": "🐪",
    "color": "#EC4899",
    "bgGradient": "from-pink-400 to-rose-500",
    "shortDescription": "The prophet who brought a miracle she-camel from a rock",
    "story": [
      {
        "text": "After the people of Ad, there came a people called Thamud. They lived in rocky mountains and carved beautiful houses out of the stone cliffs. They were skilled builders but they too worshipped idols.",
        "imagePrompt": "rock carved city in mountains"
      },
      {
        "text": "Allah sent Prophet Salih (AS) to guide them. Salih was one of their own people and they respected him. He told them to worship only Allah and stop their bad deeds.",
        "imagePrompt": "prophet speaking to mountain people"
      },
      {
        "text": "The people said, 'Salih, if you are really a prophet, show us a miracle! Make a she-camel come out of that big rock over there!' They thought this was impossible.",
        "imagePrompt": "people challenging with big rock"
      },
      {
        "text": "Salih prayed to Allah, and something amazing happened! The big rock split open, and a beautiful she-camel came walking out! It was a living, breathing camel - a true miracle from Allah!",
        "imagePrompt": "camel coming out of split rock"
      },
      {
        "text": "Salih told the people, 'This is Allah's she-camel. Let her drink from the well one day, and you drink the next day. Be kind to her.' But some people became jealous of the camel.",
        "imagePrompt": "camel drinking from well"
      },
      {
        "text": "A group of wicked people decided to kill the she-camel. They shot her with arrows and killed her! When Salih heard this, he was very sad and warned them that Allah's punishment would come in three days.",
        "imagePrompt": "camel being killed with arrows"
      },
      {
        "text": "On the third day, a terrible sound came from the sky - like thunder but louder! The earth shook and everyone who had done wrong fell down dead. Allah saved Salih (AS) and the believers.",
        "imagePrompt": "earthquake and destruction"
      }
    ],
    "lessons": [
      "Don't ask for miracles just to challenge Allah",
      "Be kind to animals - they are Allah's creatures",
      "Allah can do anything - even make a camel from a rock",
      "When Allah gives you a sign, believe in it",
      "Allah's punishment comes to those who harm His signs"
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
    "emoji": "🌟",
    "color": "#F59E0B",
    "bgGradient": "from-amber-400 to-orange-500",
    "shortDescription": "The friend of Allah who broke the idols and built the Kaaba",
    "story": [
      {
        "text": "Prophet Ibrahim (Abraham) was born in a land where people worshipped many idols and even the stars! His own father made idols for people to worship. But Ibrahim was different - he was always thinking and wondering about the truth.",
        "imagePrompt": "young boy looking at stars"
      },
      {
        "text": "When Ibrahim was young, he looked at the beautiful stars and thought, 'Maybe this is my Lord?' But when the stars disappeared, he knew they couldn't be God. Then he saw the bright moon and the sun, but they also set.",
        "imagePrompt": "celestial bodies fading"
      },
      {
        "text": "Ibrahim said, 'I turn my face to the One who created the heavens and the earth. I will never worship anything besides Allah!' He knew there was only One True God who never sets or disappears.",
        "imagePrompt": "man rejecting idols"
      },
      {
        "text": "One day, Ibrahim's people left town for a festival. Ibrahim went to the temple where all the idols were kept. He asked them, 'Why don't you eat the food people leave for you?' The idols were silent, of course!",
        "imagePrompt": "temple with idols"
      },
      {
        "text": "Ibrahim had a plan. He took an axe and broke all the idols - except the biggest one. He hung the axe around the big idol's neck. When people returned and saw their broken idols, they were shocked and angry!",
        "imagePrompt": "broken idols in temple"
      },
      {
        "text": "'Who did this?!' they shouted. Ibrahim calmly said, 'Ask the big idol. Maybe he did it!' The people said, 'But idols can't talk!' Ibrahim replied, 'Then why do you worship things that cannot help you?'",
        "imagePrompt": "confrontation with people"
      },
      {
        "text": "The people became very angry and decided to punish Ibrahim. They built a huge fire and threw Ibrahim into it! But Allah commanded the fire to be cool and safe for Ibrahim. He sat in the fire, comfortable and unharmed!",
        "imagePrompt": "fire miracle"
      },
      {
        "text": "Allah blessed Ibrahim with a son named Ismail. Later, Allah tested Ibrahim by asking him to sacrifice his son. Both were ready to obey, but Allah sent a ram to sacrifice instead. This is why we celebrate Eid al-Adha!",
        "imagePrompt": "sacrifice scene with ram"
      },
      {
        "text": "Ibrahim and Ismail built the Kaaba in Makkah together. They asked Allah to bless the city and send a prophet from their family. Allah answered by sending Prophet Muhammad (SAW) many years later!",
        "imagePrompt": "building the Kaaba"
      }
    ],
    "lessons": [
      "Use your mind to think about Allah's signs",
      "Be brave in standing up for the truth",
      "Allah protects those who trust in Him",
      "Obey Allah even when it's difficult",
      "Always be willing to sacrifice for Allah"
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
    "emoji": "🏙️",
    "color": "#6366F1",
    "bgGradient": "from-indigo-400 to-purple-600",
    "shortDescription": "Sent to the people who were doing very bad things",
    "story": [
      {
        "text": "Prophet Lut (Lot) was the nephew of Prophet Ibrahim (AS). When Ibrahim traveled to different lands, Lut went with him and learned from him. Allah chose Lut to be a prophet to his own people.",
        "imagePrompt": "two prophets traveling"
      },
      {
        "text": "Lut (AS) was sent to a city where the people had become very wicked. They were doing terrible things that no one had ever done before. They refused to listen to any advice or guidance.",
        "imagePrompt": "wicked city"
      },
      {
        "text": "Lut (AS) tried to guide them back to the right path. He told them to worship only Allah and to stop their bad behavior. He reminded them that Allah had created them and given them everything.",
        "imagePrompt": "prophet warning people"
      },
      {
        "text": "But the people mocked Lut and threatened him. They said, 'If you don't stop preaching, you will be thrown out of our city!' Some even said, 'Bring us Allah's punishment if you are truthful!'",
        "imagePrompt": "people threatening prophet"
      },
      {
        "text": "Lut prayed to Allah for help. He said, 'O Allah, save me and my family from what these people are doing!' Allah answered his prayer and sent angels to help him.",
        "imagePrompt": "prophet praying for help"
      },
      {
        "text": "The angels came to Lut's house as handsome travelers. The wicked people surrounded the house and demanded that Lut send out the travelers to them! Lut was very upset and tried to protect his guests.",
        "imagePrompt": "angels at house"
      },
      {
        "text": "The angels revealed themselves and told Lut, 'We are angels sent by Allah. Take your family and leave this city tonight. Don't look back! Allah's punishment will come at sunrise.'",
        "imagePrompt": "angels revealing themselves"
      },
      {
        "text": "At sunrise, a terrible punishment came. Allah lifted up the city and flipped it upside down! Then He rained stones of baked clay upon them. Everything was destroyed except Lut and his family who had left.",
        "imagePrompt": "city destruction"
      }
    ],
    "lessons": [
      "Always protect your family from bad influences",
      "Never do things that Allah has forbidden",
      "Allah's punishment is severe for those who persist in sin",
      "Be brave even when standing alone for the truth",
      "Listen to Allah's messengers and follow their guidance"
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
    "emoji": "🕋",
    "color": "#14B8A6",
    "bgGradient": "from-teal-400 to-cyan-500",
    "shortDescription": "The son of Ibrahim who helped build the Kaaba",
    "story": [
      {
        "text": "Prophet Ismail (Ishmael) was the son of Prophet Ibrahim (AS) and his wife Hajar. When he was just a baby, Allah tested Ibrahim by asking him to leave Hajar and Ismail in the desert valley of Makkah.",
        "imagePrompt": "mother and baby in desert"
      },
      {
        "text": "Hajar ran between two hills - Safa and Marwa - seven times, looking for water for her thirsty baby. Allah saw her effort and caused the well of Zamzam to spring up from under baby Ismail's feet!",
        "imagePrompt": "Zamzam well miracle"
      },
      {
        "text": "Ismail grew up to be a strong and righteous young man. He and his father Ibrahim built the Kaaba together as a house for Allah. They lifted heavy stones and placed them carefully.",
        "imagePrompt": "father and son building Kaaba"
      },
      {
        "text": "While building, they prayed, 'O Allah, accept this from us. Make this a place of peace and safety. Send a messenger from our children to teach the people.' Allah accepted their prayer.",
        "imagePrompt": "praying while building"
      },
      {
        "text": "Later, Allah tested Ibrahim again by commanding him to sacrifice his beloved son Ismail. Both father and son were ready to obey Allah completely. Ismail said, 'O my father, do what Allah has commanded!'",
        "imagePrompt": "sacrifice test"
      },
      {
        "text": "Just as Ibrahim was about to sacrifice his son, Allah sent a big ram to be sacrificed instead. Allah was testing their obedience and faith. They passed the test beautifully!",
        "imagePrompt": "ram appearing"
      },
      {
        "text": "Ismail (AS) became a prophet and taught his people to worship only Allah. His descendants became the Arab people, and from his line came Prophet Muhammad (SAW), the last messenger of Allah!",
        "imagePrompt": "prophet teaching people"
      }
    ],
    "lessons": [
      "Obey your parents when they ask you to do good",
      "Be willing to sacrifice for Allah",
      "Trust in Allah's plan even when it's difficult",
      "Hard work and dedication are rewarded by Allah",
      "Allah tests those He loves to make them stronger"
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
    "emoji": "👶",
    "color": "#F472B6",
    "bgGradient": "from-pink-400 to-rose-500",
    "shortDescription": "The miraculous son of Ibrahim born to Sarah in old age",
    "story": [
      {
        "text": "Prophet Ishaq (Isaac) was the second son of Prophet Ibrahim (AS). His mother was Sarah, Ibrahim's first wife. When Allah told Sarah she would have a baby, she was very surprised because she was very old!",
        "imagePrompt": "elderly couple with angel"
      },
      {
        "text": "Sarah laughed with happiness when she heard the news! She said, 'Shall I really have a baby when I am so old?' The angel said, 'Yes, by Allah's power, you will have a son named Ishaq.'",
        "imagePrompt": "joyful announcement"
      },
      {
        "text": "True to Allah's promise, Sarah became pregnant and gave birth to a beautiful baby boy named Ishaq. Ibrahim was overjoyed to have another son! Both he and Sarah thanked Allah for this miracle.",
        "imagePrompt": "newborn baby blessing"
      },
      {
        "text": "Ishaq grew up to be a righteous and wise man, just like his father. Allah chose him to be a prophet to continue his father's mission of teaching people to worship only Allah.",
        "imagePrompt": "young man learning"
      },
      {
        "text": "Ishaq had two sons, Esau (Aisa) and Ya'qub (Jacob). Ya'qub would also become a great prophet. Through Ishaq's line came many prophets, including Musa (Moses) and Isa (Jesus).",
        "imagePrompt": "family lineage"
      }
    ],
    "lessons": [
      "Allah can do anything - even the impossible",
      "Never lose hope in Allah's mercy",
      "Allah's promises always come true",
      "Be grateful for Allah's blessings",
      "Good children are a gift from Allah"
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
    "emoji": "🌈",
    "color": "#A855F7",
    "bgGradient": "from-purple-400 to-violet-600",
    "shortDescription": "Also called Israel, the father of twelve sons who became the twelve tribes",
    "story": [
      {
        "text": "Prophet Ya'qub (Jacob), also called Israel, was the son of Prophet Ishaq. He was a very righteous man who loved Allah deeply. Allah blessed him with twelve sons who would become the ancestors of the twelve tribes of Israel.",
        "imagePrompt": "father with twelve sons"
      },
      {
        "text": "Ya'qub had a special love for his son Yusuf (Joseph), who was very handsome and righteous. This made his other sons jealous. They plotted against Yusuf and threw him into a well, then told their father that a wolf had eaten him!",
        "imagePrompt": "brothers around well"
      },
      {
        "text": "Ya'qub was heartbroken. He cried so much for Yusuf that he lost his eyesight! But he never lost hope in Allah. He said, 'I only complain of my suffering to Allah, and I know from Allah what you do not know.'",
        "imagePrompt": "grieving father"
      },
      {
        "text": "Years later, when Yusuf became a great leader in Egypt, he sent for his family. Ya'qub and all his sons traveled to Egypt and were reunited. Ya'qub's eyesight was restored when he smelled Yusuf's shirt!",
        "imagePrompt": "family reunion"
      },
      {
        "text": "Before Ya'qub passed away, he gathered all his sons and reminded them to worship only Allah and to stay together as believers. He was buried next to his father Ishaq and grandfather Ibrahim in Hebron.",
        "imagePrompt": "father giving advice"
      }
    ],
    "lessons": [
      "Never lose hope, even in the darkest times",
      "Allah can reunite separated families",
      "Jealousy is a dangerous sin",
      "Trust in Allah's plan",
      "Keep family ties strong"
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
    "emoji": "👑",
    "color": "#EAB308",
    "bgGradient": "from-yellow-400 to-amber-500",
    "shortDescription": "The beautiful prophet who became a king in Egypt",
    "story": [
      {
        "text": "Prophet Yusuf (Joseph) was the son of Prophet Ya'qub. He was extremely handsome and Allah gave him the ability to interpret dreams. When he was young, he dreamed that eleven stars, the sun, and the moon were bowing to him!",
        "imagePrompt": "young man dreaming of stars bowing"
      },
      {
        "text": "His brothers were already jealous of him because their father loved him most. When Yusuf told them his dream, they became even more jealous. They plotted to get rid of him.",
        "imagePrompt": "jealous brothers plotting"
      },
      {
        "text": "The brothers took Yusuf to the desert and threw him into a deep well. Then they sold him as a slave to some travelers who were going to Egypt. They told their father that a wolf had eaten Yusuf.",
        "imagePrompt": "brothers lowering into well"
      },
      {
        "text": "In Egypt, Yusuf was bought by a rich man named Al-Aziz. Yusuf grew up to be very handsome and righteous. Al-Aziz's wife, Zulaikha, tried to trick Yusuf into doing bad things, but Yusuf refused!",
        "imagePrompt": "handsome young servant refusing temptation"
      },
      {
        "text": "When Yusuf refused, Zulaikha lied and got him thrown into prison! But even in prison, Yusuf stayed patient and continued to worship Allah. He became known for interpreting dreams correctly.",
        "imagePrompt": "prison but staying patient"
      },
      {
        "text": "The King of Egypt had a strange dream that no one could interpret. He dreamed about seven fat cows being eaten by seven thin cows, and seven green stalks of grain and seven dry ones.",
        "imagePrompt": "king's strange dream"
      },
      {
        "text": "Yusuf was brought from prison to interpret the dream. He said, 'There will be seven years of plenty followed by seven years of famine. Store grain during the good years!' The King was amazed by his wisdom.",
        "imagePrompt": "interpreting dream for king"
      },
      {
        "text": "The King made Yusuf the Minister of Egypt, giving him great power and authority! Yusuf managed the grain storage so well that Egypt had food when the famine came, while other lands starved.",
        "imagePrompt": "minister of Egypt"
      },
      {
        "text": "During the famine, Yusuf's brothers came to Egypt to buy food. They didn't recognize Yusuf, but he recognized them! After testing them to see if they had changed, Yusuf revealed himself and forgave them.",
        "imagePrompt": "brothers bowing to Yusuf"
      },
      {
        "text": "Yusuf brought his whole family to Egypt to live with him. He said to his brothers, 'There is no blame on you today. May Allah forgive you.' Yusuf's story teaches us about patience, forgiveness, and trusting Allah's plan!",
        "imagePrompt": "family reunion in palace"
      }
    ],
    "lessons": [
      "Be patient even in the worst situations",
      "Always stay righteous no matter what",
      "Forgiveness is a sign of strength",
      "Allah's plan is perfect even when we don't understand",
      "Good character will always be rewarded"
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
    "emoji": "💚",
    "color": "#22C55E",
    "bgGradient": "from-green-400 to-emerald-600",
    "shortDescription": "The prophet of patience who never complained despite severe trials",
    "story": [
      {
        "text": "Prophet Ayyub (Job) was a very wealthy and righteous man. Allah had blessed him with many animals, fertile land, and a loving family. He was grateful to Allah for all these blessings and always worshipped Him.",
        "imagePrompt": "wealthy man with blessings"
      },
      {
        "text": "Shaytan was jealous of Ayyub's devotion to Allah. He asked Allah for permission to test Ayyub. Allah allowed this test to show how patient and faithful Ayyub truly was.",
        "imagePrompt": "test being permitted"
      },
      {
        "text": "One by one, all of Ayyub's blessings were taken away. His animals died, his crops were destroyed, and his children were lost. But Ayyub remained patient and said, 'Surely, to Allah we belong and to Him we shall return.'",
        "imagePrompt": "losing everything but staying patient"
      },
      {
        "text": "Then Ayyub became very sick with a terrible disease. His skin became covered in sores, and he suffered great pain. Even his wife and friends began to doubt, but Ayyub never complained about Allah.",
        "imagePrompt": "sick but never complaining"
      },
      {
        "text": "Ayyub's friends came to visit him, but instead of comforting him, they said he must have done something wrong to deserve this! Ayyub defended his innocence and said he had always been faithful to Allah.",
        "imagePrompt": "friends accusing him"
      },
      {
        "text": "Despite all his suffering, Ayyub never lost faith. He prayed to Allah, 'Indeed, adversity has touched me, and You are the Most Merciful of the merciful.' This simple prayer showed his complete trust in Allah.",
        "imagePrompt": "praying in suffering"
      },
      {
        "text": "Allah answered Ayyub's prayer! He told Ayyub to stamp his foot on the ground, and a spring of cool water gushed out. Ayyub washed in this water and was completely healed by Allah's mercy!",
        "imagePrompt": "miraculous healing"
      },
      {
        "text": "Not only was Ayyub healed, but Allah restored all his blessings and gave him even more! He had new children, new wealth, and lived a long happy life. His story teaches us that patience is always rewarded!",
        "imagePrompt": "restored blessings"
      }
    ],
    "lessons": [
      "Patience during hardship is a great virtue",
      "Never complain about Allah's tests",
      "Allah tests those He loves",
      "Allah's mercy is greater than any hardship",
      "Stay grateful in good times and bad"
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
    "name": "Prophet Dhul-Kifl (AS)",
    "arabicName": "ذو الكفل",
    "emoji": "⚖️",
    "color": "#64748B",
    "bgGradient": "from-slate-400 to-gray-600",
    "shortDescription": "Known for keeping his promises and being just",
    "story": [
      {
        "text": "Prophet Dhul-Kifl was sent to guide his people to worship Allah alone. His name means 'the one with responsibility' because he was known for always keeping his promises and fulfilling his duties.",
        "imagePrompt": "wise leader keeping promises"
      },
      {
        "text": "Dhul-Kifl was known for his fairness and justice. When people had disputes, they would come to him because they knew he would judge fairly according to Allah's guidance.",
        "imagePrompt": "judge with scales of justice"
      },
      {
        "text": "He taught his people to be patient in hardship and to always speak the truth. He reminded them that Allah is always watching and that we will all be accountable for our actions.",
        "imagePrompt": "teaching patience and truth"
      },
      {
        "text": "Dhul-Kifl's people were tested with various trials, but he guided them to remain steadfast. He showed them that keeping faith in Allah during difficult times brings great rewards.",
        "imagePrompt": "community staying strong"
      }
    ],
    "lessons": [
      "Always keep your promises",
      "Be fair and just in all your dealings",
      "Patience brings rewards from Allah",
      "Speak the truth always",
      "Fulfill your responsibilities"
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
    "id": 14,
    "name": "Prophet Yunus (AS)",
    "arabicName": "يونس",
    "emoji": "🐋",
    "color": "#0EA5E9",
    "bgGradient": "from-sky-400 to-blue-600",
    "shortDescription": "The prophet who was swallowed by a giant fish",
    "story": [
      {
        "text": "Prophet Yunus (Jonah) was sent to the people of Nineveh. He called them to worship Allah, but they refused to listen. Yunus became frustrated and left without Allah's permission.",
        "imagePrompt": "prophet leaving city frustrated"
      },
      {
        "text": "He boarded a ship, but a terrible storm came. The sailors drew lots, and Yunus was chosen to leave. He jumped into the sea, and a giant fish swallowed him.",
        "imagePrompt": "giant fish swallowing"
      },
      {
        "text": "Inside the fish's belly, in complete darkness, Yunus realized his mistake. He called out to Allah with a very special prayer: 'There is no god but You. Glory be to You. Indeed, I have been of the wrongdoers.'",
        "imagePrompt": "praying in darkness"
      },
      {
        "text": "Allah heard Yunus's prayer and forgave him! The fish swam to the shore and spit Yunus out onto the beach. Yunus was weak but alive, and his skin had become smooth and shiny!",
        "imagePrompt": "fish spitting onto beach"
      },
      {
        "text": "Allah caused a gourd vine to grow over Yunus to give him shade. After he recovered, Yunus returned to his people. This time, they all listened to him and believed!",
        "imagePrompt": "returning to people who now listen"
      }
    ],
    "lessons": [
      "Never give up on calling people to Allah",
      "Always ask Allah for forgiveness",
      "Allah's mercy is greater than any mistake",
      "Be patient even when things are difficult",
      "Allah can save us from any situation"
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Which city was Yunus sent to?",
        "options": [
          "Makkah",
          "Nineveh",
          "Madinah",
          "Jerusalem"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
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
        "id": 3,
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
        "id": 4,
        "question": "What grew to shade Yunus on the beach?",
        "options": [
          "A tree",
          "A gourd vine",
          "Flowers",
          "Grass"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": 15,
    "name": "Prophet Musa (AS)",
    "arabicName": "موسى",
    "emoji": "🌊",
    "color": "#8B5CF6",
    "bgGradient": "from-violet-400 to-purple-600",
    "shortDescription": "Spoke directly to Allah and parted the Red Sea",
    "story": [
      {
        "text": "Long ago in Egypt, there was a cruel king called Pharaoh who said he was a god! He made the Israelites his slaves and was very cruel to them. Allah decided to send a prophet to free them.",
        "imagePrompt": "cruel pharaoh with slaves"
      },
      {
        "text": "Allah chose Musa (Moses). When Musa was a baby, Pharaoh ordered all Israelite baby boys to be killed! Musa's mother put him in a basket in the Nile River. The basket floated to Pharaoh's palace!",
        "imagePrompt": "baby in basket to palace"
      },
      {
        "text": "Pharaoh's wife, Queen Asiya, found the baby and wanted to keep him. She was a kind believer in Allah. Musa's sister suggested a nurse - and brought their own mother! So Musa's mother raised him in the palace!",
        "imagePrompt": "queen finding baby"
      },
      {
        "text": "When Musa grew up, he saw an Egyptian hurting an Israelite. Musa tried to help and accidentally hurt the Egyptian. He had to flee Egypt and traveled to Madyan.",
        "imagePrompt": "fleeing to Madyan"
      },
      {
        "text": "In Madyan, Musa helped some shepherd girls and married one of them. While traveling with his family, he saw a fire on a mountain. He went closer and found it was no ordinary fire!",
        "imagePrompt": "fire on mountain"
      },
      {
        "text": "Allah spoke directly to Musa from a burning bush! 'I am your Lord. Take off your shoes. You are in the holy valley.' Musa was amazed. Allah gave him a mission: 'Go to Pharaoh and free my people!'",
        "imagePrompt": "burning bush revelation"
      },
      {
        "text": "Allah gave Musa miracles - his staff could turn into a snake, and his hand could glow! Musa and his brother Haroon went to Pharaoh and said, 'Let the Israelites go free!'",
        "imagePrompt": "staff becoming snake"
      },
      {
        "text": "Pharaoh called his magicians to compete. Their ropes looked like snakes, but Musa's staff became a huge snake that ate their tricks! The magicians fell down and believed in Allah immediately!",
        "imagePrompt": "snake eating magic"
      },
      {
        "text": "Pharaoh still refused! Allah sent many signs - the Nile turned to blood, locusts came, frogs covered the land. But Pharaoh's heart was hard. Finally, Allah told Musa to take his people and leave quickly!",
        "imagePrompt": "plagues in Egypt"
      },
      {
        "text": "Pharaoh chased them with his army. Musa and the Israelites reached the Red Sea - nowhere to go! Musa trusted Allah and struck the sea with his staff. The sea split into two walls with dry land between!",
        "imagePrompt": "sea splitting miracle"
      },
      {
        "text": "The Israelites crossed safely. When Pharaoh's army followed, the water crashed down and drowned them all! Allah saved Musa and his people from the cruel tyrant.",
        "imagePrompt": "army drowning"
      },
      {
        "text": "Later, Allah invited Musa to Mount Sinai to speak with Him directly. Musa wanted to see Allah, but Allah said, 'Look at the mountain.' When Allah showed a tiny bit of His glory, the mountain crumbled to dust!",
        "imagePrompt": "mountain crumbling"
      },
      {
        "text": "Allah gave Musa the Ten Commandments and the Torah on stone tablets. Musa was the only prophet who spoke directly to Allah. What an honor! He is one of the five greatest prophets in Islam.",
        "imagePrompt": "stone tablets with commandments"
      }
    ],
    "lessons": [
      "Allah protects those who trust in Him",
      "Never be proud like Pharaoh",
      "Allah can make the impossible possible",
      "Be brave even when facing powerful enemies",
      "Allah's power is greater than any magic"
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
    "id": 16,
    "name": "Prophet Haroon (AS)",
    "arabicName": "هارون",
    "emoji": "🗣️",
    "color": "#EC4899",
    "bgGradient": "from-pink-400 to-rose-500",
    "shortDescription": "The brother of Musa who helped him speak to Pharaoh",
    "story": [
      {
        "text": "Prophet Haroon (Aaron) was the older brother of Prophet Musa. He was a very good speaker, while Musa sometimes had difficulty speaking clearly. Allah chose Haroon to help Musa with his mission.",
        "imagePrompt": "two brothers together"
      },
      {
        "text": "When Allah spoke to Musa at the burning bush, He commanded Musa to take Haroon with him to Pharaoh. Allah said, 'We will strengthen your arm through your brother, and give you both power.'",
        "imagePrompt": "divine command at burning bush"
      },
      {
        "text": "Haroon stood by Musa's side when they faced Pharaoh. He helped Musa explain Allah's message clearly. Pharaoh was amazed by their courage and the miracles they showed.",
        "imagePrompt": "brothers before pharaoh"
      },
      {
        "text": "When Musa went to Mount Sinai to speak with Allah, he left Haroon in charge of the Israelites. Unfortunately, some people made a golden calf to worship while Musa was away.",
        "imagePrompt": "golden calf worship"
      },
      {
        "text": "Haroon tried to stop them, but they wouldn't listen. When Musa returned and was angry, Haroon explained that he had tried his best to stop them. Musa understood and prayed for forgiveness for both of them.",
        "imagePrompt": "explanation and forgiveness"
      },
      {
        "text": "Haroon remained a faithful prophet and helper to Musa throughout their mission. He supported his brother and helped guide the Israelites to the Promised Land.",
        "imagePrompt": "guiding people together"
      }
    ],
    "lessons": [
      "Support your family in doing good",
      "Use your talents to help others",
      "Teamwork makes difficult tasks easier",
      "Stay faithful even when others make mistakes",
      "Communication is important in leadership"
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
    "id": 17,
    "name": "Prophet Dawud (AS)",
    "arabicName": "داود",
    "emoji": "🎵",
    "color": "#84CC16",
    "bgGradient": "from-lime-400 to-green-500",
    "shortDescription": "The prophet king who could soften iron and received the Psalms",
    "story": [
      {
        "text": "Prophet Dawud (David) was a righteous young man who lived in the land of Israel. He was a shepherd who took care of his father's sheep. Allah loved him for his sincerity and devotion.",
        "imagePrompt": "young shepherd with sheep"
      },
      {
        "text": "One day, the Israelites were challenged by a giant warrior named Jalut (Goliath). No one dared to fight him. Dawud, though young and small, believed in Allah's power and volunteered.",
        "imagePrompt": "small vs giant"
      },
      {
        "text": "Dawud picked up his slingshot and five smooth stones. He prayed to Allah for help and flung a stone at Jalut. The stone hit Jalut's forehead, and the giant fell down defeated!",
        "imagePrompt": "slingshot victory"
      },
      {
        "text": "Allah made Dawud a king after this victory. But Dawud was not just a warrior - Allah gave him the ability to soften iron with his hands! He would make beautiful armor and weapons.",
        "imagePrompt": "softening iron"
      },
      {
        "text": "Allah also gave Dawud the Zabur (Psalms), a beautiful book of songs and prayers. Dawud had a wonderful voice and would sing the praises of Allah. When he sang, even the mountains and birds would join him!",
        "imagePrompt": "singing with nature"
      },
      {
        "text": "Dawud was a just king who judged fairly between people. He would listen to both sides of any argument before making a decision. His kingdom was peaceful and prosperous.",
        "imagePrompt": "just king judging"
      },
      {
        "text": "Dawud was known for his fasting and prayer. He would spend a lot of time worshipping Allah. He taught his people to be grateful for Allah's blessings and to always seek forgiveness.",
        "imagePrompt": "king in prayer"
      }
    ],
    "lessons": [
      "Trust in Allah even against big challenges",
      "Use your special gifts to serve Allah",
      "Be a just and fair leader",
      "Music and singing can be forms of worship",
      "Stay humble even when you achieve great things"
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
    "emoji": "👑",
    "color": "#EAB308",
    "bgGradient": "from-yellow-400 to-amber-500",
    "shortDescription": "The prophet king who could speak to animals and control the jinn",
    "story": [
      {
        "text": "Prophet Sulayman (Solomon) was the son of Prophet Dawud. He became king after his father and Allah gave him amazing powers! He could understand the language of birds and animals, and he could control the jinn.",
        "imagePrompt": "king with animals and jinn"
      },
      {
        "text": "Once, Sulayman was reviewing his army of jinn, birds, and humans. He noticed the hoopoe bird was missing. Soon, the hoopoe returned with amazing news about a queen named Bilqis in the land of Saba (Sheba).",
        "imagePrompt": "hoopoe bringing news"
      },
      {
        "text": "The hoopoe told Sulayman that Bilqis and her people worshipped the sun instead of Allah! Sulayman decided to invite her to submit to Allah. He sent the hoopoe with a letter.",
        "imagePrompt": "bird carrying letter"
      },
      {
        "text": "Queen Bilqis was wise. She consulted her advisors and decided to visit Sulayman to learn more. She brought many gifts and traveled with a great caravan.",
        "imagePrompt": "queen with caravan"
      },
      {
        "text": "Sulayman wanted to show her Allah's power. He asked his jinn servants, 'Who can bring me her throne before she arrives?' A powerful jinn said, 'I can bring it before you rise from your seat!'",
        "imagePrompt": "jinn competing"
      },
      {
        "text": "But one who had knowledge from Allah's Book said, 'I can bring it in the blink of an eye!' And suddenly, the throne appeared before Sulayman! He had it slightly changed to test if Bilqis would recognize it.",
        "imagePrompt": "throne appearing instantly"
      },
      {
        "text": "When Bilqis arrived, she was amazed to see her own throne there! She realized Sulayman's kingdom was truly blessed by Allah. Sulayman showed her even more miracles.",
        "imagePrompt": "queen amazed"
      },
      {
        "text": "Sulayman had a palace with a glass floor that looked like water! When Bilqis saw it, she lifted her dress thinking it was water. Sulayman smiled and said, 'This is just glass.'",
        "imagePrompt": "glass floor palace"
      },
      {
        "text": "Queen Bilqis was convinced. She said, 'I submit with Sulayman to Allah, the Lord of all worlds.' She became a believer and her people followed her. Sulayman's wisdom had guided them to the truth!",
        "imagePrompt": "queen submitting"
      },
      {
        "text": "Sulayman ruled with justice and wisdom. He built great structures and ships. He taught his people to worship Allah alone. He is remembered as one of the greatest kings in history.",
        "imagePrompt": "great kingdom"
      }
    ],
    "lessons": [
      "Use your abilities to guide people to Allah",
      "Wisdom is better than strength",
      "Be just and fair to everyone",
      "Knowledge is a gift from Allah",
      "Leadership is a responsibility"
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
    "emoji": "🔥",
    "color": "#DC2626",
    "bgGradient": "from-red-400 to-rose-600",
    "shortDescription": "The prophet who called people to worship only Allah in Baalbek",
    "story": [
      {
        "text": "Prophet Ilyas (Elijah) was sent to the people of Baalbek, a city where people worshipped a false god named Baal. They had forgotten about Allah and were doing many bad things.",
        "imagePrompt": "people worshipping false god"
      },
      {
        "text": "Ilyas called the people to worship only Allah. He told them that Baal was just a statue that couldn't hear or help them. He challenged the priests of Baal to a contest on a mountain.",
        "imagePrompt": "prophet challenging priests"
      },
      {
        "text": "The priests of Baal prayed and danced around their altar all day, but nothing happened. They even cut themselves with knives, but Baal did not answer because Baal was not real.",
        "imagePrompt": "priests praying to nothing"
      },
      {
        "text": "Then Ilyas prepared his altar. He even poured water on it to make it harder! He prayed to Allah, and immediately fire came down from the sky and burned everything - the sacrifice, the wood, the stones, and even the water!",
        "imagePrompt": "fire from heaven"
      },
      {
        "text": "The people fell down and said, 'Allah is the true God!' But soon they forgot again and went back to their old ways. Ilyas was very sad that people kept forgetting Allah's signs.",
        "imagePrompt": "people forgetting again"
      },
      {
        "text": "Allah raised Ilyas up to heaven while he was still alive, in a whirlwind of fire! He will return before the Day of Judgment to help defeat the false messiah (Dajjal).",
        "imagePrompt": "ascending in fire"
      }
    ],
    "lessons": [
      "False gods have no power",
      "Allah's power is shown through miracles",
      "Don't keep forgetting Allah's signs",
      "Stay firm even when others waver",
      "True faith requires consistency"
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
    "name": "Prophet Alyasa (AS)",
    "arabicName": "اليسع",
    "emoji": "💫",
    "color": "#8B5CF6",
    "bgGradient": "from-violet-400 to-purple-600",
    "shortDescription": "The successor of Ilyas who continued his mission",
    "story": [
      {
        "text": "Prophet Alyasa (Elisha) was the successor of Prophet Ilyas. When Ilyas was taken up to heaven, his cloak fell to Alyasa, and Allah gave him the same prophetic mission to guide the people.",
        "imagePrompt": "cloak falling from heaven"
      },
      {
        "text": "Alyasa continued calling the people of Israel to worship only Allah. He performed miracles to show Allah's power and mercy. He could heal the sick and help people in need.",
        "imagePrompt": "healing the sick"
      },
      {
        "text": "Once, some poor people came to Alyasa saying they had nothing to pay their debts except a small pot of oil. Alyasa told them to borrow many empty pots from their neighbors.",
        "imagePrompt": "poor family with oil pot"
      },
      {
        "text": "Alyasa told them to pour their little oil into all the borrowed pots. Miraculously, the oil kept flowing until every pot was full! They could sell the oil and pay their debts, and still have plenty left!",
        "imagePrompt": "oil filling many pots"
      },
      {
        "text": "Alyasa taught his people to be kind to the poor and to trust in Allah's provision. He showed them that Allah can provide from sources they never expected.",
        "imagePrompt": "teaching kindness"
      }
    ],
    "lessons": [
      "Continue the good work of those before you",
      "Help those in need",
      "Trust in Allah's provision",
      "Small things can become big blessings",
      "Community should support each other"
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
    "emoji": "🐋",
    "color": "#0EA5E9",
    "bgGradient": "from-sky-400 to-blue-600",
    "shortDescription": "The prophet who was swallowed by a giant fish and forgave his people",
    "story": [
      {
        "text": "Prophet Yunus (Jonah) was sent to the people of Nineveh. He called them to worship Allah, but they refused to listen. Yunus became frustrated and left without Allah's permission.",
        "imagePrompt": "prophet leaving frustrated"
      },
      {
        "text": "He boarded a ship, but a terrible storm came. The sailors drew lots, and Yunus was chosen to leave. He jumped into the sea, and a giant fish swallowed him.",
        "imagePrompt": "giant fish swallowing"
      },
      {
        "text": "Inside the fish's belly, in complete darkness, Yunus realized his mistake. He prayed sincerely: 'There is no god but You. Glory be to You. Indeed, I have been of the wrongdoers.'",
        "imagePrompt": "praying in darkness"
      },
      {
        "text": "Allah forgave him! The fish swam to the shore and spit Yunus out onto the beach. Yunus was weak but alive, and his skin had become smooth and shiny from the fish's stomach juices!",
        "imagePrompt": "fish spitting onto beach"
      },
      {
        "text": "Allah caused a gourd vine to grow over Yunus to give him shade. After he recovered, Yunus returned to his people. This time, they all listened to him and believed! Allah forgave them too.",
        "imagePrompt": "people now believing"
      }
    ],
    "lessons": [
      "Never give up on calling people to Allah",
      "Always ask Allah for forgiveness",
      "Allah's mercy is greater than any mistake",
      "Forgive others when they repent",
      "Allah can save us from any situation"
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
    "name": "Prophet Zakariya (AS)",
    "arabicName": "زكريا",
    "emoji": "🙏",
    "color": "#10B981",
    "bgGradient": "from-emerald-400 to-teal-500",
    "shortDescription": "The prophet who was blessed with a son in old age",
    "story": [
      {
        "text": "Prophet Zakariya (Zechariah) was a righteous priest who served in the temple. He took care of Maryam, the mother of Isa, and taught her about Allah.",
        "imagePrompt": "priest teaching Maryam"
      },
      {
        "text": "Zakariya and his wife were very old and had no children. He prayed to Allah for a child who would continue his work. Even though he was old, he never lost hope in Allah's power.",
        "imagePrompt": "elderly couple praying"
      },
      {
        "text": "Allah answered his prayer! The angels told Zakariya he would have a son named Yahya (John). Zakariya was amazed and asked, 'How can I have a son when I am so old?'",
        "imagePrompt": "angel bringing news"
      },
      {
        "text": "The angel said, 'Allah does what He wills.' To help Zakariya believe, the angel made him unable to speak for three days as a sign. Zakariya came out of the temple and communicated with signs.",
        "imagePrompt": "unable to speak as sign"
      },
      {
        "text": "True to Allah's promise, Zakariya's wife became pregnant and gave birth to a beautiful baby boy named Yahya. Zakariya's speech returned, and he praised Allah for this wonderful blessing.",
        "imagePrompt": "newborn baby blessing"
      },
      {
        "text": "Yahya grew up to be a great prophet who called people to repent and prepare for the coming of Isa. Zakariya was so happy to see his son serving Allah.",
        "imagePrompt": "son serving Allah"
      }
    ],
    "lessons": [
      "Never lose hope in Allah's mercy",
      "Allah can do anything - even the impossible",
      "Pray sincerely and Allah will answer",
      "Children who serve Allah are a great blessing",
      "Trust in Allah's timing"
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
    "emoji": "🕊️",
    "color": "#06B6D4",
    "bgGradient": "from-cyan-400 to-blue-500",
    "shortDescription": "The prophet who was gentle and never disobeyed his parents",
    "story": [
      {
        "text": "Prophet Yahya (John the Baptist) was the son of Prophet Zakariya. He was born miraculously when his parents were very old. Allah made him wise and gentle from childhood.",
        "imagePrompt": "miraculous baby"
      },
      {
        "text": "Yahya was known for being very kind and gentle. He never disobeyed his parents and was always respectful. He was also very humble and never sought power or wealth.",
        "imagePrompt": "gentle and respectful"
      },
      {
        "text": "Allah gave Yahya wisdom even as a child. He would spend time in prayer and fasting. He called people to repent and prepare for the coming of Prophet Isa.",
        "imagePrompt": "young prophet teaching"
      },
      {
        "text": "Yahya was brave and spoke the truth even to powerful people. When a king wanted to marry a woman he wasn't allowed to marry, Yahya told him it was wrong, even though it was dangerous.",
        "imagePrompt": "speaking truth to king"
      },
      {
        "text": "Because of his truthfulness, Yahya was martyred. But he is honored in heaven and remembered as a great prophet who always stood for what was right.",
        "imagePrompt": "honored in heaven"
      }
    ],
    "lessons": [
      "Always be kind and gentle",
      "Never disobey your parents",
      "Speak the truth even when it's difficult",
      "Humility is a great virtue",
      "Stand up for what is right"
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
    "emoji": "👶",
    "color": "#10B981",
    "bgGradient": "from-teal-400 to-emerald-500",
    "shortDescription": "Born miraculously and spoke as a baby, raised the dead by Allah's will",
    "story": [
      {
        "text": "Maryam was a very special and pious woman who dedicated her life to worshipping Allah. She grew up in the temple under the care of Prophet Zakariya. Allah loved Maryam very much.",
        "imagePrompt": "pious Maryam worshipping"
      },
      {
        "text": "One day, while Maryam was alone, Angel Jibreel came to her looking like a handsome man. Maryam was scared and said, 'I seek refuge with Allah from you!'",
        "imagePrompt": "angel appearing to Maryam"
      },
      {
        "text": "The angel said, 'I am a messenger from Allah bringing good news of a son named Isa. He will be honored and among those close to Allah.' Maryam asked, 'How can I have a son when no man has touched me?'",
        "imagePrompt": "miraculous announcement"
      },
      {
        "text": "The angel replied, 'Allah says it is easy for Him. He will make Isa a sign and a mercy.' By Allah's power alone, Maryam became pregnant with Prophet Isa!",
        "imagePrompt": "divine miracle"
      },
      {
        "text": "When it was time for the baby, Maryam went to a quiet place. Allah made a stream flow and told her to shake a palm tree for fresh dates. After Isa was born, something amazing happened!",
        "imagePrompt": "palm tree with dates"
      },
      {
        "text": "Baby Isa spoke from his cradle! He said, 'I am a servant of Allah. He gave me the Book and made me a prophet. He made me blessed wherever I am.' Everyone was shocked!",
        "imagePrompt": "baby speaking from cradle"
      },
      {
        "text": "Isa grew up to be a wise prophet. Allah gave him many miracles - he could heal the sick, make the blind see, and even bring dead people back to life - all by Allah's power and permission!",
        "imagePrompt": "healing miracles"
      },
      {
        "text": "Isa taught people to worship only Allah. He said, 'Allah is my Lord and your Lord, so worship Him alone.' He also taught kindness, helping the poor, and loving one another.",
        "imagePrompt": "teaching worship"
      },
      {
        "text": "Some people plotted to kill Isa, but Allah had a different plan! Allah raised Isa up to heaven while he was still alive. Someone else was made to look like him, and the enemies thought they had killed him.",
        "imagePrompt": "ascending to heaven"
      },
      {
        "text": "Muslims believe Isa will return before the Day of Judgment. He will establish justice and peace, and prove that he was always a prophet of Allah, not God or son of God. He is called Al-Masih (the Messiah).",
        "imagePrompt": "future return"
      }
    ],
    "lessons": [
      "Allah can do anything - even make a baby speak!",
      "Trust Allah even in difficult times",
      "Always speak the truth like baby Isa did",
      "Be kind and help those in need",
      "Worship only Allah, not anyone else"
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
    "name": "Prophet Muhammad (SAW)",
    "arabicName": "محمد",
    "emoji": "☪️",
    "color": "#14B8A6",
    "bgGradient": "from-teal-500 to-cyan-600",
    "shortDescription": "The final messenger who brought the Quran, mercy to all worlds",
    "story": [
      {
        "text": "Prophet Muhammad (Peace Be Upon Him) was born in Makkah over 1400 years ago. His father died before he was born, and his mother died when he was six. His grandfather and then his uncle Abu Talib raised him.",
        "imagePrompt": "baby in Makkah"
      },
      {
        "text": "Muhammad grew up to be known as 'Al-Amin' - The Trustworthy. Everyone trusted him because he was always honest, kind, and fair. People brought their problems to him because they knew he would be just.",
        "imagePrompt": "trustworthy young man"
      },
      {
        "text": "Muhammad would go to a cave called Hira to think and pray. He wanted to understand life's purpose and worship Allah correctly. When he was 40, something amazing happened!",
        "imagePrompt": "cave of Hira"
      },
      {
        "text": "Angel Jibreel came to him and said, 'Read!' Muhammad said, 'I cannot read.' The angel hugged him tightly and said again, 'Read!' After three times, the angel recited the first verses of the Quran!",
        "imagePrompt": "first revelation"
      },
      {
        "text": "Muhammad was scared and ran to his wife Khadijah. She comforted him and was the first to believe. She said, 'Allah will never let you down. You are kind to family and help the poor.'",
        "imagePrompt": "Khadijah comforting"
      },
      {
        "text": "Slowly, more people believed - Abu Bakr, Ali, and others. But Makkah's leaders didn't like this message of equality. They started hurting the Muslims, throwing trash on the Prophet and even killing some.",
        "imagePrompt": "early persecution"
      },
      {
        "text": "Allah commanded the Muslims to move to Madinah. This journey, called the Hijrah, marks the Islamic calendar's beginning. In Madinah, the Prophet built the first mosque and established peace.",
        "imagePrompt": "journey to Madinah"
      },
      {
        "text": "Different religions lived together peacefully under the Prophet's leadership. He made treaties protecting everyone's rights, showing Islam is a religion of peace and justice.",
        "imagePrompt": "peaceful community"
      },
      {
        "text": "Makkah attacked the Muslims many times, but Allah helped them defend themselves. Eventually, the Prophet returned with 10,000 followers. The people expected punishment, but he said, 'Go, you are free.'",
        "imagePrompt": "conquest with mercy"
      },
      {
        "text": "The Prophet performed his only Hajj, teaching Muslims how to do it. In his Farewell Sermon, he said, 'All people are equal. No Arab is better than a non-Arab, no white better than black.'",
        "imagePrompt": "farewell sermon"
      },
      {
        "text": "The Prophet received the complete Quran over 23 years. It is Allah's final book, protected forever. He is called 'Rahmatul lil Alameen' - a mercy to all worlds including humans, animals, and everything!",
        "imagePrompt": "complete Quran"
      },
      {
        "text": "Prophet Muhammad (SAW) is the last and final prophet. No prophet will come after him. He is the best example for all Muslims. We love him most and say 'Sallallahu Alayhi Wasallam' - Peace and blessings be upon him!",
        "imagePrompt": "final prophet"
      }
    ],
    "lessons": [
      "Always be honest and trustworthy",
      "Be patient even when people are mean to you",
      "Forgive others and be kind",
      "All people are equal in Allah's sight",
      "Follow the Prophet's example in everything"
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
