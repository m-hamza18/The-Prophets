import { motion } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CelebrationProps {
  onRestart: () => void;
}

export function Celebration({ onRestart }: CelebrationProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: typeof window !== 'undefined' ? window.innerHeight + 50 : 800,
            }}
            animate={{
              y: -100,
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-white/40" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative z-10 text-center px-4"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <div className="bg-white/20 rounded-full p-10 backdrop-blur-md">
            <Star className="w-32 h-32 text-yellow-300 fill-yellow-300" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          MashaAllah!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-2xl text-white/90 mb-4"
        >
          You have completed all the stories!
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-lg text-white/70 mb-8 max-w-xl mx-auto"
        >
          You have learned about all the amazing prophets and their beautiful stories.
          May Allah bless you with knowledge and understanding!
        </motion.p>

        {/* Stars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex justify-center gap-4 mb-10"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
            >
              <Star className="w-12 h-12 text-yellow-300 fill-yellow-300" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Button
            onClick={onRestart}
            size="lg"
            className="rounded-full px-10 py-6 text-xl bg-white text-emerald-700 hover:bg-gray-100 font-bold shadow-xl"
          >
            <Sparkles className="w-6 h-6 mr-3" />
            Start Again
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
