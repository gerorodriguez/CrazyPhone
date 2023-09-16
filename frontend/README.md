# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Setting Up Your Development Environment for Prettier

If you're joining our project, we use Prettier to ensure consistent code formatting across the codebase. Follow the steps below to set up your development environment to work with our existing Prettier configuration.

## Prerequisites

- Ensure you have [Node.js and npm](https://nodejs.org/) installed.

## Steps to Set Up Prettier

### 1. Clone the Project:
```
git clone https://github.com/gerorodriguez/CrazyPhone.git
```
### 2. Install Dependencies:
Navigate to the project's root directory and install the required dependencies:

```
cd CrazyPhone/frontend
npm install
```
### 3. Integrate with Your Editor:

To make the most of Prettier, it's recommended to integrate it with your code editor:

- **VSCode**:
    - Install the [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension.
    - Configure VSCode to auto-format your code on save by adding the following to your `settings.json`:
 ```json
  {
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll": true
    }
  }
  ```
  The "editor.codeActionsOnSave" option, when set to {"source.fixAll": true}, will automatically apply all available fixes.

- **IntelliJ IDEA** (and other JetBrains IDEs):
    - Open your project in IntelliJ IDEA.
    - Navigate to File > Settings (or IntelliJ IDEA > Preferences on macOS). 
    - In the search box, type "Prettier" and select it from the results. 
    - Ensure the Prettier package is pointing to the local project's node_modules. If not, specify the path (typically it's [project_root]/node_modules/prettier). 
    - Check the "Run on save for files" option and specify the file patterns for Prettier to format on save (e.g., {**/*.{js,ts,jsx,tsx},.*.js}). 
    - Apply changes and close the settings/preferences dialog.