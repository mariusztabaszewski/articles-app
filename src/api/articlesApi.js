const apiUrl = 'http://localhost:6010';
const fashionArticlesUrl = `${apiUrl}/articles/fashion`;
const sportArticlesUrl = `${apiUrl}/articles/sports`;

const fetchArticles = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error();
      }
      return response.json();
    })
    .then((responseJson) => {
      return responseJson.articles;
    });
};

export const fetchSportArticles = () => fetchArticles(sportArticlesUrl);
export const fetchFashionArticles = () => fetchArticles(fashionArticlesUrl);
