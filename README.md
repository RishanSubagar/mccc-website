# M C Centreless Website

## Overview

This is the official website for M C Centreless Grinding, built as a modern, responsive web application. The site showcases our purpose, products, and services.

## Technology Stack

- **TypeScript** - Strongly typed JavaScript for robust and maintainable code
- **Firebase** - Backend services including Firestore database, authentication, and hosting

## Deploying to Firebase with GitHub Actions

This project uses GitHub Actions to automatically deploy to Firebase. Follow these steps to deploy:

### Triggering a Deployment

The GitHub Actions workflow will automatically deploy to Firebase when you:
- Manually trigger the workflow from the **Actions** tab

To manually trigger the workflow:
1. Go to the **Actions** tab in your GitHub repository
2. Select the deployment workflow
3. Click **Run workflow** and select your branch
4. Click the green **Run workflow** button

The workflow will build your TypeScript application and deploy it to Firebase Hosting.
