export default function Hero() {
    return (
        <>
          <section id="home" className="min-h-screen flex items-center px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-light-slate mb-4">Hi, im </h1>
        <h2 className="text-5xl md:text-7xl font-bold text-light-slate mb-4">noobmaster69</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-slate mb-6">
          I build things for the web.
        </h3>
        <p className="max-w-lg text-slate mb-8">
          I’m a software engineer specializing in building exceptional digital experiences.
        </p>
        <button className="border border-teal text-teal px-6 py-3 rounded hover:bg-teal/10 transition">
          Check out my work!
        </button>
      </div>
    </section>
        </>
    )
};
