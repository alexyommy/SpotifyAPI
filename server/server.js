const express = require('express');
const spotifyWebApi = require('spotify-web-api-nodejs');

const app = express();

app.post('/login', (req, res) => {
    const code = req.bod.code
    const spotifyApi =  new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '65389aae0f654627b40bc105352b4052',
        clientSecret:'edb3168c96614af39e6bdd1d0a943a3e'
    });

    spotifyApi.authorizationCodeGrant(code).then(data => {
        req.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(() => {
        res.sendStatus(400)
    })
})

app.listen(3001)