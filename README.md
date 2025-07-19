# MonPrime Web

Browser-based AR implementation of MonPrime using Three.js and WebXR.

## Overview

This repository contains the web prototype of MonPrime, allowing players to experience the game directly in their browser without app installation.

## Tech Stack

- **Three.js**: 3D graphics and rendering
- **WebXR**: AR capabilities in browser
- **TypeScript**: Type-safe development
- **Vite**: Fast build tooling
- **Cannon.js**: Physics engine

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## Features

- ✅ WebXR AR mode
- ✅ Touch-based combat
- ✅ Physics-based Mon reactions
- ✅ Real-time multiplayer
- ✅ Progressive Web App

## Project Structure

```
src/
├── core/          # Three.js scene setup
├── ar/            # WebXR integration
├── mons/          # Mon entities
├── combat/        # Battle system
├── ui/            # HUD and interfaces
├── network/       # Backend communication
└── utils/         # Shared utilities
```

## Development

See [TASKS.md](TASKS.md) for the complete task list.

## Related Repositories

- [monprime-unity](https://github.com/toddllm/monprime-unity) - Unity production build
- [monprime-mobile](https://github.com/toddllm/monprime-mobile) - React Native app
- [monprime-game](https://github.com/toddllm/monprime-game) - Game design docs

## Requirements

- Modern browser with WebXR support
- HTTPS for camera access
- Device with camera for AR mode

## Contributing

1. Check [TASKS.md](TASKS.md) for available tasks
2. Create feature branch
3. Submit PR with description
4. Update PROGRESS.md

## License

TBD