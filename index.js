
// Verificar si el valor del filtro existe en localStorage
const storedFilter = localStorage.getItem('filterValue');

// Obtener el filtro seleccionado
const selectedFilterInput = document.querySelector('form.filters input[name="color"]:checked');
const selectedFilter = storedFilter ? storedFilter : selectedFilterInput.value;

// Guardar el valor del filtro en localStorage
if (!storedFilter) {
	localStorage.setItem('filterValue', selectedFilter);
}

// Definir arrays de bingo
const bingoBoards = [
	{
		title: "Tabla Verde #23788",
		color: "verde",
		board: [
			[11, 18, 33, 49, 68],
			[1, 22, 34, 58, 71],
			[5, 27, "FREE", 56, 73],
			[4, 29, 41, 55, 72],
			[15, 20, 32, 54, 75]
		]
	},
	{
		title: "Tabla Verde #23787",
		color: "verde",
		board: [
			[3, 17, 41, 48, 72],
			[8, 19, 33, 57, 74],
			[13, 28, "FREE", 52, 63],
			[12, 25, 40, 56, 75],
			[5, 20, 34, 46, 66]
		]
	},
	{
		title: "Tabla Verde #29075",
		color: "verde",
		board: [
			[2, 20, 34, 46, 65],
			[14, 24, 37, 58, 71],
			[11, 28, "FREE", 53, 75],
			[9, 22, 43, 60, 72],
			[8, 30, 33, 56, 68]
		]
	},
	{
		title: "Tabla Verde #29076",
		color: "verde",
		board: [
			[15, 26, 40, 47, 68],
			[6, 20, 42, 46, 66],
			[14, 29, "FREE", 48, 70],
			[7, 25, 31, 59, 71],
			[11, 27, 44, 50, 72]
		]
	},
	{
		title: "Tabla Verde #29077",
		color: "verde",
		board: [
			[9, 28, 42, 57, 67],
			[1, 30, 40, 58, 72],
			[5, 22, "FREE", 48, 75],
			[3, 21, 33, 47, 71],
			[8, 26, 37, 54, 73]
		]
	},
	{
		title: "Tabla Verde #29052",
		color: "verde",
		board: [
			[13, 27, 43, 47, 70],
			[6, 21, 37, 48, 62],
			[8, 18, "FREE", 49, 74],
			[12, 25, 42, 51, 73],
			[11, 22, 38, 55, 65]
		]
	},
	{
		title: "Tabla Verde #29051",
		color: "verde",
		board: [
			[2, 21, 32, 49, 70],
			[3, 30, 45, 53, 65],
			[6, 18, "FREE", 47, 69],
			[9, 20, 44, 58, 67],
			[7, 19, 33, 57, 74]
		]
	},
	{
		title: "Tabla Verde #29055",
		color: "verde",
		board: [
			[8, 25, 35, 46, 67],
			[11, 29, 41, 52, 73],
			[6, 19, "FREE", 57, 61],
			[1, 23, 32, 53, 66],
			[2, 27, 37, 58, 63]
		]
	},
	{
		title: "Tabla Verde #23919",
		color: "verde",
		board: [
			[9, 21, 36, 60, 73],
			[1, 16, 45, 53, 65],
			[12, 23, "FREE", 59, 75],
			[15, 17, 38, 58, 64],
			[11, 29, 43, 50, 62]
		]
	},
	{
		title: "Tabla Roja #17754",
		color: "roja",
		board: [
			[2, 25, 44, 50, 73],
			[12, 30, 45, 55, 65],
			[11, 22, "FREE", 57, 67],
			[14, 16, 38, 48, 62],
			[9, 28, 35, 58, 63]
		]
	},
	{
		title: "Tabla Roja #17753",
		color: "roja",
		board: [
			[4, 28, 44, 46, 62],
			[9, 27, 31, 52, 67],
			[3, 24, "FREE", 59, 74],
			[7, 16, 43, 60, 75],
			[13, 21, 33, 57, 65]
		]
	},
	{
		title: "Tabla Roja #17753",
		color: "roja",
		board: [
			[4, 28, 44, 46, 62],
			[9, 27, 31, 52, 67],
			[3, 24, "FREE", 59, 74],
			[7, 16, 43, 60, 75],
			[13, 21, 33, 57, 65]
		]
	},
	{
		title: "Tabla Roja #17871",
		color: "roja",
		board: [
			[13, 29, 41, 47, 72],
			[15, 20, 31, 51, 64],
			[2, 16, "FREE", 50, 75],
			[7, 28, 43, 53, 74],
			[5, 22, 36, 58, 69]
		]
	},
	{
		title: "Tabla Roja #24575",
		color: "roja",
		board: [
			[7, 24, 43, 49, 68],
			[4, 30, 32, 55, 61],
			[12, 21, "FREE", 46, 74],
			[1, 18, 35, 59, 72],
			[3, 20, 37, 50, 62]
		]
	},
	{
		title: "Tabla Roja #24576",
		color: "roja",
		board: [
			[7, 24, 34, 58, 71],
			[14, 19, 40, 48, 62],
			[13, 21, "FREE", 57, 75],
			[3, 16, 36, 50, 64],
			[5, 26, 35, 46, 61]
		]
	},
	{
		title: "Tabla Roja #24577",
		color: "roja",
		board: [
			[8, 27, 38, 57, 75],
			[10, 21, 40, 51, 66],
			[14, 30, "FREE", 48, 64],
			[12, 25, 41, 58, 67],
			[15, 20, 32, 49, 71]
		]
	},
	{
		title: "Tabla Roja #24552",
		color: "roja",
		board: [
			[14, 19, 42, 56, 61],
			[7, 26, 40, 50, 62],
			[11, 28, "FREE", 60, 73],
			[12, 21, 43, 58, 69],
			[4, 17, 32, 49, 75]
		]
	},
	{
		title: "Tabla Roja #24551",
		color: "roja",
		board: [
			[15, 21, 44, 59, 62],
			[2, 29, 32, 52, 65],
			[7, 25, "FREE", 55, 61],
			[1, 17, 33, 57, 73],
			[3, 28, 34, 54, 67]
		]
	},
	{
		title: "Tabla Roja #24555",
		color: "roja",
		board: [
			[5, 23, 34, 58, 70],
			[6, 29, 39, 49, 61],
			[1, 19, "FREE", 47, 63],
			[10, 26, 36, 57, 65],
			[14, 16, 45, 60, 69]
		]
	},
	{
		title: "Tabla Morada #21648",
		color: "morada",
		board: [
			[11, 20, 41, 60, 68],
			[1, 16, 39, 46, 73],
			[6, 17, "FREE", 54, 67],
			[15, 24, 42, 50, 66],
			[10, 22, 43, 57, 62]
		]
	},
	{
		title: "Tabla Morada #21647",
		color: "morada",
		board: [
			[15, 18, 36, 57, 69],
			[3, 27, 39, 50, 72],
			[6, 21, "FREE", 59, 71],
			[1, 22, 43, 56, 63],
			[2, 26, 37, 52, 64]
		]
	},
	{
		title: "Tabla Morada #27575",
		color: "morada",
		board: [
			[8, 25, 35, 54, 62],
			[11, 26, 38, 50, 74],
			[4, 23, "FREE", 52, 73],
			[14, 19, 45, 46, 66],
			[6, 17, 36, 49, 70]
		]
	},
	{
		title: "Tabla Morada #27576",
		color: "morada",
		board: [
			[14, 17, 36, 56, 62],
			[12, 24, 41, 60, 75],
			[7, 27, "FREE", 46, 64],
			[1, 29, 38, 52, 68],
			[13, 25, 45, 51, 65]
		]
	},
	{
		title: "Tabla Morada #27577",
		color: "morada",
		board: [
			[9, 16, 31, 51, 63],
			[4, 30, 44, 46, 74],
			[5, 17, "FREE", 52, 67],
			[1, 28, 33, 48, 72],
			[10, 26, 42, 54, 61]
		]
	},
	{
		title: "Tabla Morada #27552",
		color: "morada",
		board: [
			[15, 20, 35, 47, 71],
			[14, 26, 39, 58, 69],
			[4, 18, "FREE", 51, 64],
			[6, 22, 31, 60, 75],
			[13, 16, 44, 57, 63]
		]
	},
	{
		title: "Tabla Morada #27551",
		color: "morada",
		board: [
			[5, 24, 43, 57, 71],
			[12, 30, 40, 48, 62],
			[4, 28, "FREE", 59, 74],
			[11, 20, 32, 52, 64],
			[8, 16, 38, 55, 66]
		]
	},
	{
		title: "Tabla Morada #27555",
		color: "morada",
		board: [
			[3, 16, 38, 48, 73],
			[1, 26, 45, 51, 71],
			[10, 20, "FREE", 55, 70],
			[11, 29, 39, 60, 74],
			[5, 19, 32, 59, 72]
		]
	},
	{
		title: "Tabla Azul #27555",
		color: "azul",
		board: [
			[15, 27, 33, 57, 61],
			[1, 26, 31, 54, 63],
			[10, 20, "FREE", 48, 65],
			[6, 17, 42, 49, 62],
			[4, 16, 39, 60, 72]
		]
	},
	{
		title: "Tabla Azul #19622",
		color: "azul",
		board: [
			[1, 21, 41, 54, 73],
			[6, 26, 31, 50, 74],
			[8, 25, "FREE", 58, 62],
			[11, 20, 30, 49, 67],
			[10, 19, 33, 48, 66]
		]
	},
	{
		title: "Tabla Azul #26055",
		color: "azul",
		board: [
			[9, 27, 37, 59, 71],
			[7, 20, 31, 53, 62],
			[15, 30, "FREE", 57, 72],
			[6, 17, 36, 60, 74],
			[13, 21, 34, 52, 66]
		]
	},
	{
		title: "Tabla Azul #26075",
		color: "azul",
		board: [
			[7, 22, 40, 54, 65],
			[6, 25, 36, 58, 70],
			[1, 18, "FREE", 47, 69],
			[13, 16, 38, 55, 68],
			[14, 29, 39, 56, 73]
		]
	},
	{
		title: "Tabla Azul #26076",
		color: "azul",
		board: [
			[8, 29, 45, 60, 72],
			[15, 28, 37, 50, 62],
			[6, 19, "FREE", 52, 71],
			[10, 20, 39, 49, 69],
			[3, 22, 31, 59, 70]
		]
	},
	{
		title: "Tabla Azul #26077",
		color: "azul",
		board: [
			[10, 26, 40, 54, 72],
			[9, 20, 36, 46, 63],
			[8, 29, "FREE", 58, 61],
			[1, 21, 44, 53, 62],
			[4, 19, 41, 56, 68]
		]
	},
	{
		title: "Tabla Azul #26052",
		color: "azul",
		board: [
			[7, 30, 43, 60, 61],
			[1, 24, 40, 49, 73],
			[4, 28, "FREE", 55, 62],
			[8, 16, 36, 47, 66],
			[11, 26, 42, 52, 63]
		]
	},
	{
		title: "Tabla Azul #26051",
		color: "azul",
		board: [
			[1, 25, 42, 54, 71],
			[15, 21, 36, 59, 65],
			[13, 30, "FREE", 56, 72],
			[9, 24, 41, 58, 75],
			[8, 18, 35, 50, 74]
		]
	}
];

