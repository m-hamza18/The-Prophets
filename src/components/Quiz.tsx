import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type ProphetStory } from '@/data/prophets';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Trophy, Star, RotateCcw, ArrowRight } from 'lucide-react';

interface QuizProps {
  prophet: ProphetStory;
  onComplete: (score: number) => void;
  onBack: () => void;
}

export function Quiz({ prophet, onComplete, onBack }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

  const question = prophet.quiz[currentQuestion];
  const isLastQuestion = currentQuestion === prophet.quiz.length - 1;

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    const correct = answerIndex === question.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      setScore(prev => prev + 1);
    }
    
    setAnsweredQuestions(prev => [...prev, currentQuestion]);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setQuizComplete(true);
    } else {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setIsCorrect(false);
    }
  };

  const handleFinish = () => {
    onComplete(score + (isCorrect && !answeredQuestions.includes(currentQuestion) ? 1 : 0));
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setIsCorrect(false);
    setScore(0);
    setQuizComplete(false);
    setAnsweredQuestions([]);
  };

  if (quizComplete) {
    const finalScore = score;
    const isPerfect = finalScore === prophet.quiz.length;
    const isGood = finalScore >= 3;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl mx-auto"
      >
        <div className={`bg-gradient-to-br ${prophet.bgGradient} rounded-3xl p-8 shadow-2xl text-center`}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="text-8xl mb-6"
          >
            {isPerfect ? '🏆' : isGood ? '🌟' : '👍'}
          </motion.div>

          <h2 className="text-3xl font-bold text-white mb-4">
            {isPerfect ? 'Perfect Score!' : isGood ? 'Great Job!' : 'Good Try!'}
          </h2>

          <p className="text-white/80 text-lg mb-8">
            You scored {finalScore} out of {prophet.quiz.length}!
          </p>

          {/* Stars Display */}
          <div className="flex justify-center gap-3 mb-8">
            {[...Array(prophet.quiz.length)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
              >
                <Star
                  className={`w-12 h-12 ${
                    i < finalScore
                      ? 'text-yellow-300 fill-yellow-300'
                      : 'text-white/30'
                  }`}
                />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              onClick={handleRetry}
              className="rounded-full px-6 bg-white/20 text-white border-white/30 hover:bg-white/30"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Try Again
            </Button>
            <Button
              onClick={handleFinish}
              className="rounded-full px-8 bg-white text-gray-900 hover:bg-gray-100 font-bold"
            >
              Continue
              <ArrowRight className="w-5 h-5 ml-2" />
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
      className="w-full max-w-2xl mx-auto"
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${prophet.bgGradient} rounded-3xl p-6 mb-6 shadow-xl`}>
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowRight className="w-6 h-6 rotate-180" />
            Back
          </button>
          <div className="text-center">
            <span className="text-3xl font-bold text-white">Quiz Time!</span>
          </div>
          <div className="w-20" />
        </div>
      </div>

      {/* Quiz Card */}
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <span>Question {currentQuestion + 1} of {prophet.quiz.length}</span>
            <span className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Score: {score}/{currentQuestion + (showResult ? 1 : 0)}
            </span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${prophet.bgGradient}`}
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / prophet.quiz.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              {question.question}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrectAnswer = index === question.correctAnswer;
                const showCorrect = showResult && isCorrectAnswer;
                const showWrong = showResult && isSelected && !isCorrectAnswer;

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showResult}
                    whileHover={!showResult ? { scale: 1.02 } : {}}
                    whileTap={!showResult ? { scale: 0.98 } : {}}
                    className={`
                      w-full p-5 rounded-2xl text-left text-lg font-medium
                      transition-all duration-300
                      ${showCorrect
                        ? 'bg-green-500 text-white shadow-lg'
                        : showWrong
                          ? 'bg-red-500 text-white shadow-lg'
                          : isSelected
                            ? `bg-gradient-to-r ${prophet.bgGradient} text-white shadow-lg`
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showCorrect && <CheckCircle className="w-6 h-6" />}
                      {showWrong && <XCircle className="w-6 h-6" />}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Feedback */}
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 p-5 rounded-2xl ${
                  isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                <p className="text-lg font-bold flex items-center gap-2">
                  {isCorrect ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      Correct! Well done! 🎉
                    </>
                  ) : (
                    <>
                      <XCircle className="w-6 h-6" />
                      Not quite! The correct answer is highlighted above.
                    </>
                  )}
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Next Button */}
        {showResult && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 flex justify-end"
          >
            <Button
              onClick={handleNext}
              className={`rounded-full px-8 bg-gradient-to-r ${prophet.bgGradient} text-white`}
            >
              {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
