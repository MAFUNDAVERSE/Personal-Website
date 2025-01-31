// Function to add opinions
function addOpinion() {
  const opinionInput = document.getElementById('opinionInput');
  const opinionsList = document.getElementById('opinionsList');

  if (opinionInput.value.trim() !== '') {
    const newOpinion = document.createElement('p');
    newOpinion.textContent = opinionInput.value;
    opinionsList.appendChild(newOpinion);
    opinionInput.value = ''; // Clear the input
  }
}

// Function to upload images
function uploadImage() {
  const imageUpload = document.getElementById('imageUpload');
  const galleryImages = document.getElementById('galleryImages');

  const file = imageUpload.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      galleryImages.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
}