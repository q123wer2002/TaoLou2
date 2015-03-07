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

//check skill or not
$obj_tmp1->userskill=true;

$obj_tmp1->laout_set=true;
$obj_tmp1->tmp_order ='order By sort Asc';

//使用者確認
if(@$_SESSION['user']['id']!=""){
	//有使用者
	$memberID=$_SESSION['user']['id'];
}
//==========================

//前置作業
//把技能拿過來
if(@$_POST['method']=="savePreWork"){
	$_SESSION['user']['jobNature']=$_POST['jobNature'];
	$_SESSION['user']['jobstatus']=$_POST['jobstatus'];
	echo "next step to select skills";
	exit;
}
else if(@$_POST['method']=="saveUserSkill"){
	$_SESSION['user']['skill']=array();

	for($i=0;$i<sizeof($_POST['skills']);$i++){
		$_SESSION['user']['skill'][$i]['name']=$_POST['skills'][$i];
		$_SESSION['user']['skill'][$i]['level']="";
	}
	//print_r($_SESSION);
	exit;
}// end post
//========================

//import skill
if(@$_SESSION['user']['skill']){
	//$_SESSION['user']['jobNature'];
	//$_SESSION['user']['jobstatus'];
	$obj_tmp1->laout_arr['skill']=$_SESSION['user']['skill'];
	//print_r($_SESSION['user']);
}


switch($action){

	default:

	if(@$memberID!=""){
		//讀取使用者 所有資訊

		//技能列表
		$sql_skill="SELECT ".$table_systemSkill.".name, ".$table_memberSkill.".level 
					FROM ".$table_memberSkill."
					LEFT JOIN ".$table_systemSkill." ON ".$table_systemSkill.".id=".$table_memberSkill.".skillId 
					WHERE ".$table_memberSkill.".memberId='".$memberID."'";
		$obj_tmp1->laout_arr['skill']=array();
		$obj_tmp1->basic_select('laout_arr','skill',$sql_skill);
			//echo $sql_skill;
			//print_r($obj_tmp1->laout_arr['skill']);

		//skillId change into name
		
		//===========================

		//學經歷
		$sql_experience="SELECT ".$table_memberExperience.".*
						 FROM ".$table_memberExperience."
						 WHERE ".$table_memberExperience.".memberId='".$memberID."'";
		$obj_tmp1->laout_arr['experience']=array();
		$obj_tmp1->basic_select('laout_arr','experience',$sql_experience);
			//echo $sql_experience;
			//print_r($obj_tmp1->laout_arr['experience']);
		//===========================

		//希望職位名稱
		$sql_jobName="SELECT ".$table_memberJobName.".*
					  FROM ".$table_memberJobName."
					  WHERE ".$table_memberJobName.".memberId='".$memberID."'";
		$obj_tmp1->laout_arr['jobName']=array();
		$obj_tmp1->basic_select('laout_arr','jobName',$sql_jobName);
			//echo $sql_jobName;
			//print_r($obj_tmp1->laout_arr['jobName']);
		//===========================

		//薪水與地點
		$sql_location="SELECT ".$table_memberLocation.".*
					   FROM ".$table_memberLocation."
					   WHERE ".$table_memberLocation.".memberId='".$memberID."'";
		$obj_tmp1->laout_arr['location']=array();
		$obj_tmp1->basic_select('laout_arr','location',$sql_location);
			//echo $sql_location;
			//print_r($obj_tmp1->laout_arr['location']);
		//===========================

		//是member, 檢視願望單
		$obj_tmp1->isMember=true;
	}else{$obj_tmp1->isMember=false;}

	//確認是否有技能表
	if(empty($obj_tmp1->laout_arr['skill'])){
		//無技能
		$obj_tmp1->userskill=false;
	}else{
		//有技能
		$obj_tmp1->userskill=true;
	}

	$obj_tmp1->showad=false;
    $obj_tmp1->content_html='content/user/skillNextProcess.html';

    //設定版面
    $obj_tmp1->top_html="top.html";
	$obj_tmp1->showad_html='showad.html';
    $obj_tmp1->footer_html="footer.html";
    $obj_tmp1->laout('templates.html');
//=======================================

	break;
}


?>