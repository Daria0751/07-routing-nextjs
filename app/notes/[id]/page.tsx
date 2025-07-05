import Modal from '@/components/Modal/Modal';
import NotePreview from '@/components/NotePreview/NotePreview';

interface Props {
  params: { id: string };
}

export default function NoteModalPage({ params }: Props) {
  const id = Number(params.id);

  return (
    <Modal>
      <NotePreview id={id} />
    </Modal>
  );
}
