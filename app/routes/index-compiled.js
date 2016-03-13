import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  }
});

//# sourceMappingURL=index-compiled.js.map