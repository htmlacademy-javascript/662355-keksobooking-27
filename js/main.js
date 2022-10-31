import { setOfferFormSubmit, resetForm, setResetButtonClick } from './form.js';
import { resetMainMark } from './map.js';
import { resetFilter } from './filter.js';
import { createErrorMessage, createSuccessMessage } from './message.js';


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


