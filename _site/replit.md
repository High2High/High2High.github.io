# Not Seeing High 2 High Podcast

## Overview

This is a full-stack web application for "Not Seeing High 2 High Podcast" - a platform featuring conversations with George & Jess. The application is built with a modern TypeScript stack featuring React frontend, Express backend, and PostgreSQL database using Drizzle ORM.

## User Preferences

- Preferred communication style: Simple, everyday language
- Design preferences: Green color scheme (mild-dark green to light-green gradient)
- Podcast branding: "Not Seeing High 2 High" with subtitle "Join the sessh with George & Jess"

## System Architecture

The application follows a monorepo structure with three main directories:
- **client/**: React frontend with Vite build system
- **server/**: Express.js backend API
- **shared/**: Common TypeScript types and database schema

### Technology Stack
- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js, TypeScript, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component Library**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for green-themed branding
- **Icons**: React Icons (Font Awesome, Lucide)
- **Build Tool**: Vite with TypeScript support
- **Development**: Hot module replacement and runtime error overlay
- **Color Scheme**: Green gradient theme (dark green to light green) throughout UI components

### Backend Architecture
- **API Framework**: Express.js with TypeScript
- **Middleware**: JSON parsing, URL encoding, request logging
- **Error Handling**: Centralized error handling middleware
- **Development**: tsx for TypeScript execution
- **Production**: esbuild for bundling

### Database Schema
- **User Model**: Basic user entity with id, username, and password fields
- **ORM**: Drizzle with PostgreSQL dialect
- **Migrations**: Drizzle Kit for schema management
- **Validation**: Zod schemas for type safety

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express routes handle HTTP requests and responses
3. **Business Logic**: Storage interface abstracts data operations
4. **Data Persistence**: Currently uses in-memory storage with interface for database integration
5. **Response**: JSON responses sent back to client with proper error handling

### Storage Interface
The application uses a storage interface pattern that currently implements in-memory storage but is designed to easily switch to database operations:
- `IStorage` interface defines CRUD operations
- `MemStorage` provides current in-memory implementation
- Ready for PostgreSQL integration via Drizzle ORM

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library

### Database and ORM
- **Neon Database**: Serverless PostgreSQL provider
- **Drizzle ORM**: Type-safe database operations
- **Drizzle Kit**: Database migration management

### Development Tools
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type safety and enhanced developer experience
- **esbuild**: Fast JavaScript bundler for production

### Frontend Libraries
- **React Hook Form**: Form state management
- **TanStack Query**: Server state management
- **Wouter**: Lightweight router
- **date-fns**: Date utility library

## Deployment Strategy

### Development
- Frontend: Vite dev server with HMR
- Backend: tsx for TypeScript execution
- Database: Local PostgreSQL or Neon development instance

### Production Build
- Frontend: Vite builds to `dist/public`
- Backend: esbuild bundles server to `dist/index.js`
- Static serving: Express serves built frontend assets
- Database: Neon serverless PostgreSQL

### Environment Configuration
- `DATABASE_URL` required for PostgreSQL connection
- Drizzle config points to `shared/schema.ts`
- Migration files generated in `./migrations`

### Key Scripts
- `dev`: Start development server
- `build`: Build both frontend and backend for production
- `start`: Run production server
- `db:push`: Push schema changes to database

The application is designed for deployment on platforms that support Node.js with PostgreSQL databases, with particular optimization for Replit's environment including runtime error modals and cartographer integration.