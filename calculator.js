 function insert(num){
        document.form.calculator.value=document.form.calculator.value+num;
        }
        function equal(){
        var exp = document.form.calculator.value;
        if(exp){
        document.form.calculator.value=eval(document.form.calculator.value);
        }
        }
        function c(){
        document.form.calculator.value=" ";
        }
