import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type ProphetStory } from '@/data/prophets';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Lightbulb, Sparkles } from 'lucide-react';

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

  // Generate image URL based on prophet name
  const getImageUrl = () => {
    const nameWithoutSuffix = prophet.name.toLowerCase()
      .replace(' (as)', '')
      .replace(' (saw)', '')
      .replace('prophet', '')
      .trim();
    const prophetKey = nameWithoutSuffix.replace(/[^a-z]/g, '');
    const base = import.meta.env.BASE_URL;
    return `${base}images/prophets/${prophetKey}-1.jpg`;
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
              <Sparkles className="w-12 h-12 text-yellow-300 mx-auto" />
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
            <span className="text-2xl font-bold text-white">{prophet.arabicName}</span>
          </div>
          <div className="w-20" />
        </div>
      </div>

      {/* Immersive Story Card */}
      <div className="relative min-h-[450px] md:min-h-[600px] w-full bg-black rounded-3xl overflow-hidden shadow-2xl mb-6 group">

        {/* Full Background Image */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentPage}
              src={getImageUrl()}
              alt={`Illustration for ${prophet.name}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.className = `absolute inset-0 bg-gradient-to-br ${prophet.bgGradient} flex items-center justify-center`;
                  // Fallback to a logo or icon instead of emoji if image fails
                  if (!parent.querySelector('.fallback-icon')) {
                    const icon = document.createElement('div');
                    icon.className = 'fallback-icon text-white/20 transform scale-150';
                    icon.innerHTML = '<svg viewBox="0 0 24 24" width="100" height="100" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z"></path><path d="M8 6h9"></path><path d="M8 10h9"></path><path d="M8 14h9"></path></svg>';
                    parent.appendChild(icon);
                  }
                }
              }}
            />
          </AnimatePresence>

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col p-4 md:p-10 pointer-events-none">
          {/* Spacer to push content down but keep it scrollable if too long */}
          <div className="flex-grow" />

          {/* Text Card */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-black/70 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl max-h-[75%] overflow-y-auto scrollbar-hide pointer-events-auto"
              >
                <p className="text-lg md:text-2xl leading-relaxed text-white font-medium drop-shadow-md pb-2">
                  {currentSection.text}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress Indicator */}
            <div className="mt-6 flex items-center justify-between text-white/60 text-sm">
              <div className="flex gap-1.5">
                {prophet.story.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentPage
                      ? 'w-8 bg-white'
                      : 'w-1.5 bg-white/30'
                      }`}
                  />
                ))}
              </div>
              <span className="bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                {currentPage + 1} / {totalPages}
              </span>
            </div>
          </div>
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
              className={`w-3 h-3 rounded-full transition-colors ${index === currentPage
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
