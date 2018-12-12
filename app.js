app = angular.module("app", ["ngRoute"]);

app.filter("trust", ['$sce', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
}]);

app.config([
  "$routeProvider",
  "$locationProvider",
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when("/", {
        templateUrl: "views/main.html",
        controller: "MainController"
      })
      .when("/features/:productId", {
        templateUrl: "views/features.html",
        controller: "FeaturesController"
      })
      .when("/comparison/:productId", {
        templateUrl: "views/comparison.html",
        controller: "ComparisonController"
      })
      .when("/support/:productId", {
        templateUrl: "views/support.html",
        controller: "SupportController"
      })
      .when("/specialist/:productId", {
        templateUrl: "views/specialist.html",
        controller: "SpecialistController"
      })
      .otherwise({ redirectTo: "/" });
  }
]);

app.controller("RootController", function(
  $scope,
  $route,
  $routeParams,
  $location
) {
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
  fetch("products.json")
  .then(response => response.json())
  .then(json => {
    $scope.products = json;
    $scope.$apply();
  });
});

app.controller("MainController", function($scope, $routeParams) {
  $scope.name = "MainController";
  $scope.params = $routeParams;
});

app.controller("FeaturesController", function($scope, $routeParams) {
  $scope.name = "FeaturesController";
  $scope.params = $routeParams;
  $scope.productId = $scope.params.productId;
  $scope.product = $scope.products[$scope.productId];
});

app.controller("ComparisonController", function($scope, $routeParams) {
  $scope.name = "ComparisonController";
  $scope.params = $routeParams;
  $scope.productId = $scope.params.productId;
  $scope.product = $scope.products[$scope.productId];
});

app.controller("SupportController", function($scope, $routeParams) {
  $scope.name = "SupportController";
  $scope.params = $routeParams;
  $scope.productId = $scope.params.productId;
  $scope.product = $scope.products[$scope.productId];
});

app.controller("SpecialistController", function($scope, $routeParams) {
  $scope.name = "SpecialistController";
  $scope.params = $routeParams;
  $scope.productId = $scope.params.productId;
  $scope.product = $scope.products[$scope.productId];
});
