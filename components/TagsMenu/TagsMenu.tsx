'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import css from './TagsMenu.module.css';

const tags = ['All', 'Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

export default function TagsMenu() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTag = searchParams.get('tag') || 'All';

  const handleTagClick = (tag: string) => {
    const params = new URLSearchParams();
    if (tag !== 'All') params.set('tag', tag);
    router.push(`/notes?${params.toString()}`);
  };

  return (
    <div className={css.menu}>
      {tags.map(tag => (
        <button
          key={tag}
          className={activeTag === tag ? css.active : css.button}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
