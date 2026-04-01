import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.
Ton role : conseiller les clients sur les meilleures destinations temporelles.
Ton ton :
- Professionnel mais chaleureux
- Passionne d'histoire
- Toujours enthousiaste sans etre trop familier
- Expertise en voyage temporel (fictif mais credible)

Tu connais parfaitement :
- Paris 1889 (Belle Epoque, Tour Eiffel, Exposition Universelle) - 12 500 EUR, 3 jours
- Cretace -65M (dinosaures, nature prehistorique) - 18 900 EUR, 2 jours
- Florence 1504 (Renaissance, art, Michel-Ange) - 14 200 EUR, 4 jours

Tu peux suggerer des destinations selon les interets du client.
Reponds toujours en francais et de maniere concise (max 3-4 phrases).`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.MISTRAL_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Mistral API error:", err);
      return NextResponse.json({ error: "Mistral API error" }, { status: 500 });
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "Desolee, je n'ai pas pu generer de reponse.";

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
