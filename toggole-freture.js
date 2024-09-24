document.getElementById('btn').addEventListener('click', function(){
    console.log('click the show botton')

    document.getElementById('btn').classList.add('hidden');

});
document.getElementById('btn').addEventListener('click', function(){
    console.log('click the show botton')

    document.getElementById('btn').classList.remove('hidden');

});
document.getElementById('btn1').addEventListener('click', function(){
    console.log('click the show ')


    

    document.getElementById('btn1').classList.remove('hidden');
    document.getElementById('btn1').classList.add('hidden');
})