
# NoteFlow-reactNative
Task Flow is a powerful app that enables users to effortlessly track tasks and jot down notes, empowering them to establish a structured routine and stay focused on their daily goals.

This application is made using **React-Native**.

## Stack
- **React Native** - ReactJS-based framework that can use native platform capabilities
- **Expo** - Toolset for building and delivering RN apps
- **React Navigation(v6)** - Routing and navigation
- **NativeBase(v3)** - Themable component library
- **React Native Reanimated** - Animations
- **React Native SVG** - Drawing SVG
- **Moti** - Helper module for Reanimated 2

## Project Structure
```
$PROJECT_ROOT
├── App.tsx # Entry point
└── src
├── screens
│ ├── main-screen.tsx # Main screen component
│ ├── about-screen.tsx # About screen component
├── components
│ ├── animated-checkbox.tsx # Animated checkbox component
│ ├── animated-color-box.tsx # Animated color box component
│ ├── animated-stroke.tsx # Animated stroke component
│ ├── animated-task-label.tsx # Animated task label component
│ ├── app-container.tsx # App container component
│ ├── masthead.tsx # Masthead component
│ ├── menu-button.tsx # Menu button component
│ ├── navbar.tsx # Navbar component
│ ├── sidebar.tsx # Sidebar component
│ ├── swipable-view.tsx # Swipable view component
│ ├── task-item.tsx # Task item component
│ ├── task-list.tsx # Task list component
│ └── theme-toggle.tsx # Theme toggle component
├── utils # Custom hooks and helpers
└── assets # Image files
