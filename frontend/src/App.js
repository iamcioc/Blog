import React from "react";
import "./App.css";
import DisplayAllPosts from "./Components/DisplayAllPosts";
import CreateForm from "./Components/Signup/CreateForm";
import Login from "././Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Landing from "./Components/Landing";
// import Profile from "./Components/Profile";

import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
//import Post from "./Post";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/login" element={<Login />} />

				<Route path="/signup" element={<Signup />} />
				<Route element={<ProtectedRoute />}>
					<Route path="/posts" element={<DisplayAllPosts />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
