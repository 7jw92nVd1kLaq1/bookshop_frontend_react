import styled from "styled-components";
import { Category } from "../../../models/category.model";
import React from "react";

interface BooksFilterProps {
  sortByNew: boolean | undefined;
  setSortByNew: React.Dispatch<React.SetStateAction<boolean | undefined>>
  categories: Array<Category>;
  selectedCategory: number | undefined;
  setSelectedCategory: React.Dispatch<React.SetStateAction<number | undefined>>
  handleCategoryURLChange: (category: number | undefined) => void;
  handleNewOldURLChange: (newOld: boolean | undefined) => void;
}

const BooksFilter : React.FC<BooksFilterProps> = ({
  sortByNew, 
  setSortByNew, 
  categories, 
  selectedCategory, 
  setSelectedCategory,
  handleCategoryURLChange,
  handleNewOldURLChange
}) => {
  return (
    <BooksFilterStyle>
      <div id="sort-by">
        <div className="sort">
          <label>Sort by Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => { 
              setSelectedCategory(parseInt(e.target.value))
              handleCategoryURLChange(parseInt(e.target.value))
            }}
          >
            <option value={undefined}>All</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="sort">
          <label>Sort by:</label>
          <select
            value={sortByNew ? sortByNew.toString() : undefined}
            onChange={(e) => {
              if (e.target.value === "disabled") {
                setSortByNew(undefined);
                handleNewOldURLChange(undefined);
                return;
              }
              setSortByNew(e.target.value === "true" ? true : false);
              handleNewOldURLChange(e.target.value === "true" ? true : false);
            }}
          >
            <option value="disabled">Disabled</option>
            <option value="true">Newest</option>
            <option value="false">Oldest</option>
          </select>
        </div>
      </div>
      <div>
      </div>
    </BooksFilterStyle>
  )
}


const BooksFilterStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: end;
  padding: 1.5rem;

  #sort-by {
    display: flex;
    align-items: center;
    gap: 1rem;
    label {
      color: ${props => props.theme.color.primary};
    }
    .sort {
      display: flex;
      gap: 0.5rem;
    }
  }
`;

export default BooksFilter;