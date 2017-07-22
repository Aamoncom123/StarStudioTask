function loadXMLDoc()
{
	var xmlhttp=new XMLHttpRequest();
  var arr={};
  var data={};
	var aa=document.getElementsByName('account');
	var bb=document.getElementsByName('password');
  arr={"account":aa[0].value,
  			"password":bb[0].value};
  data= JSON.stringify(arr);
	console.log(data);
  var url="http://www.jiangtaoxh.xyz/retirement/salary/bound";
	xmlhttp.onreadystatechange=function()
	{
		if ( xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			var reply=JSON.parse(xmlhttp.responseText);
			if(reply.errorMsg){
			alert(reply.errorMsg);
		}
	}

	}
	xmlhttp.open("POST",url,true);
	xmlhttp.send(data);
}
