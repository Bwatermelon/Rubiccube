//---------------Edit the Number of the items function -------------------------


var numMin = 1;  
        var numMax = 10;  
        function add(){  
            var num = document.getElementById("num").value;       
            if(num==numMax || num > numMax){  
                document.getElementById("num").value = numMin;  
            }else{  
                document.getElementById("num").value++;  
            }  
        }  
          
        function minus(){  
            var num = document.getElementById("num").value;  
            if(num==numMin || num < numMin){  
                document.getElementById("num").value = numMax;  
            }else{  
                document.getElementById("num").value--;  
            }  
        }  
          
        function check(){  
            var num = document.getElementById("num");  
            if (isNaN(num.value)){  
                alert("Only number！");  
                num.value="";  
            }  
        }  