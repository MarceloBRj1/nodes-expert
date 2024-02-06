import * as Dialog from '@radix-ui/react-dialog'
import { formatDistanceToNow } from 'date-fns'
import {ptBR} from 'date-fns/locale/pt-BR'
import { X } from 'lucide-react';

interface NoteCardProps {
  note: {
    date: Date
    content: string
  }
}

export function NoteCard({note}: NoteCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className=' text-left flex flex-col rounded-md outline-none bg-slate-800 p-5 gap-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
        <span className='text-small font-medium text-slate-300'>{note.date.toISOString()}</span>
        <p className='text-small leading-6 text-slate-400'>{note.content}</p>
        <div className='pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-black/5' />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.DialogOverlay className='inset-0 fixed bg-black/50' />
        <Dialog.Content className='left-1/2 top-1/2 -translate-x-1/2 h-[60vh] -translate-y-1/2 max-w-[640px] w-full bg-slate-700 rounded-lg flex flex-col fixed outline-none overflow-hidden'>
          <Dialog.DialogClose className=' absolute right-0 top-0 p-4 bg-slate-800 text-slate-400 hover:text-slate-100'>
            <X  className='size-5'/>
          </Dialog.DialogClose>
          <div className='flex flex-1 flex-col gap-3 p-5'>
            <span className='text-small font-medium text-slate-300'>
              {formatDistanceToNow(note.date, {locale: ptBR, addSuffix: true})}
              </span>
            <p className='text-small leading-6 text-slate-400'>
              {note.content}
            </p>
          </div>

          <button
          type='button'
          className='group
          font-medium w-full bg-slate-800 py-4 text-center text-small text-slate-300 outline-none'
          >
            Deseja <span className='text-red-400 hover:underline group-hover:underline'>remover esta nota</span>?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}