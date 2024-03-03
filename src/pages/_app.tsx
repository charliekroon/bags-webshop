import "../globals.css";
import {Header} from "../app/components/navigation/Header";

function MyApp({Component, pageProps}) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
