async function fetchUsersPosts() {
  const params = new URLSearchParams(window.location.search);

  const userIdSecenek = params.get("userId");
  console.log(userIdSecenek);
  const userFormsCard = document.getElementById("user-forms-post");
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userIdSecenek}`
    );
    const users = await response.json();
    // if (userIdSecenek === "") {
    //   const userIdPrompt = prompt("hangi id'ye gitmek istiyorsunuz (1-10)");
    //   console.log(userIdPrompt);
    // }
    users.forEach((user) => {
      console.log(user);
      let userFormCardHTML = `
    <div class=" col-lg-4 col-md-12 justify-content-center d-flex mt-5 ">
    <div>
    </div>
      <div class="card shadow" style="width: 25rem; height:23rem;">
          <div class="card-body ">
              <h5 class="card-title">${user.userId}</h5>
              <p class="">${user.body} ${user.title}</p>
          </div>
      </div>
      </div>

    `;
      userFormsCard.innerHTML += userFormCardHTML;
    });
  } catch (error) {
    console.log("hata :", error);
  }
}

fetchUsersPosts();

const getBackBtn = document.getElementById("getBackBtn");
getBackBtn.addEventListener("click", function () {
  const pageUrl = "index.html";
  window.location.href = pageUrl;
});
