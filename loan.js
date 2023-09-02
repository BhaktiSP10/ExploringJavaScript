var customer1 = {
    "customerName": "Zachary Macdonald",
    "phoneNumber": "+1 202-918-2132",
    "address": "Tempe AZ",
    "loanAmount": 250,
    "interest": 6,
    "loanTermYears": 4,
    "loanType": "Student Loan",
    "description": "Master's Degree",
    "Id": "101"
}
var customer2 = {
    "customerName": "Edward Martin",
    "phoneNumber": "+1 505-623-2666",
    "address": "Tempe AZ",
    "loanAmount": 10000,
    "interest": 12,
    "loanTermYears": 10,
    "loanType": "Business Loan",
    "description": "Subway Fanchise",
    "Id": "102"
}
var customer3 = {
    "customerName": "Bailey Lawrence",
    "phoneNumber": "+1 582-282-0350",
    "address": "Tempe AZ",
    "loanAmount": 1000,
    "interest": 15,
    "loanTermYears": 2,
    "loanType": "Personal Loan",
    "description": "Delayed Paycheck",
    "Id": "103"
}
var customer4 = {
    "customerName": "Zachary Macdonald",
    "phoneNumber": "+1 315-205-8918",
    "address": "Chandler AZ",
    "loanAmount": 12000,
    "interest": 6,
    "loanTermYears": 3,
    "loanType": "Education Loan",
    "description": "MBA",
    "Id": "104"
}
var customer5 = {
    "customerName": "Reece Miller",
    "phoneNumber": "+1 582-333-8018",
    "address": "Chandler AZ",
    "loanAmount": 20000,
    "interest": 12,
    "loanTermYears": 10,
    "loanType": "Business Loan",
    "description": "McDonald's Franchise",
    "Id": "105"
}
var customer6 = {
    "customerName": "Brandon Owen",
    "phoneNumber": "+1 220-344-7013",
    "address": "Tempe AZ",
    "loanAmount": 1200,
    "interest": 10,
    "loanTermYears": 4,
    "loanType": "Personal Loan",
    "description": "Delayed Paycheck",
    "Id": "106"
}
var customer7 = {
    "customerName": "Alex Luna",
    "phoneNumber": "+1 582-322-9645",
    "address": "Gilbert AZ",
    "loanAmount": 30000,
    "interest": 15,
    "loanTermYears": 10,
    "loanType": "Business Loan",
    "description": "SME Business",
    "Id": "107"
}

function calculateLoanAmount(c) {
    const i = c.interest / 1200
    return (c.loanAmount / i) * (1 - (1 / (1 + i) ** (c.loanTermYears * 12)))
}

function displayLoanDetails(c) {
    console.log(c)
    console.log(`Total loan amount - ${calculateLoanAmount(c)}`)
}

displayLoanDetails(customer1)
displayLoanDetails(customer2)
displayLoanDetails(customer3)
displayLoanDetails(customer4)
displayLoanDetails(customer5)
displayLoanDetails(customer6)
displayLoanDetails(customer7)
