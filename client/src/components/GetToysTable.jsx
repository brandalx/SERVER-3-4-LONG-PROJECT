import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [filterOn, setFilterOn] = useState(false);
  const [sortField, setSortField] = useState("");
  const [descSort, setDescSort] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const handleFilterToggle = () => {
    setFilterOn(!filterOn);
  };

  const handleFilterApply = async () => {
    const queryParameters = {};

    if (sortField) {
      queryParameters.sort = sortField;
    }

    if (descSort) {
      queryParameters.desc = "yes";
    }

    if (pageNumber) {
      queryParameters.page = pageNumber;
    }

    const queryString = new URLSearchParams(queryParameters).toString();

    try {
      const response = await axios.get(
        `https://toysrestapi.cyclic.app/toys?${queryString}`
      );

      if (response && response.data) {
        setProducts(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div style={{ padding: "100px 0" }} className="container-fluid">
        <div className="container ">
          <div className="row">
            <h2 className="col-12 text-center mb-5">
              Toys route{" "}
              <svg
                className="move-on-hover mb-2"
                width="80px"
                height="50"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="move-on-hover__item1"
                  y="21"
                  width="30"
                  height="9"
                  rx="4"
                  fill="#C77DFF"
                />
                <rect
                  className="move-on-hover__item2"
                  x="6"
                  y="11"
                  width="18"
                  height="8"
                  rx="4"
                  fill="#FDE781"
                />
                <ellipse
                  className="move-on-hover__item3"
                  cx="15"
                  cy="4.5"
                  rx="4"
                  ry="4.5"
                  fill="#FC5C7C"
                />
              </svg>
            </h2>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div className="d-flex">
              <Form.Control
                type="number"
                placeholder="Page number"
                value={pageNumber}
                onChange={(e) => setPageNumber(e.target.value)}
              />
              <Button
                className="btn btn-primary submitbtn"
                variant="primary ml-2"
                onClick={handleFilterApply}
              >
                Filter
              </Button>
            </div>
            <div className="d-flex">
              <Button
                variant="outline-primary mr-2"
                className="btn btn-primary submitbtn2"
                onClick={handleFilterToggle}
              >
                {filterOn ? "Hide Filters" : "Show Filters"}
              </Button>
              {filterOn && (
                <>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={`Sort by ${sortField}`}
                  >
                    <Dropdown.Item onClick={() => setSortField("name")}>
                      Name
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setSortField("category")}>
                      Category
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setSortField("price")}>
                      Price
                    </Dropdown.Item>
                  </DropdownButton>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Descending Sort"
                    checked={descSort}
                    onChange={() => setDescSort(!descSort)}
                  />
                </>
              )}
            </div>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Info</th>
                <th>Category</th>
                <th>Image</th>
                <th>Price</th>
                <th>Date Created</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.name}>
                  <td>{product.name}</td>
                  <td>{product.info}</td>
                  <td>{product.category}</td>
                  <td>
                    <img src={product.img_url} alt={product.name} />
                  </td>
                  <td>{product.price}</td>
                  <td>{product.date_created}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ProductTable;
