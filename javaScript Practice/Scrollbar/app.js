function vali() {
    let filter = document.getElementById("myinput").value.toUpperCase()
    let table = document.getElementById("mytable")
    let tablerow = table.getElementsByTagName('tr')

    for (let i = 1; i < tablerow.length; i++) {
        tabledata = tablerow[1].getElementsByTagName('td')['0']
        if (tabledata) {
            let data = tabledata.textContent || tabledata.innerHTML
            if (data.toUpperCase().indexOf(filter) > -1) {
                tablerow[i].style.display = ""
            }
            else {
                tablerow[i].style.display = "none"
            }
        }
    }
}