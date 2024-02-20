"use client";

import React, { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import BasicTabs from "@/components/TabMenu";

function Subject() {
  const [data, setData] = useState([]);

  const getData = async () => {
    await fetch("http://localhost:5000/fenn")
      .then((x) => x.json())
      .then((x) => setData(x));
  };

  useEffect(() => {
    getData();
  }, [data]);

  const columns = useMemo(
    () => [
      {
        name: "No",
        selector: (row: any) => row.id,
      },
      {
        name: "Tarix",
        selector: (row: any) => row.tarix,
      },
      {
        name: "Saat",
        selector: (row: any) => row.saat,
      },
      {
        name: "Movzu",
        selector: (row: any) => row.movzu,
      },
      {
        name: "Action",
        cell: (d: any) => [
          <button
            key={d.title}
            className="bg-transparent transition hover:bg-red-400 text-gray-700 font-semibold hover:text-black py-1 px-2 border border-red-500 hover:border-transparent rounded"
          >
            Sil
          </button>,
        ],
      },
    ],
    []
  );
  return (
    <div className="mt-10">
      <BasicTabs/>
      {/* <DataTable columns={columns} data={data} pagination={true}></DataTable> */}
    </div>
  );
}

export default Subject;
