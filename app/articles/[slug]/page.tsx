import { NavBar, Footer } from "../../_components";
import styles from "../../styles/Article.module.scss";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  return (
    <>
      <NavBar />
      <h1 className={styles.ArticleTitle}>{slug}</h1>
      <Footer />
    </>
  );
};

export default Page;
