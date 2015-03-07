<?php 
include_once '../share.php';
require('../include/sendMail.php');
header("Content-Type:text/html; charset=utf-8");

$table_account="taolou2_account";

$table_member="taolou2_member_detail";
$table_memberSkill="taolou2_member_skill";
$table_memberExperience="taolou2_member_experience";
$table_memberLocation="taolou2_member_location";
$table_memberJobName="taolou2_member_jobname";

$table_systemSkill="taolou2_system_skill";

$obj_tmp1->tmp_where="";
$obj_tmp1->laout_set=true;
$obj_tmp1->tmp_order ='order By sort Asc';

if(!empty(@$_SESSION['user']['id'])){
	@$userId=$_SESSION['user']['id'];
}

if(@$_POST['method']=='checkUserEmail'){
	$account=laout_check($_POST['email']);

	//確認是否有此使用者
	$sql_checkUser="SELECT ".$table_account.".*
					FROM ".$table_account."
					WHERE ".$table_account.".email='".$account."'";
	$obj_tmp1->laout_arr['checkUser']=array();
	$obj_tmp1->basic_select('laout_arr','checkUser',$sql_checkUser);
	//======================


	@$id=$obj_tmp1->laout_arr['checkUser'][0]['id'];

	if($id != NULL){@$message=array('status'=>'NO','mes'=>"此帳號已經註冊");}
	else{@$message=array('status'=>'OK');}

	echo json_encode($message);
	exit;

}else if(@$_POST['method']=="saveUser"){
	//print_r($_POST);
	//data pre-process
	$account=laout_check($_POST['email']);
	$password=laout_check(md5($_POST['password']));
	$salary=laout_check($_POST['salary']);
	
	if($_SESSION['user']['jobNature']=="全職"){$jobNature=1;}
	else if($_SESSION['user']['jobNature']=="兼職"){$jobNature=2;}
	else if($_SESSION['user']['jobNature']=="實習"){$jobNature=3;}

	if($_SESSION['user']['jobstatus']=="正在找工作"){$jobStatus=1;}
	else if($_SESSION['user']['jobstatus']=="觀望中，好工作可考慮"){$jobStatus=2;}
	else if($_SESSION['user']['jobstatus']=="目前不想換工作"){$jobStatus=3;}

	//input member
	$sql_inputUser="INSERT INTO ".$table_member." VALUES(NULL,'Taolou','','".$account."','".$account."','','','".$salary."','".$jobStatus."','".$jobNature."','1',CURRENT_TIMESTAMP)";
	mysql_query($sql_inputUser);

	//使用者 member id
	$sql_checkUser="SELECT ".$table_member.".*
					FROM ".$table_member."
					WHERE ".$table_member.".email='".$account."'";
	$obj_tmp1->laout_arr['checkUser']=array();
	$obj_tmp1->basic_select('laout_arr','checkUser',$sql_checkUser);
	//======================

	$memberID=$obj_tmp1->laout_arr['checkUser'][0]['id'];
	$_SESSION['user']['id']=$memberID;

	//input account
	$sql_inputUserAccount="INSERT INTO ".$table_account." VALUES(NULL,'".$memberID."','".$account."','".$password."',CURRENT_TIMESTAMP)";
	mysql_query($sql_inputUserAccount);

	@$message=array('status'=>'OK');
	echo json_encode($message);
	exit;

}else if(@$_POST['method']=="saveSkill"){

	$memberID=$_SESSION['user']['id'];

	//start skill
	foreach ($_POST['skill'] as $key => $value) {
		$skillName=laout_check($value['name']);
		
		//check skill
		$sql_checkSkill="SELECT ".$table_systemSkill.".*
						FROM ".$table_systemSkill."
						WHERE ".$table_systemSkill.".name='".$value['name']."'";
		$obj_tmp1->laout_arr['checkSkill']=array();
		$obj_tmp1->basic_select('laout_arr','checkSkill',$sql_checkSkill);
		//======================
		if(@$obj_tmp1->laout_arr['checkSkill'][0]['id'] != ""){
			//save skill id, insert into member skill
			$skillID=$obj_tmp1->laout_arr['checkSkill'][0]['id'];
		}else{
			//system no this skill, need to save  it
			$sql_addnewSkill="INSERT INTO ".$table_systemSkill." VALUES (NULL,'".$value['name']."','n',CURRENT_TIMESTAMP)";
			mysql_query($sql_addnewSkill);

			//check skill
			$sql_Skill="SELECT ".$table_systemSkill.".*
						FROM ".$table_systemSkill."
						WHERE ".$table_systemSkill.".name='".$value['name']."'";
			$obj_tmp1->laout_arr['Skill']=array();
			$obj_tmp1->basic_select('laout_arr','Skill',$sql_Skill);
			//======================

			$skillID=$obj_tmp1->laout_arr['Skill'][0]['id'];
		}
		//save skill into member list
		$sql_insputSkill="INSERT INTO ".$table_memberSkill." VALUES(NULL,'".$memberID."','".$skillID."','".$value['degree']."',CURRENT_TIMESTAMP)";
		mysql_query($sql_insputSkill);
	}//end skill ====================================

	@$message=array('status'=>'OK');
	echo json_encode($message);
	exit;
	
}else if(@$_POST['method']=="saveEducation"){

	$memberID=$_SESSION['user']['id'];

	//start education
	if(@!empty($_POST['education'])){
		foreach ($_POST['education'] as $key => $value) {
			$degree=$value['education'];
			$schoolName=laout_check($value['school']);
			$major=laout_check($value['marjor']);

			$sql_insertEdu="INSERT INTO ".$table_memberExperience." VALUES(NULL,'".$memberID."','education','".$degree."','".$value['start']."','".$value['end']."','".$schoolName."','".$major."','',CURRENT_TIMESTAMP)";
			mysql_query($sql_insertEdu);
			//echo $sql_insertEdu;
		}//end education ====================================
	}
	@$message=array('status'=>'OK');
	echo json_encode($message);
	exit;

}else if(@$_POST['method']=="saveExperience"){

	$memberID=$_SESSION['user']['id'];

	//start experience
	if(@!empty($_POST['experience'])){
		foreach ($_POST['experience'] as $key => $value) {
			$jobTitle=laout_check($value['name']);
			$company=laout_check($value['company']);
			$role=laout_check($value['role']);
			$detail=laout_check($value['detail']);

			$sql_insertExp="INSERT INTO ".$table_memberExperience." VALUES(NULL,'".$memberID."','job','".$jobTitle."','".$value['year']."','".$value['peroid']."','".$company."','".$role."','".$detail."',CURRENT_TIMESTAMP)";
			mysql_query($sql_insertExp);
		}//end experience ====================================
	}
	@$message=array('status'=>'OK');
	echo json_encode($message);
	exit;

}else if(@$_POST['method']=="saveJobTitle"){

	$memberID=$_SESSION['user']['id'];

	//start JobTitle
	foreach ($_POST['JobTitle'] as $key => $value) {
		$jobTitle=laout_check($value['name']);
		
		if($jobTitle!=""){
			$sql_insertJobName="INSERT INTO ".$table_memberJobName." VALUES(NULL,'".$memberID."','".$jobTitle."',CURRENT_TIMESTAMP)";
			mysql_query($sql_insertJobName);
		}else{}
	}//end jobTitle ====================================
	@$message=array('status'=>'OK');
	echo json_encode($message);
	exit;

}else if(@$_POST['method']=="saveLocation"){

	$memberID=$_SESSION['user']['id'];

	//start location
	foreach ($_POST['location'] as $key => $value) {
		$sql_insertLoc="INSERT INTO ".$table_memberLocation." VALUES(NULL,'".$memberID."','".$value['des']."',CURRENT_TIMESTAMP)";
		mysql_query($sql_insertLoc);
	}//end location ====================================

	@$message=array('status'=>'OK');
	echo json_encode($message);
	exit;
}

?>