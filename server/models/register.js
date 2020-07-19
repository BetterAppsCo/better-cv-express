const hooksCollection = require('models/hooks');
// const instanceMethodsCollection = require('models/instanceMethods');
// const staticMethodsCollection = require('models/staticMethods');

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
  // //Register instance methods
  // for (const key of Object.keys(instanceMethodsCollection)) {
  //   const metaData = instanceMethodsCollection[key];
  //   for (const methodName of Object.keys(metaData.instanceMethods)) {
  //     metaData.model['prototype'][methodName] = metaData.instanceMethods[methodName];
  //   } 
  // }
  // //Register static methods
  // for (const key of Object.keys(staticMethodsCollection)) {
  //   const metaData = staticMethodsCollection[key];
  //   for (const methodName of Object.keys(metaData.staticMethods)) {
  //     metaData.model[methodName] = metaData.staticMethods[methodName];
  //   }
  // }
};