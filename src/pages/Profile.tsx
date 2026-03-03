import BottomNav from '../components/BottomNav';
import { Settings, User, Bell, Shield, LogOut } from 'lucide-react';

export default function Profile() {
  return (
    <div className="bg-background-dark min-h-screen flex flex-col max-w-md mx-auto text-slate-100">
      <header className="p-4 pt-6 sticky top-0 bg-background-dark/95 backdrop-blur-sm z-10 border-b border-white/5">
        <h1 className="text-2xl font-bold">Perfil</h1>
      </header>
      <main className="flex-1 p-4 pb-24 overflow-y-auto">
        <div className="flex items-center gap-4 mb-8 bg-surface-dark p-4 rounded-2xl border border-white/5">
          <div className="size-16 rounded-full bg-cover bg-center border-2 border-primary" style={{ backgroundImage: `url('https://picsum.photos/seed/portrait1/100/100')` }}></div>
          <div>
            <h2 className="text-xl font-bold">Alex Johnson</h2>
            <p className="text-slate-400 text-sm">Membro Pro</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="bg-surface-dark rounded-xl border border-white/5 overflow-hidden">
            <div className="flex items-center gap-3 p-4 border-b border-white/5 cursor-pointer hover:bg-white/5">
              <User size={20} className="text-slate-400" />
              <span className="flex-1 font-medium">Dados Pessoais</span>
            </div>
            <div className="flex items-center gap-3 p-4 border-b border-white/5 cursor-pointer hover:bg-white/5">
              <Settings size={20} className="text-slate-400" />
              <span className="flex-1 font-medium">Preferências de Treino</span>
            </div>
            <div className="flex items-center gap-3 p-4 border-b border-white/5 cursor-pointer hover:bg-white/5">
              <Bell size={20} className="text-slate-400" />
              <span className="flex-1 font-medium">Notificações</span>
            </div>
            <div className="flex items-center gap-3 p-4 cursor-pointer hover:bg-white/5">
              <Shield size={20} className="text-slate-400" />
              <span className="flex-1 font-medium">Privacidade</span>
            </div>
          </div>
          
          <div className="bg-surface-dark rounded-xl border border-white/5 overflow-hidden mt-4">
            <div className="flex items-center gap-3 p-4 cursor-pointer hover:bg-white/5 text-red-400">
              <LogOut size={20} />
              <span className="flex-1 font-medium">Terminar Sessão</span>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
