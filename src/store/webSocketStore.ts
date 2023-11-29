import ReconnectingWebSocket from 'reconnecting-websocket';

type Subscriber = () => void;

export class WebSocketStore {
  private urlToWebSocket: Map<string, ReconnectingWebSocket> = new Map();
  private urlToMessages: Map<string, string[]> = new Map();
  private urlToSubscribers: Map<string, Set<Subscriber>> = new Map();
  create(url: string) {
    if (this.urlToWebSocket.get(url)?.OPEN) return;
    const ws = new ReconnectingWebSocket(url);
    this.urlToMessages.set(url, []);
    this.urlToSubscribers.set(url, new Set());
    ws.onmessage = ({ data }: MessageEvent<string>) => {
      const tokens = this.urlToMessages.get(url) || [];
      this.urlToMessages.set(url, [...tokens, data]);
      this.urlToSubscribers.get(url)?.forEach((s) => s());
    };
    this.urlToWebSocket.set(url, ws);
  }
  send(url: string, msg: string) {
    const ws = this.urlToWebSocket.get(url);
    if (!ws?.OPEN) return;
    this.urlToMessages.set(url, []);
    ws.send(msg);
  }
  subscribe(url: string, s: Subscriber) {
    this.urlToSubscribers.get(url)?.add(s);
    return () => this.urlToSubscribers.get(url)?.delete(s);
  }
  getSnapShot(url: string): string[] {
    return this.urlToMessages.get(url) || [];
  }
}

export const webSocketStore = new WebSocketStore();
