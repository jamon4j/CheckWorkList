/*
 * focus :此处getData()函数使用ajax请求数据，并将数据赋值给全局变量
 * 然后调用initVC()使用memoryProxy加载数据到grid中
 * 
 * author:zjj
 * date  ：2015/4/23
 * func  : 历史工单面板控制类，负责创建历史工单面板并加载数据
 * 
 * params :
 */
Ext.define('CINCC.UI.hsCreator',{
	data: '',
	orderStore: null,
	constructor : function(config) {
		this.initParam(config);
		this.getData();
//		this.initVC();
	},
	
	initParam: function(config) {	
		Ext.apply(this,config);
	},
	
	//加载数据
	getData: function() {
		//ajax请求json数据
		Ext.Ajax.request({
			url:'http://localhost:8080/MyBatisSpringMVC/article/list',
			method: 'GET',
//			async : false,//设置为同步操作就可以给全局变量赋值成功 
			success:function(response,options) {
				this.data = eval('('+response.responseText+')');
				this.initVC();	//获取数据后再显示视图
			},
			failure: function(response,options){
                Ext.Msg.alert('错误',Ext.util.JSON.decode(response.responseText));
	        },
	        scope:this
		});
		/*Ext.define('Order',{
			extend: 'Ext.data.Model',
			fields: [
				{name:'id',mapping:'id'},
				{name:'username',mapping:'user.name'},
				{name:'password',mapping:'user.password'},
				{name:'title',mapping:'title'},
				{name:'content',mapping:'content'}
			]
		});
			
		this.store = Ext.create('Ext.data.Store',{	
			autoLoad: true,
			model: 'Order',
			proxy: {
				type: 'ajax',
				url: 'http://localhost:8080/MyBatisSpringMVC/article/list',
				reader: { 			
					type: 'json',
					root: 'articles'
				}
			}
		});
		
		this.store.load({
			callback: function(records,operation,success) {
				if(success) {				
					console.info("this.store:");
					console.dir(this.store);
					
				}
			}
		});*/
	},
	
	//视图显示
	initVC: function() {
		this.container = Ext.create("CINCC.UI.hsContainer",{
			renderTo: Ext.getBody()
		});

		var grid = this.initGrid();	
		
		this.container.add(grid);
		this.container.suspendLayout = false;
		this.container.doLayout();
	},
	
	//生成grid
	initGrid: function() {
		
		var columns = [
			{text: '订单号',width: 50,dataIndex: 'id',hideable: false},
			{text: '坐席id',width: 100,dataIndex: 'username',hideable: false},
			{text: '坐席名称',width: 100,dataIndex: 'password',hideable: false},
			{text: '客户id',width: 100,dataIndex: 'title',hideable: false},
			{text: '客户名称',flex: 1,dataIndex: 'content',hideable: false}					
		];
		
		Ext.define('Order',{
			extend: 'Ext.data.Model',
			fields: [
				{name:'id',mapping:'id'},
				{name:'username',mapping:'user.name'},
				{name:'password',mapping:'user.password'},
				{name:'title',mapping:'title'},
				{name:'content',mapping:'content'}
			]
		});
		
		console.info("this.data");
		console.dir(this.data);
				
		var testdata = {"articles":[{"id":1,"user":{"id":1,"password":"123","name":"zjj"},"title":"guitar","content":"chord and rhythm..."},{"id":2,"user":{"id":2,"password":"321","name":"lj"},"title":"clarinet","content":"a wind instrument..."},{"id":3,"user":{"id":2,"password":"321","name":"lj"},"title":"sing","content":"control your breath."},{"id":11,"user":{"id":1,"password":"123","name":"zjj"},"title":"'sports'","content":"'football...'"},{"id":12,"user":{"id":1,"password":"123","name":"zjj"},"title":"tst","content":"tst"},{"id":13,"user":{"id":2,"password":"321","name":"lj"},"title":"yrdy","content":"qw12"}]};
						
		console.info("testdata");
		console.dir(testdata);
		
		this.orderStore = Ext.create('Ext.data.Store',{	
			autoLoad: true,
			model: 'Order',
			data: this.data,
			proxy: {
				type: 'memory',
				reader: {
					type: 'json',
					root: 'articles'
				}
			}
		});
		console.info("orderStore");
		console.dir(this.orderStore);
		
		var grid = Ext.create("CINCC.UI.hsGrid",{
			columns: columns,
			store: this.orderStore
		});
		
		return grid;
	}
});
