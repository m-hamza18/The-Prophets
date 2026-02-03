import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type Mood, getRandomItem } from '@/data/moods';
import { Button } from '@/components/ui/button';
import { Sparkles, Heart, RotateCcw, Copy, Check } from 'lucide-react';

interface ResponseCardProps {
  mood: Mood;
  onReset: () => void;
}

type ResponseType = 'joke' | 'comfort' | null;

export function ResponseCard({ mood, onReset }: ResponseCardProps) {
  const [responseType, setResponseType] = useState<ResponseType>(null);
  const [currentContent, setCurrentContent] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const handleGetJoke = () => {
    const joke = getRandomItem(mood.jokes);
    setCurrentContent(joke);
    setResponseType('joke');
  };

  const handleGetComfort = () => {
    const comfort = getRandomItem(mood.comforts);
    setCurrentContent(comfort);
    setResponseType('comfort');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGetAnother = () => {
    if (responseType === 'joke') {
      const newJoke = getRandomItem(mood.jokes.filter(j => j !== currentContent));
      setCurrentContent(newJoke || getRandomItem(mood.jokes));
    } else {
      const newComfort = getRandomItem(mood.comforts.filter(c => c !== currentContent));
      setCurrentContent(newComfort || getRandomItem(mood.comforts));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Mood Header */}
      <motion.div
        className={`text-center mb-8 bg-gradient-to-r ${mood.bgGradient} rounded-3xl p-8 shadow-2xl`}
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="h-4" />
        <h2 className="text-3xl font-bold text-white mb-2">{mood.name}</h2>
        <p className="text-white/80">{mood.description}</p>
      </motion.div>

      {/* Action Buttons */}
      {!responseType && (
        <motion.div
          className="grid grid-cols-2 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetJoke}
            className={`
              p-6 rounded-2xl bg-gradient-to-br ${mood.bgGradient}
              text-white font-semibold text-lg
              shadow-lg hover:shadow-xl transition-shadow
              flex flex-col items-center gap-3
              border-2 border-white/20
            `}
          >
            <Sparkles className="w-8 h-8" />
            <span>Make Me Laugh</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetComfort}
            className={`
              p-6 rounded-2xl bg-gradient-to-br ${mood.bgGradient}
              text-white font-semibold text-lg
              shadow-lg hover:shadow-xl transition-shadow
              flex flex-col items-center gap-3
              border-2 border-white/20
            `}
          >
            <Heart className="w-8 h-8" />
            <span>Comfort Me</span>
          </motion.button>
        </motion.div>
      )}

      {/* Response Display */}
      <AnimatePresence mode="wait">
        {responseType && currentContent && (
          <motion.div
            key={currentContent}
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -30, rotateX: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative"
          >
            {/* Decorative background */}
            <div className={`absolute -inset-4 bg-gradient-to-r ${mood.bgGradient} opacity-20 blur-2xl rounded-3xl`} />

            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
              {/* Type indicator */}
              <div className="flex items-center justify-center gap-2 mb-6">
                {responseType === 'joke' ? (
                  <>
                    <Sparkles style={{ color: mood.color }} className="w-5 h-5" />
                    <span className="text-gray-600 font-medium">Here&apos;s a joke for you!</span>
                  </>
                ) : (
                  <>
                    <Heart className="w-5 h-5 text-rose-500" />
                    <span className="text-gray-600 font-medium">A gentle reminder...</span>
                  </>
                )}
              </div>

              {/* Content */}
              <motion.p
                className="text-2xl md:text-3xl text-center font-medium text-gray-800 leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {currentContent}
              </motion.p>

              {/* Action buttons */}
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  variant="outline"
                  onClick={handleGetAnother}
                  className="rounded-full px-6"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Get Another
                </Button>

                <Button
                  variant="outline"
                  onClick={handleCopy}
                  className="rounded-full px-6"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </>
                  )}
                </Button>

                <Button
                  variant="outline"
                  onClick={() => setResponseType(null)}
                  className="rounded-full px-6"
                >
                  Choose Different
                </Button>

                <Button
                  onClick={onReset}
                  className={`rounded-full px-6 bg-gradient-to-r ${mood.bgGradient} text-white border-0`}
                >
                  Pick New Mood
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
