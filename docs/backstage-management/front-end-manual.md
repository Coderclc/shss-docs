# 前端手册

## 前端组件

封装了一些常用的 JS 组件方法。

| 名称     | 代码        | 介绍             |
| -------- | ----------- | ---------------- |
| 表格     | $.table     | 表格封装处理     |
| 表格树   | $.treeTable | 表格树封装处理   |
| 表单     | $.form      | 表单封装处理     |
| 弹出层   | $.modal     | 弹出层封装处理   |
| 操作     | $.operate   | 操作封装处理     |
| 校验     | $.validate  | 校验封装处理     |
| 树插件   | $.tree      | 树插件封装处理   |
| 通用方法 | $.common    | 通用方法封装处理 |

## 通用方法

### 表格方法

| 方法 | 参数 | 介绍 |
| --- | --- | --- |
| $.table.init(); | options（选项参数） | 初始化表格参数 |
| $.table.search(); | formId（表单 ID, 表格 ID, 追加数据） | 搜索-默认第一个 form |
| $.table.exportExcel(); | formId（表单 ID） | 导出-默认第一个 form |
| $.table.importExcel(); | formId（表单 ID） | 导入-默认 importForm |
| $.table.importTemplate(); | formId（表单 ID） | 模板下载 |
| $.table.refresh(); | 无 | 刷新表格 |
| $.table.selectColumns(); | column（查询列值） | 查询表格指定列值 |
| $.table.selectFirstColumns(); | 无 | 查询表格首列值 |
| $.table.destroy(); | tableId（表格 ID） | 销毁表格-默认 `options.id` |
| $.table.serialNumber(); | index（序号） | 序列号生成 |
| $.table.dropdownToggle(); | value（内容） | 下拉按钮切换 |
| $.table.imageView(); | value（内容）, height, width, target（打开方式） | 图片预览 |
| $.table.showColumn(); | column（列值）, tablbeId（表格 ID） | 显示表格指定列 |
| $.table.hideColumn(); | column（列值）, tablbeId（表格 ID） | 隐藏表格指定列 |
| $.table.showAllColumns(); | tableId（表格 ID） | 显示所有表格列 |
| $.table.hideAllColumns(); | tableId（表格 ID） | 隐藏所有表格列 |
| $.table.tooltip(); | value（内容）, length（截取长度）, target（显示方式） | 超出指定长度浮动提示 |
| $.table.selectDictLabel(); | datas（字典列表）, value（当前值） | 回显数据字典 |
| $.treeTable.init(); | options（选项参数） | 初始化表格树参数 |
| $.treeTable.search(); | formId（表单 ID） | 搜索-默认第一个 form |
| $.treeTable.refresh(); | 无 | 刷新表格树 |

### 表单方法

| 方法                     | 参数                       | 介绍              |
| ------------------------ | -------------------------- | ----------------- | ---------------- |
| $.form.reset();          | formId（表单 ID, 表格 ID） | 表单重置          |
| $.form.selectCheckeds(); |                            | name（name 名称） | 获取选中复选框项 |
| $.form.selectSelects();  | name（id 名称）            | 获取选中下拉框项  |

### 弹层方法

| 方法 | 参数 | 介绍 |
| --- | --- | --- |
| $.modal.icon | type（图标类型） | 显示图标 |
| $.modal.msg | content（内容）, type（图标类型） | 消息提示 |
| $.modal.msgError(); | content（内容） | 错误消息 |
| $.modal.msgSuccess(); | content（内容） | 成功消息 |
| $.modal.msgWarning(); | content（内容） | 警告消息 |
| $.modal.alert | content（内容）, type（图标类型） | 消息提示 |
| $.modal.alertError(); | content（内容） | 错误提示 |
| $.modal.alertSuccess(); | content（内容） | 成功提示 |
| $.modal.alertWarning(); | content（内容） | 警告提示 |
| $.modal.msgReload | msg（消息）, type（图标类型） | 消息提示，重新加载页面 |
| $.modal.msgSuccessReload | msg（消息） | 消息提示成功并刷新父窗体 |
| $.modal.close(); | 无 | 关闭窗体 |
| $.modal.closeAll | 无 | 关闭全部窗体 |
| $.modal.confirm(); | content（内容）, callBack（回调函数） | 确认窗体 |
| $.modal.open(); | title, url, width, height, callBack（回调函数） | 弹出层指定宽度 |
| $.modal.openOptions(); | options（选项参数） | 弹出层指定参数选项 |
| $.modal.openFull(); | title, url, width, height | 弹出层全屏 |
| $.modal.openTab(); | title（标题）, url（地址） | 选卡页方式打开 |
| $.modal.parentTab(); | title（标题）, url（地址） | 选卡页同一页签打开 |
| $.modal.closeTab(); | dataId（地址） | 关闭选项卡 |
| $.modal.disable | 无 | 禁用按钮 |
| $.modal.enable | 无 | 启用按钮 |
| $.modal.loading(); | message（提示消息） | 打开遮罩层 |
| $.modal.closeLoading(); | 无 | 关闭遮罩层 |
| $.modal.reload(); | 无 | 重新加载 |

