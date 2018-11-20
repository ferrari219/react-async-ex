import React from "react";

const categories = [
  {
    name: "all",
    text: "전체보기"
  },
  {
    name: "business",
    text: "비지니스"
  },
  {
    name: "entertainment",
    text: "엔터테인먼트"
  },
  {
    name: "health",
    text: "건강"
  },
  {
    name: "science",
    text: "과학"
  },
  {
    name: "sports",
    text: "스포츠"
  },
  {
    name: "technology",
    text: "기술"
  }
];

const Categories = ({ onSelect }) => {
  return (
    <div>
        { categories.map(category => 
            <div key={category.name}><a href="#" onClick={()=>onSelect(category.name)}>{category.text}</a></div>
        ) }
    </div>
  );
};

export default Categories;
