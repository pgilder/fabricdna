Template.videos.onRendered(function() {
  var $videos = this.$('videos');
  $videos.siblings('.content-scrollable:not(.static-videos)').children().first().waypoint(function(direction) {
    $videos.toggleClass('scrolled', direction === 'down');
  }, {
    context: '.content-scrollable',
    offset: -200
  });
});

Template.videos.helpers({
  // Iron Router stores {initial: true} in history state if this is
  // the first route that we hit in an app. There are a variety of 
  // unexpected ways that this can happen (for example oauth, or 
  // hot code push), but we can't rely on going back in such cases.
  back: function () {
    return this.back && ! history.state.initial;
  }
});
