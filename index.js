
let theApi = (samsung) => {
  fetch(`https://openapi.programming-hero.com/api/phones?search=${samsung}`)
    .then((res) => res.json())
    .then((data) => dataApi(data.data));

  let dataApi = (data) => {
    let mainCard = document.getElementById("mainCard");
    for (let i of data) {
      console.log(i);
      let newCard = document.createElement("div");
      newCard.classList.add("col");
      newCard.innerHTML = `
            <div class="col">
    <div class="card border-primary bg-transparent rounded-5">
      <img src="${i.image}" class="p-5 img-fluid card-img-top" alt="...">
      <div class="card-body">
      <section class ="d-flex flex-column align-items-center justify-content-center">
        <h1 class="card-title text-info">${i.phone_name}</h1>
        
        <button type="button" class="mt-3 px-3 py-2 fs-5 btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Details
</button>
        </section>
      </div>
      
    </div>
    
  </div>

            `;
      mainCard.appendChild(newCard);
    }
  };
};
theApi('samsung');
