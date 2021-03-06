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

$table_jobMatch="taolou2_jobmatch";
$table_company="taolou2_company";
$action="";
$obj_tmp1->laout_set=true;
$obj_tmp1->tmp_order ='order By sort Asc';

//分頁顯示設定
if(@$_SESSION['user']['id']==""){
	header('Location: index.php');
	exit;
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
		//load database skill
		$sql_insertSKill="SELECT ".$table_systemSkill.".*
						  FROM ".$table_systemSkill."
						  WHERE ".$table_systemSkill.".status='y'";
		$obj_tmp1->laout_arr['insertSKill']=array();
		$obj_tmp1->basic_select('laout_arr','insertSKill',$sql_insertSKill);
			//echo $sql_insertSKill;
			//print_r($obj_tmp1->laout_arr['insertSKill']);
		//========================================================

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
		//========================================================
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
		$sql_jobMatch="SELECT ".$table_jobMatch.".*, ".$table_company.".*
					   FROM ".$table_jobMatch."
					   LEFT JOIN ".$table_company." ON ".$table_company.".id=".$table_jobMatch.".companyId
					   WHERE ".$table_jobMatch.".memberId='".$memberID."'
					   ORDER BY ".$table_jobMatch.".createDate DESC";
		$obj_tmp1->laout_arr['jobMatch']=array();
		$obj_tmp1->basic_select('laout_arr','jobMatch',$sql_jobMatch);
			//echo $sql_jobMatch;
			//print_r($obj_tmp1->laout_arr['jobMatch']);		
		//===========================

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
    $obj_tmp1->content_html='content/user/newTest.html';

    //設定版面
    $obj_tmp1->top_html="top.html";
	$obj_tmp1->showad_html='showad.html';
    $obj_tmp1->footer_html="footer.html";
    $obj_tmp1->laout('templates.html');
//=======================================

	break;
}


?>