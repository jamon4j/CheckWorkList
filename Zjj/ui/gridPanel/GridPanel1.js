/*
 * author:zjj
 * date  ：2015/4/9
 * func  : grid显示数据，查询过滤数据功能
 * notice:
 * 		  1.如果store中的model进行过关联，在解析json嵌套数据时使用article.user().each(function(u))这样的方式
 * 		  2.对于在grid中加载json嵌套数据，不使用model关联，首先设置store的autoLoad为true,即自动加载嵌套数据
 * 		   然后在model中设置fields的mapping：obj.xxx的方式获取嵌套数据
 */
Ext.onReady(function(){
//	Ext.define('User',{
//		extend: 'Ext.data.Model',
//		fields: ['id','password','name'],
//		belongsTo: 'Article'
//	});
	
	Ext.define('Article',{
		extend: 'Ext.data.Model',
		fields: [
			{name:'id',mapping:'id'},
			{name:'username',mapping:'user.name'},
			{name:'password',mapping:'user.password'},
			{name:'title',mapping:'title'},
			{name:'content',mapping:'content'}
		]
//		hasMany: {model: 'User',name: 'user'}
	});
	
	var articleStore = Ext.create('Ext.data.Store',{
		autoLoad: true,	//自动加载嵌套数据
		
		model: 'Article',
		proxy: {
			type: 'ajax',
			url: 'http://localhost:8080/MyBatisSpringMVC/article/list',
			reader: { 			
				type: 'json',
				root: 'articles'
			}
		}
	});
	
	
	articleStore.load({
		callback: function(records,operation,success) {
			if(success)
			{
				var msg = [];
				/*弹框测数据解析代码
				 * var username;
				var password;
				articleStore.each(function(article){
					使用reader读取嵌套的json数据的方法，用于model还存在嵌套的情况
					article.user().each(function(u){
						username = u.get('name');
						password = u.get('password');
					});
					msg.push(
					'id:' + article.get('id') + '  '
					+ 'username:' + article.get('username') + ' '
					+ 'password:' + article.get('password') + ' '
					+ 'title:' + article.get('title') + '  '
					+ 'content:' + article.get('content'));
				});
				Ext.MessageBox.alert(msg.join('<br />'));
				*/
				
				/*外层容器*/
				var containerPanel = Ext.create('Ext.panel.Panel',{
					renderTo: Ext.getBody(),
					width: 600,
					height: 300,
					title: 'Show All Articles',
					layout: 'column',
					suspendLayout: true
				});
				
				/*远程查询函数??未测试未完成*/
				var queryStoreAtRemote = function() {
					var targetString = Ext.getCmp('queryText').getValue();
					if(targetString == '')
					{
							return true;
					}
					else 
					{
						var lastOption = articleStore.lastOptions;
//						articleStore.setBaseParam? ('search',targetString);
						
						Ext.apply(articleStore.proxy.extraParams,targetString);
						articleStore.reload(lastOption);
					}
				}
				
				/*本地查询函数*/
				var queryStoreAtLocal = function() {
					var targetString = Ext.getCmp('queryText').getValue();
					if(targetString == '')
					{
						articleStore.filterBy(function(record,id){
							return true;
						})
					}
					else 
					{
						articleStore.filterBy(function(record,id){
							if(record.get('username') == targetString) return true;
							else return false;
						})
					}
				}
				
				/*grid面板显示文章*/
				var articlePanel = Ext.create('Ext.grid.Panel',{
					renderTo: Ext.getBody(),
					store: articleStore,
					width: 600,
					height: 200,
					tbar: {
						xtype: 'toolbar',
						frame: true,
						border: false,
						padding: 2,
						items: [
						{
							xtype: 'textfield',
							id: 'queryText',
							emptyText: '请输入关键字...',
							width: 220
						},
						{
							xtype: 'tbspacer',
							width: 5
						},
						{
							xtype: 'button',
							text: '查询',
							handler: queryStoreAtLocal,
							scope: this
						}
						]
					},
					//title: 'All Articles',
					columns: [
					{
						text: 'id',
						width: 50,
						sortable: false,
						hideable: false,
						dataIndex: 'id'
					},
					{
						text: 'username',
						width: 100,
						sortable: false,
						hideable: false,
						dataIndex: 'username'
					},
					{
						text: 'password',
						width: 100,
						sortable: false,
						hideable: false,
						dataIndex: 'password'
					},
					{
						text: 'title',
						width: 100,
						sortable: false,
						hideable: false,
						dataIndex: 'title'
					},
					{
						text: 'content',
						flex: 1,
						sortable: false,
						hideable: false,
						dataIndex: 'content'
					}					
					]
				});
				
				/*button面板*/
				var buttonPanel = Ext.create('Ext.panel.Panel',{
					renderTo: Ext.getBody(),				
					items: [
						{
							xtype: 'button',
							text: 'add',
							flex: 1,
							listeners: {
								click: function() {
									Ext.create('Zjj.ui.window.AddArticle').show();						
								}
							}
						}
					]
				});
				containerPanel.add(articlePanel);
				containerPanel.add(buttonPanel);
				containerPanel.suspendLayout = false;
				containerPanel.doLayout();
			}
		}
	});
});
