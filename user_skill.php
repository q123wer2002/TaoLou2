<?php
include_once 'share.php';

//page default
$obj_tmp1->jobtable="taolou_job";
$obj_tmp1->companyTable="taolou_company";
$obj_tmp1->companySkill='taolou_company_skill';

$obj_tmp1->laout_set=true;
$obj_tmp1->tmp_order ='order By sort Asc';

//分頁顯示設定

//=============

switch($action){
	default:


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