### 操作方法

| 方法 | 参数 | 介绍 |
| --- | --- | --- |
| $.operate.submit(); | url, type, dataType, data, callback（回调函数） | 提交数据 |
| $.operate.post(); | url（地址）, data（数据）, callback（回调函数） | post 方式请求提交数据 |
| $.operate.get(); | url（地址）, callback（回调函数） | get 请求传输数据 |
| $.operate.detail(); | id（数据 ID） | 详细信息 |
| $.operate.remove(); | id（数据 ID） | 删除信息 |
| $.operate.removeAll(); | 无 | 批量删除信息 |
| $.operate.clean(); | 无 | 清空信息 |
| $.operate.add(); | id（数据 ID） | 添加信息 |
| $.operate.addTab(); | id（数据 ID） | 添加信息（选项卡方式） |
| $.operate.addFull(); | id（数据 ID） | 添加信息 全屏 |
| $.operate.addUrl(); | id（数据 ID） | 添加访问地址 |
| $.operate.edit(); | id（数据 ID） | 修改信息 |
| $.operate.editTab(); | id（数据 ID） | 修改信息（选项卡方式） |
| $.operate.editFull(); | id（数据 ID） | 修改信息 全屏 |
| $.operate.editUrl(); | id（数据 ID） | 修改访问地址 |
| $.operate.save(); | url（地址）, data（数据）, callback（回调函数） | 保存信息 |
| $.operate.saveModal(); | url（地址）, data（数据）, callback（回调函数） | 保存信息 弹出结果提示框 |
| $.operate.saveTab(); | url（地址）, data（数据）, callback（回调函数） | 保存选项卡信息 |
| $.operate.ajaxSuccess(); | result（返回结果） | 保存结果弹出 msg 刷新 table 表格 |
| $.operate.saveReload(); | result（返回结果） | 保存结果重新加载页面 |
| $.operate.successCallback(); | result（返回结果） | 成功回调执行事件（静默更新） |
| $.operate.successTabCallback(); | result（返回结果） | 选项卡成功回调执行事件（静默更新） |
| $.validate.unique(); | value（返回标识） | 判断返回标识是否唯一 |
| $.validate.form(); | formId（表单 ID） | 表单验证-默认第一个 form |
| $.validate.reset(); | formId（表单 ID） | 重置表单验证（清除提示信息） |

### 通用方法

