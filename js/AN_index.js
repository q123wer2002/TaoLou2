// start
	
TaoLou.controller('TaoLou_JobWish',['$scope','$http',function JobWish($scope,$http){

	//init
	$scope.jobstatus='正在找工作';
	$scope.jobNature='全職';

	$scope.Statusjobstatus=false;
	$scope.surfList=false;
	$scope.Statusjobnature=false;

	$scope.jobStatuses=[
   		{'name':'正在找工作','width':'144px'},
   		{'name':'觀望中，好工作可考慮','width':'244px'},
   		{'name':'目前不想換工作','width':'184px'},
	];
	$scope.jobNatures=[
		{'name':'全職'},
		{'name':'兼職'},
		{'name':'實習'},
	];

	//close DropList function
	$scope.jobStatusClose=function(){
		if($scope.Statusjobstatus && !$scope.surfList){$scope.Statusjobstatus=false;}
	}
	$scope.jobNatureClose=function(){
		if($scope.Statusjobnature && !$scope.surfList){$scope.Statusjobnature=false;}
	}

	//write function
	$scope.jobStatusFun=function(item){
		$scope.jobstatus=item.name;
		$scope.Statusjobstatus=false;
		$scope.jobstatusWidth=item.width;
	}
	$scope.jobNatureFun=function(item){
		$scope.jobNature=item.name;
		$scope.Statusjobnature=false;
	}

}]);