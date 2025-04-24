import { NextResponse } from 'next/server';

const FASTAPI_URL = 'https://coursebite.ai/api/cm';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Proxying request to FastAPI:', body);

    const response = await fetch(`${FASTAPI_URL}/courses/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('FastAPI Error:', errorText);
      return NextResponse.json(
        { error: `Failed to fetch courses: ${errorText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('FastAPI Response:', data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
} 