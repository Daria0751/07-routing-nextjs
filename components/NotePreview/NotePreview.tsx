import { getSingleNote } from '@/lib/api';
import css from './NotePreview.module.css';

interface Props {
  id: number;
}

export default async function NotePreview({ id }: Props) {
  const note = await getSingleNote(id);

  return (
    <div className={css.container}>
      <h2 className={css.title}>{note.title}</h2>
      <p className={css.text}>{note.text}</p>
      <p className={css.tag}>{note.tag}</p>
    </div>
  );
}
