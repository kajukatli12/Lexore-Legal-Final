
import React from 'react';
import { Link } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';

interface TermsCheckboxProps {
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
}

const TermsCheckbox: React.FC<TermsCheckboxProps> = ({ 
  id, 
  checked, 
  onCheckedChange, 
  disabled 
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox 
        id={id} 
        checked={checked}
        onCheckedChange={(checked) => onCheckedChange(checked === true)}
        disabled={disabled}
      />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        I accept the <Link to="/terms" className="text-lawyer hover:underline">Terms of Service</Link> and{" "}
        <Link to="/privacy" className="text-lawyer hover:underline">Privacy Policy</Link>
      </label>
    </div>
  );
};

export default TermsCheckbox;
