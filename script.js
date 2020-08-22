import articles from './articles.js';
import './article-list.js';

const articleListElement = document.createElement('article-list');
articleListElement.articles = articles;

document.body.appendChild(articleListElement);

