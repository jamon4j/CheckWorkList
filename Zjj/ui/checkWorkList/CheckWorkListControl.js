Ext.define('Zjj.ui.checkWorkList.CheckWorkListControl', {

    extend : "Zjj.control.GridControl",
        
    constructor : function(config) {
        
      this.store = config.db.uncheckWorkListStore;
                        
      this.grid =  Ext.create('Zjj.ui.checkWorkList.WorkListGrid');
      this.callParent(arguments);
                            
     // this.db.initLoad(this.store);
    
    return this.grid;
        
    },
    
/***********************************************************************/
                    
});