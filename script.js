const firstName = prompt("Zadejte jméno", "př. Alena").trim();
const lastName = prompt("Zadejte příjmení", "př. Nováková").trim();

const removeAccents = str =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const email = removeAccents(lastName).slice(0, 5).toLowerCase() + removeAccents(firstName).slice(0, 3).toLowerCase() + "@fit.cvut.cz";

document.body.innerHTML = `<p>Vaše e-mailová adresa je: ${email}</p>`
