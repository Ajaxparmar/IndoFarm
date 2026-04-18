import { NextResponse } from 'next/server';
import { GoogleGenAI, Type } from "@google/genai";
import { PRODUCTS } from '@/src/constants';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function POST(request: Request) {
  try {
    const { query } = await request.json();
    
    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User is looking for: "${query}". 
      Here is our product catalog: ${JSON.stringify(PRODUCTS.map(p => ({ id: p.id, name: p.name, description: p.description, category: p.category })))}
      Recommend exactly 2 products that best match the user's intent. Explain why in a short sentence.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              productId: { type: Type.STRING },
              reason: { type: Type.STRING }
            },
            required: ["productId", "reason"]
          }
        }
      }
    });

    const recommendationsData = JSON.parse(response.text || "[]");
    const results = recommendationsData.map((rec: any) => ({
      ...PRODUCTS.find(p => p.id === rec.productId),
      recommendationReason: rec.reason
    })).filter((p: any) => p.id);

    return NextResponse.json(results);
  } catch (error) {
    console.error("Gemini Recommendation Error:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
