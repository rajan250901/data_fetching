let pageNumber = 1;
let userList = document.getElementById("user-list");
let pageNumberHeading = document.getElementById("page-number");
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

function fetchUsers() {
    fetch(`https://content.newtonschool.co/v1/pr/main/users?page=${pageNumber}`)
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < 2; i++) {
                let user = data[i];
                let userLi = document.createElement("li");
                userLi.innerHTML = user.username;
                let postUl = document.createElement("ul");
                for (let j = 0; j < 3; j++) {
                    let post = user.posts[j];
                    let postLi = document.createElement("li");
                    postLi.innerHTML = post.title;
                    postUl.appendChild(postLi);
                }

                userLi.appendChild(postUl);
                userList.appendChild(userLi);
            }
        });
}
fetchUsers();
prevButton.addEventListener("click", function () {
    if (pageNumber > 1) {
        pageNumber--;
        pageNumberHeading.innerHTML = `Page number: ${pageNumber}`;
        userList.innerHTML = "";
        fetchUsers();
    }
});

nextButton.addEventListener("click", function () {
    if (pageNumber < 6) {
        pageNumber++;
        pageNumberHeading.innerHTML = `Page number: ${pageNumber}`;
        userList.innerHTML = "";
        fetchUsers();
    }
});
