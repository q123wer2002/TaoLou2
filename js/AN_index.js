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
		//skill List
	//$scope.skillList=[{"des":"CSS"},{"des":"Github"},{"des":"REST"},{"des":"Angular"},{"des":"AIX"},{"des":"Apple"},{"des":"DOS"},{"des":"FreeBSD"},{"des":"HP-UX"},{"des":"IDMS"},{"des":"Linux"},{"des":"Mac OS"},{"des":"Mac/Macintosh"},{"des":"Mainframe"},{"des":"Microsoft SmartPhone"},{"des":"NDS/Novell Directory Services"},{"des":"Novell"},{"des":"OS X"},{"des":"OS/2"},{"des":"OS/390"},{"des":"OS/400"},{"des":"Palm OS"},{"des":"SCO UNIX"},{"des":"Shell"},{"des":"Solaris"},{"des":"SUN OS"},{"des":"Sun Solaris"},{"des":"Symbian S60"},{"des":"Tandem"},{"des":"TK"},{"des":"TSO"},{"des":"TSO/ISPF"},{"des":"UNIX"},{"des":"VMS"},{"des":"WIN CE"},{"des":"Windows 2000"},{"des":"Windows 2003"},{"des":"Windows 95"},{"des":"Windows 98"},{"des":"Windows Mobile"},{"des":"Windows NT"},{"des":"Windows Vista"},{"des":"Windows 7"},{"des":"Windows Server 2008"},{"des":"Android"},{"des":"iOS"},{"des":"Windows 8"},{"des":"Windows Server 2012"},{"des":"Windows XP"},{"des":"ABAQUS"},{"des":"DDK"},{"des":"MCU"},{"des":"OOAD"},{"des":"OOP"},{"des":"Oracle Forms"},{"des":"PVCS"},{"des":"SDLC"},{"des":"Servlets"},{"des":"STL"},{"des":"Systems Administration"},{"des":"Systems Analysis"},{"des":"Systems Analyst"},{"des":"UML"},{"des":"VxWorks"},{"des":"A+"},{"des":"ActionScript"},{"des":"ADA"},{"des":"AJAX"},{"des":"ASP"},{"des":"ASP.NET"},{"des":"ATL"},{"des":"C"},{"des":"C#"},{"des":"C++"},{"des":"C++.Net"},{"des":"CGI"},{"des":"Clipper"},{"des":"COBOL"},{"des":"COM/DCOM"},{"des":"COOL:Gen"},{"des":"CORBA"},{"des":"Delphi"},{"des":"Developer/ Designer 2000"},{"des":"DirectX"},{"des":"FORTRAN"},{"des":"Fox Pro"},{"des":"FoxBASE+"},{"des":"Infobasic"},{"des":"Java"},{"des":"JCL"},{"des":"JCreator Pro"},{"des":"JMS"},{"des":"JSF"},{"des":"JSP"},{"des":"Kylix"},{"des":"Lotus Notes"},{"des":"LotusScript"},{"des":"Matlab"},{"des":"MFC"},{"des":"PAL"},{"des":"Pascal"},{"des":"PECL"},{"des":"PeopleCode"},{"des":"Perl"},{"des":"PHP"},{"des":"PL/1"},{"des":"PowerBuilder"},{"des":"Pro*C"},{"des":"Python"},{"des":"Rexx"},{"des":"RMI"},{"des":"RPG"},{"des":"Ruby"},{"des":"Simula"},{"des":"SIR"},{"des":"Smalltalk"},{"des":"Spring"},{"des":"SQR"},{"des":"StarTeam"},{"des":"Struts"},{"des":"TCL"},{"des":"VBA"},{"des":"Visual Basic"},{"des":"Visual Basic .net"},{"des":"Visual C#"},{"des":"Visual C++"},{"des":"Visual J#"},{"des":"Visual J++"},{"des":"Visual SourceSafe"},{"des":"Visual Studio"},{"des":"Visual Studio .net"},{"des":"Win32"},{"des":"WinForm"},{"des":"WML"},{"des":"XSL"},{"des":"XSLT"},{"des":"LabVIEW"},{"des":"Silverlight"},{"des":"Objective-C"},{"des":"Adabas"},{"des":"ADO"},{"des":"ANSI SQL"},{"des":"Brio"},{"des":"Capacity Planning"},{"des":"CMMS"},{"des":"Cognos"},{"des":"Data Guard"},{"des":"Data Modeling"},{"des":"Database Administrator"},{"des":"Database Management"},{"des":"DataStage"},{"des":"DB2"},{"des":"Dbase"},{"des":"Endevor"},{"des":"ERwin"},{"des":"Essbase"},{"des":"ETL"},{"des":"FoWindows Xpro"},{"des":"FoxBase"},{"des":"FoxPro 2"},{"des":"IMS"},{"des":"Informix"},{"des":"Informatica"},{"des":"Ingres"},{"des":"Interbase"},{"des":"ISPF"},{"des":"Jasmine"},{"des":"JDBC"},{"des":"Access"},{"des":"MS SQL"},{"des":"MySQL"},{"des":"ODBC"},{"des":"OLAP"},{"des":"Oracle"},{"des":"OWB"},{"des":"ParaDox"},{"des":"PL/SQL"},{"des":"PostgreSQL"},{"des":"Progress"},{"des":"RDBMS"},{"des":"Sagent"},{"des":"SAPDB"},{"des":"Sybase"},{"des":"SYSBASE"},{"des":"Toad"},{"des":"Visual Foxpro"},{"des":"AS/400"},{"des":"BizTalk"},{"des":"CC Mail"},{"des":"CICS"},{"des":"Citrix"},{"des":"ClearCase"},{"des":"ClearQuest"},{"des":"Domino"},{"des":"FileNet"},{"des":"Focus"},{"des":"Hyperion (Brio)"},{"des":"Microsoft Exchange"},{"des":"Microsoft SharePoint"},{"des":"MQSeries"},{"des":"Silverstream"},{"des":"Tomcat"},{"des":"Vmware"},{"des":"VSAM"},{"des":"WebLogic"},{"des":"WebMethods"},{"des":"WebSphere"},{"des":"ActiveX"},{"des":"Apache SOAP"},{"des":"Cold Fusion"},{"des":"DHTML"},{"des":"Dreamweaver"},{"des":"EJB"},{"des":"Electronic Payment"},{"des":"Fireworks"},{"des":"FrontPage"},{"des":"GoLive"},{"des":"HTML"},{"des":"J2EE"},{"des":"J2ME"},{"des":"J2SE"},{"des":"JavaScript"},{"des":"NetObjects Fusion"},{"des":"RoboHelp"},{"des":"SGML"},{"des":"Shtml"},{"des":"SMIL"},{"des":"VBScript"},{"des":"VRML"},{"des":"Web Master/Developer"},{"des":"XHTML"},{"des":"XML"},{"des":"XML Web services"},{"des":"XSP"},{"des":"jQuery"},{"des":"Flex"},{"des":"AdvanceLink"},{"des":"Asynch"},{"des":"Banyan"},{"des":"Banyan Vines"},{"des":"Bay"},{"des":"Bay Networks"},{"des":"BGP"},{"des":"Bridges"},{"des":"BroadVision"},{"des":"Checkpoint"},{"des":"Cisco"},{"des":"DHCP"},{"des":"DNS"},{"des":"e-commerce"},{"des":"EDI"},{"des":"Ethernet"},{"des":"Firewall"},{"des":"Frame Relay"},{"des":"FTP"},{"des":"HP Open View"},{"des":"HTTP"},{"des":"Hubs"},{"des":"Hubs/ Routers"},{"des":"IDS"},{"des":"IIS"},{"des":"Intrusion"},{"des":"iptables"},{"des":"ISAM"},{"des":"ISAPI"},{"des":"ISDN"},{"des":"ISIS"},{"des":"Juniper"},{"des":"LAN"},{"des":"LanManager"},{"des":"LanServer"},{"des":"Lantastic"},{"des":"Lap Link"},{"des":"LDAP"},{"des":"Lease Lines"},{"des":"Load Balancing"},{"des":"MOM"},{"des":"MPLS"},{"des":"Multinet"},{"des":"MVX"},{"des":"NatMaster"},{"des":"Netbios"},{"des":"NetMaster"},{"des":"NetWare"},{"des":"Network Cards"},{"des":"Optical Fibre"},{"des":"OSPF"},{"des":"Pathworks"},{"des":"PPPoE"},{"des":"Reflection"},{"des":"RIP"},{"des":"Routers"},{"des":"SAN"},{"des":"Security"},{"des":"SNA"},{"des":"Sniffer"},{"des":"SOAP"},{"des":"Socket"},{"des":"Sonet"},{"des":"Squid"},{"des":"ssh"},{"des":"TCP/IP"},{"des":"TcpDump"},{"des":"UDP"},{"des":"VLAN"},{"des":"VPN"},{"des":"WAN"},{"des":"WAP"},{"des":"X.25"},{"des":"X400"},{"des":"Adobe Acrobat"},{"des":"Communicator"},{"des":"Excel"},{"des":"ForeHelp"},{"des":"Ghost"},{"des":"Internet Explorer"},{"des":"Lotus 123"},{"des":"Netscape Communication"},{"des":"OneNote"},{"des":"Oracle Financials"},{"des":"Outlook"},{"des":"PowerPoint"},{"des":"Project"},{"des":"Publisher"},{"des":"Visio"},{"des":"Word"},{"des":"Wordperfect"},{"des":"WPS"},{"des":"FrameMaker"},{"des":"Adobe InDesign"},{"des":"Pagemaker"},{"des":"QuarkXPress"},{"des":"北大方正"},{"des":"3ds Max"},{"des":"After Effects"},{"des":"Alias"},{"des":"Alias studio"},{"des":"Authorware"},{"des":"CADAM"},{"des":"Cakewalk"},{"des":"Dimensions 3D"},{"des":"Director"},{"des":"Flash"},{"des":"Freehand"},{"des":"Games"},{"des":"Graphics"},{"des":"HomeSite"},{"des":"IconWorkshop"},{"des":"Image/Imaging"},{"des":"Lightwave"},{"des":"Macromedia Director"},{"des":"MAYA"},{"des":"Microsoft Photo Editor"},{"des":"Motion Builder"},{"des":"Multimedia Builder"},{"des":"Painter"},{"des":"Premiere"},{"des":"Quark Express"},{"des":"Rhino"},{"des":"Shockwave"},{"des":"Softimage"},{"des":"Strata"},{"des":"Streamline"},{"des":"Vegas"},{"des":"Vizact 2000"},{"des":"Shade"},{"des":"Cinema 4D"},{"des":"Showcase"},{"des":"3ds Max Design"},{"des":"Unity3D"},{"des":"Adobe Photoshop"},{"des":"CoolDraw"},{"des":"CorelDraw"},{"des":"Illustrator"},{"des":"ImageReady"},{"des":"Paint Shop Pro"},{"des":"PhotoImpact"},{"des":"AutoCAD"},{"des":"AutoCad 2D"},{"des":"AutoCad 3D"},{"des":"Catia"},{"des":"iDeaS"},{"des":"LightsCape"},{"des":"MicroStation"},{"des":"Pro/E"},{"des":"Revit"},{"des":"Sketch up"},{"des":"SolidWorks"},{"des":"Unigraphics"},{"des":"Zbrush"},{"des":"Solid Edge"},{"des":"Inventor"},{"des":"DIALux"},{"des":"Photopia"},{"des":"ArcGis"},{"des":"ArcView"},{"des":"GIS"},{"des":"MapBasic"},{"des":"MapInfo"},{"des":"MapGIS"},{"des":"MapPoint"},{"des":"SuperGIS"},{"des":"SuperPad"},{"des":"3G"},{"des":"ADSL"},{"des":"AppleTalk"},{"des":"Avaya"},{"des":"Bluetooth"},{"des":"CDMA"},{"des":"CIP"},{"des":"FDDI"},{"des":"FPT"},{"des":"GMS"},{"des":"GPRS"},{"des":"GSM"},{"des":"MMS"},{"des":"PABX"},{"des":"PBX"},{"des":"PHS"},{"des":"PSTN"},{"des":"Relay Gold"},{"des":"RF"},{"des":"RTSP"},{"des":"SMS"},{"des":"SNMP"},{"des":"SS7"},{"des":"Telecom"},{"des":"USB OTG"},{"des":"VoIP"},{"des":"Wimax"},{"des":"WLAN"},{"des":"XDSL"},{"des":"ACT"},{"des":"Astra LoadTest"},{"des":"Astra QuickTest"},{"des":"Attoltestware"},{"des":"BounderChecker"},{"des":"Bugzilla"},{"des":"C++test"},{"des":"Cantata"},{"des":"CodeTest"},{"des":"DevPartner Studio"},{"des":"DriverStudio"},{"des":"EcoScope"},{"des":"e-Test suite"},{"des":"GammaRay"},{"des":"HttpUnit"},{"des":"IPS"},{"des":"Jtest"},{"des":"Junit"},{"des":"Link Sleuth"},{"des":"LoadRunner"},{"des":"LogiScope"},{"des":"Macabe"},{"des":"Mantis"},{"des":"OpenSTA"},{"des":"Optimizeit Suite"},{"des":"PC—lint"},{"des":"PureCoverage"},{"des":"PVCS Tracker"},{"des":"QADirector"},{"des":"QALoad"},{"des":"QARun"},{"des":"QATester"},{"des":"QTP"},{"des":"Quality Control"},{"des":"QuickTest Professional"},{"des":"Rational ClearCase"},{"des":"Rational ClearQuest"},{"des":"Rational Performance"},{"des":"Rational PureCoverage"},{"des":"Rational Purify"},{"des":"Rational Quantify"},{"des":"Rational Robot"},{"des":"Rational Rose"},{"des":"Rational SQA load"},{"des":"Rational TeamTest"},{"des":"Rational Test RealTime"},{"des":"Rational TestFactory"},{"des":"Rational TestManager"},{"des":"Robot"},{"des":"SilkPerformer"},{"des":"SilkPlan Pro"},{"des":"SilkRadar"},{"des":"SilkTest"},{"des":"SilkVision"},{"des":"Source Safe/Visual Source Safe"},{"des":"Test Scripts"},{"des":"TestBed"},{"des":"TestBytes"},{"des":"TestDirector"},{"des":"TestManager"},{"des":"TestPartner"},{"des":"TestQuestPro"},{"des":"TestTrack Pro"},{"des":"TrackRecord"},{"des":"TrueCoverage"},{"des":"TrueTime"},{"des":"Version Control"},{"des":"VisualTest"},{"des":"WAS"},{"des":"WebFT"},{"des":"WebLoad"},{"des":"WinRunner"},{"des":"XDE Tester"},{"des":"Xrunner"},{"des":"CASE"},{"des":"Data Architect"},{"des":"Data Marts"},{"des":"CleverPath"},{"des":"CVS"},{"des":"MicroStrategy"},{"des":"PeopleSoft"},{"des":"RACF"},{"des":"Remedy"},{"des":"SAN/NAS"},{"des":"SAS"},{"des":"Siebel"},{"des":"SPSS"},{"des":"Teradata"},{"des":"TIBCO"},{"des":"Tivoli"},{"des":"VERITAS"},{"des":"ADC"},{"des":"ARM"},{"des":"ASIC"},{"des":"Assembly"},{"des":"AVL"},{"des":"CA"},{"des":"Cadence Allegro"},{"des":"Chipware"},{"des":"Circuit Design"},{"des":"CPLD"},{"des":"DEC/VAX"},{"des":"Drivers"},{"des":"DSP"},{"des":"EDA"},{"des":"EMC/EMI"},{"des":"Firmware"},{"des":"FPGA"},{"des":"GEAC"},{"des":"LCOS"},{"des":"MicroFocus"},{"des":"MIDI"},{"des":"Mobile Network"},{"des":"MVS"},{"des":"OrCAD"},{"des":"PADS"},{"des":"P-CAD"},{"des":"PLC"},{"des":"PLD"},{"des":"PowerLogic"},{"des":"PowerPCB"},{"des":"Protel"},{"des":"RTL"},{"des":"SPICE"},{"des":"Synopsys"},{"des":"Tape Operator"},{"des":"USB技術"},{"des":"Verilog"},{"des":"VHDL"},{"des":"VM"},];
	$scope.skillList=[{"des":"3ds Max"},{"des":"3ds Max Design"},{"des":"3G"},{"des":"A+"},{"des":"ABAQUS"},{"des":"Access"},{"des":"ACT"},{"des":"ActionScript"},{"des":"ActiveX"},{"des":"ADA"},{"des":"Adabas"},{"des":"ADC"},{"des":"ADO"},{"des":"Adobe Acrobat"},{"des":"Adobe InDesign"},{"des":"Adobe Photoshop"},{"des":"ADSL"},{"des":"AdvanceLink"},{"des":"After Effects"},{"des":"AIX"},{"des":"AJAX"},{"des":"Alias"},{"des":"Alias studio"},{"des":"Android"},{"des":"Angular"},{"des":"ANSI SQL"},{"des":"Apache SOAP"},{"des":"Apple"},{"des":"AppleTalk"},{"des":"ArcGis"},{"des":"ArcView"},{"des":"ARM"},{"des":"AS/400"},{"des":"ASIC"},{"des":"ASP"},{"des":"ASP.NET"},{"des":"Assembly"},{"des":"Astra LoadTest"},{"des":"Astra QuickTest"},{"des":"Asynch"},{"des":"ATL"},{"des":"Attoltestware"},{"des":"Authorware"},{"des":"AutoCAD"},{"des":"AutoCad 2D"},{"des":"AutoCad 3D"},{"des":"Avaya"},{"des":"AVL"},{"des":"Banyan"},{"des":"Banyan Vines"},{"des":"Bay"},{"des":"Bay Networks"},{"des":"BGP"},{"des":"BizTalk"},{"des":"Bluetooth"},{"des":"BounderChecker"},{"des":"Bridges"},{"des":"Brio"},{"des":"BroadVision"},{"des":"Bugzilla"},{"des":"C"},{"des":"C#"},{"des":"C++"},{"des":"C++.Net"},{"des":"C++test"},{"des":"CA"},{"des":"CADAM"},{"des":"Cadence Allegro"},{"des":"Cakewalk"},{"des":"Cantata"},{"des":"Capacity Planning"},{"des":"CASE"},{"des":"Catia"},{"des":"CC Mail"},{"des":"CDMA"},{"des":"CGI"},{"des":"Checkpoint"},{"des":"Chipware"},{"des":"CICS"},{"des":"Cinema 4D"},{"des":"CIP"},{"des":"Circuit Design"},{"des":"Cisco"},{"des":"Citrix"},{"des":"ClearCase"},{"des":"ClearQuest"},{"des":"CleverPath"},{"des":"Clipper"},{"des":"CMMS"},{"des":"COBOL"},{"des":"CodeTest"},{"des":"Cognos"},{"des":"Cold Fusion"},{"des":"COM/DCOM"},{"des":"Communicator"},{"des":"COOL:Gen"},{"des":"CoolDraw"},{"des":"CORBA"},{"des":"CorelDraw"},{"des":"CPLD"},{"des":"CSS"},{"des":"CVS"},{"des":"Data Architect"},{"des":"Data Guard"},{"des":"Data Marts"},{"des":"Data Modeling"},{"des":"Database Administrator"},{"des":"Database Management"},{"des":"DataStage"},{"des":"DB2"},{"des":"Dbase"},{"des":"DDK"},{"des":"DEC/VAX"},{"des":"Delphi"},{"des":"Developer/ Designer 2000"},{"des":"DevPartner Studio"},{"des":"DHCP"},{"des":"DHTML"},{"des":"DIALux"},{"des":"Dimensions 3D"},{"des":"Director"},{"des":"DirectX"},{"des":"DNS"},{"des":"Domino"},{"des":"DOS"},{"des":"Dreamweaver"},{"des":"Drivers"},{"des":"DriverStudio"},{"des":"DSP"},{"des":"e-commerce"},{"des":"e-Test suite"},{"des":"EcoScope"},{"des":"EDA"},{"des":"EDI"},{"des":"EJB"},{"des":"Electronic Payment"},{"des":"EMC/EMI"},{"des":"Endevor"},{"des":"ERwin"},{"des":"Essbase"},{"des":"Ethernet"},{"des":"ETL"},{"des":"Excel"},{"des":"FDDI"},{"des":"FileNet"},{"des":"Firewall"},{"des":"Fireworks"},{"des":"Firmware"},{"des":"Flash"},{"des":"Flex"},{"des":"Focus"},{"des":"ForeHelp"},{"des":"FORTRAN"},{"des":"FoWindows Xpro"},{"des":"Fox Pro"},{"des":"FoxBase"},{"des":"FoxBASE+"},{"des":"FoxPro 2"},{"des":"FPGA"},{"des":"FPT"},{"des":"Frame Relay"},{"des":"FrameMaker"},{"des":"FreeBSD"},{"des":"Freehand"},{"des":"FrontPage"},{"des":"FTP"},{"des":"Games"},{"des":"GammaRay"},{"des":"GEAC"},{"des":"Ghost"},{"des":"GIS"},{"des":"Github"},{"des":"GMS"},{"des":"GoLive"},{"des":"GPRS"},{"des":"Graphics"},{"des":"GSM"},{"des":"HomeSite"},{"des":"HP Open View"},{"des":"HP-UX"},{"des":"HTML"},{"des":"HTTP"},{"des":"HttpUnit"},{"des":"Hubs"},{"des":"Hubs/ Routers"},{"des":"Hyperion (Brio)"},{"des":"IconWorkshop"},{"des":"iDeaS"},{"des":"IDMS"},{"des":"IDS"},{"des":"IIS"},{"des":"Illustrator"},{"des":"Image/Imaging"},{"des":"ImageReady"},{"des":"IMS"},{"des":"Infobasic"},{"des":"Informatica"},{"des":"Informix"},{"des":"Ingres"},{"des":"Interbase"},{"des":"Internet Explorer"},{"des":"Intrusion"},{"des":"Inventor"},{"des":"iOS"},{"des":"IPS"},{"des":"iptables"},{"des":"ISAM"},{"des":"ISAPI"},{"des":"ISDN"},{"des":"ISIS"},{"des":"ISPF"},{"des":"J2EE"},{"des":"J2ME"},{"des":"J2SE"},{"des":"Jasmine"},{"des":"Java"},{"des":"JavaScript"},{"des":"JCL"},{"des":"JCreator Pro"},{"des":"JDBC"},{"des":"JMS"},{"des":"jQuery"},{"des":"JSF"},{"des":"JSP"},{"des":"Jtest"},{"des":"Juniper"},{"des":"Junit"},{"des":"Kylix"},{"des":"LabVIEW"},{"des":"LAN"},{"des":"LanManager"},{"des":"LanServer"},{"des":"Lantastic"},{"des":"Lap Link"},{"des":"LCOS"},{"des":"LDAP"},{"des":"Lease Lines"},{"des":"LightsCape"},{"des":"Lightwave"},{"des":"Link Sleuth"},{"des":"Linux"},{"des":"Load Balancing"},{"des":"LoadRunner"},{"des":"LogiScope"},{"des":"Lotus 123"},{"des":"Lotus Notes"},{"des":"LotusScript"},{"des":"Mac OS"},{"des":"Mac/Macintosh"},{"des":"Macabe"},{"des":"Macromedia Director"},{"des":"Mainframe"},{"des":"Mantis"},{"des":"MapBasic"},{"des":"MapGIS"},{"des":"MapInfo"},{"des":"MapPoint"},{"des":"Matlab"},{"des":"MAYA"},{"des":"MCU"},{"des":"MFC"},{"des":"MicroFocus"},{"des":"Microsoft Exchange"},{"des":"Microsoft Photo Editor"},{"des":"Microsoft SharePoint"},{"des":"Microsoft SmartPhone"},{"des":"MicroStation"},{"des":"MicroStrategy"},{"des":"MIDI"},{"des":"MMS"},{"des":"Mobile Network"},{"des":"MOM"},{"des":"Motion Builder"},{"des":"MPLS"},{"des":"MQSeries"},{"des":"MS SQL"},{"des":"Multimedia Builder"},{"des":"Multinet"},{"des":"MVS"},{"des":"MVX"},{"des":"MySQL"},{"des":"NatMaster"},{"des":"NDS/Novell Directory Services"},{"des":"Netbios"},{"des":"NetMaster"},{"des":"NetObjects Fusion"},{"des":"Netscape Communication"},{"des":"NetWare"},{"des":"Network Cards"},{"des":"Novell"},{"des":"Objective-C"},{"des":"ODBC"},{"des":"OLAP"},{"des":"OneNote"},{"des":"OOAD"},{"des":"OOP"},{"des":"OpenSTA"},{"des":"Optical Fibre"},{"des":"Optimizeit Suite"},{"des":"Oracle"},{"des":"Oracle Financials"},{"des":"Oracle Forms"},{"des":"OrCAD"},{"des":"OS X"},{"des":"OS/2"},{"des":"OS/390"},{"des":"OS/400"},{"des":"OSPF"},{"des":"Outlook"},{"des":"OWB"},{"des":"P-CAD"},{"des":"PABX"},{"des":"PADS"},{"des":"Pagemaker"},{"des":"Paint Shop Pro"},{"des":"Painter"},{"des":"PAL"},{"des":"Palm OS"},{"des":"ParaDox"},{"des":"Pascal"},{"des":"Pathworks"},{"des":"PBX"},{"des":"PC—lint"},{"des":"PECL"},{"des":"PeopleCode"},{"des":"PeopleSoft"},{"des":"Perl"},{"des":"PhotoImpact"},{"des":"Photopia"},{"des":"PHP"},{"des":"PHS"},{"des":"PL/1"},{"des":"PL/SQL"},{"des":"PLC"},{"des":"PLD"},{"des":"PostgreSQL"},{"des":"PowerBuilder"},{"des":"PowerLogic"},{"des":"PowerPCB"},{"des":"PowerPoint"},{"des":"PPPoE"},{"des":"Premiere"},{"des":"Pro*C"},{"des":"Pro/E"},{"des":"Progress"},{"des":"Project"},{"des":"Protel"},{"des":"PSTN"},{"des":"Publisher"},{"des":"PureCoverage"},{"des":"PVCS"},{"des":"PVCS Tracker"},{"des":"Python"},{"des":"QADirector"},{"des":"QALoad"},{"des":"QARun"},{"des":"QATester"},{"des":"QTP"},{"des":"Quality Control"},{"des":"Quark Express"},{"des":"QuarkXPress"},{"des":"QuickTest Professional"},{"des":"RACF"},{"des":"Rational ClearCase"},{"des":"Rational ClearQuest"},{"des":"Rational Performance"},{"des":"Rational PureCoverage"},{"des":"Rational Purify"},{"des":"Rational Quantify"},{"des":"Rational Robot"},{"des":"Rational Rose"},{"des":"Rational SQA load"},{"des":"Rational TeamTest"},{"des":"Rational Test RealTime"},{"des":"Rational TestFactory"},{"des":"Rational TestManager"},{"des":"RDBMS"},{"des":"Reflection"},{"des":"Relay Gold"},{"des":"Remedy"},{"des":"REST"},{"des":"Revit"},{"des":"Rexx"},{"des":"RF"},{"des":"Rhino"},{"des":"RIP"},{"des":"RMI"},{"des":"RoboHelp"},{"des":"Robot"},{"des":"Routers"},{"des":"RPG"},{"des":"RTL"},{"des":"RTSP"},{"des":"Ruby"},{"des":"Sagent"},{"des":"SAN"},{"des":"SAN/NAS"},{"des":"SAPDB"},{"des":"SAS"},{"des":"SCO UNIX"},{"des":"SDLC"},{"des":"Security"},{"des":"Servlets"},{"des":"SGML"},{"des":"Shade"},{"des":"Shell"},{"des":"Shockwave"},{"des":"Showcase"},{"des":"Shtml"},{"des":"Siebel"},{"des":"SilkPerformer"},{"des":"SilkPlan Pro"},{"des":"SilkRadar"},{"des":"SilkTest"},{"des":"SilkVision"},{"des":"Silverlight"},{"des":"Silverstream"},{"des":"Simula"},{"des":"SIR"},{"des":"Sketch up"},{"des":"Smalltalk"},{"des":"SMIL"},{"des":"SMS"},{"des":"SNA"},{"des":"Sniffer"},{"des":"SNMP"},{"des":"SOAP"},{"des":"Socket"},{"des":"Softimage"},{"des":"Solaris"},{"des":"Solid Edge"},{"des":"SolidWorks"},{"des":"Sonet"},{"des":"Source Safe/Visual Source Safe"},{"des":"SPICE"},{"des":"Spring"},{"des":"SPSS"},{"des":"SQR"},{"des":"Squid"},{"des":"SS7"},{"des":"ssh"},{"des":"StarTeam"},{"des":"STL"},{"des":"Strata"},{"des":"Streamline"},{"des":"Struts"},{"des":"SUN OS"},{"des":"Sun Solaris"},{"des":"SuperGIS"},{"des":"SuperPad"},{"des":"Sybase"},{"des":"Symbian S60"},{"des":"Synopsys"},{"des":"SYSBASE"},{"des":"Systems Administration"},{"des":"Systems Analysis"},{"des":"Systems Analyst"},{"des":"Tandem"},{"des":"Tape Operator"},{"des":"TCL"},{"des":"TCP/IP"},{"des":"TcpDump"},{"des":"Telecom"},{"des":"Teradata"},{"des":"Test Scripts"},{"des":"TestBed"},{"des":"TestBytes"},{"des":"TestDirector"},{"des":"TestManager"},{"des":"TestPartner"},{"des":"TestQuestPro"},{"des":"TestTrack Pro"},{"des":"TIBCO"},{"des":"Tivoli"},{"des":"TK"},{"des":"Toad"},{"des":"Tomcat"},{"des":"TrackRecord"},{"des":"TrueCoverage"},{"des":"TrueTime"},{"des":"TSO"},{"des":"TSO/ISPF"},{"des":"UDP"},{"des":"UML"},{"des":"Unigraphics"},{"des":"Unity3D"},{"des":"UNIX"},{"des":"USB OTG"},{"des":"USB技術"},{"des":"VBA"},{"des":"VBScript"},{"des":"Vegas"},{"des":"Verilog"},{"des":"VERITAS"},{"des":"Version Control"},{"des":"VHDL"},{"des":"Visio"},{"des":"Visual Basic"},{"des":"Visual Basic .net"},{"des":"Visual C#"},{"des":"Visual C++"},{"des":"Visual Foxpro"},{"des":"Visual J#"},{"des":"Visual J++"},{"des":"Visual SourceSafe"},{"des":"Visual Studio"},{"des":"Visual Studio .net"},{"des":"VisualTest"},{"des":"Vizact 2000"},{"des":"VLAN"},{"des":"VM"},{"des":"VMS"},{"des":"Vmware"},{"des":"VoIP"},{"des":"VPN"},{"des":"VRML"},{"des":"VSAM"},{"des":"VxWorks"},{"des":"WAN"},{"des":"WAP"},{"des":"WAS"},{"des":"Web Master/Developer"},{"des":"WebFT"},{"des":"WebLoad"},{"des":"WebLogic"},{"des":"WebMethods"},{"des":"WebSphere"},{"des":"Wimax"},{"des":"WIN CE"},{"des":"Win32"},{"des":"Windows 2000"},{"des":"Windows 2003"},{"des":"Windows 7"},{"des":"Windows 8"},{"des":"Windows 95"},{"des":"Windows 98"},{"des":"Windows Mobile"},{"des":"Windows NT"},{"des":"Windows Server 2008"},{"des":"Windows Server 2012"},{"des":"Windows Vista"},{"des":"Windows XP"},{"des":"WinForm"},{"des":"WinRunner"},{"des":"WLAN"},{"des":"WML"},{"des":"Word"},{"des":"Wordperfect"},{"des":"WPS"},{"des":"X.25"},{"des":"X400"},{"des":"XDE Tester"},{"des":"XDSL"},{"des":"XHTML"},{"des":"XML"},{"des":"XML Web services"},{"des":"Xrunner"},{"des":"XSL"},{"des":"XSLT"},{"des":"XSP"},{"des":"Zbrush"},{"des":"北大方正"},];
	//write function
	$scope.skillFun=function(item){
		$scope.keyword=item.des;
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
		if(index!='-1'){this.myskills.splice(item,1);}
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