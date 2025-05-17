"use client";

import React, { useState, useEffect } from "react";
import { MagicCard } from "../magicui/magic-card"; // Assuming this path is correct for LandingPage
import { ShimmerButton } from "../magicui/shimmer-button"; // Assuming this path is correct for LandingPage
import Section from "../ui/section"; // Assuming this path is correct for LandingPage
import {
  LayoutDashboard,
  BookCopy,
  ChevronLeft,
  ChevronRight,
  Search,
  Users,
  Star,
  Zap,
  Award,
  FileText,
  Video,
  HelpCircle,
  BookOpen,
  GraduationCap,
  Lightbulb,
  ListChecks,
  BarChart3
} from "lucide-react";

// --- Data Interfaces (inspired by coursebite-app) ---
interface DemoCourse {
  id: string;
  name: string;
  code?: string;
  instructor?: string;
  description: string;
  progress?: number; // 0-100
  themeColor: string; // e.g., 'blue', 'emerald', 'indigo'
  icon?: React.ElementType;
  modules: DemoModule[];
  rating?: number;
  enrolled?: number;
  school?: string;
}

interface DemoModule {
  id: string;
  title: string;
  description?: string;
  estimatedTime?: string;
  items: DemoModuleItem[];
  progress?: number; // 0-100
}

type DemoModuleItemType = "lesson" | "quiz" | "assignment" | "video" | "reading";

interface DemoModuleItem {
  id: string;
  type: DemoModuleItemType;
  title: string;
  status?: "COMPLETED" | "IN_PROGRESS" | "NOT_STARTED";
  icon: React.ElementType;
}

