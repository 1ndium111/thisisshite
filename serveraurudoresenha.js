const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send(`
            <h1>Página auruda resenha 67 do Chris 😎</h1>
            <br>
            <img src="imagens/pipi.jpg" width="300">
            <br>
            <button onclick="window.location.href='/roger'">Trocar para a Página do Roger</button>
        `);
    
});

app.get('/roger', (req, res) => {
    res.send(`
        <h1>Roger, meu querido 😍😍</h1>
        <br>        
        Também conhecido como Melhor Prof de Todos, GOAT, etc. Roger é maravilhoso.
        <br>
        <img src="imagens/alombada.jpg" width="300">
        <br>
        <button onclick="window.location.href='/gemeos'">Trocar pra página dos gêmeos</button>
        `);
    
});

app.get('/gemeos', (req, res) => {
    res.send(`
        <h1>Rafael e Miguel são muito aurudos 67 👀</h1>
        <br>
        Também conhecidos como Gêmeo do Bem/Mal, os dois farmam tanta aura que
        <br>
        se superam cada vez mais
        <br>
        <img src="imagens/twin.jpg" width="300">
        <br>
        <button onclick="window.location.href='/teste'">Ir para a Página Teste</button>
    `);
    
});

app.get('/teste', (req, res) => {
    res.send(`
        <h1>Teste</h1>
        <br>
        Essa página é só uma placeholder pois não tenho ideia
        <br>
        do que fazer com ela.
        <br>
        <img src="imagens/teste.jpg" width="300"> 
        <br>
        <button onclick="window.location.href='/'">Ir de volta para a Página Inicial</button>
    `)
});

app.listen(6967, () => {})