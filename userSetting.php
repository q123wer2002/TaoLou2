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
	
	default:
	//有User,要讀取資訊
	if(@$memberID!=""){
		//user profile
		$sql_profile="SELECT ".$table_member.".* 
					  FROM ".$table_member."
					  WHERE ".$table_member.".id='".$memberID."'";
		$obj_tmp1->laout_arr['profile']=array();
		$obj_tmp1->basic_select('laout_arr','profile',$sql_profile);
			//echo $sql_profile;
			//print_r($obj_tmp1->laout_arr['profile']);
		if(!empty($obj_tmp1->laout_arr['profile'])){
			$obj_tmp1->jobNature=array();
			$obj_tmp1->jobNature=explode("|",$obj_tmp1->laout_arr['profile'][0]['jobNature']);
		}//print_r($obj_tmp1->jobNature);
		//===========================
	}


	$obj_tmp1->showad=false;
    $obj_tmp1->content_html='content/user/setting.html';

    //設定版面
    $obj_tmp1->top_html="top.html";
	$obj_tmp1->showad_html='showad.html';
    $obj_tmp1->footer_html="footer.html";
    $obj_tmp1->laout('templates.html');
//=======================================

	break;
}


?>