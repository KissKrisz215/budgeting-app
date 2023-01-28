//Total Balance
const balanceElement = document.getElementById('balance');

//Value Input
const valueInputElement = document.querySelector('input');

// Income/expense
const selectElement = document.querySelector('select');

//Adittion button
const adittionButtonElement = document.querySelector('footer button');

//Entry list
const entryListElement = document.querySelector('section ul');

//Adds the entered inputs to the Total Balance
function updateBalance(){
    let total = 0;
    for(let item of entryListElement.children){
        const valueElement = item.querySelector('strong');
        const operationElement = item.querySelector('span');

        const value = parseInt(valueElement.innerText);
        const operation = operationElement.innerText;

        if(operation === '+'){
            total += value;
        }else if(operation === '-'){
            total -= value;
        }
    }
    balanceElement.innerText = total + "$";
}

//Add InnerHTML to entryListElement depending expense/income
function addEntry(amount, operation){
    if(operation === 'expense'){
        entryListElement.innerHTML += `  <li class="expense">
    <em>Description</em>
    <span>-</span>
    <strong>${amount}$</strong>
  </li>`;
    }else if(operation === 'income'){
        entryListElement.innerHTML += `  <li class="income">
    <em>Description</em>
    <span>+</span>
    <strong>${amount}$</strong>
  </li>`;
}
valueInputElement.value = '';
updateBalance();
    }

// Takes the value from the input and select element and passes it to addEntry
adittionButtonElement.onclick = function(){
    const amount = valueInputElement.value;
    const operation = selectElement.value;
    console.log(amount, operation);
    addEntry(amount, operation);
}