
import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ValueCard = ({ icon: Icon, title, description }: ValueCardProps) => {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-white">
      <div className="flex justify-center mb-4">
        <Icon size={32} className="text-gray-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

export default ValueCard;
