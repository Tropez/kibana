module.exports = function (grunt) {
  var join = require('path').join;
  var rel = require('path').join.bind(null, grunt.config.get('root'));
  var directory = join(grunt.config.get('root'), 'esvm');

  return {
    options: {
      directory: directory,
      version: '1.4.2',
      plugins: [
        'elasticsearch/marvel/latest'
      ],
      config: {
        network: {
          host: '127.0.0.1'
        },
        marvel: {
          agent: {
            enabled: false
          }
        }
      }
    },
    dev: {}
  };
};
