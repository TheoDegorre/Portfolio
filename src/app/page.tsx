import Links from '@/components/links'

export default function Home() {
  return (
    <section className="font-base flex-col h-100">
      <div className="flex flex-row items-center gap-8">  
        <img className="rounded-full w-24" src="avatar1.jpg" alt="picture"/>
        <div className='flex-col w-max'>
          <h1 className="text-3xl  font-heading">Théo Degorre</h1>
          <p className="mt-2 text-lg ">Developper Web Full Stack</p>
        </div>
      </div>

      <article className="mt-8 text-base sm:text-lg">
        <p>Hi, my name is Théo, I am a Full Stack Developper based near Nantes.</p>
        <br />
        <p>
          I create <strong>websites</strong> and do <strong>design integration</strong>. If you want to know more, do not hesitate to browse my portfolio or contact me on my networks or my email address
        </p>
      </article>

      <Links />
    </section>
  )
}
