<?php
include_once 'share.php';

//page default
$table_systemSkill="taolou2_system_skill";

$obj_tmp1->laout_set=true;
$obj_tmp1->tmp_order ='order By sort Asc';

//分頁顯示設定
if(@$_SESSION['user']['id']!=""){
	header('Location: userIndex.php');
	exit;
}
//=============

switch($action){
	default:

	//load database skill
	$sql_insertSKill="SELECT ".$table_systemSkill.".*
					  FROM ".$table_systemSkill."
					  WHERE ".$table_systemSkill.".status='y'";
	$obj_tmp1->laout_arr['insertSKill']=array();
	$obj_tmp1->basic_select('laout_arr','insertSKill',$sql_insertSKill);
		//echo $sql_insertSKill;
		//print_r($obj_tmp1->laout_arr['insertSKill']);


	$obj_tmp1->showad=false;
    $obj_tmp1->content_html='content/index.html';

    //設定版面
    $obj_tmp1->top_html="top.html";
	$obj_tmp1->showad_html='showad.html';
    $obj_tmp1->footer_html="footer.html";
    $obj_tmp1->laout('templates.html');
//=======================================

	break;
}


?>