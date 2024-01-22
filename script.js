
const checkBtn = document.getElementById("check-btn")
const result = document.getElementById("result")


const cleanText = (txt) =>{
    let res = txt.toLowerCase().trim().replace(/[^0-9a-z]/g,"")
    return res
}    

const emptyValue = () =>{
    let textInput = document.getElementById("text-input").value
    console.log(textInput)
    if(textInput.trim().length === 0){
        alert("Please input a value");
    }
    else{
        palindrome(textInput)
    }
}
const palindrome = (textInput) =>{
    let t = cleanText(textInput)
    let rev = t.split("")
    .reverse()
    .join("")
    
    if(t == rev ){
        result.textContent = `${textInput} is a palindrome`
    }
    else{
        result.textContent = `${textInput} is not a palindrome`
        
    }
   
}
checkBtn.addEventListener("click", emptyValue)




