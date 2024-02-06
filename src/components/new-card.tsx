import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react';
import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'sonner'

export function NewCard() {
  const [isOpen, setIsOpen] = useState(true);
  const [content, setContent] = useState('');

  function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value)
    if(event.target.value === '') {
      setIsOpen(true)
    }
  }

  function handleSubmit() {
    setIsOpen(false)
  }

  function handleSaveNode(event: FormEvent) {
    event.preventDefault()
    console.log(content)
    toast.success('Nota criada com sucesso!')
  }

  return (
    <Dialog.Root>
      <Dialog.DialogTrigger className='rounded-md bg-slate-700 p-5 gap-3 text-left flex flex-col hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 outline-none focus-visible:ring-lime-400'>
        <span className='text-small font-medium text-slate-200'>Adicionar nota</span>
        <p className='text-small leading-6 text-slate-400'>Grave uma nota em audio que será convertido para texto</p>
      </Dialog.DialogTrigger>

      <Dialog.Portal>
        <Dialog.DialogOverlay className='inset-0 fixed bg-black/50' />
          <Dialog.Content className='left-1/2 top-1/2 -translate-x-1/2 h-[60vh] -translate-y-1/2 max-w-[640px] w-full bg-slate-700 rounded-lg flex flex-col fixed outline-none overflow-hidden'>
            <Dialog.DialogClose className=' absolute right-0 top-0 p-4 bg-slate-800 text-slate-400 hover:text-slate-100'>
              <X  className='size-5'/>
            </Dialog.DialogClose>
            <form 
            onSubmit={handleSaveNode}
            className='flex-1 flex flex-col'>
              <div className='flex flex-1 flex-col gap-3 p-5'>
                <span className='text-small font-medium text-slate-300'>
                  Adicionar Nota 
                </span>
                {isOpen ? (
                  <p className='text-small leading-6 text-slate-400'>
                  Comece <button className='text-lime-400 font-medium hover:underline'>gravando uma  nota</button> em audio ou se preferir <button onClick={handleSubmit} className='text-lime-400 font-medium hover:underline'>utilize apenas texto</button>.
                </p>
                ) : (
                  <textarea 
                  autoFocus 
                  className='text-small leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none'
                  onChange={handleContentChange}
                  >
                  
                  </textarea>
                )}
              </div>

              <button
              type='submit'
              className='group
              font-medium w-full bg-lime-400 py-4 text-center text-small text-lime-950 outline-none hover:bg-lime-500'
              >
                Deseja criar nota?
              </button>
            </form>
          </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}