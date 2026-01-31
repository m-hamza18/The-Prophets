import { motion } from 'framer-motion';
import { type ProphetStory } from '@/data/prophets';
import { Lock, CheckCircle, Star, Play } from 'lucide-react';

interface ProphetCardProps {
  prophet: ProphetStory;
  isLocked: boolean;
  isCompleted: boolean;
  score: number;
  onClick: () => void;
  index: number;
}

export function ProphetCard({ 
  prophet, 
  isLocked, 
  isCompleted, 
  score, 
  onClick, 
  index 
}: ProphetCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      whileHover={!isLocked ? { 
        scale: 1.05,
        y: -5,
      } : {}}
      whileTap={!isLocked ? { scale: 0.98 } : {}}
      onClick={!isLocked ? onClick : undefined}
      disabled={isLocked}
      className={`
        relative overflow-hidden rounded-3xl p-6
        ${isLocked 
          ? 'bg-gray-800/50 border-2 border-gray-600/50 cursor-not-allowed' 
          : `bg-gradient-to-br ${prophet.bgGradient} border-2 border-white/30 cursor-pointer`
        }
        shadow-lg transition-all duration-300
        group
      `}
    >
      {/* Status Badge */}
      <div className="absolute top-3 right-3 z-10">
        {isCompleted ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-white/90 rounded-full p-2 shadow-lg"
          >
            <CheckCircle className="w-6 h-6 text-green-600" />
          </motion.div>
        ) : isLocked ? (
          <div className="bg-gray-700/80 rounded-full p-2">
            <Lock className="w-6 h-6 text-gray-400" />
          </div>
        ) : (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-white/90 rounded-full p-2 shadow-lg"
          >
            <Play className="w-6 h-6 text-amber-600" />
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Emoji */}
        <motion.div
          className="text-7xl mb-4"
          animate={!isLocked ? {
            y: [0, -8, 0],
            rotate: [0, 5, -5, 0],
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {prophet.emoji}
        </motion.div>

        {/* Arabic Name */}
        <p className={`text-2xl font-bold mb-1 ${isLocked ? 'text-gray-500' : 'text-white/90'}`}>
          {prophet.arabicName}
        </p>

        {/* English Name */}
        <h3 className={`text-xl font-bold mb-3 ${isLocked ? 'text-gray-400' : 'text-white'}`}>
          {prophet.name}
        </h3>

        {/* Description */}
        <p className={`text-sm mb-4 line-clamp-2 ${isLocked ? 'text-gray-500' : 'text-white/80'}`}>
          {prophet.shortDescription}
        </p>

        {/* Score Display */}
        {isCompleted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2"
          >
            <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
            <span className="text-white font-bold">{score}/5</span>
          </motion.div>
        )}

        {/* Locked Message */}
        {isLocked && (
          <p className="text-gray-500 text-sm mt-2">
            Complete previous story to unlock
          </p>
        )}
      </div>

      {/* Shine Effect */}
      {!isLocked && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                     -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        />
      )}
    </motion.button>
  );
}
