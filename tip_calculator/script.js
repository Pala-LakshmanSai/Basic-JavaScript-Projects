let billInput = document.getElementById('billTotalInput')

let tipInput = document.getElementById('tipInput')

let noOfPeople = Number(document.getElementById('numberOfPeople').innerText)

let perPersonTotal = document.getElementById('perPersonTotal')



const calculateBill = () => {
    let billPerPerson = (Number(billInput.value) + Number(billInput.value) * (Number(tipInput.value) / 100)) / noOfPeople
    perPersonTotal.innerText = `$${billPerPerson.toFixed(2)}`
}

let increasePeople = () => {
    noOfPeople += 1
    document.getElementById('numberOfPeople').innerText = noOfPeople
    calculateBill()
}

let decreasePeople = () => {
    if (noOfPeople <= 1) {
        alert("Hey! You cannot have less than 1 person")
        return
    } 
    noOfPeople -= 1
    document.getElementById('numberOfPeople').innerText = noOfPeople
    calculateBill()
}


