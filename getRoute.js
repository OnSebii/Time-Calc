const oebb = require('oebb-api');

// oebb.searchStationsNew('Wien Hbf').then((res) => {
//   var from = res[0];
//   oebb.searchStationsNew('Salzburg HBF').then((res) => {
//     var to = res[0];
//     oebb.getJourneys(from, to, true).then((res) => {
//       console.log(res);
//     });
//   });
// });

oebb.searchStationsNew('Wien HBF').then((res) => {
  console.log(res);
});
