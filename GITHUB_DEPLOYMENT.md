# GitHub Deployment Commands & Setup Guide

This document records the exact steps and commands used to set up and deploy the **Portfolio** web application to **GitHub Pages**.

---

## 🛠️ Summary of Commands Executed

### 1. Inspecting Git Repository & Remote Configuration
```bash
# Check working tree status and untracked files
git status

# Verify GitHub remote repository origin URL
git remote -v
```

### 2. Testing Production Build Locally
```bash
# Compile TypeScript and bundle Vite application
npm run build
```

### 3. Installing Deployment Dependencies
```bash
# Install gh-pages helper package as a dev dependency
npm install -D gh-pages
```

### 4. Staging & Committing Code Changes
```bash
# Stage all new, modified, and untracked files
git add .

# Commit workflow files, base path fixes, and gh-pages scripts
git commit -m "Configure GitHub Actions workflow and base path for GitHub Pages"
git commit -m "Add gh-pages deployment scripts"
git commit -m "Fix image paths using import.meta.env.BASE_URL for GitHub Pages base path"
```

### 5. Pushing to GitHub & Deploying
```bash
# Push main branch updates to remote GitHub repository
git push origin main

# Build dist folder and deploy directly to gh-pages branch
npm run deploy
```

---

## ⚙️ Configuration Files Added & Updated

### A. `package.json` (Deployment Scripts)
Added `predeploy` and `deploy` scripts:
```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### B. `vite.config.ts` (Base Path for GitHub Pages Subpath)
Configured `base` path so static assets load correctly under `/portfolio/`:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/portfolio/',
})
```

### C. `.github/workflows/deploy.yml` (Automated CI/CD Workflow)
Created GitHub Actions workflow file to build and publish automatically when pushing to `main`.

---

## 🔄 Future Deployment Workflow (How to Update Your Site)

Whenever you make changes to your portfolio code in the future:

### Method 1: One-Command Manual Deployment (Fastest)
Run this single command in your terminal:
```bash
npm run deploy
```
*(This automatically runs `npm run build` and pushes the `dist` folder to your `gh-pages` branch).*

### Method 2: Standard Git Push (GitHub Actions)
```bash
git add .
git commit -m "Your update message"
git push origin main
```

---

## 🌐 Live Portfolio URL
- **Site URL**: [https://manpreetsandhu2515.github.io/portfolio/](https://manpreetsandhu2515.github.io/portfolio/)
- **GitHub Repository**: [https://github.com/manpreetsandhu2515/portfolio](https://github.com/manpreetsandhu2515/portfolio)
