import { NavBar, Footer } from "../../_components";
import styles from '../../styles/Article.module.scss';
const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
    <NavBar/>
      <h1 className={styles.ArticleTitle}>{params.slug}</h1>
    <Footer />
    </>
  );
};

export default Page;
