/*
 * author : zjj
 * date   ：2015/3/27
 * func   : 自定义的window类
 */
Ext.define('Zjj.ui.basic.Window',{
	extend		: 'Ext.window.Window',
	alias		: 'ZJJ Window',
	
	width		: 360,
	height		: 240,
	title		: 'ZJJ Window',
	layout		: 'fit',
	closable	: false,
	modal		: true,
	plain		: false,
	
	collapsible	: false,
	closeAction	: 'close',
	labelAlign	: 'right',
	buttonAlign	: 'right',
	floating	: true,
	frame		: true,
	border		: true,
	
	resizable	: false,
	draggable   : false,
	
	padding     : '6px 15px 15px 15px',
	items       : [],
	
	construct   : function(config) {
		Ext.apply(this,config);
		this.callParent(arguments);
	}
});