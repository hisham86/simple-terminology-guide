import React, { useState } from "react";
import ElementDisplay, { ElementInfo } from "@/components/ElementDisplay";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Info, Bookmark, Layout, ArrowRight, Apple } from "lucide-react";
import { Link } from "react-router-dom";

const elementsData: Record<string, ElementInfo[]> = {
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
      description: "A box that holds other elements and helps organize the page layout.",
      category: "Layout",
    },
    {
      name: "Grid",
      description: "A layout system that arranges elements in rows and columns.",
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
      description: "A clickable element that performs an action when pressed.",
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
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-6 animate-fade-in">
              Interactive Learning
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight animate-fade-in">
              Learn Web Terminology <br className="hidden md:block" /> By Clicking Elements
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in">
              Discover the names and purposes of web elements without technical jargon. Click on elements to learn, double-click to copy terminology for your prompts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="rounded-full px-8">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link to="/apple-components">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  <Apple className="mr-2 h-4 w-4" /> Apple UI Components
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Element Showcase */}
        <section className="py-16 px-6 md:px-12 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Interactive Element Explorer</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Click on any element to see its name and description. Double-click to copy the terminology to your clipboard.
              </p>
            </div>

            <Tabs 
              defaultValue="layout" 
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="w-full"
            >
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <TabsTrigger value="layout" className="px-6">Layout</TabsTrigger>
                  <TabsTrigger value="navigation" className="px-6">Navigation</TabsTrigger>
                  <TabsTrigger value="inputs" className="px-6">Inputs</TabsTrigger>
                  <TabsTrigger value="display" className="px-6">Display</TabsTrigger>
                </TabsList>
              </div>

              {Object.keys(elementsData).map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {elementsData[category].map((element, index) => (
                      <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <ElementDisplay
                          element={element}
                          className="h-full bg-card shadow-sm hover:shadow-md"
                        >
                          <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                              {category === "layout" && <Layout className="h-6 w-6 text-primary" />}
                              {category === "navigation" && <ChevronRight className="h-6 w-6 text-primary" />}
                              {category === "inputs" && <Info className="h-6 w-6 text-primary" />}
                              {category === "display" && <Bookmark className="h-6 w-6 text-primary" />}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{element.name}</h3>
                            <p className="text-muted-foreground text-sm">{element.description}</p>
                          </div>
                        </ElementDisplay>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Learning web terminology has never been easier. Just three simple steps:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 glass-card border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Click on Elements</h3>
                <p className="text-muted-foreground text-center">
                  Click on any web element to reveal its name and learn what it does in simple terms.
                </p>
              </Card>

              <Card className="p-6 glass-card border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Read Simple Explanations</h3>
                <p className="text-muted-foreground text-center">
                  See tooltips with easy-to-understand explanations of what each element does.
                </p>
              </Card>

              <Card className="p-6 glass-card border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Double-Click to Copy</h3>
                <p className="text-muted-foreground text-center">
                  Double-click to copy the element name to your clipboard for easy use in your prompts.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* New Apple HIG Section */}
        <section className="py-16 px-6 md:px-12 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center mb-4">
                <Apple className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Explore Apple Design Components</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover official Apple Human Interface Guidelines components with high-quality visuals and simple explanations.
              </p>
            </div>
            
            <div className="flex justify-center mt-8">
              <Link to="/apple-components">
                <Button size="lg" className="rounded-full px-8">
                  Browse Apple Components <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Master UI Terminology?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start clicking on elements to learn their names and use them confidently in your Lovable prompts.
            </p>
            <Button size="lg" className="rounded-full px-8">
              Explore All Elements <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