// Función para crear una tabla de bingo en HTML con clases
function createBingoTable(board, tableIndex) {
	const container = document.getElementById('bingoTablesContainer');
	const table = document.createElement('table');
	table.classList.add(board.color);
	const tableCaption = document.createElement('caption');
	tableCaption.textContent = board.title; // Usar el título de la tabla
	table.appendChild(tableCaption);

	const tableBody = document.createElement('tbody');

	for (let i = 0; i < board.board.length; i++) {
		const row = document.createElement('tr');

		for (let j = 0; j < board.board[i].length; j++) {
			const cell = document.createElement('td');

			if (board.board[i][j] === "FREE") {
				cell.textContent = "N";
				cell.classList.add('free');
				cell.classList.add('active'); // Aplicar clase "free" para el espacio libre
			} else {
				let word = "";
				if(i ===0 && j === 0 ){
					word = `<strong>${getBingoClass(j)}</strong>`
				}else if(i ===0 && j === 0 ){
					word = `<strong>${getBingoClass(j)}</strong>`
				}else if(i ===0 && j === 1 ){
					word = `<strong>${getBingoClass(j)}</strong>`
				}else if(i ===0 && j === 2 ){
					word = `<strong>${getBingoClass(j)}</strong>`
				}else if(i ===0 && j === 3 ){
					word = `<strong>${getBingoClass(j)}</strong>`
				}else if(i ===0 && j === 4 ){
					word = `<strong>${getBingoClass(j)}</strong>`
				}
				cell.innerHTML = word + board.board[i][j];
				cell.classList.add(getBingoClass(j) + board.board[i][j]);
			}

			row.appendChild(cell);
		}

		tableBody.appendChild(row);
	}

	table.appendChild(tableBody);
	container.appendChild(table);
}

