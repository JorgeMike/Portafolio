function App() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <section
        id="hero"
        className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <h1 className="text-5xl font-semibold text-text-h md:text-7xl">
          Jorge Miguel Alvarado Reyes
        </h1>
        <p className="mt-4 text-lg text-accent-soft md:text-xl">
          Desarrollador Fullstack
        </p>
      </section>

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
