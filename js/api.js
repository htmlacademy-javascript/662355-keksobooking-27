const GET_OFFERS_URL = 'https://27.javascript.pages.academy/keksobooking/data';
const SEND_OFFERS_URL = 'https://27.javascript.pages.academy/keksobooking';

const getSimilarOffer = (onSuccess, onFail) => fetch(GET_OFFERS_URL)
  .then((response) => response.json())
  .then((offers) => {
    onSuccess(offers);
  })
  .catch(() => {
    onFail();
  });

const sendOfferForm = (formData, onSuccess, onFail) => fetch(SEND_OFFERS_URL,
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
