# Portfolio Website

This text is a React-based portfolio website designed to showcase projects, skills, and resume. It is built with `react`, `react-bootstrap`, and various other libraries for a dynamic and responsive user experience.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   **Node.js**: You need to have Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1.  **Clone the repository** (or download and extract the ZIP):
    ```bash
    git clone https://github.com/dvsreedy/Donapati_Venkata_Sreekar_Reddy.github.io.git
    cd Donapati_Venkata_Sreekar_Reddy.github.io
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```
    *Note: If you encounter errors regarding dependencies, try running `npm install --legacy-peer-deps`.*

## Local Development

To start the development server and view the website locally:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

## Deployment

This project is configured to deploy to **GitHub Pages**.

### 1. Configuration (One-time setup)
Ensure your `package.json` has the correct `homepage` field:
```json
"homepage": "https://<your-username>.github.io/<repo-name>"
```

### 2. Deploy Command
To deploy the latest version of your site:

```bash
npm run deploy
```
This command builds the project and pushes it to the `gh-pages` branch.

### 3. GitHub Settings
After deploying, go to your repository on GitHub:
1.  Click **Settings**.
2.  Select **Pages** from the sidebar.
3.  Under **Source**, choose **Deploy from a branch**.
4.  Select the **`gh-pages`** branch and the **`/ (root)`** folder.
5.  Click **Save**.

Your site should be live at your homepage URL shortly.

## Daily Workflow: How to Edit and Publish Changes

Here is a step-by-step guide for making changes to your website:

### Step 1: Start the Local Development Environment
1.  Open your terminal (Command Prompt, PowerShell, or VS Code terminal).
2.  Navigate to the project folder.
3.  Run the start command:
    ```bash
    npm start
    ```
4.  This works like a "Live Preview". It will open `http://localhost:3000` in your browser. Keep this terminal open!

### Step 2: Make Your Changes
1.  Open the project in your code editor (e.g., VS Code).
2.  Edit files in the `src` folder (e.g., `src/components/About/About.js` to change text).
3.  Save the file. The browser at `http://localhost:3000` will automatically update to show your changes.

### Step 3: Deploy to GitHub Pages (Publishing)
Once you are happy with your changes locally, you need to publish them to the internet.

1.  **Stop the server** (optional): Press `Ctrl + C` in your terminal to stop `npm start`.
2.  **Enable Git (CMD users only)**: If you saw `git` errors before, run this first:
    ```cmd
    set PATH=%PATH%;C:\Program Files\Git\cmd
    ```
3.  **Run the deploy command**:
    ```bash
    npm run deploy
    ```
4.  Wait for the script to finish and say "Published".
5.  Your changes will appear on your live website (e.g., `https://dvsreedy.github.io/Donapati_Venkata_Sreekar_Reddy.github.io`) in a few minutes.

## Credits

You can fork this repo to modify and make changes of your own. Please give me proper credit by linking back to [Sreekar](https://github.com/dvsreedy/Portfolio). Thanks!
