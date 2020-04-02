import Vue from 'vue';

export default {
  getDevice() {
    return new Promise((resolve, reject) => {
      try {
        let client;
        if (window.ca && window.ca.rm) {
          client = new window.ca.rm.Client();
        }
        if (client && typeof client.loadFlash === 'function') {
          client.loadFlash(() => {
            client.setProperty('format', 'json');
            client.setProperty('didname', 'RISKFORT_COOKIE');
            client.processDNA();
            resolve(client.getDNA());
            console.log('client check', client.getDNA());
          });
        } else {
          resolve(null);
        }
      } catch (e) {
        Vue.prototype.$log({
          short_message: 'error with collecting devive DNA',
          full_message: e.message
        });
        reject(e);
      }
    });
  }
};

// export default setupCollection;
