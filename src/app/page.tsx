import {Button} from "./components/elements/Button";
import {Header} from "./components/navigation/Header";
import styles from "./globals.css";

export default function Home() {
	return (
		<div className={styles}>
			<Header />
			<Button variant="dark">Dark</Button>
		</div>
	);
}
