import styles from './popover.module.scss'

export function Popover(props: {
  children: JSX.Element;
  content: JSX.Element;
  open?: boolean;
  onClose?: () => void;
}) {
  return (
    <div className={styles.popover}>
      {props.children}
      {props.open && (
        <div className={styles["popover-content"]}>
          <div className={styles["popover-mask"]} onClick={props.onClose}></div>
          {props.content}
        </div>
      )}
    </div>
  );
}
