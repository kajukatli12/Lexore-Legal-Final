
import { toast } from "@/hooks/use-toast";

export type UserType = 'lawyer' | 'client';

export interface BaseRegistrationData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  termsAccepted: boolean;
}

export interface LawyerRegistrationData extends BaseRegistrationData {
  barNumber: string;
  experience: string;
  specialization: string;
}

export const validateBaseRegistration = (data: BaseRegistrationData): boolean => {
  if (!data.email || !data.password || !data.confirmPassword || !data.name) {
    toast({
      title: "Missing Information",
      description: "Please fill in all required fields.",
      variant: "destructive"
    });
    return false;
  }

  if (data.password !== data.confirmPassword) {
    toast({
      title: "Password Mismatch",
      description: "Passwords do not match. Please try again.",
      variant: "destructive"
    });
    return false;
  }

  if (!data.termsAccepted) {
    toast({
      title: "Terms & Conditions Required",
      description: "Please accept the terms and conditions to continue.",
      variant: "destructive"
    });
    return false;
  }

  return true;
};

export const validateLawyerRegistration = (data: LawyerRegistrationData): boolean => {
  if (!validateBaseRegistration(data)) {
    return false;
  }

  if (!data.barNumber || !data.experience || !data.specialization) {
    toast({
      title: "Missing Professional Information",
      description: "Please complete all lawyer-specific fields.",
      variant: "destructive"
    });
    return false;
  }

  return true;
};
