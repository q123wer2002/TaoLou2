function showTime(t)
{
    t -= 1;
    document.getElementById('second').innerHTML= t;
    if(t==0){location.href="index.php";}
    //每秒執行一次,showTime()
    setTimeout("showTime("+t+")",1000);
}
//執行showTime()


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
TaoLou.directive('ngTop', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 38) {
                scope.$apply(function(){
                        scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});
TaoLou.directive('ngDown', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 40) {
                scope.$apply(function(){
                        scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});
TaoLou.directive('ngF12', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 123) {
                scope.$apply(function(){
                        scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});