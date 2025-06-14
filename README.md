# AI Poem Generator

A beautiful AI-powered poem generator built with Next.js, TypeScript, and the OpenAI API. This project demonstrates LLM integration and modern web development practices.

## 🚀 Features

- **Interactive Poetry Generation**: Create custom poems on any topic
- **Beautiful Modern UI**: Gradient design with smooth animations
- **Quick Prompts**: Pre-defined topics for instant inspiration
- **Real-time Streaming**: Watch poems generate in real-time
- **Responsive Design**: Works perfectly on desktop and mobile

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router and Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 with animations
- **UI Components**: Radix UI and Lucide React icons
- **AI Integration**: AI SDK with OpenAI GPT-4 and Google AI
- **Deployment**: Ready for Vercel

## 📋 Prerequisites

- Node.js 18+ 
- npm or pnpm
- OpenAI API key (or Google AI API key)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd poem-gen-agent
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```
   OPENAI_API_KEY=your-actual-api-key-here
   # OR
   GOOGLE_GENERATIVE_AI_API_KEY=your-google-ai-key-here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

1. **Custom Topics**: Enter any topic in the input field
2. **Quick Prompts**: Click on pre-defined topics for instant poems
3. **Generate**: Click "Generate Poem ✨" or press Enter
4. **Enjoy**: Watch as your AI-generated poem appears with beautiful formatting

## 🏗️ Project Structure

```
poem-gen-agent/
├── app/
│   ├── api/
│   │   └── agent/
│   │       └── route.ts             # API endpoint for AI agent
│   ├── globals.css                  # Global styles
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Main poem generator component
├── components/
│   └── ui/                         # Reusable UI components
├── lib/
│   └── utils.ts                    # Utility functions
├── public/                         # Static assets
├── poem-card.tsx                   # Poem display component
├── components.json                 # Shadcn/ui configuration
├── .env.local                      # Environment variables
└── README.md                       # Project documentation
```

## 🧪 API Endpoints

- `POST /api/agent` - Handles poem generation requests
  - **Input**: Messages array with user prompts  
  - **Output**: Streaming text response from OpenAI GPT-4 or Google AI

## 🎨 Customization

### Adding New Quick Prompts
Edit the `quickPrompts` array in `app/page.tsx`:

```typescript
const quickPrompts = [
  "your new topic",
  // ... existing prompts
];
```

### Modifying the AI Prompt
Update the prompt template in the API route (`app/api/agent/route.ts`):

```typescript
content: `Your custom prompt template: ${promptTopic}`
```

### Styling Changes
All styles use Tailwind CSS 4. Modify classes directly in the JSX or extend the theme in `tailwind.config.js`.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Add your `OPENAI_API_KEY` or `GOOGLE_GENERATIVE_AI_API_KEY` environment variable in Vercel settings
4. Deploy!

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key from [OpenAI Platform](https://platform.openai.com/api-keys) | Optional* |
| `GOOGLE_GENERATIVE_AI_API_KEY` | Your Google AI API key from [Google AI Studio](https://aistudio.google.com/app/apikey) | Optional* |

*At least one AI provider API key is required.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📚 Learning Resources

- [AI SDK Documentation](https://sdk.vercel.ai/docs)
- [OpenAI API Reference](https://platform.openai.com/docs/api-reference)
- [Google AI SDK](https://ai.google.dev/docs)
- [Next.js Documentation](https://nextjs.org/docs)


---
