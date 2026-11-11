document.getElementById("fifteenpercent").onclick=computeTip;
document.getElementById("twentypercent").onclick=computeTip;
document.getElementById("twentyfivepercent").onclick=computeTip;

function computeTip() {
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    let tipPercent = parseInt(this.textContent);
    let total = subtotal * tipPercent / 100;
    document.getElementById("total").textContent = "Total: $" + total;

    // Show it in the span 
}