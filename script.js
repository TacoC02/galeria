let listaPokemones = [
    {
        id: 'Pikachu',
        nombre: 'Pikachu',
        enlace: './Imagenes/pikachu.jpg',
        descripcion: 'Pikachu es un Pokémon eléctrico muy popular pero para mi es malisimo.'
    },
    {
        id: 'Charizard',
        nombre: 'Charizard',
        enlace: './Imagenes/charizard.png',
        descripcion: 'Charizard es un Pokémon de tipo fuego y volador que es bueno pero ese daño por 2 a roca no me convence nada.'
    },
    {
        id: 'Eevee',
        nombre: 'Eevee',
        enlace: './Imagenes/eevee.png',
        descripcion: 'Eevee puede evolucionar en varios tipos diferentes y la mas buena se sabe que es jolteon.'
    }
];

let seleccionado = null;

function renderGaleria() {
    let contenedorBotones = document.getElementById('botones-pokemon');
    contenedorBotones.innerHTML = '';
    for (let i = 0; i < listaPokemones.length; i++) {
        let pokemon = listaPokemones[i];
        let boton = document.createElement('button');
        boton.className = 'pokemon-button';
        boton.onclick = () => mostrarPokemon(pokemon.id);
        boton.innerHTML = `
            <div class="top"></div>
            <div class="bottom"></div>
            <div class="center-circle">${pokemon.nombre}</div>
        `;
        contenedorBotones.appendChild(boton);
    }

    let pokemonInfo = document.getElementById('pokemon-info');
    pokemonInfo.innerHTML = '';
    for (let i = 0; i < listaPokemones.length; i++) {
        let pokemon = listaPokemones[i];
        let div = document.createElement('div');
        div.id = pokemon.id;
        div.style.display = (pokemon.id === seleccionado) ? 'block' : 'none';
        div.innerHTML = `
            <img id="${pokemon.id}-imagen" src="${pokemon.enlace}" alt="Imagen de ${pokemon.nombre}">
            <p id="${pokemon.id}-descripcion">${pokemon.descripcion}</p>
        `;
        pokemonInfo.appendChild(div);

        setTimeout(() => {
            const img = document.getElementById(`${pokemon.id}-imagen`);
            if (img) {
                img.onclick = function() {
                    this.classList.toggle('img-rotada');
                };
            }
        }, 0);
    }
}

function mostrarPokemon(id) {
    seleccionado = id;
    renderGaleria();
}

function agregarPokemon() {
    let enlace = document.getElementById('nuevo-enlace').value;
    let descripcion = document.getElementById('nueva-descripcion').value;
    let nombre = document.getElementById('nuevo-nombre').value.trim();

    if (enlace && descripcion && nombre) {
        let nuevoId = nombre.replace(/\s+/g, '');
        listaPokemones.unshift({
            id: nuevoId,
            nombre: nombre,
            enlace: enlace,
            descripcion: descripcion
        });
        seleccionado = nuevoId;
        renderGaleria();

        document.getElementById('nuevo-enlace').value = '';
        document.getElementById('nueva-descripcion').value = '';
        document.getElementById('nuevo-nombre').value = '';
    } else {
        alert('completa todos los cuadros pedazo de loco');
    }
}

window.onload = function() {
    renderGaleria();
};