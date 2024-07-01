import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import MenuSection from "../_components/MenuSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import ReviewSection from "../_components/ReviewSection";


function RestroTabs({restaurant}) {
    return (
        <Tabs defaultValue="category" className="w-full mt-10">
        <TabsList>
          <TabsTrigger value="category">Category</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>

        </TabsList>
        <TabsContent value="category">
            <MenuSection restaurant={restaurant}/>
        </TabsContent>
        <TabsContent value="about">About</TabsContent>
        <TabsContent value="reviews">
          <ReviewSection restaurant={restaurant}/>
        </TabsContent>

      </Tabs>
      
    )
}

export default RestroTabs;