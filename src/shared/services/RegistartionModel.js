import PolRegistrationService from './PolRegistrationService.js';

export default {
  addRegiData(params) {
    return PolRegistrationService.getEndpointToAdd(
      `api/postcodes/${params.postcodeValue}/${params.field}`
    );
  }
};
