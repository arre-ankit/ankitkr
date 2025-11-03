import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
  const response = await next();
  try {
    const clone = response.clone();
    const text = await clone.text();
    console.log('[middleware-debug] status', response.status, 'content-type', response.headers.get('content-type'));
    console.log('[middleware-debug] body preview', text.slice(0, 100));
  } catch (error) {
    console.log('[middleware-debug] failed to read response', error);
  }
  return response;
};

