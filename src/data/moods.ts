export interface Mood {
  id: string;
  name: string;
  color: string;
  bgGradient: string;
  jokes: string[];
  comforts: string[];
  description: string;
}

export const moods: Mood[] = [
  {
    id: "sad",
    name: "Sad",
    color: "#60A5FA",
    bgGradient: "from-blue-400 to-blue-600",
    description: "Feeling down? Let us lift your spirits!",
    jokes: [
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "What do you call a fish wearing a crown? A king fish!",
      "Why don't scientists trust atoms? Because they make up everything!",
      "What did the ocean say to the beach? Nothing, it just waved!",
      "Why did the cookie go to the doctor? Because it was feeling crumbly!"
    ],
    comforts: [
      "It's okay to feel sad. Remember, even the darkest night will end and the sun will rise.",
      "You're stronger than you know. This feeling is temporary, but your strength is permanent.",
      "Take a deep breath. You're doing better than you think you are.",
      "It's perfectly fine to not be okay sometimes. Be gentle with yourself.",
      "Your feelings are valid. Allow yourself to feel, and know that brighter days are ahead."
    ]
  },
  {
    id: "happy",
    name: "Happy",
    color: "#FBBF24",
    bgGradient: "from-yellow-400 to-orange-500",
    description: "Spreading joy? Here's more to celebrate!",
    jokes: [
      "Why did the bicycle fall over? Because it was two-tired!",
      "What do you call a bear with no teeth? A gummy bear!",
      "Why did the math book look so sad? Because it had too many problems!",
      "What do you call cheese that isn't yours? Nacho cheese!",
      "Why can't you give Elsa a balloon? Because she'll let it go!"
    ],
    comforts: [
      "Your happiness is contagious! Keep shining your beautiful light!",
      "Enjoy this moment fully. You deserve all the joy in the world!",
      "Your smile brightens the world around you. Never stop being you!",
      "Happiness looks amazing on you! Cherish these wonderful feelings!",
      "Keep riding this wave of joy. You've earned every bit of it!"
    ]
  },
  {
    id: "angry",
    name: "Angry",
    color: "#EF4444",
    bgGradient: "from-red-400 to-red-600",
    description: "Feeling frustrated? Let's cool things down!",
    jokes: [
      "Why did the tomato turn red? Because it saw the salad dressing!",
      "What do you call a fake noodle? An impasta!",
      "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
      "What do you call a sleeping dinosaur? A dino-snore!",
      "Why did the picture go to jail? Because it was framed!"
    ],
    comforts: [
      "Take a deep breath. It's okay to feel angry, but don't let it control you.",
      "Your feelings are valid. Sometimes we just need a moment to reset.",
      "Step back, breathe, and remember - this too shall pass.",
      "It's okay to be upset. Give yourself permission to feel and then let it go.",
      "Channel that energy into something positive. You're in control."
    ]
  },
  {
    id: "anxious",
    name: "Anxious",
    color: "#A78BFA",
    bgGradient: "from-purple-400 to-purple-600",
    description: "Feeling worried? Let's ease your mind!",
    jokes: [
      "Why don't eggs tell jokes? They'd crack each other up!",
      "What do you call a can opener that doesn't work? A can't opener!",
      "Why did the coffee file a police report? It got mugged!",
      "What do you call a dog that does magic tricks? A labracadabrador!",
      "Why did the banana go to the doctor? Because it wasn't peeling well!"
    ],
    comforts: [
      "Breathe in calm, breathe out worry. You've got through every bad day so far.",
      "Your anxiety is lying to you. You are capable, you are strong, you are enough.",
      "One step at a time. You don't have to see the whole staircase, just take the first step.",
      "This feeling will pass. You are safe, you are loved, you are doing great.",
      "Ground yourself in the present moment. Everything else is just a thought."
    ]
  },
  {
    id: "tired",
    name: "Tired",
    color: "#6B7280",
    bgGradient: "from-gray-400 to-gray-600",
    description: "Exhausted? Let's give you a little boost!",
    jokes: [
      "Why did the bed go to school? To learn how to make itself!",
      "What do you call a tired skeleton? Bone-weary!",
      "Why did the pillow go to therapy? It had too many emotional baggage!",
      "What do you call a sleeping pizza? A piZZZZa!",
      "Why don't scientists trust stairs? Because they're always up to something!"
    ],
    comforts: [
      "Rest is not a luxury, it's a necessity. Take care of yourself.",
      "You've been working hard. It's okay to pause and recharge.",
      "Your body is asking for rest. Listen to it with kindness.",
      "Even the mightiest warriors need rest. You're doing amazing.",
      "Take a break. The world can wait while you gather your strength."
    ]
  },
  {
    id: "excited",
    name: "Excited",
    color: "#F472B6",
    bgGradient: "from-pink-400 to-rose-500",
    description: "Full of energy? Let's amplify that excitement!",
    jokes: [
      "Why did the mushroom go to the party? Because he was a fungi!",
      "What do you call an alligator in a vest? An investigator!",
      "Why did the music teacher go to jail? Because she got caught with the wrong notes!",
      "What do you call a pile of cats? A meowtain!",
      "Why did the astronaut break up with his girlfriend? He needed space!"
    ],
    comforts: [
      "Your excitement is infectious! Share that energy with the world!",
      "Embrace this feeling! Great things are coming your way!",
      "Your enthusiasm is a gift. Never lose that spark!",
      "Ride that wave of excitement all the way to your dreams!",
      "This feeling of anticipation? It means something wonderful is about to happen!"
    ]
  },
  {
    id: "bored",
    name: "Bored",
    color: "#9CA3AF",
    bgGradient: "from-slate-400 to-slate-600",
    description: "Need some entertainment? We've got you covered!",
    jokes: [
      "Why did the belt go to jail? Because it held up a pair of pants!",
      "What do you call a lazy kangaroo? A pouch potato!",
      "Why did the clock go to the principal's office? It was tocking too much!",
      "What do you call a bear with no socks on? Bare-foot!",
      "Why did the pencil stink? Because it had a number two!"
    ],
    comforts: [
      "Boredom is just your mind asking for a new adventure. Try something new!",
      "This quiet moment is a canvas. Paint it with your imagination!",
      "Sometimes doing nothing is exactly what we need. Enjoy the stillness.",
      "Boredom breeds creativity. What will you create today?",
      "Take this time to discover something new about yourself."
    ]
  },
  {
    id: "lonely",
    name: "Lonely",
    color: "#818CF8",
    bgGradient: "from-indigo-400 to-indigo-600",
    description: "Feeling alone? Remember, you're never truly by yourself!",
    jokes: [
      "Why did the computer go to therapy? It had too many bytes of emotional baggage!",
      "What do you call a sad strawberry? A blueberry!",
      "Why did the ghost go to the party alone? Because he had no body to go with!",
      "What do you call a fish with no eyes? Fsh!",
      "Why did the smartphone need glasses? It lost all its contacts!"
    ],
    comforts: [
      "You are never truly alone. I'm here with you right now.",
      "Your worth isn't determined by how many people are around you. You are enough.",
      "This feeling is temporary. Connections come and go, but you remain wonderful.",
      "Reach out to someone you care about. They'd love to hear from you.",
      "Being alone doesn't mean you're unloved. You matter more than you know."
    ]
  }
];

export const getRandomItem = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};
