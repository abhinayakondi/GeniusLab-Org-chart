import { Button } from './button';
import { ArrowRight } from 'lucide-react';

export function EmailSignup() {
  return (
    <div className="flex justify-center">
      <Button asChild size="lg" className="bg-black text-white h-12 px-6 gap-2">
        <a href="#demo">
          Continue with Email
          <ArrowRight className="size-4" />
        </a>
      </Button>
    </div>
  );
}