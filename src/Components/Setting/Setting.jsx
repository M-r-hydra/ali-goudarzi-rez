// React
import React, { useState } from "react";
// React
// Images and Icons
import { FiSettings } from "react-icons/fi";
// Images and Icons
// CSS
import styles from "./Setting.module.css";
// CSS
// Buttons For Music
import { BsPause, BsPlay } from "react-icons/bs";
import { BsStop } from "react-icons/bs";
// Buttons For Music
const Setting = ({ setThemeColor, themeColor, setFontSize, music }) => {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const colors = [
    {
      id: "c-1",
      colorCode: "rgb(90, 194, 78)",
    },
    {
      id: "c-2",
      colorCode: "rgb(101, 180, 243)",
    },
    {
      id: "c-3",
      colorCode: "rgb(245, 166, 64)",
    },
    {
      id: "c-4",
      colorCode: "rgb(238, 97, 146)",
    },
    {
      id: "c-5",
      colorCode: "rgb(187, 104, 200)",
    },
    {
      id: "c-6",
      colorCode: "rgb(238, 83, 79)",
    },
    {
      id: "c-7",
      colorCode: "rgb(0, 100, 20)",
    },
    {
      id: "c-8",
      colorCode: "rgb(125, 125, 125)",
    },
  ];
  return (
    <div
      className={`${styles.settingContainer} ${isSettingOpen && styles.open}`}
    >
      <FiSettings
        className={styles.settingIcon}
        onMouseEnter={(event) => {
          event.currentTarget.style.backgroundColor = themeColor;
          event.currentTarget.style.fontSize = "4.2rem";
          event.currentTarget.style.color = "#fff";
          event.currentTarget.style.padding = "0.2rem";
        }}
        onMouseLeave={(event) => {
          event.currentTarget.style.backgroundColor = "#fff";
          event.currentTarget.style.color = "#000";
          event.currentTarget.style.padding = "0.5rem";
          event.currentTarget.style.fontSize = "4rem";
        }}
        onClick={() => setIsSettingOpen((beforeState) => !beforeState)}
      />
      <div className={styles.contnets}>
        <span>THEME CONTROLLER</span>
        <div className={styles.colorSwitcherContainer}>
          {colors.map((item) => (
            <div
              key={item.id}
              className={styles.colorSwitcherItem}
              onClick={() => setThemeColor(item.colorCode)}
              style={{ background: item.colorCode }}
            ></div>
          ))}
        </div>
        <input
          type="text"
          placeholder={`${
            themeColor.length < 3
              ? "color name || color code 😊"
              : `Curr color: ${themeColor}`
          }`}
          onChange={(e) => {
            if (e.target.value.length === 0) {
              return setThemeColor("rgb(238, 97 ,146)");
            } else {
              setThemeColor(e.target.value);
            }
          }}
        />
        <input
          type="number"
          placeholder="Font Size (rem) "
          onChange={(e) => setFontSize(e.target.value)}
        />
        <div className={styles.musicControls}>
          <BsStop
            color={themeColor}
            onClick={() => {
              music.pause();
              music.currentTime = 0;
            }}
          />
          <BsPause color={themeColor} onClick={() => music.pause()} />
          <BsPlay color={themeColor} onClick={() => music.play()} />
        </div>
      </div>
    </div>
  );
};

export default Setting;
