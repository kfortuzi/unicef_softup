import { Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useGetArticles from 'src/api/articles/hooks/useGetArticles';
import Article from 'src/components/articles/Article';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';

const Articles: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'articles' });

  const { data: articles, isFetching } = useGetArticles();

  if (isFetching) {
    return <LoadingFullPage message={t('loading')} />;
  }

  const content = articles?.length ? (
    <>
      <Typography.Title>{t('header')}</Typography.Title>
      {articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          content={article.content}
        />
      ))}
    </>
  ) : (
    <>
      <Typography.Title>{t('header')}</Typography.Title>
      <Typography.Text>{t('noArticles')}</Typography.Text>
    </>
  );

  return <div className="articles-container">{content}</div>;
};

export default Articles;
