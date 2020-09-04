function createButton(val){
	var ele = document.createElement('input')
	ele.setAttribute('class','button')
	ele.setAttribute('type','button')
	ele.setAttribute('value',val)
	ele.setAttribute('id',val)
	if (val==='0'){
		ele.style.width = '112px'
	}
	if(val==='='){
		ele.style.height = '112px'
	}
	return ele
}
function insert(num){
	num=""+num
	document.forms[0].textview.value = document.forms[0].textview.value+num
}
function c(){
	document.forms[0].textview.value = ""
}
function back(){
	var exp = document.forms[0].textview.value
	document.forms[0].textview.value = exp.substring(0,exp.length-1)
}
function equals(){
	var value = document.forms[0].textview.value
	if(value){
		document.forms[0].textview.value = eval(document.forms[0].textview.value)
	}
}


var container = document.createElement('div')
var form1 = document.createElement('form')
var display = document.createElement('input')
display.setAttribute('name','textview')
display.setAttribute('class','textview')
var form2 = document.createElement('form')
var main_table = document.createElement('table')
var rows ={'table_row_1' : ['C','<','/','*'],'table_row_2' : ['7','8','9','-'],'table_row_3' : ['4','5','6','+'],'table_row_4' : ['1','2','3','='],'table_row_5' : ['0','.']}

for(var k in rows){
	var table_row = document.createElement('tr')
	for(var v of rows[k]){
		var table_td = document.createElement('td')
		if (v==='0'){
			table_td.setAttribute('colspan','2')
		}
		if(v==='='){
			table_td.setAttribute('rowspan','2')
		}
		table_td.appendChild(createButton(v))
		table_row.appendChild(table_td)
	}
	main_table.appendChild(table_row)
}
container.append(form1,form2)
form1.appendChild(display)
form2.appendChild(main_table)
document.body.appendChild(container)
document.getElementById('1').setAttribute('onclick','insert("1")')
document.getElementById('2').setAttribute('onclick','insert("2")')
document.getElementById('3').setAttribute('onclick','insert("3")')
document.getElementById('4').setAttribute('onclick','insert("4")')
document.getElementById('5').setAttribute('onclick','insert("5")')
document.getElementById('6').setAttribute('onclick','insert("6")')
document.getElementById('7').setAttribute('onclick','insert("7")')
document.getElementById('8').setAttribute('onclick','insert("8")')
document.getElementById('9').setAttribute('onclick','insert("9")')
document.getElementById('0').setAttribute('onclick','insert("0")')
document.getElementById('.').setAttribute('onclick','insert(".")')
document.getElementById('+').setAttribute('onclick','insert("+")')
document.getElementById('-').setAttribute('onclick','insert("-")')
document.getElementById('*').setAttribute('onclick','insert("*")')
document.getElementById('/').setAttribute('onclick','insert("/")')
document.getElementById('C').setAttribute('onclick','c()')
document.getElementById('<').setAttribute('onclick','back()')
document.getElementById('=').setAttribute('onclick','equals()')
