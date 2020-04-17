function changeColor() {
    const color = document.getElementById("colorPicker").value;
    this.style.background = color;
}
function grid() {
    const gridHeight = document.getElementById("Heightt").value;
    const gridWidth = document.getElementById("Widthh").value;
    const pixelCanvas = document.getElementById("pixelCanvas"); 
    pixelCanvas.innerText=""; 
    
    for (let h=0; h<gridHeight; ++h) {
        const row = pixelCanvas.insertRow(-1); 
        for (let w=0; w<gridWidth; ++w) {
            const cell = row.insertCell(-1); 
            cell.onclick = changeColor;
        }
    }
    event.preventDefault();
}