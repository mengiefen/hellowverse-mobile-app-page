import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './AppBar.module.scss'

export const AppBar = () => {
  return (
    <nav className={styles.appBar}>
      <section className={styles.appBarItems}>
        <div className={styles.logo}>
          <Link passHref href="/">
            <a>
              <Image
                src="/images/logo.svg"
                width={250}
                height={30}
                alt="Hollowverse"
                layout="fixed"
              />
            </a>
          </Link>
        </div>

        <div >
          {/* Search input */}
          <div>
            <input placeholder="Search for a celebrity" type="search" className={styles.searchInput}/>             
          </div>
        </div>
      </section>
    </nav>
  );
};
