export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // OAuth callback handler
    if (url.pathname === '/oauth') {
      const code = url.searchParams.get('code');
      
      if (!code) {
        return new Response('Missing code parameter', { status: 400 });
      }

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
          code
        })
      });

      const tokenData = await tokenResponse.json();
      const accessToken = tokenData.access_token;

      if (!accessToken) {
        return new Response('Failed to get access token', { status: 400 });
      }

      // Redirect back to CMS with token
      return Response.redirect(`https://blogai-d0p.pages.dev/admin/?token=${accessToken}`, 302);
    }

    // Auth redirect handler
    if (url.pathname === '/auth') {
      const redirectUri = `https://github.com/login/oauth/authorize?client_id=${env.GITHUB_CLIENT_ID}&redirect_uri=https://cms-oauth.duyvl86.workers.dev/oauth&scope=repo`;
      return Response.redirect(redirectUri, 302);
    }

    return new Response('OAuth Server Running', { status: 200 });
  }
};
