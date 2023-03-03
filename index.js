document.getElementById("input").addEventListener("input", (value) => {
    const bill = document.getElementById("input").value
    let tip = '';
    let temp = ""
    // console.log(bill)


    document.querySelectorAll(".btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            tip = e.target.value;
             temp = bill * btn.value / 100
            document.querySelector("#tip-amt").value = temp;
        })
    })

    document.getElementById("people").addEventListener("input", (e) => {
        const people = e.target.value
        // console.log(people)
        console.log(temp)
        console.log(parseInt(bill)+parseInt(temp))
        let Total = eval(parseInt(bill)+parseInt(temp))/parseInt(people)
        document.querySelector("#tip-total").value = Total
        // console.log(Total)
    })
})
function clearAll() {
    document.querySelector("#input").value = ""
    document.querySelector("#people").value = ""
    document.querySelector('#tip-amt').value = ""
    document.querySelector('#tip-total').value = ""
}








