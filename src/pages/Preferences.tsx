import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

const dietOptions = [
  {
    id: 'standard',
    title: 'Padrão Equilibrado',
    description: 'Alta energia para treinos variados.',
    image: 'https://picsum.photos/seed/diet1/600/400',
  },
  {
    id: 'keto',
    title: 'Cetogênica',
    description: 'Foco em gorduras para resistência.',
    image: 'https://picsum.photos/seed/diet2/600/400',
  },
  {
    id: 'vegan',
    title: 'Vegana',
    description: 'Base vegetal e ganhos limpos.',
    image: 'https://picsum.photos/seed/diet3/600/400',
  },
  {
    id: 'intermittent_fasting',
    title: 'Jejum Intermitente',
    description: 'Janelas de treino otimizadas.',
    image: 'https://picsum.photos/seed/diet4/600/400',
  },
];

const DietCard = ({ diet, isSelected, onSelect }) => (
  <div className="relative group cursor-pointer" onClick={() => onSelect(diet.id)}>
    <div className={`absolute inset-0 bg-primary opacity-0 rounded-2xl transition-opacity duration-300 blur-sm ${isSelected ? 'opacity-100' : ''}`}></div>
    <div className={`relative flex flex-col items-stretch justify-end rounded-2xl overflow-hidden shadow-lg h-48 transition-transform transform border bg-surface-dark ${isSelected ? 'scale-[1.02] ring-2 ring-primary' : 'border-transparent dark:border-white/10'}`}>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${diet.image}')` }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      <div className="relative flex w-full items-end justify-between gap-4 p-5 z-10">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <p className="text-white tracking-tight text-xl font-bold leading-tight">{diet.title}</p>
            {isSelected && <CheckCircle2 size={20} className="text-primary" />}
          </div>
          <p className="text-gray-200 text-sm font-medium leading-normal">{diet.description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default function Preferences() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedDiet, setSelectedDiet] = useState('standard');

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-background-dark shadow-xl overflow-hidden">
      <header className="flex items-center p-4 pb-2 justify-between z-10 sticky top-0 bg-background-dark/95 backdrop-blur-sm">
        <button onClick={() => navigate(-1)} className="text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <ArrowLeft />
        </button>
        <h2 className="text-white text-lg font-bold flex-1 text-center pr-12">Preferências</h2>
      </header>

      <div className="flex w-full flex-row items-center justify-center gap-3 py-4">
        <div className="h-1.5 w-1.5 rounded-full bg-primary/40"></div>
        <div className="h-1.5 w-8 rounded-full bg-primary"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-primary/40"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-primary/40"></div>
      </div>

      <main className="flex flex-col px-6 pt-2 pb-24">
        <h1 className="text-white tracking-tight text-3xl font-bold leading-tight pb-3">Escolha seu estilo nutricional</h1>
        <p className="text-slate-400 text-base font-normal leading-relaxed pb-6">Vamos adaptar seus planos de refeição e ajustar a intensidade do treino com base na sua escolha.</p>
        
        <div className="flex flex-col gap-4">
          {dietOptions.map((diet) => (
            <DietCard 
              key={diet.id} 
              diet={diet} 
              isSelected={selectedDiet === diet.id} 
              onSelect={setSelectedDiet} 
            />
          ))}
        </div>

        <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10 flex gap-3 items-start">
          <span className="material-symbols-outlined text-primary shrink-0">info</span>
          <p className="text-sm text-slate-300 leading-snug">
            Alterar sua dieta regenerará automaticamente seu plano semanal. Você pode atualizar isso mais tarde nas Configurações.
          </p>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-dark via-background-dark/90 to-transparent pb-8 flex justify-center max-w-md mx-auto z-20">
        <button onClick={() => navigate('/dashboard', { state: { ...location.state, diet: selectedDiet } })} className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-lg h-14 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all transform active:scale-[0.98] flex items-center justify-center gap-2">
          Continuar
          <ArrowRight />
        </button>
      </footer>
    </div>
  );
}
