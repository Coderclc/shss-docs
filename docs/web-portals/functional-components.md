# 功能组件

## 弹窗功能

弹框的功能不管是在传统开发中还是如今比较流行的前后端分离开发中都是比较常见的功能，如：添加、编辑、确认框提示等等(当前页可以直接打开新页面)， 为了解决这个问题，我们封装了弹框组件，根据使用场景的不同，框架做了继承开发，调用时只需要传入相应的参数即可。

函数主体：

```
open: function (title, url, width, height, callback) {
	//如果是移动端，就使用自适应大小弹窗
	if ($.common.isMobile()) {
		width = 'auto';
		height = 'auto';
	}
	if ($.common.isEmpty(title)) {
		title = false;
	}
	if ($.common.isEmpty(url)) {
		url = "/404.html";
	}
	if ($.common.isEmpty(width)) {
		width = 800;
	}
	if ($.common.isEmpty(height)) {
		height = ($(window).height() - 50);
	}
	if ($.common.isEmpty(callback)) {
		callback = function(index, layero) {
			var iframeWin = layero.find('iframe')[0];
			iframeWin.contentWindow.submitHandler(index, layero);
		}
	}
	layer.open({
		type: 2,
		area: [width + 'px', height + 'px'],
		fix: false,
		//不固定
		maxmin: true,
		shade: 0.3,
		title: title,
		content: url,
		btn: ['确定', '关闭'],
		// 弹层外区域关闭
		shadeClose: true,
		yes: callback,
		cancel: function(index) {
			return true;
		}
	});
},
```

参数说明：

- title 弹窗标题，这个标题是在弹框的左上角显示的标题文字
- url URL 地址，这个是弹框调用的方法地址，比如添加、编辑时需要调用页面表单地址的方法
- width 弹窗宽度，一个数值(不传时默认弹窗自适应显示)
- height 弹窗高度，一个数值(不传时默认弹窗自适应显示)
- callback 回调函数，弹窗成功弹出之后会默认进行回调

调用方式：

```
// 普通调用
$.modal.open("标题内容", url);

// 设置宽高
$.modal.open("标题内容", url, '770', '380');

// 设置回调函数
$.modal.open("标题内容", url, '770', '380', function(index, layero) {
	// 获取弹窗参数（方式一）
	var body = layer.getChildFrame('body', index);
	console.log(body.find('#id').val());
	// 获取弹窗参数（方式二）
    console.log($(layero).find("iframe")[0].contentWindow.document.getElementById("id").value);
});
```

## 新增功能

新增方法我们写一个共用的方法 add，下面我们详细的描述下，新增时是如何弹出窗体的。

函数主体：

```
// 添加信息
add: function(id) {
	table.set();
	$.modal.open("添加" + table.options.modalName, $.operate.addUrl(id));
},

// 添加访问地址
addUrl: function(id) {
	var url = $.common.isEmpty(id) ? table.options.createUrl.replace("{id}", "") : table.options.createUrl.replace("{id}", id);
	return url;
},
```

后端代码：

```
// 添加方法（默认）
@GetMapping("/add")
public String add()
{
	return prefix + "/add";
}

// 添加方法（带id参数）
@GetMapping("/add/{xxId}")
public String add(@PathVariable("xxId") Long xxId, ModelMap mmap)
{
	mmap.put("xxxx", xxxxService.selectXxxxById(xxId));
	return prefix + "/add";
}
```

参数说明：

id 需要传入到后台的唯一标识

总结：add 方法里面进行了判断存在 ID 则进行内容替换，然后进行调用弹窗操作。操作 table.options.createUrl 地址，弹窗 table.options.modalName 标题

调用方式：

```
// 普通调用
$.operate.add()

// 传参调用，例如：/system/user/add/{1} 会被替换为 /system/user/add/1
$.operate.add(1)
```

## 修改功能

修改方法我们写一个共用的方法 edit，下面我们详细的描述下，修改时是如何弹出窗体的。

函数主体

```
/ 修改信息
edit: function(id) {
	table.set();
	if($.common.isEmpty(id) && table.options.type == table_type.bootstrapTreeTable) {
		var row = $("#" + table.options.id).bootstrapTreeTable('getSelections')[0];
		if ($.common.isEmpty(row)) {
			$.modal.alertWarning("请至少选择一条记录");
			return;
		}
		var url = table.options.updateUrl.replace("{id}", row[table.options.uniqueId]);
		$.modal.open("修改" + table.options.modalName, url);
	} else {
		$.modal.open("修改" + table.options.modalName, $.operate.editUrl(id));
	}
},

// 修改访问地址
editUrl: function(id) {
	var url = "/404.html";
	if ($.common.isNotEmpty(id)) {
		url = table.options.updateUrl.replace("{id}", id);
	} else {
		var id = $.common.isEmpty(table.options.uniqueId) ? $.table.selectFirstColumns() : $.table.selectColumns(table.options.uniqueId);
		if (id.length == 0) {
			$.modal.alertWarning("请至少选择一条记录");
			return;
		}
		url = table.options.updateUrl.replace("{id}", id);
	}
	return url;
},
```

后端代码：

```
// 修改方法
@GetMapping("/edit/{xxId}")
public String edit(@PathVariable("xxId") Long xxId, ModelMap mmap)
{
	mmap.put("xxxx", xxxxService.selectXxxxById(xxId));
	return prefix + "/edit";
}
```

参数说明：

id 需要传入到后台的唯一标识

总结：edit 方法里面进行了判断存在 ID 则进行内容替换，然后进行调用弹窗操作。优先级：传参 ID 值 -> 选择 uniqueId 列值 -> 选择首列值操作 table.options.updateUrl 地址，table.options.uniqueId 唯一的标识符，弹窗 table.options.modalName 标题

调用方式：

```
// 普通调用
$.operate.edit()

// 传参调用，例如：/system/user/edit/{1} 会被替换为 /system/user/edit/1
$.operate.edit(1)
```
