import { useRouteError } from "react-router-dom";

//TODO: Make a proper error page
export default function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();

  return (
    <div id="flex h-screen items-center justify-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
