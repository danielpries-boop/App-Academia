import { PlayCircle } from 'lucide-react';

interface StoryItemProps {
  image: string;
  title: string;
  isMain?: boolean;
}

const StoryItem = ({ image, title, isMain = false }: StoryItemProps) => (
  <div className="flex-none snap-start w-24 flex flex-col gap-2 group cursor-pointer">
    <div className={`relative w-full aspect-[3/4] rounded-xl overflow-hidden ${isMain ? 'ring-2 ring-primary ring-offset-2 ring-offset-background-dark' : 'ring-1 ring-slate-700'}`}>
      <div className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url('${image}')` }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
      {isMain && (
        <div className="absolute bottom-2 left-0 w-full text-center">
          <PlayCircle className="text-white mx-auto" />
        </div>
      )}
    </div>
    <p className="text-center text-xs font-semibold text-slate-100 truncate">{title}</p>
  </div>
);

export default StoryItem;
