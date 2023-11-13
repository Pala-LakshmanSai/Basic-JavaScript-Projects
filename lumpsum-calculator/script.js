document.querySelector("button").onclick = () => {
    let totalInvesment = document.getElementById("monthly_investment_value").value
    let expectedReturnValue = document.getElementById("expected_return_value").value
    let timePeriodValue = document.getElementById("time_period_value").value
    let investedAmount = totalInvesment
    let totalValue = totalInvesment * Math.pow((1 + (expectedReturnValue / 100)), 20)
    let estimatedReturns =  totalValue - totalInvesment
    document.getElementById("invested-amount-result").innerText = investedAmount
    document.getElementById("est-returns-result").innerText = estimatedReturns.toFixed(0)
    document.getElementById("total-value-result").innerText = totalValue.toFixed(0)
}