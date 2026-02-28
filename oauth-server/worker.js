export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // OAuth callback - GitHub redirects here with code
    if (url.pathname === '/oauth' || url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      const state = url.searchParams.get('state');
      
      console.log('OAuth callback received, code:', code ? 'yes' : 'no');
      
      if (!code) {
        return new Response('Missing code parameter. <a href="/auth">Try again</a>', { 
          status: 400,
          headers: { 'Content-Type': 'text/html' }
        });
      }

      try {
        // Exchange code for access token
        const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            client_id: env.GITHUB_CLIENT_ID,
            client_secret: env.GITHUB_CLIENT_SECRET,
            code: code
          })
        });

        const tokenData = await tokenResponse.json();
        console.log('Token response:', tokenData);
        
        if (tokenData.error) {
          return new Response('Error: ' + tokenData.error_description, { status: 400 });
        }

        const accessToken = tokenData.access_token;
        
        if (!accessToken) {
          return new Response('Failed to get access token', { status: 400 });
        }

        // Redirect back to CMS admin with token
        // Use 307 to preserve the token in redirect
        return Response.redirect(`https://blogai-d0p.pages.dev/admin/?token=${accessToken}`, 302);
        
      } catch (error) {
        return new Response('Error: ' + error.message, { status: 500 });
      }
    }

    // Auth redirect - start OAuth flow
    if (url.pathname === '/auth' || url.pathname === '/login') {
      const redirectUri = `https://cms-oauth.duynguyendev.workers.dev/oauth`;
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${env.GITHUB_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo&allow_signup=true`;
      
      console.log('Redirecting to GitHub:', authUrl);
      return Response.redirect(authUrl, 302);
    }

    // Status page
    return new Response(`
      <html>
        <head><title>OAuth Server</title></head>
        <body>
          <h1>OAuth Server Running</h1>
          <p><a href="/auth">Login with GitHub</a></p>
          <p>Worker URL: https://cms-oauth.duynguyendev.workers.dev</p>
        </body>
      </html>
    `, { headers: { 'Content-Type': 'text/html' } });
  }
};
