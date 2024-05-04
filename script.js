// Date.toString in Italian
Date.toString = function() {
    let ris = ''
    let date = new Date()
    let day = date.getDay()
    let month = date.getMonth()
    switch (day) {
        case 0:
            ris += '<span style="color: #e11d48;">Domenica</span>'
            break
        case 1:
            ris += '<span style="color: #0284c7;">Lunedì</span>'
            break
        case 2:
            ris += '<span style="color: #0284c7;">Martedì</span>'
            break
        case 3:
            ris += '<span style="color: #0284c7;">Mercoledì</span>'
            break
        case 4:
            ris += '<span style="color: #0284c7;">Giovedì</span>'
            break
        case 5:
            ris += '<span style="color: #0284c7;">Venerdì</span>'
            break
        case 6:
            ris += '<span style="color: #0284c7;">Sabato</span>'
            break

    }

    ris += ' ' + date.getDate() + ' '

    switch (month) {
        case 0:
            ris += 'Gennaio'
            break
        case 1:
            ris += 'Febbraio'
            break
        case 2:
            ris += 'Marzo'
            break
        case 3:
            ris += 'Aprile'
            break
        case 4:
            ris += 'Maggio'
            break
        case 5:
            ris += 'Giugno'
            break
        case 6:
            ris += 'Luglio'
            break
        case 7:
            ris += 'Agosto'
            break
        case 8:
            ris += 'Settembre'
            break
        case 9:
            ris += 'Ottobre'
            break
        case 10:
            ris += 'Novembre'
            break
        case 11:
            ris += 'Dicembre'
            break
    }

    ris += ' ' + date.getFullYear()

    return ris
}

document.getElementById("result").innerHTML = Date.toString()