// import React from "react";


// /* Don't forget to download the CSS file too 
// OR remove the following line if you're already using Tailwind */

// import './styles.module.css';
// export const WhatIsCoursebite = () => {
//   return (
//     <div id="webcrumbs"> 
//             	<div className="w-[1200px] max-w-full bg-white rounded-3xl p-8">
//     	    <section className="space-y-8">
//     	        <div className="text-center space-y-4">
//     	            <h1 className="text-[40px] font-bold leading-tight">What is Coursebite?</h1>
//     	            <p className="text-xl opacity-80">The First Integrated Learning Ecosystem as a Platform</p>
//     	        </div>
    	
//     	        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//     	            <div className="bg-white rounded-2xl p-8 shadow-[0_0_50px_0_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_0_rgba(0,0,0,0.15)] transition-all duration-300">
//     	                <span className="material-symbols-outlined text-4xl text-blue-600">integration_instructions</span>
//     	                <h3 className="text-xl font-semibold mt-6 mb-3">Integrated Environment</h3>
//     	                <p className="opacity-70">
//     	                    A vertically integrated ecosystem that connects all aspects of education, both inside and outside
//     	                    the classroom.
//     	                </p>
//     	            </div>
    	
//     	            <div className="bg-white rounded-2xl p-8 shadow-[0_0_50px_0_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_0_rgba(0,0,0,0.15)] transition-all duration-300">
//     	                <span className="material-symbols-outlined text-4xl text-purple-600">school</span>
//     	                <h3 className="text-xl font-semibold mt-6 mb-3">Streamlined Education</h3>
//     	                <p className="opacity-70">
//     	                    Simplifies the traditional educational paradigm by combining curriculum creation, teaching
//     	                    resources, and assessment tools.
//     	                </p>
//     	            </div>
    	
//     	            <div className="bg-white rounded-2xl p-8 shadow-[0_0_50px_0_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_0_rgba(0,0,0,0.15)] transition-all duration-300 md:col-span-2 lg:col-span-1">
//     	                <span className="material-symbols-outlined text-4xl text-green-600">hub</span>
//     	                <h3 className="text-xl font-semibold mt-6 mb-3">Platform Features</h3>
//     	                <p className="opacity-70">
//     	                    Enables course creators, educators, and students to collaborate and share content through various
//     	                    course categories.
//     	                </p>
//     	            </div>
//     	        </div>
    	
//     	        <div className="bg-[#fafafa] rounded-2xl p-8">
//     	            <div className="grid md:grid-cols-2 gap-8">
//     	                <div className="space-y-6">
//     	                    <h2 className="text-2xl font-bold">For Educators</h2>
//     	                    <ul className="space-y-4">
//     	                        <li className="flex items-center gap-3">
//     	                            <span className="material-symbols-outlined text-blue-600">check_circle</span>
//     	                            <span className="opacity-80">Easy content upload and customization</span>
//     	                        </li>
//     	                        <li className="flex items-center gap-3">
//     	                            <span className="material-symbols-outlined text-blue-600">check_circle</span>
//     	                            <span className="opacity-80">Automated rubric-based grading</span>
//     	                        </li>
//     	                        <li className="flex items-center gap-3">
//     	                            <span className="material-symbols-outlined text-blue-600">check_circle</span>
//     	                            <span className="opacity-80">Revenue-sharing model for creators</span>
//     	                        </li>
//     	                    </ul>
//     	                </div>
    	
//     	                <div className="space-y-6">
//     	                    <h2 className="text-2xl font-bold">For Students</h2>
//     	                    <ul className="space-y-4">
//     	                        <li className="flex items-center gap-3">
//     	                            <span className="material-symbols-outlined text-green-600">check_circle</span>
//     	                            <span className="opacity-80">Comprehensive learning resources</span>
//     	                        </li>
//     	                        <li className="flex items-center gap-3">
//     	                            <span className="material-symbols-outlined text-green-600">check_circle</span>
//     	                            <span className="opacity-80">Built-in tutoring support</span>
//     	                        </li>
//     	                        <li className="flex items-center gap-3">
//     	                            <span className="material-symbols-outlined text-green-600">check_circle</span>
//     	                            <span className="opacity-80">Collaborative learning opportunities</span>
//     	                        </li>
//     	                    </ul>
//     	                </div>
//     	            </div>
//     	        </div>
//     	    </section>
//     	</div> 
//             </div>
//   )
// }

