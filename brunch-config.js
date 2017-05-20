module.exports = {
  paths: {
    watched: ['app', 'specs']
  },
  files: {
    javascripts: {
      joinTo: {
        'js/bundle.js': /^app\/js|(.|\/)*node_modules/,
        'specs/bundle.spec.js': /^specs/
      },
    },
    stylesheets: {
      joinTo: 'css/bundle.css'
    }
  },
  modules: {
    autoRequire: {
      'js/bundle.js': ['js/app'],
      'specs/bundle.spec.js': ['specs/app.spec']
    }
  },
  // to allow access server that runs on a different machine
  server: {
    hostname: '0.0.0.0',
    port: 9000
  },
  watcher: {
    // to use with vagrant
    usePolling: true
  },
  sourceMaps: false,
  plugins: {
    eslint: {
      pattern: /^js/
    },
    karma: {
      singleRun: true,
      basePath: 'public',
      browsers: ['PhantomJS'],
      frameworks: ['jasmine'],
      reporters: ['spec'],
      specReporter: {
        maxLogLines: 5,         // limit number of lines logged per test
        suppressErrorSummary: true,  // do not print error summary
        suppressFailed: false,  // do not print information about failed tests
        suppressPassed: false,  // do not print information about passed tests
        suppressSkipped: true,  // do not print information about skipped tests
        showSpecTiming: false // print the time elapsed for each spec
      },
      files: [
        'js/bundle.js',
        'js/bundle.spec.js'
      ]
    }
  },
  hooks: {
    preCompile() {
      require('child_process').exec('rm -rf public');
    }
  }
};
