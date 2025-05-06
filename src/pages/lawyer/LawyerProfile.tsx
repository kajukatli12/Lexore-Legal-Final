
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const LawyerProfile = () => {
  const { toast } = useToast();
  
  const handleSaveProfile = () => {
    toast({
      title: "Supabase Integration Required",
      description: "Please connect Supabase to save profile information to the database.",
    });
  };

  return (
    <DashboardLayout userType="lawyer">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Your Profile</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Summary Card */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Profile Summary</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold">Advocate Name</h3>
              <p className="text-gray-600 mb-2">Constitutional Law Specialist</p>
              <p className="text-sm text-gray-500 mb-4">Mumbai, India</p>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-gray-100 p-2 rounded">
                  <p className="text-xl font-bold">15+</p>
                  <p className="text-xs text-gray-600">Years Exp.</p>
                </div>
                <div className="bg-gray-100 p-2 rounded">
                  <p className="text-xl font-bold">28</p>
                  <p className="text-xs text-gray-600">Cases</p>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => toast({ title: "Public profile view is not yet implemented" })}
              >
                View Public Profile
              </Button>
            </CardContent>
          </Card>
          
          {/* Profile Edit Form */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">Edit Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="full-name">Full Name</Label>
                    <Input id="full-name" defaultValue="Advocate Name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="advocate@example.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+91 98765 43210" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="Mumbai, India" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bar-number">Bar Council Number</Label>
                    <Input id="bar-number" defaultValue="MAH/12345/2010" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input id="experience" type="number" defaultValue="15" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="specialization">Specialization</Label>
                  <Input id="specialization" defaultValue="Constitutional Law, Civil Disputes" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio">Professional Bio</Label>
                  <Textarea 
                    id="bio" 
                    rows={4}
                    defaultValue="Experienced constitutional lawyer with over 15 years of practice in high courts and the Supreme Court. Specializing in civil disputes, property law, and constitutional matters."
                  />
                </div>
                
                <div className="flex justify-end gap-2">
                  <Button variant="outline" type="button">Cancel</Button>
                  <Button 
                    className="bg-lawyer hover:bg-lawyer-light" 
                    type="button"
                    onClick={handleSaveProfile}
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Credentials */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle className="text-lg">Credentials & Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="bg-gray-100 h-32 flex items-center justify-center rounded mb-2">
                      <p className="text-gray-500">Bar Council Certificate</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Update
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="bg-gray-100 h-32 flex items-center justify-center rounded mb-2">
                      <p className="text-gray-500">Law Degree</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Update
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="bg-gray-100 h-32 flex items-center justify-center rounded mb-2">
                      <p className="text-gray-500">+ Add Document</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Upload
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LawyerProfile;