// Función para obtener la clase de la columna (B, I, N, G, O)
function getBingoClass(columnIndex) {
	const bingoLetters = ['B', 'I', 'N', 'G', 'O'];
	return bingoLetters[columnIndex];
}

// Función para manejar el envío del formulario
function handleFormSubmit(event) {
	
	event.preventDefault();
	const letter = document.getElementById('bingoLetter').value;
	const number = document.getElementById('bingoNumber').value;
	const targetClass = letter + number;

	const confirmacion = window.confirm(`¿Estás seguro marcar ${targetClass}?`);
	// Obtener el filtro seleccionado
	 if(confirmacion){
		const selectedFilter = document.querySelector('form.filters input[name="color"]:checked').value;

		if (selectedFilter === 'todo') {
			// Si el filtro es "todo", buscar todas las tablas
			const tables = document.querySelectorAll('table');
			tables.forEach(table => {
				const cells = table.querySelectorAll(`.${targetClass}`);
				cells.forEach(cell => {
					cell.classList.add('active');
				});

			});
		} else {
			// Si no es "todo", buscar la tabla con la clase correspondiente al filtro
			const targetTables = document.querySelectorAll(`table.${selectedFilter}`);

			if (targetTables) {

				targetTables.forEach(tabla => {
					const cells = tabla.querySelectorAll(`.${targetClass}`);
					cells.forEach(cell => {
						cell.classList.add('active');
					});
				});
			}
		}

		for (let i = 0; i < bingoBoards.length; i++) {
			if (isTableComplete(i)) {
				showBingoAlert(bingoBoards[i].title);
			}
		}

		// Guardar el valor en localStorage
		const storedValues = JSON.parse(localStorage.getItem('bingoValues')) || {};
		storedValues[targetClass] = true;
		localStorage.setItem('bingoValues', JSON.stringify(storedValues));
	} 
	
}



