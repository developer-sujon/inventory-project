// External Lib Import
import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { GrDocumentCsv } from "react-icons/gr";
import { SiMicrosoftexcel } from "react-icons/si";

// Internal  Lib Import
import PageTitle from "../../components/Ui/PageTitle";
import { useSelector } from "react-redux";
import CustomerRequest from "../../APIRequest/CustomerRequest";
import AleartMessage from "../../helpers/AleartMessage";
import ExportDataJSON from "../../utils/ExportFromJSON";
import DateFormatter from "../../utils/DateFormatter";

const CustomerListPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [searchKey, setSearchKey] = useState(0);

  useEffect(() => {
    CustomerRequest.CustomerList(pageNumber, perPage, searchKey);
  }, [pageNumber, perPage, searchKey]);

  const { CustomerLists, TotalCustomer } = useSelector(
    (state) => state.Customer,
  );

  const PerPageOnChange = (e) => {
    if (e.target.value === "All") {
      setPerPage(TotalCustomer);
    } else {
      setPerPage(e.target.value);
    }
  };

  const SearchKeywordOnChange = (e) => {
    const key = e.target.value || 0;
    setSearchKey(key);
  };

  const HandlePageClick = (e) => {
    setPageNumber(e.selected + 1);
  };

  const GoToPage = (e) => {
    setPageNumber(e.target.value);
  };

  const DeleteCustomer = (id) => {
    console.log(id);
    AleartMessage.Delete(id, CustomerRequest.CustomerDelete).then((result) => {
      if (result) {
        CustomerRequest.CustomerList(pageNumber, perPage, searchKey);
      }
    });
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Customer", path: "/customer/customer-list" },
          {
            label: "Create List",
            path: "/customer/customer-list",
            active: true,
          },
        ]}
        title={"Customer List"}
      />
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Row className="mb-2">
                <Col sm={5}>
                  <Link
                    to="/customer/customer-create-update"
                    className="btn btn-danger mb-2"
                  >
                    <i className="mdi mdi-plus-circle me-2"></i> Add Customer
                  </Link>
                </Col>

                <Col sm={7}>
                  <div className="text-sm-end">
                    <Button variant="success" className="mb-2 me-1">
                      <i className="mdi mdi-cog-outline"></i>
                    </Button>

                    <Button variant="light" className="mb-2 me-1">
                      Import
                    </Button>

                    <Button
                      variant="light"
                      className="mb-2 me-1"
                      onClick={() =>
                        ExportDataJSON(CustomerLists, "Customer", "xls")
                      }
                    >
                      <SiMicrosoftexcel /> Export
                    </Button>

                    <Button
                      variant="light"
                      className="mb-2"
                      onClick={() =>
                        ExportDataJSON(CustomerLists, "Customer", "csv")
                      }
                    >
                      <GrDocumentCsv /> Export
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="mb-2">
                    <span className="d-flex align-items-center">
                      Search :{" "}
                      <input
                        placeholder={TotalCustomer + " records..."}
                        className="form-control w-auto ms-1"
                        defaultValue=""
                        onChange={SearchKeywordOnChange}
                      />
                    </span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table className="table-centered react-table">
                    <thead
                      className="table-light"
                      style={{ backgroundColor: "#eef2f7" }}
                    >
                      <tr>
                        <th>Customer</th>
                        <th>Customer Mobile</th>
                        <th>Customer Address</th>
                        <th>Created On</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CustomerLists?.map((record, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src={record.CustomerAvatar}
                                    className="avatar avatar-sm me-3"
                                    alt="user1"
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">
                                    {record.CustomerName}
                                  </h6>
                                  <p className="text-xs text-secondary mb-0">
                                    <td>{record.CustomerEmail}</td>
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td>{record.CustomerPhone}</td>
                            <td>{record.CustomerAddress}</td>
                            <td>{DateFormatter(record.createdAt)}</td>
                            <td>
                              <Link
                                to={`/customer/customer-create-update?id=${record._id}`}
                                className="action-icon text-warning"
                              >
                                <i className="mdi mdi-square-edit-outline"></i>
                              </Link>
                              <Link
                                className="action-icon text-danger"
                                onClick={() => DeleteCustomer(record._id)}
                              >
                                <i className="mdi mdi-delete"></i>
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-lg-flex align-items-center text-center pb-1">
                    <div className="d-inline-block me-3">
                      <label className="me-1">Display :</label>
                      <select
                        className="form-select d-inline-block w-auto"
                        onChange={PerPageOnChange}
                      >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value="All">All</option>
                      </select>
                    </div>
                    <span className="me-3">
                      Page
                      <strong>
                        {pageNumber} of {Math.ceil(TotalCustomer / perPage)}
                      </strong>
                    </span>
                    <span className="d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2">
                      <label>Go to page : </label>
                      <input
                        type="number"
                        min={1}
                        className="form-control w-25 ms-1 d-inline-block"
                        defaultValue={1}
                        onChange={GoToPage}
                      />
                    </span>
                    <ReactPaginate
                      previousLabel="<"
                      nextLabel=">"
                      pageClassName="page-item d-none d-xl-inline-block"
                      pageLinkClassName="page-link"
                      previousClassName="page-item"
                      previousLinkClassName="page-link"
                      nextClassName="page-item"
                      nextLinkClassName="page-link"
                      breakLabel="..."
                      breakClassName="page-item"
                      breakLinkClassName="page-link"
                      pageCount={TotalCustomer / perPage}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      containerClassName="pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0"
                      activeClassName="active"
                      onPageChange={HandlePageClick}
                      initialPage={pageNumber - 1}
                      forcePage={pageNumber - 1}
                    />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CustomerListPage;
