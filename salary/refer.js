function loadXMLDoc()
{
var xmlhttp=new XMLHttpRequest();
var arr={};
var data={};
var year=document.getElementById('year');
var month=document.getElementById('month');
var str=year.value+month.value;
arr={str};
data= JSON.stringify(arr);
var url="http://www.jiangtaoxh.xyz/retirement/salary/show";
xmlhttp.onreadystatechange=function()
{
  if ( xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var reply=JSON.parse(xmlhttp.responseText);
      var gzny,gh,xm,ltxf,ylj,shbt,jtf,hlf,qyjbt,bf,sf,df,qf,fz,wgf,yhhhf,lskf,zc,yfhj,kkhj,sfgz;
      var list=["gzny","gh","xm","ltxf","ylj","shbt","jtf","hlf","qyjbt","bf","sf","df","qf","fz","wgf","yhhhf","lskf","zc","yfhj","kkhj","sfgz"];
      list[0]=reply.data["gzny"];
      list[1]=reply.data["gh"];
      list[2]=reply.data["xm"];
      list[3]=reply.data["ltxf"];
      list[4]=reply.data["ylj"];
      list[5]=reply.data["shbt"];
      list[6]=reply.data["jtf"];
      list[7]=reply.data["hlf"];
      list[8]=reply.data["qyjbt"];
      list[9]=reply.data["bf"];
      list[10]=reply.data["sf"];
      list[11]=reply.data["df"];
      list[12]=reply.data["qf"];
      list[13]=reply.data["fz"];
      list[14]=reply.data["wgf"];
      list[15]=reply.data["yhhhf"];
      list[16]=reply.data["lskf"];
      list[17]=reply.data["zc"];
      list[18]=reply.data["yfhj"];
      list[19]=reply.data["kkhj"];
      list[20]=reply.data["sfgz"];
      for (var i = 0; i < list.length; i++) {
        var td=document.getElementById("td"+i);
        td.innerHTML="";
        var node=document.createTextNode(list[i]);
        td.appendChild(node);
      }
    }
  }
xmlhttp.open("GET",url,true);
xmlhttp.send(data);
}

/*window.onload=function(){
  var container=document.getElementsByClassName("container");
  var a2=document.createElement("tr");
  var a3=document.createElement("td");
  for (var i = 0; i < 2; i++) {
    a2.appendChild(a3);
  }
  for (var i = 0; i < 21; i++) {
  document.getElementById("table").appendChild(a2);
  }
}
/*  if ( xmlhttp.readyState==4 && xmlhttp.status==200)
  {
    var reply=JSON.parse(xmlhttp.responseText);
    console.log(reply.data);
    var id=reply.data["id"];
    var para=document.createElement("p");
    var node=document.createTextNode(id);
    para.appendChild(node);
    var element=document.getElementById("table");
    element.appendChild(para);
  }*/
