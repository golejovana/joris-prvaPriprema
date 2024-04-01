function podaciForme() {
    // Prikupljanje unetih podataka iz forme
    let ocena = document.getElementById('ocena').value;
    let brojIndeksa = document.getElementById('broj-indeksa').value;
    let redniBrojIspita = document.getElementById('redni-broj-ispita').value;
    let datumIspita = document.getElementById('datum-ispita').value;
    let rok = document.querySelector('input[name="rok"]:checked');
    let polozila = document.getElementById('polozila').checked;

    // Validacija ocene
    if (ocena < 5 || ocena > 10) {
        console.log('Ocena mora biti u opsegu od 5 do 10.');
        return;
    }

    // Validacija broja indeksa
    let godina = brojIndeksa.split('/')[0];
    let broj = brojIndeksa.split('/')[1];
    if (brojIndeksa.length !== 9 || isNaN(godina) || isNaN(broj) || godina < 2000 || broj < 1 || broj > 1000) {
        console.log('Broj indeksa mora biti u formatu YYYY/XXXX (godina/broj), gde godina mora biti veća od 2000, a broj u opsegu od 1 do 1000.');
        return;
    }

    // Validacija checkbox-a za polaganje
    if ((ocena >= 6 && ocena <= 10) && !polozila) {
        console.log('Ako je ocena u opsegu od 6 do 10, checkbox "Položio/la" mora biti označen.');
        return;
    }


    // Formiranje JSON objekta
    let podaci = {
        ocena: ocena,
        brojIndeksa: brojIndeksa,
        redniBrojIspita: redniBrojIspita,
        datumIspita: datumIspita,
        rok: rok ? rok.value : null,
        polozila: polozila
    };

    // Vraćanje JSON objekta u vidu stringa
   return JSON.stringify(podaci);
    //console.log(podaci);
}

function submitForm() {
    let forma = document.getElementById('myForm');
    let rezultat = podaciForme();
    console.log(rezultat);
}