// --- Sample Data (more aligned with coursebite-app structure) ---
const sampleCoursesData: DemoCourse[] = [
  {
    id: "cs101",
    name: "Web Development Bootcamp",
    code: "WD404",
    instructor: "Dr. Ada Lovelace",
    school: "Tech Institute Online",
    description: "Master front-end and back-end technologies to build modern web applications.",
    progress: 35,
    themeColor: "blue",
    icon: LayoutDashboard,
    rating: 4.7,
    enrolled: 1850,
    modules: [
      {
        id: "m1",
        title: "Module 1: HTML & CSS Fundamentals",
        description: "Lay the groundwork with the building blocks of the web.",
        estimatedTime: "8 hours",
        progress: 60,
        items: [
          { id: "item1a", type: "video", title: "Introduction to HTML", status: "COMPLETED", icon: Video },
          { id: "item1b", type: "reading", title: "CSS Selectors Guide", status: "IN_PROGRESS", icon: FileText },
          { id: "item1c", type: "assignment", title: "Build a Simple Portfolio Page", status: "NOT_STARTED", icon: GraduationCap },
        ],
      },
      {
        id: "m2",
        title: "Module 2: JavaScript Essentials",
        description: "Bring interactivity to your web pages.",
        estimatedTime: "12 hours",
        progress: 20,
        items: [
          { id: "item2a", type: "video", title: "Variables and Data Types", status: "IN_PROGRESS", icon: Video },
          { id: "item2b", type: "quiz", title: "JavaScript Basics Quiz", status: "NOT_STARTED", icon: HelpCircle },
        ],
      },
      {
        id: "m3",
        title: "Module 3: React & Modern Frameworks",
        description: "Explore component-based architecture with React.",
        estimatedTime: "15 hours",
        progress: 0,
        items: [
          { id: "item3a", type: "lesson", title: "Understanding JSX", status: "NOT_STARTED", icon: Lightbulb },
          { id: "item3b", type: "assignment", title: "Create a To-Do App", status: "NOT_STARTED", icon: GraduationCap },
        ],
      },
    ],
  },
  {
    id: "dm202",
    name: "Digital Marketing Masterclass",
    code: "DM707",
    instructor: "Prof. Philip Kotler",
    school: "Marketing Academy Pro",
    description: "Unlock strategies for SEO, content marketing, social media, and analytics.",
    progress: 75,
    themeColor: "emerald",
    icon: BarChart3,
    rating: 4.9,
    enrolled: 2300,
    modules: [
      {
        id: "m1",
        title: "Module 1: SEO and Content Strategy",
        estimatedTime: "10 hours",
        progress: 90,
        items: [
          { id: "item1a", type: "lesson", title: "Keyword Research Deep Dive", status: "COMPLETED", icon: Lightbulb },
          { id: "item1b", type: "assignment", title: "Competitor SEO Analysis", status: "COMPLETED", icon: GraduationCap },
        ],
      },
      {
        id: "m2",
        title: "Module 2: Social Media Marketing",
        estimatedTime: "9 hours",
        progress: 50,
        items: [
          { id: "item2a", type: "video", title: "Crafting Engaging Campaigns", status: "IN_PROGRESS", icon: Video },
          { id: "item2b", type: "reading", title: "Platform Best Practices", status: "NOT_STARTED", icon: FileText },
        ],
      },
    ],
  },
  {
    id: "cs3345",
    name: "Data Structures & Algorithms",
    code: "CS3345",
    instructor: "Dr. Robert Sedgewick",
    school: "Computer Science Department",
    description: "Master fundamental data structures and algorithms in Java with practical applications and problem-solving techniques.",
    progress: 45,
    themeColor: "indigo",
    icon: BookOpen,
    rating: 4.8,
    enrolled: 1340,
    modules: [
      {
        id: "m1",
        title: "Module 1: Fundamental Data Structures",
        description: "Learn about arrays, linked lists, stacks, and queues.",
        estimatedTime: "12 hours",
        progress: 80,
        items: [
          { id: "item1a", type: "video", title: "Arrays and Their Applications", status: "COMPLETED", icon: Video },
          { id: "item1b", type: "reading", title: "Linked Lists Implementation", status: "COMPLETED", icon: FileText },
          { id: "item1c", type: "quiz", title: "Stack and Queue Operations", status: "IN_PROGRESS", icon: HelpCircle },
          { id: "item1d", type: "assignment", title: "Implement a Circular Queue", status: "NOT_STARTED", icon: GraduationCap },
        ],
      },
      {
        id: "m2",
        title: "Module 2: Trees and Graphs",
        description: "Explore hierarchical and network-based data structures.",
        estimatedTime: "14 hours",
        progress: 40,
        items: [
          { id: "item2a", type: "video", title: "Binary Trees and BST", status: "COMPLETED", icon: Video },
          { id: "item2b", type: "reading", title: "Balanced Tree Structures", status: "IN_PROGRESS", icon: FileText },
          { id: "item2c", type: "assignment", title: "Graph Traversal Algorithms", status: "NOT_STARTED", icon: GraduationCap },
        ],
      },
      {
        id: "m3",
        title: "Module 3: Algorithms Analysis",
        description: "Techniques to analyze and improve algorithm efficiency.",
        estimatedTime: "16 hours",
        progress: 0,
        items: [
          { id: "item3a", type: "lesson", title: "Big O Notation and Time Complexity", status: "NOT_STARTED", icon: Lightbulb },
          { id: "item3b", type: "video", title: "Sorting Algorithms Comparison", status: "NOT_STARTED", icon: Video },
          { id: "item3c", type: "assignment", title: "Optimize a Search Algorithm", status: "NOT_STARTED", icon: GraduationCap },
        ],
      },
    ],
  },
  {
    id: "cs2305",
    name: "Discrete Math for Computing",
    code: "CS/CE2305",
    instructor: "Dr. Maria Rodriguez",
    school: "Mathematics & Computer Science",
    description: "Explore mathematical foundations critical for computer science including logic, set theory, combinatorics, and graph theory.",
    progress: 65,
    themeColor: "blue",
    icon: ListChecks,
    rating: 4.6,
    enrolled: 980,
    modules: [
      {
        id: "m1",
        title: "Module 1: Propositional Logic",
        description: "Learn the foundations of logical reasoning and proofs.",
        estimatedTime: "10 hours",
        progress: 100,
        items: [
          { id: "item1a", type: "video", title: "Logical Operators and Truth Tables", status: "COMPLETED", icon: Video },
          { id: "item1b", type: "assignment", title: "Construct Valid Arguments", status: "COMPLETED", icon: GraduationCap },
          { id: "item1c", type: "quiz", title: "Logical Equivalences", status: "COMPLETED", icon: HelpCircle },
        ],
      },
      {
        id: "m2",
        title: "Module 2: Set Theory and Functions",
        description: "Understand mathematical collections and mappings.",
        estimatedTime: "8 hours",
        progress: 75,
        items: [
          { id: "item2a", type: "video", title: "Set Operations and Venn Diagrams", status: "COMPLETED", icon: Video },
          { id: "item2b", type: "reading", title: "Functions and Relations", status: "COMPLETED", icon: FileText },
          { id: "item2c", type: "assignment", title: "Prove Set Properties", status: "IN_PROGRESS", icon: GraduationCap },
        ],
      },
      {
        id: "m3",
        title: "Module 3: Combinatorics",
        description: "Master counting principles for algorithmic analysis.",
        estimatedTime: "9 hours",
        progress: 20,
        items: [
          { id: "item3a", type: "lesson", title: "Permutations and Combinations", status: "IN_PROGRESS", icon: Lightbulb },
          { id: "item3b", type: "quiz", title: "Binomial Coefficients", status: "NOT_STARTED", icon: HelpCircle },
          { id: "item3c", type: "assignment", title: "Solve Counting Problems", status: "NOT_STARTED", icon: GraduationCap },
        ],
      },
      {
        id: "m4",
        title: "Module 4: Graph Theory",
        description: "Explore mathematical structures for modeling relationships.",
        estimatedTime: "11 hours",
        progress: 0,
        items: [
          { id: "item4a", type: "video", title: "Graph Representations", status: "NOT_STARTED", icon: Video },
          { id: "item4b", type: "reading", title: "Graph Algorithms and Applications", status: "NOT_STARTED", icon: FileText },
          { id: "item4c", type: "assignment", title: "Model Problems with Graphs", status: "NOT_STARTED", icon: GraduationCap },
        ],
      },
    ],
  },
];

