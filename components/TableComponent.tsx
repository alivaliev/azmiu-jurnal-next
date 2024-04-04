import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Carousel from "./Carousel";

export interface Table {
  id: number;
  saa: string;
  qayiblimit: string;
  tarix: string;
}

interface LessonScheduleProps {
  lessons: Table[];
}

const TableComponent: React.FC<LessonScheduleProps> = ({ lessons }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = lessons.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (event: React.ChangeEvent<unknown>, pageNumber: number) =>
    setCurrentPage(pageNumber);

  const allDates = lessons.reduce((acc: string[], lesson) => {
    if (lesson.tarix) {
      return acc.concat(lesson.tarix.split(","));
    }
    return acc;
  }, []);

  return (
    <div className="mt-20 p-5">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>S A A</th>
            <th className="flex">
              <Carousel dates={allDates.join(",")} slidesPerView={3}/>
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((lesson, index) => (
            <tr key={lesson.id}>
              <td>{index + 1 + indexOfFirstItem}</td>
              <td>{lesson.saa}</td>
              {lessons.map((row: any) => (
                <td key={row.id}>{lesson.qayiblimit}</td>
              ))}
              <td>
                <button>salam</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        count={Math.ceil(lessons.length / itemsPerPage)}
        page={currentPage}
        onChange={paginate}
        variant="outlined"
        color="primary"
      />
    </div>
  );
};
export default TableComponent;
