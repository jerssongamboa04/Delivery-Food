// _app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component, pageProps }) {
    return (
        <PrimeReactProvider value={{ unstyled: true }}>
            <Component {...pageProps} />
        </PrimeReactProvider>
    );
}
         