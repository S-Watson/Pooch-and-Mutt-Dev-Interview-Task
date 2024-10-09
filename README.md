
# Pooch & Mutt Developer Test

This project is a React application created as part of a developer test for Pooch & Mutt. It is built using [Create React App](https://github.com/facebook/create-react-app) and styled with [Tailwind CSS](https://tailwindcss.com/).

## Project Overview

The application demonstrates a product detail page for Pooch & Mutt, showcasing the use of React components and Tailwind CSS. The project follows best practices for component naming and organisation, and avoids unnecessary dependencies such as testing libraries.

## Getting Started

To run this project locally, clone the repository and install the necessary dependencies.

### Prerequisites

Ensure you have Node.js and npm (or Yarn) installed on your machine. 

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/S-Watson/Pooch-and-Mutt-Dev-Interview-Task.git
   ```
2. Navigate into the project directory:
   ```bash
   cd pooch-and-mutt-dev-task
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
   or, if you’re using Yarn:
   ```bash
   yarn install
   ```

### Running the Application

To start the application in development mode, run:

```bash
npm start
```

or, with Yarn:

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will automatically reload if you make changes to the code, and any lint errors will appear in the console.

## Building for Production

To build the app for production, use:

```bash
npm run build
```

or, with Yarn:

```bash
yarn build
```

This command will create an optimised build of the application in the `build` folder, ready for deployment.

## Project Structure

- **`src/components`**: Contains reusable components.
- **`src/pages`**: Contains page-level components, such as the Product Detail Page.
- **`src/styles`**: Contains global styles and custom Tailwind CSS configurations.
- **`public`**: Contains static assets like images and the HTML template.

## Available Scripts

- **`npm start`**: Starts the development server.
- **`npm run build`**: Builds the app for production.
- **`npm run eject`**: Ejects the configuration if you need more customisation. Use with caution, as this is a one-way operation.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **React DOM**: Enables React to interact with the DOM.
- **React Scripts**: Scripts and configuration used by Create React App.
- **Tailwind CSS**: A utility-first CSS framework for quickly building custom designs.

## Styling

Tailwind CSS is used for all styling in this project. Custom configurations are managed in the `tailwind.config.js` file, and global styles are added in the `src/styles` folder.

## Additional Resources

For more details on using Create React App, check the [official documentation](https://facebook.github.io/create-react-app/docs/getting-started).

For more information on Tailwind CSS, visit the [Tailwind CSS Documentation](https://tailwindcss.com/docs).
