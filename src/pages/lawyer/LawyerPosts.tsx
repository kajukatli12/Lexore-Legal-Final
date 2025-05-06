
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const LawyerPosts = () => {
  const { toast } = useToast();
  
  React.useEffect(() => {
    toast({
      title: "Supabase Integration Required",
      description: "Please connect Supabase to load posts from the database.",
    });
  }, [toast]);

  return (
    <DashboardLayout userType="lawyer">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Available Cases</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Case Cards */}
          {[1, 2, 3, 4, 5].map((i) => (
            <Card key={i} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">Property Dispute {i}</CardTitle>
                  <Badge className="bg-green-500">{i % 2 === 0 ? 'Civil' : 'Property'}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  I need legal assistance regarding a dispute with my neighbor about property boundaries. 
                  The issue has been ongoing for several months and we need professional legal advice.
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Posted: 2 days ago</span>
                  <span className="text-gray-500">Location: Mumbai</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" className="mr-2">Details</Button>
                <Button className="bg-lawyer hover:bg-lawyer-light">Accept Case</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LawyerPosts;
