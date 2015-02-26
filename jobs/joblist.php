<?php
	header("Content-Type:text/html; charset=utf-8");

	require_once('simple_html_dom.php');
	require_once('../share.php');


	//////////////////////////////////job list from indeed

	//search keywords
	$jobName=laout_check($_GET['q']);
	//page
	if(!isset($_GET['start'])){$start=0;}
	else{$start=$_GET['start'];}

	//indeed website
	$url="http://tw.indeed.com/jobs?q=".$jobName."&start=".$start;

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
		if(@$jobDivs->find('h2[class=jobtitle]',0)->plaintext != ""){

			//網址連結
			$jobHref="http://tw.indeed.com".$jobDivs->find('h2[class=jobtitle]',0)->find('a',0)->href;
			//職缺名稱
			$jobtitle=$jobDivs->find('h2[class=jobtitle]',0)->plaintext;
			//職缺公司
			$jobCompany=$jobDivs->find('span[class=company]',0)->plaintext;
			//職缺地點
			$jobLocation=$jobDivs->find('span[class=location]',0)->plaintext;
			//職缺來源
			@$jobSource=$jobDivs->find('span[class=sdn]',0)->plaintext;
			if($jobSource==""){$jobSource="Indeed";}

			//公司Logo
			///////////////////////////goto find logo from wiki
			//$wiki_url="http://zh.wikipedia.org/wiki/".$jobCompany."";
			//$wikiHTML= file_get_html($wiki_url);
			//@$logo=$wikiHTML->find('td[class=logo]',0)->find('img',0)->src;
			//echo $wiki_url;

			$results[$jobdiv]=array();
			$results[$jobdiv]['src']=$jobHref;
			$results[$jobdiv]['title']=$jobtitle;
			$results[$jobdiv]['company']=$jobCompany;
			$results[$jobdiv]['location']=$jobLocation;
			$results[$jobdiv]['source']=$jobSource;
			//$results[$jobdiv]['logo']=$logo;
		}
		$jobdiv++;
	}//print_r($results);

	//所有頁碼
	$item=0;
	$pages=array();
	while(!empty($indeedHTML->find('span[class=pn]',$item)))
	{
		array_push($pages, $indeedHTML->find('span[class=pn]',$item)->plaintext);
		$item++;
	}//print_r($pages);

	//目前頁碼  pagination
	if(!empty($indeedHTML->find('div[class=pagination]',0))){
		$nowPage=@$indeedHTML->find('div[class=pagination]',0)->find('b',0)->plaintext;
	}//echo $nowPage;



	

/*
	$jobDivs=$indeedHTML->find('div[class=result]',2);
	$jobHref="http://tw.indeed.com".$jobDivs->find('h2[class=jobtitle]',0)->find('a',0)->href;
	
	$jobSource=file_get_html($jobHref);
	echo $jobSource;
*/
?>

<html ng-app='TaoLou'>
<header>
	<meta charset="utf-8">
	<title>職缺搜尋 | 頭路網Taolou</title>
	<link rel="stylesheet" type="text/css" href="../css/layout.css">
	<link rel="stylesheet" type="text/css" href="css/jobSearch.css">
	<link href="css/joblist.css" rel="stylesheet">

	<script type="text/javascript" src="../js/angular.js"></script>
	<script type="text/javascript" src="../js/ANcontrol.js"></script>
</header>

<style type="text/css">
    .joblist{background-position: -120px -59px;width: 17px;height: 17px;}
    .selectCompany, .showJobs, .dividePage{left: 0;margin: auto;}
    .selector{border: 1px solid #eceef1;width: 680px;margin: auto;margin-top: 10px;margin-bottom: 10px;}
    .moneyIcon{background-position: -156px -111px;width: 16px;height: 16px;}
    .input{width: 100px;}
</style>
<body ng-controller="TaoLouAngular">
	<a href="../" id="gotoJobMatch"><img src="http://cacposting.com/img/ServicesIcon.png" width="25px">趕緊去<strong>求職配對</strong>！</a>
	<div class='searchBARDiv' style="margin:auto;margin-bottom: 30px;position:relative;width:1024px;">
		<input type='hidden' ng-init="query='<?php echo $jobName; ?>'">
		<h3>職缺搜尋</h3>
		<div class='searchBAR'>
			<input type="text" ng-model="query" ng-change="checkQuery()" ng-enter="search()">
			<a id="searchBut" href="javascript:;" ng-style="{'background-color':searchButBGColor,'color':searchButColor}" ng-click="search()">搜尋</a>
		</div>
	</div>

	<div class='showJobs' style="">
        <?php if(!empty($results)){
        foreach($results as $jobKey => $jobValue) { ?>
        <a class='jobitem' href="<?php echo $jobValue['src']; ?>" target="_new">
            <div class='jobInfo'>
                <figure>
                    <img src="">
                </figure>
                <div class='author'>
                    <b class="name"><?php echo $jobValue['company'] ?></b>
                    <b class="job-creator-type">-</b>
                    <b class="job-title"><?php echo $jobValue['title'] ?></b>
                </div>
                <div class='job-meta'>
                    <span class="meta-item location"><span class='icon locationicon'></span><b><?php echo $jobValue['location']; ?></b></span>
               		<span class="meta-item location" style='float:right;margin-right:0px;width:200px;'>來源：<b><?php echo $jobValue['source']; ?></b></span>
                </div>
            </div>
        </a>
        <?php }}else{echo "搜尋找不到相符的職缺";} ?>
    </div>

    <div class='dividePage' style="margin-bottom: 50px;">
        <div class='pageBar' style='text-align:center;'>
        <?php if(@$start>10) {?>
            <a class='home pageTag' href="joblist.php?q=<?php echo $jobName; ?>&start=0">首頁</a>
        <?php } ?>

        <?php if(!empty(@$pages)) {
	        foreach($pages as $pageKey => $pageValue) { 
	        	if(strstr($pageValue,"上一頁")){ ?> 
	        	<a class='pageTag' href="joblist.php?q=<?php echo $jobName; ?>&start=<?php echo ($nowPage-2)*10; ?>"><?php echo $pageValue; ?></a>
	        <?php }else if(strstr($pageValue,"下一頁")){ ?>
	        	<a class='pageTag' href="joblist.php?q=<?php echo $jobName; ?>&start=<?php echo ($nowPage)*10; ?>"><?php echo $pageValue; ?></a>
	        <?php }else if($pageValue<$nowPage){ ?>
	            <a class='pageTag' href="joblist.php?q=<?php echo $jobName; ?>&start=<?php echo ($pageValue-1)*10; ?>"><?php echo $pageValue; ?></a>
	        <?php }else if(($pageValue-$nowPage)==1){ ?>
	            <a class='pageTag page' href="joblist.php?q=<?php echo $jobName; ?>&start=<?php echo ($nowPage-1)*10; ?>"><?php echo $nowPage; ?></a>
	        	<a class='pageTag' href="joblist.php?q=<?php echo $jobName; ?>&start=<?php echo ($pageValue-1)*10; ?>"><?php echo $pageValue; ?></a>
	        <?php }else if($pageValue>$nowPage){ ?>
	        	<a class='pageTag' href="joblist.php?q=<?php echo $jobName; ?>&start=<?php echo ($pageValue-1)*10; ?>"><?php echo $pageValue; ?></a>
	        <?php }} ?>
        <?php } ?>

        </div>
    </div>
</body>
</html>