| 方法 | 参数 | 介绍 |
| --- | --- | --- |
| $.tree.init(); | options（选项参数） | 初始化树结构 |
| $.tree.searchNode(); | 无 | 搜索节点 |
| $.tree.selectByIdName(); | treeId, treeName, node | 根据 ID 和 Name 选择节点 |
| $.tree.showAllNode(); | nodes（全部节点数据） | 显示所有节点 |
| $.tree.hideAllNode(); | nodes（全部节点数据） | 隐藏所有节点 |
| $.tree.showParent(); | nodes（全部节点数据） | 显示所有父节点 |
| $.tree.showChildren(); | nodes（全部节点数据） | 显示所有子节点 |
| $.tree.updateNodes(); | nodeList（全部节点数据） | 更新节点状态 |
| $.tree.getCheckedNodes(); | column（列值） | 获取当前选中的集合 |
| $.tree.notAllowParents(); | \_tree（树对象） | 不允许根节点选择 |
| $.tree.toggleSearch(); | 无 | 隐藏/显示搜索栏 |
| $.tree.collapse(); | 无 | 树折叠 |
| $.tree.expand(); | 无 | 树展开 |
| $.common.isEmpty(); | value（值） | 判断字符串是否为空 |
| $.common.isNotEmpty(); | value（值） | 判断一个字符串是否为非空串 |
| $.common.nullToStr(); | value（值） | 空对象转换字符串 |
| $.common.visible(); | value（值） | 是否显示数据 为空默认为显示 |
| $.common.trim(); | value（值） | 空格截取 |
| $.common.equals(); | str（比较值 1）, that（比较值 2） | 比较两个字符串（大小写敏感） |
| $.common.equalsIgnoreCase(); | str（比较值 1）, that（比较值 2） | 比较两个字符串（大小写不敏感） |
| $.common.split(); | str（值）, sep（分隔符）, maxLen（最大长度） | 将字符串按指定字符分割 |
| $.common.sprintf(); | str（值） | 字符串格式化(%s ) |
| $.common.dateFormat(); | date（日期）, format（日期格式） | 日期格式化（yyyy-MM-dd HH-mm-ss） |
| $.common.getItemField(); | item（数据）, field（属性） | 获取节点数据，支持多层级访问 |
| $.common.random(); | min（最小）, max（最大） | 指定随机数返回 |
| $.common.startWith(); | value（值）, start（开始值） | 判断字符串是否以 start 开头 |
| $.common.endsWith(); | value（值）, end（结束值） | 判断字符串是否以 end 结尾 |
| $.common.uniqueFn(); | array（数组） | 数组去重 |
| $.common.join(); | array（数组）, separator（分隔符） | 数组中的所有元素放入一个字符串 |
| $.common.formToJSON(); | formId（表单 ID） | 获取 form 下所有的字段并转换为 json 对象 |
| $.common.dictToSelect(); | datas（字典数据）, value（值）, name（属性名） | 数据字典转换下拉框 |
| $.common.getLength(); | obj（对象） | 获取 obj 对象长度 |
| $.common.isMobile(); | 无 | 判断移动端 |
| $.common.numValid(); | text（值） | 验证一个数字表达式，必须是 0-9 数字 |
| $.common.enValid(); | text（值） | 验证一个英文表达式，必须是 az 和 AZ 字母 |
| $.common.enNumValid(); | text（值） | 英文、数字正则表达式，必须包含（字母，数字） |
| $.common.charValid(); | text（值） | 英文、数字、特殊字符正则表达式，必须包含（字母，数字，特殊字符！@#$%^&\*()-=\_+） |

## 表格使用

表格组件基于 bootstrap-table 组件进行封装，轻松实现数据表格。

- 表格初始化方法 `$.table.init`

