"use client";

import React, { useState } from "react";
import { MagicCard } from "../magicui/magic-card";
import { ShimmerButton } from "../magicui/shimmer-button";
import Section from "../ui/section";
import { Sparkles, Upload, Zap, Book, CheckCircle, Star } from "lucide-react";

// Define the course interface
interface Course {
  id: string;
  name: string;
  code: string;
  description: string;
  rating: number;
  enrolled: number;
  instructor: string;
  thumbnail: string;
}

// Sample course data
const sampleCourses: Course[] = [
  {
    id: "course-1",
    name: "Introduction to Computer Science",
    code: "CS101",
    description: "Learn the fundamentals of programming and computer science concepts.",
    rating: 4.8,
    enrolled: 1250,
    instructor: "Dr. Jane Smith",
    thumbnail: "/demo/cs101.jpg"
  },
  {
    id: "course-2",
    name: "Calculus I",
    code: "MATH201",
    description: "Introduction to differential and integral calculus.",
    rating: 4.6,
    enrolled: 987,
    instructor: "Prof. David Johnson",
    thumbnail: "/demo/math201.jpg"
  },
  {
    id: "course-3",
    name: "Introduction to Psychology",
    code: "PSYCH101",
    description: "Explore the human mind and behavior in this introductory course.",
    rating: 4.9,
    enrolled: 1576,
    instructor: "Dr. Sarah Williams",
    thumbnail: "/demo/psych101.jpg"
  }
];

