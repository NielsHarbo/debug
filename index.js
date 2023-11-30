window.addEventListener("DOMContentLoaded", function () {
    for (const [key, value] of Object.entries(ENTRIES)) {
        let element = create("option")
        element.value = key
        element.append(value[0])
        select("#destination").appendChild(element)
    }
})
