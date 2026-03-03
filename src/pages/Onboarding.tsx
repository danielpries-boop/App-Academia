import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, PersonStanding, Dumbbell, Zap, Scale } from 'lucide-react';

const CustomSlider = ({ label, unit, min, max, value, setValue }) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex justify-between items-end pb-4">
        <h3 className="text-slate-100 text-lg font-bold">{label}</h3>
        <span className="text-primary font-bold text-2xl">{value} <span className="text-sm font-normal text-slate-400">{unit}</span></span>
      </div>
      <div className="relative w-full h-12 flex items-center justify-center">
        <div className="absolute w-full top-1/2 left-0 h-1 bg-white/10 rounded-full -translate-y-1/2"></div>
        <div className="absolute left-0 top-1/2 h-1 bg-primary rounded-full -translate-y-1/2" style={{ width: `${percentage}%` }}></div>
        <input 
          type="range" 
          min={min} 
          max={max} 
          value={value} 
          onChange={(e) => setValue(parseInt(e.target.value))}
          className="w-full absolute z-20 opacity-0 cursor-pointer h-12"
        />
        <div className="absolute top-1/2 size-6 bg-white border-4 border-primary rounded-full shadow-lg -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none" style={{ left: `${percentage}%` }}></div>
      </div>
      <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
};

export default function Onboarding() {
  const navigate = useNavigate();
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState(75);
  const [height, setHeight] = useState(180);
  const [goal, setGoal] = useState('build_muscle');

  const goals = [
    { id: 'lose_weight', icon: <Scale />, title: 'Perder Peso', subtitle: 'Queimar gordura e definir' },
    { id: 'build_muscle', icon: <Dumbbell />, title: 'Ganhar Músculo', subtitle: 'Ganhar massa e força' },
    { id: 'keep_fit', icon: <Zap />, title: 'Manter Forma', subtitle: 'Manter peso atual' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-dark text-slate-100">
      <header className="flex items-center p-4 pb-2 justify-between sticky top-0 z-50 bg-background-dark">
        <button className="flex size-12 shrink-0 items-center justify-center hover:bg-white/10 rounded-full transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-lg font-bold flex-1 text-center pr-12">Personalizar Plano</h2>
      </header>

      <div className="flex w-full flex-row items-center justify-center gap-3 py-5">
        <div className="h-2 w-8 rounded-full bg-primary"></div>
        <div className="h-2 w-2 rounded-full bg-primary/30"></div>
        <div className="h-2 w-2 rounded-full bg-primary/30"></div>
        <div className="h-2 w-2 rounded-full bg-primary/30"></div>
      </div>

      <main className="flex-1 px-5 pb-24 overflow-y-auto">
        <h1 className="tracking-tight text-3xl font-bold pb-3 pt-2">Conte-nos sobre você</h1>
        <p className="text-slate-400 text-base font-normal pb-6">Precisamos dessas informações para calcular seu plano personalizado.</p>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold pb-4">Gênero</h3>
            <div className="grid grid-cols-2 gap-4">
              <div onClick={() => setGender('male')} className={`flex flex-col items-center justify-center p-4 rounded-xl border cursor-pointer transition-all ${gender === 'male' ? 'border-primary bg-primary/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}>
                <PersonStanding size={32} className={`mb-2 ${gender === 'male' ? 'text-primary' : 'text-slate-400'}`} />
                <span className="text-base font-medium">Masculino</span>
              </div>
              <div onClick={() => setGender('female')} className={`flex flex-col items-center justify-center p-4 rounded-xl border cursor-pointer transition-all ${gender === 'female' ? 'border-primary bg-primary/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}>
                <PersonStanding size={32} className={`mb-2 ${gender === 'female' ? 'text-primary' : 'text-slate-400'}`} />
                <span className="text-base font-medium">Feminino</span>
              </div>
            </div>
          </div>

          <CustomSlider label="Peso Atual" unit="kg" min={40} max={150} value={weight} setValue={setWeight} />
          <CustomSlider label="Altura" unit="cm" min={140} max={220} value={height} setValue={setHeight} />

          <div>
            <h3 className="text-lg font-bold pb-4">Objetivo Principal</h3>
            <div className="space-y-3">
              {goals.map((g) => (
                <div key={g.id} onClick={() => setGoal(g.id)} className={`flex items-center p-4 rounded-xl border bg-white/5 cursor-pointer transition-all ${goal === g.id ? 'border-primary bg-primary/5' : 'border-white/10 hover:bg-white/10'}`}>
                  <div className="flex-1 flex items-center gap-4">
                    <div className="bg-blue-900/30 p-2 rounded-lg text-blue-400">
                      {g.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold">{g.title}</h4>
                      <p className="text-sm text-slate-400">{g.subtitle}</p>
                    </div>
                  </div>
                  <input type="radio" name="goal" checked={goal === g.id} readOnly className="size-5 accent-primary bg-slate-100 border-slate-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-5 bg-background-dark border-t border-white/5 backdrop-blur-sm bg-opacity-90 z-40">
        <button onClick={() => navigate('/preferences', { state: { gender, weight, height, goal } })} className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-lg h-14 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98]">
          Próximo Passo
          <ArrowRight size={20} />
        </button>
      </footer>
    </div>
  );
}
