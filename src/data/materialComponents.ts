
export interface MaterialComponent {
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  url?: string;
}

// Data gathered from Material Design 3: https://m3.material.io/components
export const materialComponents: Record<string, MaterialComponent[]> = {
  "actions": [
    {
      name: "Common Buttons",
      description: "Buttons help people initiate actions, from sending an email, to sharing a document, to liking a post.",
      category: "Actions",
      imageUrl: "https://placehold.co/600x400/e0e7ff/6366f1?text=Common+Buttons",
      url: "https://m3.material.io/components/buttons/overview"
    },
    {
      name: "FAB",
      description: "A floating action button (FAB) represents the primary action of a screen.",
      category: "Actions",
      imageUrl: "https://placehold.co/600x400/e0e7ff/6366f1?text=FAB",
      url: "https://m3.material.io/components/floating-action-button/overview"
    },
    {
      name: "Icon Buttons",
      description: "Icon buttons help people take supplementary actions with a single tap.",
      category: "Actions",
      imageUrl: "https://placehold.co/600x400/e0e7ff/6366f1?text=Icon+Buttons",
      url: "https://m3.material.io/components/icon-button/overview"
    },
    {
      name: "Segmented Buttons",
      description: "Segmented buttons help people select options, switch views, or sort elements.",
      category: "Actions",
      imageUrl: "https://placehold.co/600x400/e0e7ff/6366f1?text=Segmented+Buttons",
      url: "https://m3.material.io/components/segmented-button/overview"
    }
  ],
  "communication": [
    {
      name: "Badges",
      description: "Badges show notifications, counts, or status information on navigation items and icons.",
      category: "Communication",
      imageUrl: "https://placehold.co/600x400/dcfce7/22c55e?text=Badges",
      url: "https://m3.material.io/components/badges/overview"
    },
    {
      name: "Progress indicators",
      description: "Progress indicators express an unspecified wait time or display the length of a process.",
      category: "Communication",
      imageUrl: "https://placehold.co/600x400/dcfce7/22c55e?text=Progress+indicators",
      url: "https://m3.material.io/components/progress-indicators/overview"
    },
    {
      name: "Snackbars",
      description: "Snackbars provide brief messages about app processes at the bottom of the screen.",
      category: "Communication",
      imageUrl: "https://placehold.co/600x400/dcfce7/22c55e?text=Snackbars",
      url: "https://m3.material.io/components/snackbar/overview"
    },
    {
      name: "Tooltips",
      description: "Tooltips show informative text when users hover over, focus on, or tap an element.",
      category: "Communication",
      imageUrl: "https://placehold.co/600x400/dcfce7/22c55e?text=Tooltips",
      url: "https://m3.material.io/components/tooltips/overview"
    }
  ],
  "containment": [
    {
      name: "Bottom App Bar",
      description: "The bottom app bar displays navigation and key actions at the bottom of mobile screens.",
      category: "Containment",
      imageUrl: "https://placehold.co/600x400/fef3c7/f59e0b?text=Bottom+App+Bar",
      url: "https://m3.material.io/components/bottom-app-bar/overview"
    },
    {
      name: "Bottom sheets",
      description: "Bottom sheets are surfaces containing supplementary content that are anchored to the bottom of the screen.",
      category: "Containment",
      imageUrl: "https://placehold.co/600x400/fef3c7/f59e0b?text=Bottom+sheets",
      url: "https://m3.material.io/components/bottom-sheets/overview"
    },
    {
      name: "Cards",
      description: "Cards contain content and actions about a single subject.",
      category: "Containment",
      imageUrl: "https://placehold.co/600x400/fef3c7/f59e0b?text=Cards",
      url: "https://m3.material.io/components/cards/overview"
    },
    {
      name: "Carousel",
      description: "A carousel is a scrollable container that allows users to browse through a set of items.",
      category: "Containment",
      imageUrl: "https://placehold.co/600x400/fef3c7/f59e0b?text=Carousel",
      url: "https://m3.material.io/components/carousel/overview"
    },
    {
      name: "Dialogs",
      description: "Dialogs provide important information or ask for user input required to complete a task.",
      category: "Containment",
      imageUrl: "https://placehold.co/600x400/fef3c7/f59e0b?text=Dialogs",
      url: "https://m3.material.io/components/dialogs/overview"
    },
    {
      name: "Dividers",
      description: "Dividers separate content into clear groups.",
      category: "Containment",
      imageUrl: "https://placehold.co/600x400/fef3c7/f59e0b?text=Dividers",
      url: "https://m3.material.io/components/divider/overview"
    },
    {
      name: "Lists",
      description: "Lists are continuous, vertical indexes of text and images.",
      category: "Containment",
      imageUrl: "https://placehold.co/600x400/fef3c7/f59e0b?text=Lists",
      url: "https://m3.material.io/components/lists/overview"
    },
    {
      name: "Side sheets",
      description: "Side sheets are surfaces containing supplementary content that are anchored to the left or right edge of the screen.",
      category: "Containment",
      imageUrl: "https://placehold.co/600x400/fef3c7/f59e0b?text=Side+sheets",
      url: "https://m3.material.io/components/side-sheets/overview"
    },
    {
      name: "Top app bar",
      description: "The top app bar displays information and actions relating to the current screen.",
      category: "Containment",
      imageUrl: "https://placehold.co/600x400/fef3c7/f59e0b?text=Top+app+bar",
      url: "https://m3.material.io/components/top-app-bar/overview"
    }
  ],
  "navigation": [
    {
      name: "Bottom navigation",
      description: "Bottom navigation bars allow movement between primary destinations in an app.",
      category: "Navigation",
      imageUrl: "https://placehold.co/600x400/f3e8ff/a855f7?text=Bottom+navigation",
      url: "https://m3.material.io/components/bottom-navigation-bar/overview"
    },
    {
      name: "Navigation drawer",
      description: "Navigation drawers provide access to destinations and app functionality, such as switching accounts.",
      category: "Navigation",
      imageUrl: "https://placehold.co/600x400/f3e8ff/a855f7?text=Navigation+drawer",
      url: "https://m3.material.io/components/navigation-drawer/overview"
    },
    {
      name: "Navigation rail",
      description: "Navigation rails provide access to primary destinations in apps when using tablet and desktop screens.",
      category: "Navigation",
      imageUrl: "https://placehold.co/600x400/f3e8ff/a855f7?text=Navigation+rail",
      url: "https://m3.material.io/components/navigation-rail/overview"
    },
    {
      name: "Search",
      description: "Search allows users to quickly find app content.",
      category: "Navigation",
      imageUrl: "https://placehold.co/600x400/f3e8ff/a855f7?text=Search",
      url: "https://m3.material.io/components/search/overview"
    },
    {
      name: "Tabs",
      description: "Tabs organize content across different screens, data sets, and other interactions.",
      category: "Navigation",
      imageUrl: "https://placehold.co/600x400/f3e8ff/a855f7?text=Tabs",
      url: "https://m3.material.io/components/tabs/overview"
    }
  ],
  "selection": [
    {
      name: "Checkbox",
      description: "Checkboxes allow users to select one or more items from a set, or to mark one or more items as selected.",
      category: "Selection",
      imageUrl: "https://placehold.co/600x400/fee2e2/ef4444?text=Checkbox",
      url: "https://m3.material.io/components/checkbox/overview"
    },
    {
      name: "Chips",
      description: "Chips help people enter information, make selections, filter content, or trigger actions.",
      category: "Selection",
      imageUrl: "https://placehold.co/600x400/fee2e2/ef4444?text=Chips",
      url: "https://m3.material.io/components/chips/overview"
    },
    {
      name: "Date pickers",
      description: "Date pickers let users select a date or range of dates.",
      category: "Selection",
      imageUrl: "https://placehold.co/600x400/fee2e2/ef4444?text=Date+pickers",
      url: "https://m3.material.io/components/date-pickers/overview"
    },
    {
      name: "Menus",
      description: "Menus display a list of choices on temporary surfaces.",
      category: "Selection",
      imageUrl: "https://placehold.co/600x400/fee2e2/ef4444?text=Menus",
      url: "https://m3.material.io/components/menus/overview"
    },
    {
      name: "Radio buttons",
      description: "Radio buttons allow users to select one option from a set.",
      category: "Selection",
      imageUrl: "https://placehold.co/600x400/fee2e2/ef4444?text=Radio+buttons",
      url: "https://m3.material.io/components/radio-button/overview"
    },
    {
      name: "Sliders",
      description: "Sliders allow users to make selections from a range of values.",
      category: "Selection",
      imageUrl: "https://placehold.co/600x400/fee2e2/ef4444?text=Sliders",
      url: "https://m3.material.io/components/sliders/overview"
    },
    {
      name: "Switches",
      description: "Switches toggle the state of a single item on or off.",
      category: "Selection",
      imageUrl: "https://placehold.co/600x400/fee2e2/ef4444?text=Switches",
      url: "https://m3.material.io/components/switch/overview"
    },
    {
      name: "Time pickers",
      description: "Time pickers help users select and set a specific time.",
      category: "Selection",
      imageUrl: "https://placehold.co/600x400/fee2e2/ef4444?text=Time+pickers",
      url: "https://m3.material.io/components/time-pickers/overview"
    }
  ],
  "text-inputs": [
    {
      name: "Text Fields",
      description: "Text fields let users enter and edit text.",
      category: "Text Inputs",
      imageUrl: "https://placehold.co/600x400/dbeafe/3b82f6?text=Text+Fields",
      url: "https://m3.material.io/components/text-fields/overview"
    }
  ]
};
