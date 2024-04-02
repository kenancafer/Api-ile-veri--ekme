async function usersFetch() {
  try {
    const respone = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await respone.json();
    console.log(data);
    const cardsTitle = document.getElementById("user-cards");
    data.forEach((user) => {
      console.log(user);
      const userCardHtml = `
      <div class=" col-lg-4 col-md-12 justify-content-center d-flex mt-5 ">
      <div class="card shadow" style="width: 25rem; height:23rem;">
          <div class="card-body ">
              <h5 class="card-title">${user.name}</h5>
              <div class="user-detail">
                 <p class="card-text"><i class="fa-solid fa-user"></i> ${user.username}</p>
                 <p class="card-text"><i class="fa-solid fa-location-dot"></i> ${user.address.street}, ${user.address.suite}, ${user.address.zipcode}</p>
                 <p class="card-text"><i class="fa-solid fa-building"></i> ${user.company.name}</p>
                 <p class="card-text"><i class="fa-solid fa-envelope"></i> ${user.email}</p>
                 <p class="card-text"><i class="fa-solid fa-phone"></i> ${user.phone}</p>
                 <p class="card-text"><i class="fa-solid fa-globe"></i> ${user.website}</p>
                 <a class="btn btn-warning" href="posts.html?userId=${user.id}">Postları göster</a>
              </div>
          </div>
      </div>
      </div>
      `;
      cardsTitle.innerHTML += userCardHtml;
    });
  } catch (error) {
    console.log(error);
  }
}

usersFetch();
