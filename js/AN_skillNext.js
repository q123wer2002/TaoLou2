// start
var fixmeTop = '400'; // Get initial position
$(window).scroll(function() {            // Assign scroll event listener
    var currentScroll = $(window).scrollTop(); // Get current position
    if (currentScroll >= fixmeTop) { // Make it fixed if you've scrolled to it
        $('.processBarDiv').css({
            position: 'fixed',
            height:'60px',
            top: '0px',
            left: '0px',
            width:'100%',
            padding:'10px',
            'box-shadow':'0px 2px 10px #000000',
            margin:'auto',
        });
    	$("#titleHit").css({'display':'none'});
    }
    else{
        $('.processBarDiv').css({
            position: 'relative',
            height:'70px',
            top: '0px',
            left: '0px',
            width:'924px',
            padding:'50px',
            'box-shadow':'none',
        });
        $("#titleHit").css({'display':'block'});
    }
});

TaoLou.controller('TaoLou_skillNext',['$scope','$http',function SkillNext($scope,$http){
	//init
	$scope.hrLoading=0;
	$scope.skillLoading=0;
	$scope.experienceLoading=0;
	$scope.jobTitleLoading=0;
	$scope.salaryLoaLoading=0;

	$scope.degreeOK=false;
	$scope.SkillToExperience=true;

	$scope.myskills=[
		{'name':'Angular','degree':0},
		{'name':'PHP','degree':0},
		{'name':'MySQL','degree':0},
		{'name':'JAVASCRIPT','degree':0},
		{'name':'HTML','degree':0},
	];

	//loading funciton
	$scope.loadingBar=function(loading){
		do{
			$scope.hrLoading++;
		}while($scope.hrLoading<loading);
		if(loading==297){
			$scope.SkillToExperience=true;
			var skillDown=document.getElementById("skill").offsetHeight;
			jQuery("body").animate({"scrollTop":skillDown+30},600);
		}
	}
	$scope.overSkillDIV=function(){
		var skillBar=document.getElementById("skillProcessBar").offsetWidth;
		var piece=skillBar/$scope.myskills.length;
		var loading=0;
		var count=0;
		for(var i=0;i<$scope.myskills.length;i++){
			if($scope.myskills[i].degree!=0){
				loading=loading+piece;
				count++;
			}
		}
		//loading bar
		$scope.skillLoading=loading;
		$scope.hrLoading=120+loading;
		//check myskills OK ?
		if(count==$scope.myskills.length){$scope.degreeOK=true;}
		//console.log(piece);
	}

	//click functino about Ranking
	/*$scope.RankUP=function(item){
		if(item.rank!=1){
			//上面的全部+1
			for(var i=0;i<$scope.myskills.length;i++){
				if((item.rank-$scope.myskills[i].rank)==1){$scope.myskills[i].rank++;}
				$scope.myskills[i].change=false;
			}
			//自己-1
			item.rank--;
			item.change=true;
		}
	}
	$scope.RankDown=function(item){
		if(item.rank!=5){
			//下面的全部-1
			for(var i=0;i<$scope.myskills.length;i++){
				if(($scope.myskills[i].rank-item.rank)==1){$scope.myskills[i].rank--;}
				$scope.myskills[i].change=false;
			}
			//自己+1
			item.rank++;
			item.change=true;
		}
	}
	$scope.checkComment=function(item){
		if(item.comment!=""){placeholder="{}";}
	}*/

	//education
	//=========================================
	//init
	$scope.education="";
	$scope.startEdu="";
	$scope.endEdu="";
	$scope.schoolName="";
	$scope.majorName="";

	$scope.surfUl=false;

	$scope.educations=[
   		{'name':'博士'},
   		{'name':'碩士'},
   		{'name':'大學'},
   		{'name':'四技'},
   		{'name':'二技'},
   		{'name':'二專'},
   		{'name':'三專'},
   		{'name':'五專'},
   		{'name':'高中'},
   		{'name':'高職'},
   		{'name':'國中'},
   		{'name':'國小'},
   		{'name':'其他'},
	];
	$scope.myEducations=[];

	//close drop list function
	$scope.educationFun=function(){
		if(!$scope.surfUl && $scope.educationStatus){$scope.educationStatus=false;}
		else{$scope.educationStatus=true;}
	}
	$scope.educationStartFun=function(){
		if(!$scope.surfUl && $scope.eduStartStatus){$scope.eduStartStatus=false;}
		else{$scope.eduStartStatus=true;}
	}
	$scope.educationEndFun=function(){
		if(!$scope.surfUl && $scope.eduEndStatus){$scope.eduEndStatus=false;}
		else{$scope.eduEndStatus=true;}
	}
	$scope.educationClose=function(){
		if(!$scope.surfUl){$scope.educationStatus=false;}
	}
	$scope.educationStartClose=function(){
		if(!$scope.surfUl){$scope.eduStartStatus=false;}
	}
	$scope.educationEndClose=function(){
		if(!$scope.surfUl){$scope.eduEndStatus=false;}
	}

	//click to save functino
	$scope.settingEdu=function(item){
		$scope.education=item.name;
		$scope.educationStatus=false;
	}
	$scope.startEduFun=function(item){
		$scope.startEdu=item;
		$scope.eduStartStatus=false;
	}
	$scope.endEduFun=function(item){
		var endyear=item+3;
		$scope.endEdu=endyear;
		$scope.eduEndStatus=false;
	}
	//save education
	$scope.newEduFun=function(){
		if($scope.education!="" && $scope.startEdu!="" && $scope.endEdu!="" && $scope.schoolName!="" && $scope.majorName!=""){
			$scope.myEducations.push({'education':$scope.education,'start':$scope.startEdu,'end':$scope.endEdu,'school':$scope.schoolName,'marjor':$scope.majorName});

			$scope.education="";
			$scope.startEdu="";
			$scope.endEdu="";
			$scope.schoolName="";
			$scope.majorName="";
		}else{console.log("error");}
	}
	//delete education
	$scope.deleteEdu=function(item){
		var index=$scope.myEducations.indexOf(item);
    	$scope.myEducations.splice(index,1);
	}
}]);

TaoLou.filter('range', function() {
	return function(input, total) {
		total = parseInt(total);
	    for (var i=2015; i>(2015-total); i--)
	    	input.push(i);
	    return input;
	  };
});