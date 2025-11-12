async function loadGallery() {
      try {
        const response = await fetch('./gallery.json'); 
        const data = await response.json();
        const galleryRow = document.querySelector('.galleryJson');

        data.gallery.forEach(item => {
          const col = document.createElement('div');
          col.className = 'col-6 col-md-3';
          col.innerHTML = `
            <div class="card h-100 border-0 text-white position-relative">
              <img src="${item.src}" class="card-img" alt="${item.alt}">
            </div>`;
          galleryRow.appendChild(col);
        });
      } catch (error) {
        console.error('Error loading gallery:', error);
      }
    }

    loadGallery();