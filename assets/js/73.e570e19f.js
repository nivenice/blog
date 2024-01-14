(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{356:function(t,v,_){"use strict";_.r(v);var d=_(14),a=Object(d.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),v("h2",{attrs:{id:"字符串函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#字符串函数"}},[t._v("#")]),t._v(" 字符串函数")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("函数")]),t._v(" "),v("th",[t._v("功能")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("concat(S1, S2,...Sn)")]),t._v(" "),v("td",[t._v("字符串拼接、，将所有字段拼为一个字符串")])]),t._v(" "),v("tr",[v("td",[t._v("lower(str)")]),t._v(" "),v("td",[t._v("将字符串全部转为小写")])]),t._v(" "),v("tr",[v("td",[t._v("upper(str)")]),t._v(" "),v("td",[t._v("将字符串转为大写")])]),t._v(" "),v("tr",[v("td",[t._v("lpad(str, n, pad)")]),t._v(" "),v("td",[t._v("左填充，用字符串pad对str的左边进行填充，达到n个字符串长度")])]),t._v(" "),v("tr",[v("td",[t._v("rpad(str, n, pad)")]),t._v(" "),v("td",[t._v("右填充")])]),t._v(" "),v("tr",[v("td",[t._v("trim(str)")]),t._v(" "),v("td",[t._v("去掉字符串两边的空格")])]),t._v(" "),v("tr",[v("td",[t._v("substring(str, start, len)")]),t._v(" "),v("td",[t._v("返回从字符串str从start位置起的len长度的字符串")])])])]),t._v(" "),v("h2",{attrs:{id:"数值函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数值函数"}},[t._v("#")]),t._v(" 数值函数")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("函数")]),t._v(" "),v("th",[t._v("功能")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("ceil(x)")]),t._v(" "),v("td",[t._v("向上取整")])]),t._v(" "),v("tr",[v("td",[t._v("floor(x)")]),t._v(" "),v("td",[t._v("向下取整")])]),t._v(" "),v("tr",[v("td",[t._v("mod(x, y)")]),t._v(" "),v("td",[t._v("返回x/y的模")])]),t._v(" "),v("tr",[v("td",[t._v("rand()")]),t._v(" "),v("td",[t._v("返回0~1内的随机数")])]),t._v(" "),v("tr",[v("td",[t._v("round(x,y)")]),t._v(" "),v("td",[t._v("求参数x的四舍五入的值，保留y位小数")])])])]),t._v(" "),v("h2",{attrs:{id:"日期函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#日期函数"}},[t._v("#")]),t._v(" 日期函数")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("函数")]),t._v(" "),v("th",[t._v("功能")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("curdate()")]),t._v(" "),v("td",[t._v("返回当前日期")])]),t._v(" "),v("tr",[v("td",[t._v("curtime()")]),t._v(" "),v("td",[t._v("返回当前时间")])]),t._v(" "),v("tr",[v("td",[t._v("now()")]),t._v(" "),v("td",[t._v("返回当前日期和时间")])]),t._v(" "),v("tr",[v("td",[t._v("year(date)")]),t._v(" "),v("td",[t._v("获取指定date的年份")])]),t._v(" "),v("tr",[v("td",[t._v("month(date)")]),t._v(" "),v("td",[t._v("获取指定date的月份")])]),t._v(" "),v("tr",[v("td",[t._v("day(date)")]),t._v(" "),v("td",[t._v("获取指定date的日期")])]),t._v(" "),v("tr",[v("td",[t._v("date_add(date, INTERVAL "),v("expr",[v("type",[t._v(")")])],1)],1),t._v(" "),v("td",[t._v("返回 date 加上时间间隔expr后的type值，例 date_add(now(), INTERVAL 70 DAY); 当前时间往后70天的值")])]),t._v(" "),v("tr",[v("td",[t._v("datadiff(date1, date2)")]),t._v(" "),v("td",[t._v("返回其实时间date1与结束时间date2之间的天数")])])])]),t._v(" "),v("h2",{attrs:{id:"流程函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#流程函数"}},[t._v("#")]),t._v(" 流程函数")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("函数")]),t._v(" "),v("th",[t._v("功能")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("if(value, t, f)")]),t._v(" "),v("td",[t._v("如果value为true则返回t，否则返回f")])]),t._v(" "),v("tr",[v("td",[t._v("ifnull(value1, value2)")]),t._v(" "),v("td",[t._v("如果value1为空 则返回value2")])]),t._v(" "),v("tr",[v("td",[t._v("case when [val1] then [res1] [when a then b...] else [default] end")]),t._v(" "),v("td",[t._v("如果val1 为true返回res1...,否则返回default 默认值")])]),t._v(" "),v("tr",[v("td",[t._v("case [expr] when [val1] then [res1] [when a then b...] else [default] end")]),t._v(" "),v("td",[t._v("如果expr值等于val1返回res1... 否则返回default")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);