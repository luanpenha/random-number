const min = document.querySelector("#min")
const max = document.querySelector("#max")
const btn = document.querySelector(".btn")
const result = document.querySelector("#result")

const randomNumb = (min, max) => {{
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
  }}


btn.addEventListener('click', ()=>{
  const minValue = min.value
  const maxValue = max.value

  result.innerText = randomNumb(minValue, maxValue)
})
