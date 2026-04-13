import { useState, useCallback } from 'react';
import { initialItinerary, type ItineraryItem } from '../data/itineraryData';

const STORAGE_KEY = 'nyc_itinerary';

function loadFromStorage(): ItineraryItem[] {
  try {
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

  const updateItem = useCallback(
    (index: number, field: keyof ItineraryItem, value: string) => {
      setItems(prev => {
        const next = prev.map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        );
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        return next;
      });
    },
    []
  );

  const saveItinerary = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    alert('行程已成功保存！');
  }, [items]);

  const resetItinerary = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    const fresh = [...initialItinerary];
    setItems(fresh);
  }, []);

  return { items, updateItem, saveItinerary, resetItinerary };
}
