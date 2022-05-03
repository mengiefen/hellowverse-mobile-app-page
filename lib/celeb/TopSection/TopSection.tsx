import Image from 'next/image';
import React from 'react';
import { sanityImage } from '~/lib/components/sanityio';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';
import styles from './TopSection.module.scss';

export const TopSection = () => {
  const context = useCelebContext();

  const picture = context.celeb.picture || context.placeholderImage;

  return (
    <div className={styles.container}>
      <section className={styles.headerItems}>
        <header className={styles.header}>
          <div className={styles.imgContainer}>
            <Image
              blurDataURL={picture.metadata.lqip}
              placeholder="blur"
              src={sanityImage(picture).width(200).height(250).url()}
              width={200}
              height={250}
              priority
              alt={context.celeb.name}
              className={styles.img}
            />
          </div>

          <h1 className={styles.headerText}>
            <span>Religion, politics, and ideas of</span>
            <br /> <span>{context.celeb.name}</span>
          </h1>
        </header>
      </section>
    </div>
  );
};
