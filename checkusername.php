<?php
	header("Content-type:text/html;charset=utf-8");
	//一1 接受前端的数据
	$username=$_GET["username"];
	//二保存
	//二 1 建立连接
	$conn =mysql_connect('localhost','root','root');

	if(!$conn){
		echo "连接失败";
	}
	//二2 选择数据库
	mysql_select_db('project',$conn);

	//二 3 执行sql语句
	$sqlstr="select * from usertable where username='$username'";
	$result=mysql_query($sqlstr);

	//二 4 关闭数据库
		mysql_close($conn);
	//三 响应 半段查询出来的表格行数
		$rows=mysql_num_rows($result);
		if($rows==1){
			echo 1;
		}else{
			echo 0;
		}
?>