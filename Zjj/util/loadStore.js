Ext.define('Zjj.util.loadStore',{
	store: null,
	
	constructor: function(config) {
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
				
		this.getStore() = Ext.create('Ext.data.Store',{
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
	}
});
