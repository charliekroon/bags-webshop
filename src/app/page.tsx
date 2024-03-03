import {Header} from "./components/navigation/Header";
import {Banner} from "./components/Banner";
import {CategoriesSection} from "./components/CategoriesSection";
import {Footer} from "./components/Footer";
import styles from "../globals.css";

export default function Home() {
	return (
		<div className={styles}>
			<Header />
			<Banner />
			<CategoriesSection />
			<Footer />
		</div>
	);
}
