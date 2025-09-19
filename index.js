const storedFilter = localStorage.getItem('filterValue');
const selectedFilterInput = document.querySelector('form.filters input[name="color"]:checked');

// 1. Usa el valor de localStorage.
// 2. Si es null, intenta usar el valor del input seleccionado.
// 3. Si ambos son null o undefined, usa 'todos' como valor por defecto.
const selectedFilter = storedFilter ?? selectedFilterInput?.value ?? 'todos';

console.log(selectedFilter); // 'todos' (si nada está guardado ni seleccionado)

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
		title: "Tabla Verde #07039",
		color: "verde",
		board: [
			[7, 26, 37, 54, 68],
			[8, 17, 33, 55, 64],
			[5, 20, "FREE", 49, 73],
			[10, 16, 31, 47, 61],
			[14, 24, 44, 50, 63]
		]
	},
	{
		title: "Tabla Verde #07041",
		color: "verde",
		board: [
			[10, 16, 41, 48, 69],
			[12, 17, 31, 52, 65],
			[5, 28, "FREE", 58, 74],
			[4, 26, 37, 59, 66],
			[13, 20, 32, 54, 61]
		]
	},
	{
		title: "Tabla Verde #07040",
		color: "verde",
		board: [
			[4, 30, 42, 59, 68],
			[11, 19, 40, 53, 63],
			[6, 24, "FREE", 47, 67],
			[3, 21, 37, 55, 61],
			[15, 25, 43, 57, 65]
		]
	},
	{
		title: "Tabla Verde #07042",
		color: "verde",
		board: [
			[6, 19, 40, 57, 66],
			[13, 29, 44, 51, 63],
			[5, 23, "FREE", 60, 70],
			[7, 16, 41, 56, 73],
			[9, 21, 32, 59, 62]
		]
	},
	{
		title: "Tabla Verde #07027",
		color: "verde",
		board: [
			[3, 17, 40, 52, 65],
			[12, 25, 41, 47, 73],
			[5, 22, "FREE", 49, 63],
			[4, 29, 39, 56, 75],
			[11, 23, 35, 57, 66]
		]
	},
	{
		title: "Tabla Verde #07034",
		color: "verde",
		board: [
			[10, 19, 35, 53, 61],
			[14, 28, 42, 51, 63],
			[4, 17, "FREE", 59, 70],
			[15, 25, 38, 57, 73],
			[5, 30, 40, 47, 75]
		]
	},
	{
		title: "Tabla Verde #09171",
		color: "verde",
		board: [
			[1, 17, 36, 56, 61],
			[8, 26, 43, 53, 63],
			[14, 29, "FREE", 58, 65],
			[3, 24, 33, 54, 72],
			[2, 30, 42, 59, 75]
		]
	},
	{
		title: "Tabla Verde #09170",
		color: "verde",
		board: [
			[1, 21, 36, 54, 69],
			[11, 16, 31, 57, 68],
			[9, 27, "FREE", 53, 66],
			[15, 29, 33, 52, 70],
			[7, 17, 42, 51, 72]
		]
	},
	{
		title: "Tabla Verde #09169",
		color: "verde",
		board: [
			[14, 21, 37, 51, 64],
			[1, 22, 42, 60, 67],
			[8, 18, "FREE", 59, 70],
			[11, 30, 36, 50, 65],
			[10, 19, 34, 58, 62]
		]
	},
	{
		title: "Tabla Verde #09168",
		color: "verde",
		board: [
			[2, 22, 44, 57, 67],
			[5, 20, 45, 59, 65],
			[15, 19, "FREE", 48, 63],
			[6, 30, 42, 55, 66],
			[1, 28, 36, 52, 72]
		]
	},
	{
		title: "Tabla Verde #09167",
		color: "verde",
		board: [
			[10, 20, 45, 47, 71],
			[4, 25, 37, 46, 73],
			[5, 24, "FREE", 51, 70],
			[9, 29, 43, 60, 68],
			[13, 28, 39, 59, 66]
		]
	},
	{
		title: "Tabla Verde #09166",
		color: "verde",
		board: [
			[12, 25, 31, 53, 68],
			[5, 19, 34, 57, 69],
			[15, 16, "FREE", 58, 66],
			[9, 17, 33, 52, 63],
			[10, 18, 36, 50, 64]
		]
	},
	{
		title: "Tabla Verde #09165",
		color: "verde",
		board: [
			[6, 18, 33, 57, 64],
			[5, 23, 42, 52, 62],
			[15, 27, "FREE", 55, 63],
			[12, 19, 44, 58, 67],
			[2, 22, 32, 54, 61]
		]
	},
	{
		title: "Tabla Verde #09164",
		color: "verde",
		board: [
			[4, 25, 36, 48, 65],
			[13, 18, 45, 53, 73],
			[5, 23, "FREE", 46, 62],
			[8, 30, 31, 58, 75],
			[11, 24, 34, 56, 66]
		]
	},
	{
		title: "Tabla Verde #07288",
		color: "verde",
		board: [
			[4, 18, 35, 54, 63],
			[3, 19, 39, 48, 64],
			[5, 22, "FREE", 55, 72],
			[10, 27, 38, 59, 74],
			[11, 29, 44, 58 , 75]
		]
	},
	{
		title: "Tabla Verde #07289",
		color: "verde",
		board: [
			[12, 27, 45, 51, 65],
			[13, 17, 40, 59, 71],
			[2, 30, "FREE", 47, 63],
			[14, 21, 43, 56, 68],
			[11, 22, 44, 52, 64]
		]
	},
	{
		title: "Tabla Verde #07256",
		color: "verde",
		board: [
			[11, 17, 32, 49, 73],
			[3, 26, 39, 59, 75],
			[1, 30, "FREE", 47, 71],
			[2, 25, 43, 57, 63],
			[12, 20, 38, 51, 72]
		]
	},
	{
		title: "Tabla Verde #07255",
		color: "verde",
		board: [
			[15, 30, 38, 52, 63],
			[7, 24, 32, 46, 69],
			[2, 17, "FREE", 59, 62],
			[11, 26, 39, 60, 74],
			[14, 20, 43, 58, 64]
		]
	},
	{
		title: "Tabla Verde #07295",
		color: "verde",
		board: [
			[13, 28, 35, 47, 65],
			[2, 18, 42, 59, 67],
			[7, 20, "FREE", 56, 74],
			[14, 24, 32, 46, 70],
			[12, 25, 40, 60, 63]
		]
	},
	{
		title: "Tabla Verde #07294",
		color: "verde",
		board: [
			[15, 17, 39, 57, 65],
			[6, 26, 38, 59, 69],
			[3, 20, "FREE", 46, 70],
			[1, 28, 33, 55, 63],
			[4, 18, 36, 56, 75]
		]
	},
	{
		title: "Tabla Verde #13180",
		color: "verde",
		board: [
			[15, 29, 41, 58, 64],
			[7, 19, 44, 51, 73],
			[2, 24, "FREE", 52, 65],
			[14, 30, 34, 47, 66],
			[11, 21, 37, 49, 69]
		]
	},
	{
		title: "Tabla Verde #11137",
		color: "verde",
		board: [
			[8, 26, 33, 51, 69],
			[10, 21, 38, 50, 62],
			[13, 22, "FREE", 46, 68],
			[4, 17, 39, 53, 66],
			[7, 20, 42, 47, 75]
		]
	},
	{
		title: "Tabla Verde #11136",
		color: "verde",
		board: [
			[1, 17, 44, 48, 74],
			[7, 30, 43, 57, 61],
			[12, 22, "FREE", 47, 73],
			[11, 23, 40, 51, 65],
			[14, 20, 37, 52, 67]
		]
	},
	{
		title: "Tabla Verde #11138",
		color: "verde",
		board: [
			[6, 21, 40, 51, 63],
			[10, 30, 44, 57, 66],
			[7, 28, "FREE", 58, 73],
			[13, 24, 34, 49, 62],
			[4, 25, 33, 54, 71]
		]
	},
	{
		title: "Tabla Verde #19182",
		color: "verde",
		board: [
			[3, 30, 31, 48, 64],
			[10, 22, 35, 57, 63],
			[2, 28, "FREE", 56, 75],
			[6, 25, 38, 54, 74],
			[4, 26, 44, 59, 73]
		]
	},
	{
		title: "Tabla Verde #19220",
		color: "verde",
		board: [
			[10, 30, 31, 47, 71],
			[4, 22, 36, 55, 72],
			[1, 20, "FREE", 52, 66],
			[2, 27, 35, 54, 67],
			[3, 19, 38, 60, 65]
		]
	},
	{
		title: "Tabla Verde #19221",
		color: "verde",
		board: [
			[1, 22, 35, 59, 62],
			[8, 24, 45, 60, 64],
			[12, 30, "FREE", 48, 63],
			[10, 20, 32, 49, 61],
			[2, 18, 33, 46, 75]
		]
	},
	{
		title: "Tabla Verde #19222",
		color: "verde",
		board: [
			[12, 17, 33, 50, 72],
			[13, 16, 45, 55, 63],
			[7, 23, "FREE", 52, 71],
			[15, 22, 42, 58, 68],
			[9, 24, 31, 56, 69]
		]
	},




	{
		title: "Tabla Naranja #01504",
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
		title: "Tabla Naranja #01505",
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
		title: "Tabla Naranja #01506",
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
		title: "Tabla Naranja #01507",
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
		title: "Tabla Naranja #01508",
		color: "naranja",
		board: [
			[9, 25, 45, 49, 70],
			[12, 17, 31, 55, 64],
			[7, 28, "FREE", 59, 68],
			[14, 23, 42, 46, 65],
			[13, 22, 32, 52, 75]
		]
	},
	{
		title: "Tabla Naranja #07528",
		color: "naranja",
		board: [
			[12, 16, 42, 52, 67],
			[15, 29, 35, 56, 72],
			[3, 22, "FREE", 50, 70],
			[14, 23, 34, 58, 64],
			[2, 25, 38, 46, 71]
		]
	},
	{
		title: "Tabla Naranja #07534",
		color: "naranja",
		board: [
			[15, 29, 38, 52, 66],
			[5, 27, 36, 58, 75],
			[10, 20, "FREE", 59, 67],
			[7, 23, 43, 60, 63],
			[9, 30, 42, 47, 64]
		]
	},
	{
		title: "Tabla Naranja #07540",
		color: "naranja",
		board: [
			[4, 29, 34, 58, 66],
			[2, 19, 41, 50, 62],
			[12, 20, "FREE", 56, 67],
			[7, 16, 36, 59, 61],
			[15, 23, 44, 60, 72]
		]
	},
	{
		title: "Tabla Naranja #07541",
		color: "naranja",
		board: [
			[13, 24, 31, 58, 62],
			[11, 27, 44, 52, 66],
			[6, 30, "FREE", 50, 71],
			[1, 28, 35, 60, 65],
			[4, 16, 37, 47, 69]
		]
	},
	{
		title: "Tabla Naranja #07542",
		color: "naranja",
		board: [
			[9, 28, 42, 53, 70],
			[15, 23, 41, 49, 73],
			[12, 25, "FREE", 47, 65],
			[11, 18, 33, 56, 61],
			[6, 21, 32, 48, 64]
		]
	},
	{
		title: "Tabla Naranja #05750",
		color: "naranja",
		board: [
			[7, 25, 39, 59, 65],
			[12, 20, 43, 48, 62],
			[2, 28, "FREE", 47, 68],
			[8, 26, 40, 52, 66],
			[9, 21, 45, 51, 72]
		]
	},
	{
		title: "Tabla Naranja #05749",
		color: "naranja",
		board: [
			[2, 19, 35, 48, 62],
			[5, 23, 39, 47, 65],
			[1, 18, "FREE", 58, 73],
			[9, 20, 32, 52, 69],
			[4, 22, 44, 51, 66]
		]
	},
	{
		title: "Tabla Naranja #05748",
		color: "naranja",
		board: [
			[7, 25, 37, 58, 75],
			[3, 17, 35, 48, 64],
			[4, 28, "FREE", 52, 61],
			[10, 16, 31, 56, 69],
			[2, 26, 41, 59, 68]
		]
	},
	{
		title: "Tabla Naranja #05747",
		color: "naranja",
		board: [
			[4, 22, 31, 53, 71],
			[9, 16, 42, 50, 68],
			[2, 29, "FREE", 51, 62],
			[10, 23, 34, 58, 69],
			[8, 20, 33, 57, 75]
		]
	},
	{
		title: "Tabla Naranja #05746",
		color: "naranja",
		board: [
			[4, 16, 36, 50, 65],
			[8, 24, 37, 47, 75],
			[2, 23, "FREE", 55, 68],
			[11, 30, 42, 48, 70],
			[6, 28, 35, 52, 61]
		]
	},
	{
		title: "Tabla Naranja #05745",
		color: "naranja",
		board: [
			[5, 17, 44, 55, 71],
			[3, 20, 33, 58, 62],
			[12, 28, "FREE", 54, 68],
			[4, 25, 34, 47, 72],
			[9, 21, 43, 52, 70]
		]
	},
	{
		title: "Tabla Naranja #05744",
		color: "naranja",
		board: [
			[4, 29, 32, 46, 71],
			[9, 24, 35, 57, 69],
			[1, 23, "FREE", 53, 75],
			[15, 19, 44, 47, 74],
			[3, 28, 45, 56, 61]
		]
	},
	{
		title: "Tabla Naranja #05751",
		color: "naranja",
		board: [
			[12, 24, 40, 57, 72],
			[15, 18, 31, 53, 75],
			[7, 17, "FREE", 60, 66],
			[6, 25, 42, 50, 67],
			[13, 27, 44, 55, 64]
		]
	},
	{
		title: "Tabla Naranja #05878",
		color: "naranja",
		board: [
			[8, 26, 44, 53, 69],
			[7, 17, 45, 51, 62],
			[5, 23, "FREE", 48, 74],
			[1, 25, 40, 54, 75],
			[15, 18, 39, 49, 64]
		]
	},
	{
		title: "Tabla Naranja #07789",
		color: "naranja",
		board: [
			[12, 28, 41, 48, 65],
			[3, 17, 32, 56, 61],
			[11, 24, "FREE", 52, 70],
			[9, 23, 45, 47, 62],
			[4, 19, 44, 49, 67]
		]
	},
	{
		title: "Tabla Naranja #07755",
		color: "naranja",
		board: [
			[14, 27, 40, 49, 68],
			[1, 18, 45, 51, 64],
			[9, 26, "FREE", 58, 62],
			[8, 25, 43, 50, 61],
			[15, 19, 31, 46, 75]
		]
	},
	{
		title: "Tabla Naranja #07788",
		color: "naranja",
		board: [
			[6, 20, 43, 52, 67],
			[11, 28, 42, 48, 74],
			[4, 18, "FREE", 47, 73],
			[8, 17, 31, 53, 68],
			[3, 19, 34, 55, 70]
		]
	},
	{
		title: "Tabla Naranja #07754",
		color: "naranja",
		board: [
			[14, 29, 33, 47, 67],
			[11, 21, 43, 51, 66],
			[9, 26, "FREE", 50, 73],
			[5, 24, 41, 56, 69],
			[4, 30, 45, 57, 75]
		]
	},
	{
		title: "Tabla Naranja #07794",
		color: "naranja",
		board: [
			[15, 20, 34, 58, 74],
			[6, 17, 37, 51, 72],
			[8, 30, "FREE", 49, 68],
			[2, 24, 32, 57, 62],
			[14, 22, 43, 46, 61]
		]
	},
	{
		title: "Tabla Naranja #07795",
		color: "naranja",
		board: [
			[4, 21, 32, 46, 69],
			[6, 18, 45, 58, 75],
			[10, 25, "FREE", 60, 72],
			[1, 27, 40, 47, 74],
			[11, 19, 43, 52, 70]
		]
	},
	{
		title: "Tabla Naranja #09933",
		color: "naranja",
		board: [
			[14, 23, 42, 57, 74],
			[10, 18, 38, 59, 75],
			[8, 21, "FREE", 60, 72],
			[15, 19, 41, 49, 65],
			[1, 16, 43, 46, 61]
		]
	},
	{
		title: "Tabla Naranja #13680",
		color: "naranja",
		board: [
			[12, 21, 44, 58, 73],
			[1, 17, 41, 51, 64],
			[6, 23, "FREE", 47, 75],
			[4, 22, 34, 56, 63],
			[2, 28, 43, 59, 62]
		]
	},
	{
		title: "Tabla Naranja #11696",
		color: "naranja",
		board: [
			[3, 21, 40, 52, 64],
			[14, 18, 32, 55, 61],
			[12, 25, "FREE", 46, 74],
			[4, 26, 31, 54, 70],
			[15, 24, 42, 51, 69]
		]
	},
	{
		title: "Tabla Naranja #11697",
		color: "naranja",
		board: [
			[15, 23, 35, 58, 64],
			[13, 24, 38, 55, 69],
			[1, 30, "FREE", 46, 67],
			[10, 22, 34, 54, 75],
			[7, 18, 36, 50, 74]
		]
	},
	{
		title: "Tabla Naranja #11698",
		color: "naranja",
		board: [
			[4, 24, 35, 49, 61],
			[15, 16, 41, 51, 65],
			[10, 28, "FREE", 59, 68],
			[12, 21, 45, 46, 74],
			[2, 17, 38, 53, 70]
		]
	},
	{
		title: "Tabla Naranja #11699",
		color: "naranja",
		board: [
			[12, 30, 44, 59, 75],
			[8, 26, 32, 54, 69],
			[4, 20, "FREE", 51, 65],
			[13, 17, 42, 58, 73],
			[6, 18, 41, 57, 64]
		]
	},
	{
		title: "Tabla Naranja #11700",
		color: "naranja",
		board: [
			[7, 20, 42, 50, 67],
			[3, 19, 45, 49, 65],
			[10, 24, "FREE", 51, 62],
			[1, 18, 34, 60, 61],
			[12, 29, 44, 52, 72]
		]
	},
	{
		title: "Tabla Naranja #11644",
		color: "naranja",
		board: [
			[13, 30, 44, 60, 62],
			[8, 24, 35, 59, 71],
			[15, 23, "FREE", 53, 67],
			[12, 27, 37, 55, 64],
			[7, 19, 32, 48, 61]
		]
	},







	{
		title: "Tabla Azul #02273",
		color: "azul",
		board: [
			[10, 30, 33, 60, 63],
			[13, 23, 42, 48, 70],
			[1, 18, "FREE", 59, 61],
			[15, 26, 34, 58, 67],
			[8, 17, 45, 56, 68]
		]
	},
	{
		title: "Tabla Azul #06039",
		color: "azul",
		board: [
			[11, 23, 44, 53, 61],
			[1, 21, 41, 49, 64],
			[2, 28, "FREE", 56, 74],
			[12, 29, 36, 51, 67],
			[13, 18, 35, 58, 73]
		]
	},
	{
		title: "Tabla Azul #06040",
		color: "azul",
		board: [
			[14, 20, 41, 46, 70],
			[3, 16, 39, 51, 66],
			[15, 29, "FREE", 50, 69],
			[13, 28, 38, 55, 68],
			[2, 30, 32, 47, 72]
		]
	},
	{
		title: "Tabla Azul #06041",
		color: "azul",
		board: [
			[11, 23, 37, 49, 67],
			[4, 16, 40, 48, 72],
			[5, 24, "FREE", 47, 65],
			[8, 17, 32, 55, 61],
			[2, 21, 39, 51, 75]
		]
	},
	{
		title: "Tabla Azul #02203",
		color: "azul",
		board: [
			[12, 25, 33, 52, 67],
			[6, 21, 31, 55, 64],
			[10, 19, "FREE", 60, 66],
			[13, 26, 43, 59, 62],
			[11, 18, 45, 46, 74]
		]
	},
	{
		title: "Tabla Azul #02203",
		color: "azul",
		board: [
			[13, 28, 41, 54, 61],
			[8, 23, 37, 57, 66],
			[14, 22, "FREE", 48, 72],
			[5, 29, 38, 52, 71],
			[15, 26, 39, 56, 63]
		]
	},
	{
		title: "Tabla Azul #02205",
		color: "azul",
		board: [
			[2, 21, 37, 60, 66],
			[4, 16, 42, 46, 63],
			[14, 18, "FREE", 55, 65],
			[11, 26, 38, 59, 70],
			[13, 27, 44, 58, 74]
		]
	},
	{
		title: "Tabla Azul #06034",
		color: "azul",
		board: [
			[9, 17, 35, 47, 74],
			[12, 21, 36, 59, 63],
			[13, 28, "FREE", 58, 66],
			[8, 24, 44, 48, 67],
			[15, 29, 39, 49, 71]
		]
	},
	{
		title: "Tabla Azul #06042",
		color: "azul",
		board: [
			[14, 20, 38, 46, 67],
			[9, 26, 33, 58, 69],
			[10, 27, "FREE", 53, 66],
			[15, 28, 42, 57, 62],
			[11, 29, 35, 47, 70]
		]
	},
	{
		title: "Tabla Azul #06027",
		color: "azul",
		board: [
			[12, 17, 33, 46, 69],
			[3, 18, 44, 56, 66],
			[11, 29, "FREE", 58, 64],
			[7, 21, 36, 59, 70],
			[8, 23, 45, 53, 67]
		]
	},
	{
		title: "Tabla Azul #04310",
		color: "azul",
		board: [
			[13, 21, 40, 56, 67],
			[3, 18, 33, 46, 73],
			[15, 17, "FREE", 57, 62],
			[8, 25, 45, 47, 72],
			[7, 30, 44, 48, 70]
		]
	},
	{
		title: "Tabla Azul #04218",
		color: "azul",
		board: [
			[7, 18, 38, 56, 74],
			[2, 25, 43, 48, 61],
			[6, 20, "FREE", 58, 65],
			[9, 30, 45, 52, 67],
			[10, 23, 44, 47, 68]
		]
	},
	{
		title: "Tabla Azul #04217",
		color: "azul",
		board: [
			[15, 24, 38, 52, 68],
			[7, 17, 40, 60, 73],
			[10, 20, "FREE", 48, 61],
			[2, 26, 42, 53, 70],
			[1, 19, 39, 57, 71]
		]
	},
	{
		title: "Tabla Azul #04216",
		color: "azul",
		board: [
			[3, 20, 38, 47, 66],
			[13, 29, 34, 59, 74],
			[2, 19, "FREE", 48, 64],
			[6, 23, 32, 46, 68],
			[8, 26, 36, 58, 72]
		]
	},
	{
		title: "Tabla Azul #04215",
		color: "azul",
		board: [
			[9, 19, 42, 49, 61],
			[6, 29, 39, 50, 72],
			[8, 22, "FREE", 59, 69],
			[7, 16, 43, 54, 71],
			[10, 18, 36, 51, 68]
		]
	},
	{
		title: "Tabla Azul #04214",
		color: "azul",
		board: [
			[4, 26, 42, 54, 73],
			[11, 20, 45, 55, 66],
			[12, 16, "FREE", 51, 72],
			[7, 24, 36, 60, 70],
			[8, 18, 32, 46, 63]
		]
	},
	{
		title: "Tabla Azul #04213",
		color: "azul",
		board: [
			[3, 29, 39, 50, 72],
			[4, 25, 42, 53, 71],
			[7, 28, "FREE", 46, 64],
			[2, 16, 33, 58, 68],
			[8, 20, 31, 51, 62]
		]
	},
	{
		title: "Tabla Azul #04212",
		color: "azul",
		board: [
			[1, 17, 41, 56, 75],
			[8, 18, 31, 49, 66],
			[7, 21, "FREE", 48, 74],
			[14, 20, 34, 51, 64],
			[10, 30, 39, 60, 71]
		]
	},
	{
		title: "Tabla Azul #04211",
		color: "azul",
		board: [
			[11, 27, 40, 54, 70],
			[8, 29, 38, 52, 74],
			[7, 17, "FREE", 59, 68],
			[5, 28, 43, 48, 65],
			[10, 19, 36, 60, 71]
		]
	},
	{
		title: "Tabla Azul #06288",
		color: "azul",
		board: [
			[13, 16, 38, 55, 67],
			[2, 25, 44, 49, 70],
			[4, 30, "FREE", 53, 65],
			[11, 29, 39, 47, 63],
			[8, 22, 34, 48, 71]
		]
	},
	{
		title: "Tabla Azul #06289",
		color: "azul",
		board: [
			[13, 27, 31, 52, 62],
			[7, 26, 36, 56, 70],
			[6, 17, "FREE", 53, 63],
			[15, 25, 41, 47, 68],
			[10, 23, 42, 49, 75]
		]
	},
	{
		title: "Tabla Azul #06256",
		color: "azul",
		board: [
			[11, 22, 35, 55, 70],
			[1, 27, 31, 53, 68],
			[6, 29, "FREE", 46, 64],
			[13, 25, 34, 59, 62],
			[8, 18, 41, 58, 72]
		]
	},
	{
		title: "Tabla Azul #06255",
		color: "azul",
		board: [
			[5, 26, 37, 59, 62],
			[14, 25, 33, 60, 66],
			[2, 21, "FREE", 52, 65],
			[6, 22, 38, 53, 67],
			[13, 29, 43, 46, 64]
		]
	},
	{
		title: "Tabla Azul #06295",
		color: "azul",
		board: [
			[1, 29, 31, 50, 63],
			[9, 23, 39, 57, 66],
			[10, 26, "FREE", 55, 75],
			[5, 16, 35, 47, 73],
			[2, 17, 44, 59, 69]
		]
	},
	{
		title: "Tabla Azul #06294",
		color: "azul",
		board: [
			[10, 29, 41, 46, 65],
			[3, 30, 40, 47, 74],
			[1, 16, "FREE", 57, 71],
			[6, 24, 45, 59, 62],
			[4, 22, 44, 60, 70]
		]
	},
	{
		title: "Tabla Azul #10305",
		color: "azul",
		board: [
			[9, 23, 38, 48, 73],
			[13, 28, 44, 47, 74],
			[7, 20, "FREE", 59, 64],
			[12, 17, 33, 50, 65],
			[1, 18, 42, 49, 66]
		]
	},
	{
		title: "Tabla Azul #12180",
		color: "azul",
		board: [
			[7, 18, 41, 60, 70],
			[15, 17, 40, 47, 75],
			[12, 16, "FREE", 49, 73],
			[2, 23, 37, 52, 72],
			[5, 27, 34, 46, 61]
		]
	},
	{
		title: "Tabla Azul #10080",
		color: "azul",
		board: [
			[13, 25, 44, 51, 73],
			[5, 24, 41, 48, 75],
			[3, 21, "FREE", 53, 69],
			[8, 30, 31, 56, 65],
			[12, 28, 45, 52, 61]
		]
	},
	{
		title: "Tabla Azul #18236",
		color: "azul",
		board: [
			[2, 17, 37, 57, 64],
			[9, 26, 36, 48, 73],
			[7, 23, "FREE", 56, 67],
			[6, 27, 40, 49, 61],
			[12, 20, 33, 52, 75]
		]
	},
	{
		title: "Tabla Azul #18237",
		color: "azul",
		board: [
			[1, 30, 39, 58, 68],
			[6, 19, 33, 57, 71],
			[15, 21, "FREE", 56, 69],
			[12, 27, 40, 54, 65],
			[4, 17, 42, 59, 64]
		]
	},
	{
		title: "Tabla Azul #18238",
		color: "azul",
		board: [
			[9, 25, 34, 47, 66],
			[13, 27, 44, 48, 74],
			[8, 28, "FREE", 60, 67],
			[3, 26, 42, 46, 71],
			[5, 18, 43, 51, 64]
		]
	},
	{
		title: "Tabla Azul #18226",
		color: "azul",
		board: [
			[13, 20, 32, 49, 68],
			[11, 17, 43, 50, 74],
			[6, 27, "FREE", 47, 61],
			[2, 19, 44, 60, 66],
			[8, 29, 41, 53, 67]
		]
	},
	{
		title: "Tabla Azul #18227",
		color: "azul",
		board: [
			[11, 16, 34, 53, 61],
			[14, 24, 35, 57, 69],
			[4, 29, "FREE", 48, 71],
			[15, 22, 36, 51, 68],
			[9, 17, 33, 52, 75]
		]
	},
	{
		title: "Tabla Azul #18228",
		color: "azul",
		board: [
			[10, 24, 34, 53, 67],
			[7, 18, 45, 56, 71],
			[12, 26, "FREE", 54, 72],
			[9, 23, 33, 49, 68],
			[14, 22, 39, 50, 74]
		]
	},
	{
		title: "Tabla Azul #18229",
		color: "azul",
		board: [
			[11, 16, 35, 52, 71],
			[7, 29, 31, 49, 69],
			[8, 21, "FREE", 58, 72],
			[5, 22, 34, 59, 64],
			[3, 24, 41, 46, 65]
		]
	},
	{
		title: "Tabla Azul #18230",
		color: "azul",
		board: [
			[9, 26, 35, 52, 67],
			[4, 21, 42, 49, 70],
			[2, 18, "FREE", 59, 63],
			[15, 16, 41, 48, 69],
			[14, 30, 38, 53, 73]
		]
	},
	{
		title: "Tabla Azul #18231",
		color: "azul",
		board: [
			[2, 17, 38, 48, 62],
			[7, 20, 44, 50, 61],
			[6, 16, "FREE", 60, 71],
			[9, 30, 45, 59, 74],
			[12, 24, 40, 46, 75]
		]
	},
	{
		title: "Tabla Azul #18232",
		color: "azul",
		board: [
			[14, 17, 41, 50, 61],
			[7, 18, 40, 51, 73],
			[13, 27, "FREE", 53, 68],
			[10, 23, 45, 58, 63],
			[9, 21, 35, 57, 66]
		]
	},
	{
		title: "Tabla Azul #18233",
		color: "azul",
		board: [
			[14, 20, 45, 49, 64],
			[1, 16, 43, 52, 63],
			[9, 25, "FREE", 51, 62],
			[2, 17, 34, 50, 66],
			[12, 27, 37, 55, 71]
		]
	},
	{
		title: "Tabla Azul #18234",
		color: "azul",
		board: [
			[8, 19, 32, 49, 63],
			[3, 24, 37, 55, 71],
			[6, 27, "FREE", 56, 74],
			[12, 28, 42, 54, 66],
			[4, 17, 39, 47, 62]
		]
	},
	{
		title: "Tabla Azul #18235",
		color: "azul",
		board: [
			[3, 22, 42, 50, 71],
			[9, 16, 36, 46, 72],
			[5, 23, "FREE", 58, 61],
			[6, 24, 33, 54, 67],
			[1, 20, 34, 53, 62]
		]
	},





	{
		title: "Tabla Roja #06542",
		color: "roja",
		board: [
			[10, 24, 37, 56, 71],
			[13, 19, 38, 47, 73],
			[11, 21, "FREE", 46, 72],
			[6, 29, 44, 59, 62],
			[5, 17, 33, 53, 65]
		]
	},
	{
		title: "Tabla Roja #06527",
		color: "roja",
		board: [
			[13, 28, 32, 56, 64],
			[5, 19, 40, 50, 68],
			[6, 23, "FREE", 59, 61],
			[8, 30, 34, 55, 75],
			[15, 27, 38, 46, 67]
		]
	},
	{
		title: "Tabla Roja #06534",
		color: "roja",
		board: [
			[15, 19, 31, 53, 67],
			[10, 18, 34, 55, 61],
			[12, 29, "FREE", 57, 64],
			[13, 26, 35, 59, 68],
			[7, 30, 33, 49, 70]
		]
	},
	{
		title: "Tabla Roja #06528",
		color: "roja",
		board: [
			[4, 25, 37, 59, 73],
			[1, 21, 45, 60, 71],
			[10, 22, "FREE", 52, 65],
			[2, 20, 33, 46, 64],
			[9, 23, 41, 49, 67]
		]
	},
	{
		title: "Tabla Roja #06540",
		color: "roja",
		board: [
			[1, 16, 39, 59, 64],
			[9, 20, 41, 48, 75],
			[12, 22, "FREE", 56, 72],
			[13, 29, 43, 58, 66],
			[5, 23, 40, 53, 63]
		]
	},
	{
		title: "Tabla Roja #06541",
		color: "roja",
		board: [
			[8, 29, 36, 60, 74],
			[13, 23, 32, 59, 71],
			[12, 24, "FREE", 55, 68],
			[11, 27, 42, 56, 63],
			[6, 25, 33, 52, 65]
		]
	},
	{
		title: "Tabla Roja #00667",
		color: "roja",
		board: [
			[3, 24, 33, 56, 61],
			[8, 27, 36, 58, 66],
			[14, 18, "FREE", 60, 72],
			[10, 28, 38, 50, 67],
			[1, 29, 34, 52, 75]
		]
	},
	{
		title: "Tabla Roja #00668",
		color: "roja",
		board: [
			[1, 16, 38, 48, 73],
			[8, 19, 34, 50, 65],
			[13, 23, "FREE", 47, 74],
			[2, 27, 40, 55, 64],
			[10, 30, 39, 56, 72]
		]
	},
	{
		title: "Tabla Roja #02882",
		color: "roja",
		board: [
			[3, 26, 37, 59, 73],
			[12, 20, 38, 58, 71],
			[13, 23, "FREE", 56, 74],
			[14, 21, 39, 46, 75],
			[5, 17, 31, 60, 69]
		]
	},
	{
		title: "Tabla Roja #04875",
		color: "roja",
		board: [
			[13, 17, 42, 49, 62],
			[4, 24, 34, 57, 61],
			[12, 27, "FREE", 56, 70],
			[9, 30, 45, 54, 69],
			[6, 26, 32, 46, 66]
		]
	},
	{
		title: "Tabla Roja #04871",
		color: "roja",
		board: [
			[10, 24, 32, 58, 61],
			[3, 21, 40, 51, 74],
			[9, 20, "FREE", 56, 63],
			[4, 29, 33, 54, 67],
			[11, 28, 43, 53, 72]
		]
	},
	{
		title: "Tabla Roja #04870",
		color: "roja",
		board: [
			[5, 21, 43, 47, 71],
			[9, 19, 41, 50, 62],
			[11, 22, "FREE", 48, 70],
			[7, 25, 31, 53, 66],
			[1, 23, 39, 55, 61]
		]
	},
	{
		title: "Tabla Roja #04869",
		color: "roja",
		board: [
			[4, 16, 31, 51, 66],
			[15, 21, 40, 59, 73],
			[12, 26, "FREE", 49, 74],
			[3, 29, 43, 57, 68],
			[8, 18, 42, 53, 61]
		]
	},
	{
		title: "Tabla Roja #04868",
		color: "roja",
		board: [
			[11, 21, 34, 52, 68],
			[10, 16, 39, 47, 62],
			[1, 19, "FREE", 48, 63],
			[3, 24, 40, 58, 73],
			[14, 23, 42, 59, 67]
		]
	},
	{
		title: "Tabla Roja #04867",
		color: "roja",
		board: [
			[6, 30, 41, 50, 72],
			[10, 18, 44, 52, 68],
			[12, 28, "FREE", 53, 73],
			[5, 23, 32, 59, 66],
			[13, 24, 43, 47, 65]
		]
	},
	{
		title: "Tabla Roja #04866",
		color: "roja",
		board: [
			[7, 21, 38, 57, 63],
			[6, 19, 39, 48, 71],
			[11, 24, "FREE", 47, 66],
			[9, 16, 40, 55, 72],
			[8, 26, 33, 50, 74]
		]
	},
	{
		title: "Tabla Roja #04865",
		color: "roja",
		board: [
			[8, 18, 36, 58, 70],
			[6, 24, 44, 60, 64],
			[1, 21, "FREE", 49, 74],
			[7, 26, 33, 57, 73],
			[2, 28, 38, 56, 75]
		]
	},
	{
		title: "Tabla Roja #04864",
		color: "roja",
		board: [
			[3, 16, 36, 60, 69],
			[15, 20, 40, 51, 64],
			[11, 30, "FREE", 48, 73],
			[8, 27, 41, 59, 66],
			[6, 25, 37, 49, 63]
		]
	},
	{
		title: "Tabla Roja #04872",
		color: "roja",
		board: [
			[3, 29, 42, 52, 72],
			[13, 18, 39, 58, 68],
			[6, 26, "FREE", 47, 65],
			[14, 25, 36, 60, 71],
			[8, 19, 37, 51, 70]
		]
	},
	{
		title: "Tabla Roja #06789",
		color: "roja",
		board: [
			[11, 30, 44, 49, 74],
			[2, 28, 43, 50, 64],
			[13, 18, "FREE", 59, 68],
			[14, 20, 31, 54, 75],
			[8, 24, 36, 51, 62]
		]
	},
	{
		title: "Tabla Roja #06788",
		color: "roja",
		board: [
			[14, 25, 37, 53, 63],
			[11, 21, 38, 48, 69],
			[10, 27, "FREE", 58, 62],
			[1, 16, 36, 46, 68],
			[3, 28, 40, 49, 64]
		]
	},
	{
		title: "Tabla Roja #06755",
		color: "roja",
		board: [
			[7, 21, 40, 55, 70],
			[9, 25, 36, 54, 66],
			[15, 16, "FREE", 48, 62],
			[2, 24, 41, 53, 74],
			[11, 29, 38, 58, 73]
		]
	},
	{
		title: "Tabla Roja #06754",
		color: "roja",
		board: [
			[10, 23, 31, 57, 70],
			[4, 19, 43, 52, 71],
			[7, 22, "FREE", 50, 64],
			[1, 24, 44, 49, 63],
			[14, 27, 45, 47, 74]
		]
	},
	{
		title: "Tabla Roja #06794",
		color: "roja",
		board: [
			[1, 22, 32, 53, 67],
			[2, 16, 45, 54, 69],
			[9, 24, "FREE", 47, 62],
			[12, 28, 33, 59, 74],
			[10, 26, 37, 57, 66]
		]
	},
	{
		title: "Tabla Roja #08925",
		color: "roja",
		board: [
			[15, 17, 41, 53, 61],
			[2, 28, 39, 47, 67],
			[5, 30, "FREE", 58, 71],
			[6, 23, 33, 54, 68],
			[11, 22, 35, 60, 75]
		]
	},
	{
		title: "Tabla Roja #06795",
		color: "roja",
		board: [
			[11, 16, 34, 53, 73],
			[4, 26, 42, 51, 69],
			[3, 23, "FREE", 47, 70],
			[8, 29, 45, 49, 66],
			[5, 28, 39, 46, 63]
		]
	},
	{
		title: "Tabla Roja #12680",
		color: "roja",
		board: [
			[15, 16, 38, 55, 62],
			[8, 22, 36, 56, 66],
			[3, 24, "FREE", 52, 63],
			[4, 30, 39, 57, 69],
			[2, 23, 43, 60, 75]
		]
	},
	{
		title: "Tabla Roja #10638",
		color: "roja",
		board: [
			[12, 29, 43, 53, 62],
			[15, 23, 36, 59, 65],
			[14, 25, "FREE", 56, 75],
			[11, 16, 41, 50, 73],
			[2, 19, 32, 57, 72]
		]
	},
	{
		title: "Tabla Roja #10663",
		color: "roja",
		board: [
			[9, 27, 38, 47, 69],
			[7, 28, 44, 59, 75],
			[8, 23, "FREE", 56, 61],
			[15, 21, 34, 57, 66],
			[14, 29, 31, 49, 68]
		]
	},
	{
		title: "Tabla Roja #18825",
		color: "roja",
		board: [
			[14, 26, 35, 54, 61],
			[15, 19, 31, 55, 71],
			[7, 30, "FREE", 53, 73],
			[6, 28, 38, 50, 65],
			[12, 20, 34, 47, 66]
		]
	},
	{
		title: "Tabla Roja #18826",
		color: "roja",
		board: [
			[3, 17, 37, 51, 67],
			[10, 28, 35, 58, 74],
			[11, 29, "FREE", 53, 61],
			[9, 20, 44, 52, 62],
			[7, 26, 41, 54, 69]
		]
	},
	{
		title: "Tabla Roja #18815",
		color: "roja",
		board: [
			[14, 28, 44, 53, 67],
			[6, 24, 31, 55, 70],
			[4, 26, "FREE", 52, 73],
			[9, 20, 34, 57, 71],
			[5, 17, 37, 58, 61]
		]
	},
	{
		title: "Tabla Roja #18816",
		color: "roja",
		board: [
			[3, 28, 39, 55, 67],
			[13, 25, 37, 47, 75],
			[14, 21, "FREE", 51, 73],
			[2, 30, 41, 48, 66],
			[15, 18, 33, 49, 70]
		]
	},
	{
		title: "Tabla Roja #18817",
		color: "roja",
		board: [
			[15, 29, 32, 51, 68],
			[6, 25, 39, 58, 69],
			[7, 30, "FREE", 52, 72],
			[8, 18, 38, 47, 73],
			[5, 27, 40, 56, 62]
		]
	},
	{
		title: "Tabla Roja #18818",
		color: "roja",
		board: [
			[1, 18, 42, 55, 72],
			[4, 16, 44, 56, 63],
			[8, 30, "FREE", 46, 62],
			[9, 25, 43, 59, 68],
			[14, 26, 37, 52, 74]
		]
	},
	{
		title: "Tabla Roja #18819",
		color: "roja",
		board: [
			[7, 16, 42, 49, 64],
			[6, 23, 43, 50, 66],
			[2, 30, "FREE", 52, 62],
			[14, 20, 31, 46, 67],
			[1, 22, 35, 53, 72]
		]
	},
	{
		title: "Tabla Roja #18820",
		color: "roja",
		board: [
			[3, 26, 45, 51, 73],
			[13, 24, 35, 46, 66],
			[2, 30, "FREE", 48, 67],
			[5, 19, 32, 56, 74],
			[11, 28, 38, 57, 72]
		]
	},
	{
		title: "Tabla Roja #18821",
		color: "roja",
		board: [
			[7, 26, 43, 57, 71],
			[1, 18, 36, 48, 74],
			[4, 23, "FREE", 53, 64],
			[14, 20, 34, 49, 68],
			[6, 17, 40, 55, 73]
		]
	},
	{
		title: "Tabla Roja #18822",
		color: "roja",
		board: [
			[12, 28, 43, 54, 68],
			[7, 29, 36, 49, 69],
			[15, 16, "FREE", 57, 63],
			[10, 19, 33, 58, 66],
			[5, 24, 42, 46, 67]
		]
	},
	{
		title: "Tabla Roja #18823",
		color: "roja",
		board: [
			[8, 27, 36, 57, 61],
			[14, 17, 43, 54, 69],
			[3, 26, "FREE", 48, 62],
			[15, 29, 31, 55, 67],
			[13, 28, 38, 50, 65]
		]
	},
	{
		title: "Tabla Roja #18824",
		color: "roja",
		board: [
			[10, 29, 44, 53, 67],
			[6, 20, 31, 55, 70],
			[13, 21, "FREE", 54, 72],
			[14, 22, 34, 51, 61],
			[9, 28, 38, 49, 64]
		]
	},
];

