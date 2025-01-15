import React from 'react';
import { Article } from '@/types/article';
import Link from 'next/link';
import styles from './ArticleList.module.scss';

type ArticleListProps = {
  articles: Article[] | null | undefined;
};

export default function ArticleList({ articles }: ArticleListProps) {
  if (!articles || articles.length === 0) {
    return <div className={styles.noArticles}>No articles available</div>;
  }

  return (
    <ul className={styles.articleList}>
      {articles.map((article) => (
        <li key={article.id} className={styles.articleItem}>
          <img src={article.imageURL} alt={article.title} className={styles.image} />
          <h2 className={styles.title}>{article.title}</h2>
          <p className={styles.description}>{article.description?.slice(0, 100)}...</p>
          <div className={styles.tags}>
            <strong>Tags:</strong>
            <ul className={styles.tagList}>
              {article.tags.map((tag) => (
                <li key={tag.tagId} className={styles.tagItem}>
                  <Link href={`/tags/${tag.tagId}`}>
                    <span className={styles.tagLink}>{tag.tagName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href={`/articles/${article.id}`} className={styles.readMore}>
            Read More
          </Link>
        </li>
      ))}
    </ul>
  );
}
