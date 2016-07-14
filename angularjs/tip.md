#How can I test an AngularJS service from the console?

Interop from outside of angular to angular is same as debugging angular application or integrating with third party library.

For any DOM element you can do this:

> **angular.element(domElement).scope()** to get the current scope for the element


> **angular.element(domElement).injector()** to get the current app injector


> **angular.element(domElement).controller()** to get a hold of the ng-controller instance.


From the injector you can get a hold of any service in angular application. Similarly from the scope you can invoke any methods which have been published to it.

Keep in mind that any changes to the angular model or any method invocations on the scope need to be wrapped in $apply() like this:

```javascript
$scope.$apply(function(){
  // perform any model changes or method invocations here on angular app.
});
```
