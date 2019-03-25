import './index.scss';

class Options {
  constructor() {
    this.filters = [];
  }

  createReverseOrderButton(reverseArticlesOrder) {
    const reverseButton = document.createElement('button');
    reverseButton.innerHTML = 'Sort by date';
    reverseButton.setAttribute('class', 'options__reverse-button');
    reverseButton.addEventListener('click', (e) => {
      reverseArticlesOrder();
    });
    return reverseButton;
  }

  createSourcesFilters(displayFilteredArticles) {
    const fashionLabel = document.createElement('label');
    fashionLabel.setAttribute('class', 'options__label');
    fashionLabel.innerHTML = 'Fashion';
    const fashionCheckbox = document.createElement('input');
    fashionCheckbox.setAttribute('type', 'checkbox');
    fashionCheckbox.setAttribute('class', 'options__checkbox');
    const fashionCheckmark = document.createElement('span');
    fashionCheckmark.setAttribute('class', 'options__checkmark');
    fashionLabel.appendChild(fashionCheckbox);
    fashionLabel.appendChild(fashionCheckmark);
    fashionCheckbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        this.filters.push('fashion');
      } else {
        this.filters = this.filters.filter((filtr) => filtr !== 'fashion');
      }
      displayFilteredArticles();
    });

    const sportsLabel = document.createElement('label');
    sportsLabel.setAttribute('class', 'options__label');
    sportsLabel.innerHTML = 'Sports';
    const sportsCheckbox = document.createElement('input');
    sportsCheckbox.setAttribute('type', 'checkbox');
    sportsCheckbox.setAttribute('class', 'options__checkbox');
    const sportsCheckmark = document.createElement('span');
    sportsCheckmark.setAttribute('class', 'options__checkmark');
    sportsLabel.appendChild(sportsCheckbox);
    sportsLabel.appendChild(sportsCheckmark);
    sportsCheckbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        this.filters.push('sport');
      } else {
        this.filters = this.filters.filter((filtr) => filtr !== 'sport');
      }
      displayFilteredArticles();
    });

    const checkboxes = document.createElement('div');
    checkboxes.setAttribute('class', 'options__checkboxes');
    checkboxes.appendChild(fashionLabel);
    checkboxes.appendChild(sportsLabel);
    return checkboxes;
  }

  returnCurrentFilters() {
    return this.filters;
  }

  render({ reverseArticlesOrder, displayFilteredArticles }) {
    const options = document.createElement('div');
    options.setAttribute('class', 'options');

    const filters = document.createElement('div');
    filters.setAttribute('class', 'options__filters');
    const filtersTitle = document.createElement('p');
    filtersTitle.innerHTML = 'Data sources';
    filtersTitle.setAttribute('class', 'options__filters-title');
    filters.appendChild(filtersTitle);
    filters.appendChild(this.createSourcesFilters(displayFilteredArticles));

    options.appendChild(filters);
    options.appendChild(this.createReverseOrderButton(reverseArticlesOrder));
    return options;
  }
}

export default Options;
