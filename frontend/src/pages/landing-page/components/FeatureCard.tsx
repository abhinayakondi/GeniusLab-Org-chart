import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
        <Icon className="size-6 text-blue-600" />
      </div>
      <h3 className="mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
