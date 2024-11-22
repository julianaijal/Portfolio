import { NavBar, Footer } from "../../_components";
import styles from "../../styles/Article.module.scss";
import apiFunctions from "../../utils/api";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = await apiFunctions.fetchArticleBySlug(slug);
  console.log(data);

  return (
    <>
      <NavBar />
      <h1 className={styles.ArticleTitle}>{slug}</h1>
      <Footer />
    </>
  );
};

export default Page;
