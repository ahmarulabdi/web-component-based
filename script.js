import './article-item.js';
import article from './article.js';

let containerElement = document.querySelector('.container');

let articleItemElement = document.createElement('article-item');
articleItemElement.article = article;

containerElement.appendChild(articleItemElement);