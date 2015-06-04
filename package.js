Package.describe({
  name: 'guitarman:broadcast-stations',
  version: '0.0.1',
  summary: 'Find or check a broadcast station by name or alias name.',
  git: 'https://github.com/the-guitarman/meteor-broadcast-stations.git',
  documentation: 'README.md'
});

/*
Npm.depends({
  'coffee': '1.1.0',
  'underscore': '1.8.3'
});
*/

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use([
      'coffeescript',
      'underscore'
    ], [
      'server', 'client'
  ]);
  api.export(['BroadcastStation'], ['client', 'server']);
  api.addFiles([
      'data/radio_stations.coffee.md',
      'data/television_stations.coffee.md',
      'lib/broadcast_station.coffee.md'
    ], [
      'server', 'client'
  ]);
});

Package.onTest(function(api) {
  api.use([
      'tinytest', //'test-helpers', 
      'coffeescript', 
      'underscore'
    ], [
      'client', 'server'
  ]);
  api.use('guitarman:broadcast-stations');
  api.addFiles('test.coffee.md');
});

