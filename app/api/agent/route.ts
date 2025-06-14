import { google } from '@ai-sdk/google';
import { generateText, convertToCoreMessages } from 'ai';

export async function POST(req: Request) {
  try {
    console.log('🚀 API route called');
    const { messages } = await req.json();
    console.log('📝 Messages received:', messages);

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      console.error('❌ GOOGLE_GENERATIVE_AI_API_KEY not found');
      return new Response('Google API key not configured', { status: 500 });
    }
    
    console.log('✅ Google API key found, calling Gemini...');

    const result = await generateText({
      model: google('gemini-1.5-flash'),
      system: 'You are a creative AI assistant that helps generate beautiful poetry and creative content. Be inspiring, thoughtful, and use vivid imagery.',
      messages: convertToCoreMessages(messages),
    });
    
    return new Response(result.text, {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    });
  } catch (error) {
    console.error('Error in agent route:', error);
    
    // Return detailed error for debugging
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(JSON.stringify({ 
      error: 'Internal Server Error', 
      message: errorMessage,
      details: error instanceof Error ? error.stack : 'No stack trace available'
    }), { 
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
} 