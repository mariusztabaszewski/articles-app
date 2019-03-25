import Options from 'components/options';
import ArticlesList from 'components/articlesList';
import { fetchSportArticles, fetchFashionArticles } from 'api/articlesApi';
import translateMonth from 'utils/translateMonth';
import './index.scss';

const options = new Options();
const articlesList = new ArticlesList();

class App {
  constructor() {
    this.articles = [];
  }

  getArticles() {
    const sportsArticlesPromise = fetchSportArticles();
    const fashionArticlePromise = fetchFashionArticles();
    Promise
      .all([sportsArticlesPromise, fashionArticlePromise])
        .then((values) => {
          this.articles = this.sortArticlesByDate([...values[0], ...values[1]]);
          articlesList.renderArticlesList(this.articles);
        })
        .catch((error) => {
          articlesList.renderErrorMessage();
        });
  }

  sortArticlesByDate(articles) {
    return articles.sort((a,b) => {
      return new Date(translateMonth(b.date)) - new Date(translateMonth(a.date));
    });
  }

  reverseArticlesOrder() {
    this.articles = this.articles.reverse();
    articlesList.renderArticlesList(
      this.articles,
      options.returnCurrentFilters()
    );
  }

  displayFilteredArticles() {
    articlesList.renderArticlesList(
      this.articles,
      options.returnCurrentFilters()
    );
  }

  render() {
    this.getArticles();
    const app = document.createElement('div');
    app.setAttribute('class', 'app');
    app.appendChild(options.render({
      reverseArticlesOrder: () => this.reverseArticlesOrder(),
      displayFilteredArticles: () => this.displayFilteredArticles(),
    }));
    app.appendChild(articlesList.render());
    return app;
  }
}

export default App;
