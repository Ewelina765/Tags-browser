import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { Tag } from "./TableWithPaginationComponent";
import "../styles/tableComponent.css";

type TableComponentProps = {
  tags: Tag[];
  page: number;
  rowsPerPage: number;
  sort: string;
  setSort: (value: "asc" | "desc") => void;
};

const TableComponent: React.FC<TableComponentProps> = ({
  tags,
  page,
  rowsPerPage,
  sort,
  setSort,
}) => {
  const handleSort = () => {
    setSort(sort === "asc" ? "desc" : "asc");
  };

  if (!tags) return null;
  return (
    <div className="table-container">
      <TableContainer
        className="table"
        sx={{ borderRadius: "8px", overflow: "hidden" }}
      >
        <Table aria-label="simple table">
          <TableHead className="table-head">
            <TableRow className="table-head-row">
              <TableCell align="center" className="table-cell">
                <p>No</p>
              </TableCell>
              <TableCell align="center" className="table-cell">
                <p>Tag</p>
              </TableCell>
              <TableCell align="center" className="table-cell">
                <div className="count-cell">
                  <p>Count</p>
                  <div onClick={handleSort} className="sort-icon">
                    {sort === "desc" ? (
                      <ArrowDropDownIcon />
                    ) : (
                      <ArrowDropUpIcon />
                    )}
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tags
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((tag: Tag, index: number) => (
                <TableRow key={tag.name} className="table-row">
                  <TableCell scope="row" align="center">
                    {page * rowsPerPage + index + 1}
                  </TableCell>
                  <TableCell scope="row" align="center">
                    {tag?.name}
                  </TableCell>
                  <TableCell align="center">{tag?.count}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;
