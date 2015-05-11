Ext.define('Zjj.control.GridControl', {
  
  db	 : null,
  store	 : null,
  grid	 : null,
  
  gridID : "",
  gridItemID : "",
    
	constructor : function(config) {
	   
       this.db = config.db;
       					  
	   this.grid.bindStore(this.store);
        
       this.grid.dockedItems.items[1].bind(this.store);	
  	
       // this.initControl();
    	
	},

  initControl:function(){
  	
  	v = [	

		  {itemId:this.gridID,event:"itemdblclick",callback:this.doubleAction,scope:this},

		
			{itemId:this.gridItemID + " #refresh",event:"click",callback:this.refAction,scope:this},
		
		  {itemId:this.gridItemID + " #oper1", event:"click",callback:this.oper1Action,scope:this},
		  {itemId:this.gridItemID + " #oper2", event:"click",callback:this.oper2Action,scope:this},
		  
			{itemId:this.gridItemID + " #oper3", event:"click",callback:this.oper3Action,scope:this},
			
  		{itemId:this.gridItemID + " #oper4", event:"click",callback:this.oper4Action,scope:this} //,
  		
  		
  			
  		];  	
  		
    CINCC.eventOn(this.grid,v,this);
    
  },
  
  doubleAction:function(){},
  
  oper1Action:function(){},
  
  
	refAction : function(button,e,options){
		
		var store = button.up('grid').getStore();;
		
		console.info("res");
		
	
		var paramsCondition = {
				'action' : '1',
				'command.vccId' : 3,
				'command.agtId' : 0
		};
				
		store.proxy.extraParams = paramsCondition;                   //.searchConditions = conditionArr.join(' AND ');
	
		store.reload();
	},

	oper4Action:function(button,e,options){
		
			var grid=button.up('grid');
				
			var rows = grid.getView().getSelectionModel().getSelection();
			
			var len = rows.length;

      console.info("del len = " + len);
      
			if(len<=0){
					Ext.Msg.alert('系统提示', '请选择要删除的数据！');
					return;
			};
			
			this.confirmDel(rows);
			
	},

/**************************************************************/	
	oper2Action:function(grid,cell,rowIndex, colIndex){
			
		var record = grid.getStore().getAt(rowIndex);

    var recs = [];
    recs.push(record);
    		
	  this.confirmDel(recs);
	
	},
	
	confirmDel:function(records)
	{
		var me = this;
		
		Ext.MessageBox.confirm("系统提示","确认删除吗？",function(btn,txt)
				{
				    
					if(btn!="yes")return;
				
				  var len = records.length;
					
					for(var i=0;i<len;i++)me.deleteAction(records[i]);
						
			  }  	
			);	
	},
	
	deleteAction : function(record){
				
		var me = this;
		
		var streamNumber = record.data['streamNumber'];
				
		Ext.Ajax.request({  
						timeout: 900000,  
						url: 'php/dela.php',   
						params: {
							'selectedIds':streamNumber
						},  				
						success: function(response, options) {
							Ext.Msg.alert('成功', '删除成功');
							
							me.store.remove(record);
						},
						failure :  function(response, options) {
							Ext.Msg.alert('失败', '删除失败');
						}			
					});
	},

	oper3Action:function(){
		
        var projectWin = Ext.create("CINCC.UI.AgentRegister.ARegControl",{
        	
        			aGroupStore:this.db.aGroupStore,	
							aVccStore:this.db.aVccStore,
							aStore:this.db.aStore,
							nodeStore:this.db.nodeStore,
							roleStore:this.db.roleStore
				});
				
		
	}			
	
					
});