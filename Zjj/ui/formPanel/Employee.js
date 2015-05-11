/*
 * author : zjj
 * date   ：2015/4/8
 * func   : 员工个人信息填写（复杂的表单面板）
 * notice : 
 */
Ext.define('Zjj.ui.formPanel.Employee',{
	id		  : 'employeeFormPanel',
	title	  : '员工信息',
	border	  : true,
	height 	  : 360,
	width	  : 700,
	frame     : true,
	
	constructor : function(config) {
		Ext.apply(this,config);
		this.initView();
	},
	
	initView : function() {
		/*定义fieldset1*/
		var fieldset1 = {
			xtype        : 'fieldset',
			title        : 'Name',
			columnWidth	 : 0.3,
			border       : false,
			layout		 : 'anchor',
			defaultType  : 'field',
			defaults     : {
				anchor     : '-10',
				labelWidth   : 50,
				width: 200,
				allowBlank : false
			},
			
			items : [
			{
				fieldLabel : 'First',
				name	   : 'first'
			},
			{
				fieldLabel : 'Middle',
				name	   : 'middle'
			},
			{
				fieldLabel : 'Last',
				name	   : 'last'
			}
			]         
		};
		
		/*定义fieldset2*/
		var fieldset2 = Ext.apply({}, {
			flex    : 2,
			title   : 'Address Information',
			layout	: 'anchor',
			columnWidth: 0.7,
			defaults: {
				xtype: 'textfield',
				width: 300,
				labelWidth: 50
			},
			items   : [
				{
					fieldLabel : 'Address',
					name	   : 'address'
				},
				{
					fieldLabel : 'Street',
					name	   : 'street'
				},
				{
					xtype	   : 'container',
					border     : false,
					width	   : 300,
					layout	   : 'column',
					items      : [
					{
						xtype	   : 'container',
						layout	   : 'anchor',
						columnWidth	 : .6,
						items      : [
							{
								xtype      : 'textfield',
								fieldLabel : 'State',
								name 	   : 'state',
								labelWidth : 50,
								anchor     : '-10'	
							}
						]						
					},
					{
						xtype	    : 'container',
						layout	    : 'anchor',	
						columnWidth		: .4,
						items       : [
							{
								xtype      : 'textfield',
								fieldLabel : 'Zip',
								labelWidth  : 30,
								name 	   : 'Zip',
								anchor     : '0'
							}
						]						
					}
					]
				}	
			]	
		},fieldset1);
		
		/*定义容器包含fieldset1,fieldset2*/
		var fieldsetContainer = {
			xtype	: 'container',
			layout  : 'column',
			height	: 120,
//			layoutConfig : {	
//				align : 'stretch'
//			},	
			items   : [
				fieldset1,
				fieldset2
			]
		}
			
		/*定义tabs*/
		var tabs = [
			{
				xtype: 'fieldset',
				title: 'Phone Numbers',
				layout: 'anchor',
				defaults: {
					xtype: 'textfield',
					anchor: '-200',
					labelWidth: 50				
				},
				items: [
					{
						fieldLabel: 'Home',
						name: 'home'
					},
					{
						fieldLabel: 'Business',
						name: 'business'
					},
					{
						fieldLabel: 'Mobile',
						name: 'mobile'
					},
					{
						fieldLabel: 'Fax',
						name: 'fax'
					}
				]
			},
			{
				title: 'Resume',
				xtype: 'htmleditor',
				name: 'resume'
			},
			{
				title: 'Bio',
				xtype: 'htmleditor',
				name: 'bio'
			}
		];
		
		/*定义tabPanel*/
		var tabPanel = {
			xtype: 'tabpanel',
			deferredRender: false,
			activeTab: 0,
			border: false,
			layoutOnTabChange: true,
			plain: true,
			items: tabs
			
		}
		
		/*定义容器包含tabPanel*/
		var tabContainer = {
			xtype	: 'container',
			layout  : 'anchor',
			height	: 120,
			width: 550,
			items   : [
				tabPanel
			]
		}
		
		/*定义并创建formPanel*/
		var myFormPanel = Ext.create('Ext.form.Panel',{
			renderTo	: Ext.getBody(),
			width		: 600,
			height		: 360,
			title		: 'My complex form',
			frame		: true,
			id			: 'myFramePanel',
			layout		: 'vbox',
			layoutConfig: {
				align : 'stretch'
			},
			items : [
				fieldsetContainer,
				tabContainer
			]
		}
		);
	}
});