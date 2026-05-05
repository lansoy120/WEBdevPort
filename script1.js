function calculate() {
    // Get values from inputs and convert to numbers
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);

    // Check if inputs are valid numbers
    if (isNaN(n1) || isNaN(n2)) {
        alert("Please enter valid numbers");
        return;
    }

    // Perform calculations
    document.getElementById('sum').innerText = "Sum: " + (n1 + n2);
    document.getElementById('difference').innerText = "Difference: " + (n1 - n2);
    document.getElementById('product').innerText = "Product: " + (n1 * n2);
    
    // Handle division by zero for Quotient and Remainder
    if (n2 !== 0) {
        document.getElementById('quotient').innerText = "Quotient: " + (n1 / n2);
        document.getElementById('remainder').innerText = "Remainder: " + (n1 % n2);
    } else {
        document.getElementById('quotient').innerText = "Quotient: Cannot divide by zero";
        document.getElementById('remainder').innerText = "Remainder: N/A";
    }
}

function clearFields() {
    // Reset output text to original labels seen in image_57e1be.png
    document.getElementById('sum').innerText = "Sum: ";
    document.getElementById('difference').innerText = "Difference: ";
    document.getElementById('product').innerText = "Product: ";
    document.getElementById('quotient').innerText = "Quotient: ";
    document.getElementById('remainder').innerText = "Remainder: ";
}