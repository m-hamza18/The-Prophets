import { useState } from 'react';
import { motion } from 'framer-motion';
import { prophets, type ProphetStory } from '@/data/prophets';
import { useProgress } from '@/hooks/useProgress';
import { ProphetCard } from '@/components/ProphetCard';
import { StoryViewer } from '@/components/StoryViewer';
import { Quiz } from '@/components/Quiz';
import { ProgressBar } from '@/components/ProgressBar';
import { Celebration } from '@/components/Celebration';
import { BookOpen, Star, RotateCcw, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ViewState = 'menu' | 'story' | 'quiz' | 'celebration';

function App() {
  const [viewState, setViewState] = useState<ViewState>('menu');
  const [selectedProphet, setSelectedProphet] = useState<ProphetStory | null>(null);
  
  const {
    progress,
    isLoaded,
    completeStory,
    setCurrentStory,
    isStoryCompleted,
    getStoryScore,
    canAccessStory,
    getOverallProgress,
    resetProgress,
  } = useProgress();

  const handleProphetSelect = (prophet: ProphetStory) => {
    if (canAccessStory(prophet.id)) {
      setSelectedProphet(prophet);
      setCurrentStory(prophet.id);
      setViewState('story');
    }
  };

  const handleStoryComplete = () => {
    setViewState('quiz');
  };

  const handleQuizComplete = (score: number) => {
    if (selectedProphet) {
      completeStory(selectedProphet.id, score);
      
      // Check if all stories are completed
      const newCompletedCount = progress.completedStories.length + 1;
      if (newCompletedCount >= prophets.length) {
        setViewState('celebration');
      } else {
        setViewState('menu');
        setSelectedProphet(null);
      }
    }
  };

  const handleBackToMenu = () => {
    setViewState('menu');
    setSelectedProphet(null);
  };

  const handleRestart = () => {
    resetProgress();
    setViewState('menu');
    setSelectedProphet(null);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-12 h-12 text-white" />
        </motion.div>
      </div>
    );
  }

  if (viewState === 'celebration') {
    return <Celebration onRestart={handleRestart} />;
  }

  if (viewState === 'story' && selectedProphet) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <StoryViewer
            prophet={selectedProphet}
            onComplete={handleStoryComplete}
            onBack={handleBackToMenu}
          />
        </div>
      </div>
    );
  }

  if (viewState === 'quiz' && selectedProphet) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Quiz
            prophet={selectedProphet}
            onComplete={handleQuizComplete}
            onBack={handleBackToMenu}
          />
        </div>
      </div>
    );
  }

  // Main Menu
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-emerald-500/20 blur-[100px]"
          animate={{
            x: [-200, 200, -200],
            y: [-100, 100, -100],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[100px]"
          animate={{
            x: [200, -200, 200],
            y: [100, -100, 100],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '50%', right: '10%' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-teal-500/20 blur-[100px]"
          animate={{
            x: [-100, 100, -100],
            y: [200, -200, 200],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '10%', left: '30%' }}
        />

        {/* Floating Islamic patterns */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/5 text-6xl"
            animate={{
              y: ['100vh', '-20vh'],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          >
            ☪
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-8 pb-4 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-4"
              >
                <BookOpen className="w-10 h-10 text-white" />
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
                Stories of the Prophets
              </h1>
              <p className="text-xl text-white/70">
                قصص الأنبياء
              </p>
            </div>

            {/* Progress Bar */}
            <div className="max-w-3xl mx-auto">
              <ProgressBar 
                completedStories={progress.completedStories}
                currentStory={progress.currentStory}
              />
            </div>
          </div>
        </motion.header>

        {/* Main Area */}
        <main className="flex-1 px-4 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Welcome Message */}
            {progress.completedStories.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center mb-10"
              >
                <p className="text-white/80 text-lg max-w-2xl mx-auto">
                  Welcome, little explorer! 👋 Join us on an amazing journey to learn about 
                  the prophets of Allah. Read their stories and test your knowledge with fun quizzes!
                </p>
              </motion.div>
            )}

            {/* Stats */}
            {progress.completedStories.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center gap-6 mb-10"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 text-center">
                  <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white">{getOverallProgress()}%</p>
                  <p className="text-white/60 text-sm">Complete</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 text-center">
                  <BookOpen className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white">{progress.completedStories.length}</p>
                  <p className="text-white/60 text-sm">Stories Read</p>
                </div>
              </motion.div>
            )}

            {/* Prophet Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prophets.map((prophet, index) => (
                <ProphetCard
                  key={prophet.id}
                  prophet={prophet}
                  isLocked={!canAccessStory(prophet.id)}
                  isCompleted={isStoryCompleted(prophet.id)}
                  score={getStoryScore(prophet.id)}
                  onClick={() => handleProphetSelect(prophet)}
                  index={index}
                />
              ))}
            </div>

            {/* Reset Button */}
            {progress.completedStories.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center mt-12"
              >
                <Button
                  variant="outline"
                  onClick={handleRestart}
                  className="rounded-full px-6 bg-white/10 text-white border-white/30 hover:bg-white/20"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Start Over
                </Button>
              </motion.div>
            )}
          </div>
        </main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="py-6 px-4 text-center"
        >
          <p className="text-white/40 text-sm">
            Based on Qasas al-Anbiya by Ibn Kathir 📚
          </p>
          <p className="text-white/30 text-xs mt-1">
            May Allah grant us knowledge and understanding
          </p>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;
