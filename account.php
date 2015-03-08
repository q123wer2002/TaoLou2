<?php
include_once 'share.php';

//page default
$table_account="taolou2_account";

$table_member="taolou2_member_detail";

if(@!isset($action)){$action="login";}
else{$action=laout_check($_GET['action']);}

switch($action){

	default:

	$obj_tmp1->showad=false;
    $obj_tmp1->content_html='content/account/login.html';

    //設定版面
    $obj_tmp1->top_html="top.html";
	$obj_tmp1->showad_html='showad.html';
    $obj_tmp1->footer_html="footer.html";
    $obj_tmp1->laout('templates.html');
//=======================================

	break;
}

?>