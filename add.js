import { basisCitaten } from "./citaten.js";
localStorage.setItem('opgeslagenCitaten', JSON.stringify (basisCitaten));


document.querySelector('form.add').addEventListener('submit', (event) => {
    event.preventDefault();
    voegToe();
  });
  
  function voegToe() {
    // Haal waarden op
    const titel = document.getElementById('titel').value.trim();
    const beschrijving = document.getElementById('beschrijving').value.trim();
    const prijs = document.getElementById('prijs').value.trim();
  
    // Eenvoudige validatie
    if (!titel || !beschrijving|| !prijs) {
      alert('Vul alle velden in!');
      return;
    }
  
    // Voorbeeld: gegevens opslaan in localStorage
    const citaten = JSON.parse(localStorage.getItem('opgeslagenCitaten') || '[]');
    citaten.push({ titel, beschrijving, prijs });
    localStorage.setItem('opgeslagenCitaten', JSON.stringify(citaten));

  
    alert('Citaat toegevoegd!');
    // Optioneel: formulier resetten
    document.querySelector('form.add').reset();
    window.location.href = 'index.html';
  }
  

 