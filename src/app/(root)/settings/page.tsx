import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

function page() {
    return (
        <div className='p-8'>
            <div className='bg-white p-4 rounded-xl'>
                <Tabs defaultValue="editProfile" className="w-full">
                    <TabsList>
                        <TabsTrigger value="editProfile">Edit Profile</TabsTrigger>
                        <TabsTrigger value="preferences">Preferences</TabsTrigger>
                        <TabsTrigger value="security">Security</TabsTrigger>
                    </TabsList>
                    <TabsContent value="editProfile">Make changes to your account here.</TabsContent>
                    <TabsContent value="preferences">Update your settings here.</TabsContent>
                    <TabsContent value="security">Change your password here.</TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default page