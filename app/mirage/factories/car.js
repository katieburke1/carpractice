// /app/mirage/factories/car.js
import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name(i) { return `Plan ${i + 1}`;}
});
