const getSimilarOffer = (onSuccess, onFail) => fetch('https://27.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((offers) => {
    onSuccess(offers);
  })
  .catch(() => {
    onFail();
  });

const sendOfferForm = (formData, onSuccess, onFail) => fetch('https://27.javascript.pages.academ/keksobooking',
  {
    method: 'POST',
    body: formData,
  },
)
  .then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  })
  .catch(() => {
    onFail();
  });

export { getSimilarOffer, sendOfferForm };
