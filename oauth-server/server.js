const express = require('express');
const axios = require('axios');
const app = express();

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const CALLBACK_URL = process.env.CALLBACK_URL || 'https://blogai-d0p.pages.dev/api/oauth';

app.get('/auth', (req, res) => {
  const redirectUri = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${CALLBACK_URL}&scope=repo`;
  res.redirect(redirectUri);
});

app.get('/oauth', async (req, res) => {
  const { code } = req.query;
  
  try {
    const response = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code
    }, {
      headers: {
        Accept: 'application/json'
      }
    });

    const accessToken = response.data.access_token;
    
    // Redirect back to CMS with token
    res.redirect(`https://blogai-d0p.pages.dev/admin/?token=${accessToken}`);
  } catch (error) {
    console.error('OAuth error:', error);
    res.status(500).send('Authentication failed');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`OAuth server running on port ${PORT}`));
