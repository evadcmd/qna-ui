import { useCallback, useSyncExternalStore } from 'react';
import { webSocketStore } from 'src/store/webSocketStore';

type Subscriber = () => void;
type Sender = (_: string) => void;

export function useWebSocket(url: string): [string[], Sender] {
  webSocketStore.create(url);
  const subscribe = useCallback(
    (s: Subscriber) => webSocketStore.subscribe(url, s),
    [url],
  );
  const getSnapShot = useCallback(() => webSocketStore.getSnapShot(url), [url]);
  const sender = useCallback(
    (msg: string) => webSocketStore.send(url, msg),
    [url],
  );
  return [useSyncExternalStore(subscribe, getSnapShot), sender];
}
