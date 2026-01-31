import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type ProphetStory } from '@/data/prophets';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, BookOpen, Lightbulb, Sparkles } from 'lucide-react';

interface StoryViewerProps {
  prophet: ProphetStory;
  onComplete: () => void;
  onBack: () => void;
}

export function StoryViewer({ prophet, onComplete, onBack }: StoryViewerProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [showLessons, setShowLessons] = useState(false);

  const totalPages = prophet.story.length;
  const isLastPage = currentPage === totalPages - 1;
  const currentSection = prophet.story[currentPage];

  const handleNext = () => {
    if (isLastPage) {
      setShowLessons(true);
    } else {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const handleStartQuiz = () => {
    onComplete();
  };

  // Generate image URL based on prophet id and page
  const getImageUrl = () => {
    const prophetKey = prophet.name.toLowerCase().replace(/[^a-z]/g, '').replace('prophet', '');
    return `/images/prophets/${prophetKey}-${currentPage + 1}.jpg`;
  };

  if (showLessons) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-3xl mx-auto"
      >
        <div className={`bg-gradient-to-br ${prophet.bgGradient} rounded-3xl p-8 shadow-2xl`}>
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-6xl mb-4"
            >
              🌟
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-2">Lessons from {prophet.name}</h2>
            <p className="text-white/80">What can we learn from this story?</p>
          </div>

          <div className="space-y-4 mb-8">
            {prophet.lessons.map((lesson, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 flex items-start gap-4"
              >
                <div className="bg-white/30 rounded-full p-2 flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-yellow-300" />
                </div>
                <p className="text-white text-lg font-medium">{lesson}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              onClick={() => setShowLessons(false)}
              className="rounded-full px-6 bg-white/20 text-white border-white/30 hover:bg-white/30"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Story
            </Button>
            <Button
              onClick={handleStartQuiz}
              className="rounded-full px-8 bg-white text-gray-900 hover:bg-gray-100 font-bold"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Take the Quiz!
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${prophet.bgGradient} rounded-3xl p-6 mb-6 shadow-xl`}>
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
            Back
          </button>
          <div className="text-center">
            <span className="text-4xl mr-2">{prophet.emoji}</span>
            <span className="text-2xl font-bold text-white">{prophet.arabicName}</span>
          </div>
          <div className="w-20" />
        </div>
      </div>

      {/* Story Card with Image */}
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/50 mb-6">
        {/* Image Section */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={getImageUrl()}
            alt={`Illustration for ${prophet.name} story`}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to a gradient background if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.className = `h-64 md:h-80 bg-gradient-to-br ${prophet.bgGradient} flex items-center justify-center`;
                const emoji = document.createElement('span');
                emoji.className = 'text-8xl';
                emoji.textContent = prophet.emoji;
                parent.appendChild(emoji);
              }
            }}
          />
          {/* Text Overlay on Image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
            <div className="p-6 w-full">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-2">
                Part {currentPage + 1} of {totalPages}
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-6 pt-4">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <span className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Story Progress
            </span>
            <span>{currentPage + 1} of {totalPages}</span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${prophet.bgGradient}`}
              initial={{ width: 0 }}
              animate={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Story Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-medium">
                {currentSection.text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className="rounded-full px-6 disabled:opacity-50"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </Button>

        <div className="flex gap-2">
          {prophet.story.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentPage 
                  ? `bg-gradient-to-r ${prophet.bgGradient}` 
                  : index < currentPage 
                    ? 'bg-gray-400' 
                    : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={handleNext}
          className={`rounded-full px-6 bg-gradient-to-r ${prophet.bgGradient} text-white`}
        >
          {isLastPage ? (
            <>
              See Lessons
              <Sparkles className="w-5 h-5 ml-2" />
            </>
          ) : (
            <>
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
}
