let balanceshow =document.querySelector('#amount');
let balance = JSON.parse(localStorage.getItem('balance'));
let input =document.querySelector('input');
let tbody =document.querySelector('tbody');

// let data =[
// //     {
// //     BeforeBalance :1500,
// //     logType :' deposit',
// //     logvalue : 1500,
// //     afterbalance :3000,
// // },
// //     {
// //     BeforeBalance :1500,
// //     logType :' deposit',
// //     logvalue : 1500,
// //     afterbalance :3000,
// // },
// //     {
// //     BeforeBalance :1500,
// //     logType :' deposit',
// //     logvalue : 1500,
// //     afterbalance :3000,
// // },
// ];

let data = JSON.parse(localStorage.getItem('data')) || [];


// tbody.innerHTML=`
//     <tr>
//      <th>1</th>
//      <th>1500</th>
//      <th>deposit</th>
//      <th>1500</th>
//      <th>3000</th>
//     </tr>
// `;

function renderlogs(){
    tbody.innerHTML='';
    data.forEach((el,index) =>{
        tbody.innerHTML+=`
    <tr>
     <th>${index+1}</th>
     <th>${el.BeforeBalance}</th>
     <th>${el.logType}</th>
     <th>${el.logvalue}</th>
     <th>${el.afterbalance}</th>
     <th><button class='btn btn-danger' onclick='delletrow(${index},${el.BeforeBalance})'>del</button></th>
    </tr>
`;
    });
    saveToLocalStorage() ;
};
renderlogs();
function showbalance(val){
    balanceshow.innerHTML =val;
    
};
showbalance(balance);

function deposit(){
    let obalance=balance;
    // console.log(balance+ +input.value);
    // showbalance(balance+ +input.value);
    // balance += +input.value
    balance = balance+ +input.value;
    showbalance(balance);
    let roeobj={
        BeforeBalance : obalance ,
        logType :' deposit',
        logvalue : +input.value,
        afterbalance :balance,
    };
    data.push(roeobj);
    renderlogs();
    
};
// deposit();

function withdraw(){
    if(input.value>balance){
        alert('value is higher than balance');
    }else{
        // balance = balance+ +input.value;
        let obalance=balance;
        balance -= +input.value;
        showbalance(balance);
        let roeobj={
            BeforeBalance : obalance ,
            logType :' withdraw',
            logvalue : +input.value,
            afterbalance :balance,
        };
        data.push(roeobj);
        renderlogs();
    };
};
// withdraw();
function delletrow(index,BeforeBalance){
    balance=BeforeBalance;
    data.splice(index,1);
    renderlogs();
    showbalance(balance);
};

function saveToLocalStorage() {
  localStorage.setItem("data", JSON.stringify(data));
  localStorage.setItem('balance',balance);
};
// nxfbxjytjcmtym
