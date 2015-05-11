/*
 * author : zjj
 * date   ：2015/4/1
 * func   : 自定义的FormPanel类
 */
Ext.define('Zjj.ui.basic.FormPanel',{
	extend : 'Ext.form.Panel',
	width  : '100%',
	height : '100%',
	margin : 0,
	frame  : true,
	url	   : '',
	method : 'post',
	layout : 'column',
	collapsible  : false,
	labelAllign  : 'right',
	labelWidth   : 15,
	buttonAlign  : 'right',
	bodyPadding  : 12,
	renderTo     : '',
	border       : false,
	bodyborder   : true,
	defaultType  : 'textfield',
	animCollapse : true,
	
	items  		 : [],
	buttons		 : [],
	
	constructor  : function(config) {
		Ext.apply(this,config);
	}
});