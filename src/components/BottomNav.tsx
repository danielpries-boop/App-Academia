import { Home, Dumbbell, Utensils, User, BarChart } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/dashboard', icon: <Home />, label: 'Início' },
  { to: '/workout', icon: <Dumbbell />, label: 'Treino' },
  { to: '/progress', icon: <BarChart />, label: 'Evolução' },
  { to: '/nutrition', icon: <Utensils />, label: 'Nutrição' },
  { to: '/profile', icon: <User />, label: 'Perfil' },
];

const BottomNav = () => (
  <nav className="fixed bottom-0 w-full border-t border-slate-800 bg-[#0f172a]/95 backdrop-blur supports-[backdrop-filter]:bg-background-dark/80 pb-5 pt-3 px-6 z-50 max-w-md mx-auto">
    <div className="flex justify-between items-center">
      {navItems.map((item) => (
        <NavLink key={item.to} to={item.to} className={({ isActive }) => `flex flex-col items-center gap-1 group ${isActive ? 'text-primary' : 'text-slate-400 hover:text-primary'}`}>
          {item.icon}
          <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
        </NavLink>
      ))}
    </div>
  </nav>
);

export default BottomNav;
