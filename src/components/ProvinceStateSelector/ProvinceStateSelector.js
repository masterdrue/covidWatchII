import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./ProvinceStateSelector.module.css";
import { fetchProvinceStates } from "../../api";

const ProvinceStateSelector = ({ handleProvinceStateChange }) => {
  const [fetchedProvinceStates, setFetchedProvinceStates] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedProvinceStates(await fetchProvinceStates());
    };

    fetchAPI();
  }, []);

  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect
          className={styles.customselect}
          defaultValue={""}
          onChange={(e) => handleProvinceStateChange(e.target.value)}
        >
          <option value="">Select Province State</option>
          {fetchedProvinceStates.map((provinceState, i) => (
            <option key={i} value={provinceState}>
              {provinceState}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default ProvinceStateSelector;
