axios.get('https://github.com/users/diego3g')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error)
    });