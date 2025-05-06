
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ClientProfile = () => {
  const { toast } = useToast();
  
  const handleSaveProfile = () => {
    toast({
      title: "Supabase Integration Required",
      description: "Please connect Supabase to save profile information to the database.",
    });
  };

  return (
    <DashboardLayout userType="client">
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
              <h3 className="text-xl font-bold">Client Name</h3>
              <p className="text-gray-600 mb-4">Mumbai, India</p>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-gray-100 p-2 rounded">
                  <p className="text-xl font-bold">2</p>
                  <p className="text-xs text-gray-600">Active Cases</p>
                </div>
                <div className="bg-gray-100 p-2 rounded">
                  <p className="text-xl font-bold">3</p>
                  <p className="text-xs text-gray-600">Total Posts</p>
                </div>
              </div>
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
                    <Input id="full-name" defaultValue="Client Name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="client@example.com" />
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
                
                <div className="space-y-2">
                  <Label htmlFor="about">About</Label>
                  <Textarea 
                    id="about" 
                    rows={4}
                    defaultValue="Brief information about yourself and your legal needs."
                  />
                </div>
                
                <div className="flex justify-end gap-2">
                  <Button variant="outline" type="button">Cancel</Button>
                  <Button 
                    className="bg-client hover:bg-client-light" 
                    type="button"
                    onClick={handleSaveProfile}
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Case History */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle className="text-lg">Your Case History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50 text-gray-700">
                    <tr>
                      <th className="px-4 py-3">Case Title</th>
                      <th className="px-4 py-3">Category</th>
                      <th className="px-4 py-3">Posted Date</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Assigned Lawyer</th>
                      <th className="px-4 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3">Property Boundary Dispute</td>
                      <td className="px-4 py-3">Property</td>
                      <td className="px-4 py-3">Jan 15, 2023</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Active</span>
                      </td>
                      <td className="px-4 py-3">Advocate 1</td>
                      <td className="px-4 py-3">
                        <Button variant="outline" size="sm">View</Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">Lease Agreement Review</td>
                      <td className="px-4 py-3">Contract</td>
                      <td className="px-4 py-3">Mar 5, 2023</td>
                      <td className="px-4 py-3">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">In Progress</span>
                      </td>
                      <td className="px-4 py-3">Advocate 2</td>
                      <td className="px-4 py-3">
                        <Button variant="outline" size="sm">View</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Will Preparation</td>
                      <td className="px-4 py-3">Estate</td>
                      <td className="px-4 py-3">Jun 20, 2023</td>
                      <td className="px-4 py-3">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Completed</span>
                      </td>
                      <td className="px-4 py-3">Advocate 1</td>
                      <td className="px-4 py-3">
                        <Button variant="outline" size="sm">View</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClientProfile;
