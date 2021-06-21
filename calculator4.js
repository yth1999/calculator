





window.onload = function(){
    //用來存放輸入的字串
    var operation_content =[];
    // 獲得按鍵元素
    var btn_txt = document.getElementsByClassName('btn');
    //顯示目前輸入的算式
    var now_sum=document.getElementsByClassName('now_sum')[0]; 
    // 總和視窗內容，因txt只有一個因此總是get index 0
    var sum = document.getElementsByClassName('txt')[0];
    // 清除與退一格按鍵
    var btn_del = document.getElementsByClassName('btn-click');

    //將字串中運算完不需要的元素修剪
    function toforward(operation_content,i){
        for  (var i=i ; i <operation_content.length ;i++){
            operation_content[i-1] = operation_content[i+1]  
        }
        operation_content.length = operation_content.length-2
    }
    //運算
    function operation(operation_content){
        for (var i=1 ; i <operation_content.length+1 ;i++){
        switch(operation_content[i]){
            case'*':
                operation_content[i+1] = operation_content[i-1]*operation_content[i+1];
                toforward(operation_content,i) 
                return operation_content;
                break;
            case'/':
                operation_content[i+1] = operation_content[i-1]/operation_content[i+1];
                toforward(operation_content,i) 
                return operation_content;
                break;
            case'+':
                operation_content[i+1] = operation_content[i-1]+operation_content[i+1];
                toforward(operation_content,i) 
                return operation_content;
                break;
            case'-':
                operation_content[i+1] = operation_content[i-1]-operation_content[i+1];
                toforward(operation_content,i) 
                return operation_content;
                break;
            }

        }

    }
    for (var i=0 ; i < btn_del.length ; i++){
        //點選"AC"或"Del"鍵時觸動
        btn_del[i].onclick = function() {
            //判斷清除鍵
            if (this.value =='AC'){
                // 陣列為空，總合為空
                operation_content = [];
                sum.value = '';
            }
            else{
                //判斷退一格鍵
                if (this.value == 'Del'){
                    //將字串長度剪一
                    sum.value = sum.value.substr(0,sum.value.length-1) ;
                }
            }
        }
    }
    for (var i=0 ; i < btn_txt.length ; i++){
        //按數字與加減乘除鍵觸動
        btn_txt[i].onclick = function(){
    
        //判斷為"是數字"
        if ( !isNaN(this.value)){
            //字串能將直接加入
            sum.value += this.value;
        }
        //判別不是數字
        else{
                //將數值加入陣列
                operation_content.push(parseInt(sum.value));
                //清空sum
                sum.value = '';
                //將運算符號加入陣列
                operation_content.push(this.value);
                //若是長度大於3則運算
                if (operation_content.length >=3){
                    operation(operation_content)}
                //顯示結果
                now_sum.value = operation_content[0]    
            }
        }
    }
}
