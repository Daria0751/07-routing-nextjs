import type { Note } from '@/types/note';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteNote } from '@/lib/api';
import styles from './NoteList.module.css';

interface NoteListProps {
  notes: Note[];
  onNoteClick?: (id: number) => void;
}

export default function NoteList({ notes, onNoteClick }: NoteListProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  });

  const handleDelete = (id: number) => {
    mutation.mutate(id);
  };

  return (
    <ul className={styles.grid}>
      {notes.map((note) => (
        <li key={note.id} className={styles.item}>
          <button
            type="button"
            className={styles.card}
            onClick={() => onNoteClick?.(note.id)}
          >
            <h2 className={styles.title}>{note.title}</h2>
            <p className={styles.content}>{note.content}</p>
            <p className={styles.tag}>Tag: {note.tag}</p>
          </button>

          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(note.id)}
            disabled={mutation.isPending}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
