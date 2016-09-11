/**
 * PLUNKER VERSION (based on systemjs.config.js in angular.io)
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 * Override at the last minute with global.filterSystemConfig (as plunkers do)
 */
(function(global) {
  //map tells the System loader where to look for things
  var  map = {
    'app':                               'app',
    'rxjs':                              'https://unpkg.com/rxjs@5.0.0-beta.6',
    '@angular/common':                   'https://unpkg.com/@angular/common@2.0.0-rc.4',
    '@angular/compiler':                 'https://unpkg.com/@angular/compiler@2.0.0-rc.4',
    '@angular/core':                     'https://unpkg.com/@angular/core@2.0.0-rc.4',
    '@angular/http':                     'https://unpkg.com/@angular/http@2.0.0-rc.4',
    '@angular/platform-browser':         'https://unpkg.com/@angular/platform-browser@2.0.0-rc.4',
    '@angular/platform-browser-dynamic': 'https://unpkg.com/@angular/platform-browser-dynamic@2.0.0-rc.4',
    '@angular/router':                   'https://unpkg.com/@angular/router@3.0.0-beta.2',
    '@angular/forms':                    'https://unpkg.com/@angular/forms@0.2.0'
  };

  //packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                               { main: 'main.ts',  defaultExtension: 'ts' },
    'rxjs':                              { defaultExtension: 'js' },
    '@angular/common':                   { main: 'index.js', defaultExtension: 'js' },
    '@angular/compiler':                 { main: 'index.js', defaultExtension: 'js' },
    '@angular/core':                     { main: 'index.js', defaultExtension: 'js' },
    '@angular/http':                     { main: 'index.js', defaultExtension: 'js' },
    '@angular/platform-browser':         { main: 'index.js', defaultExtension: 'js' },
    '@angular/platform-browser-dynamic': { main: 'index.js', defaultExtension: 'js' },
    '@angular/router':                   { main: 'index.js', defaultExtension: 'js' },
    '@angular/router-deprecated':        { main: 'index.js', defaultExtension: 'js' },
    '@angular/upgrade':                  { main: 'index.js', defaultExtension: 'js' }
  };

  var config = {
    transpiler: 'typescript',
    typescriptOptions: {
      emitDecoratorMetadata: true
    },
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);
})(this);