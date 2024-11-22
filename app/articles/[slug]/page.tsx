import { NavBar, Footer } from "../../_components";
import styles from "../../styles/Article.module.scss";
import apiFunctions from "../../utils/api";

interface PageProps {
  params: { slug: string };
}

const Page = async ({ params }: PageProps) => {
  const { slug } = params;
  try {
    const data = await apiFunctions.fetchArticleBySlug(slug);
    // console.log(data);
    const content = data.content.html;

    return (
      <>
        <NavBar />
        <main className={styles.Article}>
          <h1 className={styles.ArticleTitle}>{data?.title}</h1>
          <article>{content}</article>
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
