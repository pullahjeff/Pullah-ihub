const Meter = document.getElementById('Meter');
Meter.addEventListener("input", nairaConverter);

function nairaConverter(e){
        console.log(Meter);
        let nairaC = e.target.value;
        document.getElementById('Meter').value = nairaC / 1;
        document.getElementById('Inches').value = nairaC / 39.370;
        document.getElementById('Feet').value = nairaC * 3.2808;
        document.getElementById('Yard').value = nairaC * 1.0936;
}