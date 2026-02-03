import { motion } from 'framer-motion';
import { type Mood } from '@/data/moods';

interface MoodCardProps {
  mood: Mood;
  onClick: () => void;
  index: number;
}

export function MoodCard({ mood, onClick, index }: MoodCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{
        scale: 1.08,
        rotate: [0, -2, 2, 0],
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-2xl p-6 
        bg-gradient-to-br ${mood.bgGradient}
        shadow-lg hover:shadow-2xl
        transition-shadow duration-300
        group cursor-pointer
        border-2 border-white/20
        backdrop-blur-sm
      `}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            initial={{ y: 0, x: 0, opacity: 0, scale: 0.5 }}
            animate={{
              y: [-20, -100],
              x: [0, (i - 1) * 30],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut"
            }}
            style={{
              left: `${30 + i * 20}%`,
              bottom: '0%'
            }}
          />
        ))}
      </div>

      {/* Glow effect */}
      <div
        className="absolute -inset-1 bg-gradient-to-r from-white/0 via-white/30 to-white/0 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500
                   blur-xl"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="h-8" />
        <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">
          {mood.name}
        </h3>
        <p className="text-sm text-white/80 line-clamp-2">
          {mood.description}
        </p>
      </div>

      {/* Shine effect on hover */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                   -translate-x-full group-hover:translate-x-full transition-transform duration-700"
      />
    </motion.button>
  );
}
