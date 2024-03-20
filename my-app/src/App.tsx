import React from "react";
import Select from "@weave-mui/select";
import MenuItem from "@weave-mui/menu-item";
import { selectVariants } from "@weave-mui/enums";
import { useTranslation } from "react-i18next";
import "./i18n";
import "./App.css";

export default function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  const date = new Date();
  const formattedDate = new Intl.DateTimeFormat(i18n.language).format(date);

  return (
    <div className="app">
      <div className="header">
        <Select className="selectLanguage" value={i18n.language} variant={selectVariants.STANDARD} onChange={changeLanguage}>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="de">Deutsch</MenuItem>
          <MenuItem value="ja">日本語</MenuItem>
        </Select>
      </div>
      <div className="content">
        <div className="myText">{t("subscriptionExpiry", { date: formattedDate })}</div>
      </div>
    </div>
  );
}
