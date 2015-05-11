Ext.define('Zjj.control.StoreControl',{ 
    
    constructor : function(config) {
        
        this.uncheckWorkListStore=Ext.create('Zjj.store.UncheckWorkListStore');      
    },
    
    reLoad:function(store,condition){
        
        store.proxy.extraParams = condition;                   //.searchConditions = conditionArr.join(' AND ');
    
        store.reload(); 
        
    },

    
    initLoad:function(store){
        
        store.load();
        
    }       
    
});