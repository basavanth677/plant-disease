const answers = [
  {
    keywords: ['prevent', 'leaf disease', 'prevention'],
    response: 'A few simple habits go a long way: rotate crops each season, leave space for airflow, water at soil level in the morning, and remove fallen or diseased leaves. Check the undersides of leaves weekly so you can catch changes early.',
  },
  {
    keywords: ['yellow', 'yellowing'],
    response: 'Yellow leaves can come from several things—overwatering, poor drainage, nutrient shortages, or pests. Check soil moisture first: let the top layer dry slightly between watering, and look closely under the leaves for insects or fine webbing.',
  },
  {
    keywords: ['tomato'],
    response: 'For healthier tomatoes, stake or cage plants to keep leaves off the soil, water deeply at the base, and remove lower leaves that touch the ground. Rotate tomatoes to a new spot each season and inspect for spots once a week.',
  },
  {
    keywords: ['fungal', 'fungus'],
    response: 'For fungal problems, start by removing affected leaves and putting them in the trash rather than compost. Improve airflow, avoid wetting foliage, and water in the morning. If it continues to spread, ask your local agricultural extension about treatments approved for your crop.',
  },
]

export function getAdvisorResponse(question) {
  const normalized = question.toLowerCase()
  const match = answers.find(({ keywords }) => keywords.some((keyword) => normalized.includes(keyword)))
  return match?.response ?? 'I can help with that. Start by checking the whole plant—including the undersides of leaves—and note when the symptoms began. If you share the crop and what you see, I can suggest practical next steps. For a precise diagnosis, try uploading a clear leaf photo in Disease Detection.'
}