// Función para cargar los valores guardados en localStorage
function loadSavedValues() {
	const storedValues = JSON.parse(localStorage.getItem('bingoValues')) || {};
	const selectedFilter = localStorage.getItem('filterValue');

	// Selecciona todos los radios del grupo por su name.
	const radios = document.querySelectorAll('form.filters input[name="color"]');

	// Recorre los radios y verifica si el valor coincide con el valor deseado.
	radios.forEach(radio => {
		if (radio.value === selectedFilter) {
			// Marca el radio deseado.
			radio.checked = true;
		}
});
	//const selectedFilter = document.querySelector('form.filters input[name="color"]:checked').value;

	for (const key in storedValues) {
		if (storedValues[key]) {
			if (selectedFilter === 'todo') {
				// Si el filtro es "todo", aplicar a todas las tablas
				const allCells = document.querySelectorAll(`.${key}`);
				allCells.forEach(cell => {
					cell.classList.add('active');
				});
			} else {
				// Si no es "todo", buscar la tabla con la clase correspondiente al filtro
				const targetTables = document.querySelectorAll(`table.${selectedFilter}`);

				if (targetTables) {

					targetTables.forEach(tabla => {
						const cells = tabla.querySelectorAll(`.${key}`);
						cells.forEach(cell => {
							cell.classList.add('active');
						});
					});
				}
			}
		}
	}
}


// Función para verificar si una tabla de bingo está completa
function isTableComplete(tableIndex) {
	const cells = document.querySelectorAll(`#bingoTablesContainer table:nth-child(${tableIndex + 1}) td`);
	return Array.from(cells).every(cell => cell.classList.contains('active'));
}

// Función para mostrar una alerta de Bingo
function showBingoAlert(tableTitle) {
	alert(`¡Bingo en ${tableTitle}!`);
}

// Función para ocultar/mostrar tablas según el filtro seleccionado
function filtrarTablas() {
	console.log('filtrando tablas');

	// Obtener el filtro seleccionado
	const selectedFilter = document.querySelector('form.filters input[name="color"]:checked').value;
	localStorage.setItem('filterValue', selectedFilter);

	// Obtener todas las tablas
	const tables = document.querySelectorAll('table');

	// Recorrer todas las tablas y aplicar el filtro
	tables.forEach(table => {
		if (selectedFilter === "todo" || table.classList.contains(selectedFilter)) {
			table.style.display = 'table'; // Mostrar la tabla
		} else {
			table.style.display = 'none'; // Ocultar la tabla
		}
	})
}

const filterForm = document.getElementById('filterForm');
filterForm.addEventListener('change', filtrarTablas);

// Llamar a la función para crear las tablas de bingo
for (let i = 0; i < bingoBoards.length; i++) {
	createBingoTable(bingoBoards[i], i);
}

// Agregar el manejador de eventos para el formulario
const bingoForm = document.getElementById('bingoForm');
bingoForm.addEventListener('submit', handleFormSubmit);

// Cargar los valores guardados en localStorage al cargar la página
loadSavedValues();

 // Llamar a la función inicialmente para mostrar todas las tablas
 filtrarTablas();

// Agregar el manejador de eventos para el botón de reiniciar partida
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {

	const confirmacion = window.confirm('¿Estás seguro de reiniciar el juego?');
	if(confirmacion){
		localStorage.removeItem('bingoValues');
		location.reload(); // Recargar la página para reiniciar la partida
	} 
});
