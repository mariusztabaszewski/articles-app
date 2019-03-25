import './index.scss';

const renderArticle = (article) => {
  const setImageOrPlaceholder = (image) => image ?
    `<img class="article__image" src="${image}" alt="" />` :
    '<div class="aticle__image-placeholder"></div>';
  return `
    <div class="article">
      <div class="article__image-container">
        ${setImageOrPlaceholder(article.image)}
      </div>
      <div>
        <p class="article__title">${article.title}</p>
        <p class="article__preamble">${article.preamble}</p>
        <p class="article__date">${article.date}</p>
      </div>
    </div>
  `;
}

export default renderArticle;
