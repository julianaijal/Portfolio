import styles from '../styles/ArticleList.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { IArticle } from './_interfaces/interfaces';
import { FC } from 'react';

const ArticleListEntry: FC<IArticle> = ({ title, url, symbol }) => {
  // to do 1: fetch slugs from hygraph entries from parent, deconstruct above (see next comment)
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return (
    <li className={styles.ArticleListItem}>
      {symbol?.url && (
        <div className={styles.ArticleListItemImage}>
          <Image
            alt={title}
            src={symbol.url}
            sizes="100vw"
            width={48}
            height={48}
          />
        </div>
      )}
      <h3 className={styles.ArticleListItemTitle}>{title}</h3>
      <div className={styles.ArticleListItemCta}>
        <Link
          rel="noopener"
          href={url}
          className={styles.ArticleListItemLink}
        >
          Read more
        </Link>
      </div>
      {/* to do 2: and pass here */}
      <Link href={`/articles/${slug}`} passHref>
        <button className={styles.ArticleListItemButton}>go</button>
      </Link>
    </li>
  );
};

export default ArticleListEntry;