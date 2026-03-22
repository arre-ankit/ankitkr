// Cloudflare Worker for subdomain routing
// Deploy this to handle ink2ansi.ankitkr.com

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // If accessing ink2ansi.ankitkr.com, rewrite to /ink2ansi path
    if (url.hostname === 'ink2ansi.ankitkr.com') {
      url.hostname = 'ankitkr.com';
      url.pathname = '/ink2ansi' + url.pathname;
      
      return fetch(url, request);
    }
    
    // Pass through other requests
    return fetch(request);
  }
}
