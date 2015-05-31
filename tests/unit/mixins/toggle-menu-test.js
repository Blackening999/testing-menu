import Ember from 'ember';
import ToggleMenuMixin from 'testing-menu/mixins/toggle-menu';

module('ToggleMenuMixin');

// Replace this with your real tests.
test('it works', function() {
  var ToggleMenuObject = Ember.Object.extend(ToggleMenuMixin);
  var subject = ToggleMenuObject.create();
  ok(subject);
});
