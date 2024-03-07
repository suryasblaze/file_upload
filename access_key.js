document.addEventListener('DOMContentLoaded', function() {
    // Set the access_key value dynamically
    document.getElementById('access_key_placeholder').value = "placeholder_value";

    const form = document.getElementById('form');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(e) {
        const formData = new FormData(form);

        // Set the actual access_key value
        formData.set('access_key','03aab538-c134-4de6-a624-24844e449cb9');

        e.preventDefault();

        result.innerHTML = "Please wait...";

        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.innerHTML = json.message;
                } else {
                    console.log(response);
                    result.innerHTML = json.message || "Something went wrong!";
                }
            })
            .catch(error => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
            })
            .then(function() {
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                }, 3000);
            });
    });
});
