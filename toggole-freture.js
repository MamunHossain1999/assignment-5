// const click1 = document.getElementById('btn');
// const click2 = document.getElementById('btn1');
// const click3 = document.getElementById('main');
// const click4 = document.getElementById('transation-container');

// click1.addEventListener('click', () => {
//     click1.classList.remove('hidden')
//     click2.classList.remove('hidden');
//     click3.classList.remove('hidden');
//     click4.lassList.remove('hidden');
//     click3.classList.add('main');
//   });



document.getElementById('btn1').addEventListener('click', function(){
    document.getElementById('main').classList.add('hidden');
    document.getElementById('btn1').classList.add('bg-lime-400')
    document.getElementById('btn').classList.remove('bg-lime-400')
})

document.getElementById('btn').addEventListener('click', function(){
    document.getElementById('main').classList.remove('hidden');
    document.getElementById('btn1').classList.remove('bg-lime-400')
    document.getElementById('btn').classList.add('bg-lime-400')
})