
/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per 
ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per 
visualizzare le icone del colore corrispondente.

Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari 
tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla 
select, visualizzare solamente le icone corrispondenti.
*/

const icon = [
    {
        name: 'cat',
        type: 'animal',
        color: '#6d6dfa',
        font: 'fas',
        awesome: 'fa-'

    },
    {
        name: 'crow',
        type: 'animal',
        color: '#6d6dfa',
        font: 'fas',
        awesome: 'fa-'
    },
    {
        name: 'dog',
        type: 'animal',
        color: '#6d6dfa',
        font: 'fas',
        awesome: 'fa-'
    },
    {
        name: 'dove',
        type: 'animal',
        color: '#6d6dfa',
        font: 'fas',
        awesome: 'fa-'
    },
    {
        name: 'dragon',
        type: 'animal',
        color: '#6d6dfa',
        font: 'fas',
        awesome: 'fa-'
    },
    {
        name: 'horse',
        type: 'animal',
        color: '#6d6dfa',
        font: 'fas',
        awesome: 'fa-'
    },
    {
        name: 'hippo',
        type: 'animal',
        color: '#6d6dfa',
        font: 'fas',
        awesome: 'fa-'
    },
    {
        name: 'fish',
        type: 'animal',
        color: '#6d6dfa',
        font: 'fas',
        awesome: 'fa-'
    },
    {
        name: 'carrot',
        type: 'vegetable',
        color: '#ffa500',
        font: 'fas',
        awesome: 'fa-'
    },
    {
        name: 'apple-alt',
        type: 'vegetable',
        color: '#ffa500',
        font: 'fas',
        awesome: 'fa-'
    },
    {
        name: 'lemon',
        type: 'vegetable',
        color: '#ffa500',
        font: 'fas',
        awesome: 'fa-'
    },
    {
        name: 'pepper-hot',
        type: 'vegetable',
        color: '#ffa500',
        font: 'fas',
        awesome: 'fa-'
    },
    {
        name: 'user-astronaut',
        type: 'user',
        color: '#800080',
        font: 'fas',
        awesome: 'fa-'
    },
    {
        name: 'user-graduate',
        type: 'user',
        color: '#800080',
        font: 'fas',
        awesome: 'fa-'
    },
    {
        name: 'user-ninja',
        type: 'user',
        color: '#800080',
        font: 'fas',
        awesome: 'fa-'
    },
    {
        name: 'user-secret',
        type: 'user',
        color: '#800080',
        font: 'fas',
        awesome: 'fa-'
    },
];

const iconContainer = document.querySelector('.container');

for (let i = 0; i < icon.length; i++) {
  const obj = icon[i];
	const iconCard = `
		<div class="icons">
			<i class="${obj.font} ${obj.awesome}${obj.name} icon" style="color:${obj.color}" ></i>
			<span>${obj.name}</span>
		</div>`;
        iconContainer.innerHTML += iconCard;
}        
