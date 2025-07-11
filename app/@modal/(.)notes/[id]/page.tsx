import { getSingleNote } from '@/lib/api';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import NotePreview from './NotePreview.client';
import Modal from '@/components/Modal/Modal';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ModalNotePage({ params }: Props) {
  const { id: idString } = await params;
  const id = Number(idString);

  if (isNaN(id)) throw new Error('Invalid note ID');

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => getSingleNote(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Modal onClose={() => history.back()}>
        <NotePreview id={id} />
      </Modal>
    </HydrationBoundary>
  );
}




