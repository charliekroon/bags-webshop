import {Button} from "./components/elements/Button";
import {Header} from "./components/navigation/Header";
import {Banner} from "../../src/app/components/Banner";
import styles from "./globals.css";

export default function Home() {
	return (
		<div className={styles}>
			<Header />

			<Banner />
		</div>
	);
}
