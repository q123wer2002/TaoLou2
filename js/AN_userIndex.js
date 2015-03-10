
TaoLou.controller('Taolou_UserIndex',['$scope','$http',function UserIndex($scope,$http){
	
	//Nature 
	$scope.jobNatures=[
		{"name":"全職","check":false},
		{"name":"兼職","check":false},
		{"name":"實習","check":false},
	];
	$scope.checkJobNature=function(item){
		if(item.check){item.check=false;}
		else{item.check=true;}
	}

	//frequency
	$scope.matchFres=[
		{"name":"每天，最棒的配對頻率","select":false},
		{"name":"每周最少三次","select":false},
		{"name":"每月最少一次","select":false},
	];
	$scope.selectFre=function(item){
		for(var i=0;i<$scope.matchFres.length;i++){
			if($scope.matchFres[i].select){$scope.matchFres[i].select=false;}
		}
		item.select=true;
	}

	$scope.emailCheck=function(){
		var index=$scope.Email.indexOf('@');
		if(index!=-1){
			$scope.emailAlertStyle='';
			$scope.emailAlertIcon=false;
		}
		else{
			$scope.emailAlertStyle='2px solid #EB6A64';
			$scope.emailAlertIcon=true;
		}
	}

	$scope.phoneCheck=function(){

		var myPhone=$scope.phone;
		if(myPhone.match(/^\(?([0-9]{4})\)?[-]?([0-9]{3})[-]?([0-9]{3})$/)){
      		$scope.phoneAlertStyle='';
			$scope.phoneAlertIcon=false; 
        }else{  
        	$scope.phoneAlertStyle='2px solid #EB6A64';
			$scope.phoneAlertIcon=true; 
        }
	}


	//save
	$scope.saveProfile=function(){
		var userProfile={"method":"userProfile","jobNature":$scope.jobNatures,"matchFrequency":$scope.matchFres,"name":$scope.userName,"email":$scope.Email,"phone":$scope.phone};
		$http({
			method:'POST',
			url:'server/userProfile.php',
			data: $.param(userProfile),
			headers: {'Content-type': 'application/x-www-form-urlencoded'},
		}).
		success(function(json){
			//console.log(json);
			$scope.saveOKStyle="#F7D86C";
			$scope.saveFinish=true;
		}).
		error(function(json){
			console.warn(json);
		});
	}




	//add skills====================================
	$scope.surfList=false;
	$scope.degreeNotYet=false;
	$scope.myskills=[];
	$scope.skillList=["3ds Max","3ds Max Design","3G","A+","ABAQUS","Access","ACT","ActionScript","ActiveX","ADA","Adabas","ADC","ADO","Adobe Acrobat","Adobe InDesign","Adobe Photoshop","ADSL","AdvanceLink","After Effects","AIX","AJAX","Alias","Alias studio","Android","Angular","ANSI SQL","Apache SOAP","Apple","AppleTalk","ArcGis","ArcView","ARM","AS/400","ASIC","ASP","ASP.NET","Assembly","Astra LoadTest","Astra QuickTest","Asynch","ATL","Attoltestware","Authorware","AutoCAD","AutoCad 2D","AutoCad 3D","Avaya","AVL","Banyan","Banyan Vines","Bay","Bay Networks","BGP","BizTalk","Bluetooth","BounderChecker","Bridges","Brio","BroadVision","Bugzilla","C","C#","C++","C++.Net","C++test","CA","CADAM","Cadence Allegro","Cakewalk","Cantata","Capacity Planning","CASE","Catia","CC Mail","CDMA","CGI","Checkpoint","Chipware","CICS","Cinema 4D","CIP","Circuit Design","Cisco","Citrix","ClearCase","ClearQuest","CleverPath","Clipper","CMMS","COBOL","CodeTest","Cognos","Cold Fusion","COM/DCOM","Communicator","COOL:Gen","CoolDraw","CORBA","CorelDraw","CPLD","CSS","CVS","Data Architect","Data Guard","Data Marts","Data Modeling","Database Administrator","Database Management","DataStage","DB2","Dbase","DDK","DEC/VAX","Delphi","Developer/ Designer 2000","DevPartner Studio","DHCP","DHTML","DIALux","Dimensions 3D","Director","DirectX","DNS","Domino","DOS","Dreamweaver","Drivers","DriverStudio","DSP","e-commerce","e-Test suite","EcoScope","EDA","EDI","EJB","Electronic Payment","EMC/EMI","Endevor","ERwin","Essbase","Ethernet","ETL","Excel","FDDI","FileNet","Firewall","Fireworks","Firmware","Flash","Flex","Focus","ForeHelp","FORTRAN","FoWindows Xpro","Fox Pro","FoxBase","FoxBASE+","FoxPro 2","FPGA","FPT","Frame Relay","FrameMaker","FreeBSD","Freehand","FrontPage","FTP","Games","GammaRay","GEAC","Ghost","GIS","Github","GMS","GoLive","GPRS","Graphics","GSM","HomeSite","HP Open View","HP-UX","HTML","HTTP","HttpUnit","Hubs","Hubs/ Routers","Hyperion (Brio)","IconWorkshop","iDeaS","IDMS","IDS","IIS","Illustrator","Image/Imaging","ImageReady","IMS","Infobasic","Informatica","Informix","Ingres","Interbase","Internet Explorer","Intrusion","Inventor","iOS","IPS","iptables","ISAM","ISAPI","ISDN","ISIS","ISPF","J2EE","J2ME","J2SE","Jasmine","Java","JavaScript","JCL","JCreator Pro","JDBC","JMS","jQuery","JSF","JSP","Jtest","Juniper","Junit","Kylix","LabVIEW","LAN","LanManager","LanServer","Lantastic","Lap Link","LCOS","LDAP","Lease Lines","LightsCape","Lightwave","Link Sleuth","Linux","Load Balancing","LoadRunner","LogiScope","Lotus 123","Lotus Notes","LotusScript","Mac OS","Mac/Macintosh","Macabe","Macromedia Director","Mainframe","Mantis","MapBasic","MapGIS","MapInfo","MapPoint","Matlab","MAYA","MCU","MFC","MicroFocus","Microsoft Exchange","Microsoft Photo Editor","Microsoft SharePoint","Microsoft SmartPhone","MicroStation","MicroStrategy","MIDI","MMS","Mobile Network","MOM","Motion Builder","MPLS","MQSeries","MS SQL","Multimedia Builder","Multinet","MVS","MVX","MySQL","NatMaster","NDS/Novell Directory Services","Netbios","NetMaster","NetObjects Fusion","Netscape Communication","NetWare","Network Cards","Novell","Objective-C","ODBC","OLAP","OneNote","OOAD","OOP","OpenSTA","Optical Fibre","Optimizeit Suite","Oracle","Oracle Financials","Oracle Forms","OrCAD","OS X","OS/2","OS/390","OS/400","OSPF","Outlook","OWB","P-CAD","PABX","PADS","Pagemaker","Paint Shop Pro","Painter","PAL","Palm OS","ParaDox","Pascal","Pathworks","PBX","PC—lint","PECL","PeopleCode","PeopleSoft","Perl","PhotoImpact","Photopia","PHP","PHS","PL/1","PL/SQL","PLC","PLD","PostgreSQL","PowerBuilder","PowerLogic","PowerPCB","PowerPoint","PPPoE","Premiere","Pro*C","Pro/E","Progress","Project","Protel","PSTN","Publisher","PureCoverage","PVCS","PVCS Tracker","Python","QADirector","QALoad","QARun","QATester","QTP","Quality Control","Quark Express","QuarkXPress","QuickTest Professional","RACF","Rational ClearCase","Rational ClearQuest","Rational Performance","Rational PureCoverage","Rational Purify","Rational Quantify","Rational Robot","Rational Rose","Rational SQA load","Rational TeamTest","Rational Test RealTime","Rational TestFactory","Rational TestManager","RDBMS","Reflection","Relay Gold","Remedy","REST","Revit","Rexx","RF","Rhino","RIP","RMI","RoboHelp","Robot","Routers","RPG","RTL","RTSP","Ruby","Sagent","SAN","SAN/NAS","SAPDB","SAS","SCO UNIX","SDLC","Security","Servlets","SGML","Shade","Shell","Shockwave","Showcase","Shtml","Siebel","SilkPerformer","SilkPlan Pro","SilkRadar","SilkTest","SilkVision","Silverlight","Silverstream","Simula","SIR","Sketch up","Smalltalk","SMIL","SMS","SNA","Sniffer","SNMP","SOAP","Socket","Softimage","Solaris","Solid Edge","SolidWorks","Sonet","Source Safe/Visual Source Safe","SPICE","Spring","SPSS","SQR","Squid","SS7","ssh","StarTeam","STL","Strata","Streamline","Struts","SUN OS","Sun Solaris","SuperGIS","SuperPad","Sybase","Symbian S60","Synopsys","SYSBASE","Systems Administration","Systems Analysis","Systems Analyst","Tandem","Tape Operator","TCL","TCP/IP","TcpDump","Telecom","Teradata","Test Scripts","TestBed","TestBytes","TestDirector","TestManager","TestPartner","TestQuestPro","TestTrack Pro","TIBCO","Tivoli","TK","Toad","Tomcat","TrackRecord","TrueCoverage","TrueTime","TSO","TSO/ISPF","UDP","UML","Unigraphics","Unity3D","UNIX","USB OTG","USB技術","VBA","VBScript","Vegas","Verilog","VERITAS","Version Control","VHDL","Visio","Visual Basic","Visual Basic .net","Visual C#","Visual C++","Visual Foxpro","Visual J#","Visual J++","Visual SourceSafe","Visual Studio","Visual Studio .net","VisualTest","Vizact 2000","VLAN","VM","VMS","Vmware","VoIP","VPN","VRML","VSAM","VxWorks","WAN","WAP","WAS","Web Master/Developer","WebFT","WebLoad","WebLogic","WebMethods","WebSphere","Wimax","WIN CE","Win32","Windows 2000","Windows 2003","Windows 7","Windows 8","Windows 95","Windows 98","Windows Mobile","Windows NT","Windows Server 2008","Windows Server 2012","Windows Vista","Windows XP","WinForm","WinRunner","WLAN","WML","Word","Wordperfect","WPS","X.25","X400","XDE Tester","XDSL","XHTML","XML","XML Web services","Xrunner","XSL","XSLT","XSP","Zbrush","北大方正",];
	
	$scope.SKILL_INIT=function(){
		var index=$scope.skillList.indexOf($scope.SKILL_NAME);
    	this.skillList.splice(index,1);
		$scope.myskills.push({"name":$scope.SKILL_NAME,"degree":$scope.SKILL_DEGREE});
	}

	$scope.skillFun=function(item){
		$scope.keyword=item;
		this.myskills.push({"name":$scope.keyword,"degree":0});
		$scope.degreeNotYet=true;
		//delete skill
		var index=$scope.skillList.indexOf(item);
    	$scope.skillList.splice(index,1);
    	//-----------------
		$scope.keyword='';
		$scope.surfList=false;
	}
	$scope.insertMySkill=function(){
		if($scope.keyword!=""){
			var index = $scope.myskills.indexOf($scope.keyword);
			if(index!='-1'){$scope.skillErrorMess='你已經有此技能';}
			else{
				$scope.myskills.push({"name":$scope.keyword,"degree":0});
				$scope.degreeNotYet=true;
			}
			$scope.keyword='';
		}
	}
	$scope.removeSkill=function(item){
		var index = $scope.myskills.indexOf(item);
		if(index!='-1'){this.myskills.splice(index,1);}
	}
	$scope.checkDegree=function(){
		for(var i=0;i<$scope.myskills.length;i++){
			if($scope.myskills[i].degree==0){$scope.degreeNotYet=true;}
			else{$scope.degreeNotYet=false;}
		}
	}
	//save
	$scope.saveSkill=function(){
		$scope.saveOKStyle="#F7D86C";
		var UserSkill={"method":"saveSKill","skill":$scope.myskills};
		$http({
			method:'POST',
			url:'server/userProfile.php',
			data: $.param(UserSkill),
			headers: {'Content-type': 'application/x-www-form-urlencoded'},
		}).
		success(function(json){
			//console.log(json);
			location.href="index.php";
			
		}).
		error(function(json){
			console.warn(json);
		});
	}

}]);