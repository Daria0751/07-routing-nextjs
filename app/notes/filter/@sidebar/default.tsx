'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './SidebarNotes.module.css';

const tags = ['All', 'Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

export default function SidebarDefault() {
  const pathname = usePathname();
  const activeTag = decodeURIComponent(pathname.split('/').pop() || '');

  return (
    <nav className={css.sidebar}>
      <ul className={css.list}>
        {tags.map((tag) => {
          const path = tag === 'All' ? '/notes/filter' : `/notes/filter/${tag}`;
          const isActive = activeTag === tag || (tag === 'All' && pathname === '/notes/filter');

          return (
            <li key={tag}>
              <Link
                href={path}
                className={isActive ? css.active : css.link}
              >
                {tag}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
