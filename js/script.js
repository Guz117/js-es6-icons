
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
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const iconContainer = document.querySelector('.container');

for (let i = 0; i < icon.length; i++) {
  const obj = icon[i];
	const iconCard = `
		<div class="icons">
			<i class="${obj.family} ${obj.prefix}${obj.name} icon" style="color:${obj.color}" ></i>
			<span>${obj.name}</span>
		</div>`;
        iconContainer.innerHTML += iconCard;
}        


const select = document.getElementById('icon');

select.addEventListener('change', function() {
    iconContainer.innerHTML = '';
    let type = select.value;
    if (type == 'animals') {
        const animal = icon.map((element) => {
            const {name, type, color, family, prefix} = element;
            return {name, type, color, family, prefix}
        });
        let animals = animal.filter((element) => {
            return element.type == 'animal';
        });
        animals.forEach((element) => {
            iconContainer.innerHTML += `
             		<div class="icons">
            			<i class="${element.family} ${element.prefix}${element.name} icon" style="color:${element.color}" ></i>
             			<span>${element.name}</span>
             		</div>`
        });
    } else if (type == 'vegetables') {
        const vegetable = icon.map((element) => {
            const {name, type, color, family, prefix} = element;
            return {name, type, color, family, prefix}
        });
        let vegetables = vegetable.filter((element) => {
            return element.type == 'vegetable';
        });
        vegetables.forEach((element) => {
            iconContainer.innerHTML += `
             		<div class="icons">
            			<i class="${element.family} ${element.prefix}${element.name} icon" style="color:${element.color}" ></i>
             			<span>${element.name}</span>
             		</div>`
        });
    } else if (type == 'users') {
        const user = icon.map((element) => {
            const {name, type, color, family, prefix} = element;
            return {name, type, color, family, prefix}
        });
        let users = user.filter((element) => {
            return element.type == 'user';
        });
        users.forEach((element) => {
            iconContainer.innerHTML += `
             		<div class="icons">
            			<i class="${element.family} ${element.prefix}${element.name} icon" style="color:${element.color}" ></i>
             			<span>${element.name}</span>
             		</div>`
        });
    } else if (type == 'all') {
        for (let i = 0; i < icon.length; i++) {
               const obj = icon[i];
             	const iconCard = `
             		<div class="icons">
             			<i class="${obj.family} ${obj.prefix}${obj.name} icon" style="color:${obj.color}" ></i>
             			<span>${obj.name}</span>
             		</div>`;
                     iconContainer.innerHTML += iconCard;
             }        
            
    }
    
}); 
    

