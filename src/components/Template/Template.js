import React, { useState } from "react";
import styles from "./Template.module.scss";
import useExportHtml from "../../hooks/useExportHtml";
import EmailSignature from "../EmailSignature/EmailSignature";
import Page from "../Page/Page";
import Select from "react-select";

const Template = () => {
  const [selected, setSelected] = useState();
  const exportHtml = useExportHtml;

  const options = [
    { value: "Email signature layout", label: "Email signature layout" },
    { value: "Page layout", label: "Page layout" }
  ];

  const exportFile = () => {
    const text = document.getElementById("content").innerHTML;
    const filename = "profile.txt";
    return exportHtml(filename, text);
  };

  return (
    <div className={styles.templateContainer}>
      <div className={styles.selectTemplate}>
        <label htmlFor="template">Select Template</label>
        <Select
          id="template"
          options={options}
          className={styles.select}
          onChange={o => setSelected(o.value)}
          styles={{
            placeholder: () => ({ color: "#b5b5b5" }),
            indicatorSeparator: () => ({ display: "none" })
          }}
          placeholder="Select template"
        />
      </div>

      <div id="content">
        {selected &&
          (selected === "Page layout" ? <Page /> : <EmailSignature />)}
      </div>
      {selected && (
        <button onClick={exportFile} className={styles.exportBtn}>
          Export as HTML
        </button>
      )}
    </div>
  );
};

export default Template;
