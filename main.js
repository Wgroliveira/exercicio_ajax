/*
document.addEventListener('DOMContentLoaded', function () {
    var githubUsername = 'Wgroliveira';
    var githubApiUrl = 'https://api.github.com/users/' + githubUsername;

    
    var reposElement = document.getElementById('repos');
    var followersElement = document.getElementById('followers');
    var followingElement = document.getElementById('following');
    var githubLinkElement = document.getElementById('github-link');

    githubApiUrl += '?t=' + new Date().getTime();

    fetch(githubApiUrl)
        .then(response => response.json())
        .then(data => {
            
            reposElement.textContent = data.public_repos;
            followersElement.textContent = data.followers;
            followingElement.textContent = data.following;

            
            githubLinkElement.href = data.html_url;
        })
        .catch(error => {
            console.error('Erro na requisição do GitHub API:', error);
        });
});
*/
        

    document.addEventListener('DOMContentLoaded', function () {
        var githubUsername = 'Wgroliveira';
        var githubApiUrl = 'https://api.github.com/users/' + githubUsername;

        // Elementos span para exibir os dados dinamicamente
        var reposElement = document.getElementById('repos');
        var followersElement = document.getElementById('followers');
        var followingElement = document.getElementById('following');
        var githubLinkElement = document.getElementById('github-link');

        // Adiciona um timestamp ao URL para evitar o cache
        githubApiUrl += '?t=' + new Date().getTime();

        fetch(githubApiUrl)
            .then(response => response.json())
            .then(data => {
                // Imprime dados no console para verificar a resposta
                console.log('Dados do GitHub:', data);

                // Preenche os elementos com os dados do GitHub
                reposElement.textContent = data.public_repos;
                followersElement.textContent = data.followers;
                followingElement.textContent = data.following;

                // Imprime mensagens para verificar se os elementos estão corretos
                console.log('Repositórios:', reposElement.textContent);
                console.log('Seguidores:', followersElement.textContent);
                console.log('Seguindo:', followingElement.textContent);

                // Define o link do GitHub para o perfil do usuário
                githubLinkElement.href = data.html_url;
            })
            .catch(error => {
                console.error('Erro na requisição do GitHub API:', error);
            });
    });

    