
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
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/navigation-and-search/navigation-bars/images/navigation-bar-intro_2x.png"
    },
    {
      name: "Search Field",
      description: "A field where people can enter search terms to find relevant content in your app.",
      category: "Search",
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/navigation-and-search/search-fields/images/search-field-intro_2x.png"
    },
    {
      name: "Tab Bar",
      description: "A bar at the bottom of the screen that helps people switch between different app sections.",
      category: "Navigation",
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/navigation-and-search/tab-bars/images/tab-bar-intro_2x.png"
    },
    {
      name: "Toolbar",
      description: "A bar containing controls for performing actions relevant to the current screen.",
      category: "Navigation",
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/navigation-and-search/toolbars/images/toolbar-intro_2x.png"
    },
    {
      name: "Sidebar",
      description: "A column on the side of the screen that helps people navigate between different sections of your app.",
      category: "Navigation",
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/navigation-and-search/sidebars/images/sidebar-intro_2x.png"
    }
  ],
  "presentation": [
    {
      name: "Activity Views",
      description: "A view that offers standard services like sharing content or copying items.",
      category: "Presentation",
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/presentation/activity-views/images/activity-views-intro_2x.png"
    },
    {
      name: "Alerts",
      description: "A brief message about a critical situation that requires acknowledgment.",
      category: "Presentation",
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/presentation/alerts/images/alerts-intro_2x.png"
    },
    {
      name: "Panels",
      description: "A temporary view that appears within the window, providing additional actions or information.",
      category: "Presentation",
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/presentation/panels/images/panels-intro_2x.png"
    },
    {
      name: "Popovers",
      description: "A temporary view that appears above other content when people click or tap a control.",
      category: "Presentation",
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/presentation/popovers/images/popovers-intro_2x.png"
    },
    {
      name: "Sheets",
      description: "A view presented by sliding up from the bottom of the screen, requiring attention before people can continue.",
      category: "Presentation",
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/presentation/sheets/images/sheets-intro_2x.png"
    }
  ],
  "selection-and-input": [
    {
      name: "Buttons",
      description: "Tappable controls that execute an action or make a choice.",
      category: "Input",
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/selection-and-input/buttons/images/buttons-intro_2x.png"
    },
    {
      name: "Color Wells",
      description: "Controls that let people select a color from a color picker.",
      category: "Input",
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/selection-and-input/color-wells/images/color-wells-intro_2x.png"
    },
    {
      name: "Pickers",
      description: "Controls that let people select items or values from a set of options.",
      category: "Input",
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/selection-and-input/pickers/images/pickers-intro_2x.png"
    },
    {
      name: "Sliders",
      description: "Controls for selecting a value from a continuous range of values.",
      category: "Input",
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/selection-and-input/sliders/images/sliders-intro_2x.png"
    },
    {
      name: "Switches",
      description: "Controls that toggle between on and off states.",
      category: "Input",
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/selection-and-input/toggles/images/switches-intro_2x.png"
    }
  ],
  "status": [
    {
      name: "Activity Rings",
      description: "Three colored rings that show progress toward daily activity goals.",
      category: "Status",
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/status/activity-rings/images/activity-rings-intro_2x.png"
    },
    {
      name: "Progress Indicators",
      description: "Visual representations of an ongoing operation's progress.",
      category: "Status",
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/status/progress-indicators/images/progress-indicators-intro_2x.png"
    }
  ],
  "layout-and-organization": [
    {
      name: "Collections",
      description: "Customizable layouts for presenting items in an ordered manner.",
      category: "Layout",
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/layout-and-organization/collections/images/collection-views-intro_2x.png"
    },
    {
      name: "Lists and Tables",
      description: "Components for displaying rows of data in a single column or multiple columns.",
      category: "Layout",
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/layout-and-organization/lists-and-tables/images/tables-intro_2x.png"
    },
    {
      name: "Scroll Views",
      description: "Container views that allow content to be larger than the visible area.",
      category: "Layout",
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/layout-and-organization/scroll-views/images/scroll-views-intro_2x.png"
    },
    {
      name: "Split Views",
      description: "Views that divide the screen into two or more panes.",
      category: "Layout",
      imageUrl: "https://developer.apple.com/design/human-interface-guidelines/components/layout-and-organization/split-views/images/split-views-intro_2x.png"
    }
  ]
};
