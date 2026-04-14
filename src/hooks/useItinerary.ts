import { useState, useCallback, useRef } from 'react';
import { initialItinerary, type ItineraryItem } from '../data/itineraryData';

const STORAGE_KEY = 'nyc_itinerary';
const VERSION_KEY = 'nyc_itinerary_version';
// Bump this whenever the itinerary data changes significantly
const CURRENT_VERSION = '2026-04-16-v3';

function loadFromStorage(): ItineraryItem[] {
  try {
    const savedVersion = localStorage.getItem(VERSION_KEY);
    // If version mismatch, discard old cache
    if (savedVersion !== CURRENT_VERSION) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
      return [...initialItinerary];
    }
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw) as ItineraryItem[];
    }
  } catch {
    // corrupted data, fall back to initial
  }
  return [...initialItinerary];
}

export function useItinerary() {
  const [items, setItems] = useState<ItineraryItem[]>(loadFromStorage);
  // Track whether there are unsaved edits
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  // Keep a ref to the saved version so we can revert on refresh
  const savedSnapshot = useRef<ItineraryItem[]>(loadFromStorage());

  const updateItem = useCallback(
    (index: number, field: keyof ItineraryItem, value: string) => {
      setItems(prev => {
        const next = prev.map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        );
        // Only update React state — do NOT write to localStorage
        return next;
      });
      setHasUnsavedChanges(true);
    },
    []
  );

  const saveItinerary = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    savedSnapshot.current = [...items];
    setHasUnsavedChanges(false);
    alert('行程已成功保存！');
  }, [items]);

  const resetItinerary = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
    const fresh = [...initialItinerary];
    setItems(fresh);
    savedSnapshot.current = fresh;
    setHasUnsavedChanges(false);
  }, []);

  return { items, updateItem, saveItinerary, resetItinerary, hasUnsavedChanges };
}
