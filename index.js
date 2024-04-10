function podaciForme(){
    // Restartuj poruke o grešci!!!!!!!!!!!!!!!
    const greske = document.querySelectorAll('.error-message');
    greske.forEach(greska => greska.textContent = '');

    const ocena = document.getElementById('ocena').value;
    const brojIndeksa = document.getElementById('broj-indeksa').value;
    const indeks=brojIndeksa.split('/')
    const godina = indeks[0];
    const broj = indeks[1];
    const polozen = document.getElementById('polozen').checked;

    if (ocena < 5 || ocena > 10) {
        const ocenaError = document.getElementById('ocena-error');
        ocenaError.textContent = 'Ocena mora biti u opsegu [5-10].';
        return false;
    }
    
    if (brojIndeksa.length !== 9 || isNaN(parseInt(godina)) || isNaN(parseInt(broj)) || godina <= 2000 || broj < 1 || broj > 1000) {
        const indeksError= document.getElementById('broj-indeksa-error');
        indeksError.textContent = 'Broj indeksa mora biti u formatu XXXX/YYYY (godina/broj), gde godina mora biti veća od 1000, a broj u opsegu 1-1000.';
        return false;
    }

    if ((ocena >= 6 && ocena <= 10) && !polozen) {
        const polozenError=document.getElementById('polozen-error');
        polozenError.textContent = 'Ako je ocena u opsegu [6-10], checkbox "Polozila" mora biti označen.';
        return false;
    }
    
    return true;
}

const form=document.getElementById('forma');


function posalji(event){
    event.preventDefault(); 

    //Restartovanje greski
    const greske = document.querySelectorAll('.error-message');
    greske.forEach(greska => greska.textContent = '');

    // Validacija forme
    const valid = podaciForme();

    if (valid) {
        // Kreiranje JSON objekta
        const obj = {
            ocena: parseInt(document.getElementById('ocena').value),
            datumIzlaska: document.getElementById('datum-ispita').value,
            brojIndeksa: document.getElementById('broj-indeksa').value,
            rok: document.querySelector('input[name="rok"]:checked').value,
            redniBrojIzlaska: parseInt(document.getElementById('redni-broj-ispita').value),
            polozen: document.getElementById('polozen').checked
        };

        // Postavljanje JSON objekta u textarea
        const podaciForme=document.getElementById('podaci-forme');
        podaciForme.textContent = JSON.stringify(obj,null,4);

        // Resetovanje polja forme
        form.reset()
    }
};

form.addEventListener('submit', posalji);
//const btnPosalji = document.getElementById('btn-posalji');
//btnPosalji.addEventListener('click', posalji);