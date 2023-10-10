import React from "react";
import SortableTable from "../components/SortableTable";
import { Container } from "@mui/material";

interface Props {
  // Define your component's props here
}

const Dashboard: React.FC<Props> = (props) => {
  return (
    <div
      style={{
        marginTop: "5rem",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div style={{ padding: "2rem", flex: 1 }}>
        <SortableTable />
      </div>
      <div style={{ padding: "2rem", flex: 1 }}>
        <SortableTable />
      </div>
    </div>
  );
};

export default Dashboard;
