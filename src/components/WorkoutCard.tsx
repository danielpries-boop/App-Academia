import { Dumbbell, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WorkoutCard = ({ workout }: { workout: any }) => {
  const navigate = useNavigate();

  if (!workout) {
    return (
      <section className="mb-6">
        <div className="relative overflow-hidden rounded-2xl bg-surface-dark group p-5 flex flex-col h-full min-h-[250px] justify-center items-center">
           <div className="text-center text-slate-400">
            <Dumbbell className="mx-auto mb-2 animate-pulse" />
            <p className="font-bold">Gerando seu treino...</p>
            <p className="text-xs">Isso pode levar alguns segundos.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-slate-100">Treino de Hoje</h3>
        <button onClick={() => navigate('/workout', { state: { workout } })} className="text-primary text-sm font-semibold hover:underline">Ver Plano</button>
      </div>
      <div className="relative overflow-hidden rounded-2xl bg-surface-dark group cursor-pointer" onClick={() => navigate('/workout', { state: { workout } })}>
        <div className="absolute inset-0 bg-center bg-cover opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('https://picsum.photos/seed/gym/800/400')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 via-background-dark/60 to-transparent"></div>
        <div className="relative p-5 flex flex-col h-full min-h-[160px] justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary/20 text-primary text-xs font-bold uppercase tracking-wide backdrop-blur-md mb-2 border border-primary/20">
              <Dumbbell size={14} />
              {workout.title}
            </div>
            <h4 className="text-2xl font-bold text-white mb-1">{workout.title}</h4>
            <p className="text-slate-200 text-sm">{workout.duration} min • {workout.level} • {workout.exercises_count} Exercícios</p>
          </div>
          <button className="mt-4 w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary/20">
            <Play />
            Iniciar Treino
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkoutCard;
