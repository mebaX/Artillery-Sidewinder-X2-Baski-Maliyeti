var calculateBtn = document.querySelector(".calculate")
var selectElement = document.getElementById("filament");
var filamentMass = document.getElementById("mass")
var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var selectedOption = selectElement.options[0];

const PLAPr = 498, PLAPremiumPr = 528, TPUPr = 612
const pricePerkW = 1.21

function handleSelectionChange() {
    selectedOption = selectElement.options[selectElement.selectedIndex];
}
document.getElementById("filament").addEventListener("change", handleSelectionChange);

function PrPerkg() {
    var filamentPerKgPr

    switch (selectedOption.value) {
        case "P":
            filamentPerKgPr = PLAPr
            break;
        case "PP":
            filamentPerKgPr = PLAPremiumPr
            break;
        case "T":
            filamentPerKgPr = TPUPr
            break;
    }

    return filamentPerKgPr
}


function calculatePrice(prPerKg, mass) {

    var totalMinutes = Number(hours.value) * 60 + Number(minutes.value)

    var electricPrice = 
    (totalMinutes / 60) //hours
     * 700 //max electric per hour
    / 1000 // to kW
    * pricePerkW
    var filamentPrice = prPerKg * mass / 1000

    var totalPrice = electricPrice + filamentPrice
    return totalPrice
}

calculateBtn.addEventListener("click", function (e) {
    console.log("1 kg filament fiyatı :", PrPerkg(), "TL");
    console.log("Kullanılan filament miktarı :", Number(filamentMass.value), "g")
    // console.log("Kullanılan filament fiyatı :", calculatePrice(PrPerkg(), filamentMass.value), "TL");

    console.log(calculatePrice(PrPerkg(), filamentMass.value))

});