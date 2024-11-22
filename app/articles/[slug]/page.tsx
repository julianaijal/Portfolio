import { NavBar, Footer } from "../../_components";
import styles from "../../styles/Article.module.scss";
import apiFunctions from "../../utils/api";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import { IArticleDynamic } from "../../_components/_interfaces/interfaces";


const Page = async ({ params }: IArticleDynamic) => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  try {
    const data = await apiFunctions.fetchArticleBySlug(slug);
    const content = data.content.html;
    const window = new JSDOM("").window;
    const domPurify = DOMPurify(window);
    const sanitizedHtml = domPurify.sanitize(content);
    return (
      <>
        <NavBar />
        <main className={styles.Article}>
          <h1 className={styles.ArticleTitle}>{data?.title}</h1>
          <article
            className={styles.ArticleContent}
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
          />
        </main>
        <Footer />
      </>
    );
  } catch (error) {
    console.error("Error fetching article:", error);

    return (
      <>
        <NavBar />
        <main className={styles.Article}>
          <h1 className={styles.ArticleTitle}>Error</h1>
          <p className={styles.ArticleContent}>
            Could not fetch the article. Sad.
          </p>
        </main>
        <Footer />
      </>
    );
  }
};

export default Page;
