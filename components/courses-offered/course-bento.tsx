"use client";
import React, { useState, useEffect } from "react";
import { MagicCard } from "../magicui/magic-card";
import { ShimmerButton } from "../magicui/shimmer-button";
import { searchCourses } from "../../lib/services/courseService";

interface Course {
  course_name: string;
  course_code: string;
}

export function CourseBento() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        console.log('Starting to fetch courses...');
        setLoading(true);
        setError("");
        
        const coursesData = await searchCourses();
        console.log('Received courses data:', coursesData);
        
        if (Array.isArray(coursesData)) {
          setCourses(coursesData);
        } else {
          console.error('Received non-array data:', coursesData);
          setError("Received invalid data format from server");
        }
      } catch (err) {
        console.error('Error in fetchCourses:', err);
        setError(err instanceof Error ? err.message : "Failed to load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
  return (
      <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-center mb-4">Loading courses...</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-500 mb-2">Error: {error}</p>
          <p className="text-sm text-muted-foreground mb-4">
            Please check the console for more details.
          </p>
          <ShimmerButton 
            className="mt-4 px-4 py-2"
            onClick={() => window.location.reload()}
          >
            Try Again
          </ShimmerButton>
        </div>
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">No courses found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <MagicCard key={course.course_code} className="overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.course_name}</h3>
                <p className="text-sm text-muted-foreground">{course.course_code}</p>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </div>
  );
}   