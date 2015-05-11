Ext.define('Zjj.store.UncheckWorkListStore',{   
    
    extend: 'Ext.data.Store', 
    
    alias   :   'widget.uncheckWorkListstore',

    data: null,
    fields: [
                {
                    name: 'stream_Number',
                    type: 'string'
                },{
                    name: 'task_ID',
                    type: 'string'
                },{
                    name: 'customer_Phone',
                    type: 'string'
                },{
                    name: 'end_Time',
                    type: 'int'
                },{
                    name: 'checked',
                    type: 'int'
                }
            ],  
            proxy: {
                type : 'ajax',
                url  : 'http://localhost:8080/WorkListAllot/workList/getUnchecked?Checker_num=3&Is_Success=1&Duration_Type=1',
                getMethod : function(){
                    return 'POST';
                },
            
                extraParams : { 
                     'Task_ID': "001",
                     'Remainder': "1,2",         
                },

                reader: {
                    type: 'json',
                    root: 'workListDto'
                }
            },
            
    pageSize : 50,
    
    autoLoad: false

    /*autoLoad : {
            params : {
                    start : 0,
                    limit : 50
            }
        }    */
});
