/*
 * author:zjj
 * date  ：2015/4/11
 * func  : gridpanel,带有查询功能
 * params : columns,store
 */
Ext.define('Zjj.ui.gridPanel.cincc.Grid',{
	extend: 'Ext.grid.Panel',
	itemId: 'gridid',
	frame: true,
	renderTo: Ext.getBody(),
	width: 600,
	height: 200,
	store: null,
	columns: [],
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
			scope: this,
			listeners: {
				/*本地查询函数*/
				click: function() {
					console.info(this.ownerCt.ownerCt);
					var targetString = Ext.getCmp('queryText').getValue();
					if(targetString == '')
					{
						(this.up('grid').store).filterBy(function(record,id){
							return true;
						})
					}
					else 
					{
						(this.up('grid').store).filterBy(function(record,id){
							if(record.get('username') == targetString) return true;
							else return false;
						})
					}
				}
			}
		}
		]
	},
	
	constructor : function(config) {
		Ext.apply(this,config);
		
		console.info(this.store);
		this.initParam(config);
		
		this.callParent(arguments);
	},
	
	initParam  : function(config){
		
	}	
});
