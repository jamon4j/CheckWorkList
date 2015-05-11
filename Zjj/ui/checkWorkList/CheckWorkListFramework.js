/* 
* @Author: zjj
* @Date:   2015-05-06 16:15:15
* @func:  工单分派面板
* @Last Modified by:   anchen
* @Last Modified time: 2015-05-11 11:11:22
*/

Ext.define('zjj.ui.checkWorkList.CheckWorkListFramework', {

    extend : 'zjj.ui.basic.BasicPanel',

    alias     : 'widget.checkWorkListFramework',
  
    title  : '工单操作',    

    db      : null,
    
    constructor : function(config) {
        
        this.db = config.db;
        
        var WorkListQuery = this.initWorkListQuery();
        this.items.push(WorkListQuery);

        var ggrid = Ext.create("Zjj.ui.checkWorkList.CheckWorkListControl",{db:this.db});
        this.items.push(ggrid);
        
        this.callParent(arguments);
        
    },
    
    initWorkListQuery:function(){
        
        workListQuery = Ext.create("zjj.ui.checkWorkList.WorkListQuery");    

        var v = [
            {itemId:"workListQuery button#query", event:"click",callback:this.queryAction,scope:this}      
        ];      
  
        CINCC.eventOn(workListQuery,v,this);          
        return workListQuery;
 
   },


 /*******************************************************************/   

  /*
     * @method allotAction
     * @func:根据任务号和质检员工号查询质检员分配到的工单信息
     * @param:TaskID,InspectorID
     * @return： 
     */ 
  queryAction:function(){
    
    var TaskID=this.queryById('TaskID').getValue();
    var Remainder=this.queryById('Remainder').getValue();
    
    var paramsCondition = {
        'Task_ID' : TaskID,
        'Remainder' : Remainder
    };
    
    this.db.reLoad(this.db.uncheckWorkListStore,paramsCondition);
    
  },

    /*
     * @method allotAction
     * @func:工单分配算法（旧的未使用的函数）
     * @param:
     * @return： 
     */
   allotAction:function(){
    
      var inspectorCount=this.queryById('inspectorCountId').getValue();
      var inspector1Num=this.queryById('inspector1NumId').getValue();
      var inspector2Num=this.queryById('inspector2NumId').getValue();
      var inspector3Num=this.queryById('inspector3NumId').getValue();
      var worklistCount=this.queryById('worklistNumId').getValue();
        
       console.info(inspectorCount);
       console.info(inspector1Num);
       console.info(inspector2Num);
       console.info(inspector3Num);
       console.info(worklistCount);

       var workListNum = [];    //工单新序号
       for(var i=0;i<worklistCount;i++) { 
            workListNum[i] = Math.ceil((Math.random()*worklistCount));
       }

       console.dir(workListNum);

       var inspectorRemainder = new Array(inspectorCount);  //分给质检员的对应工单新序号集

       //数组初始化
       for(i=0;i<inspectorCount;i++) {
            inspectorRemainder[i] = "";
       }

       for(i=0;i<worklistCount;i++) {
            var num = workListNum[i]%(inspectorCount*2);
            if(num < inspectorCount) {
                inspectorRemainder[num] += workListNum[i] + ",";
            }
       }

       console.dir(inspectorRemainder);

       //字符串转换为数组
       for(i=0;i<inspectorCount;i++) {
           inspectorRemainder[i] = inspectorRemainder[i].split(",");
       }
       
       console.dir("inspectorRemainder"+inspectorRemainder);
       var tempStr = "";
        for(i=0;i<inspectorCount;i++) {
            console.info("质检员"+i+"分配到的工单新序号为：");
            tempStr = "";
            for(var j=0;j<inspectorRemainder[i].length;j++) {
                tempStr += inspectorRemainder[i][j];    
            }
            console.info(tempStr);
       }

    }

});