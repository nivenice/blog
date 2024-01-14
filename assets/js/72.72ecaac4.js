(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{352:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"约束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#约束"}},[t._v("#")]),t._v(" 约束")]),t._v(" "),s("ol",[s("li",[t._v("概念： 约束是作用于表中字段上的规则，用于限制在表中的数据。")]),t._v(" "),s("li",[t._v("目的：保证数据库中数据的正确、有效性和完整性。")]),t._v(" "),s("li",[t._v("分类：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("约束")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("关键字")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("非空约束")]),t._v(" "),s("td",[t._v("限制该字段的数据不能为 null")]),t._v(" "),s("td",[t._v("not nulll")])]),t._v(" "),s("tr",[s("td",[t._v("唯一约束")]),t._v(" "),s("td",[t._v("保证该字段的所有数据都是唯一、不重复的")]),t._v(" "),s("td",[t._v("unique")])]),t._v(" "),s("tr",[s("td",[t._v("主键约束")]),t._v(" "),s("td",[t._v("主键是一行数据的唯一标识，要求非空且唯一")]),t._v(" "),s("td",[t._v("primary key")])]),t._v(" "),s("tr",[s("td",[t._v("默认约束")]),t._v(" "),s("td",[t._v("保存数据时，如果未指定该字段的值，则采用默认值")]),t._v(" "),s("td",[t._v("default")])]),t._v(" "),s("tr",[s("td",[t._v("检查榆树(8.0.16版本之后)")]),t._v(" "),s("td",[t._v("保证字段值满足某一个条件")]),t._v(" "),s("td",[t._v("check")])]),t._v(" "),s("tr",[s("td",[t._v("外键约束")]),t._v(" "),s("td",[t._v("用来让两张表的数据之间建立连接，保证数据的一致性和完整性")]),t._v(" "),s("td",[t._v("foreign key")])])])]),t._v(" "),s("h2",{attrs:{id:"约束演示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#约束演示"}},[t._v("#")]),t._v(" 约束演示")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 建表使用约束")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" Test "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto_increment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unique")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'测试'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 修改字段")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" Test "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("modify")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto_increment")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'唯一标识'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"外键约束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#外键约束"}},[t._v("#")]),t._v(" 外键约束")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("概念：外键用来让两张表的数据之间建立连接，从而保证数据的一致性与完整性。")])]),t._v(" "),s("li",[s("p",[t._v("具有外键的表称为==子表==，被外键关联的称为==父表==")])]),t._v(" "),s("li",[s("p",[t._v("语法：")]),t._v(" "),s("ol",[s("li",[t._v("添加外键")])])])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" Test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constraint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("外键名称"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" froeign "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("外键字段名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("references")]),t._v(" 主表 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("主表列名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" table_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constraint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("外键名称"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreign")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("外键字段名称"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("references")]),t._v(" 主表"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("主表列名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("删除外键")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" table_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("drop")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreign")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" 外键名称"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("触发主表"),s("code",[t._v("删除/更新")]),t._v("行为")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("行为")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("no action")]),t._v(" "),s("td",[t._v("当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则不允许删除/更新")])]),t._v(" "),s("tr",[s("td",[t._v("restrict")]),t._v(" "),s("td",[t._v("与 no action 一致")])]),t._v(" "),s("tr",[s("td",[t._v("cascade")]),t._v(" "),s("td",[t._v("当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有，则也删除/更新外键在子表中的记录")])]),t._v(" "),s("tr",[s("td",[t._v("set null")]),t._v(" "),s("td",[t._v("当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则设置子表中该外键值为null(需要当前字段允许为null)")])]),t._v(" "),s("tr",[s("td",[t._v("set default")]),t._v(" "),s("td",[t._v("父表有变更时，子表将外键列设置成一个默认的值")])])])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" table_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constraint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("外键名称"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreign")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("外键字段名称"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("references")]),t._v(" 主表"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("主表列名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("cascade")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("cascade")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);