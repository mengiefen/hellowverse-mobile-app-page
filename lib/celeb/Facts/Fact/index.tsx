import Link from 'next/link';
import React from 'react';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';
import { Fact as TFact } from '~/lib/components/types';
import styles from './index.module.scss';

export const Fact: React.FC<{ value: TFact }> = ({ value }) => {
  const {
    celeb: { name },
  } = useCelebContext();

  return (
    <div className={styles.container}>
      <div className={styles.dateWrapper}>
        <p>{value.date}</p>
      </div>

      <div className={styles.quotesWrapper}>
        {(value.type === 'quote' && (
          <div className={styles.quote}>
            <p className={styles.quoteStarter}>
              {value.context}, {name} said
            </p>

            <blockquote>
              <p className={styles.blockquote}>{value.quote}</p>
            </blockquote>
          </div>
        )) ||
          (value.type == 'fact' && (
            <div className={styles.content}>
              <p>{value.content}</p>
            </div>
          ))}
      </div>

      <div className={styles.tagWrapper}>
        {value.tags.map((t) => {
          return (
            <p key={t.tag.name}>
              # {t.isLowConfidence && 'Possibly '}
              {t.tag.name}
            </p>
          );
        })}
      </div>

      <div className={styles.linkWrapper}>
        <Link href={value.source}>Source</Link>
        <Link href={value.forumLink}>Forum link</Link>
      </div>
    </div>
  );
};
