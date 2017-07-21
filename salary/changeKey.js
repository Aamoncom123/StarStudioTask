function loadXMLDoc()
{
	var xmlhttp=new XMLHttpRequest();
  var arr={};
  var data={};
	var password=document.getElementsByName('password');
	var passwordF=document.getElementsByName('passwordF');
	var passwordS=document.getElementsByName('passwordS');
  arr={"password":password[0].value,
  		 "passwordF":passwordF[0].value,
			 "passwordS":passwordS[0].value};
					console.log(arr);
  data= JSON.stringify(arr);
  var url="http://www.jiangtaoxh.xyz/retirement/salary/changePassword";
	xmlhttp.onreadystatechange=function()
	{
		if ( xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			console.log(xmlhttp.responseText);
			var reply=JSON.parse(xmlhttp.responseText);
			console.log(reply);
			if(reply.errorCode==11){
			alert(reply.errorMsg);
		}else{
			alert("修改成功");
			window.location.href='http://localhost:3111/salary/refer.html';
		}
	}

	}
	xmlhttp.open("POST",url,true);
	xmlhttp.send(data);
}
