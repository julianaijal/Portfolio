import { NavBar, Footer } from "./../../_components";
import styles from '../../styles/Article.module.scss';
const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
    <NavBar/>
      <h1 className={styles.ArticleTitle}>{params.id}</h1>
    <Footer />
    </>
  );
};

export default Page;
