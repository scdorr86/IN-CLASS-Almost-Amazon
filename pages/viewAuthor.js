import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import { showBooks } from './books';

const viewAuthor = (obj) => {
  clearDom();

  const domString = `
  <div class="d-flex flex-row">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${obj.first_name} ${obj.last_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${obj.email}</h6>
        <p class="card-text bold">${obj.favorite ? '<span class="badge badge-info favorite-badge"><i class="fa fa-star" aria-hidden="true"></i> Favorite</span>' : '<br />'}</p>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-author-btn--${obj.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="update-author--${obj.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${obj.firebaseKey}"></i>
      </div>
    </div>;
    ${showBooks(obj.bookObject)};
  <div>`;

  renderToDOM('#view', domString);
};

export default viewAuthor;
