import NoteModal from '@/components/NoteModal/NoteModal';

export default function ModalNotePage({ params }: { params: { id: string } }) {
  const id = Number(params.id);

  if (isNaN(id)) {
    throw new Error('Invalid note ID');
  }

  return <NoteModal id={id} onClose={() => {}} />;
}
