import Header from './components/Header';
import LocationMap from './components/LocationMap';
import ClothingAdvice from './components/ClothingAdvice';
import ItineraryList from './components/ItineraryList';
import InfoCards from './components/InfoCards';
import { useItinerary } from './hooks/useItinerary';

export default function App() {
  const { items, updateItem, saveItinerary, resetItinerary, hasUnsavedChanges } = useItinerary();

  return (
    <div className="text-slate-800">
      <Header onSave={saveItinerary} hasUnsavedChanges={hasUnsavedChanges} />

      <main className="max-w-6xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar: Map + Clothing Advice */}
        <div className="lg:col-span-1 space-y-6">
          <LocationMap />
          <ClothingAdvice />
        </div>

        {/* Main content: Itinerary + Info Cards */}
        <div className="lg:col-span-2 space-y-6">
          <ItineraryList
            items={items}
            onUpdate={updateItem}
            onReset={resetItinerary}
          />
          <InfoCards />
        </div>
      </main>
    </div>
  );
}
