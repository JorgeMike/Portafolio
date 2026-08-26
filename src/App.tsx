import Hero from './components/sections/Hero'
import Resumen from './components/sections/Resumen'
import Experiencia from './components/sections/Experiencia'
import Habilidades from './components/sections/Habilidades'

function App() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Hero />

      <Resumen />

      <Experiencia />

      <section id="proyectos" className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="text-2xl font-semibold">Proyectos</h2>
      </section>

      <Habilidades />

      <section id="contacto" className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-2xl font-semibold">Contacto</h2>
      </section>
    </main>
  )
}

export default App
