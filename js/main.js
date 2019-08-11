document.getElementById("menu").addEventListener("click",function(){

    menu.classList.toggle('open');
    document.getElementById("navega").classList.toggle("show");
    document.getElementById('box').classList.toggle('moving');
  });

document.getElementById('filters').addEventListener('click',function(){
  document.getElementById('features').classList.toggle('deploy');
})