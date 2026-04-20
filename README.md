# Telometer Auth API (Node + Express + MongoDB)

Professional starter backend for Flutter authentication.

## Features

- Secure registration and login
- Password hashing with `bcryptjs`
- JWT authentication
- Input validation with `express-validator`
- MongoDB connection via environment variables
- Protected profile route (`/api/auth/me`)

## Run locally

1. Install dependencies:
   - `npm install`
2. Update environment:
   - Edit `.env` values (`MONGODB_URI`, `JWT_SECRET`)
3. Start development server:
   - `npm run dev`

Server starts on `http://localhost:5001`.

## API Endpoints

- `GET /api/health`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me` (Bearer token required)

### Register Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

### Login Body

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

### Auth Header for Protected Route

`Authorization: Bearer <your_jwt_token>`

## Flutter Integration (quick)

- Use your API base URL:
  - Android emulator: `http://10.0.2.2:5001`
  - iOS simulator: `http://localhost:5001`
  - Real device: `http://<your-computer-local-ip>:5001`
- Save returned `token` after login/register.
- Send token in `Authorization` header for authenticated requests.
# telometer-backend
