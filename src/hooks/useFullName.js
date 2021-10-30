import React, { useMemo } from "react";

const useFullName = () => {
  const fullName = () => {
    const name = sessionStorage.getItem("name");
    const middleName = sessionStorage.getItem("middleName");
    const paternalSurname = sessionStorage.getItem("paternalSurname");
    const maternalSurname = sessionStorage.getItem("maternalSurname");

    if (name && middleName && paternalSurname && maternalSurname) {
      return `${name} ${middleName} ${paternalSurname} ${maternalSurname}`;
    }

    return false;
  };

  return {
    fullName,
  };
};

export default useFullName;
