
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
		title: "Tabla Verde #01027",
		color: "verde",
		board: [
			[9,20,39,46,68],
			[4,30,43,50,62],
			[14,27, "FREE", 58, 74],
			[6,28,37,54,72],
			[3,24,42,59,67]
		]
	},
	{
		title: "Tabla Verde #01028",
		color: "verde",
		board: [
			[15, 17, 37, 53, 72],
			[8, 29 ,40, 51, 65],
			[4, 26, "FREE", 48, 69],
			[1, 23, 32, 58, 63],
			[5, 22, 36, 50, 70]
		]
	},
	{
		title: "Tabla Verde #01029",
		color: "verde",
		board: [
			[6, 16, 41, 58, 71],
			[15, 27, 38, 48, 65],
			[2, 21, "FREE", 49, 64],
			[13, 19, 40, 59, 75],
			[11, 26, 43, 50, 72]
		]
	},
	{
		title: "Tabla Verde #01030",
		color: "verde",
		board: [
			[9, 29, 43, 49, 70],
			[8, 30, 35, 54, 69],
			[4, 27, "FREE", 58, 74],
			[13, 17, 34, 55, 73],
			[11, 21, 41, 56, 62]
		]
	},
	{
		title: "Tabla Verde #01031",
		color: "verde",
		board: [
			[7, 18, 44, 52, 64],
			[9, 23, 32, 55, 71],
			[10, 20, "FREE", 56, 61],
			[5, 21, 35, 51, 73],
			[14, 24, 34, 48, 69]
		]
	},
	{
		title: "Tabla Verde #01504",
		color: "naranja",
		board: [
			[14, 22, 43, 53, 66],
			[11, 27, 32, 46, 70],
			[2, 30, "FREE", 52, 75],
			[10, 25, 37, 57, 65],
			[5, 28, 34, 50, 67]
		]
	},
	{
		title: "Tabla Verde #01505",
		color: "naranja",
		board: [
			[1, 17, 44, 58, 63],
			[7, 22, 38, 60, 66],
			[3, 26, "FREE", 59, 70],
			[10, 30, 37, 53, 64],
			[5, 16, 33, 49, 74]
		]
	},
	{
		title: "Tabla Verde #01506",
		color: "naranja",
		board: [
			[12, 24, 32, 53, 63],
			[11, 25, 41, 46, 75],
			[1, 16, "FREE", 55, 65],
			[5, 21, 33, 48, 68],
			[14, 23, 36, 57, 69]
		]
	},
	{
		title: "Tabla Verde #01507",
		color: "naranja",
		board: [
			[12, 27, 40, 54, 69],
			[6, 26, 36, 49, 72],
			[2, 24, "FREE", 52, 75],
			[8, 22, 32, 57, 74],
			[14, 28, 34, 58, 68]
		]
	},
	{
		title: "Tabla Verde #01508",
		color: "naranja",
		board: [
			[9, 25, 45, 49, 70],
			[12, 17, 31, 55, 64],
			[7, 28, "FREE", 59, 68],
			[14, 23, 42, 46, 65],
			[13, 22, 32, 52, 75]
		]
	},
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
		document.getElementById('bingoNumber').value = "";
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
