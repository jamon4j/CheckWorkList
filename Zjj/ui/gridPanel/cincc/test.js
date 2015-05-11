/*
 * author:zjj
 * date  ：2015/4/11
 * func  : 测试文件，测试Zjj.ui.gridPanel.cincc.Grid
 */
Ext.onReady(function(){
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
		autoLoad: true,
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
	
	var columns = [
		{text: 'id',width: 50,dataIndex: 'id',hideable: false},
		{text: 'username',width: 100,dataIndex: 'username',hideable: false},
		{text: 'password',width: 100,dataIndex: 'password',hideable: false},
		{text: 'title',width: 100,dataIndex: 'title',hideable: false},
		{text: 'content',flex: 1,dataIndex: 'content',hideable: false}					
	];
	
	articleStore.load({ 
		callback: function(records,operation,success) {
			if(success){
				console.info("articleStore:");
				console.dir(articleStore);
				
				var grid = Ext.create('Zjj.ui.gridPanel.cincc.Grid',{
					columns: columns,
					store: articleStore
				});
				
				/*外层容器*/
				var containerPanel = Ext.create('Ext.panel.Panel',{
					renderTo: Ext.getBody(),
					width: 600,
					height: 300,
					title: 'Show All Articles',
					layout: 'column',
					suspendLayout: true
				});
				containerPanel.add(grid);
				containerPanel.suspendLayout = false;
				containerPanel.doLayout();
			}
		}
	});
	
	
	
	
//	grid.setStore(articleStore);
});