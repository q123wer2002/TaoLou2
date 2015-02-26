var TaoLou = angular.module('TaoLou',[]);

TaoLou.controller('TaoLouAngular',['$scope','$http',function TaoLou($scope,$http){



    //serch job use it
    $scope.checkQuery=function(){
        if($scope.query!=""){$scope.searchButBGColor="#54A7F7";$scope.searchButColor="white";}
        if($scope.query==""){$scope.searchButBGColor="";$scope.searchButColor="";}
    }
    $scope.search=function(){
        if($scope.query!=""){location.href="joblist.php?q="+$scope.query;}
    }
}]);

TaoLou.directive('ngRightClick', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
});
TaoLou.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                        scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});