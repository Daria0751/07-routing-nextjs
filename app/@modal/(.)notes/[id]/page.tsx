import { getSingleNote } from '@/lib/api';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import NotePreview from './NotePreview.client';
import Modal from '@/components/Modal/Modal';

interface Props {
  params: { id: string };
}

export default async function ModalNotePage({ params }: Props) {
  const id = Number(params.id);

  if (isNaN(id)) {
    throw new Error('Invalid note ID');
  }

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



