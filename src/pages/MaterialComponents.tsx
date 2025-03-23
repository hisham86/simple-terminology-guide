
import React, { useState } from "react";
import MaterialComponentDisplay from "@/components/MaterialComponentDisplay";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Box, CheckSquare, ExternalLink, Layout, Menu, MousePointer, Navigation, Search, Type } from "lucide-react";
import { materialComponents } from "@/data/materialComponents";
import { Link } from "react-router-dom";

const MaterialComponents = () => {
  const [activeCategory, setActiveCategory] = useState("actions");
  const categoryIcons: Record<string, React.ReactNode> = {
    "actions": <MousePointer className="h-5 w-5" />,
    "communication": <ExternalLink className="h-5 w-5" />,
    "containment": <Box className="h-5 w-5" />,
    "navigation": <Navigation className="h-5 w-5" />,
    "selection": <CheckSquare className="h-5 w-5" />,
    "text-inputs": <Type className="h-5 w-5" />
  };

  const categoryLabels: Record<string, string> = {
    "actions": "Actions",
    "communication": "Communication",
    "containment": "Containment",
    "navigation": "Navigation",
    "selection": "Selection",
    "text-inputs": "Text Inputs"
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground mb-8 hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
              <div>
                <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
                  Google Material Design 3
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                  Material Design Components
                </h1>
                <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
                  Explore Google's Material Design 3 components and learn their terminology. Click to learn more, double-click to copy.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Menu className="h-8 w-8 text-muted-foreground" />
                <span className="text-lg font-medium">Source: Material Design 3</span>
              </div>
            </div>

            <Tabs 
              defaultValue="actions" 
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="w-full"
            >
              <div className="flex justify-center mb-10 overflow-x-auto pb-2">
                <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2">
                  {Object.keys(materialComponents).map((category) => (
                    <TabsTrigger 
                      key={category} 
                      value={category} 
                      className="gap-2 px-3 py-2"
                    >
                      <span className="hidden md:inline">{categoryIcons[category]}</span>
                      <span className="truncate">{categoryLabels[category]}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {Object.keys(materialComponents).map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {materialComponents[category].map((component, index) => (
                      <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <MaterialComponentDisplay
                          component={component}
                          className="h-full"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Compare UI Design Systems</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore Apple's Human Interface Guidelines for a different design approach.
            </p>
            <Link to="/apple-components">
              <Button size="lg" className="rounded-full px-8">
                View Apple Components
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MaterialComponents;
