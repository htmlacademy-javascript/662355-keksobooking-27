import { setOfferFormSubmit, resetForm, setResetButtonClick } from './form.js';
import { resetMainMark, renderSimilarOffers } from './map.js';
import { resetFilter, setChangeEventOnFilter, filterOffers } from './filter.js';
import { createErrorMessage, createSuccessMessage } from './message.js';
import { getSimilarOffer } from './api.js';
import { showAlert, debounce } from './util.js';


const reset = () => {
  resetMainMark();
  resetFilter();
  resetForm();
};

setOfferFormSubmit(() => {
  reset();
  createSuccessMessage();
}, () => {
  createErrorMessage();
});

setResetButtonClick(reset);

getSimilarOffer((offers) => {
  renderSimilarOffers(offers);
  setChangeEventOnFilter(
    debounce(() => {
      renderSimilarOffers(offers.filter(filterOffers));
    })
  );
}, () => {
  showAlert('Не удалось получить похожие объявления. Попробуй еще раз!');
});