### 表的各项

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| url | String | Null | 请求后台的 URL |
| uniqueId | String | Null | 指定唯一列属性 配合删除/修改使用 未指定则使用表格行首列 |
| createUrl | String | Null | 新增 URL 配合使用 $.operate.add()，$.operate.addTab() |
| updateUrl | String | Null | 修改 URL 配合使用 $.operate.edit()，$.operate.editTab() |
| removeUrl | String | Null | 删除 URL 配合使用 $.operate.remove() |
| exportUrl | String | Null | 导出 URL 配合使用 $.table.exportExcel() |
| importUrl | String | Null | 导入 URL 配合使用 $.table.importExcel() |
| detailUrl | String | Null | 详细 URL 配合使用 $.operate.detail() |
| cleanUrl | String | Null | 清空 URL 配合使用 $.operate.clean() |
| importTemplateUrl | String | Null | 模板 URL 配合使用 $.table.importTemplate() |
| height | String | undefined | 表格的高度 |
| striped | String | false | 是否显示行间隔色 |
| sortName | String | Null | 排序列名称 |
| sortOrder | String | Null | 排序方式 asc 或者 desc |
| pagination | Boolean | true | 默认为 true 表格的底部工具栏会显示分页条，设为 false 不显示 |
| paginationLoop | Boolean | false | 默认为 true 不启用分页条无限循环的功能 |
| pageSize | int | 10 | 每页的记录行数（\*） |
| pageList | Array | [10, 25, 50] | 可供选择的每页的行数 |
| id | String | bootstrap-table | 表格 ID 属性 |
| toolbar | String | toolbar | 表格工具栏 ID 属性 |
| escape | Boolean | false | 是否转义 HTML 字符串 |
| firstLoad | Boolean | true | 是否首次请求加载数据，对于数据较大可以配置 false |
| showFooter | Boolean | false | 默认为 false 隐藏表尾，设为 true 显示 |
| sidePagination | String | server | server 启用服务端分页 client 客户端分页 |
| search | Boolean | true | 默认为 true 显示搜索框功能，设为 false 隐藏 |
| searchText | String | '' | 搜索框初始显示的内容，需要启用 search 设为 true |
| showSearch | Boolean | true | 默认为 true 显示检索信息，设为 false 隐藏 |
| showPageGo | Boolean | false | 默认为 false 不显示跳转页，设为 true 显示 |
| showRefresh | Boolean | true | 默认为 true 显示刷新按钮，设为 false 隐藏 |
| showColumns | Boolean | true | 默认为 true 显示某列下拉菜单，设为 false 隐藏 |
| showToggle | Boolean | true | 默认为 true 显示视图切换按钮，设为 false 隐藏 |
| showExport | Boolean | true | 默认为 true 显示导出文件按钮，设为 false 隐藏 |
| showPrint | Boolean | true | 默认为 true 显示打印页面按钮，设为 false 隐藏 |
| showHeader | Boolean | true | 默认为 true 显示表头，设为 false 隐藏 |
| showFullscreen | Boolean | false | 默认为 false 不全屏显示，设为 true 全屏显示 |
| clickToSelect | Boolean | false | 默认为 false 不启用点击选中行，设为 true 启用 |
| singleSelect | Boolean | false | 是否单选 checkbox |
| mobileResponsive | Boolean | true | 是否支持移动端适配 |
| cardView | Boolean | false | 是否启用显示卡片视图 |
| detailView | Boolean | false | 是否启用显示细节视图 |
| onCheck | Function | onCheck(row, $element) | 当选择此行时触发 |
| onUncheck | Function | onUncheck(row, $element) | 当取消此行时触发 |
| onCheckAll | Function | onCheckAll(rowsAfter, rowsBefore) | 当全选行时触发 |
| onUncheckAll | Function | onUncheckAll(rowsAfter, rowsBefore) | 当取消全选行时触发 |
| onClickRow | Function | onClickRow(row, $element) | 点击某行触发的事件 |
| onDblClickRow | Function | onDblClickRow(row, $element) | 双击某行触发的事件 |
| onClickCell | Function | onClickCell(field, value, row, $element) | 单击某格触发的事件 |
| onDblClickCell | Function | onDblClickCell(field, value, row, $element) | 双击某格触发的事件 |
| onEditableSave | Function | onEditableSave(field, row, oldValue, $el) | 行内编辑保存的事件 |
| onExpandRow | Function | onExpandRow(index, row, $detail) | 点击详细视图的事件 |
| onPostBody | Function | onPostBody(data) | 渲染完成后执行的事件 |
| maintainSelected | Boolean | false | 默认为 false 前端翻页时不保留所选行，设为 true 启用 |
| rememberSelected | Boolean | false | 默认为 false 不启用翻页记住前面的选择，设为 true 启用 |
| fixedColumns | Boolean | false | 默认为 false 禁用冻结列，设为 true 启用冻结列（左侧） |
| fixedNumber | int | 0 | 冻结列的个数，当 fixedColumns 设为 true 有效（左侧） |
| fixedRightNumber | int | 0 | 冻结列的个数，当 fixedColumns 设为 true 有效（右侧） |
| onReorderRow | Function | onReorderRow: function (data) | 当拖拽结束后处理函数 |
| rowStyle | Function | rowStyle(row, index) | 改变某行的格式，需要两个参数：row 行的数据 index 行的索引 |
| footerStyle | Function | footerStyle(column) | 通过自定义函数设置页脚样式 |
| headerStyle | Function | headerStyle(column) | 通过自定义函数设置标题样式 |
| params | Array | Null | 当请求数据时，你可以通过修改 queryParams 向服务器发送参数 |
| columns | Array | Null | 默认空数组，在 JS 里面定义 参考列的各项(Column options ) |
| data | Array | [] | 默认空数组，被加载的数据 |
| responseHandler | object | responseHandler(res) | 在加载服务器发送来的数据之前，处理数据的格式 |
| onLoadSuccess | object | onLoadSuccess(data) | 当所有数据被加载时触发处理函数 |
| exportOptions | object | ignoreColumn: [0, 8] | 前端导出设置 ignoreColumn 忽略列索引如[0,5,10] |
| exportDataType | String | 'all' | 导出方式（默认 all：导出所有数据；all：导出当前页的数据；selected：导出选中的数据） |
| exportTypes | Array | ['csv', 'txt', 'doc', 'excel'] | 导出文件类型 （json、xml、png、csv、txt、sql、doc、excel、xlsx、powerpoint、pdf） |
| printPageBuilder | Function | printPageBuilder(table) | 自定义打印页面模板 |
| detailFormatter | Function | (index, row, element) | detailView 设为 true，启用了显示 detail view。用于格式化细节视图 |

