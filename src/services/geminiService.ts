import { GoogleGenAI, Type } from "@google/genai";
import { PRODUCTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getRecommendations(userPrompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User is looking for: "${userPrompt}". 
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

    const recommendations = JSON.parse(response.text || "[]");
    return recommendations.map((rec: any) => ({
      ...PRODUCTS.find(p => p.id === rec.productId),
      recommendationReason: rec.reason
    })).filter((p: any) => p.id); // Filter out any mismatched IDs
  } catch (error) {
    console.error("Gemini Recommendation Error:", error);
    return [];
  }
}
