const naira = document.getElementById('naira');
naira.addEventListener("input", nairaConverter);

function nairaConverter(e){
        console.log(naira);
        let nairaC = e.target.value;
        document.getElementById('dollars').value = nairaC / 1;
        document.getElementById('pounds').value = nairaC * 39.370;
        document.getElementById('Euro').value = nairaC * 3.2808;
       document.getElementById('dollars').value = nairaC * 1.0938;
}
