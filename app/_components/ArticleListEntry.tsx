import styles from "../styles/ArticleList.module.scss";
import Image from "next/image";
import Link from "next/link";
import { IArticle } from "./_interfaces/interfaces";
import { FC } from "react";

// add symbol field in hygraph
const ArticleListEntry: FC<IArticle> = ({ title, slug }) => {
  return (
    <li className={styles.ArticleListItem}>
      {/* {symbol?.url && ( */}
      <div className={styles.ArticleListItemImage}>
        <Image alt={title} src="https://eu-central-1-shared-euc1-02.graphassets.com/clw38qc4e0h4s07waaosde8sy/clw3wfy1r36ak08usvt8aamla" sizes="100vw" width={48} height={48} />
      </div>
      {/* )} */}
      <h3 className={styles.ArticleListItemTitle}>{title}</h3>
      <div className={styles.ArticleListItemCta}>
        <Link
          rel="noopener"
          href={`/articles/${slug}`}
          className={styles.ArticleListItemLink}
        >
          Read more
        </Link>
      </div>
    </li>
  );
};

export default ArticleListEntry;
