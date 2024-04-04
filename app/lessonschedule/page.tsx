'use client'

import TableComponent from '@/components/TableComponent'
import React, { useEffect, useState } from 'react'

function LessonSchedule() {

  const [lessonData, setLessonData] = useState<any>([])

  const getLessonData = async () => {
    
    await fetch('http://localhost:5000/fenn')
      .then(x=>x.json())
      .then(x=>setLessonData(x))
    }

  useEffect(() => {
    getLessonData()
  },[])

  return (
    <div className="mt-20 p-5">
      <TableComponent lessons={lessonData}/>
    </div>
  )
}

export default LessonSchedule