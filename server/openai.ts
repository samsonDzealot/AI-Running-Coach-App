import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY environment variable is required");
}

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function getCoachingAdvice(
  message: string,
  context: { level: string; weeklyGoal: number },
): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "You are an experienced running coach. Provide personalized advice based on the runner's level and goals. Keep responses concise and actionable.",
        },
        {
          role: "user",
          content: `User level: ${context.level}, Weekly goal: ${context.weeklyGoal} runs\n\nUser message: ${message}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 200,
    });

    return response.choices[0].message.content || "I'm not sure how to help with that.";
  } catch (error) {
    console.error("OpenAI API error:", error);
    throw new Error("Failed to get coaching advice");
  }
}