### 列的各项

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| radio | Boolean | false | 默认 false 不显示 radio（单选按钮），设为 true 则显示，radio 宽度是固定的 |
| checkbox | Boolean | false | 默认 false 不显示 checkbox（复选框），设为 true 则显示，checkbox 的每列宽度已固定 |
| field | String | Null | 是每列的字段名，不是表头所显示的名字，通过这个字段名可以给其赋值，相当于 key，表内唯一 |
| title | String | Null | 这个是表头所显示的名字，不唯一，如果你喜欢，可以把所有表头都设为相同的名字 |
| titleTooltip | String | true | 当悬浮在某控件上，出现提示 - 参考 Bootstrap 提示工具（Tooltip）插件 |
| class | boolean | false | 表格列样式 |
| rowspan | Number | true | 每格所占的行数 |
| colspan | Number | true | 每格所占的列数 |
| align | String | true | 每格内数据的对齐方式，有：left（靠左）、right（靠右）、center（居中） |
| halign | String | true | table header（表头）的对齐方式，有：left（靠左）、right（靠右）、center（居中） |
| falign | String | true | table footer（表脚，的对齐方式，有：left（靠左）、right（靠右）、center（居中） |
| valign | String | true | 每格数据的对齐方式，有：top（靠上）、middle（居中）、bottom（靠下） |
| width | Number | Null | 每列的宽度。如果没有自定义宽度自适应 |
| widthUnit | String | px | 定义用于选项的单位，例如% |
| sortable | Boolean | false | 默认 false 就默认显示，设为 true 则会被排序 |
| order | String | asc | 默认的排序方式为"asc（升序）"，也可以设为"desc（降序）"。 |
| visible | Boolean | true | 默认为 true 显示该列，设为 false 则隐藏该列 |
| ignore | Boolean | false | 默认为 false 该列可见，设为 true 则不可见，列选项也消失了 |
| cardVisible | Boolean | true | 默认为 true 显示该列，设为 false 则隐藏。 |
| switchable | Boolean | true | 默认为 true 显示该列，设为 false 则禁用列项目的选项卡。 |
| clickToSelect | Boolean | true | 默认 true 不响应，设为 false 则当点击此行的某处时，不会自动选中此行的 checkbox（复选框）或 radiobox（单选按钮） |
| formatter | Function | Null | 某格的数据转换函数，需要三个参数： -value： field（字段名） -row：行的数据 -index：行的（索引）index |
| footerFormatter | Function | Null | 某格的数据转换函数，需要一个参数： -data： 所有行数据的数组 函数需要返回（return）footer 某格内所要显示的字符串的格式 |
| events | Object | Null | 当某格使用 formatter 函数时，事件监听会响应，需要四个参数： -event：-value：字段名 -row：行数据 -index：此行的 index |
| sorter | Function | Null | 自定义的排序函数，实现本地排序，需要两个参数： - a：第一个字段名 - b：第二个字段名 |
| sortName | String | Null | 排序列名称 |
| cellStyle | Function | Null | 对某列中显示样式改变 |
| searchable | Boolean | true | 默认 true，表示此列数据可被查询 |
| searchFormatter | Boolean | true | 默认 true，可使用格式化的数据查询 |
| escape | Boolean | false | 是否转义 HTML 字符串 |

### 使用方法

- 表单搜索 `$.table.search`

```html
<a onclick="$.table.search();">搜索</a>
```

- 表格数据导出 `$.table.exportExcel`

```html
<a onclick="$.table.exportExcel();">导出</a>
```

- 数据模板下载 `$.table.importTemplate`

```html
<a onclick="$.table.importTemplate();">下载模板</a>
```

- 表格数据导入 `$.table.importExcel`

```html
<a onclick="$.table.importExcel();">导入</a>
<form id="importForm" enctype="multipart/form-data" class="mt20 mb10" style="display: none;">
  <div class="col-xs-offset-1">
    <input type="file" id="file" name="file" />
    <div class="mt10 pt5">
      <input
        type="checkbox"
        id="updateSupport"
        name="updateSupport"
        title="如果登录账户已经存在，更新这条数据。" />
      是否更新已经存在的用户数据 &nbsp;
      <a onclick="$.table.importTemplate()" class="btn btn-default btn-xs"
        ><i class="fa fa-file-excel-o"></i> 下载模板</a
      >
    </div>
    <font color="red" class="pull-left mt10"> 提示：仅允许导入“xls”或“xlsx”格式文件！ </font>
  </div>
</form>
```

