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
  { id: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn-6skkwhtTYTcXoEdvU0SGlDMtaJ5szFAip_U5Isu7Atv_UqIhzt79QpQ6TLWzaJegxTfRPLQP2eei4wVcvlXpJ0SW0u6PWWUHZMHXNlbeG6nq6noK4Nb8dTyKtuUylpxGBgESVVRJ4NGdfo6HBqbp5VnIAa1pPtEwH1ZAp_WVKDw0ZsDXXkV-x3x-o1alnMZNNwlNxWN4GL8gwHSapGR2fCjd6XUjftWN62vBXbV0I3nDi3sWwBMqnQ4D128yRugPr5S5gihKzA', title: 'Motivação', isMain: true },
  { id: 2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyJ_1Trh_bheLVGwMNZQB5q3I_dYRk-Xat2mBA4tmSsuqVEyYeiPGPYDB8IojZof0kcD5_OCG9ZFhjB6nEBMVNdRDkoj0CojMBGkQHa14XTXExI4clc2HOYuVXyixQZJy8TVFC40WURuZaaBzzNYA0BRPsHXTUVU6gPCtPfJ6Vtahn7NbyGam6fJ3G1nx0UlNpSt7EWMt5AVWbyK_R13ZFrxhlFD_OqFWMZE5eIdUM0mCtT4iVi6snoJzkUeJ5Vk66E5k-dbEKE9Y', title: 'Dicas Keto' },
  { id: 3, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg5P0R88I48UjvKNWYb_MJVFVjpE_IUOcipWULq_SnPLQmXHtE5iUJq66vpLZr8I4Th9TRBO4tV2Ri27ux21AtIUxkPanAbaRUH2gzp1_Caqtj1iO8XfcU5VpPy7Q8TR5t2h97CpZYtXRJ1s37aKgNxmCHD7aUDKFNug-MO_kmtoxakZ5uQ7U_-tLQXqpjvqNCvarUwx2WjbNjCb_ZvR-4b3C4QsrdVr6X9u_zBEg_E4hAWsGvd6AibgwdzcnfWCJ75YRqtQUC1Qk', title: 'Postura' },
  { id: 4, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVQNXP0cBttitwqcxI7zZ13TJ_G-be5NdYql1ZY67H3HPARvzKAQ0KFIjWPF_TeDV05nS99kjgD_pJMviW5g46999x_viFXNljEFs6psRSVqIs3b6bZ4XCgYvaNz7NZkHUKguHNxL86buR4UAGUQ4zvVeSPBiC0yEkXc7XAFTrkO3ZKvBwBphTowUALDrEGVRvbDC5tKfArLeQYmVQgnIUps5hr2xcFiPYcUqgzFohC4tHWY6c0aPxlycqzooFoyxZLy9MSw61L4g', title: 'Recuperação' },
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
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-primary" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_7UbuglkQV3QlDGyRfr73RXWhmX1VPXTJbeOJgt8UZXxUaYdWwyVbQOzYVKl7h4t62U05L8aPiX9eou7SQJ5fxk1dN_Sdc9kssQ4wQZ_wtU76g5lTKq8tAPCBXB5yz_XqnHmIv3Z6NKS_clUJ2m_EFVUu98ROSGaTLhG_JTAxfuvkpIUFisScL4mjHu5r0PxATmSd4vSmVI2ZNTTbbWApGpan-bc8BWFL5HOFegA0iAghafpENFoUUQbB0V61GklthddcaXuZMTM')` }}></div>
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
