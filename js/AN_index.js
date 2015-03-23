// start

TaoLou.controller('TaoLou_JobWish',['$scope','$http',function JobWish($scope,$http){
	//1. 
	//init
	$scope.jobstatus='正在找工作';
	$scope.jobNature='全職';

	$scope.Statusjobstatus=false;
	$scope.surfList=false;
	$scope.Statusjobnature=false;

	$scope.jobStatuses=[
   		{'name':'正在找工作','width':'144px'},
   		{'name':'觀望中，好工作可考慮','width':'244px'},
   		{'name':'目前不想換工作','width':'184px'},
	];
	$scope.jobNatures=[
		{'name':'全職'},
		{'name':'兼職'},
		{'name':'實習'},
	];

	//close DropList function
	$scope.jobStatusClose=function(){
		if($scope.Statusjobstatus && !$scope.surfList){$scope.Statusjobstatus=false;}
	}
	$scope.jobNatureClose=function(){
		if($scope.Statusjobnature && !$scope.surfList){$scope.Statusjobnature=false;}
	}
	$scope.jobStatusShowFun=function(){
		if(!$scope.surfList && $scope.Statusjobstatus){$scope.Statusjobstatus=false;}
		else{$scope.Statusjobstatus=true;}
	}
	$scope.jobNatureShowFun=function(){
		if(!$scope.surfList && $scope.Statusjobnature){$scope.Statusjobnature=false;}
		else{$scope.Statusjobnature=true;}
	}

	//write function
	$scope.jobStatusFun=function(item){
		$scope.jobstatus=item.name;
		$scope.Statusjobstatus=false;
		$scope.jobstatusWidth=item.width;
	}
	$scope.jobNatureFun=function(item){
		$scope.jobNature=item.name;
		$scope.Statusjobnature=false;
	}

	// 2. click continue into next step
	//init
	$scope.selectSkill=false;
	
	$scope.keyword='';
	$scope.myskills=[];
	$scope.skillList=["3ds Max","3ds Max Design","3G","A+","ABAQUS","Access","ACT","ActionScript","ActiveX","ADA","Adabas","ADC","ADO","Adobe Acrobat","Adobe InDesign","Adobe Photoshop","ADSL","AdvanceLink","After Effects","AIX","AJAX","Alias","Alias studio","Android","Angular","ANSI SQL","Apache SOAP","Apple","AppleTalk","ArcGis","ArcView","ARM","AS/400","ASIC","ASP","ASP.NET","Assembly","Astra LoadTest","Astra QuickTest","Asynch","ATL","Attoltestware","Authorware","AutoCAD","AutoCad 2D","AutoCad 3D","Avaya","AVL","Banyan","Banyan Vines","Bay","Bay Networks","BGP","BizTalk","Bluetooth","BounderChecker","Bridges","Brio","BroadVision","Bugzilla","C","C#","C++","C++.Net","C++test","CA","CADAM","Cadence Allegro","Cakewalk","Cantata","Capacity Planning","CASE","Catia","CC Mail","CDMA","CGI","Checkpoint","Chipware","CICS","Cinema 4D","CIP","Circuit Design","Cisco","Citrix","ClearCase","ClearQuest","CleverPath","Clipper","CMMS","COBOL","CodeTest","Cognos","Cold Fusion","COM/DCOM","Communicator","COOL:Gen","CoolDraw","CORBA","CorelDraw","CPLD","CSS","CVS","Data Architect","Data Guard","Data Marts","Data Modeling","Database Administrator","Database Management","DataStage","DB2","Dbase","DDK","DEC/VAX","Delphi","Developer/ Designer 2000","DevPartner Studio","DHCP","DHTML","DIALux","Dimensions 3D","Director","DirectX","DNS","Domino","DOS","Dreamweaver","Drivers","DriverStudio","DSP","e-commerce","e-Test suite","EcoScope","EDA","EDI","EJB","Electronic Payment","EMC/EMI","Endevor","ERwin","Essbase","Ethernet","ETL","Excel","FDDI","FileNet","Firewall","Fireworks","Firmware","Flash","Flex","Focus","ForeHelp","FORTRAN","FoWindows Xpro","Fox Pro","FoxBase","FoxBASE+","FoxPro 2","FPGA","FPT","Frame Relay","FrameMaker","FreeBSD","Freehand","FrontPage","FTP","Games","GammaRay","GEAC","Ghost","GIS","Github","GMS","GoLive","GPRS","Graphics","GSM","HomeSite","HP Open View","HP-UX","HTML","HTTP","HttpUnit","Hubs","Hubs/ Routers","Hyperion (Brio)","IconWorkshop","iDeaS","IDMS","IDS","IIS","Illustrator","Image/Imaging","ImageReady","IMS","Infobasic","Informatica","Informix","Ingres","Interbase","Internet Explorer","Intrusion","Inventor","iOS","IPS","iptables","ISAM","ISAPI","ISDN","ISIS","ISPF","J2EE","J2ME","J2SE","Jasmine","Java","JavaScript","JCL","JCreator Pro","JDBC","JMS","jQuery","JSF","JSP","Jtest","Juniper","Junit","Kylix","LabVIEW","LAN","LanManager","LanServer","Lantastic","Lap Link","LCOS","LDAP","Lease Lines","LightsCape","Lightwave","Link Sleuth","Linux","Load Balancing","LoadRunner","LogiScope","Lotus 123","Lotus Notes","LotusScript","Mac OS","Mac/Macintosh","Macabe","Macromedia Director","Mainframe","Mantis","MapBasic","MapGIS","MapInfo","MapPoint","Matlab","MAYA","MCU","MFC","MicroFocus","Microsoft Exchange","Microsoft Photo Editor","Microsoft SharePoint","Microsoft SmartPhone","MicroStation","MicroStrategy","MIDI","MMS","Mobile Network","MOM","Motion Builder","MPLS","MQSeries","MS SQL","Multimedia Builder","Multinet","MVS","MVX","MySQL","NatMaster","NDS/Novell Directory Services","Netbios","NetMaster","NetObjects Fusion","Netscape Communication","NetWare","Network Cards","Novell","Objective-C","ODBC","OLAP","OneNote","OOAD","OOP","OpenSTA","Optical Fibre","Optimizeit Suite","Oracle","Oracle Financials","Oracle Forms","OrCAD","OS X","OS/2","OS/390","OS/400","OSPF","Outlook","OWB","P-CAD","PABX","PADS","Pagemaker","Paint Shop Pro","Painter","PAL","Palm OS","ParaDox","Pascal","Pathworks","PBX","PC—lint","PECL","PeopleCode","PeopleSoft","Perl","PhotoImpact","Photopia","PHP","PHS","PL/1","PL/SQL","PLC","PLD","PostgreSQL","PowerBuilder","PowerLogic","PowerPCB","PowerPoint","PPPoE","Premiere","Pro*C","Pro/E","Progress","Project","Protel","PSTN","Publisher","PureCoverage","PVCS","PVCS Tracker","Python","QADirector","QALoad","QARun","QATester","QTP","Quality Control","Quark Express","QuarkXPress","QuickTest Professional","RACF","Rational ClearCase","Rational ClearQuest","Rational Performance","Rational PureCoverage","Rational Purify","Rational Quantify","Rational Robot","Rational Rose","Rational SQA load","Rational TeamTest","Rational Test RealTime","Rational TestFactory","Rational TestManager","RDBMS","Reflection","Relay Gold","Remedy","REST","Revit","Rexx","RF","Rhino","RIP","RMI","RoboHelp","Robot","Routers","RPG","RTL","RTSP","Ruby","Sagent","SAN","SAN/NAS","SAPDB","SAS","SCO UNIX","SDLC","Security","Servlets","SGML","Shade","Shell","Shockwave","Showcase","Shtml","Siebel","SilkPerformer","SilkPlan Pro","SilkRadar","SilkTest","SilkVision","Silverlight","Silverstream","Simula","SIR","Sketch up","Smalltalk","SMIL","SMS","SNA","Sniffer","SNMP","SOAP","Socket","Softimage","Solaris","Solid Edge","SolidWorks","Sonet","Source Safe/Visual Source Safe","SPICE","Spring","SPSS","SQR","Squid","SS7","ssh","StarTeam","STL","Strata","Streamline","Struts","SUN OS","Sun Solaris","SuperGIS","SuperPad","Sybase","Symbian S60","Synopsys","SYSBASE","Systems Administration","Systems Analysis","Systems Analyst","Tandem","Tape Operator","TCL","TCP/IP","TcpDump","Telecom","Teradata","Test Scripts","TestBed","TestBytes","TestDirector","TestManager","TestPartner","TestQuestPro","TestTrack Pro","TIBCO","Tivoli","TK","Toad","Tomcat","TrackRecord","TrueCoverage","TrueTime","TSO","TSO/ISPF","UDP","UML","Unigraphics","Unity3D","UNIX","USB OTG","USB技術","VBA","VBScript","Vegas","Verilog","VERITAS","Version Control","VHDL","Visio","Visual Basic","Visual Basic .net","Visual C#","Visual C++","Visual Foxpro","Visual J#","Visual J++","Visual SourceSafe","Visual Studio","Visual Studio .net","VisualTest","Vizact 2000","VLAN","VM","VMS","Vmware","VoIP","VPN","VRML","VSAM","VxWorks","WAN","WAP","WAS","Web Master/Developer","WebFT","WebLoad","WebLogic","WebMethods","WebSphere","Wimax","WIN CE","Win32","Windows 2000","Windows 2003","Windows 7","Windows 8","Windows 95","Windows 98","Windows Mobile","Windows NT","Windows Server 2008","Windows Server 2012","Windows Vista","Windows XP","WinForm","WinRunner","WLAN","WML","Word","Wordperfect","WPS","X.25","X400","XDE Tester","XDSL","XHTML","XML","XML Web services","Xrunner","XSL","XSLT","XSP","Zbrush","北大方正",];
		//skill List
	//$scope.skillList=[{"des":"CSS"},{"des":"Github"},{"des":"REST"},{"des":"Angular"},{"des":"AIX"},{"des":"Apple"},{"des":"DOS"},{"des":"FreeBSD"},{"des":"HP-UX"},{"des":"IDMS"},{"des":"Linux"},{"des":"Mac OS"},{"des":"Mac/Macintosh"},{"des":"Mainframe"},{"des":"Microsoft SmartPhone"},{"des":"NDS/Novell Directory Services"},{"des":"Novell"},{"des":"OS X"},{"des":"OS/2"},{"des":"OS/390"},{"des":"OS/400"},{"des":"Palm OS"},{"des":"SCO UNIX"},{"des":"Shell"},{"des":"Solaris"},{"des":"SUN OS"},{"des":"Sun Solaris"},{"des":"Symbian S60"},{"des":"Tandem"},{"des":"TK"},{"des":"TSO"},{"des":"TSO/ISPF"},{"des":"UNIX"},{"des":"VMS"},{"des":"WIN CE"},{"des":"Windows 2000"},{"des":"Windows 2003"},{"des":"Windows 95"},{"des":"Windows 98"},{"des":"Windows Mobile"},{"des":"Windows NT"},{"des":"Windows Vista"},{"des":"Windows 7"},{"des":"Windows Server 2008"},{"des":"Android"},{"des":"iOS"},{"des":"Windows 8"},{"des":"Windows Server 2012"},{"des":"Windows XP"},{"des":"ABAQUS"},{"des":"DDK"},{"des":"MCU"},{"des":"OOAD"},{"des":"OOP"},{"des":"Oracle Forms"},{"des":"PVCS"},{"des":"SDLC"},{"des":"Servlets"},{"des":"STL"},{"des":"Systems Administration"},{"des":"Systems Analysis"},{"des":"Systems Analyst"},{"des":"UML"},{"des":"VxWorks"},{"des":"A+"},{"des":"ActionScript"},{"des":"ADA"},{"des":"AJAX"},{"des":"ASP"},{"des":"ASP.NET"},{"des":"ATL"},{"des":"C"},{"des":"C#"},{"des":"C++"},{"des":"C++.Net"},{"des":"CGI"},{"des":"Clipper"},{"des":"COBOL"},{"des":"COM/DCOM"},{"des":"COOL:Gen"},{"des":"CORBA"},{"des":"Delphi"},{"des":"Developer/ Designer 2000"},{"des":"DirectX"},{"des":"FORTRAN"},{"des":"Fox Pro"},{"des":"FoxBASE+"},{"des":"Infobasic"},{"des":"Java"},{"des":"JCL"},{"des":"JCreator Pro"},{"des":"JMS"},{"des":"JSF"},{"des":"JSP"},{"des":"Kylix"},{"des":"Lotus Notes"},{"des":"LotusScript"},{"des":"Matlab"},{"des":"MFC"},{"des":"PAL"},{"des":"Pascal"},{"des":"PECL"},{"des":"PeopleCode"},{"des":"Perl"},{"des":"PHP"},{"des":"PL/1"},{"des":"PowerBuilder"},{"des":"Pro*C"},{"des":"Python"},{"des":"Rexx"},{"des":"RMI"},{"des":"RPG"},{"des":"Ruby"},{"des":"Simula"},{"des":"SIR"},{"des":"Smalltalk"},{"des":"Spring"},{"des":"SQR"},{"des":"StarTeam"},{"des":"Struts"},{"des":"TCL"},{"des":"VBA"},{"des":"Visual Basic"},{"des":"Visual Basic .net"},{"des":"Visual C#"},{"des":"Visual C++"},{"des":"Visual J#"},{"des":"Visual J++"},{"des":"Visual SourceSafe"},{"des":"Visual Studio"},{"des":"Visual Studio .net"},{"des":"Win32"},{"des":"WinForm"},{"des":"WML"},{"des":"XSL"},{"des":"XSLT"},{"des":"LabVIEW"},{"des":"Silverlight"},{"des":"Objective-C"},{"des":"Adabas"},{"des":"ADO"},{"des":"ANSI SQL"},{"des":"Brio"},{"des":"Capacity Planning"},{"des":"CMMS"},{"des":"Cognos"},{"des":"Data Guard"},{"des":"Data Modeling"},{"des":"Database Administrator"},{"des":"Database Management"},{"des":"DataStage"},{"des":"DB2"},{"des":"Dbase"},{"des":"Endevor"},{"des":"ERwin"},{"des":"Essbase"},{"des":"ETL"},{"des":"FoWindows Xpro"},{"des":"FoxBase"},{"des":"FoxPro 2"},{"des":"IMS"},{"des":"Informix"},{"des":"Informatica"},{"des":"Ingres"},{"des":"Interbase"},{"des":"ISPF"},{"des":"Jasmine"},{"des":"JDBC"},{"des":"Access"},{"des":"MS SQL"},{"des":"MySQL"},{"des":"ODBC"},{"des":"OLAP"},{"des":"Oracle"},{"des":"OWB"},{"des":"ParaDox"},{"des":"PL/SQL"},{"des":"PostgreSQL"},{"des":"Progress"},{"des":"RDBMS"},{"des":"Sagent"},{"des":"SAPDB"},{"des":"Sybase"},{"des":"SYSBASE"},{"des":"Toad"},{"des":"Visual Foxpro"},{"des":"AS/400"},{"des":"BizTalk"},{"des":"CC Mail"},{"des":"CICS"},{"des":"Citrix"},{"des":"ClearCase"},{"des":"ClearQuest"},{"des":"Domino"},{"des":"FileNet"},{"des":"Focus"},{"des":"Hyperion (Brio)"},{"des":"Microsoft Exchange"},{"des":"Microsoft SharePoint"},{"des":"MQSeries"},{"des":"Silverstream"},{"des":"Tomcat"},{"des":"Vmware"},{"des":"VSAM"},{"des":"WebLogic"},{"des":"WebMethods"},{"des":"WebSphere"},{"des":"ActiveX"},{"des":"Apache SOAP"},{"des":"Cold Fusion"},{"des":"DHTML"},{"des":"Dreamweaver"},{"des":"EJB"},{"des":"Electronic Payment"},{"des":"Fireworks"},{"des":"FrontPage"},{"des":"GoLive"},{"des":"HTML"},{"des":"J2EE"},{"des":"J2ME"},{"des":"J2SE"},{"des":"JavaScript"},{"des":"NetObjects Fusion"},{"des":"RoboHelp"},{"des":"SGML"},{"des":"Shtml"},{"des":"SMIL"},{"des":"VBScript"},{"des":"VRML"},{"des":"Web Master/Developer"},{"des":"XHTML"},{"des":"XML"},{"des":"XML Web services"},{"des":"XSP"},{"des":"jQuery"},{"des":"Flex"},{"des":"AdvanceLink"},{"des":"Asynch"},{"des":"Banyan"},{"des":"Banyan Vines"},{"des":"Bay"},{"des":"Bay Networks"},{"des":"BGP"},{"des":"Bridges"},{"des":"BroadVision"},{"des":"Checkpoint"},{"des":"Cisco"},{"des":"DHCP"},{"des":"DNS"},{"des":"e-commerce"},{"des":"EDI"},{"des":"Ethernet"},{"des":"Firewall"},{"des":"Frame Relay"},{"des":"FTP"},{"des":"HP Open View"},{"des":"HTTP"},{"des":"Hubs"},{"des":"Hubs/ Routers"},{"des":"IDS"},{"des":"IIS"},{"des":"Intrusion"},{"des":"iptables"},{"des":"ISAM"},{"des":"ISAPI"},{"des":"ISDN"},{"des":"ISIS"},{"des":"Juniper"},{"des":"LAN"},{"des":"LanManager"},{"des":"LanServer"},{"des":"Lantastic"},{"des":"Lap Link"},{"des":"LDAP"},{"des":"Lease Lines"},{"des":"Load Balancing"},{"des":"MOM"},{"des":"MPLS"},{"des":"Multinet"},{"des":"MVX"},{"des":"NatMaster"},{"des":"Netbios"},{"des":"NetMaster"},{"des":"NetWare"},{"des":"Network Cards"},{"des":"Optical Fibre"},{"des":"OSPF"},{"des":"Pathworks"},{"des":"PPPoE"},{"des":"Reflection"},{"des":"RIP"},{"des":"Routers"},{"des":"SAN"},{"des":"Security"},{"des":"SNA"},{"des":"Sniffer"},{"des":"SOAP"},{"des":"Socket"},{"des":"Sonet"},{"des":"Squid"},{"des":"ssh"},{"des":"TCP/IP"},{"des":"TcpDump"},{"des":"UDP"},{"des":"VLAN"},{"des":"VPN"},{"des":"WAN"},{"des":"WAP"},{"des":"X.25"},{"des":"X400"},{"des":"Adobe Acrobat"},{"des":"Communicator"},{"des":"Excel"},{"des":"ForeHelp"},{"des":"Ghost"},{"des":"Internet Explorer"},{"des":"Lotus 123"},{"des":"Netscape Communication"},{"des":"OneNote"},{"des":"Oracle Financials"},{"des":"Outlook"},{"des":"PowerPoint"},{"des":"Project"},{"des":"Publisher"},{"des":"Visio"},{"des":"Word"},{"des":"Wordperfect"},{"des":"WPS"},{"des":"FrameMaker"},{"des":"Adobe InDesign"},{"des":"Pagemaker"},{"des":"QuarkXPress"},{"des":"北大方正"},{"des":"3ds Max"},{"des":"After Effects"},{"des":"Alias"},{"des":"Alias studio"},{"des":"Authorware"},{"des":"CADAM"},{"des":"Cakewalk"},{"des":"Dimensions 3D"},{"des":"Director"},{"des":"Flash"},{"des":"Freehand"},{"des":"Games"},{"des":"Graphics"},{"des":"HomeSite"},{"des":"IconWorkshop"},{"des":"Image/Imaging"},{"des":"Lightwave"},{"des":"Macromedia Director"},{"des":"MAYA"},{"des":"Microsoft Photo Editor"},{"des":"Motion Builder"},{"des":"Multimedia Builder"},{"des":"Painter"},{"des":"Premiere"},{"des":"Quark Express"},{"des":"Rhino"},{"des":"Shockwave"},{"des":"Softimage"},{"des":"Strata"},{"des":"Streamline"},{"des":"Vegas"},{"des":"Vizact 2000"},{"des":"Shade"},{"des":"Cinema 4D"},{"des":"Showcase"},{"des":"3ds Max Design"},{"des":"Unity3D"},{"des":"Adobe Photoshop"},{"des":"CoolDraw"},{"des":"CorelDraw"},{"des":"Illustrator"},{"des":"ImageReady"},{"des":"Paint Shop Pro"},{"des":"PhotoImpact"},{"des":"AutoCAD"},{"des":"AutoCad 2D"},{"des":"AutoCad 3D"},{"des":"Catia"},{"des":"iDeaS"},{"des":"LightsCape"},{"des":"MicroStation"},{"des":"Pro/E"},{"des":"Revit"},{"des":"Sketch up"},{"des":"SolidWorks"},{"des":"Unigraphics"},{"des":"Zbrush"},{"des":"Solid Edge"},{"des":"Inventor"},{"des":"DIALux"},{"des":"Photopia"},{"des":"ArcGis"},{"des":"ArcView"},{"des":"GIS"},{"des":"MapBasic"},{"des":"MapInfo"},{"des":"MapGIS"},{"des":"MapPoint"},{"des":"SuperGIS"},{"des":"SuperPad"},{"des":"3G"},{"des":"ADSL"},{"des":"AppleTalk"},{"des":"Avaya"},{"des":"Bluetooth"},{"des":"CDMA"},{"des":"CIP"},{"des":"FDDI"},{"des":"FPT"},{"des":"GMS"},{"des":"GPRS"},{"des":"GSM"},{"des":"MMS"},{"des":"PABX"},{"des":"PBX"},{"des":"PHS"},{"des":"PSTN"},{"des":"Relay Gold"},{"des":"RF"},{"des":"RTSP"},{"des":"SMS"},{"des":"SNMP"},{"des":"SS7"},{"des":"Telecom"},{"des":"USB OTG"},{"des":"VoIP"},{"des":"Wimax"},{"des":"WLAN"},{"des":"XDSL"},{"des":"ACT"},{"des":"Astra LoadTest"},{"des":"Astra QuickTest"},{"des":"Attoltestware"},{"des":"BounderChecker"},{"des":"Bugzilla"},{"des":"C++test"},{"des":"Cantata"},{"des":"CodeTest"},{"des":"DevPartner Studio"},{"des":"DriverStudio"},{"des":"EcoScope"},{"des":"e-Test suite"},{"des":"GammaRay"},{"des":"HttpUnit"},{"des":"IPS"},{"des":"Jtest"},{"des":"Junit"},{"des":"Link Sleuth"},{"des":"LoadRunner"},{"des":"LogiScope"},{"des":"Macabe"},{"des":"Mantis"},{"des":"OpenSTA"},{"des":"Optimizeit Suite"},{"des":"PC—lint"},{"des":"PureCoverage"},{"des":"PVCS Tracker"},{"des":"QADirector"},{"des":"QALoad"},{"des":"QARun"},{"des":"QATester"},{"des":"QTP"},{"des":"Quality Control"},{"des":"QuickTest Professional"},{"des":"Rational ClearCase"},{"des":"Rational ClearQuest"},{"des":"Rational Performance"},{"des":"Rational PureCoverage"},{"des":"Rational Purify"},{"des":"Rational Quantify"},{"des":"Rational Robot"},{"des":"Rational Rose"},{"des":"Rational SQA load"},{"des":"Rational TeamTest"},{"des":"Rational Test RealTime"},{"des":"Rational TestFactory"},{"des":"Rational TestManager"},{"des":"Robot"},{"des":"SilkPerformer"},{"des":"SilkPlan Pro"},{"des":"SilkRadar"},{"des":"SilkTest"},{"des":"SilkVision"},{"des":"Source Safe/Visual Source Safe"},{"des":"Test Scripts"},{"des":"TestBed"},{"des":"TestBytes"},{"des":"TestDirector"},{"des":"TestManager"},{"des":"TestPartner"},{"des":"TestQuestPro"},{"des":"TestTrack Pro"},{"des":"TrackRecord"},{"des":"TrueCoverage"},{"des":"TrueTime"},{"des":"Version Control"},{"des":"VisualTest"},{"des":"WAS"},{"des":"WebFT"},{"des":"WebLoad"},{"des":"WinRunner"},{"des":"XDE Tester"},{"des":"Xrunner"},{"des":"CASE"},{"des":"Data Architect"},{"des":"Data Marts"},{"des":"CleverPath"},{"des":"CVS"},{"des":"MicroStrategy"},{"des":"PeopleSoft"},{"des":"RACF"},{"des":"Remedy"},{"des":"SAN/NAS"},{"des":"SAS"},{"des":"Siebel"},{"des":"SPSS"},{"des":"Teradata"},{"des":"TIBCO"},{"des":"Tivoli"},{"des":"VERITAS"},{"des":"ADC"},{"des":"ARM"},{"des":"ASIC"},{"des":"Assembly"},{"des":"AVL"},{"des":"CA"},{"des":"Cadence Allegro"},{"des":"Chipware"},{"des":"Circuit Design"},{"des":"CPLD"},{"des":"DEC/VAX"},{"des":"Drivers"},{"des":"DSP"},{"des":"EDA"},{"des":"EMC/EMI"},{"des":"Firmware"},{"des":"FPGA"},{"des":"GEAC"},{"des":"LCOS"},{"des":"MicroFocus"},{"des":"MIDI"},{"des":"Mobile Network"},{"des":"MVS"},{"des":"OrCAD"},{"des":"PADS"},{"des":"P-CAD"},{"des":"PLC"},{"des":"PLD"},{"des":"PowerLogic"},{"des":"PowerPCB"},{"des":"Protel"},{"des":"RTL"},{"des":"SPICE"},{"des":"Synopsys"},{"des":"Tape Operator"},{"des":"USB技術"},{"des":"Verilog"},{"des":"VHDL"},{"des":"VM"},];
	//write function
	$scope.SKILL_INIT=function(){
		var index=$scope.skillList.indexOf($scope.SKILL);
		if(index=="-1"){$scope.skillList.push($scope.SKILL);}
		else{$scope.skillList.slice(index,1);}
	}
	$scope.skillFun=function(item){
		$scope.keyword=item;
		this.myskills.push($scope.keyword);
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
			else{this.myskills.push($scope.keyword);$scope.skillErrorMess="";}
			$scope.keyword='';
		}
	}
	$scope.removeSkill=function(item){
		var index = $scope.myskills.indexOf(item);
		if(index!='-1'){
			this.myskills.splice(index,1);
			$scope.skillList.push(item);
		}
	}
	$scope.savePreWork=function(){
		var userObject={"method":"savePreWork","jobNature":$scope.jobNature,"jobstatus":$scope.jobstatus};
		
		$http({
			method:'POST',
			url:'user_skill.php', //沒有存入資料庫，直接導到下一個頁面 //用seesion 儲存
			data: $.param(userObject),
			headers: {'Content-type': 'application/x-www-form-urlencoded'},
		}).
		success(function(json){
			//email loading BG
			//$scope.loading=false;
			//===============
			console.log(json);
			$scope.selectSkill=true;
			//location.href="user_skill.php";
		}).
		error(function(json){
			console.warn(json);
			$scope.jobError='發生不可預測的錯誤';
		});
	}


	//next
	$scope.continue=function(){
		//save all data
		//jobNature, jobsta$tus, myskills[]
		var userObject={"method":"saveUserSkill","skills":$scope.myskills};
		
		$http({
			method:'POST',
			url:'user_skill.php', //沒有存入資料庫，直接導到下一個頁面 //用seesion 儲存
			data: $.param(userObject),
			headers: {'Content-type': 'application/x-www-form-urlencoded'},
		}).
		success(function(json){
			//email loading BG
			//$scope.loading=false;
			//===============
			//console.log(json);
			location.href="user_skill.php";
		}).
		error(function(json){
			console.warn(json);
			$scope.jobError='發生不可預測的錯誤';
		});
	}

}]);