
setInterval(() => {

    let images = document.getElementsByTagName("img")
    let img = "https://fsx1.itstep.org/api/v1/files/CcK-7f6k-Yc5Z3qGwUWhnLIVBEwgx2Wq"

    for (let i = 0; i < images.length; i++) {
        if (images[i].src != img) {

            images[i].src = img
        }
    }


}, 100)