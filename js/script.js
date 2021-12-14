
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

// for (let i = 0; i < icon.length; i++) {
//   const obj = icon[i];
// 	const iconCard = `
// 		<div class="icons">
// 			<i class="${obj.font} ${obj.awesome}${obj.name} icon" style="color:${obj.color}" ></i>
// 			<span>${obj.name}</span>
// 		</div>`;
//         iconContainer.innerHTML += iconCard;
// }        


const select = document.getElementById('icon');

select.addEventListener('change', function() {
    iconContainer.innerHTML = '';
    let type = select.value;
    if (type == 'animals') {
        const animal = icon.map((element) => {
            const {name, type, color, font, awesome} = element;
            return {name, type, color, font, awesome}
        });
        let animals = animal.filter((element) => {
            return element.type == 'animal';
        });
        animals.forEach((element) => {
            iconContainer.innerHTML += `
             		<div class="icons">
            			<i class="${element.font} ${element.awesome}${element.name} icon" style="color:${element.color}" ></i>
             			<span>${element.name}</span>
             		</div>`
        });
    } else if (type == 'vegetables') {
        const vegetable = icon.map((element) => {
            const {name, type, color, font, awesome} = element;
            return {name, type, color, font, awesome}
        });
        let vegetables = vegetable.filter((element) => {
            return element.type == 'vegetable';
        });
        vegetables.forEach((element) => {
            iconContainer.innerHTML += `
             		<div class="icons">
            			<i class="${element.font} ${element.awesome}${element.name} icon" style="color:${element.color}" ></i>
             			<span>${element.name}</span>
             		</div>`
        });
    } else if (type == 'users') {
        const user = icon.map((element) => {
            const {name, type, color, font, awesome} = element;
            return {name, type, color, font, awesome}
        });
        let users = user.filter((element) => {
            return element.type == 'user';
        });
        users.forEach((element) => {
            iconContainer.innerHTML += `
             		<div class="icons">
            			<i class="${element.font} ${element.awesome}${element.name} icon" style="color:${element.color}" ></i>
             			<span>${element.name}</span>
             		</div>`
        });
    } else if (type == 'all') {
        for (let i = 0; i < icon.length; i++) {
               const obj = icon[i];
             	const iconCard = `
             		<div class="icons">
             			<i class="${obj.font} ${obj.awesome}${obj.name} icon" style="color:${obj.color}" ></i>
             			<span>${obj.name}</span>
             		</div>`;
                     iconContainer.innerHTML += iconCard;
             }        
            
    }
    
}); 
    

