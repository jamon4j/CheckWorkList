Ext.define('Zjj.ui.checkWorkList.WorkListGrid',{ 
    
        extend : 'Ext.grid.Panel', 
        
        alias  :'widget.workListGrid',
        
        itemId  :'WorkListGrid',
        
        width:800,
        frame  : true,                      
        
        selModel : Ext.create('Ext.selection.CheckboxModel',{mode:"SIMPLE"}),
        columnLines : true,
        autoScoll   : true,
    
        store: null,
            
        columns : [
                {
                    header    : '工单流水号',
                    align  : 'center',
                    dataIndex : 'stream_Number',
                    width     : '20%',
                },
                {
                    header    : '任务号',
                    align  : 'center',
                    dataIndex : 'task_ID',
                    width     : '20%',
                },
                {
                    header    : '客户电话',
                    align  : 'center',
                    dataIndex : 'customer_Phone',
                    width     : '20%',
                },
                {
                    header    : '通话时长',
                    align  : 'center',
                    dataIndex : 'end_Time',
                    width     : '20%',
                },
                {
                    header    : '是否被检',
                    align  : 'center',
                    dataIndex : 'checked',
                    width     : '20%',
                }
             ],
            dockedItems: [{
                xtype : 'pagingtoolbar',
                dock  : 'bottom',
                
                termId  :'pagingb',
                
                store    : null,
                displayInfo : true,
                displayMsg  : '本页显示第{0}条到第{1}条记录,一共{2}条',
                emptyMsg    : '没有记录'
            }]
});