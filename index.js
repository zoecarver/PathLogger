let logger = require('./src/server');

exports.start = logger.start;
exports.log   = logger.log;

// logger.start.then(() => {
//   setInterval(function(){
//     console.log(typeof logger);
//     console.log('sent');
//     logger.log({
//       now: new Date(),
//       long: {
//         bit: {
//           of: 'object'
//         }
//       }
//     })
//   }, 5000);
// })