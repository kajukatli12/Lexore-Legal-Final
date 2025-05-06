
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const LawyerMessages = () => {
  const { toast } = useToast();
  
  React.useEffect(() => {
    toast({
      title: "Supabase Integration Required",
      description: "Please connect Supabase to load messages and enable chat functionality.",
    });
  }, [toast]);

  return (
    <DashboardLayout userType="lawyer">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Messages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Conversations List */}
          <Card className="md:col-span-1 h-[70vh] flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Conversations</CardTitle>
              <div className="my-2">
                <Input placeholder="Search conversations..." />
              </div>
            </CardHeader>
            
            <CardContent className="flex-grow overflow-y-auto space-y-2 pt-0">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className={`p-3 rounded-md cursor-pointer ${i === 1 ? 'bg-lawyer/10 border-l-4 border-lawyer' : 'hover:bg-gray-100'}`}
                >
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Client {i}</p>
                    <span className="text-xs text-gray-500">2d ago</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">
                    Latest message will appear here...
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* Messages Area */}
          <Card className="md:col-span-2 h-[70vh] flex flex-col">
            <CardHeader className="border-b pb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <CardTitle className="text-lg">Client 1</CardTitle>
                  <p className="text-sm text-gray-600">Case: Property Dispute</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="flex-grow overflow-y-auto p-4 space-y-4">
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">Hello, I need advice regarding my property dispute case.</p>
                  <span className="text-xs text-gray-500 block mt-1">10:30 AM</span>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="bg-lawyer text-white rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">Hi there. I'd be happy to help. Could you provide more details about your case?</p>
                  <span className="text-xs text-white/80 block mt-1">10:32 AM</span>
                </div>
              </div>
              
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">Sure. The dispute is about land boundaries with my neighbor. We have conflicting survey reports.</p>
                  <span className="text-xs text-gray-500 block mt-1">10:35 AM</span>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="bg-lawyer text-white rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">I understand. We'll need to review both survey reports. Can you upload them here so I can take a look?</p>
                  <span className="text-xs text-white/80 block mt-1">10:40 AM</span>
                </div>
              </div>
            </CardContent>
            
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <Input placeholder="Type a message..." className="flex-grow" />
                <Button className="bg-lawyer hover:bg-lawyer-light">Send</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LawyerMessages;
