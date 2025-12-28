
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  async getShoppingAdvice(query: string, products: any[]) {
    try {
      // Fix: Create instance right before making an API call and use process.env.API_KEY directly.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const productContext = products.map(p => `${p.name} - £${p.price} (Brand: ${p.brand})`).join(', ');
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are an expert shopping assistant for AgriDirect, a farm and workwear store. 
        A customer is asking: "${query}". 
        Here are some available products: ${productContext}.
        Provide a helpful, friendly recommendation in 2-3 sentences. Focus on value and utility.`,
      });
      
      // Fix: Directly access the .text property (it is not a method).
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm sorry, I'm having trouble connecting to my knowledge base. Please try asking about specific brands like Dickies or Castle!";
    }
  }
}

export const geminiService = new GeminiService();
