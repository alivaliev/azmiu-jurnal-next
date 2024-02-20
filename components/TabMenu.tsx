

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DataTable from "react-data-table-component";
import { useEffect, useMemo, useState } from 'react';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div style={{ padding: '16px' }}>
        <span>{children}</span>
      </div>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);

  const getData = async () => {
    await fetch("http://localhost:5000/fenn")
      .then((x) => x.json())
      .then((x) => setData(x));
  };

  useEffect(() => {
    getData();
  }, []);

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
            key={d.id}
            className="bg-transparent transition hover:bg-red-400 text-gray-700 font-semibold hover:text-black py-1 px-2 border border-red-500 hover:border-transparent rounded"
          >
            Sil
          </button>,
        ],
      },
    ],
    []
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      <DataTable keyField='id' columns={columns} data={data} pagination={true}></DataTable>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}

// import React from 'react'

// function TabMenu() {
//   return (
//     <div>TabMenu</div>
//   )
// }

// export default TabMenu