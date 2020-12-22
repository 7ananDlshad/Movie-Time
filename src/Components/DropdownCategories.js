import React, { useState, useEffect } from "react";
import { constructUrl } from "./Api";
import { Dropdown } from "react-bootstrap";

export default function DropdownCategories(props) {
  const SEARCH_URL_CATEGORIES = constructUrl("genre/movie/list", "");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(SEARCH_URL_CATEGORIES)
      .then((res) => res.json())
      .then((data) => {
        if (data.genres !== undefined)
          setCategories([{ id: 0, name: "All" }, ...data.genres]);
      })
      .catch((err) => console.log(err));
  }, [SEARCH_URL_CATEGORIES]);

  return (
    <Dropdown style={{ marginRight: "5px" }}>
      <Dropdown.Toggle variant="info" id="dropdown-basic">
        {props.category.name || "Categories"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {categories.length > 0 &&
          categories.map((category) => (
            <Dropdown.Item
              href="#"
              key={category.id}
              onSelect={() => props.setCategory(category)}
            >
              {category.name}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
