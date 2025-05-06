
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ClientMessages = () => {
  const { toast } = useToast();
  
  React.useEffect(() => {
    toast({
      title: "Supabase Integration Required",
      description: "Please connect Supabase to load messages and enable chat functionality.",
    });
  }, [toast]);

  return (
    <DashboardLayout userType="client">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Messages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Conversations List */}
          <Card className="md:col-span-1 h-[70vh] flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Your Lawyers</CardTitle>
              <div className="my-2">
                <Input placeholder="Search conversations..." />
              </div>
            </CardHeader>
            
            <CardContent className="flex-grow overflow-y-auto space-y-2 pt-0">
              {[1, 2].map((i) => (
                <div 
                  key={i}
                  className={`p-3 rounded-md cursor-pointer ${i === 1 ? 'bg-client/10 border-l-4 border-client' : 'hover:bg-gray-100'}`}
                >
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Advocate {i}</p>
                    <span className="text-xs text-gray-500">1d ago</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">
                    Latest message will appear here...
                  </p>
                </div>
              ))}
              
              <div className="text-center p-4 text-gray-500 text-sm">
                <p>No more conversations</p>
                <p className="mt-1">Post a new case to connect with lawyers</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Messages Area */}
          <Card className="md:col-span-2 h-[70vh] flex flex-col">
            <CardHeader className="border-b pb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <CardTitle className="text-lg">Advocate 1</CardTitle>
                  <p className="text-sm text-gray-600">Property Law Specialist</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="flex-grow overflow-y-auto p-4 space-y-4">
              <div className="flex justify-end">
                <div className="bg-client text-white rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">Hello, I have posted a case about my property dispute. Can you help me?</p>
                  <span className="text-xs text-white/80 block mt-1">Yesterday, 4:30 PM</span>
                </div>
              </div>
              
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">Hello! Yes, I've reviewed your case details. I specialize in property disputes and would be happy to help. Can you tell me when the dispute began?</p>
                  <span className="text-xs text-gray-500 block mt-1">Yesterday, 4:45 PM</span>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="bg-client text-white rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">The issue started about 6 months ago when my neighbor built a fence that I believe is on my property.</p>
                  <span className="text-xs text-white/80 block mt-1">Yesterday, 5:00 PM</span>
                </div>
              </div>
              
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">I see. Do you have any survey documents or property papers that clearly show the boundaries?</p>
                  <span className="text-xs text-gray-500 block mt-1">Yesterday, 5:05 PM</span>
                </div>
              </div>
            </CardContent>
            
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <Input placeholder="Type a message..." className="flex-grow" />
                <Button className="bg-client hover:bg-client-light">Send</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClientMessages;
