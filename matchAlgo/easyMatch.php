<?php
header("Content-Type:text/html; charset=utf-8");
include_once '../share.php';
include_once('../jobs/simple_html_dom.php');
	
	//user profile
	$sql_member="SELECT taolou2_member_detail.id, taolou2_member_detail.email, taolou2_member_detail.salary FROM taolou2_member_detail WHERE taolou2_member_detail.id='13' Limit 0,1";
	$obj_tmp1->laout_arr['member']=array();
	$obj_tmp1->basic_select('laout_arr','member',$sql_member);
		//echo $sql_member;
		print_r($obj_tmp1->laout_arr['member']);
		echo "<br>";
	//foreach user do

		//user job names
		$sql_jobName="SELECT taolou2_member_jobname.jobName FROM taolou2_member_jobname WHERE taolou2_member_jobname.memberId='".$obj_tmp1->laout_arr['member'][0]['id']."'";
		$obj_tmp1->laout_arr['jobName']=array();
		$obj_tmp1->basic_select('laout_arr','jobName',$sql_jobName);
			//echo $sql_jobName;
			print_r($obj_tmp1->laout_arr['jobName']);
			echo "<br>";
		
		$replace = array( 
			" " => '%20', 
		); 
			 
		function strReplaceAssoc(array $replace, $subject) { 
		   return str_replace(array_keys($replace), array_values($replace), $subject);    
		} 

		//skills
		$sql_skill="SELECT taolou2_system_skill.name FROM taolou2_member_skill LEFT JOIN taolou2_system_skill ON taolou2_system_skill.id=taolou2_member_skill.skillId WHERE taolou2_member_skill.memberId='".$obj_tmp1->laout_arr['member'][0]['id']."'";
		$obj_tmp1->laout_arr['skill']=array();
		$obj_tmp1->basic_select('laout_arr','skill',$sql_skill);
			//echo $sql_skill;
			print_r($obj_tmp1->laout_arr['skill']);
			echo "<br>";
			
		//location
		$sql_location="SELECT taolou2_member_location.country FROM taolou2_member_location WHERE taolou2_member_location.memberId='".$obj_tmp1->laout_arr['member'][0]['id']."'";
		$obj_tmp1->laout_arr['location']=array();
		$obj_tmp1->basic_select('laout_arr','location',$sql_location);
			//echo $sql_location;
			print_r($obj_tmp1->laout_arr['location']);
			echo "<br>";

		//experience
		$sql_experience="SELECT taolou2_member_experience.title,taolou2_member_experience.name,taolou2_member_experience.major FROM taolou2_member_experience WHERE taolou2_member_experience.memberId='".$obj_tmp1->laout_arr['member'][0]['id']."'";
		$obj_tmp1->laout_arr['experience']=array();
		$obj_tmp1->basic_select('laout_arr','experience',$sql_experience);
			//echo $sql_experience;
			print_r($obj_tmp1->laout_arr['experience']);
			echo "<br>";

//============================================ indeed
		//job Array
		$jobArray['indeed']=array();
		//foreach job name and location
		$start=0;
		$jobName=strReplaceAssoc($replace,$obj_tmp1->laout_arr['jobName'][0]['jobName']);
		$location=$obj_tmp1->laout_arr['location'][2]['country'];
		
		//indeed
		$url="http://tw.indeed.com/jobs?q=".$jobName."&start=".$start."&l=".$location."&limit=100";
		echo $url."<br>";
		$indeedHTML= file_get_html($url);
		$jobdiv=0;
		while(!empty($indeedHTML->find('div[class=result]',$jobdiv)))
		{
			$jobDivs=$indeedHTML->find('div[class=result]',$jobdiv);

			//search every jobs and get contents

			if(@$jobDivs->find('h2[class=jobtitle]',0)->plaintext != ""){
				$jobName=$jobDivs->find('h2[class=jobtitle]',0)->find('a',0)->plaintext;
				$jobHref="http://tw.indeed.com".$jobDivs->find('h2[class=jobtitle]',0)->find('a',0)->href;
				@$jobContentRaw=file_get_html($jobHref)->plaintext;
				$jobContent=laout_check($jobContentRaw);
				//echo $jobContent."<hr>";
				//echo "<a href=".$jobHref." target='_new'>".$jobName."</a><br>";
				//calculate any skill, count skill
				$skillCount=0;
				foreach($obj_tmp1->laout_arr['skill'] as $skillKey => $skillValue){
					if((sizeof(explode($skillValue['name'], $jobContent))-1)!=0){
					$matchSkill=sizeof(explode($skillValue['name'], $jobContent))-1;
					$skillCount+=$matchSkill;
					//echo " have ".$matchSkill." items of ".$skillValue['name'];
					//echo "<br>";
					//select top 10 jobs and source, in order to recommend  to user
					//end select
				}}
				$job['skillCount']=$skillCount;
				$job['url']=$jobHref;
				array_push($jobArray['indeed'], $job);
				//echo "total match ".$skillCount;
				//echo "<hr>";
				//end calculate
			//end search
			}
			$jobdiv++;
		//end foreach
		}
		arsort($jobArray['indeed']);
		//print_r($jobArray['indeed']);
		$i=0;
		foreach ($jobArray['indeed'] as $key => $value) {
			echo "<a href='".$value['url']."''>共符合".$value['skillCount']."項技能</a><br>";
			$i++;
			if($i>10){break;}
		}
	//end foreach============================
	
//============================================== end indeed

//============================================== career jet
	//career jet
		/*
	$jobNature="f";
	//($obj_tmp1->laout_arr['member'][0]['jobNature']==1)?$jobNature="f":$jobNature="p";
	$jet_url="http://www.careerjet.tw/wsearch/gongzuo?s=".$jobName.".&l=".$location.".&cp=".$jobNature;
	$jetHTML= file_get_html($jet_url);
	$result=explode("&nbsp;", $jetHTML->find('span[class=h1_title]',0));
	echo $jet_url."<br>";
	//echo $jetHTML->find('div[class=job]',0);
	if($result[0] == 0){
		$jobPoint=0;
		while(!empty($jetHTML->find('div[class=job]',$jobPoint))){
			$job=$jetHTML->find('div[class=job]',$jobPoint);
			$jobName=$job->find('a[class=title_compact]',0)->plaintext;
			$jobURL="http://www.careerjet.tw".$job->find('a[class=title_compact]',0)->href;
			echo "<a href='".$jobURL."'>".$jobName."</a>";
			echo "<br>";

			@$jobContent=file_get_html($jobURL)->plaintext;
			$jobContent=laout_check($jobContent);
			$skillCount=0;
			foreach($obj_tmp1->laout_arr['skill'] as $skillKey => $skillValue){
				if((sizeof(explode($skillValue['name'], $jobContent))-1)!=0){
				$matchSkill=sizeof(explode($skillValue['name'], $jobContent))-1;
				$skillCount+=$matchSkill;
				echo " have ".$matchSkill." items of ".$skillValue['name'];
				echo "<br>";
				//select top 10 jobs and source, in order to recommend  to user
				//end select
			}}
			echo "total match ".$skillCount;
			echo "<hr>";
			$jobPoint++;
		}
	}else{echo "找不到職缺";}*/
//============================================== end career jet
?>