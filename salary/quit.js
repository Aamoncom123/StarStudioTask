function loadXMLDoc()
{
	var xmlhttp=new XMLHttpRequest();
  var url="http://www.jiangtaoxh.xyz/retirement/salary/unBound";
	xmlhttp.onreadystatechange=function()
	{
		if ( xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			var reply=JSON.parse(xmlhttp.responseText);
			console.log(reply);
	}
	}
	xmlhttp.open("POST",url,true);
	xmlhttp.send();
}
