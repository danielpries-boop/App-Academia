import { useLocation, useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { Play, Dumbbell, ArrowLeft } from 'lucide-react';

export default function Workout() {
  const location = useLocation();
  const navigate = useNavigate();
  const workout = location.state?.workout || {
    title: "Treino de Força (Offline)",
    duration: 45,
    level: "Intermediário",
    exercises_count: 5,
    exercises: [
      { name: "Supino Reto", sets: "4", reps: "10" },
      { name: "Supino Inclinado com Halteres", sets: "4", reps: "12" },
      { name: "Crucifixo", sets: "3", reps: "15" },
      { name: "Flexões", sets: "3", reps: "Até a falha" },
      { name: "Tríceps na Polia", sets: "4", reps: "12" }
    ]
  };

  return (
    <div className="bg-background-dark min-h-screen flex flex-col max-w-md mx-auto text-slate-100">
      <header className="p-4 pt-6 sticky top-0 bg-background-dark/95 backdrop-blur-sm z-10 border-b border-white/5 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold">Treino de Hoje</h1>
      </header>
      <main className="flex-1 p-4 pb-24 overflow-y-auto">
        <div className="bg-surface-dark rounded-2xl p-5 border border-white/5 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-bold text-primary mb-1">{workout.title}</h2>
              <p className="text-slate-400 text-sm">{workout.duration} min • {workout.level}</p>
            </div>
            <div className="size-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
              <Dumbbell />
            </div>
          </div>
          <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors">
            <Play fill="currentColor" size={18} />
            Iniciar Treino
          </button>
        </div>
        
        <h3 className="text-lg font-bold mb-3">Exercícios ({workout.exercises?.length || workout.exercises_count})</h3>
        <div className="space-y-3">
          {workout.exercises?.map((exercise: any, i: number) => (
            <div key={i} className="bg-card-dark p-3 rounded-xl flex gap-4 items-center border border-white/5">
              <div className="size-16 rounded-lg bg-surface-dark bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/seed/exercise${i+10}/100/100')` }}></div>
              <div className="flex-1">
                <h4 className="font-bold text-sm">{exercise.name}</h4>
                <p className="text-xs text-slate-400">{exercise.sets} séries x {exercise.reps} reps</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
