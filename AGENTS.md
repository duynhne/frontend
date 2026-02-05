# frontend

> AI Agent context for understanding this repository

## 📋 Overview

E-commerce frontend application built with React and Vite. Provides the user interface for browsing products, managing cart, and processing orders.

## 🏗️ Architecture

```
frontend/
├── src/
│   ├── api/              # API client (axios)
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── context/          # React Context providers
│   └── App.jsx           # Main app component
├── index.html
├── vite.config.js
├── package.json
├── Dockerfile
└── nginx.conf
```

## 🔧 Tech Stack

| Component | Technology |
|-----------|------------|
| **Framework** | React 18 |
| **Build Tool** | Vite 6 |
| **Routing** | React Router v6 |
| **HTTP Client** | Axios |
| **Data Fetching** | SWR |
| **Linting** | ESLint |

## 📦 Dependencies

- `react` / `react-dom` - UI library
- `react-router-dom` - Client-side routing
- `axios` - HTTP client
- `swr` - Data fetching/caching

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Environment Variables

Create `.env` file:

```env
VITE_API_URL=http://localhost:8080/api/v1
```

### Docker Build

```bash
docker build -t frontend .
docker run -p 80:80 frontend
```

## 🚀 CI/CD

Uses reusable GitHub Actions from [shared-workflows](https://github.com/duyhenryer/shared-workflows):

- **docker-build.yml** - Build and push to GHCR

## 📐 Code Patterns

- **Functional components** with hooks
- **SWR** for server state management
- **Axios interceptors** for auth token handling
- **React Context** for global state (auth, cart)

## 🔗 Backend Services

Communicates with:
- `auth-service` - Login/Register
- `user-service` - User profile
- `product-service` - Product catalog
- `cart-service` - Shopping cart
- `order-service` - Order processing
