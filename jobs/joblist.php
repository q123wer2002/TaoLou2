<?php
	header("Content-Type:text/html; charset=utf-8");

	require_once('simple_html_dom.php');
	require_once('../share.php');

	//search keywords
	$jobName=laout_check($_GET['q']);

	//indeed website
	$url="http://tw.indeed.com/jobs?q=".$jobName;

	$indeedHTML= file_get_html($url);

	//savejobs
	$results=array();

	//echo $indeedHTML;

	//職缺名稱：
	//職缺公司：
	//職缺地點：
	//職缺來源：

	$jobdiv=0;
	while(!empty($indeedHTML->find('div[class=result]',$jobdiv)))
	{
		$jobDivs=$indeedHTML->find('div[class=result]',$jobdiv);
		//echo $jobDivs;
		if($jobDivs->find('h2[class=jobtitle]',0)->plaintext != ""){
			//公司Logo
			
			//網址連結
			$jobHref="http://tw.indeed.com".$jobDivs->find('h2[class=jobtitle]',0)->find('a',0)->href;
			//職缺名稱
			$jobtitle=$jobDivs->find('h2[class=jobtitle]',0)->plaintext;
			//職缺公司
			$jobCompany=$jobDivs->find('span[class=company]',0)->plaintext;
			//職缺地點
			$jobLocation=$jobDivs->find('span[class=location]',0)->plaintext;
			//職缺來源
			$jobSource=$jobDivs->find('span[class=sdn]',0)->plaintext;
			if($jobSource==""){$jobSource="Indeed";}

			$results[$jobdiv]=array();
			$results[$jobdiv]['src']=$jobHref;
			$results[$jobdiv]['title']=$jobtitle;
			$results[$jobdiv]['company']=$jobCompany;
			$results[$jobdiv]['location']=$jobLocation;
			$results[$jobdiv]['source']=$jobSource;
		}
		$jobdiv++;
	}
	print_r($results);

/*
	$jobDivs=$indeedHTML->find('div[class=result]',2);
	$jobHref="http://tw.indeed.com".$jobDivs->find('h2[class=jobtitle]',0)->find('a',0)->href;
	
	$jobSource=file_get_html($jobHref);
	echo $jobSource;
*/
?>