// --- Helper to get theme classes ---
const getThemeClasses = (color: string, type: "bg" | "progress" | "text" | "border" | "iconBg") => {
  // Default to purple theme
  const themes: Record<string, Record<string, string>> = {
    blue: {
      bg: "bg-purple-50 dark:bg-purple-900/30",
      progress: "bg-purple-600 dark:bg-purple-500",
      text: "text-purple-700 dark:text-purple-400",
      border: "border-purple-500",
      iconBg: "bg-purple-100 dark:bg-purple-800/50",
    },
    emerald: {
      bg: "bg-purple-50 dark:bg-purple-900/20",
      progress: "bg-purple-600 dark:bg-purple-500",
      text: "text-purple-700 dark:text-purple-400",
      border: "border-purple-500",
      iconBg: "bg-purple-100 dark:bg-purple-800/50",
    },
    indigo: {
      bg: "bg-purple-50 dark:bg-purple-900/30",
      progress: "bg-purple-600 dark:bg-purple-500",
      text: "text-purple-700 dark:text-purple-400",
      border: "border-purple-500", 
      iconBg: "bg-purple-100 dark:bg-purple-800/50",
    },
  };
  return themes[color]?.[type] || "bg-purple-50 dark:bg-purple-700/30"; // Default purple
};

const getItemStatusClasses = (status?: "COMPLETED" | "IN_PROGRESS" | "NOT_STARTED") => {
  switch (status) {
    case "COMPLETED": return "bg-green-100 text-green-700 dark:bg-green-700/30 dark:text-green-300";
    case "IN_PROGRESS": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-700/30 dark:text-yellow-300";
    case "NOT_STARTED": return "bg-gray-100 text-gray-600 dark:bg-gray-600/30 dark:text-gray-400";
    default: return "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400";
  }
};

