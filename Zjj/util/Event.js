(function(){
	
	 CINCC = {};

	CINCC.eventOn = function(item,handler,scope){
		item.on('render',CINCC.createCB(CINCC.initControl,handler),scope);
  };

	CINCC.createCB = function(fn,args){
  	
  		return function(){
  		
  			fn.call(this,args);
  		}
  	};
  		

	CINCC.initControl = function(handler){
  	
   		var v = handler;
   
   		for(var i=0;i<v.length;i++){
   	
  			var b = Ext.ComponentQuery.query(v[i].itemId);   
  			
  			var len = b.length;
  			
  			if( len != 1 )
  				console.info(v[i].itemId + " bind event component isnot 1  is " + len + " !!!!");
  					
  			for(var j=0;j<len;j++)      
    			b[j].on(v[i].event, v[i].callback,v[i].scope || this);
		  }  	
  	};
  	
 
	 CINCC.bsStore = function(itemid,store){

    var v = Ext.ComponentQuery.query(itemid);
    
    var len = v.length;
    
    console.info("itemid: " + itemid + " bind " + len + " component!!");
    
    for(var i =0;i<len;i++)v[i].bindStore(store);
  
  };
 }())