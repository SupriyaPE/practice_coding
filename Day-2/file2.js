function getUser() {
    return new Promise((resolve, reject) => {
        reject("Error fetching user");
    });
}

getUser()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));