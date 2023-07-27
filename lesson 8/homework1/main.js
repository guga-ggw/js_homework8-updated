const btn = document.querySelector('#btn')
const num = document.querySelector('#num')
const xarisxi = document.querySelector('#to')
const resulttxtx = document.querySelector('#result')
const reset = document.querySelector('#reset')


reset.addEventListener('click', ()=>{
    window.location.reload()
   })

btn.addEventListener('click', () => {
   let number = num.value
   let xarisxinum = xarisxi.value
   number = Number(number)
   xarisxinum = Number(xarisxinum)

   if (isNaN(number) || isNaN(xarisxinum)) {
       console.log('Please enter valid numbers.')
       reset.style.display = 'flex'
       return
   }

   const expo = (base, exponent, func) => {
        if (exponent === 0) {
            return 1
        } else if (exponent > 0) {
            return base * expo(base, exponent - 1, func)
        } else {
            return 1 / expo(base, -exponent, func)
        }
   }

   const result = expo(number, xarisxinum, (ricxvi) => ricxvi)
   resulttxtx.innerHTML = result
   reset.style.display = 'flex'
   
});