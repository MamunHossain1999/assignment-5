document.getElementById('donate').addEventListener('click', function(){
    const donate = parseFloat(document.getElementById('donation').value);
    const balance = parseFloat(document.getElementById('add-balance').innerText);
    const myAccount = parseFloat(document.getElementById('myAccount').innerText);
   
    // console.log(donate, balance, myAccount);
    if(isNaN(donate)){
        alert('invalid amount')
        return;
    }
    if( donate <= 0){
    alert('invalid amount')
    return;
    }
    const newBalance = myAccount - donate;
   
// 

if(newBalance < 0){
    alert('not enough amount')
    return;
}
document.getElementById('add-balance').innerText = donate + balance;

document.getElementById('myAccount').innerText =  newBalance;

my_modal_5.showModal()
document.getElementById('donate').value = '';
})