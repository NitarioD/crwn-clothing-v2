import React from "react";

import categories from "../../data/categories.json";

import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
