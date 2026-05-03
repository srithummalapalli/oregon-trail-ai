# AI Oregon Trail

AI Oregon Trail is a small full-stack MVP for an Oregon Trail-inspired survival game. The current build uses a React/Vite client, a Node/Express server, and a mock event generator that can later be replaced with a real AI service.

## Tech Stack

- React + Vite
- Node.js + Express
- JavaScript
- Plain CSS

## Project Structure

```text
client/   React app
server/   Express API
shared/   Shared game constants
```

## Setup

Install server dependencies:

```bash
cd server
npm install
```

Install client dependencies:

```bash
cd client
npm install
```

## Run The App

Start the server:

```bash
cd server
node src/app.js
```

The server runs on `http://localhost:5000`.

Start the client in a second terminal:

```bash
cd client
npm run dev
```

Open the Vite URL printed in the terminal. Clicking `Travel` calls the backend and displays the returned event.

## API

### `GET /api/event`

Returns one mock trail event:

```json
{
  "title": "Broken Wagon Wheel",
  "description": "A wagon wheel cracks on rocky ground.",
  "choices": [
    {
      "text": "Repair it carefully",
      "effects": { "health": 0, "food": -1, "morale": 1 }
    },
    {
      "text": "Ignore and keep moving",
      "effects": { "health": -5, "morale": -1 }
    }
  ]
}
```

## Verification

- Start the server with `cd server` and `node src/app.js`.
- Start the client with `cd client` and `npm run dev`.
- Visit `http://localhost:5000/api/event` and confirm it returns valid JSON.
- Click `Travel` in the client and confirm the event renders.
- Stop the server, click `Travel`, and confirm the client shows an error state.
