    //使用内嵌式定义函数calc()
	function calc()
	{
		//获取id为input1输入域的值，并赋给变量dividend
		var dividend = document.getElementById("input1").value;
		//获取id为input2输入域的值，并赋给变量divisor
		var divisor = document.getElementById("input2").value;
		var result = 0;
		result = dividend / divisor;
		//弹出对话框，显示计算结果
		alert("运行结果：" + dividend + " / " + divisor + " = " +result );	
	}// JavaScript Document