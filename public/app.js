fetch('http://localhost:8080/filmes')
    .then(response => response.json())
    .then(data => {
        const filmesList = document.getElementById('filmes-list');
        data.forEach(filme => {
            
        })
    })