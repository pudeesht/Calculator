let workingarray=[];
const btns = document.querySelectorAll(".btn");
const btn= Array.from(btns);
const clear=document.querySelector(".clearbtn");
const equal=document.querySelector(".equalbtn");
const screen=document.querySelector(".screen");


//funcion to push btn values(number/operator) to the working array & update the calculator screen
function btnclick()
{
    const original=this.textContent;
    const converted=Number(original);
    
    //pushes operators
    if (isNaN(converted))
        workingarray.push(original); 
    
    //pushes number
    else
        workingarray.push(converted);
        
 
    //updates the calcualtor screen
    screen.textContent+=original;

}




btn.forEach(element => {
    element.addEventListener('click', btnclick);
  });
  
clear.addEventListener("click",function()
{
    screen.textContent="";
    workingarray=[];

})

equal.addEventListener("click",equalclick);




function equalclick()
{

    let firstnum=0;
    let secondnum=0;
    let firstnumcompleted=false;
    let operator;
    let ans;

    for (let i =0 ; i<workingarray.length ;i++)
    {
        element=workingarray[i];
        
        //computes the first num for calc
        if (!firstnumcompleted)
        {
            
            if (!isNaN(element)){
                
                firstnum=(firstnum*10)+element;
                // console.log("firstnum is " + firstnum);
            }
            else 
            {
                //when an operartor comes, completes the first num and jumps to second num
                console.log("final firstnum " + firstnum);
                operator=element;
                firstnumcompleted=true;
                console.log("operator is "+ operator);
            }

        }


        else
        {
            //computes for the second num
            if (!isNaN(element))
                {
                    secondnum=(secondnum*10)+element;
                    console.log("2nd is " + secondnum);
                    
                }
            
            //if a operator is found
            else if(isNaN(element) )
            {

                console.log("final second number is -:" + secondnum);
                const temp=solve(firstnum,operator,secondnum);
                operator=element;
                firstnum=temp;
                console.log("Now the temp/firstnum is -:"+firstnum)
                secondnum=0;   
            }

            if (i===(workingarray.length-1))
                {
                    ans=solve(firstnum,operator,secondnum);
                    console.log("ans by "+firstnum+operator+secondnum);
                    workingarray=[ans];
                    screen.textContent=ans;

                }



        }


    }




    for (element  in workingarray)
        {
            console.log("hai"+workingarray[element]);
        }



}




function solve(num1,operation,num2)
{
    switch(operation)
    {
        case "+":
            return (num1+num2);
            
        case "-":
            return (num1-num2);
            
        case "x":
            return (num1*num2);
            
        case "÷":
            return (num1/num2);
    }
}