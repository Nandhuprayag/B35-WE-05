console.log("Day- 5 Tasks");
var arr=[1,2,3,4];
//Print the Odd numbers in an array
console.log(" A:Print odd numbers in an array")
let getOddNumber=function(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2==0)
        {
            continue;
        }
        else
        {
          console.log(arr[i])  
        }
    }
}
getOddNumber(arr)
//Convert all the strings to title caps
console.log("B:Convert all the strings to title caps")
var getstring=function(string)
{
 return string.toUpperCase();

};
console.log(getstring("hello guvi"))
//Sum of all numbers in an array
console.log("C:Sum of all numbers in an array");
let sum=0;
let getsum=function(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        sum +=arr[i];
    }
 console.log("SUM =",  sum);
}
getsum(arr);

function getprime(number)
{
    if(number<=1)
    {
        return false;
    }
    else
    {
        for(let i=2;i<number;i++)
        {
            if(number % i==0)
            {
                return false;
            }
        }
        return true;
    }
}
const res=getprime(3);
console.log(res)

