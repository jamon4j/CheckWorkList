Ext.define('zjj.ui.checkWorkList.WorkListQuery',{            
    
        extend:'Ext.form.FieldSet',
            
        alias: 'widget.workListQuery',
            
        title:'工单查询',
                                
        layout:'column',

        defaults:{
                labelAlign  : 'right',
                labelWidth:70,
                columnWidth:.5,
                padding:3       
            },
            
            items:[
                { 
                    xtype:'textfield',
                    fieldLabel : '任务号',
                    name:'taskid',
                    itemId:'TaskID'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: '质检员任务号',
                    name:'remainder',
                    itemId:'Remainder'                
                },
                {
                    xtype  : 'container',
                    columnWidth:1,
                    
                    layout : {
                        type  : 'vbox',
                        align : 'right'/*'center' 'stretch'*/
                    },
                    
                    items:[
                        {
                            xtype   : 'button',
                            text    : '查询',
                            iconCls : 'search_grid',
                            itemId  :'query'
                        }
                    ]       
                }
                
            ]
                        
});
        