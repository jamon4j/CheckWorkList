Ext.define('CINCC.UI.hsWin',{
	
	extend      : 'Ext.window.Window',
	alias       : 'CIN Window',
	
	width       : 400,
	height      : 500,
	title       : 'CINCC Window',
	
//	layout      : 'vbox', // 'column'

	closable    : false,
	modal       : true,
	plain       : false,
	
	collapsible : false,
	closeAction : 'close',
	labelAlign  : 'right',
	buttonAlign : 'right',
	floating    : true,
  	frame       : true,
	border      : true,
	constrain   : true,
	
	resizable   : false,
	draggable   : true,

	shadow      : false,
	padding     : '15px 15px',
	items       : [],
	
	constructor : function(config){
		Ext.apply(this, config);
		this.callParent(arguments);
	}
    
});