export default function InteractiveDemo() {
  const [demoStep, setDemoStep] = useState<number>(1);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [enrolled, setEnrolled] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  
  // Handle course selection
  const selectCourse = (course: Course) => {
    setSelectedCourse(course);
    setDemoStep(2);
  };
  
  // Handle enrollment
  const enrollInCourse = () => {
    setEnrolled(true);
    setDemoStep(3);
  };
  
  // Update progress
  const updateProgress = (newProgress: number) => {
    setProgress(newProgress);
    if (newProgress >= 100) {
      setDemoStep(4);
    }
  };
  
  // Reset demo
  const resetDemo = () => {
    setSelectedCourse(null);
    setEnrolled(false);
    setProgress(0);
    setDemoStep(1);
  };
  
  // Render different screens based on demo step
  const renderDemoContent = () => {
    switch(demoStep) {
      case 1:
        return (
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Available Courses</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="px-4 py-2 pr-10 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <svg className="w-5 h-5 absolute right-3 top-3 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleCourses.map((course) => (
                <div 
                  key={course.id}
                  onClick={() => selectCourse(course)}
                  className="cursor-pointer"
                >
                  <MagicCard 
                    className="overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                  >
                    <div className="w-full h-32 bg-gray-200 dark:bg-gray-800">
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 dark:from-gray-800/40 dark:to-purple-900/30">
                        <Book className="w-12 h-12 text-purple-600 dark:text-purple-900" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{course.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{course.code}</p>
                      <p className="text-sm mb-3 line-clamp-2 text-gray-700 dark:text-gray-300">{course.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-sm text-gray-900 dark:text-white">{course.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{course.enrolled} enrolled</span>
                      </div>
                    </div>
                  </MagicCard>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 2:
        return selectedCourse ? (
          <div className="p-6">
            <button 
              onClick={() => setDemoStep(1)}
              className="mb-4 flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Courses
            </button>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-2/3">
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-lg mb-4">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 dark:from-gray-800/40 dark:to-purple-900/30 rounded-lg">
                    <Book className="w-24 h-24 text-purple-600 dark:text-purple-900" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{selectedCourse.name}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{selectedCourse.code}</p>
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <span className="mr-3 text-gray-900 dark:text-white">{selectedCourse.rating}</span>
                  <span className="text-gray-500 dark:text-gray-400">{selectedCourse.enrolled} students enrolled</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">About this course</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{selectedCourse.description}</p>
                <p className="mb-4 text-gray-700 dark:text-gray-300">This comprehensive course will take you through all the essential concepts, providing hands-on exercises and real-world applications to deepen your understanding.</p>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Instructor</h3>
                <p className="text-gray-700 dark:text-gray-300">{selectedCourse.instructor}</p>
              </div>
              
              <div className="w-full md:w-1/3">
                <MagicCard className="p-6 sticky top-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Course Overview</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">10 modules with 45 lessons</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Interactive assignments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Downloadable resources</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">24/7 support</span>
                    </li>
                  </ul>
                  <ShimmerButton 
                    className="w-full py-3"
                    onClick={enrollInCourse}
                  >
                    Enroll Now
                  </ShimmerButton>
                </MagicCard>
              </div>
            </div>
          </div>
        ) : null;
      
      case 3:
        return selectedCourse ? (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedCourse.name}</h2>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">Progress: {progress}%</span>
                <div className="w-40 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div 
                className="cursor-pointer"
                onClick={() => updateProgress(25)}
              >
                <MagicCard className="p-5 hover:scale-[1.02] transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Module 1: Introduction</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Start your learning journey with the basics.</p>
                  <button className="text-sm text-purple-600 dark:text-purple-900 font-medium">Start Learning</button>
                </MagicCard>
              </div>
              
              <div 
                className="cursor-pointer"
                onClick={() => updateProgress(50)}
              >
                <MagicCard className="p-5 hover:scale-[1.02] transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Module 2: Core Concepts</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Dive deeper into fundamental principles.</p>
                  <button className="text-sm text-purple-600 dark:text-purple-900 font-medium">Continue Learning</button>
                </MagicCard>
              </div>
              
              <div 
                className="cursor-pointer"
                onClick={() => updateProgress(75)}
              >
                <MagicCard className="p-5 hover:scale-[1.02] transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Module 3: Advanced Topics</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Master complex topics and applications.</p>
                  <button className="text-sm text-purple-600 dark:text-purple-900 font-medium">Explore Advanced Content</button>
                </MagicCard>
              </div>
            </div>
            
            <MagicCard className="p-5 mb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Interactive Assignment</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Apply what you've learned with this hands-on project. Complete to earn your certificate!</p>
              <ShimmerButton 
                className="px-4 py-2"
                onClick={() => updateProgress(100)}
              >
                Complete Assignment
              </ShimmerButton>
            </MagicCard>
          </div>
        ) : null;
      
      case 4:
        return (
          <div className="p-6 flex flex-col items-center justify-center py-12">
            <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-3xl font-bold mb-2 text-center text-gray-900 dark:text-white">Congratulations!</h2>
            <p className="text-lg text-center mb-6 text-gray-700 dark:text-gray-300">You've successfully completed the course.</p>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-gray-800 dark:to-purple-900 p-[2px] rounded-xl mb-8">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-full max-w-lg">
                <h3 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-white">Certificate of Completion</h3>
                <p className="text-center mb-4 text-gray-700 dark:text-gray-300">This is to certify that you have successfully completed</p>
                <p className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">{selectedCourse?.name}</p>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">Issued on {new Date().toLocaleDateString()}</p>
              </div>
            </div>
            <ShimmerButton 
              onClick={resetDemo}
              className="px-6 py-3"
            >
              Explore More Courses
            </ShimmerButton>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="relative py-16">
      <div className="relative z-10">
        <Section 
          title=""
          subtitle="Experience our platform firsthand"
          className="[&>h3]:bg-gradient-to-r [&>h3]:from-purple-600 [&>h3]:to-pink-600 [&>h3]:dark:from-gray-800 [&>h3]:dark:to-purple-900 [&>h3]:bg-clip-text [&>h3]:text-transparent"
        >
          <div className="flex flex-col items-center mb-8">
            <p className="text-center max-w-2xl mb-8 text-gray-700 dark:text-gray-300">
              Try out our interactive demo to see how easy it is to find courses, enroll, and track your learning progress.
            </p>
            
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div className={`flex flex-col items-center ${demoStep >= 1 ? 'text-purple-600 dark:text-purple-900' : 'text-gray-400 dark:text-gray-600'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 border-2 ${demoStep >= 1 ? 'border-purple-600 dark:border-purple-900' : 'border-gray-300 dark:border-gray-700'}`}>
                  <Upload className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Select Course</span>
              </div>
              
              <div className={`flex flex-col items-center ${demoStep >= 2 ? 'text-purple-600 dark:text-purple-900' : 'text-gray-400 dark:text-gray-600'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 border-2 ${demoStep >= 2 ? 'border-purple-600 dark:border-purple-900' : 'border-gray-300 dark:border-gray-700'}`}>
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Enroll & Learn</span>
              </div>
              
              <div className={`flex flex-col items-center ${demoStep >= 4 ? 'text-purple-600 dark:text-purple-900' : 'text-gray-400 dark:text-gray-600'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 border-2 ${demoStep >= 4 ? 'border-purple-600 dark:border-purple-900' : 'border-gray-300 dark:border-gray-700'}`}>
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Get Certified</span>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-5xl mx-auto">
            <div className="w-full rounded-xl overflow-hidden shadow-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <div className="w-full h-10 bg-gray-100 dark:bg-gray-800 flex items-center px-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">demo.coursebite.com</span>
                </div>
              </div>
              {renderDemoContent()}
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
} 