'use strict';
var app = angular.module('app', ['pascalprecht.translate']);
  app.config(function ($translateProvider) {
    $translateProvider.fallbackLanguage('en');
    $translateProvider.registerAvailableLanguageKeys(['en', 'es'],{
      'en_*':'en',
      'es_*':'es'
    })
    $translateProvider.translations('en', {
      QUESTION:"Where are you going?",
      BUTTON_LANG_EN:"english",
      BUTTON_LANG_ES:"spanish"
    });
    $translateProvider.translations('es', {
      QUESTION:"Á donde te vas?",
      BUTTON_LANG_EN:"inglés",
      BUTTON_LANG_ES:"español"
    });
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('en');
    
  });
  app.controller('Ctrl',['$scope', '$translate', function ($scope, $translate) {
    $scope.changeLanguage = function(key){
      $translate.use(key);
    };
  }]);

