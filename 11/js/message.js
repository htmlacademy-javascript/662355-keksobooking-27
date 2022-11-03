const createSuccessMessage = () => {
  const message = document.querySelector('#success')
    .content
    .querySelector('.success');
  const eventListener = (evt) => {
    if (evt.type === 'click' || evt.key === 'Escape') {
      message.remove();
      document.removeEventListener('keydown', eventListener);
      document.removeEventListener('click', eventListener);
    }
  };
  document.addEventListener('keydown', eventListener);
  document.addEventListener('click', eventListener);
  document.body.appendChild(message);

};

const createErrorMessage = () => {
  const message = document.querySelector('#error')
    .content
    .querySelector('.error');
  const button = message.querySelector('.error__button');
  const eventListener = (evt) => {
    if (evt.type === 'click' || evt.key === 'Escape') {
      message.remove();
      document.removeEventListener('keydown', eventListener);
      document.removeEventListener('click', eventListener);
      button.removeEventListener('click', eventListener);
    }
  };
  document.addEventListener('keydown', eventListener);
  document.addEventListener('click', eventListener);
  button.addEventListener('click', eventListener);
  document.body.appendChild(message);

};

export { createSuccessMessage, createErrorMessage };
