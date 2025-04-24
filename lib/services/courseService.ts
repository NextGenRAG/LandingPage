interface CourseSearchParams {
  course_name?: string;
  course_code?: string;
  school?: string;
  prof?: string;
  semester?: string;
  description?: string;
  similarity_threshold?: number;
  max_results?: number;
}

interface Course {
  course_name: string;
  course_code: string;
  // Add other fields as needed when we expand functionality
}

export async function searchCourses(params: CourseSearchParams = {}): Promise<Course[]> {
  const API_URL = '/api';
  const endpoint = `${API_URL}/courses/search`;
  console.log('Making API request to:', endpoint);
  
  try {
    const requestBody = {
      ...params,
      similarity_threshold: params.similarity_threshold || 0.3,
      max_results: params.max_results || 100
    };
    console.log('Request body:', requestBody);

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      let errorMessage;
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.error || errorText;
      } catch {
        errorMessage = errorText;
      }
      throw new Error(`Failed to fetch courses: ${errorMessage}`);
    }

    const data = await response.json();
    console.log('API Response data:', data);
    if (!Array.isArray(data)) {
      console.error('Received non-array data:', data);
      return [];
    }
    return data;
  } catch (error) {
    console.error('Error in searchCourses:', error);
    throw error;
  }
} 