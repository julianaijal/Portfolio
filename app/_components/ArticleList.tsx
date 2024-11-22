import styles from '../styles/ArticleList.module.scss';
import { IArticles } from './_interfaces/interfaces';
import ArticleListEntry from './ArticleListEntry';

const ArticleList: React.FC<IArticles> = ({ articles, articlesnew }) => {
  console.log(articlesnew, 'list')
  return (
    <section className={styles.ArticleList}>
      <div className={styles.ArticleListCta}>
        <h2 className={styles.ArticleListCtaHeading}>Articles</h2>
        <p className={styles.ArticleListCtaCopy}>
          Some articles I have written
        </p>
      </div>
      <div className={styles.ArticleListEntries}>
        <ul>
          {articles.map((article, index) => (
           <ArticleListEntry key={index} {...article}/>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ArticleList;
