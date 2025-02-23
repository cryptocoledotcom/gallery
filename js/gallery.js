// js/gallery.js

function upDate(previewPic) {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.textContent = previewPic.alt;
}

function unDo() {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = '';
    imageDiv.textContent = 'Hover over an image below to display here.';
}

const previewImages = document.querySelectorAll('.preview');

previewImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        upDate(image);
    });

    image.addEventListener('mouseout', () => {
        unDo();
    });
});

function initializeTabIndices() {
    console.log("initializeTabIndices function called!");
    previewImages.forEach(image => {
        image.setAttribute('tabindex', '0');
    });
}

window.onload = initializeTabIndices;

// Example of iterating through the preview images.
previewImages.forEach((image,index) => {
    console.log("Preview Image", index, ":", image);
});

previewImages.forEach(image => {
    // ... (existing event listeners) ...
  
    image.addEventListener('focus', () => {
      console.log("Image gained focus:", image.alt);
      image.style.border = "5px solid red"; // example focus styling
    });
  
    image.addEventListener('blur', () => {
      image.style.border = "10px solid black"; // reset styling on blur.
    });
  
  });