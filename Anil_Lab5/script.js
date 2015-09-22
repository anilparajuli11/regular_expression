function cellvalidate()
{
		document.write("Sample cell phone number: +97798********");
		var cellNum = prompt("Enter cell phone number to check:");
		var start = /^(\+97798)([0-9]{8})$/; 		
		document.write("<br>You entered <b>"+cellNum+"</b>");
		if(cellNum.match(start))
		{
			document.write("<br><br>Entered phone number is <b>VALID.</b>");
		}
		else
		{
			document.write("<br><br>Entered phone number is <b>INVALID.</b>");
		}
}


function domaintest()
{
		document.write("Sample domain name: <br><br>www.domainname.com<br>www.domainname.net<br>www.domainname.edu<br>domainname.com<br>domainname.net<br>domainname.edu<br>");
		var domainName = prompt("Enter domain name to check:");
		var domainCheck = /((w{3}).)?([a-z0-9\-])+((.com)|(.net)|(.edu))$/; 		
		document.write("<br>You entered <b>"+domainName+"</b>");
		if(domainCheck.test(domainName))
		{
			document.write("<br><br>Entered domain name is <b>VALID.</b>");
		}
		else
		{
			document.write("<br><br>Entered domain name is <b>INVALID.</b>");
		}
}
 

 function checkvalue()
 {

 		document.write("Sample string (must have A-Z, a-z, - or _):<br>");
		var stringName = prompt("Enter string to check containing ");
		var stringCheck = /((a-zA-Z)|_|-)/;  
		document.write("<br>You entered <b>"+stringName+"</b>");
		if(stringCheck.test(stringName))
		{
			document.write("<br><br>Entered string contains alpha or dash or underscore");
		}
		else
		{
			document.write("<br><br>Entered string does not contain alpha or dash or underscore");
		}
}

function question4()
{
		document.write("Sample date: <br>mm/dd/yyyy<br>m/dd/yyyy<br>mm/d/yyyy<br>m/d/yyyy<br>");
		var dateEntered = prompt("Enter date to check:");
		var dateCheck = /^(1[0-2]|[1-9])\/([1-9]|[1-2][0-9]|3[0-2])\/([0-9]{4})$/;	  
		if(dateCheck.test(dateEntered))
		{
			document.write("<br><br>Entered date is <b>VALID.</b>");
		}
		else
		{
			document.write("<br><br>Entered date is <b>INVALID.</b>");
		}
}

function question5()
{

	document.write("Sample date: <br>hh:mm:ss<br>h:mm:ss");
		var timeEntered = prompt("Enter time to check:");
		var timeCheck = /^(2[0-3]|1[0-9]|[0-9]):([0-9]|[1-5][0-9]):([0-9]|[1-5][0-9])$/;	
		if(timeCheck.test(timeEntered))
		{
			document.write("<br><br>Entered time is <b>VALID.</b>");
		}
		else
		{
			document.write("<br><br>Entered time is <b>INVALID.</b>");
		}
}

function question6()
{

	document.write("Sample hex color: <br>#123456<br>#ABCDE<br>#abcd<br>#A1d<br>#12ABcd");
		var hexEntered = prompt("Enter hex color value to check:");
		var hexCheck = /^#([0-9]|[a-f]|[A-F]){1,6}$/;	
		document.write("<br>You entered <b>"+hexEntered+"</b>");
		if(hexCheck.test(hexEntered)){
			document.write("<br><br>Entered hex color value is <b>VALID.</b>");
		}
		else{
			document.write("<br><br>Entered hex color value is <b>INVALID.</b>");
		}
	}