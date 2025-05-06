
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ClientCreatePost = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Supabase Integration Required",
      description: "Please connect Supabase to create posts in the database.",
    });
  };

  return (
    <DashboardLayout userType="client">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Create a New Case Post</h2>
        
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Case Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Case Title</Label>
                <Input 
                  id="title" 
                  placeholder="e.g., Property Dispute with Neighbor" 
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="case-type">Case Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select case type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="civil">Civil</SelectItem>
                      <SelectItem value="criminal">Criminal</SelectItem>
                      <SelectItem value="family">Family</SelectItem>
                      <SelectItem value="property">Property</SelectItem>
                      <SelectItem value="corporate">Corporate</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - No immediate deadline</SelectItem>
                      <SelectItem value="medium">Medium - Needed within weeks</SelectItem>
                      <SelectItem value="high">High - Needed within days</SelectItem>
                      <SelectItem value="urgent">Urgent - Immediate assistance required</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input 
                    id="location" 
                    placeholder="e.g., Mumbai, Maharashtra" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range (₹)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Consultation Only</SelectItem>
                      <SelectItem value="under-5000">Under ₹5,000</SelectItem>
                      <SelectItem value="5000-15000">₹5,000 - ₹15,000</SelectItem>
                      <SelectItem value="15000-50000">₹15,000 - ₹50,000</SelectItem>
                      <SelectItem value="above-50000">Above ₹50,000</SelectItem>
                      <SelectItem value="negotiable">Negotiable</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Case Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Provide details about your legal issue..." 
                  rows={6}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="specific-requirements">Specific Requirements (Optional)</Label>
                <Textarea 
                  id="specific-requirements" 
                  placeholder="Any specific requirements or qualifications you're looking for in a lawyer..."
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Attachments (Optional)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                  <p className="text-sm text-gray-500">
                    Drop files here or click to upload
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    PDF, DOC, DOCX, JPG, PNG (Max 5MB each)
                  </p>
                  <Input 
                    type="file" 
                    className="hidden"
                    id="file-upload"
                    onChange={() => toast({ 
                      title: "Feature Not Available", 
                      description: "File upload requires Supabase integration." 
                    })}
                  />
                  <Button 
                    variant="outline" 
                    className="mt-2"
                    onClick={() => document.getElementById('file-upload')?.click()}
                    type="button"
                  >
                    Select Files
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Save Draft</Button>
                <Button type="submit" className="bg-client hover:bg-client-light">
                  Post Case
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ClientCreatePost;
