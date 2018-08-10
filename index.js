// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }
//

const img = document.querySelector('#foreground');
const button = document.querySelector('#save_lincoln');
const input = document.querySelector('#interval');





let fadeOut = () =>
{
img.style.opacity = 1
  setInterval(()=>
  {
    img.style.opacity -= 0.01;
  }, input.value/100)
}
button.addEventListener('click', fadeOut);
