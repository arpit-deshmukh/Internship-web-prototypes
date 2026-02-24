# Visuals v1.0 - Video Conferencing App

A full-stack video conferencing application with real-time WebRTC communication.

## Features

- User authentication (Email/Password & Google OAuth)
- Create and join video meetings
- Real-time video/audio communication
- Multiple participants support
- Guest meeting support
- Meeting controls (mute, video toggle, leave)

## Tech Stack

### Backend
- Node.js + Express
- MongoDB (Mongoose)
- Socket.io for real-time communication
- JWT authentication
- Passport.js for OAuth

### Frontend
- React 19
- Vite
- Tailwind CSS
- Socket.io Client
- WebRTC

## Setup

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
MONGO_URI=mongodb://localhost:27017/visuals
JWT_SECRET=your-secret-key-here-change-in-production
PORT=5000
FRONTEND_URL=http://localhost:5173
BASE_URL=http://localhost:5000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

4. Start the server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
VITE_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm run dev
```

## Environment Variables

### Backend (.env)
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `PORT` - Server port (default: 5000)
- `FRONTEND_URL` - Frontend URL for CORS
- `BASE_URL` - Backend base URL
- `GOOGLE_CLIENT_ID` - Google OAuth client ID
- `GOOGLE_CLIENT_SECRET` - Google OAuth client secret

### Frontend (.env)
- `VITE_API_URL` - Backend API URL

## Usage

1. Start MongoDB locally or use a cloud instance
2. Start the backend server
3. Start the frontend development server
4. Open http://localhost:5173 in your browser
5. Register/Login to create or join meetings

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (protected)
- `GET /api/auth/google` - Initiate Google OAuth
- `GET /api/auth/google/callback` - Google OAuth callback

### Meetings
- `POST /api/meetings/create` - Create meeting (authenticated)
- `POST /api/meetings/create-guest` - Create guest meeting
- `GET /api/meetings/:id` - Join/validate meeting

## Production Deployment

1. Set secure environment variables
2. Use a production MongoDB instance
3. Configure CORS properly
4. Use HTTPS for WebRTC
5. Consider adding TURN servers for better connectivity

