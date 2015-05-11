/*
 * author:zjj
 * date  ：2015/3/30
 * func  : 添加文章的表单，将数据提交到服务器
 */
Ext.define('Zjj.ui.window.AddArticle',{
	extend	: 'Zjj.ui.basic.Window',
	
	title	  : '添加文章',
	layout	  : 'fit',
	height	  : 320,
	width 	  : 360,
	draggable : true,
	closable  : true,
	constrain : true,
	padding   : 10,
	
	items	  : [{
		xtype   : 'form',
		header  : false,
		frame   : true,
		border  : false,
		layout  : {type: 'vbox', align: 'left', padding: 5},
		url		: 'http://localhost:8080/MyBatisSpringMVC/article/addArticle',
		defaults: {xtype: 'textfield',allowBlank: false, labelAlign: 'right', lableWidth:60, width:300},
		items   :[
			{fieldLabel: '用户ID',   name: 'userid'},
			{fieldLabel: '用户名', 	 name: 'username'},
			{fieldLabel: '密码',     name: 'password'},
			{fieldLabel: '标题',     name: 'title'},
			{fieldLabel: '内容',     name: 'content', xtype: 'textareafield'}
		],
		buttons : [
			{text: '提交', itemId: 'submitBtn', scope: this},
			{text: '重置', itemId: 'resetBtn', scope: this}
		]
	}],

	listeners : {
		afterRender: function(me){
			Ext.apply(me.down('#submitBtn'),{scope: me,handler: me.submitAction});
			Ext.apply(me.down('#resetBtn'),{scope: me,handler: me.resetAction});
		}
	},
	
	submitAction: function(){
			var form = this.query('form')[0];
			if(form.isValid()) {
				/*校验*/

				form.submit({
					waitTitle : '请稍候',
					waitMsg   : '正在添加，请稍候...',
					method    : 'POST',
					success   : function(form,action) {
						Ext.Msg.alert('提示','添加成功！');
					},
					failure : function(form, action){	
					switch (action.failureType){
						case Ext.form.Action.CLIENT_INVALID:
							Ext.Msg.alert('错误提示', '表单数据非法请核实后重新输入！');
							break;
						case Ext.form.Action.CONNECT_FAILURE:
							Ext.Msg.alert('错误提示', '网络连接异常！');
							break;
						case Ext.form.Action.SERVER_INVALID:
							var errorMsg = Ext.decode(action.response.responseText).reason;
							if(!errorMsg) errorMsg = '';
							Ext.Msg.alert('错误提示', '您的输入用户信息有误，请核实后重新输入！</br>' + errorMsg);
//							form.reset();
							break;
						default:
							break;
					}
				}
				});
			}
	},
		
	resetAction: function() {
		
	}
});