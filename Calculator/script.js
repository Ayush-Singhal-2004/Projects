let result = "";
let ans = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(document.getElementById("inputBox").value == "Error")
        {
            document.getElementById("inputBox").value = "";
        }
        try
        {
            if(e.target.innerHTML == '=')
            {
                document.getElementById("inputBox").value = eval(result);
                ans = eval(result)+"";
                result = ans;
            }
            else if(e.target.innerHTML == 'AC')
            {
                document.getElementById("inputBox").value = "";
                result = "";
                ans = "";
            }
            else if(e.target.innerHTML == "&lt;-")
            {
                let backStr = result.substring(0,(result.length)-1);
                document.getElementById("inputBox").value = backStr;
                result = backStr;
            }
            else if(e.target.innerHTML == "+/-")
            {
                //TODO:
            }
            else
            {
                document.getElementById("inputBox").value += e.target.innerHTML;
                result+=e.target.innerHTML;
            }
        }
        catch(err)
        {
            document.getElementById("inputBox").value = "Error";
            result = "";
            ans = "";
        }
    });
});