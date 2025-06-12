# NoTraffic Polygons Client

## Overview
A React app using Vite and React-Konva to create, display, and delete polygons on a canvas with a background image. Polygons are fetched from and synced with a backend service.

## Tech Stack
- React 18+
- Vite
- React-Konva
- TypeScript

## Features
- Loads background image from a constant URL
- Fetches polygons from backend on load
- Click to add polygon points
- Delete polygons via "X" button near them
- Clear all polygons and points

## Possible Improvements
- State manager instead of React hooks
- UI tests
- Show Polygon metadata on hover
- Dockerize UI

## Setup & Run

```bash
npm install
npm run dev
