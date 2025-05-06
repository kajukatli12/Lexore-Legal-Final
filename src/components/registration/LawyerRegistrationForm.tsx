
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import TermsCheckbox from './TermsCheckbox';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from '@/hooks/use-toast';
import { LawyerRegistrationData, validateLawyerRegistration } from '@/utils/formValidation';

const LawyerRegistrationForm: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [barNumber, setBarNumber] = useState('');
  const [experience, setExperience] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData: LawyerRegistrationData = {
      email,
      password,
      confirmPassword,
      name,
      termsAccepted,
      barNumber,
      experience,
      specialization
    };
    
    if (!validateLawyerRegistration(formData)) return;
    
    setLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            role: 'lawyer',
            bar_number: barNumber,
            experience,
            specialization
          }
        }
      });

      if (error) {
        throw error;
      }

      if (data) {
        toast({
          title: "Registration Successful",
          description: "Please check your email to confirm your account.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Registration Failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-serif text-center">Create a Lawyer Account</CardTitle>
        <CardDescription className="text-center">
          Enter your professional information to create a lawyer account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="lawyer-name">Full Name</Label>
              <Input 
                id="lawyer-name" 
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lawyer-email">Email</Label>
              <Input 
                id="lawyer-email" 
                type="email" 
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="lawyer-password">Password</Label>
              <Input 
                id="lawyer-password" 
                type="password" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lawyer-password-confirm">Confirm Password</Label>
              <Input 
                id="lawyer-password-confirm" 
                type="password" 
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bar-number">Bar Council Registration Number</Label>
            <Input 
              id="bar-number" 
              placeholder="e.g., BCI/12345/2020"
              value={barNumber}
              onChange={(e) => setBarNumber(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input 
                id="experience" 
                type="number" 
                placeholder="5"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialization">Specialization</Label>
              <Input 
                id="specialization" 
                placeholder="e.g., Family Law"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                required
                disabled={loading}
              />
            </div>
          </div>
          <TermsCheckbox
            id="lawyer-terms"
            checked={termsAccepted}
            onCheckedChange={setTermsAccepted}
            disabled={loading}
          />
          <Button 
            type="submit" 
            className="w-full bg-lawyer hover:bg-lawyer-light"
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Create Lawyer Account'}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="text-center text-sm text-gray-600 w-full">
          Already have an account?{" "}
          <Link to="/login" className="text-lawyer hover:underline">
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LawyerRegistrationForm;
