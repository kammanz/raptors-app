import React from "react";

import bell from "assets/icons/notification-bell.svg";
import settingsIcon from "assets/icons/settings-icon.svg";
import kobe from "assets/imgs/kobe.png";

import styles from "./userLogin.module.scss";

const UserLogin = () => {
  return (
    <div className={styles.userContainer}>
      <button>
        <img src={bell} alt="notification bell" />
      </button>
      <button>
        <img src={settingsIcon} alt="settings icon" />
      </button>
      <button>
        <img
          src={kobe}
          alt="user avatar"
          height="25"
          className={styles.userPic}
        />
        <div>Kobe Bryant</div>
        <i className={styles.dropDownUser} />
      </button>
    </div>
  );
};

export default UserLogin;
