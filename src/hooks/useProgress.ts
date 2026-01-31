import { useState, useEffect, useCallback } from 'react';

export interface Progress {
  completedStories: number[];
  quizScores: Record<number, number>;
  currentStory: number;
}

const STORAGE_KEY = 'prophet-stories-progress';

export function useProgress() {
  const [progress, setProgress] = useState<Progress>({
    completedStories: [],
    quizScores: {},
    currentStory: 1,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setProgress(parsed);
      } catch (e) {
        console.error('Failed to parse progress:', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress, isLoaded]);

  const completeStory = useCallback((storyId: number, score: number) => {
    setProgress(prev => ({
      ...prev,
      completedStories: [...new Set([...prev.completedStories, storyId])],
      quizScores: { ...prev.quizScores, [storyId]: score },
    }));
  }, []);

  const setCurrentStory = useCallback((storyId: number) => {
    setProgress(prev => ({
      ...prev,
      currentStory: storyId,
    }));
  }, []);

  const resetProgress = useCallback(() => {
    setProgress({
      completedStories: [],
      quizScores: {},
      currentStory: 1,
    });
  }, []);

  const isStoryCompleted = useCallback((storyId: number) => {
    return progress.completedStories.includes(storyId);
  }, [progress.completedStories]);

  const getStoryScore = useCallback((storyId: number) => {
    return progress.quizScores[storyId] || 0;
  }, [progress.quizScores]);

  const canAccessStory = useCallback((storyId: number) => {
    if (storyId === 1) return true;
    return progress.completedStories.includes(storyId - 1);
  }, [progress.completedStories]);

  const getOverallProgress = useCallback(() => {
    const totalStories = 6;
    return Math.round((progress.completedStories.length / totalStories) * 100);
  }, [progress.completedStories]);

  return {
    progress,
    isLoaded,
    completeStory,
    setCurrentStory,
    resetProgress,
    isStoryCompleted,
    getStoryScore,
    canAccessStory,
    getOverallProgress,
  };
}
