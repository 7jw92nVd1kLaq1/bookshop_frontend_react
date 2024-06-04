import { useEffect, useState } from "react";
import { Category } from "../models/category.model";
import { fetchCategories } from "../api/category.api";


const useCategory = () => {
  const [categories, setCategories] = useState<Array<Category>>([]);

  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return { categories };
};

export default useCategory;