- 表格销毁 `$.table.destroy`

```html
<a onclick="$.table.destroy();">销毁</a>
```

- 表格数据刷新 `$.table.refresh`

```html
<a onclick="$.table.refresh();">刷新</a>
```

- 选择表格行具体列 `$.table.selectColumns`

```javascript
var loginName = $.table.selectColumns('loginName')
```

- 选择表格行首列 `$.table.selectFirstColumns`

```javascript
var firstColumn = $.table.selectFirstColumns()
```

- 显示表格特定的列 `$.table.showColumn`

```javascript
$.table.showColumn('userName')
```

- 隐藏表格特定的列 `$.table.hideColumn`

```javascript
$.table.hideColumn('userName')
```

- 序列号生成 `$.table.serialNumber`

```javascript
{
	title: "序号",
	formatter: function (value, row, index) {
		return $.table.serialNumber(index);
	}
},
```

- 超出指定长度浮动提示（单击文本可复制） `$.table.tooltip`

```javascript
{
	field: 'remark',
	title: '备注',
	align: 'center',
	formatter: function(value, row, index) {
		return $.table.tooltip(value);
	}
},
```

- 回显数据字典 `$.table.selectDictLabel`

```javascript
var datas = [[${@dict.getType('sys_common_status')}]];
{
	field: 'status',
	title: '用户状态',
	align: 'center',
	formatter: function(value, row, index) {
		return $.table.selectDictLabel(datas, value);
	}
},
```

- 新增回显数据字典（字符串数组） `$.table.selectDictLabels`

```javascript
var datas = [[${@dict.getType('sys_common_status')}]];
{
	field: 'status',
	title: '用户状态',
	align: 'center',
	formatter: function(value, row, index) {
		return $.table.selectDictLabels(datas, value);
	}
},
```

- 下拉按钮切换 `$.table.dropdownToggle`

```javascript
formatter: function(value, row, index) {
	var actions = [];
	actions.push('<a class="' + editFlag + '" href="#" onclick="$.operate.edit(\'' + row.deptId + '\')"><i class="fa fa-edit"></i>编辑</a>');
	actions.push('<a class="' + removeFlag + '" href="#" onclick="$.operate.remove(\'' + row.deptId + '\')"><i class="fa fa-trash"></i>删除</a>');
	actions.push('<a class="' + addFlag + '" href="#" onclick="$.operate.add(\'' + row.deptId + '\')"><i class="fa fa-plus"></i>添加下级部门</a>');
	return $.table.dropdownToggle(actions.join(''));
}
```

- 图片预览 `$.table.imageView`

```javascript
{
	field: 'avatar',
	title: '用户头像',
	formatter: function(value, row, index) {
		return $.table.imageView(value);
	}
},
```

## 弹层使用

弹层组件目前基于`layer`组件进行封装,提供了弹出、消息、提示、确认、遮罩处理等功能。

- 提供成功、警告和错误等反馈信息

```javascript
$.modal.msg('默认反馈')
$.modal.msgError('错误反馈')
$.modal.msgSuccess('成功反馈')
$.modal.msgWarning('警告反馈')
```

- 提供成功、警告和错误等提示信息

```javascript
$.modal.alert('默认提示')
$.modal.alertError('错误提示')
$.modal.alertSuccess('成功提示')
$.modal.alertWarning('警告提示')
$.modal.confirm('确认信息', function () {})
```

- 提供弹出层信息

```javascript
// 弹出窗体 title 标题 url 请求链接 width 宽度 height 高度 callback 回调函数
$.modal.open(title, url, width, height, callback)

// 选卡页方式打开 title 标题 url 请求链接
$.modal.openTab(title, url)

// 选卡页方式打开并刷新当前页 isRefresh 是否刷新
$.modal.openTab(title, url, true)

// 选卡页同一页签打开
$.modal.parentTab(title, url)

// 弹出窗体 自定义 options 选项
$.modal.openOptions(options)

// 全屏弹出窗体
$.modal.openFull(title, url, width, height)

// 关闭窗体 index 当前层索引
$.modal.close(index)

// 关闭全部窗体
$.modal.closeAll()

// 关闭选项卡
$.modal.closeTab(dataId)

// 重新加载
$.modal.reload()
```