import React from "react";
/* Import the CSS module (adjust the path if needed) */
import styles from "./styles.module.css";

export const WhatIsCoursebite = () => {
  return (
	<div className="flex w-full flex-col items-center justify-center">
		<div id="webcrumbs" className={styles.centered}>
		<div className="w-[1200px] max-w-full bg-white rounded-3xl p-8">
			<section className="space-y-8">
			<div className="text-center space-y-4">
				<h1 className="text-[40px] font-bold leading-tight">
				What is Coursebite?
				</h1>
				<p className="text-xl opacity-80">
				Learning Ecosystem as a Platform (LEAP)
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div className="bg-white rounded-2xl p-8 shadow-[0_0_50px_0_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_0_rgba(0,0,0,0.15)] transition-all duration-300">
				<span className="material-symbols-outlined text-4xl text-blue-600">
					integration_instructions
				</span>
				<h3 className="text-xl font-semibold mt-6 mb-3">
					Integrated Environment
				</h3>
				<p className="opacity-70">
					A vertically integrated ecosystem that connects all aspects of education, both inside and outside the classroom.
				</p>
				</div>

				<div className="bg-white rounded-2xl p-8 shadow-[0_0_50px_0_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_0_rgba(0,0,0,0.15)] transition-all duration-300">
				<span className="material-symbols-outlined text-4xl text-purple-600">
					school
				</span>
				<h3 className="text-xl font-semibold mt-6 mb-3">
					Streamlined Education
				</h3>
				<p className="opacity-70">
					Simplifies the traditional educational paradigm by combining curriculum creation, teaching resources, and assessment tools.
				</p>
				</div>

				<div className="bg-white rounded-2xl p-8 shadow-[0_0_50px_0_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_0_rgba(0,0,0,0.15)] transition-all duration-300 md:col-span-2 lg:col-span-1">
				<span className="material-symbols-outlined text-4xl text-green-600">
					hub
				</span>
				<h3 className="text-xl font-semibold mt-6 mb-3">
					Platform Features
				</h3>
				<p className="opacity-70">
					Enables course creators, educators, and students to collaborate and share content through various course categories.
				</p>
				</div>
			</div>

			<div className="bg-[#fafafa] rounded-2xl p-8">
				<div className="grid md:grid-cols-2 gap-8">
				<div className="space-y-6">
					<h2 className="text-2xl font-bold">For Educators</h2>
					<ul className="space-y-4">
					<li className="flex items-center gap-3">
						<span className="material-symbols-outlined text-blue-600">
						check_circle
						</span>
						<span className="opacity-80">
						Easy content upload and customization
						</span>
					</li>
					<li className="flex items-center gap-3">
						<span className="material-symbols-outlined text-blue-600">
						check_circle
						</span>
						<span className="opacity-80">
						Automated rubric-based grading
						</span>
					</li>
					<li className="flex items-center gap-3">
						<span className="material-symbols-outlined text-blue-600">
						check_circle
						</span>
						<span className="opacity-80">
						Revenue-sharing model for creators
						</span>
					</li>
					</ul>
				</div>

				<div className="space-y-6">
					<h2 className="text-2xl font-bold">For Students</h2>
					<ul className="space-y-4">
					<li className="flex items-center gap-3">
						<span className="material-symbols-outlined text-green-600">
						check_circle
						</span>
						<span className="opacity-80">
						Comprehensive learning resources
						</span>
					</li>
					<li className="flex items-center gap-3">
						<span className="material-symbols-outlined text-green-600">
						check_circle
						</span>
						<span className="opacity-80">
						Built-in tutoring support
						</span>
					</li>
					<li className="flex items-center gap-3">
						<span className="material-symbols-outlined text-green-600">
						check_circle
						</span>
						<span className="opacity-80">
						Collaborative learning opportunities
						</span>
					</li>
					</ul>
				</div>
				</div>
			</div>
			</section>
		</div>
		</div>
	</div>
  );
};

