
export interface AppleComponent {
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  url?: string;
}

// Data gathered from Apple Human Interface Guidelines: https://developer.apple.com/design/human-interface-guidelines/components
export const appleComponents: Record<string, AppleComponent[]> = {
  "navigation-and-search": [
    {
      name: "Navigation Bar",
      description: "A bar that appears at the top of the screen, with a title and optional controls for navigating within an app.",
      category: "Navigation",
      imageUrl: "https://placehold.co/600x400/e0e7ff/818cf8?text=Navigation+Bar"
    },
    {
      name: "Search Field",
      description: "A field where people can enter search terms to find relevant content in your app.",
      category: "Search",
      imageUrl: "https://placehold.co/600x400/e0e7ff/818cf8?text=Search+Field"
    },
    {
      name: "Tab Bar",
      description: "A bar at the bottom of the screen that helps people switch between different app sections.",
      category: "Navigation",
      imageUrl: "https://placehold.co/600x400/e0e7ff/818cf8?text=Tab+Bar"
    },
    {
      name: "Toolbar",
      description: "A bar containing controls for performing actions relevant to the current screen.",
      category: "Navigation",
      imageUrl: "https://placehold.co/600x400/e0e7ff/818cf8?text=Toolbar"
    },
    {
      name: "Sidebar",
      description: "A column on the side of the screen that helps people navigate between different sections of your app.",
      category: "Navigation",
      imageUrl: "https://placehold.co/600x400/e0e7ff/818cf8?text=Sidebar"
    }
  ],
  "presentation": [
    {
      name: "Activity Views",
      description: "A view that offers standard services like sharing content or copying items.",
      category: "Presentation",
      imageUrl: "https://placehold.co/600x400/fef3c7/f59e0b?text=Activity+Views"
    },
    {
      name: "Alerts",
      description: "A brief message about a critical situation that requires acknowledgment.",
      category: "Presentation",
      imageUrl: "https://placehold.co/600x400/fef3c7/f59e0b?text=Alerts"
    },
    {
      name: "Panels",
      description: "A temporary view that appears within the window, providing additional actions or information.",
      category: "Presentation",
      imageUrl: "https://placehold.co/600x400/fef3c7/f59e0b?text=Panels"
    },
    {
      name: "Popovers",
      description: "A temporary view that appears above other content when people click or tap a control.",
      category: "Presentation",
      imageUrl: "https://placehold.co/600x400/fef3c7/f59e0b?text=Popovers"
    },
    {
      name: "Sheets",
      description: "A view presented by sliding up from the bottom of the screen, requiring attention before people can continue.",
      category: "Presentation",
      imageUrl: "https://placehold.co/600x400/fef3c7/f59e0b?text=Sheets"
    }
  ],
  "selection-and-input": [
    {
      name: "Buttons",
      description: "Tappable controls that execute an action or make a choice.",
      category: "Input",
      imageUrl: "https://placehold.co/600x400/dcfce7/22c55e?text=Buttons"
    },
    {
      name: "Color Wells",
      description: "Controls that let people select a color from a color picker.",
      category: "Input",
      imageUrl: "https://placehold.co/600x400/dcfce7/22c55e?text=Color+Wells"
    },
    {
      name: "Pickers",
      description: "Controls that let people select items or values from a set of options.",
      category: "Input",
      imageUrl: "https://placehold.co/600x400/dcfce7/22c55e?text=Pickers"
    },
    {
      name: "Sliders",
      description: "Controls for selecting a value from a continuous range of values.",
      category: "Input",
      imageUrl: "https://placehold.co/600x400/dcfce7/22c55e?text=Sliders"
    },
    {
      name: "Switches",
      description: "Controls that toggle between on and off states.",
      category: "Input",
      imageUrl: "https://placehold.co/600x400/dcfce7/22c55e?text=Switches"
    }
  ],
  "status": [
    {
      name: "Activity Rings",
      description: "Three colored rings that show progress toward daily activity goals.",
      category: "Status",
      imageUrl: "https://placehold.co/600x400/fee2e2/ef4444?text=Activity+Rings"
    },
    {
      name: "Progress Indicators",
      description: "Visual representations of an ongoing operation's progress.",
      category: "Status",
      imageUrl: "https://placehold.co/600x400/fee2e2/ef4444?text=Progress+Indicators"
    }
  ],
  "layout-and-organization": [
    {
      name: "Collections",
      description: "Customizable layouts for presenting items in an ordered manner.",
      category: "Layout",
      imageUrl: "https://placehold.co/600x400/f3e8ff/a855f7?text=Collections"
    },
    {
      name: "Lists and Tables",
      description: "Components for displaying rows of data in a single column or multiple columns.",
      category: "Layout",
      imageUrl: "https://placehold.co/600x400/f3e8ff/a855f7?text=Lists+and+Tables"
    },
    {
      name: "Scroll Views",
      description: "Container views that allow content to be larger than the visible area.",
      category: "Layout",
      imageUrl: "https://placehold.co/600x400/f3e8ff/a855f7?text=Scroll+Views"
    },
    {
      name: "Split Views",
      description: "Views that divide the screen into two or more panes.",
      category: "Layout",
      imageUrl: "https://placehold.co/600x400/f3e8ff/a855f7?text=Split+Views"
    }
  ]
};
