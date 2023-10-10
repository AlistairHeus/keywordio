import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  Typography,
  Tooltip,
  IconButton,
  Box
} from "@mui/material";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

interface Row {
  campaign: string;
  clicks: number;
  cost: number;
  conversions: number;
  revenue: number;
}

interface Column {
  id: keyof Row;
  label: string;
}

const data: Row[] = [
  {
    campaign: "Summer Sale",
    clicks: 2500,
    cost: 1200,
    conversions: 75,
    revenue: 5000
  },
  {
    campaign: "Back to School",
    clicks: 3200,
    cost: 1500,
    conversions: 90,
    revenue: 5500
  },
  {
    campaign: "Holiday Season",
    clicks: 5000,
    cost: 2200,
    conversions: 150,
    revenue: 8000
  },
  {
    campaign: "Spring Promo",
    clicks: 1800,
    cost: 900,
    conversions: 60,
    revenue: 4000
  },
  {
    campaign: "New Year's Sale",
    clicks: 3000,
    cost: 1400,
    conversions: 80,
    revenue: 6000
  },
  {
    campaign: "Black Friday",
    clicks: 6000,
    cost: 3000,
    conversions: 200,
    revenue: 10000
  },
  {
    campaign: "Valentine's Day",
    clicks: 1400,
    cost: 700,
    conversions: 45,
    revenue: 3000
  },
  {
    campaign: "Easter Special",
    clicks: 2800,
    cost: 1300,
    conversions: 70,
    revenue: 5500
  },
  {
    campaign: "Summer Clearance",
    clicks: 2100,
    cost: 1100,
    conversions: 65,
    revenue: 4800
  }
];

const columns: Column[] = [
  { id: "campaign", label: "Campaign" },
  { id: "clicks", label: "Clicks" },
  { id: "cost", label: "Cost" },
  { id: "conversions", label: "Conversions" },
  { id: "revenue", label: "Revenue" }
];

function SortableTable() {
  const [orderBy, setOrderBy] = useState<keyof Row>("clicks");
  const [order, setOrder] = useState<"asc" | "desc">("desc");

  const handleSort = (columnId: keyof Row) => {
    if (orderBy === columnId) {
      setOrder(order === "desc" ? "asc" : "desc");
    } else {
      setOrder("desc");
      setOrderBy(columnId);
    }
  };

  const sortedData = [...data].sort((a, b) => {
    const valueA = a[orderBy] as number;
    const valueB = b[orderBy] as number;

    if (order === "asc") {
      return valueA - valueB;
    } else {
      return valueB - valueA;
    }
  });

  const headerCellStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px", // Adjust padding as needed
    borderBottom: "1px solid rgba(224, 224, 224, 1)"
  };

  return (
    <Paper>
      <Box style={headerCellStyle}>
        <Typography variant="h6">Ad Insights</Typography>
        <Tooltip title="Help">
          <IconButton aria-label="help">
            <HelpOutlineIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={() => handleSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={column.id}>{row[column.id]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default SortableTable;
