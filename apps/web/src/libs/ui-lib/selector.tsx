import styles from './input.module.scss'
import { List, ListItem } from './'

export function Selector<T>(props: {
  items: Array<{
    title: string;
    subTitle?: string;
    value: T;
  }>;
  defaultSelectedValue?: T;
  onSelection?: (selection: T[]) => void;
  onClose?: () => void;
  multiple?: boolean;
}) {
  return (
    <div className={styles["selector"]} onClick={() => props.onClose?.()}>
      <div className={styles["selector-content"]}>
        <List>
          {props.items.map((item, i) => {
            const selected = props.defaultSelectedValue === item.value;
            return (
              <ListItem
                className={styles["selector-item"]}
                key={i}
                title={item.title}
                subTitle={item.subTitle}
                onClick={() => {
                  props.onSelection?.([item.value]);
                  props.onClose?.();
                }}
              >
                {selected ? (
                  <div
                    style={{
                      height: 10,
                      width: 10,
                      backgroundColor: "var(--primary)",
                      borderRadius: 10,
                    }}
                  ></div>
                ) : (
                  <></>
                )}
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
}
