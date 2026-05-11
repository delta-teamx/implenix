// Real call transcripts from production deployments — names redacted
// or shortened. These power the AnimatedCallTranscript component on
// homepage and industry pages.

export type AnimatedTranscript = {
  id: string;
  title: string;
  caption: string;
  lines: { speaker: 'agent' | 'caller'; text: string }[];
};

export const TRANSCRIPT_HOME_IMPROVEMENT_ES: AnimatedTranscript = {
  id: 'home-improvement-es',
  title: 'florida-green-improvement.log',
  caption: 'Real call · Spanish-language window-assessment booking',
  lines: [
    {
      speaker: 'agent',
      text: "Hola Paula. Soy Wendy de Florida Green Improvement. ¿Tienes un momento sobre el programa de renovación?",
    },
    { speaker: 'caller', text: 'Sí, gracias.' },
    {
      speaker: 'agent',
      text: 'Perfecto. ¿Eres la dueña de la casa en 8840 East 11th Street?',
    },
    { speaker: 'caller', text: 'Sí, correcto.' },
    {
      speaker: 'agent',
      text: '¿Estás al día con la hipoteca y los impuestos de los últimos tres años?',
    },
    { speaker: 'caller', text: 'Sí, todo al día.' },
    {
      speaker: 'agent',
      text: 'Excelente. Tengo el domingo a las 9am o a las 12pm para la visita gratuita. ¿Cuál te queda mejor?',
    },
    { speaker: 'caller', text: 'El domingo a las 12.' },
    {
      speaker: 'agent',
      text: 'Listo Paula. Domingo a las 12pm — el especialista revisa las ventanas y te explica las opciones. Te envío un recordatorio por mensaje.',
    },
    { speaker: 'caller', text: 'Gracias, hasta el domingo.' },
  ],
};

export const TRANSCRIPT_ROOFING: AnimatedTranscript = {
  id: 'roofing',
  title: 'emore-fl-construction.log',
  caption: 'Real call · Roof-replacement free assessment booked',
  lines: [
    {
      speaker: 'agent',
      text: "Hi Brunel, it's Sarah with Emore Florida Construction. Quick question about the renovation program — okay time?",
    },
    { speaker: 'caller', text: 'Sure.' },
    {
      speaker: 'agent',
      text: 'I saw you were looking into a roof. That is exactly what we cover at zero out of pocket. Quick check — you are the homeowner at 12330 NE 11th Place?',
    },
    { speaker: 'caller', text: 'Yes.' },
    { speaker: 'agent', text: 'Current on mortgage and property taxes?' },
    { speaker: 'caller', text: 'Yes.' },
    {
      speaker: 'agent',
      text: 'Perfect. I have tomorrow at 10am or 2pm for a free in-home assessment. Which works?',
    },
    { speaker: 'caller', text: '10am.' },
    {
      speaker: 'agent',
      text: 'You are set for tomorrow at 10am. The assessor comes out, looks at the roof, and walks you through the options. Zero obligation.',
    },
  ],
};

export const TRANSCRIPT_GLASS_DOOR: AnimatedTranscript = {
  id: 'glass-door',
  title: 'green-innovation.log',
  caption: 'Real call · Address correction handled mid-call',
  lines: [
    {
      speaker: 'agent',
      text: "Hi David, it's Maria with Green Innovation. Quick question about the sliding glass door — okay time?",
    },
    { speaker: 'caller', text: 'Yes, it is.' },
    {
      speaker: 'agent',
      text: 'I saw the door got hit by a rock. That is exactly what we cover. You are the homeowner at 739 Rock Creek Street?',
    },
    { speaker: 'caller', text: "No — this is for my daughter's house." },
    {
      speaker: 'agent',
      text: 'Got it, thanks for clearing that up. What is the correct address?',
    },
    { speaker: 'caller', text: '618 Fox Valley Drive, Longwood.' },
    {
      speaker: 'agent',
      text: 'Perfect. I have tomorrow at 10am or 2pm. Which works for your daughter?',
    },
    { speaker: 'caller', text: '10am.' },
    {
      speaker: 'agent',
      text: 'Set for tomorrow at 10am, 618 Fox Valley Drive, Longwood. Assessor checks the door and walks her through options.',
    },
  ],
};

export const TRANSCRIPT_REAL_ESTATE_CASH: AnimatedTranscript = {
  id: 'real-estate-cash',
  title: 'columbus-property.log',
  caption: 'Real call · Seller acquisitions intake booked',
  lines: [
    {
      speaker: 'agent',
      text: "Hi Christine, it's Maria. Quick question about your property — okay time?",
    },
    { speaker: 'caller', text: 'Briefly, sure.' },
    {
      speaker: 'agent',
      text: "I'll keep it quick. You mentioned the place is in good shape and you'd like it sold before winter. We work with exactly that kind of situation.",
    },
    { speaker: 'caller', text: 'Yes.' },
    {
      speaker: 'agent',
      text: 'Do you have a number in mind for what you would want to walk away with?',
    },
    { speaker: 'caller', text: '170,000.' },
    {
      speaker: 'agent',
      text: 'Sounds like a fit. I have Tuesday at 10am or 2pm for a 15-minute call with our acquisitions agent. Which works?',
    },
    { speaker: 'caller', text: 'Tuesday at 10am works.' },
    {
      speaker: 'agent',
      text: 'Set for Tuesday at 10am. The agent will call this number, walk through your $170,000 number, and show you how the offer is structured.',
    },
  ],
};

export const ALL_TRANSCRIPTS = [
  TRANSCRIPT_HOME_IMPROVEMENT_ES,
  TRANSCRIPT_ROOFING,
  TRANSCRIPT_GLASS_DOOR,
  TRANSCRIPT_REAL_ESTATE_CASH,
];
