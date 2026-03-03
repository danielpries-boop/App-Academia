import { ArrowLeft, Share, TrendingDown, Weight, Dumbbell, Droplets, Trophy } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import BottomNav from '../components/BottomNav';

const weightData = [
  { name: '1 Nov', weight: 74.5 },
  { name: '8 Nov', weight: 74.0 },
  { name: '15 Nov', weight: 73.5 },
  { name: '22 Nov', weight: 73.0 },
  { name: 'Hoje', weight: 72.4 },
];

const compositionData = [
  { name: 'Massa Muscular', value: 45, color: '#3b82f6' },
  { name: 'Gordura', value: 18, color: '#60a5fa' },
  { name: 'Outros', value: 37, color: '#e5e7eb' },
];

export default function Progress() {
  return (
    <div className="bg-background-dark min-h-screen flex flex-col max-w-md mx-auto">
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-4 bg-background-dark/90 backdrop-blur-md border-b border-slate-800">
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-slate-800 transition-colors">
          <ArrowLeft className="text-white" />
        </button>
        <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center text-white">Evolução Corporal</h1>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-slate-800 transition-colors text-primary">
          <Share />
        </button>
      </header>

      <main className="flex-1 flex flex-col gap-6 p-4 pb-24 overflow-y-auto">
        <div className="flex p-1 bg-card-dark rounded-xl">
          <button className="flex-1 py-2 text-sm font-medium text-slate-400 rounded-lg">Semana</button>
          <button className="flex-1 py-2 text-sm font-medium text-primary bg-slate-700 rounded-lg shadow-sm">Mês</button>
          <button className="flex-1 py-2 text-sm font-medium text-slate-400 rounded-lg">Ano</button>
        </div>

        <section className="grid grid-cols-2 gap-4">
          <div className="col-span-2 bg-card-dark rounded-2xl p-5 shadow-sm border border-slate-800 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-400 flex items-center gap-1"><Weight size={16} /> Peso Atual</span>
              <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold flex items-center gap-0.5"><TrendingDown size={14} /> -1.2kg</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">72.4</span>
              <span className="text-lg font-medium text-slate-400">kg</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Última pesagem: Hoje, 08:30</p>
          </div>
          <div className="bg-card-dark rounded-2xl p-4 shadow-sm border border-slate-800 flex flex-col justify-between gap-3">
            <div className="size-10 rounded-full bg-blue-900/30 flex items-center justify-center text-primary"><Dumbbell /></div>
            <div>
              <p className="text-xs font-medium text-slate-400">Massa Magra</p>
              <div className="flex items-end justify-between mt-1">
                <p className="text-xl font-bold text-white">34.2kg</p>
                <span className="text-xs font-bold text-green-500 mb-1">+0.8%</span>
              </div>
            </div>
          </div>
          <div className="bg-card-dark rounded-2xl p-4 shadow-sm border border-slate-800 flex flex-col justify-between gap-3">
            <div className="size-10 rounded-full bg-orange-900/30 flex items-center justify-center text-orange-500"><Droplets /></div>
            <div>
              <p className="text-xs font-medium text-slate-400">Gordura</p>
              <div className="flex items-end justify-between mt-1">
                <p className="text-xl font-bold text-white">18.5%</p>
                <span className="text-xs font-bold text-green-500 mb-1">-0.5%</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card-dark rounded-2xl p-5 shadow-sm border border-slate-800">
          <h3 className="text-base font-bold text-white mb-4">Histórico de Peso</h3>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weightData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                <YAxis stroke="#9ca3af" fontSize={12} domain={['dataMin - 1', 'dataMax + 1']} />
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', color: '#fff' }} />
                <Line type="monotone" dataKey="weight" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="bg-card-dark rounded-2xl p-5 shadow-sm border border-slate-800">
          <h3 className="text-base font-bold text-white mb-4">Composição Corporal</h3>
          <div className="flex gap-4 items-center">
            <div className="relative size-32 shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                      <Pie data={compositionData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={60} fill="#8884d8" paddingAngle={5}>
                          {compositionData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
                  </PieChart>
              </ResponsiveContainer>
               <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-xs text-slate-400 font-medium">Total</span>
                  <span className="text-lg font-bold text-white">100%</span>
                </div>
            </div>
            <div className="flex flex-col gap-3 flex-1">
                {compositionData.map(d => (
                    <div key={d.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{backgroundColor: d.color}}></div>
                            <span className="text-sm text-slate-300">{d.name}</span>
                        </div>
                        <span className="text-sm font-bold text-white">{d.value}%</span>
                    </div>
                ))}
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-5 text-white flex items-center justify-between shadow-lg shadow-blue-900/20">
          <div>
            <h4 className="font-bold text-lg mb-1">Ótimo trabalho! 🔥</h4>
            <p className="text-blue-100 text-sm opacity-90">Você manteve sua rotina por 5 semanas seguidas.</p>
          </div>
          <div className="size-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Trophy />
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
