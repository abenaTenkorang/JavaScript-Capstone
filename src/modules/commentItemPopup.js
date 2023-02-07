import countComments from './countComment.js';

const addComment = async (form, id) => {
  const username = form.elements.username.value;
  const comment = form.elements.comment.value;
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FQJLijeHFubRDIVlfOvu/comments/',
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username,
        comment,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  if (!response.ok && !(response.status === 201)) {
    return;
  }

  const getComments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FQJLijeHFubRDIVlfOvu/comments?item_id=${id}`);
  const result2 = await getComments.json();

  // eslint-disable-next-line consistent-return
  return result2;
};

export const popupCommentListener = async (container, id) => {
  container.innerHTML = '';

  const fetchComment = async (id) => {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const result = await response.json();

    let comment = { ...result };

    const commentResponse = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FQJLijeHFubRDIVlfOvu/comments?item_id=${id}`,
    );
    const commentResult = await commentResponse.json();
    if (commentResult.length > 0) {
      comment = { ...comment, comments: commentResult };
    } else {
      comment = { ...comment, comments: [] };
    }
    return comment;
  };
  const comment = await fetchComment(id);
  container.classList.add('show');

  const card = document.createElement('div');
  card.classList.add('card');

  const title = document.createElement('h2');
  title.innerText = comment.name;
  title.classList.add('commentName');

  const closeBtn = document.createElement('button');
  closeBtn.id = 'close_popup';
  closeBtn.innerText = 'X';

  const commImg = document.createElement('div');
  commImg.classList.add('commImg');
  commImg.innerHTML = `<img src='${comment.image.original}' alt=${comment.name}/>`;

  const spec = document.createElement('ul');
  spec.classList.add('spec');
  spec.innerHTML = `
  <li>Language: ${comment.language}</li>
  <li>Premiered: ${comment.premiered}</li>
  <li>Rating: ${comment.rating.average}</li>
  <li>Runtime: ${comment.runtime}</li>
  `;

  const commentFormSection = document.createElement('div');
  commentFormSection.classList.add('commentFormSection');

  const formTitle = document.createElement('h4');
  formTitle.innerHTML = `Comments (${countComments(comment.comments)})`;
  formTitle.classList.add('formTitle');

  const commentedList = document.createElement('ul');
  commentedList.classList.add('commentedList');
  let commentUiItems = '';
  if (comment.comments.length > 0) {
    comment.comments.forEach((com) => {
      commentUiItems += `<li>
      <span>${com.username}</span>
      <span>${com.creation_date}</span>
      <span>${com.comment}</span>
      </li>`;
    });
  }

  commentedList.innerHTML = commentUiItems;

  commentFormSection.append(formTitle, commentedList);

  const commentForm = document.createElement('form');
  commentForm.id = 'comment-form';

  commentForm.innerHTML = `
  <input type='text' name='username' id='username' placeholder='Your name here...' required /> 
  <textarea name='comment' id='comment' placeholder= 'Your comments here...' required ></textarea>
  <button type='submit' id='submit'>Submit</button>
  `;

  card.innerHTML = '';
  card.append(title, closeBtn, commImg, spec, commentFormSection, commentForm);
  container.innerHTML = '';
  container.append(card);

  closeBtn.addEventListener('click', () => {
    container.classList.remove('show');
  });

  commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const LatestComments = await addComment(commentForm, comment.id);

    let latestCommentList = '';
    LatestComments.forEach((com) => {
      latestCommentList += `<li>
      <span>${com.username}</span>
      <span>${com.creation_date}</span>
      <span>${com.comment}</span>
      </li>`;
    });

    formTitle.innerHTML = `Comments (${countComments(comment.comments)})`;
    commentedList.innerHTML = latestCommentList;
    commentForm.elements.username.value = '';
    commentForm.elements.comment.value = '';
  });
};

export const nothin = () => {};