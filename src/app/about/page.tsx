import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          Hello my name is Théo and I am a full stack developper.<br/>
          In a previous life, I worked in the field of agronomy for a long time. 
          I began my retraining to become a developer and to develop websites and tools to optimize business processes.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
