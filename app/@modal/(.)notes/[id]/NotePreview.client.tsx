'use client';

import NoteModal from '@/components/NoteModal/NoteModal';

interface Props {
  params: { id: string };
}

export default function NotePreview({ params }: Props) {
  const id = Number(params.id);

  return <NoteModal id={id} onClose={() => {}} />;
}
