import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import DataTable from "react-data-table-component";
import { useEffect, useMemo, useState } from "react";
import SelectOption from "./SelectOption";
import Pagination from "@mui/material/Pagination";

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
        <div style={{ marginTop: "15px" }}>
          <span>{children}</span>
        </div>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [fennData, setFennData] = useState([]);
  const [fennListData, setFennListData] = useState<any>({
    qrupno: [],
    name: [],
    lab: [],
  });
  const [selectedQrupno, setSelectedQrupno] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [selectedLab, setSelectedLab] = useState("");

  const handleQrupnoChange = (selectedValue: string) => {
    setSelectedQrupno(selectedValue);
  };

  const handleNameChange = (selectedValue: string) => {
    setSelectedName(selectedValue);
  };

  const handleLabChange = (selectedValue: string) => {
    setSelectedLab(selectedValue);
  };

  const filteredData = useMemo(() => {
    let filtered = [...fennData];
    if (selectedQrupno) {
      filtered = filtered.filter((item: any) => item.qrupno === selectedQrupno);
    }
    if (selectedName) {
      filtered = filtered.filter((item: any) => item.name === selectedName);
    }
    if (selectedLab) {
      filtered = filtered.filter((item: any) => item.lab === selectedLab);
    }
    return filtered;
  }, [fennData, selectedQrupno, selectedName, selectedLab]);

  const getFennData = async () => {
    await fetch("http://localhost:5000/fenn")
      .then((x) => x.json())
      .then((x) => setFennData(x));
  };

  const getFennListData = async () => {
    await fetch("http://localhost:5000/fennlist")
      .then((x) => x.json())
      .then((x) => setFennListData(x));
  };

  useEffect(() => {
    getFennData();
    getFennListData();
  }, []);

  const columns = useMemo(
    () => [
      {
        name: "No",
        selector: (row: any) => row.id,
        width: "70px",
      },
      {
        name: "Tarix",
        selector: (row: any) => row.tarix,
        width: "150px",
      },
      {
        name: "Saat",
        selector: (row: any) => row.saat,
        width: "150px",
      },
      {
        name: "Movzu",
        selector: (row: any) => row.movzu,
      },
      {
        name: "Action",
        cell: (d: any) => [
          <button
          key={`${d.id}-add`}
            className=" bg-transparent transition hover:bg-green-400 text-gray-700 font-semibold hover:text-white px-[10px] py-[7px] text-[11px] border border-green-500 hover:border-transparent rounded"
          >
            +
          </button>,
          <button
          key={`${d.id}-delete`}
            className="ml-3 bg-transparent transition hover:bg-red-400 text-gray-700 font-semibold hover:text-white p-[7px] text-[11px] border border-red-500 hover:border-transparent rounded"
          >
            Sil
          </button>,
        ],
        width: "150px",
      },
    ],
    []
  );

  const tableHeaderstyle = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "15px",
        background: "LightSteelBlue",
      },
    },
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="mt-14">
      <div className="w-[100%] flex justify-between">
        <div className="w-[33%]">
          <SelectOption
            options={
              Array.isArray(fennListData)
                ? fennListData.map((x: any) => ({
                    value: x.qrupno,
                    label: x.qrupno,
                  }))
                : []
            }
            value={fennListData.qrupno}
            onChange={handleQrupnoChange}
            placeholder="QrupNo..."
          />
        </div>
        <div className="w-[33%]">
          <SelectOption
            options={
              Array.isArray(fennListData)
                ? fennListData.map((x: any) => ({
                    value: x.name,
                    label: x.name,
                  }))
                : []
            }
            value={fennListData.name}
            onChange={handleNameChange}
            placeholder="Name..."
          />
        </div>
        <div className="w-[33%]">
          <SelectOption
            options={
              Array.isArray(fennListData)
                ? fennListData.map((x: any) => ({
                    value: x.lab,
                    label: x.lab,
                  }))
                : []
            }
            value={fennListData.lab}
            onChange={handleLabChange}
            placeholder="Lab..."
          />
        </div>
      </div>
      <Box sx={{ width: "100%", marginTop: "30px" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="jurnal" {...a11yProps(4)} />
            <Tab label="sillabus" {...a11yProps(0)} />
            <Tab
              label="Semestr ərzində tələbələrin mənimsəmə göstəriciləri barədə  aylıq MƏLUMAT"
              {...a11yProps(1)}
            />
            <Tab label="Elektron jurnala tam baxmaq" {...a11yProps(2)} />
            <Tab label="Elektron materiallar" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {/* <div className="w-[100%] m-auto  flex justify-between">
            <div className="w-[33%]">
              <SelectOption
                options={
                  Array.isArray(fennListData)
                    ? fennListData.map((x: any) => ({
                        value: x.qrupno,
                        label: x.qrupno,
                      }))
                    : []
                }
                value={fennListData.qrupno}
                onChange={handleQrupnoChange}
                placeholder="QrupNo..."
              />
            </div>
            <div className="w-[33%]">
              <SelectOption
                options={
                  Array.isArray(fennListData)
                    ? fennListData.map((x: any) => ({
                        value: x.name,
                        label: x.name,
                      }))
                    : []
                }
                value={fennListData.name}
                onChange={handleNameChange}
                placeholder="Name..."
              />
            </div>
            <div className="w-[33%]">
              <SelectOption
                options={
                  Array.isArray(fennListData)
                    ? fennListData.map((x: any) => ({
                        value: x.lab,
                        label: x.lab,
                      }))
                    : []
                }
                value={fennListData.lab}
                onChange={handleLabChange}
                placeholder="Lab..."
              />
            </div>
          </div> */}
          <div className="mt-5">
            <DataTable
              keyField="id"
              columns={columns}
              data={filteredData}
              pagination={true}
              paginationPerPage={8}
              paginationRowsPerPageOptions={[8, 12, 16, 20]}
              customStyles={tableHeaderstyle}
              selectableRowsHighlight
              highlightOnHover
              striped
              pointerOnHover
              // paginationResetDefaultPage={true}
              // paginationTotalRows={14}
            ></DataTable>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          Item Three
        </CustomTabPanel>
      </Box>
    </div>
  );
}

// import React from 'react'

// function TabMenu() {
//   return (
//     <div>TabMenu</div>
//   )
// }

// export default TabMenu
