import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { prophets } from '@/data/prophets';

export interface Progress {
  completedStories: number[];
  quizScores: Record<number, number>;
  currentStory: number;
}

const STORAGE_KEY = 'prophet-stories-progress';

export function useProgress() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<Progress>({
    completedStories: [],
    quizScores: {},
    currentStory: 1,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // Load progress from Firestore or localStorage on mount/user change
  useEffect(() => {
    async function loadProgress() {
      setIsLoaded(false);
      let loadedProgress: Progress | null = null;

      if (user) {
        // Try to load from Firestore
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            loadedProgress = docSnap.data() as Progress;
          }
        } catch (e) {
          console.error("Error loading from Firestore:", e);
        }
      }

      // Fallback to localStorage or combine if needed
      if (!loadedProgress) {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            loadedProgress = parsed;
          } catch (e) {
            console.error('Failed to parse local progress:', e);
          }
        }
      }

      if (loadedProgress) {
        setProgress(loadedProgress);
      }
      setIsLoaded(true);
    }

    loadProgress();
  }, [user]);

  // Save progress to Firestore/localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      // Save locally
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));

      // Save to Cloud if logged in
      if (user) {
        const saveToCloud = async () => {
          try {
            await setDoc(doc(db, "users", user.uid), progress);
          } catch (e) {
            console.error("Error saving to Firestore:", e);
          }
        };
        saveToCloud();
      }
    }
  }, [progress, isLoaded, user]);

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
    const newProgress = {
      completedStories: [],
      quizScores: {},
      currentStory: 1,
    };
    setProgress(newProgress);
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
    const totalStories = prophets.length;
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
