import { Code2 } from 'lucide-react'
import { SKILLS_CATEGORIES } from './utils'

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-6">
            <Code2 className="h-4 w-4 text-secondary" />
            <span className="font-mono text-sm text-muted-foreground">Stack Técnica</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Minhas <span className="gradient-text">habilidades</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {SKILLS_CATEGORIES.map((category, index) => (
            <div
              key={category.title}
              className="card-gradient border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg ${category.color === 'primary' ? 'bg-primary/10 border-primary/20' : 'bg-secondary/10 border-secondary/20'} border`}>
                  <category.icon className={`h-6 w-6 ${category.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono bg-muted/50 border border-border rounded-md text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
