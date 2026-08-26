import Hero from './components/sections/Hero'

function App() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Hero />

      <section id="resumen" className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-2xl font-semibold">Resumen</h2>
      </section>

      <section id="experiencia" className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="text-2xl font-semibold">Experiencia</h2>
      </section>

      <section id="proyectos" className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="text-2xl font-semibold">Proyectos</h2>
      </section>

      <section id="habilidades" className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="text-2xl font-semibold">Habilidades</h2>
      </section>

      <section id="contacto" className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-2xl font-semibold">Contacto</h2>
      </section>
    </main>
  )
}

export default App
