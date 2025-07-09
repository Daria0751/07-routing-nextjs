import Modal from '@/components/Modal/Modal';
import NotePreview from '@/components/NotePreview/NotePreview';

interface Props {
  params: { id: string };
}

export default function ModalNotePage({ params }: Props) {
  const noteId = Number(params.id);

  return (
    <Modal>
      <NotePreview id={noteId} />
    </Modal>
  );
}


