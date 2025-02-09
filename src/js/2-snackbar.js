document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const delay = parseInt(event.target.delay.value, 10);
    const state = event.target.state.value;
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise
        .then(delay => {
            window.iziToast.success({
                title: "Success",
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: "topRight"
            });
        })
        .catch(delay => {
            window.iziToast.error({
                title: "Error",
                message: `❌ Rejected promise in ${delay}ms`,
                position: "topRight"
            });
        });
});
