/*
 * author:zjj
 * date  ：2015/4/21
 * func  : gridpanel
 * params : columns,store
 */
Ext.define('CINCC.UI.hsGrid',{
	extend: 'Ext.grid.Panel',
	itemId: 'gridid',
	frame: true,
	renderTo: Ext.getBody(),
	width: 600,
	height: 200,
	store: null,
	columns: [],
	
	constructor : function(config) {
		Ext.apply(this,config);
		
		console.info(this.store);
		this.initParam(config);
		
		this.callParent(arguments);
	},
	
	initParam  : function(config){
		
	}	
});
