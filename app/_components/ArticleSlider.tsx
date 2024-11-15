import styles from "../styles/ArticleSlider.module.scss";
import { IArticles } from "./_interfaces/interfaces";
import { FC } from "react";
import ArticleSliderEntry from "./ArticleSliderEntry";

const ArticleSlider: FC<IArticles> = ({ articles }) => {
  // to do 1: fetch slugs from hygraph entries from parent, deconstruct above (see next comment)
  return (
    <section className={styles.ArticleSlider}>
      <div className={styles.ArticleSliderCta}>
        <h2 className={styles.ArticleSliderCtaHeading}>Articles</h2>
        <p className={styles.ArticleSliderCtaCopy}>
          Some articles I have written
        </p>
      </div>
      <div className={styles.ArticleSliderEntries}>
        {articles.map((article, index) => (
          <ArticleSliderEntry key={index}{...article}
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleSlider;
