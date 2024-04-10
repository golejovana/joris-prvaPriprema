function popuniFormu() {

    const formJson = document.getElementById('podaci-forme').value;

    try {
        const formData = JSON.parse(formJson);

        const greska=document.getElementById('greska');

        if (!formData.ocena || !formData.datumIzlaska || !formData.brojIndeksa || !formData.rok || !formData.redniBrojIzlaska) {
            greska.textContent = 'Nedostaju neki podaci u JSON objektu.';
            return;
        }
        
        if (formData.ocena < 5 || formData.ocena > 10) {
            greska.textContent = 'Ocena mora biti u opsegu [5-10].';
            return;
        }

        const regex = /^\d{4}\/\d{4}$/;
        if (!regex.test(formData.brojIndeksa)) {
            greska.textContent = 'Broj indeksa mora biti u formatu XXXX/YYYY (godina/broj).';
            return;
        }

        const rokOptions = ['Januar', 'April', 'Jun', 'Septembar'];
        if (!rokOptions.includes(formData.rok)) {
            greska.textContent = 'Nepostojeći rok.';
            return;
        }

        if (formData.redniBrojIzlaska <= 0) {
            greska.textContent = 'Redni broj izlaska na ispit mora biti pozitivan broj.';
            return;
        }

        const ocenaElement = document.getElementById('ocena');
        const brojIndeksaElement = document.getElementById('broj-indeksa');
        const redniBrojIspitaElement = document.getElementById('redni-broj-ispita');
        const datumIzlaskaElement = document.getElementById('datum-ispita');
        const rokRadioDugme = document.querySelector(`input[name="rok"][value="${formData.rok}"]`);
        const polozenCheckbox = document.getElementById('polozen');

        // Postavljanje vrednosti na elemente forme
        ocenaElement.value = formData.ocena;
        brojIndeksaElement.value = formData.brojIndeksa;
        redniBrojIspitaElement.value = formData.redniBrojIzlaska;
        datumIzlaskaElement.value = formData.datumIzlaska;
        rokRadioDugme.checked = true;
        polozenCheckbox.checked = formData.polozen;

        const greske = document.querySelectorAll('.error-message');
        greske.forEach(greska => greska.textContent = '');
        
        document.getElementById('greska').textContent = ''; 
    } catch (error) {
        document.getElementById('greska').textContent = 'Greška pri čitanju JSON podataka.';
    }
}

const ucitaj=document.getElementById('ucitaj');
ucitaj.addEventListener('click', popuniFormu);







