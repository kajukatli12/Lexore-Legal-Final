
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ClientRegistrationForm from '@/components/registration/ClientRegistrationForm';
import LawyerRegistrationForm from '@/components/registration/LawyerRegistrationForm';

const Register = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Tabs defaultValue="client" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="client">Register as Client</TabsTrigger>
              <TabsTrigger value="lawyer">Register as Lawyer</TabsTrigger>
            </TabsList>
            
            {/* Client Registration */}
            <TabsContent value="client">
              <ClientRegistrationForm />
            </TabsContent>
            
            {/* Lawyer Registration */}
            <TabsContent value="lawyer">
              <LawyerRegistrationForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
