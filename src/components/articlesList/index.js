import renderArticle from 'components/article';
import './index.scss';

class ArticlesList {
  constructor() {
    this.articlesListElement = null;
  }

  renderArticlesList(articles, filters = []) {
    let content = '';
    articles.forEach((article) => {
      if (filters.length === 0 || filters.indexOf(article.category) > -1) {
        content += renderArticle(article)
      }
    });
    this.articlesListElement.innerHTML = '';
    this.articlesListElement.innerHTML = content;
  }

  renderErrorMessage() {
    this.articlesListElement.innerHTML =
      '<div class="articles-list__error">There was an error fetching articles. Please try to reload the page.</div>';
  }

  render() {
    this.articlesListElement = document.createElement('div');
    this.articlesListElement.setAttribute('class', 'articles-list');

    return this.articlesListElement;
  }
}

export default ArticlesList;
