const HabitItem = ({ icon, title, subtitle, isCompleted }) => (
  <label className="flex items-center gap-4 p-3 bg-surface-dark rounded-xl border border-slate-700 cursor-pointer group hover:border-primary/50 transition-colors">
    <input type="checkbox" defaultChecked={isCompleted} className="form-checkbox size-6 rounded-full text-primary bg-slate-800 border-slate-600 focus:ring-primary focus:ring-offset-background-dark" />
    <div className="flex-1">
      <p className={`text-sm font-bold text-slate-100 ${isCompleted ? 'line-through decoration-slate-500 opacity-60' : ''}`}>{title}</p>
      <p className="text-xs text-slate-500">{subtitle}</p>
    </div>
    <div className="text-slate-400 group-hover:text-primary transition-colors">
      {icon}
    </div>
  </label>
);

export default HabitItem;
