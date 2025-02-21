// Inicializar el canvas con Fabric.js
const canvas = new fabric.Canvas('canvas');

// Cargar la imagen de la camiseta
fabric.Image.fromURL('https://via.placeholder.com/500x600', function (img) {
  img.scaleToWidth(500);
  canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
});

// Manejar la subida de imágenes PNG
document.getElementById('image-input').addEventListener('change', function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function (f) {
    fabric.Image.fromURL(f.target.result, function (img) {
      img.scaleToWidth(200); // Ajustar el tamaño de la imagen
      canvas.add(img);
    });
  };
  reader.readAsDataURL(file);
});

// Función para descargar el diseño
function downloadImage() {
  const link = document.createElement('a');
  link.download = 'camiseta-diseño.png';
  link.href = canvas.toDataURL({ format: 'png', quality: 1 });
  link.click();
}
}
