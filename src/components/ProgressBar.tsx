import { motion } from 'framer-motion';
import { prophets } from '@/data/prophets';

interface ProgressBarProps {
  completedStories: number[];
  currentStory: number;
}

export function ProgressBar({ completedStories, currentStory }: ProgressBarProps) {
  const progress = (completedStories.length / prophets.length) * 100;

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-white/80 text-sm font-medium">Your Journey</span>
        <span className="text-white font-bold">
          {completedStories.length} / {prophets.length} Stories
        </span>
      </div>
      
      {/* Progress Track */}
      <div className="relative h-4 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      {/* Story Indicators */}
      <div className="flex justify-between mt-3">
        {prophets.map((prophet, index) => {
          const isCompleted = completedStories.includes(prophet.id);
          const isCurrent = currentStory === prophet.id;
          const isLocked = !isCompleted && !isCurrent && index > 0 && !completedStories.includes(prophets[index - 1].id);

          return (
            <motion.div
              key={prophet.id}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center text-lg
                transition-all duration-300
                ${isCompleted 
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/50' 
                  : isCurrent
                    ? 'bg-amber-400 text-amber-900 shadow-lg shadow-amber-400/50 ring-4 ring-amber-400/30'
                    : isLocked
                      ? 'bg-gray-700 text-gray-500'
                      : 'bg-white/20 text-white/60'
                }
              `}
              animate={isCurrent ? {
                scale: [1, 1.1, 1],
              } : {}}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              title={prophet.name}
            >
              {isCompleted ? '✓' : prophet.emoji}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
