import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateWorkoutPlan(userData) {
  const { gender, weight, height, goal, diet } = userData;

  const goalMap = {
    lose_weight: 'perder peso, com foco em queima de gordura e definição muscular',
    build_muscle: 'ganhar massa muscular e força',
    keep_fit: 'manter a forma e o peso atual',
  };

  const dietMap = {
    standard: 'uma dieta padrão e equilibrada',
    keto: 'uma dieta cetogênica, com foco em gorduras',
    vegan: 'uma dieta vegana, baseada em vegetais',
    intermittent_fasting: 'jejum intermitente',
  };

  const prompt = `
    Crie um plano de treino para peito e tríceps para uma pessoa com as seguintes características:
    - Gênero: ${gender === 'male' ? 'Masculino' : 'Feminino'}
    - Peso: ${weight} kg
    - Altura: ${height} cm
    - Objetivo Principal: ${goalMap[goal]}
    - Estilo Nutricional: ${dietMap[diet]}

    O plano deve ser de nível intermediário, com duração de aproximadamente 45 minutos.

    Retorne a resposta em formato JSON, seguindo exatamente esta estrutura:
    {
      "title": "Peito & Tríceps",
      "duration": 45,
      "level": "Intermediário",
      "exercises_count": 8,
      "exercises": [
        {
          "name": "Nome do Exercício 1",
          "sets": "4",
          "reps": "10-12"
        },
        {
          "name": "Nome do Exercício 2",
          "sets": "4",
          "reps": "10-12"
        }
      ]
    }

    Liste exatamente 8 exercícios. Não inclua nenhuma formatação de markdown, apenas o objeto JSON bruto.
  `;

  try {
    const response = await ai.models.generateContent({ contents: prompt, model: 'gemini-3-flash-preview' });
    const text = response.text.replace(/```json|```/g, '').trim();
    return JSON.parse(text);
  } catch (error) {
    console.error('Error generating workout plan:', error);
    // Return a fallback plan in case of an error
    return {
      title: "Peito & Tríceps",
      duration: 45,
      level: "Intermediário",
      exercises_count: 8,
      exercises: [
        { name: "Supino Reto", sets: "4", reps: "10" },
        { name: "Supino Inclinado com Halteres", sets: "4", reps: "12" },
        { name: "Crucifixo", sets: "3", reps: "15" },
        { name: "Flexões", sets: "3", reps: "Até a falha" },
        { name: "Tríceps na Polia", sets: "4", reps: "12" },
        { name: "Tríceps Testa com Barra", sets: "4", reps: "10" },
        { name: "Mergulho no Banco", sets: "3", reps: "15" },
        { name: "Tríceps Coice", sets: "3", reps: "12" },
      ]
    };
  }
}
