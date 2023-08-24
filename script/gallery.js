const imageCards = document.querySelector(".image-cards");
const harryLink = document.querySelector("#harry");
const disneyLink = document.querySelector("#disney");
const astronautsLink = document.querySelector("#astronauts");
const likedLink = document.querySelector("#liked");
const myModal = document.querySelector("#myModal");


// const galleryHomeNav = document.querySelector('#galleryHomeNav');

// galleryHomeNav.addEventListener('click', function() {
//   galleryHomeNav.setAttribute('href', 'gallery.html');
// })
// getImagedata().then(data => {
//   updateImageCards(data.image_details[0].data, "default_data");
// });

// Function untuk ambil data dari file JSON
async function getImagedata() {
  return fetch("img-dataset/generated_images.json").then((response) =>
    response.json()
  );
}

// Function untuk mengubah tampilan cards image, menyesuaikan kategori gambar yang di klik
function updateImageCards(imageData, folderName) {
  imageCards.innerHTML = "";
  imageData.forEach((data) => {
    // console.log(data);
    const filePath = `${folderName}/${data.image}`;

    const card = `
      <div class="image-card">
        <img class="foto" src="img/${filePath}" alt="" data-imageId="${data.id}">
      </div>
    `;
    imageCards.insertAdjacentHTML("beforeend", card);
  });
}

function modalImageDetails(imageData, folderName) {
  if (image.id === imageId) {
    const modal = document.querySelector('.modal')
    myModal.innerHTML = "";
    imageData.forEach((data) => {
      // console.log(data);
      const filePath = `${folderName}/${data.image}`;
  
      const imageDetails = `
      <div class="modal-content">
      <div class="modal-img">
      <img src="img/${filePath}" alt="">
      <div class="resolution-desc">
      <h3>image</h3>
      <p>${data.resolution}</p>
      </div>
      </div>
      
      <div class="modal-description">
      <span class="close">&times;</span>
      <div class="desc">
      <h3>Prompt Details</h3>
      <p>${data.prompt_detail}</p>
      </div>
      <div class="desc">
      <h3>Negative Prompt</h3>
      <p>${data.negative_prompt}</p>
      </div>
      </div>
      </div>
      `;
      myModal.insertAdjacentHTML("beforeend", imageDetails);
    });
  }
  
}

likedLink.addEventListener("click", function () {
  disneyLink.style.color = "#afafaf";
  harryLink.style.color = "#afafaf";
  astronautsLink.style.color = "#afafaf";

  likedLink.style.color = "#fff";
  getImagedata().then((data) => {
    const dataCalling = data.image_details[0].data
    const folderName = "default_data"
    updateImageCards(dataCalling, folderName);

    document.addEventListener("click", function(e) {
      if(e.target.classList.contains("foto")) {
        modalImageDetails(dataCalling, folderName)
      }
    })
  });
});

harryLink.addEventListener("click", function () {
  likedLink.style.color = "#afafaf";
  disneyLink.style.color = "#afafaf";
  astronautsLink.style.color = "#afafaf";

  harryLink.style.color = "#fff";
  getImagedata().then((data) => {
    updateImageCards(data.image_details[1].data, "harry_data");
    // console.log(data);

    document.addEventListener("click", function (e) {
      const imageSpecificData = data.image_details[1].data;
      // console.log(imageSpecificData);
      imageSpecificData.forEach((image) => {
        if (e.target.classList.contains("foto")) {
          const imageId = e.target.dataset.imageid;
          if (image.id === imageId) {
            const modal = document.querySelector('.modal')
            myModal.innerHTML = `
            <div class="modal-content">
            <div class="modal-img">
            <img src="img/harry_data/${image.image}" alt="">
            <div class="resolution-desc">
            <h3>image</h3>
            <p>${image.resolution}</p>
            </div>
            </div>
            
            <div class="modal-description">
            <span class="close">&times;</span>
            <div class="desc">
            <h3>Prompt Details</h3>
            <p>${image.prompt_detail}</p>
            </div>
            <div class="desc">
            <h3>Negative Prompt</h3>
            <p>${image.negative_prompt}</p>
            </div>
            </div>
            </div>
            `;
            modal.style.display = 'block';

          }
          const modal = document.querySelector('.modal')
          window.addEventListener('click', function(e) {
            console.log(e.target);
            if(e.target === modal || e.target.classList.contains('close')) {
              modal.style.display='none'
            }
          })   
        }
      });

    });
  });
});

disneyLink.addEventListener("click", function () {
  likedLink.style.color = "#afafaf";
  harryLink.style.color = "#afafaf";
  astronautsLink.style.color = "#afafaf";

  disneyLink.style.color = "#fff";
  getImagedata().then((data) => {
    updateImageCards(data.image_details[2].data, "disney_data");

    document.addEventListener("click", function (e) {
      const imageSpecificData = data.image_details[2].data;
      // console.log(imageSpecificData);
      imageSpecificData.forEach((image) => {
        if (e.target.classList.contains("foto")) {
          const imageId = e.target.dataset.imageid;
          console.log(imageId);

          if (image.id === imageId) {
            const modal = document.querySelector('.modal')
            myModal.innerHTML = `
            <div class="modal-content">
            <div class="modal-img">
            <img src="img/disney_data/${image.image}" alt="">
            <div class="resolution-desc">
            <h3>image</h3>
            <p>${image.resolution}</p>
            </div>
            </div>
            
            <div class="modal-description">
            <span class="close">&times;</span>
            <div class="desc">
            <h3>Prompt Details</h3>
            <p>${image.prompt_detail}</p>
            </div>
            <div class="desc">
            <h3>Negative Prompt</h3>
            <p>${image.negative_prompt}</p>
            </div>
            </div>
            </div>
            `;
            modal.style.display = 'block';

          }
          const modal = document.querySelector('.modal')
          window.addEventListener('click', function(e) {
            // console.log(e.target);
            if(e.target === modal || e.target.classList.contains('close')) {
              modal.style.display='none'
            }
          })   
        }
      });

    });
  });
});

astronautsLink.addEventListener("click", function () {
  likedLink.style.color = "#afafaf";
  harryLink.style.color = "#afafaf";
  disneyLink.style.color = "#afafaf";

  astronautsLink.style.color = "#fff";
  getImagedata().then((data) => {
    updateImageCards(data.image_details[3].data, "astronauts_data");

    document.addEventListener("click", function (e) {
      const imageSpecificData = data.image_details[3].data;
      console.log(imageSpecificData);
      imageSpecificData.forEach((image) => {
        if (e.target.classList.contains("foto")) {
          const imageId = e.target.dataset.imageid;
          if (image.id === imageId) {
            const modal = document.querySelector('.modal')
            myModal.innerHTML = `
            <div class="modal-content">
            <div class="modal-img">
            <img src="img/astronauts_data/${image.image}" alt="">
            <div class="resolution-desc">
            <h3>image</h3>
            <p>${image.resolution}</p>
            </div>
            </div>
            
            <div class="modal-description">
            <span class="close">&times;</span>
            <div class="desc">
            <h3>Prompt Details</h3>
            <p>${image.prompt_detail}</p>
            </div>
            <div class="desc">
            <h3>Negative Prompt</h3>
            <p>${image.negative_prompt}</p>
            </div>
            </div>
            </div>
            `;
            modal.style.display = 'block';

          }
          const modal = document.querySelector('.modal')
          window.addEventListener('click', function(e) {
            console.log(e.target);
            if(e.target === modal || e.target.classList.contains('close')) {
              modal.style.display='none'
            }
          })   
        }
      });

    });
  });
});
