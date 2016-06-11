## ANGULARJS PERFORMANCE TIPS

### TIP #1: SIMPLE TRICK TO SPEED UP YOUR ANGULARJS APP LOAD TIME

config(['$routeProvider', '$compileProvider', function($routeProvider, $compileProvider) {
    //configure routeProvider as usual
    $compileProvider.debugInfoEnabled(false);
}]

### TIP #2: SPEED UP EVENT PROCESSING USING LOCAL EVENTS IN YOUR DIRECTIVES

```javascript
angular.module('ngPerf.randomButton', ['ngPerf.directives'])
    .directive('randomButton', function() {
        return {
            restrict: 'EA',
            scope: {},
            controller: function($scope) {
                $scope.randomNumber = '123';
                $scope.generateRandom = function() {
                    $scope.randomNumber = Math.floor(Math.random()*100);
                    //event.preventDefault(); //uncomment to suppress digest altogether
                }
            },
            template: '<button ngp-local-click="generateRandom(event)">Random</button><span ng-bind="randomNumber"></span>',
            link: function(){}
        };
    });
```

### TIP #3: NG-STYLE IS MUCH FASTER THAN NG-CLASS

Why? well the jsperf is not lying, but unfortunately angular introduces too much overhead in ng-class. Most of the delay is due to Angular’s reliance on .data method to store all sort of data such as a class-count map and more. For a few instances it doesn’t matter, but if you have a large number of ng-class usage in your view, you are better off replacing them with ng-style.

### TIP #4: NG-BIND IS FASTER THAN EXPRESSION BIND AND ONE TIME BIND

* ng-bind

* {{}} Expression

* {{::}} One time bind