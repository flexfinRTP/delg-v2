import Navbar from "../components/navigation/navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
	return (
		<div>
            <Navbar />
            {children}
			<Footer />
		</div>
	);
}
