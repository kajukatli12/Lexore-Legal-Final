
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
import { BaseRegistrationData, validateBaseRegistration } from '@/utils/formValidation';

const ClientRegistrationForm: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData: BaseRegistrationData = {
      email,
      password,
      confirmPassword,
      name,
      termsAccepted
    };
    
    if (!validateBaseRegistration(formData)) return;
    
    setLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            role: 'client',
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
        <CardTitle className="text-2xl font-serif text-center">Create a Client Account</CardTitle>
        <CardDescription className="text-center">
          Enter your information to create a client account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="client-name">Full Name</Label>
            <Input 
              id="client-name" 
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="client-email">Email</Label>
            <Input 
              id="client-email" 
              type="email" 
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="client-password">Password</Label>
            <Input 
              id="client-password" 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="client-password-confirm">Confirm Password</Label>
            <Input 
              id="client-password-confirm" 
              type="password" 
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <TermsCheckbox
            id="client-terms"
            checked={termsAccepted}
            onCheckedChange={setTermsAccepted}
            disabled={loading}
          />
          <Button 
            type="submit" 
            className="w-full bg-client hover:bg-client-light"
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Create Client Account'}
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

export default ClientRegistrationForm;
