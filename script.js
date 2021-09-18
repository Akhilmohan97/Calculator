
            function buttonClick(a)
            {
                document.getElementById("display").value+=a ;
               
            }


        function erase()
        {
            document.getElementById("display").value= "";
        }
        function get()
        {
           var b= document.getElementById("display").value;
           document.getElementById("display").value="";
        }