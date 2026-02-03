import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth, AuthProvider } from '@/contexts/AuthContext';
import { useProgress } from '@/hooks/useProgress';
import { BookOpen, Share2, LogIn, LogOut, MoonStar, Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { prophets, type ProphetStory } from '@/data/prophets';
import { ProphetCard } from '@/components/ProphetCard';
import { StoryViewer } from '@/components/StoryViewer';
import { Quiz } from '@/components/Quiz';
import { Celebration } from '@/components/Celebration';

type AppMode = 'menu' | 'story' | 'quiz';

function AppContent() {
  const [selectedProphet, setSelectedProphet] = useState<ProphetStory | null>(null);
  const [mode, setMode] = useState<AppMode>('menu');
  const [searchQuery, setSearchQuery] = useState('');
  const { user, signInWithGoogle, logout } = useAuth();

  // Adjusted to match useProgress hook interface
  const {
    isLoaded,
    completeStory,
    isStoryCompleted,
    getStoryScore,
    canAccessStory
  } = useProgress();

  const [showCelebration, setShowCelebration] = useState(false);

  const filteredProphets = prophets.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.arabicName.includes(searchQuery)
  );

  const handleProphetSelect = (prophet: ProphetStory) => {
    setSelectedProphet(prophet);
    setMode('story');
  };

  const handleStoryComplete = () => {
    if (selectedProphet) {
      // Move to quiz when story is done
      setMode('quiz');
    }
  };

  const handleQuizComplete = (score: number) => {
    if (selectedProphet) {
      const passed = score >= selectedProphet.quiz.length * 0.7; // 70% pass rate

      if (passed) {
        completeStory(selectedProphet.id, score);
        setShowCelebration(true);
      } else {
        alert(`You scored ${score}. Try again to unlock the next story!`);
        setMode('menu');
        setSelectedProphet(null);
      }
    }
  };

  const handleBack = () => {
    if (mode === 'quiz') {
      setMode('story');
    } else {
      setMode('menu');
      setSelectedProphet(null);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Stories of the Prophets',
          text: 'Learn about the Prophets of Islam through interactive stories and quizzes!',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback for desktop
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        <div className="animate-pulse flex flex-col items-center">
          <BookOpen className="w-12 h-12 mb-4 text-emerald-500" />
          <h1 className="text-xl font-medium">Loading Stories...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 overflow-x-hidden relative">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-emerald-500/20 blur-[100px] top-[-100px] left-[-100px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-[80px] bottom-[-50px] right-[-50px]"
          animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />
        <MoonStar className="absolute top-10 left-10 w-8 h-8 text-white/10 animate-pulse" />
      </div>

      <AnimatePresence>
        {showCelebration && (
          // Fixed prop: onClose -> onRestart
          <Celebration onRestart={() => {
            setShowCelebration(false);
            setMode('menu');
            setSelectedProphet(null);
          }} />
        )}
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
        <header className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="flex items-center gap-3">
            {mode !== 'menu' && (
              <Button variant="ghost" size="icon" onClick={handleBack} className="text-white hover:bg-white/10 mr-2">
                <ArrowLeft className="w-6 h-6" />
              </Button>
            )}
            <div className="bg-emerald-500/20 p-3 rounded-2xl backdrop-blur-sm border border-emerald-500/30">
              <BookOpen className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Stories of the Prophets</h1>
              <p className="text-emerald-200/60 text-sm">Qasas al-Anbiya</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            {mode === 'menu' && (
              <div className="relative flex-1 md:w-64 group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-200/50 group-focus-within:text-emerald-400 transition-colors" />
                <input
                  type="text"
                  placeholder="Search prophets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/20 border border-emerald-500/20 rounded-xl pl-10 pr-4 py-2.5 text-white placeholder:text-emerald-200/30 focus:outline-none focus:border-emerald-500/50 focus:bg-black/30 transition-all"
                />
              </div>
            )}

            <Button variant="ghost" size="icon" onClick={handleShare} className="text-emerald-200/50 hover:text-white hover:bg-white/5">
              <Share2 className="w-5 h-5" />
            </Button>

            {user ? (
              <Button onClick={logout} variant="outline" className="border-emerald-500/30 text-emerald-100 hover:bg-emerald-500/10 hover:text-white bg-transparent">
                <LogOut className="w-4 h-4 mr-2" /> Sign Out
              </Button>
            ) : (
              <Button onClick={signInWithGoogle} className="bg-emerald-600 hover:bg-emerald-500 text-white border-0 shadow-lg shadow-emerald-900/20">
                <LogIn className="w-4 h-4 mr-2" /> Sign In
              </Button>
            )}
          </div>
        </header>

        <main className="flex-1 flex flex-col">
          <AnimatePresence mode="wait">
            {mode === 'menu' && (
              <motion.div
                key="menu"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProphets.map((prophet, index) => {
                  return (
                    <motion.div
                      key={prophet.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ProphetCard
                        index={index}
                        prophet={prophet}
                        isLocked={!canAccessStory(prophet.id)}
                        isCompleted={isStoryCompleted(prophet.id)}
                        score={getStoryScore(prophet.id)}
                        onClick={() => handleProphetSelect(prophet)}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {mode === 'story' && selectedProphet && (
              <motion.div
                key="story"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="h-full"
              >
                <StoryViewer
                  prophet={selectedProphet}
                  onComplete={handleStoryComplete}
                  onBack={handleBack}
                />
              </motion.div>
            )}

            {mode === 'quiz' && selectedProphet && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-3xl mx-auto w-full"
              >
                {/* Fixed props: removed prophetName, just passing prophet object */}
                <Quiz
                  prophet={selectedProphet}
                  onComplete={handleQuizComplete}
                  onBack={() => setMode('story')}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <footer className="mt-12 text-center text-emerald-200/40 text-sm pb-8">
          <p>© {new Date().getFullYear()} Stories of the Prophets. Made with ❤️ for the Ummah.</p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
