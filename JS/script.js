const brithDate = document.getElementById("brithDate")
const calculateBTN = document.getElementById("calculateBTN")
const years = document.getElementById("years")
const months = document.getElementById("months")
const days = document.getElementById("days")
const message = document.getElementById("message")

calculateBTN.addEventListener("click", ()=>{
    const birthDateValue = brithDate.value

    // validation
    if (birthDateValue === ""){
        message.textContent = "Please Enter Your Date Of Birth";
        return;
    }

    const birth = new Date(birthDateValue)
    const today = new Date()

    // future date check
    if(birth > today){
        message.textContent = "Your date is not valid"
        return
    }

    message.textContent = ""
    let ageYear = today.getFullYear()- birth.getFullYear()
    let ageMonth = today.getMonth()- birth.getMonth()
    let ageDays = today.getDate()- birth.getDate()

    // negative date correction
    if (ageDays < 0){
        ageMonth--
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0)
        ageDays += previousMonth.getDate()
    }

    // negative month correction
    if (ageMonth < 0){
        ageYear--
        ageMonth += 12
    }
    years.textContent = ageYear
    months.textContent = ageMonth
    days.textContent = ageDays
})