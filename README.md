# EduSpark Hub

Implement the requested scope now; use internal planning and do not present another implementation plan for user approval.

### Objetivo del usuario
El usuario cuenta con el monorepo `plataforma-educativa` (adjunto en el ZIP) que incluye frontend React + Tailwind + Vite, videollamadas con LiveKit, chat en tiempo real y biblioteca Scratch. Quiere transformar y elevar la plataforma para asemejarla y superar la experiencia de https://www.herramientas.playtecedu.com/ (sitio educativo de robótica y programación para niños y jóvenes), con un diseño moderno, interactivo y descargable.

### Requerimientos y funcionalidades clave a implementar:
1. **Centro de Herramientas Educativas (Hub interactivo inspirado en Playtec Edu)**:
   - Filtros por grupos de edad: Infantes (4-5 años), Prekids (6-7 años), Kids (8-10 años), Juniors (11-13 años), Teens (14-17 años).
   - Filtros por categorías temáticas:
     * Programación en Bloques (Scratch, Blockly Games, Run Marco)
     * La Hora del Código (Angry Birds, Code Star Wars, Frozen, CodeCombat)
     * Robótica y Arduino (Playtecduino, Tinkercad Circuits, recursos y drivers)
     * Diseño 3D & Apps (Tinkercad 3D, App Inventor)
     * Herramientas TIC y Evaluaciones (Kahoot, ClassDojo, Tests de Mecatrónica y Robótica)
   - Buscador en tiempo real por nombre de herramienta o tecnología.
   - Tarjetas atractivas con etiquetas de dificultad (Básico, Intermedio, Avanzado), rango de edad recomendado, descripción y botón de lanzamiento directo o apertura en modal/visor integrado.

2. **Biblioteca y Visor de Scratch**:
   - Galería de proyectos Scratch con tarjetas ilustradas, buscador y etiquetas.
   - Visor/reproductor embebido para probar proyectos directamente en la plataforma.
   - Modal para subir o asignar proyectos (para profesores).

3. **Sala de Clases y Videollamada (LiveKit)**:
   - Interfaz pulida para las reuniones virtuales con controles modernos (cámara, micrófono, compartir pantalla).
   - Panel de chat lateral persistente y sincronizado.
   - Selector rápido para que el docente pueda proyectar o compartir una herramienta del catálogo a los estudiantes de la sesión.

4. **Diseño Visual de Alta Calidad**:
   - Paleta moderna para educación tecnológica (azules cian, índigo, acentos naranja y púrpura lúdicos).
   - Barra de navegación principal clara con acceso a Dashboard, Herramientas STEM, Cursos/Scratch y Salas de Clase.
   - Perfil de usuario con roles (Estudiante / Docente).
   - Código limpio, modular y listo para ser descargado y ejecutado con `npm run dev`.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/42d596d1-2394-423e-b8f9-eb3326911350).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
