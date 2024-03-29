import logo from './assets/logo-nlw-expert.svg'
import { NewCard } from './components/new-card'
import { NoteCard } from './components/note-card'

const note = {
  date: new Date(),
  content: 'Primeira nota'
}

export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={logo} alt="NLW expert" />

      <form className='w-full '>
      <input 
        className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
        type="text" 
        placeholder='busque em suas notas...'/>
      </form>
      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <NewCard />
        <NoteCard note={note} />


      </div>
    </div>
  )
}
 

