Sdocument.addEventListener("DOMContentLoaded", function (){
    const targetEl = document.querySelector("body")
    function callback(mutations, observer){
        console.log(mutations)
    }
    const observer = new MutationObserver(callback);
    observer.observe(targetEl,{
        childList:true,
        attributes:true,
        characterData: true,
        subtree: true
    })
    setTimeout(()=>{
        targetEl.append(")))")
    },2000)
})
