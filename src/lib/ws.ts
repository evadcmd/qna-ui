function getWSEndpoint(): string {
  const url = new URL('/api/streaming-chat', window.location.href);
  url.protocol = url.protocol.replace('http', 'ws');
  return url.href;
}

export const WS_ENDPOINT = getWSEndpoint();