export default function InteractiveDemo() {
  const [currentView, setCurrentView] = useState<"dashboard" | "course_modules" | "module_content">("dashboard");
  const [selectedCourse, setSelectedCourse] = useState<DemoCourse | null>(null);
  const [selectedModule, setSelectedModule] = useState<DemoModule | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSelectCourse = (course: DemoCourse) => {
    setSelectedCourse(course);
    setCurrentView("course_modules");
  };
  
  const handleSelectModule = (module: DemoModule) => {
    setSelectedModule(module);
    setCurrentView("module_content");
  };
  
  const handleBack = (targetView: "dashboard" | "course_modules") => {
    if (targetView === "dashboard") {
      setSelectedCourse(null);
      setSelectedModule(null);
    }
    if (targetView === "course_modules") {
      setSelectedModule(null);
    }
    setCurrentView(targetView);
    setSearchTerm("");
  };
  
  const Breadcrumbs = () => (
    <nav className="mb-4 text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-2">
      <button onClick={() => handleBack("dashboard")} className="hover:underline">Dashboard</button>
      {selectedCourse && (
        <>
          <ChevronRight size={16} />
          <button 
            onClick={() => currentView === 'module_content' && handleBack("course_modules")}
            className={`${currentView === 'course_modules' || currentView === 'module_content' ? 'font-medium text-gray-700 dark:text-gray-200' : ''} hover:underline`}
            disabled={currentView === 'course_modules'}
          >
            {selectedCourse.name}
          </button>
        </>
      )}
      {selectedModule && currentView === 'module_content' && (
        <>
          <ChevronRight size={16} />
          <span className="font-medium text-gray-700 dark:text-gray-200">{selectedModule.title}</span>
        </>
      )}
    </nav>
  );

  const renderDashboard = () => (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2 sm:mb-0">My Courses</h2>
        <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search courses..."
            className="w-full px-4 py-2 pr-10 rounded-lg border border-purple-200 dark:border-purple-800/50 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
                />
          <Search className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 dark:text-purple-500" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleCoursesData
          .filter(course => course.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((course) => (
                <div 
                  key={course.id}
            onClick={() => handleSelectCourse(course)}
            className={`overflow-hidden cursor-pointer p-0 hover:shadow-xl dark:hover:shadow-2xl dark:shadow-gray-950 transition-all duration-300 transform hover:-translate-y-1 rounded-lg ${getThemeClasses(course.themeColor, "bg")}`}
                >
                  <MagicCard 
              className="h-full"
                  >
              <div className={`w-full h-32 flex items-center justify-center ${getThemeClasses(course.themeColor, "iconBg")}`}>
                {course.icon && React.createElement(course.icon, { className: `w-12 h-12 ${getThemeClasses(course.themeColor, "text")}` })}
                      </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{course.name}</h3>
                {course.code && <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">{course.code}</p>}
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{course.description}</p>
                {course.instructor && <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Instructor: {course.instructor}</p>}
                
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                  {course.rating && (
                    <div className="flex items-center">
                      <Star size={14} className="text-yellow-500 mr-1" /> 
                      <span>{course.rating}</span>
                    </div>
                  )}
                  {course.enrolled && (
                        <div className="flex items-center">
                       <Users size={14} className="mr-1" /> 
                       <span>{course.enrolled} students</span>
                        </div>
                  )}
                      </div>

                {typeof course.progress === 'number' && (
                  <div>
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-1">
                      <div
                        className={`h-2 rounded-full ${getThemeClasses(course.themeColor, "progress")}`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-right text-gray-500 dark:text-gray-400">{course.progress}% Complete</p>
                  </div>
                )}
                    </div>
                  </MagicCard>
                </div>
              ))}
            </div>
      {sampleCoursesData.filter(course => course.name.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && (
        <div className="text-center py-10 text-purple-500 dark:text-purple-400">
          <Search size={48} className="mx-auto mb-4" />
          <p className="text-xl">No courses match your search.</p>
        </div>
      )}
          </div>
        );
      
  const renderCourseModules = () => {
    if (!selectedCourse) return null;

    const filteredModules = selectedCourse.modules.filter(module =>
      module.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="p-4 md:p-6">
        <Breadcrumbs />
        <header className="mb-6 pb-4 border-b border-purple-200 dark:border-purple-700/50">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{selectedCourse.name}</h1>
          <p className="text-gray-600 dark:text-gray-300">{selectedCourse.description}</p>
        </header>

        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Course Modules</h2>
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search modules..."
                className="w-full px-4 py-2 pr-10 rounded-lg border border-purple-200 dark:border-purple-800/50 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 dark:text-purple-500" />
            </div>
        </div>

        <div className="space-y-4">
          {filteredModules.map((module) => (
            <details key={module.id} className="bg-white dark:bg-gray-800/50 shadow-sm rounded-lg overflow-hidden group border border-purple-100 dark:border-purple-800/30" open>
              <summary className="p-4 sm:p-6 cursor-pointer hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-200 flex justify-between items-center list-none">
                <div className="flex items-center gap-3">
                  <BookCopy className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{module.title}</h3>
                    {module.description && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{module.description}</p>}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                    {typeof module.progress === 'number' && (
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <div className="w-24 h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full">
                                <div className="bg-purple-600 dark:bg-purple-500 h-1.5 rounded-full" style={{width: `${module.progress}%`}}></div>
                            </div>
                            <span>{module.progress}%</span>
                        </div>
                    )}
                    <ChevronRight className="w-5 h-5 text-purple-400 dark:text-purple-500 group-open:rotate-90 transition-transform duration-200" />
                </div>
              </summary>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-purple-100 dark:border-purple-800/30">
                <div className="mt-4 space-y-3">
                  {module.items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleSelectModule(module)} // Simplified: selecting module shows generic content
                      className="p-3 bg-purple-50/50 dark:bg-purple-900/10 rounded-md hover:bg-purple-100/50 dark:hover:bg-purple-800/20 cursor-pointer transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        {React.createElement(item.icon, { className: "w-5 h-5 text-purple-600 dark:text-purple-400" })}
                        <span className="text-sm text-gray-700 dark:text-gray-200">{item.title}</span>
              </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getItemStatusClasses(item.status)}`}>
                        {item.status?.replace("_", " ")}
                      </span>
            </div>
                  ))}
                </div>
              </div>
            </details>
          ))}
           {filteredModules.length === 0 && (
            <div className="text-center py-10 text-purple-500 dark:text-purple-400">
                <Search size={48} className="mx-auto mb-4" />
                <p className="text-xl">No modules match your search in this course.</p>
            </div>
           )}
              </div>
            </div>
    );
  };

  const renderModuleContent = () => {
    if (!selectedCourse || !selectedModule) return null;
    return (
      <div className="p-4 md:p-6">
        <Breadcrumbs />
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{selectedModule.title}</h1>
          <p className="text-sm text-purple-600 dark:text-purple-400 uppercase tracking-wide">
            {selectedCourse.name}
          </p>
        </header>
        <MagicCard className="p-6 bg-white dark:bg-gray-800/50 border border-purple-100 dark:border-purple-800/30" gradientFrom="#9333EA" gradientTo="#C026D3">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Welcome to {selectedModule.title}</h2>
          <div className="prose prose-sm sm:prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4 prose-headings:text-purple-700 dark:prose-headings:text-purple-400">
            <p>
              This is where the actual content for the module item would be displayed. 
              It could be a video, an article, an interactive quiz, or an assignment.
            </p>
            <p>
              For this demo, we're showing a placeholder. In the real CourseBite app, you'd find engaging
              learning materials here, helping you master{" "}
              <strong className="text-purple-700 dark:text-purple-400">{selectedModule.title.toLowerCase()}</strong> within the{" "}
              <strong className="text-purple-700 dark:text-purple-400">{selectedCourse.name}</strong> course.
            </p>
            {selectedModule.items.length > 0 && (
                <>
                    <h3 className="text-lg font-medium text-purple-700 dark:text-purple-400 pt-2">Key topics in this module might include:</h3>
                    <ul className="list-disc pl-5 space-y-1 marker:text-purple-500 dark:marker:text-purple-400">
                        {selectedModule.items.slice(0,3).map(item => ( // show first 3 items as example
                            <li key={item.id}>{item.title} ({item.type})</li>
                        ))}
                    </ul>
                </>
            )}
            <div className="pt-4">
              <ShimmerButton 
                className="px-4 py-2"
                 onClick={() => alert("This would typically mark as complete or navigate to the next item.")}
                 shimmerColor="#E9D5FF"
                 background="linear-gradient(135deg, #9333EA 0%, #C026D3 100%)"
              >
                 Continue Learning
              </ShimmerButton>
            </div>
              </div>
        </MagicCard>
          </div>
        );
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "dashboard":
        return renderDashboard();
      case "course_modules":
        return renderCourseModules();
      case "module_content":
        return renderModuleContent();
      default:
        return null;
    }
  };
  
  return (
    <div className="relative py-12 md:py-16">
      <div className="relative z-10 container mx-auto px-4">
        <Section 
          title="Interactive Platform Demo"
          subtitle="Experience CourseBite Firsthand"
          className="[&>h2]:text-purple-600 dark:[&>h2]:text-purple-400 [&>h3]:text-lg"
        >
          <div className="flex flex-col items-center mb-8">
            <p className="text-center max-w-2xl mb-6 text-gray-600 dark:text-gray-300">
              Navigate through our intuitive platform. Select a course, explore its modules, and see how learning flows.
            </p>
          </div>
          
          <div className="w-full max-w-6xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 border border-purple-200 dark:border-purple-800/30">
              <div className="w-full h-10 bg-purple-100 dark:bg-purple-900/30 flex items-center px-4 border-b border-purple-200 dark:border-purple-800/50">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-purple-600 dark:text-purple-400 select-none">
                    app.coursebite.com (Demo)
                  </span>
                </div>
                 <div className="w-12"> {/* Placeholder for window controls width */}</div>
              </div>
              <div className="min-h-[500px]"> {/* Ensure a minimum height for the demo content area */}
                {renderCurrentView()}
              </div>
            </div>
             <p className="text-center text-xs text-purple-500 dark:text-purple-400 mt-4">
                This is a simplified interactive demo. Actual features and content may vary.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
} 