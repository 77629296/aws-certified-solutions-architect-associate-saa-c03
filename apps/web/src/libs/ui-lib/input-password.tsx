import { HTMLProps, useState } from "react";

import EyeIcon from "@/icons/eye.svg";
import EyeOffIcon from "@/icons/eye-off.svg";

import styles from './input.module.scss'
import { IconButton} from './button'

export function InputPassword(props: HTMLProps<HTMLInputElement>) {
  const [visible, setVisible] = useState(false);

  function changeVisibility() {
    setVisible(!visible);
  }

  return (
    <div className={styles["password-input-container"]}>
      <IconButton
        icon={visible ? <EyeIcon /> : <EyeOffIcon />}
        onClick={changeVisibility}
        className={styles["password-eye"]}
      />
      <input
        {...props}
        type={visible ? "text" : "password"}
        className={styles["password-input"]}
      />
    </div>
  );
}
