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

	if(@$userId!=""){
		//update salary
		$sql_updateSalary="UPDATE ".$table_member." SET salary='".$_POST['salary']."' WHERE ".$table_member.".id='".$userId."'";
		mysql_query($sql_updateSalary);
	}
	else{
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
		$_SESSION['user']['name']=$obj_tmp1->laout_arr['checkUser'][0]['name'];

		//input account
		$sql_inputUserAccount="INSERT INTO ".$table_account." VALUES(NULL,'".$memberID."','".$account."','".$password."',CURRENT_TIMESTAMP)";
		mysql_query($sql_inputUserAccount);
	}
		@$message=array('status'=>'OK');
		echo json_encode($message);
		exit;


}else if(@$_POST['method']=="saveSkill"){

	$memberID=$_SESSION['user']['id'];

	//check user
	$sql_skill="SELECT ".$table_systemSkill.".name, ".$table_memberSkill.".level 
				FROM ".$table_memberSkill."
				LEFT JOIN ".$table_systemSkill." ON ".$table_systemSkill.".id=".$table_memberSkill.".skillId 
				WHERE ".$table_memberSkill.".memberId='".$memberID."'";
	$obj_tmp1->laout_arr['userSkill']=array();
	$obj_tmp1->basic_select('laout_arr','userSkill',$sql_skill);
		//echo $sql_skill;
		//print_r($obj_tmp1->laout_arr['userSkill']);
	//======================

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
		if(empty($obj_tmp1->laout_arr['userSkill'])){
			//save skill into member list
			$sql_insputSkill="INSERT INTO ".$table_memberSkill." VALUES(NULL,'".$memberID."','".$skillID."','".$value['degree']."',CURRENT_TIMESTAMP)";
			mysql_query($sql_insputSkill);
		}else{
			$sql_update="UPDATE ".$table_memberSkill." SET level='".$value['degree']."' WHERE ".$table_memberSkill.".memberId='".$memberID."' AND ".$table_memberSkill.".skillId='".$skillID."'";
			mysql_query($sql_update);
		}
	}//end skill ====================================

	@$message=array('status'=>'OK');
	echo json_encode($message);
	exit;
	
}else if(@$_POST['method']=="saveEducation"){

	$memberID=$_SESSION['user']['id'];
	$sql_delete="DELETE FROM ".$table_memberExperience." WHERE ".$table_memberExperience.".type='education' AND ".$table_memberExperience.".memberId='".$memberID."'";
	mysql_query($sql_delete);

	//start education
	if(@!empty($_POST['education'])){
		foreach ($_POST['education'] as $key => $value) {
			$degree=laout_check($value['education']);
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
	$sql_delete="DELETE FROM ".$table_memberExperience." WHERE ".$table_memberExperience.".type='work_experience' AND ".$table_memberExperience.".memberId='".$memberID."'";
	mysql_query($sql_delete);

	//start experience
	if(@!empty($_POST['experience'])){
		foreach ($_POST['experience'] as $key => $value) {
			$jobTitle=laout_check($value['name']);
			$company=laout_check($value['company']);
			$role=laout_check($value['role']);
			$detail=laout_check($value['detail']);

			$sql_insertExp="INSERT INTO ".$table_memberExperience." VALUES(NULL,'".$memberID."','work_experience','".$jobTitle."','".$value['year']."','".$value['peroid']."','".$company."','".$role."','".$detail."',CURRENT_TIMESTAMP)";
			mysql_query($sql_insertExp);
		}//end experience ====================================
	}
	@$message=array('status'=>'OK');
	echo json_encode($message);
	exit;

}else if(@$_POST['method']=="saveJobTitle"){

	$memberID=$_SESSION['user']['id'];
	$sql_delete="DELETE FROM ".$table_memberJobName." WHERE ".$table_memberJobName.".memberId='".$memberID."'";
	mysql_query($sql_delete);

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
	$sql_delete="DELETE FROM ".$table_memberLocation." WHERE ".$table_memberLocation.".memberId='".$memberID."'";
	mysql_query($sql_delete);

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