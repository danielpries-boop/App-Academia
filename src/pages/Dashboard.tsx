import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Bell, CheckCircle2, Droplets, Pill } from 'lucide-react';
import StoryItem from '../components/StoryItem';
import WorkoutCard from '../components/WorkoutCard';
import NutritionCard from '../components/NutritionCard';
import HabitItem from '../components/HabitItem';
import BottomNav from '../components/BottomNav';
import { generateWorkoutPlan } from '../services/geminiService';

const stories = [
  { id: 1, image: 'https://picsum.photos/seed/fitness1/400/600', title: 'Motivação', isMain: true },
  { id: 2, image: 'https://picsum.photos/seed/diet/400/600', title: 'Dicas Keto' },
  { id: 3, image: 'https://picsum.photos/seed/workout2/400/600', title: 'Postura' },
  { id: 4, image: 'https://picsum.photos/seed/recovery/400/600', title: 'Recuperação' },
];

const habits = [
  { id: 1, icon: <CheckCircle2 className="text-primary" />, title: 'Alongamento Matinal', subtitle: 'Concluído às 7:00', isCompleted: true },
  { id: 2, icon: <Droplets />, title: 'Beber 3L de Água', subtitle: '1.5L / 3L Consumidos', isCompleted: false },
  { id: 3, icon: <Pill />, title: 'Suplemento de Creatina', subtitle: 'Tomar 5g pós-treino', isCompleted: false },
];

export default function Dashboard() {
  const location = useLocation();
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userData = location.state;
    if (userData) {
      generateWorkoutPlan(userData)
        .then(plan => {
          setWorkoutPlan(plan);
          setIsLoading(false);
        })
        .catch(error => {
          console.error("Failed to generate workout plan:", error);
          setIsLoading(false);
        });
    }
  }, [location.state]);

  return (
    <div className="bg-background-dark min-h-screen flex flex-col max-w-md mx-auto">
      <header className="flex items-center justify-between px-4 pt-6 pb-2 bg-background-dark sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-primary" style={{ backgroundImage: `url('https://picsum.photos/seed/portrait1/100/100')` }}></div>
            <div className="absolute bottom-0 right-0 size-3 bg-primary border-2 border-background-dark rounded-full"></div>
          </div>
          <div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Bem-vindo de volta</p>
            <h2 className="text-slate-100 text-lg font-bold leading-tight">Alex Johnson</h2>
          </div>
        </div>
        <button className="relative flex items-center justify-center size-10 rounded-full bg-surface-dark text-slate-100 shadow-sm">
          <Bell />
          <span className="absolute top-2 right-2.5 size-2 bg-red-500 rounded-full border border-surface-dark"></span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto px-4 pb-24">
        <div className="mt-4">
          <h1 className="text-3xl font-extrabold text-slate-100 leading-tight">
            Vamos <span className="text-primary">detonar</span> hoje!
          </h1>
          <p className="text-slate-400 mt-1 text-sm">Sua sequência está incrível 🔥 12 dias seguidos.</p>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar py-6 snap-x">
          {stories.map(story => <StoryItem key={story.id} {...story} />)}
        </div>

        <WorkoutCard workout={workoutPlan} />
        <NutritionCard />

        <section>
          <h3 className="text-lg font-bold text-slate-100 mb-3">Hábitos Diários</h3>
          <div className="flex flex-col gap-2">
            {habits.map(habit => <HabitItem key={habit.id} {...habit} />)}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
