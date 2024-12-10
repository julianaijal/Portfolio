'use server';

import styles from "../styles/Home.module.scss";
import { ArticleBlock, Hero, NavBar, Footer } from "./";
import apiFunctions from "../utils/api";
import { IArticle } from "./_interfaces/interfaces";

const Layout = async () => {
  const { data: postsData } = await apiFunctions.fetchPosts();
  const { data: articlesData } = await apiFunctions.fetchArticles();

  const articlesHygraphData: IArticle[] = postsData?.externalPostsPluralized?.map(
    ({ title, url, symbol }: IArticle) => ({ title, url, symbol })
  ) ?? [];

  const mappedArticles: IArticle[] = articlesData?.articles?.map(
    ({ title, slug, }: IArticle) => ({ title, slug, })
  ) ?? [];


  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Hero />
        <ArticleBlock articles={articlesHygraphData} articlesnew={mappedArticles}/>
      </main>
      <Footer />
    </>
  );
};

export default Layout;