// Mapeo de color a clases Tailwind
const colorTableClasses = {
	verde: 'border-green-500',
	roja: 'border-red-500',
	azul: 'border-blue-500',
	naranja: 'border-orange-500'
};
const colorHeaderClasses = {
	verde: 'bg-green-500 text-white',
	roja: 'bg-red-500 text-white',
	azul: 'bg-blue-500 text-white',
	naranja: 'bg-orange-500 text-white'
};

// Modificar createBingoTable para agregar la clase de color como clase CSS para el filtrado
function createBingoTable(board, tableIndex) {
	const container = document.getElementById('bingoTablesContainer');
	const table = document.createElement('table');
	table.className = `min-w-max mx-auto my-8 border-1 rounded-lg shadow-lg border-collapse ${colorTableClasses[board.color] || ''}`;
	table.classList.add(board.color); // Para el filtrado

	const tableCaption = document.createElement('caption');
	tableCaption.textContent = board.title;
	tableCaption.className = `text-lg font-bold mb-2 p-2 rounded-t-lg w-full ${colorHeaderClasses[board.color] || ''}`;
	table.appendChild(tableCaption);

	const tableBody = document.createElement('tbody');

	// Mapeo de color a fondo de fila
	const rowBgClasses = {
		verde: 'bg-green-900',
		roja: 'bg-red-900',
		azul: 'bg-blue-900',
		naranja: 'bg-orange-900'
	};
	const rowBg = rowBgClasses[board.color] || '';

	for (let i = 0; i < board.board.length; i++) {
		const row = document.createElement('tr');
		row.className = rowBg;

		for (let j = 0; j < board.board[i].length; j++) {
			const cell = document.createElement('td');
			cell.className = "p-2 text-center border-[0]";

			if (board.board[i][j] === "FREE") {
				cell.innerHTML = `<span class="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full text-black font-bold border-2 border-dashed border-gray-400">N</span>`;
				cell.classList.add('free', 'active');
			} else {
				let word = "";
				if(i === 0){
					word = `<div class="mb-1 text-lg font-bold">${getBingoClass(j)}</div>`;
				}
				cell.innerHTML = word + `<span class="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full text-black font-bold">${board.board[i][j]}</span>`;
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

	let confirmacion = false; //window.confirm(`¿Estás seguro marcar ${targetClass}?`);

		Swal.fire({
		title: `¿Estás seguro de marcar ${targetClass}?`,
		text: "Esta acción no se puede revertir.",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Sí, estoy seguro',
		cancelButtonText: 'Cancelar'
		}).then((result) => {
		// Aquí es donde la validación ocurre ahora
		if (result.isConfirmed) {
			// La lógica que estaba dentro de 'if (confirmacion)' va aquí
			// Por ejemplo, tu código para aplicar el filtro o realizar la acción
			confirmacion = true;
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
		} else {
			// La lógica para cuando el usuario cancela va en este bloque
			console.log('La acción ha sido cancelada.');
		}
		});
	
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
	//alert(`¡Bingo en ${tableTitle}!`);
	 // 1. Muestra una alerta de SweetAlert2
    Swal.fire({
      title: `¡Bingo en ${tableTitle}!`,
      text: '¡Felicidades, has ganado!',
      icon: 'success',
      confirmButtonText: 'Seguir Jugando'
    });

    // 2. Dispara el efecto de confeti
    // La función confetti() de la librería Canvas Confetti lanza los efectos.
    confetti({
      particleCount: 450, // Más partículas para un efecto más espectacular
      spread: 90,         // Un ángulo de propagación más amplio
      origin: { y: 0.6 }  // Los confetis salen desde la mitad de la pantalla
    });
}

// Función para ocultar/mostrar tablas según el filtro seleccionado
function filtrarTablas() {
	// Obtener el filtro seleccionado
	const selectedFilter = document.querySelector('form.filters input[name="color"]:checked').value;
	localStorage.setItem('filterValue', selectedFilter);

	// Obtener todas las tablas
	const tables = document.querySelectorAll('#bingoTablesContainer table');

	// Recorrer todas las tablas y aplicar el filtro
	tables.forEach(table => {
		if (selectedFilter === "todo" || table.classList.contains(selectedFilter)) {
			table.style.display = 'table'; // Mostrar la tabla
		} else {
			table.style.display = 'none'; // Ocultar la tabla
		}
	});
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

	Swal.fire({
    title: '¿Estás seguro de reiniciar el juego?',
    text: "Esto borrará el progreso de la partida actual.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, reiniciar',
    cancelButtonText: 'Cancelar'
}).then((result) => {
    if (result.isConfirmed) {
        // La lógica para reiniciar el juego va aquí
        localStorage.removeItem('bingoValues');
        location.reload(); // Recargar la página para reiniciar
    } else {
        // Opcional: El usuario ha cancelado la acción.
        Swal.fire(
            'Cancelado',
            'El juego no se ha reiniciado.',
            'info'
        );
    }
});
});

// Función principal que se ejecuta al cargar la página
function setupBoardCounts() {
    // PASO 1: Calcular los totales
    const totalBoards = bingoBoards.length;
    const colorCounts = bingoBoards.reduce((acc, board) => {
        acc[board.color] = (acc[board.color] || 0) + 1;
        return acc;
    }, {});

    // PASO 2: Actualizar la etiqueta "Todo"
    const todoLabel = document.querySelector('label[for="list-radio-all"]');
    if (todoLabel) {
        todoLabel.textContent = `Todo (${totalBoards})`;
    }

    // PASO 3: Actualizar las etiquetas de cada color
    for (const color in colorCounts) {
        const count = colorCounts[color];

		let colorLabel = '';
		switch (color) {
			case 'verde':
				colorLabel = 'green';
				break;
			case 'azul':
				colorLabel = 'blue';
				break;
			case 'naranja':
				colorLabel = 'orange';
				break;
			case 'roja':
				colorLabel = 'red';
				break;
			default:
				break;
		}

        const labelElement = document.querySelector(`label[for="list-radio-${colorLabel}"]`);
        
        if (labelElement) {
            const capitalizedColor = color.charAt(0).toUpperCase() + color.slice(1);
            labelElement.textContent = `${capitalizedColor} (${count})`;
        }
    }
}

document.addEventListener('DOMContentLoaded', setupBoardCounts);