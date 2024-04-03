import axios from "axios";
import { useEffect, useState } from "react";
import TablePagination from "@mui/material/TablePagination";

import Input from "./Input";
import TableComponent from "./TableComponent";
import "../styles/tableWithPaginationComponent.css";

export type Tag = {
  name: string;
  count: number;
};

const TableWithPaginationComponent = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagsNumber, setTagsNumber] = useState<number>(80);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const [sort, setSort] = useState<string>("desc");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isInitialLoading, setIsInitialLoading] = useState<boolean>(true);

  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    setIsInitialLoading(true);
    axios
      .get(
        `https://api.stackexchange.com/tags?order=${sort}&site=stackoverflow&pagesize=${tagsNumber}`
      )
      .then((res) => {
        setTags(res.data.items);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [tagsNumber, page, sort]);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  if (!tags) return null;
  return (
    <div className="pagination-container">
      <Input
        tagsNumber={tagsNumber}
        setTagsNumber={setTagsNumber}
        title="Limit of tags to fetch:"
      />
      <div className="table-div">
        <TableComponent
          tags={tags}
          page={page}
          rowsPerPage={rowsPerPage}
          sort={sort}
          setSort={setSort}
        />
      </div>
      <div className="pagination">
        <TablePagination
          component="div"
          count={tags?.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default TableWithPaginationComponent;
