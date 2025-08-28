# Architecture Website

## Overview
This project is a website for an architecture company, showcasing its projects, mission, and team. It is built using TypeScript and React.

## Folder Structure
```
architecture-website
├── src
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ProjectCard.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── Projects.tsx
│   ├── styles
│   │   └── main.css
│   ├── assets
│   │   └── logo.svg
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd architecture-website
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Project
To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

### Building for Production
To create a production build, run:
```
npm run build
```

## Components
- **Header**: Navigation bar and company logo.
- **Footer**: Copyright information and social media links.
- **ProjectCard**: Displays project details in a card format.

## Pages
- **Home**: Landing page with an introduction and featured projects.
- **About**: Information about the company, its mission, and team.
- **Projects**: Lists all completed projects using the `ProjectCard` component.

## Styles
The main styles for the website are located in `src/styles/main.css`.

## Assets
The company logo is stored in `src/assets/logo.svg`.

## License
This project is licensed under the MIT License.