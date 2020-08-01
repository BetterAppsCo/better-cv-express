const hooksCollection = require('models/hooks');

/** @funtion register
 *  Register hooks, instanceMethods and staticMethods to the models
 */

module.exports = () => {
  //Register Hooks
  for (const key of Object.keys(hooksCollection)) {
    const metaData = hooksCollection[key];
    for (const lifeCycleName of Object.keys(metaData.hooks)) {
      metaData.model['addHook'](lifeCycleName, metaData.hooks[lifeCycleName]);
    } 
  }
};