import React from 'react'
import { useParams } from 'react-router-dom';

const AnyCourse = () => {
    const params = useParams()
  return (
    <div>
      <h1 className=" capitalize text-3xl underline font-bold absolute top-1/2 left-1/2 -translate-1/2">
        {params.CourseId} Course Page
      </h1>
    </div>
  );
}

export default AnyCourse