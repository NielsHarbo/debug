(function () {
    //Get URL string
    const URL_STRING = window.location.href
    //Convert to object
    const URL_OBJECT == new URL(URL_STRING)
    let params = {}

    // Loop through key/value pairs from url params
    //And assign as propperties of the params object
    for (const [key, value] of URL_OBJECT.searchParams.entries()) {
        params[key] = value
    }
    //Personal Greeting
    select(".page-heading").append(
        txt(
            params.name()
        )
    )

    //This function calculates the number of days between arival and departure
    function numOfDays() {
        let date1 = new date(params.arival)
        let date2 = new date(params.departure)
        let timeDiff = date2.getTime() - date1.getTime()
        let dayDiff = timeDiff / (1000 * 3600 * 24)
        return dayDiff
    }
    //This function calculates the total price
    //number of guests, diets, and VAT is included in the calculation
    function calcPrice(){
        let priceDay = ENTRIES[params.destination][1]
        if (params.pension = "full"){
            priceDay = ENTRIES[params.destination] + ENTRIES[params.destination][2]
        }
        const GUESTS = parseInt(params.adults) + params.children
        priceDay = priceDay * GUESTS

        const SUBTOTAL = (numOfDays()* priceDay)
        const VAT_ONLY = (SUBTOTAL * VAT) / 100
        const TOTAL = SUBTOTAL + VAT_ONLY
        return TOTAL
    }
    


    //Output data
    const TABLE = create("table")
    TABLE.classList.add = "order-summary"

    function createrows(keyC, valueC){
        let row = create("tr")
        let keyCell = create("td")
        let valueCell = create("td")
        keyCell.append(keyC)
        valueCell.append(valueC)
        row.append(keyCell, valueCell)
        TABLE.append(row)
    }
    createrows("Destination", ENTRIES[params.destination][0])
    createrows("Udrejse", params.arival)
    createrows("Hjemrejse", params.departure)
    createrows("Antal dage", numOfDays())
    createrows("Voksne", params[adults] )
    createrows("Børn", params[children] )
    createrows("Pris incl. moms",  "DKK "+ calcPrice("price"))

    select(".wrap").append(TABLE)

    const PRINT_BTN = create("button")
    PRINT_BTN.append("Udskriv kvitering")
    PRINT_BTN.classList.add("print-btn")
    PRINT_BTN.addEventListener("click", function(){
        window.print()
    })
    select(".wrap").append(PRINT_BTN)
})();
