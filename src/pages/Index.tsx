
import React, { useState } from "react";
import ComponentDisplay, { ComponentInfo } from "@/components/ComponentDisplay";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Search, Zap, Sparkles, ArrowRight, Apple } from "lucide-react";
import { Link } from "react-router-dom";

const componentsData: Record<string, ComponentInfo[]> = {
  layout: [
    {
      name: "Header",
      description: "The top section of a website that typically contains the logo, navigation menu, and sometimes a search bar.",
      category: "Layout",
    },
    {
      name: "Footer",
      description: "The bottom section of a website that usually contains links, contact information, and copyright notices.",
      category: "Layout",
    },
    {
      name: "Sidebar",
      description: "A vertical column on the side of a page that contains additional navigation or information.",
      category: "Layout",
    },
    {
      name: "Container",
      description: "A box that holds other components and helps organize the page layout.",
      category: "Layout",
    },
    {
      name: "Grid",
      description: "A layout system that arranges components in rows and columns.",
      category: "Layout",
    },
  ],
  navigation: [
    {
      name: "Navbar",
      description: "A bar that contains links to important pages on the website.",
      category: "Navigation",
    },
    {
      name: "Menu",
      description: "A list of options that users can select from.",
      category: "Navigation",
    },
    {
      name: "Link",
      description: "Text or image that you can click to go to another page or website.",
      category: "Navigation",
    },
    {
      name: "Breadcrumb",
      description: "A trail of links that shows your current location in a website.",
      category: "Navigation",
    },
    {
      name: "Tab",
      description: "A clickable section that shows different content when selected.",
      category: "Navigation",
    },
  ],
  inputs: [
    {
      name: "Button",
      description: "A clickable component that performs an action when pressed.",
      category: "Input",
    },
    {
      name: "Text Input",
      description: "A box where you can type text, like your name or email.",
      category: "Input",
    },
    {
      name: "Checkbox",
      description: "A small box that you can click to select or deselect an option.",
      category: "Input",
    },
    {
      name: "Radio Button",
      description: "A circular button that lets you select one option from a group.",
      category: "Input",
    },
    {
      name: "Dropdown",
      description: "A menu that opens when clicked to show more options.",
      category: "Input",
    },
  ],
  display: [
    {
      name: "Card",
      description: "A box that contains related information, like a product or article.",
      category: "Display",
    },
    {
      name: "Modal",
      description: "A popup window that appears over the current page.",
      category: "Display",
    },
    {
      name: "Tooltip",
      description: "A small popup that shows extra information when you hover over something.",
      category: "Display",
    },
    {
      name: "Accordion",
      description: "A list of items that can be expanded or collapsed to show or hide content.",
      category: "Display",
    },
    {
      name: "Carousel",
      description: "A slideshow that cycles through images or content.",
      category: "Display",
    },
  ],
};

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("layout");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-red-50">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-r from-blue-500/10 to-red-500/10">
          <div className="max-w-7xl mx-auto text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/lovable-uploads/63614492-2b2f-4352-8cf4-d60fa888cf1a.png')] bg-contain bg-center bg-no-repeat opacity-10"></div>
            
            <div className="relative z-10">
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-6 animate-pulse">
                <Sparkles className="inline-block mr-1 h-4 w-4" /> Component Explorer
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight animate-fade-in text-shadow-md" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
                What's That Component?
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in">
                Discover and learn about web components. Click to highlight, double-click to copy and use in your projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                <Button size="lg" className="rounded-full px-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                  Get Started <Zap className="ml-2 h-4 w-4" />
                </Button>
                <Link to="/apple-components">
                  <Button size="lg" variant="outline" className="rounded-full px-8 border-blue-500 text-blue-600 hover:bg-blue-100">
                    <Apple className="mr-2 h-4 w-4" /> Apple Components
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Component Showcase */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-blue-50 to-red-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Web Component Library</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse our collection of common web components. Click to highlight, double-click to copy to clipboard.
              </p>
            </div>

            <Tabs 
              defaultValue="layout" 
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="w-full"
            >
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-card/50">
                  <TabsTrigger value="layout" className="px-6 data-[state=active]:bg-blue-500 data-[state=active]:text-white">Layout</TabsTrigger>
                  <TabsTrigger value="navigation" className="px-6 data-[state=active]:bg-red-500 data-[state=active]:text-white">Navigation</TabsTrigger>
                  <TabsTrigger value="inputs" className="px-6 data-[state=active]:bg-yellow-500 data-[state=active]:text-black">Inputs</TabsTrigger>
                  <TabsTrigger value="display" className="px-6 data-[state=active]:bg-green-500 data-[state=active]:text-white">Display</TabsTrigger>
                </TabsList>
              </div>

              {Object.keys(componentsData).map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {componentsData[category].map((component, index) => (
                      <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <ComponentDisplay
                          component={component}
                          className="h-full shadow-sm hover:shadow-md"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-red-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How To Use</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore components in three simple steps:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 glass-card border border-border/50 hover:border-blue-300 transition-colors bg-white/80 hover:bg-white">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Browse Components</h3>
                <p className="text-muted-foreground text-center">
                  Explore our collection of web components organized by category.
                </p>
              </Card>

              <Card className="p-6 glass-card border border-border/50 hover:border-red-300 transition-colors bg-white/80 hover:bg-white">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Learn Details</h3>
                <p className="text-muted-foreground text-center">
                  Hover over components to see detailed descriptions and usage information.
                </p>
              </Card>

              <Card className="p-6 glass-card border border-border/50 hover:border-yellow-300 transition-colors bg-white/80 hover:bg-white">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Use In Projects</h3>
                <p className="text-muted-foreground text-center">
                  Double-click to copy component names for use in your web development projects.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* New Apple HIG Section */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-blue-50 to-red-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center mb-4 p-2 bg-gray-100 rounded-full">
                <Apple className="h-8 w-8 text-gray-700" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Rare Apple Components</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the elusive Apple species with their unique design patterns and elegant behaviors.
              </p>
            </div>
            
            <div className="flex justify-center mt-8">
              <Link to="/apple-components">
                <Button size="lg" className="rounded-full px-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                  Find Apple Components <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-yellow-400/10 to-red-500/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready To Be A Component Master?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start your journey to discover, learn, and master all the web components in our world!
            </p>
            <Button size="lg" className="rounded-full px-8 bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white">
              Begin Your Adventure <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
