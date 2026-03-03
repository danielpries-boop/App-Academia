import { Timer, Flame } from 'lucide-react';

const NutritionCard = () => (
  <section className="mb-6">
    <h3 className="text-lg font-bold text-slate-100 mb-3">Nutrição & Jejum</h3>
    <div className="grid grid-cols-2 gap-3">
      <div className="bg-surface-dark p-4 rounded-2xl shadow-sm border border-slate-700 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="size-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400">
            <Timer />
          </div>
          <span className="text-xs font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full">Jejum</span>
        </div>
        <div className="mt-4">
          <p className="text-slate-400 text-xs font-medium">Tempo Restante</p>
          <p className="text-2xl font-bold text-slate-100 tabular-nums">02:45:12</p>
          <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
            <div className="bg-sky-400 h-full rounded-full w-[75%]"></div>
          </div>
          <p className="text-[10px] text-slate-400 mt-1 text-right">Meta: 16h</p>
        </div>
      </div>
      <div className="bg-surface-dark p-4 rounded-2xl shadow-sm border border-slate-700 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Flame />
          </div>
          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Consumo</span>
        </div>
        <div className="mt-4">
          <p className="text-slate-400 text-xs font-medium">Calorias Restantes</p>
          <p className="text-2xl font-bold text-slate-100 tabular-nums">840 <span className="text-sm font-normal text-slate-500">kcal</span></p>
          <div className="flex gap-1 mt-2">
            <div className="h-1.5 flex-1 rounded-full bg-blue-500" title="Proteína"></div>
            <div className="h-1.5 flex-1 rounded-full bg-yellow-500" title="Carboidratos"></div>
            <div className="h-1.5 flex-1 rounded-full bg-red-500" title="Gorduras"></div>
            <div className="h-1.5 flex-1 rounded-full bg-slate-700" title="Restante"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NutritionCard;
