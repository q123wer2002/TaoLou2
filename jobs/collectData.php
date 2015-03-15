<?php 


	header("Content-Type:text/html; charset=utf-8");

	require_once('simple_html_dom.php');
	require_once('../share.php');

	$start=0;
	//$query=['android','app','social','unix','ajax','web','develop'];
	//for($i=0;$i<count($query);$i++){echo $query[$i];}
	//'Python','ruby','angular','jQuery','linux','php','c','design','.NET','SEO','software','mobile','hardware','JSP'

	for($i=0;$i<count($query);$i++)
	{

		echo $query[$i]."<BR>";
		$same=false;

		$start=0;
		
		while($start<1000)
		{
			if($same){continue;}

			$url="http://tw.indeed.com/jobs?q=".$query[$i]."&start=".$start;
			$indeedHTML=file_get_html($url);
			
			if($start!=0)
			{
				$urlCheck="http://tw.indeed.com/jobs?q=".$query[$i]."&start=".($start-10);
				$htmlCheck=file_get_html($urlCheck);
				if($indeedHTM==$htmlCheck){continue;$same=true;}
			}
			
			$jobdiv=0;
			while(!empty($indeedHTML->find('div[class=result]',$jobdiv)))
			{
				$jobDivs=$indeedHTML->find('div[class=result]',$jobdiv);
				//echo $jobDivs;
				if(@$jobDivs->find('h2[class=jobtitle]',0)->plaintext != ""){

					//網址連結
					$jobHref="http://tw.indeed.com".$jobDivs->find('h2[class=jobtitle]',0)->find('a',0)->href;

					//$results[$jobdiv]['logo']=$logo;
					echo $start."----".$jobdiv."<br>";
					//爬資料
					//看內容
					$jobContentRaw=file_get_html($jobHref)->plaintext;
					$jobContent=laout_check($jobContentRaw);
					$sql_insert="INSERT INTO dataset VALUES(NULL,'".$jobContent."');";
					mysql_query($sql_insert);
					//echo $sql_insert;

					echo "OK<BR>";
				}
				$jobdiv++;
			}

			$start=$start+10;
			echo $url."<br>";
		}
	}
	
?>