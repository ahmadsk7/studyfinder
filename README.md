# Focus Zone Picker

A web application that helps students find the perfect study spot on campus based on their focus goals.

## Features

- 🎯 Choose your focus goal (solo deep work, creative thinking, etc.)
- 🤖 AI-powered spot recommendations
- 📊 Detailed spot information (noise level, lighting, tags)
- 🧭 Interactive map view (coming soon)

## Tech Stack

- Frontend: React + TypeScript
- Backend: Firebase Firestore
- AI: OpenAI GPT-4
- Styling: TailwindCSS

## Setup

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example` and fill in your Firebase and OpenAI credentials:

   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Firebase Setup

1. Create a new Firebase project
2. Enable Firestore Database
3. Add your Firebase configuration to `.env`

## OpenAI Setup

1. Get an API key from OpenAI
2. Add your API key to `.env`

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT
