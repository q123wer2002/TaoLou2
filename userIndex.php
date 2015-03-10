<?php
include_once 'share.php';

//page default
$table_account="taolou2_account";

$table_member="taolou2_member_detail";
$table_memberSkill="taolou2_member_skill";
$table_memberExperience="taolou2_member_experience";
$table_memberJobName="taolou2_member_jobname";
$table_memberLocation="taolou2_member_location";

$table_systemSkill="taolou2_system_skill";
$action="";
$obj_tmp1->laout_set=true;
$obj_tmp1->tmp_order ='order By sort Asc';

//分頁顯示設定
if(@$_SESSION['user']['id']==""){
	@$action="noUser";
}else{@$memberID=$_SESSION['user']['id'];}

//action
if(@laout_check($_GET['action'])!=""){
	$action=laout_check($_GET['action']);
}


switch($action){
	case "noUser":

	$obj_tmp1->showad=false;
    $obj_tmp1->content_html='content/user/noUSer.html';

    //設定版面
    $obj_tmp1->top_html="top.html";
	$obj_tmp1->showad_html='showad.html';
    $obj_tmp1->footer_html="footer.html";
    $obj_tmp1->laout('templates.html');
//=======================================
	break;

	case "addskill":

	if(@$memberID!=""){
		//inport skills into user
		//技能列表
		$sql_skill="SELECT ".$table_systemSkill.".name, ".$table_memberSkill.".level 
					FROM ".$table_memberSkill."
					LEFT JOIN ".$table_systemSkill." ON ".$table_systemSkill.".id=".$table_memberSkill.".skillId 
					WHERE ".$table_memberSkill.".memberId='".$memberID."'";
		$obj_tmp1->laout_arr['skill']=array();
		$obj_tmp1->basic_select('laout_arr','skill',$sql_skill);
			//echo $sql_skill;
			//print_r($obj_tmp1->laout_arr['skill']);
	}

	$obj_tmp1->showad=false;
    $obj_tmp1->content_html='content/user/addSkill.html';

    //設定版面
    $obj_tmp1->top_html="top.html";
	$obj_tmp1->showad_html='showad.html';
    $obj_tmp1->footer_html="footer.html";
    $obj_tmp1->laout('templates.html');
//=======================================
	break;
	
	default:
	//有User,要讀取資訊
	if(@$memberID!=""){
		//配對到的工作
		$sql_profile="SELECT ".$table_member.".* 
					  FROM ".$table_member."
					  WHERE ".$table_member.".id='".$memberID."'";
		$obj_tmp1->laout_arr['profile']=array();
		$obj_tmp1->basic_select('laout_arr','profile',$sql_profile);
			//echo $sql_profile;
			//print_r($obj_tmp1->laout_arr['profile']);		
		//===========================

		//education and experience
		$sql_edu="SELECT ".$table_memberExperience.".* 
					FROM ".$table_memberExperience."
					WHERE ".$table_memberExperience.".memberId='".$memberID."'
					AND ".$table_memberExperience.".type='education'";
		$obj_tmp1->laout_arr['edu']=array();
		$obj_tmp1->basic_select('laout_arr','edu',$sql_edu);
			//echo $sql_edu;
			//print_r($obj_tmp1->laout_arr['edu']);		
		//===========================

		//experience
		$sql_exper="SELECT ".$table_memberExperience.".* 
					FROM ".$table_memberExperience."
					WHERE ".$table_memberExperience.".memberId='".$memberID."'
					AND ".$table_memberExperience.".type='work_experience'";
		$obj_tmp1->laout_arr['exper']=array();
		$obj_tmp1->basic_select('laout_arr','exper',$sql_exper);
			//echo $sql_exper;
			//print_r($obj_tmp1->laout_arr['exper']);		
		//===========================

		//Job title
		$sql_jobName="SELECT ".$table_memberJobName.".* 
					  FROM ".$table_memberJobName."
					  WHERE ".$table_memberJobName.".memberId='".$memberID."'";
		$obj_tmp1->laout_arr['jobName']=array();
		$obj_tmp1->basic_select('laout_arr','jobName',$sql_jobName);
			//echo $sql_jobName;
			//print_r($obj_tmp1->laout_arr['jobName']);		
		//===========================

		//location and salary
		$sql_location="SELECT ".$table_memberLocation.".* 
					   FROM ".$table_memberLocation."
					   WHERE ".$table_memberLocation.".memberId='".$memberID."'";
		$obj_tmp1->laout_arr['location']=array();
		$obj_tmp1->basic_select('laout_arr','location',$sql_location);
			//echo $sql_location;
			//print_r($obj_tmp1->laout_arr['location']);		
		//===========================
	}


	$obj_tmp1->showad=false;
    $obj_tmp1->content_html='content/user/index.html';

    //設定版面
    $obj_tmp1->top_html="top.html";
	$obj_tmp1->showad_html='showad.html';
    $obj_tmp1->footer_html="footer.html";
    $obj_tmp1->laout('templates.html');
//=======================================

	break;
}


?>