import Hero from './components/sections/Hero'
import Resumen from './components/sections/Resumen'
import Experiencia from './components/sections/Experiencia'
import Proyectos from './components/sections/Proyectos'
import Habilidades from './components/sections/Habilidades'
import Contacto from './components/sections/Contacto'

function App() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Hero />

      <Resumen />

      <Experiencia />

      <Proyectos />

      <Habilidades />

      <Contacto />
    </main>
  )
}

export default App
