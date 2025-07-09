'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import css from './TagsMenu.module.css';

const tags = ['All', 'Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

export default function TagsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleTagClick = (tag: string) => {
    const safeTag = tag === 'All' ? '' : tag;
    router.push(`/notes/filter/${safeTag}`);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={css.wrapper} ref={menuRef}>
      <button
        className={css.toggleButton}
        onClick={toggleMenu}
        aria-expanded={isOpen}
      >
        Filter by tag ⌄
      </button>

      {isOpen && (
        <ul className={css.dropdown}>
          {tags.map((tag) => (
            <li key={tag}>
              <button
                className={css.tagButton}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

