import { MemoryRouter, Route, Routes } from "react-router-dom";
import ParticleComp from "./components/ParticleComp";
import Home from "./components/Home";
import "./App.css";

export default function App() {
	return (
		<MemoryRouter>
			<div
				className='container'
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
				}}
			>
				<ParticleComp />
				<div
					style={{
						position: "relative",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
					}}
				>
					<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					</Routes>
				</div>
			</div>
		</MemoryRouter>
	);
}
