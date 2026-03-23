
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let today=days[new Date().getDay()]

document.querySelectorAll(".day").forEach(cell=>{
if(cell.innerText===today){
cell.style.background="#b8f5b1"
}
})