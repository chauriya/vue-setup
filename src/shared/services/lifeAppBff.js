// TODO: Refactor, this is POC

import { apolloClient } from '@/plugins/apollo';
import { mutations } from '@/graphql';

/*
  Use "separation of concerns" principle for readability and maintainabilitey.
  Try to keep Apollo logic out of our components (which are for presentation) and out of Vuex (which is for state).
  We abstract apollo into this separate module. We can turn this into a vue plugin with configurability.
  We can choose to use apollo (graphql), axios (AJAX/fetch), or any other data service client/api.
  * See (https://vuejsdevelopers.com/2017/08/28/vue-js-ajax-recipes/)
 */
const removeKeys = async (obj, keys) => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      switch (typeof obj[prop]) {
        case 'object':
          if (keys.indexOf(prop) > -1) {
            delete obj[prop];
          } else {
            removeKeys(obj[prop], keys);
          }
          break;
        default:
          if (keys.indexOf(prop) > -1) {
            delete obj[prop];
          }
          break;
      }
    }
  }
};

export const getLifeSections = async ({ query, variables }) => {
  return apolloClient
    .query({
      query,
      variables
    })
    .then(response => {
      // we cannot only return the single get life section because graph can send multiple root
      // queries. We have to send back the entire data object
      return response.data;
    });
};

export const saveLifeSection = async ({ variables }) => {
  removeKeys(variables.app, '__typename');
  return apolloClient
    .mutate({
      mutation: mutations.saveLifeSection,
      variables
    })
    .then(response => {
      return response.data.saveLifeSection;
    });
};
