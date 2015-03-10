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

if(@$_POST['method']=='userProfile'){
	//pre-process data
	$name=laout_check($_POST['name']);
	$email=laout_check($_POST['email']);
	$phone=laout_check($_POST['phone']);
	//check jobNature and match frequency
	$jobNature="";
	for($i=0;$i<sizeof($_POST['jobNature']);$i++){
		if($_POST['jobNature'][$i]['check']=="true"){$jobNature=$jobNature.($i+1)."|";}
	}
	$jobNature=substr($jobNature,0,-1);

	$matchFrequency="";
	for($i=0;$i<sizeof($_POST['matchFrequency']);$i++){
		if($_POST['matchFrequency'][$i]['select']=="true"){$matchFrequency=$i+1;}
	}

	$sql_updateProfile="UPDATE ".$table_member." SET name='".$name."', email='".$email."', phone='".$phone."', jobNature='".$jobNature."', matchFrequency='".$matchFrequency."' WHERE ".$table_member.".id='".$userId."'";
	mysql_query($sql_updateProfile);

	$_SESSION['user']['name']=$name;

	echo "OK";
	exit;
}else if(@$_POST['method']=="saveSKill"){
	//print_r($_POST);

	foreach ($_POST['skill'] as $key => $value) {
		$skillName=laout_check($value['name']);
		
		//check skill id
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
		//==================================
		//check user have this skill yet ?
		//check user
		$sql_skill="SELECT ".$table_memberSkill.".* 
					FROM ".$table_memberSkill."
					WHERE ".$table_memberSkill.".memberId='".$userId."'
					AND ".$table_memberSkill.".skillId='".$skillID."'";
		$obj_tmp1->laout_arr['userSkill']=array();
		$obj_tmp1->basic_select('laout_arr','userSkill',$sql_skill);
			//echo $sql_skill;
			//print_r($obj_tmp1->laout_arr['userSkill']);
		//======================
		if(empty($obj_tmp1->laout_arr['userSkill'])){
			//save skill into member list
			$sql_insputSkill="INSERT INTO ".$table_memberSkill." VALUES(NULL,'".$userId."','".$skillID."','".$value['degree']."',CURRENT_TIMESTAMP)";
			mysql_query($sql_insputSkill);
		}else{
			$sql_update="UPDATE ".$table_memberSkill." SET level='".$value['degree']."' WHERE ".$table_memberSkill.".memberId='".$userId."' AND ".$table_memberSkill.".skillId='".$skillID."'";
			mysql_query($sql_update);
		}
	}//end skill ====================================

	echo "OK";
	exit;
}

?>