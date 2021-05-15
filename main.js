function OutputMoneyBorrow(elementId) {
    let moneyBorrow = Number(document.getElementById("moneyBorrow").value);
    let timeBorrow = Number(document.getElementById("timeBorrow").value);
    let interestRate = Number(document.getElementById("interestRate").value);

    if (moneyBorrow == '' || timeBorrow == '' || interestRate == '' || timeBorrow > 12 || timeBorrow <= 0 ){
        return alert('You must enter information or time not true!!!');
    }else{
        let moneyMonth = Math.round((moneyBorrow/timeBorrow)*100) / 100;
        let excessCash = moneyBorrow;

        for (let i = 0; i < timeBorrow; i++){
            let interestRateMonth = Math.round(((excessCash * interestRate /100) / 12) * 100) / 100;
            let moneyPaidMonth = Math.round((moneyMonth + interestRateMonth)*100)/100;
            excessCash = Math.round((excessCash - moneyMonth)*100)/100;
            CreateInfoMoneyInTable(excessCash, moneyMonth, interestRateMonth, moneyPaidMonth);

        }
    }
    document.getElementById("moneyBorrow").value = '';
    document.getElementById("timeBorrow").value = '';
    document.getElementById("interestRate").value = '';
}

function CreateInfoMoneyInTable(x, y, z, t){
    let table = document.getElementById("table-output");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = x + ' VNĐ';
    cell2.innerHTML = y + ' VNĐ';
    cell3.innerHTML = z + ' VNĐ';
    cell4.innerHTML = t + ' VNĐ';
}

function DeleteValueInTable(){
    confirm('Do you clear table?')
    var tableHeaderRowCount = 1;
    var table = document.getElementById("table-output");
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++){
        table.deleteRow(tableHeaderRowCount);
    }
}