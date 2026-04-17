import { Button } from './button';
import { ArrowRight } from 'lucide-react';
interface EmailSignupProps {
  onClick?: () => void; 
}
export function EmailSignup({ onClick }: EmailSignupProps) {
  return (
    <div className="flex justify-center">
      <Button 
        size="lg" 
        className="bg-black text-white h-12 px-6 gap-2" 
        onClick={onClick}>
          Continue with Email
          <ArrowRight className="size-4" />
      </Button>
    </div>
  );
}