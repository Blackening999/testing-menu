import Ember from 'ember';
import ToggleMenu from 'testing-menu/mixins/toggle-menu';

export default Ember.Component.extend(ToggleMenu, {

  classNames: ['background-overlay'],
  $overlayComponent: null,

  initElement: function() {
    this._super();
    this.set('$overlayComponent', Ember.$('.background-overlay'));
  }.on('didInsertElement'),

  updateOverlayStatus: function() {
    this.get('$overlayComponent')
      .css({ visibility: this.get('menuProgressService') === 0 ? 'hidden' : 'visible' });
  }.observes('menuProgress')
});
