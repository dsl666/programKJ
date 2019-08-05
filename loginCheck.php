<?php
	header("Content-type:text/html;charset=utf-8");

	//1接收前端数据
	$username=$_POST['username'];
	$userpass=$_POST['userpass'];

	//2保存
	//1建立连接
	$conn=mysql_connect('localhost','root','root');

	if(!$conn){
		echo "连接失败";
	}

	//2 选择数据库
	mysql_select_db('project',$conn);
	//3 执行sql数据
	$sqlstr="select * from usertable where username='$username' and userpass='$userpass'";
	$result=mysql_query($sqlstr);
	///4关闭数据库
		mysql_close($conn);
	//3 响应
		$rows=mysql_num_rows($result);

		if($rows==1){
			echo "亲，登录成功";
			// header('Location:index.html');
		}else {
			echo "登录失败";
		}


?>