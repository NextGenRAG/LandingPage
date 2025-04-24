"use client";

import { useEffect, useState } from 'react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Search } from 'lucide-react';

interface Course {
  course_name: string;
  course_code: string;
  description: string;
  prof: string;
  school: string;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/api/courses/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        similarity_threshold: 0.3,
        max_results: 100
      })
    })
    .then(res => res.json())
    .then(data => {
      setCourses(data);
      setFilteredCourses(data);
      setIsLoading(false);
    })
    .catch(() => {
      setIsLoading(false);
    });
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const lowercaseQuery = query.toLowerCase();
    const filtered = courses.filter(course => 
      course.course_name.toLowerCase().includes(lowercaseQuery) ||
      course.course_code.toLowerCase().includes(lowercaseQuery) ||
      course.prof.toLowerCase().includes(lowercaseQuery) ||
      course.school.toLowerCase().includes(lowercaseQuery)
    );
    setFilteredCourses(filtered);
  };

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Courses Offered
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-12">
              Explore our comprehensive selection of courses designed to help you succeed in your academic journey.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search courses by name, code, professor, or school..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-12 text-lg text-muted-foreground">
              Loading courses...
            </div>
          ) : filteredCourses.length === 0 ? (
            <div className="text-center py-12 text-lg text-muted-foreground">
              No courses found matching your search.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <div 
                  key={index}
                  className="border rounded-xl p-6 bg-card"
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        {course.course_code}
                      </h3>
                      <p className="text-lg">
                        {course.course_name}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        {course.school}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Professor: {course.prof}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {course.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}