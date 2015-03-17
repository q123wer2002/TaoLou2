<?php
include_once '../share.php';
include("../include/function/phpmailer/class.phpmailer.php");
mb_internal_encoding("big5");
header("Content-Type:text/html; charset=utf-8");

$table_jobMatch="taolou2_jobmatch";
$table_company="taolou2_company";
$table_member="taolou2_member_detail";


//need mail alert user
	//check no mail alert yet
	$sql_mailAlet="SELECT ".$table_jobMatch.".id,".$table_jobMatch.".jobName, ".$table_jobMatch.".jobURL, ".$table_member.".name, ".$table_member.".email, ".$table_company.".name as ComName, ".$table_company.".website
				   FROM ".$table_jobMatch."
				   LEFT JOIN ".$table_member." ON ".$table_member.".id=".$table_jobMatch.".memberId
				   LEFT JOIN ".$table_company." ON ".$table_company.".id=".$table_jobMatch.".companyId
				   WHERE ".$table_jobMatch.".emailAlert='n'";
	$obj_tmp1->laout_arr['mailAlet']=array();
	$obj_tmp1->basic_select('laout_arr','mailAlet',$sql_mailAlet);
		//echo $sql_mailAlet;
		print_r($obj_tmp1->laout_arr['mailAlet']);
		echo "<br>";

	foreach ($obj_tmp1->laout_arr['mailAlet'] as $key => $value) {
		
		$matchId=$value['id'];
		$account=$value['email'];
		$name=$value['name'];
		$companyName=$value['ComName'];
		$companyURL=$value['website'];
		$jobName=$value['jobName'];
		$jobURL=$value['jobURL'];

		
		

		$mail = new PHPMailer();
		$mail->IsSMTP();
		$mail->SMTPAuth = true; // turn on SMTP authentication
		//這幾行是必須的

		$mail->Username = "service.taolou@gmail.com";
		$mail->Password = "!@QWas1234";
		//這邊是你的gmail帳號和密碼

		$mail->FromName = "TaoLou";
		// 寄件者名稱(你自己要顯示的名稱)
		$webmaster_email = "service.taolou@gmail.com"; 
		//回覆信件至此信箱

		$mail->From = $webmaster_email;
		$mail->AddReplyTo($webmaster_email,"Squall.f");
		//這不用改

		$mail->WordWrap = 50;
		//每50行斷一次行

		//$mail->AddAttachment("/XXX.rar");
		// 附加檔案可以用這種語法(記得把上一行的//去掉)

		$mail->IsHTML(true); // send as HTML

		//寄信等待認證
			//認證密碼

		$email=$account;
		// 收件者信箱
		// 收件者的名稱or暱稱
		$mail->AddAddress($email,$name);
		$mail->Subject = "=?UTF-8?B?".base64_encode("".$name.", 推薦給您在".$companyName."的".$jobName)."?=";//信件標題，解決亂碼問題
		// 信件標題
		$mail->Body = 
		"
		<div style='width: 700px;margin: auto;min-height: 350px;text-align: center;border-bottom: 2px solid #54A7F7;background-color: #E9EAED;'>
			<div style='width: 100%;height: 70px;background-color: #54A7F7;text-align: left;'>
				<a href='http://taoloutw.tk'><img src='http://taoloutw.tk/images/logo.png' style='width: 200px;margin-left: 150px;'></a>
			</div>
			<div class='title'>
				<h1 style='font-size:25px'>".$jobName." <span style='text-decoration: underline;'>".$companyName."</span></h1>
			</div>
			恭喜您，TaoLou找到您的配對職缺了，趕緊查看應徵工作吧！<br><br><br>
			<a href='".$companyURL."' style='padding: 10px 7px;text-decoration: none;color: #ffffff;background-color: #54A7F7;border-radius: 3px;'>公司網站</a>
			<a href='".$jobURL."' style='padding: 10px 7px;text-decoration: none;color: #ffffff;background-color: #54A7F7;border-radius: 3px;'>職缺網址</a><br><br><br>
			<a href='http://taoloutw.tk' style='float:right;margin-right:50px;padding: 10px 7px;text-decoration: none;color: #ffffff;background-color: #54A7F7;border-radius: 3px;'>在TaoLou頭路網觀看</a>
		</div>
		<div style='width: 700px;margin: auto;text-align: center;'>
			<a href='http://taoloutw.tk/userSetting.php' style='margin: 15px 10px;color: black;'>更改您的帳戶</a>
			<a href='https://docs.google.com/forms/d/1f5INtvSifo9q8tHeYU0uUeqS-Y1W0A4jVXcmaztLPIw/viewform' style='margin: 15px 10px;color: black;'>意見反饋</a>
			<a href='http://taoloutw.tk/jobs/' style='margin: 15px 10px;color: black;'>頭路網的職缺搜尋</a>
			<br><br>
			<span style='font-size:9px;color:red;'>If you can't correctly read the contents of the letter, please try to change mail into ' UTF-8 encoding '</span>
		</div>
		";

			if(!$mail->Send()){echo "寄信發生錯誤：" . $mail->ErrorInfo;//如果有錯誤會印出原因
			}else{
				$sql_update="UPDATE ".$table_jobMatch." SET emailAlert='y' WHERE ".$table_jobMatch.".id='".$matchId."'";
				mysql_query($sql_update);
			}
	}
?>