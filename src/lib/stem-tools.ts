export type AgeGroup = "Infantes" | "Prekids" | "Kids" | "Juniors" | "Teens";
export type Difficulty = "Básico" | "Intermedio" | "Avanzado";

export interface StemTool {
  id: string;
  name: string;
  technology: string;
  description: string;
  category: string;
  ages: AgeGroup[];
  ageLabel: string;
  difficulty: Difficulty;
  url: string;
  featured?: boolean;
}

export const categories = [
  "Todas",
  "Programación en bloques",
  "Hora del Código",
  "Robótica y Arduino",
  "Diseño 3D & Apps",
  "TIC y Evaluaciones",
] as const;

export const ageGroups: Array<{ name: AgeGroup; range: string }> = [
  { name: "Infantes", range: "4–5 años" },
  { name: "Prekids", range: "6–7 años" },
  { name: "Kids", range: "8–10 años" },
  { name: "Juniors", range: "11–13 años" },
  { name: "Teens", range: "14–17 años" },
];

export const stemTools: StemTool[] = [
  { id: "scratch", name: "Scratch", technology: "MIT · Bloques", description: "Crea historias, juegos y animaciones mientras aprendes a programar.", category: "Programación en bloques", ages: ["Prekids", "Kids", "Juniors"], ageLabel: "6–13 años", difficulty: "Básico", url: "https://scratch.mit.edu/projects/editor/", featured: true },
  { id: "blockly", name: "Blockly Games", technology: "Google Blockly", description: "Retos breves que convierten bloques visuales en código real.", category: "Programación en bloques", ages: ["Kids", "Juniors"], ageLabel: "8–13 años", difficulty: "Básico", url: "https://blockly.games/" },
  { id: "run-marco", name: "Run Marco", technology: "Algoritmos", description: "Guía a Marco por aventuras y descubre secuencias y bucles.", category: "Programación en bloques", ages: ["Infantes", "Prekids", "Kids"], ageLabel: "4–10 años", difficulty: "Básico", url: "https://runmarco.allcancode.com/" },
  { id: "angry-birds", name: "Angry Birds", technology: "Code.org", description: "Programa movimientos para resolver laberintos con tus personajes favoritos.", category: "Hora del Código", ages: ["Prekids", "Kids"], ageLabel: "6–10 años", difficulty: "Básico", url: "https://studio.code.org/hoc/1" },
  { id: "star-wars", name: "Code Star Wars", technology: "JavaScript · Bloques", description: "Construye una galaxia con código y controla droides.", category: "Hora del Código", ages: ["Kids", "Juniors"], ageLabel: "8–13 años", difficulty: "Intermedio", url: "https://code.org/starwars" },
  { id: "frozen", name: "Frozen", technology: "Geometría · Bloques", description: "Dibuja copos de nieve programando a Anna y Elsa.", category: "Hora del Código", ages: ["Prekids", "Kids"], ageLabel: "6–10 años", difficulty: "Básico", url: "https://studio.code.org/s/frozen/lessons/1/levels/1" },
  { id: "codecombat", name: "CodeCombat", technology: "Python · JavaScript", description: "Aprende lenguajes reales avanzando en un mundo de aventuras.", category: "Hora del Código", ages: ["Juniors", "Teens"], ageLabel: "11–17 años", difficulty: "Avanzado", url: "https://codecombat.com/" },
  { id: "playtecduino", name: "Playtecduino", technology: "Arduino · Electrónica", description: "Programa sensores, luces y motores desde un entorno visual.", category: "Robótica y Arduino", ages: ["Kids", "Juniors", "Teens"], ageLabel: "8–17 años", difficulty: "Intermedio", url: "https://www.arduino.cc/en/software", featured: true },
  { id: "tinkercad-circuits", name: "Tinkercad Circuits", technology: "Circuitos · Arduino", description: "Simula circuitos y prototipos electrónicos sin riesgo.", category: "Robótica y Arduino", ages: ["Juniors", "Teens"], ageLabel: "11–17 años", difficulty: "Intermedio", url: "https://www.tinkercad.com/circuits" },
  { id: "arduino-resources", name: "Recursos Arduino", technology: "Drivers · Guías", description: "Controladores, documentación y recursos para preparar tu robot.", category: "Robótica y Arduino", ages: ["Juniors", "Teens"], ageLabel: "11–17 años", difficulty: "Avanzado", url: "https://docs.arduino.cc/" },
  { id: "tinkercad-3d", name: "Tinkercad 3D", technology: "Modelado 3D", description: "Diseña objetos tridimensionales listos para imprimir.", category: "Diseño 3D & Apps", ages: ["Kids", "Juniors", "Teens"], ageLabel: "8–17 años", difficulty: "Intermedio", url: "https://www.tinkercad.com/3d-design" },
  { id: "app-inventor", name: "App Inventor", technology: "Apps móviles · Bloques", description: "Construye aplicaciones Android con bloques y prueba tus ideas.", category: "Diseño 3D & Apps", ages: ["Juniors", "Teens"], ageLabel: "11–17 años", difficulty: "Intermedio", url: "https://appinventor.mit.edu/" },
  { id: "kahoot", name: "Kahoot!", technology: "Quiz interactivo", description: "Demuestra lo aprendido en desafíos rápidos con toda la clase.", category: "TIC y Evaluaciones", ages: ["Prekids", "Kids", "Juniors", "Teens"], ageLabel: "6–17 años", difficulty: "Básico", url: "https://kahoot.com/" },
  { id: "classdojo", name: "ClassDojo", technology: "Aula digital", description: "Comparte logros, actividades y avances con tu comunidad.", category: "TIC y Evaluaciones", ages: ["Infantes", "Prekids", "Kids"], ageLabel: "4–10 años", difficulty: "Básico", url: "https://www.classdojo.com/" },
  { id: "robotics-test", name: "Reto de Robótica", technology: "Evaluación STEM", description: "Pon a prueba tus conocimientos de sensores, motores y lógica.", category: "TIC y Evaluaciones", ages: ["Juniors", "Teens"], ageLabel: "11–17 años", difficulty: "Avanzado", url: "https://create.kahoot.it/" },
];