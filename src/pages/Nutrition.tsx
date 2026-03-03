import BottomNav from '../components/BottomNav';
import NutritionCard from '../components/NutritionCard';

export default function Nutrition() {
  return (
    <div className="bg-background-dark min-h-screen flex flex-col max-w-md mx-auto text-slate-100">
      <header className="p-4 pt-6 sticky top-0 bg-background-dark/95 backdrop-blur-sm z-10 border-b border-white/5">
        <h1 className="text-2xl font-bold">Nutrição</h1>
      </header>
      <main className="flex-1 p-4 pb-24 overflow-y-auto">
        <NutritionCard />
        
        <h3 className="text-lg font-bold mb-3 mt-6">Refeições de Hoje</h3>
        <div className="space-y-3">
          {['Pequeno-almoço', 'Almoço', 'Jantar'].map((meal, i) => (
            <div key={meal} className="bg-card-dark p-4 rounded-xl flex justify-between items-center border border-white/5">
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-full bg-surface-dark bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/seed/food${i}/100/100')` }}></div>
                <div>
                  <h4 className="font-bold text-sm">{meal}</h4>
                  <p className="text-xs text-slate-400">Recomendado</p>
                </div>
              </div>
              <span className="text-primary font-bold text-sm">+ Adicionar</span>
            </div>
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
