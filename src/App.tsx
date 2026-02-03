import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth, AuthProvider } from '@/contexts/AuthContext';
import { useProgress } from '@/hooks/useProgress';
import { BookOpen, Share2, LogIn, LogOut, MoonStar } from 'lucide-react';
import { Button } from '@/components/ui/button';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const { user, signInWithGoogle, logout } = useAuth();
  const { isLoaded } = useProgress();

  const handleShare = () => {
    alert('Share clicked!');
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 overflow-x-hidden relative">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-emerald-500/20 blur-[80px]"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <MoonStar className="absolute top-20 left-20 w-12 h-12 text-white/5 animate-pulse" />
      </div>

      <div className="relative z-10 p-8 text-center">
        <header className="max-w-4xl mx-auto">
          <div className="flex justify-end gap-2 mb-8">
            <Button variant="ghost" size="icon" onClick={handleShare} className="text-white/50 hover:text-white">
              <Share2 className="w-5 h-5" />
            </Button>
            {user ? (
              <Button onClick={logout} className="bg-white/10 text-white">
                <LogOut className="w-4 h-4 mr-2" /> Sign Out
              </Button>
            ) : (
              <Button onClick={signInWithGoogle} className="bg-white/10 text-white">
                <LogIn className="w-4 h-4 mr-2" /> Sign In
              </Button>
            )}
          </div>

          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-4">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-2">Stories of the Prophets</h1>
            <p className="text-white/60">Welcome to the interactive journey</p>
          </div>

          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-3 text-white"
            />
          </div>
        </header>

        <main className="mt-20">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10">
            <h2 className="text-2xl text-white mb-4">Background & Header Restored</h2>
            <p className="text-white/70">If you see this, the layout and basic components are working!</p>
          </div>
        </main>
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
