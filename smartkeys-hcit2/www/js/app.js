// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

app.controller('MyController', function($scope, $ionicPopover) {
    $scope.ipaddress="127.0.0.1"
    $scope.connect = function(){
        connectTo($scope.ipaddress);
    }
    var template = '<ion-popover-view>' + '<ion-header-bar>' +
        '<h1 class = "title">Connection</h1>' +
        '</ion-header-bar>'+ '<ion-content>' +
        'Enter IP-address of your computer to connect:' +
        '<input type="text" ng-model="ipaddress" style="background:#f5f5f5">'+
        '<button ng-click="connect()">Connect</button>'+
        '</ion-content>' + '</ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });

    $scope.openPopover = function($event) {
        $scope.popover.show($event);
    };
})
