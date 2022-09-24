const Article = ({ articleProp }) => {
  const articleData = articleProp.posts;
  return (
    <article>
      {articleData.map((theArticles) => (
        <div key={theArticles.id}>
          <h3>{theArticles.title}</h3>
          <small>{(theArticles.date = "January 1, 1970")}</small>
          <p>{theArticles.preview}</p>
        </div>
      ))}
    </article>
  );
};

export default Article;
