import '../styles/globals.css';
import TasksContextProvider from '../context/Tasks';
function MyApp({ Component, pageProps }) {
	return (
		<TasksContextProvider>
			<Component {...pageProps} />
		</TasksContextProvider>
	);
}

export default MyApp;
