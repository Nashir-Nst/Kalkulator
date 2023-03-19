function cetakHasilTmbah() {
    var calc = document.getElementById("kalkulator");
    var angka1 = parseFloat(calc.angka1.value);
    var angka2 = parseFloat(calc.angka2.value);
    var result = angka1 + angka2;
    calc.hasil.value = result;

    if (isNaN(angka1)) {
        alert ("Maaf yang Anda Input bukan Angka");
    }

    else if (isNaN(angka2)) {
        alert ("Maaf yang Anda Input bukan Angka");
    }

    else {
      
        calc.hasil.value = result;
    }
       
}

function cetakHasilKurang() {
    var calc = document.getElementById("kalkulator");
    var angka1 = calc.angka1.value;
    var angka2 = calc.angka2.value;
    var result = angka1 - angka2;
    calc.hasil.value = result;
    
    if (isNaN(angka1)) {
        alert ("Maaf yang Anda Input bukan Angka");
    }

    else if (isNaN(angka2)) {
        alert ("Maaf yang Anda Input bukan Angka");
    }

    else {
      
        calc.hasil.value = result;
    }
}

function cetakHasilKali() {
    var calc = document.getElementById("kalkulator");
    var angka1 = calc.angka1.value;
    var angka2 = calc.angka2.value;
    var result = angka1 * angka2;
    calc.hasil.value = result;

    if (isNaN(angka1)) {
        alert ("Maaf yang Anda Input bukan Angka");
    }

    else if (isNaN(angka2)) {
        alert ("Maaf yang Anda Input bukan Angka");
    }

    else {
      
        calc.hasil.value = result;
    }
}

function cetakHasilBagi() {
    var calc = document.getElementById("kalkulator");
    var angka1 = calc.angka1.value;
    var angka2 = calc.angka2.value;
    var result = angka1 / angka2;
    calc.hasil.value = result;

    if (isNaN(angka1)) {
        alert ("Maaf yang Anda Input bukan Angka");
    }

    else if (isNaN(angka2)) {
        alert ("Maaf yang Anda Input bukan Angka");
    }

    else {
      
        calc.hasil.value = result;
    }
}

function cetakHasilPangkat() {
    var calc = document.getElementById("kalkulator");
    var angka1 = calc.angka1.value;
    var angka2 = calc.angka2.value;
    var result = (Math.pow(angka1, angka2));
    calc.hasil.value = result;

    if (isNaN(angka1)) {
        alert ("Maaf yang Anda Input bukan Angka");
    }

    else if (isNaN(angka2)) {
        alert ("Maaf yang Anda Input bukan Angka");
    }

    else {
      
        calc.hasil.value = result;
    }
}


    



