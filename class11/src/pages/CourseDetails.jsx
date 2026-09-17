import React from 'react'
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const params = useParams()
  return (
    <div>
      <h1 className=" capitalize text-3xl underline font-bold absolute top-1/2 left-1/2 -translate-1/2">
        {params.CourseId} Course Details Page
      </h1>
    </div>
  );
}

export default CourseDetails