- 提供遮罩层信息

```javascript
// 打开遮罩层
$.modal.loading('正在导出数据，请稍后...')

// 关闭遮罩层
$.modal.closeLoading()
```

## 权限使用

使用`thymeleaf`模板整合了`shiro`标签，界面可以直接`shiro:xxxx`（此处简单介绍几个，更多请参考[thymeleaf-extras-shiro (opens new window)](https://github.com/theborakompanioni/thymeleaf-extras-shiro)）

```html
<!-- 角色权限 -->
<a href="#" shiro:hasRole="admin">管理员才能看到</a>
<a href="#" shiro:lacksRole="admin">验证用户是否不具备某角色</a>
<a href="#" shiro:hasAllRoles="admin,common">验证用户是否具有以下多个角色</a>
<a href="#" shiro:hasAnyRoles="admin,common">验证用户是否具有以下任意一个角色</a>
<!-- 资源权限 -->
<a href="#" shiro:hasPermission="system:user:add">包含权限字符串才能看到</a>
<a href="#" shiro:lacksPermission="system:user:add">验证用户是否不具备某权限</a>
<a href="#" shiro:hasAllPermissions="system:user:add,system:user:edit"
  >验证用户是否具有以下多个权限</a
>
<a href="#" shiro:hasAnyPermissions="system:user:add,system:user:edit"
  >验证用户是否具有以下任意一个权限</a
>
```

如果需要在 JS 中使用权限，使用封装方法

```js
// 验证用户是否具备某权限
var permission = [[${@permission.hasPermi('system:user:add')}]];
// 验证用户是否不具备某权限
var permission = [[${@permission.lacksPermi('system:user:add')}]];
// 验证用户是否具有以下任意一个权限
var permission = [[${@permission.hasAnyPermi('system:user:add,system:user:edit')}]];
// 验证用户是否具备某角色
var role = [[${@permission.hasRole('admin')}]];
// 验证用户是否不具备某角色
var role = [[${@permission.lacksRole('admin')}]];
// 验证用用户是否具有以下任意一个角色
var role = [[${@permission.hasAnyRoles('admin,common')}]];
// 验证用户是否认证通过或已记住的用户
var isLogin = [[${@permission.isUser()}]];

// 追加标识可以实现隐藏
<a class="btn btn-success btn-xs ' + permission + '">包含权限字符串才能看到</a>
<a class="btn btn-danger btn-xs ' + role + '">管理员才能看到</a>
```

## 字典使用

配置好相关的数据字典信息即可正常使用（系统管理-字典管理）

```html
<select name="status" th:with="type=${@dict.getType('sys_normal_disable')}">
  <option value="">所有</option>
  <option th:each="dict : ${type}" th:text="${dict.dictLabel}" th:value="${dict.dictValue}">
  </option>
</select>
```

```html
<label class="col-sm-2 control-label">回显数据字典值：</label>
<div class="form-control-static" th:text="${@dict.getLabel('sys_normal_disable', status)}"> </div>
```

如果在想`Table`表格数据使用字典，使用`formatter`格式化

```javascript
// 获取数据字典数据
var datas = [[${@dict.getType('sys_normal_disable')}]];

// 格式化数据字典
formatter: function(value, row, index) {
	return $.table.selectDictLabel(datas, value);
}
```

## 参数使用

配置好相关的参数信息即可正常使用（系统管理-参数管理）

```html
<body th:classappend="${@config.getKey('sys.index.skinName')}"></body>
```

如果需要在 JS 中使用参数，使用封装方法

```javascript
var skinName = [[${@config.getKey('sys.index.skinName')}]];
$("#id").val(skinName);
```

## 图标使用

项目默认使用了`Font Awesome`和`Glyphicons`字体图标。

`Font Awesome` 默认图标示例代码 [@/demo/icon/fontawesome.html(opens new window)](https://gitee.com/y_project/RuoYi/blob/master/ruoyi-admin/src/main/resources/templates/demo/icon/fontawesome.html) `Glyphicons` 默认图标示例代码 [@/demo/icon/glyphicons.html(opens new window)](https://gitee.com/y_project/RuoYi/blob/master/ruoyi-admin/src/main/resources/templates/demo/icon/glyphicons.html)

两者都可以在项目中任意地方使用。

### Font Awesome 使用方式

```html
<!-- class 为 fontawesome 图标的名字 -->
<i class="fa fa-music"></i>
```

### Glyphicons 使用方式

```html
<!-- class 为 glyphicons 图标的名字 -->
<i class="glyphicon glyphicon-music"></i>
```

## 表单校验

`jQuery Validate`插件提供了强大的表单验证功能，能够让客户端表单验证变得更简单，同时它还提供了大量的可定制化选项，以满足应用程序的各种需求。该插件捆绑了一套非常有用的验证方法，包括 URL 和电子邮件验证，同时也提供了 API 允许用户自定义校验方法。

使用方式：`$("#id").validate({});`

```js
// 全部校验
$('#form-xxx').validate().form()

// 清空校验
$('#form-xxx').validate().resetForm()

// 单个校验
$('#form-xxx').validate().element($('#xxx'))
```

### 默认校验规则

| 校验规则 | 类型 | 说明 |
| --- | --- | --- |
| required | Boolean | 必输字段 |
| remote | Json | String |
| email | Boolean | 必须输入正确格式的电子邮件 |
| url | Boolean | 必须输入正确格式的网址 |
| date | Boolean | 必须输入正确格式的日期 |
| dateISO | Boolean | 必须输入正确格式的日期(ISO)，例如：2009-06-23，1998/01/22 只验证格式，不验证有效性 |
| number | Boolean | 必须输入合法的数字(负数，小数) |
| digits | Boolean | 必须输入整数 |
| creditcard | Boolean | 必须输入合法的信用卡号 |
| equalTo:"#field" | Selector | 输入值必须和#field 相同 |
| accept | String | 输入拥有合法后缀名的字符串（上传文件的后缀） |
| maxlength:5 | Number | 输入长度最多是 5 的字符串(汉字算一个字符) |
| minlength:10 | Number | 输入长度最小是 10 的字符串(汉字算一个字符) |
| rangelength:[5,10] | Array | 输入长度必须介于 5 和 10 之间的字符串")(汉字算一个字符) |
| range:[5,10] | Array | 输入值必须介于 5 和 10 之间 |
| step:5 | Number | 输入值 5 的整数倍值 |
| max:5 | Number | 输入值不能大于 5 |
| min:10 | Number | 输入值不能小于 10 |
| isPhone | Boolean | 必须输入正确格式的手机号 |
| isTel | Boolean | 必须输入正确格式的座机号码 |
| isName | Boolean | 姓名只能用汉字 |
| isUserName | Boolean | 必须输入数字或者字母,不包含特殊字符 |
| isIdentity | Boolean | 必须输入正确格式的身份证号码 |
| isBirth | Boolean | 必须输入正确格式的出生日期 |
| isIp | Boolean | 必须输入正确格式的 IP 地址 |
| notEqual:xxxx | String | 不允许为输入值 |
| gt:10 | Number | 必须大于输入值 |

### 自定义校验规则

本文介绍`Validate`自定义表单校验方式。`Validate`插件虽然提供了丰富的验证规则，但在很多时候仍然很难满足我们的开发需求，在注册页面我们需要通过 ajax 验证用户输入的用户名是否已经被他人注册，那此时通过传统的`Validate`验证方式已经无法满足需求了！ 我们可以通过自定义验证方法实现这个需求。

例如加一个区号的验证。

1、在`jquery.validate.extend.js`加入自定义规则

```js
// 地区号码验证
jQuery.validator.addMethod(
  'ac',
  function (value, element) {
    var ac = /^0\d{2,3}$/
    return this.optional(element) || ac.test(value)
  },
  '区号如：010或0371'
)
```

2、然后`rules`中使用`ac: true`

```js
rules: {
    areaCode:{
        ac: true,
    },
}
```

出现如下图表示自定义区号验证成功。 ![validate](https://oscimg.oschina.net/oscnet/up-a1ccfc29a4fa0c37b6509c6a03191218698.png)

### 使用 tooltip 提示错误信息

`unhighlight`表示`element`验证正确时触发，`errorPlacement`表示`element`验证错误时触发。

```js
unhighlight: function(element, errorClass, validClass) {
	$(element).tooltip('destroy').removeClass(errorClass);
},
errorPlacement: function(error, element) {
	if ($(element).next("div").hasClass("tooltip")) {
		$(element).attr("data-original-title", $(error).text()).tooltip("show");
	} else {
		$(element).attr("title", $(error).text()).tooltip("show");
	}
},
```
