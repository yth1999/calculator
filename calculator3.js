window.onload = function(){
    //用來存放輸入的字串
    var array =[];
    // 獲得按鍵元素
    var btn_txt = document.getElementsByClassName('btn');
    // 總和視窗內容，因txt只有一個因此總是get index 0
    var sum = document.getElementsByClassName('txt')[0];
    // 清除與退一格按鍵
    var btn_del = document.getElementsByClassName('btn-click');

    for (var i=0 ; i < btn_del.length ; i++){
        //點選"AC"或"Del"鍵時觸動
        btn_del[i].onclick = function() {
            //判斷清除鍵
            if (this.value =='AC'){
                // 陣列為空，總合為空
                array = [];
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
        else{
            //判別等號
            if (this.value == '='){
                //將數值加入陣列
                array[array.length] = parseInt(sum.value);
                console.log(array)
                //可改用switch case
                for (var i=0 ; i <array.length ;i++){
                    console.log(i,array.length)
                    if (array[i]== "*"){
                        array[i+1] = array[i-1]*array[i+1]
                        console.log(array)
                    }
                    else{
                        if(array[i]== "/"){
                            array[i+1] = array[i-1]/array[i+1]
                        }     
                        else{
                            if(array[i]== "+"){
                                array[i+1] = array[i-1]+array[i+1]
                            }
                            else{
                                if(array[i]== "-"){
                                    array[i+1] = array[i-1]-array[i+1]
                                }
                            }
                        }
                    }
                }
                sum.value = array[array.length-1]
                array=[]
            }
            else{
                //先將sum的value加入陣列，再將加減乘除符號直接放入陣列
                array[array.length] = parseInt(sum.value);
                array[array.length] = this.value;
                //清空sum
                sum.value = ''
                console.log(array)
            }
        }
        }
    }
}