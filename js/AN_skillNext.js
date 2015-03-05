// start
var fixmeTop = '170'; // Get initial position
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
	var skillDown=document.getElementById("skill").offsetHeight+200;
	var experienceDown=document.getElementById("experience").offsetHeight+200;
	var jobTitleDown=document.getElementById("jobTitle").offsetHeight+200;
	var BGprocess=document.getElementById("BGprocess").offsetWidth;
	//console.log(skillDown);
		//loading
	$scope.hrLoading=0;
	$scope.skillLoading=0;
	$scope.experienceLoading=0;
	$scope.jobTitleLoading=0;
	$scope.salaryLoaLoading=0;
		//next button
	$scope.degreeOK=false;
	$scope.experienceOK=false;
	$scope.jobTitleOK=false;
	$scope.finish=false;
		//page_show
	$scope.SkillToExperience=false;
	$scope.experienceJobTitle=false;
	$scope.jobTitleSalary=false;
		//goto function
	$scope.gotoSkillDiv=function(){
		jQuery("body").animate({"scrollTop":30},600);
	}
	$scope.gotoExperienceDiv=function(){
		if($scope.SkillToExperience){
			jQuery("body").animate({"scrollTop":skillDown+120},600);
		}
	}
	$scope.gotoJobTitleDiv=function(){
		if($scope.experienceJobTitle){
			jQuery("body").animate({"scrollTop":skillDown+experienceDown+35},600);
		}
	}
	$scope.gotoSalaryDiv=function(){
		if($scope.jobTitleSalary){
			jQuery("body").animate({"scrollTop":skillDown+experienceDown+jobTitleDown+30},600);
		}
	}
	


	//skill Div
	$scope.myskills=[];

	//init funcitno
	$scope.SKILL_INIT=function(){
		$scope.myskills.push({'name':$scope.SKILL_NAME,'degree':$scope.SKILL_DEGREE});
	}
	
	//loading funciton
	$scope.loadingBar=function(loading){
		do{
			$scope.hrLoading++;
		}while($scope.hrLoading<loading);

		if(loading==297){
			$scope.SkillToExperience=true;
			jQuery("body").animate({"scrollTop":skillDown+120},600);
		}else if(loading==484){
			$scope.experienceJobTitle=true;
			jQuery("body").animate({"scrollTop":skillDown+experienceDown+35},600);
		}else if(loading==676){
			$scope.jobTitleSalary=true;
			jQuery("body").animate({"scrollTop":skillDown+experienceDown+jobTitleDown+30},600);
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
		$scope.hrLoading+=piece;
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
	var experienceWidth=document.getElementById("experienceProcessBar").offsetWidth;
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

	//init function
	$scope.EDU_INIT=function(){
		$scope.myEducations.push({'education':$scope.EDU_TITLE,'start':$scope.EDU_START,'end':$scope.EDU_END,'school':$scope.EDU_SCHOOL,'marjor':$scope.EDU_MAJOR});
	}

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
		//loading bar show
		if($scope.myEducations!=0){
			if($scope.myEducations.length==1){
				$scope.experienceLoading=$scope.experienceLoading+experienceWidth/4;
			}
			else{$scope.experienceLoading=$scope.experienceLoading+experienceWidth/2;}
			//check experienceOK
			if($scope.experienceLoading>0 && !$scope.experienceOK){
				$scope.experienceOK=true;
				$scope.hrLoading=$scope.hrLoading+experienceWidth;
				if($scope.hrLoading>(BGprocess-3)){$scope.hrLoading=BGprocess-3;$scope.finish=true;}
			}
		}
		//=================
	}
	//delete education
	$scope.deleteEdu=function(item){
		var index=$scope.myEducations.indexOf(item);
    	$scope.myEducations.splice(index,1);

    	if($scope.myEducations.length==0){
    		$scope.experienceLoading=$scope.experienceLoading-experienceWidth/4;
    		$scope.hrLoading=$scope.hrLoading-experienceWidth/4;
    	}
	}
		//======================================
	//experience
	//==========
		//init
	$scope.itemName="";
	$scope.itemYear="";
	$scope.itemPeriod="";
	$scope.itemCompany="";
	$scope.itemRole="";
	$scope.itemDetail="";

	$scope.itemYearStatus=false;
	$scope.itemPeriodStatus=false;

	$scope.myItemExperience=[];
	
	//init function
	$scope.JOB_INIT=function(){
		$scope.myItemExperience.push({'name':$scope.JOB_TITLE,'year':$scope.JOB_START,'peroid':$scope.JOB_PEROID,'company':$scope.JOB_COMPANY,'role':$scope.JOB_ROLE,'detail':$scope.JOB_DETAIL});
	}

	$scope.periods=[
		{"name":"一個月"},
		{"name":"三個月"},
		{"name":"半年"},
		{"name":"一年"},
		{"name":"一年以上"},
	];
	//close drop list function
	$scope.itemYearFun=function(){
		if(!$scope.surfUl && $scope.itemYearStatus){$scope.itemYearStatus=false;}
		else{$scope.itemYearStatus=true;}
	}
	$scope.itemPeriodFun=function(){
		if(!$scope.surfUl && $scope.itemPeriodStatus){$scope.itemPeriodStatus=false;}
		else{$scope.itemPeriodStatus=true;}
	}
	$scope.itemYearClose=function(){
		if(!$scope.surfUl){$scope.itemYearStatus=false;}
	}
	$scope.itemPeriodClose=function(){
		if(!$scope.surfUl){$scope.itemPeriodStatus=false;}
	}

	//click to save functino
	$scope.itemYearSaveFun=function(item){
		$scope.itemYear=item;
		$scope.itemYearStatus=false;
	}
	$scope.itemPeriodSaveFun=function(item){
		$scope.itemPeriod=item.name;
		$scope.itemPeriodStatus=false;
	}
	//save item experience
	$scope.newItemFun=function(){
		if($scope.itemName!="" && $scope.itemYear!="" && $scope.itemPeriod!="" && $scope.itemCompany!="" && $scope.itemRole!="" && $scope.itemDetail!=""){
			$scope.myItemExperience.push({'name':$scope.itemName,'year':$scope.itemYear,'peroid':$scope.itemPeriod,'company':$scope.itemCompany,'role':$scope.itemRole,'detail':$scope.itemDetail});

			$scope.itemName="";
			$scope.itemYear="";
			$scope.itemPeriod="";
			$scope.itemCompany="";
			$scope.itemRole="";
			$scope.itemDetail="";
		}else{console.log("error");}
		//loading bar show
		if($scope.myItemExperience!=0){
			$scope.experienceLoading=$scope.experienceLoading+experienceWidth/2;
			//check experienceOK
			if($scope.experienceLoading>0 && !$scope.experienceOK){
				$scope.experienceOK=true;
				$scope.hrLoading=$scope.hrLoading+experienceWidth;
				if($scope.hrLoading>(BGprocess-3)){$scope.hrLoading=BGprocess-3;$scope.finish=true;}
			}
		//=================
		}
	}
	//delete education
	$scope.deleteItem=function(item){
		var index=$scope.myItemExperience.indexOf(item);
    	$scope.myItemExperience.splice(index,1);

    	if($scope.myItemExperience.length==0){
    		$scope.experienceLoading=$scope.experienceLoading-experienceWidth/2;
    		$scope.hrLoading=$scope.hrLoading-experienceWidth/4;
    		if($scope.hrLoading<(BGprocess-3)){$scope.finish=false;}
    	}
	}

	//Job Title
	//init
	$scope.jobtitles=[
		{"name":""},
		{"name":""},
		{"name":""},
	];

	$scope.jobtitleCheck=function(){
		var finishCount=0;
		for(var i=0;i<$scope.jobtitles.length;i++){
			if($scope.jobtitles[i].name!=""){finishCount++;}
		}
		//loading bar
		var jobTitleWidth=document.getElementById("jobTitleProcessBar").offsetWidth;
		$scope.jobTitleLoading=(jobTitleWidth/3)*finishCount;

		//next Step
		if(finishCount && !$scope.jobTitleOK){
			$scope.jobTitleOK=true;

			//loading bar
			$scope.hrLoading=$scope.hrLoading+jobTitleWidth;
			if($scope.hrLoading>(BGprocess-3)){$scope.hrLoading=BGprocess-3;$scope.finish=true;}
		}
		if(!finishCount && $scope.jobTitleOK){
			$scope.jobTitleOK=false;
			//loading bar
			$scope.hrLoading=$scope.hrLoading-jobTitleWidth;
			if($scope.hrLoading<(BGprocess-3)){$scope.finish=false;}
		}
	}


	//salary and location
	//init
	var salaryLocWidth=document.getElementById("salaryProcessBar").offsetWidth;
	var salaryInput=false;
	var location=false;
	$scope.locations=[];
	$scope.allLocations=[{"des":"基隆市"},{"des":"台北市"},{"des":"新北市"},{"des":"宜蘭縣"},{"des":"新竹市"},{"des":"新竹縣"},{"des":"桃園市"},{"des":"苗栗縣"},{"des":"台中市"},{"des":"彰化縣"},{"des":"南投縣"},{"des":"嘉義市"},{"des":"嘉義縣"},{"des":"台南市"},{"des":"高雄市"},{"des":"屏東縣"},{"des":"台東縣"},{"des":"花蓮縣"},{"des":"金門縣"},{"des":"連江縣"},{"des":"澎湖縣"},{"des":"南海諸島"},{"des":"海外"},];

	$scope.salaryCheck=function(){
		if($scope.jobSalary && !salaryInput){
			salaryInput=true;
			$scope.salaryLoaLoading=$scope.salaryLoaLoading+salaryLocWidth/4;
			$scope.hrLoading=$scope.hrLoading+salaryLocWidth/2;
			if($scope.hrLoading>(BGprocess-3)){$scope.hrLoading=BGprocess-3;$scope.finish=true;}
		}else if(!$scope.jobSalary && salaryInput){
			salaryInput=false;
			$scope.salaryLoaLoading=$scope.salaryLoaLoading-salaryLocWidth/4;
			$scope.hrLoading=$scope.hrLoading-salaryLocWidth/2;
			if($scope.hrLoading<(BGprocess-3)){$scope.finish=false;}
		}
	}

	//add location
	$scope.addLocation=function(){
		/*
		//讀取資料
		var subJobLocation=jQuery('#twzipcode').twzipcode('serialize');
		//分析資料
		var Loca=subJobLocation.split("&");
		var county=Loca[0].split("=");
		var district=Loca[1].split("=");
		var zipcode=Loca[2].split("=");
		//console.log(county[1]);
		*/
		if($scope.thislocation!=""){
			var index=$scope.locations.indexOf($scope.thislocation);
			var All_index=$scope.allLocations.indexOf($scope.thislocation);
			if(index==-1){
				if(All_index!=-1){
					//insert locations
					$scope.locations.push($scope.thislocation);
					//delete location from alllocation
					$scope.allLocations.splice(All_index,1);
				}
			}
		}
		//locaing bar
		if($scope.locations.length!=0){
			if(!location){
				$scope.hrLoading=$scope.hrLoading+salaryLocWidth/2;
				if($scope.hrLoading>(BGprocess-3)){$scope.hrLoading=BGprocess-3;$scope.finish=true;}
				location=true;
			}
			if($scope.locations.length<4){$scope.salaryLoaLoading=$scope.salaryLoaLoading+salaryLocWidth/8;}
		}
		//show next page
	}

	//delete location
	$scope.deleteLoca=function(item){
		if($scope.locations.length<4){$scope.salaryLoaLoading=$scope.salaryLoaLoading-salaryLocWidth/8;}

		var index=$scope.locations.indexOf(item);
		if(index!=-1){$scope.locations.splice(item,1);}

		//locaing bar
		if($scope.locations.length==0){
			$scope.hrLoading=$scope.hrLoading-salaryLocWidth/2;
			if($scope.hrLoading<(BGprocess-3)){$scope.finish=false;}
			location=false;
		}
		
		if(!salaryInput || !location){$scope.finish=false;}
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

/*
$(document).ready(function(){
	//地址顯示
	var countySel = $('#LOCATION_countySel').val();
	var districtSel = $('#LOCATION_districtSel').val();
	var css = [
            'county form-control',
            'district form-control',
            'zipcode form-control'
        ];

	$('#twzipcode').twzipcode({
		'css': css,
		'detect': true, // 預設為 false
	});
});
*/