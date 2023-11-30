import { useRouteError } from 'react-router-dom';

type ErrorText = {
  statusText: string;
};

export default function ErrorPage() {
  const err = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(err as ErrorText).statusText || (err as Error).message}</i>
      </p>
    </div>
  );
}
