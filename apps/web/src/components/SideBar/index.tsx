import dynamic from "next/dynamic";
import { useRouter } from 'next/router'
import Link from 'next/link';

import SettingsIcon from "@/icons/settings.svg";
import GitHubIcon from "@/icons/github.svg";
import ChatGptIcon from "@/icons/chatgpt.svg";
import AddIcon from "@/icons/add.svg";
import DeleteIcon from "@/icons/delete.svg";
import {
  MIN_SIDEBAR_WIDTH,
  Path,
  REPO_URL,
} from '@/constants/system'
import { IconButton, showConfirm } from "@/libs/ui-lib";
import { useMobileScreen } from "@/hooks/useMobileScreen";
import { useAppConfig } from "@/store/useAppConfig";
import styles from './SideBar.module.scss'

const ChatList = dynamic(async () => (await import("../ChatList")).ChatList, {
  loading: () => null,
});


const SideBar = (props: { className?: string }) => {
  const router = useRouter();
  const config = useAppConfig();
  const isMobileScreen = useMobileScreen();
  const shouldNarrow =
    !isMobileScreen && config.sidebarWidth < MIN_SIDEBAR_WIDTH;

  return (
    <div
      className={`${styles.sidebar} ${props.className} ${shouldNarrow && styles["narrow-sidebar"]}`}
    >
      <div className={styles["sidebar-header"]} data-tauri-drag-region>
        <div className={styles["sidebar-title"]} data-tauri-drag-region>
          gpt4free
        </div>
        <div className={styles["sidebar-sub-title"]}>
          Build your own AI assistant.
        </div>
        <div className={styles["sidebar-logo"] + " no-dark"}>
          <ChatGptIcon />
        </div>
      </div>

      <div
        className={styles["sidebar-body"]}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            router.push(Path.Home);
          }
        }}
      >
        <ChatList narrow={shouldNarrow} />
      </div>

      <div className={styles["sidebar-tail"]}>
        <div className={styles["sidebar-actions"]}>
          <div className={styles["sidebar-action"] + " " + styles.mobile}>
            <IconButton
              icon={<DeleteIcon />}
              onClick={async () => {
                if (await showConfirm("DeleteChat")) {
                }
              }}
            />
          </div>
          <div className={styles["sidebar-action"]}>
            <Link href={Path.Settings}>
              <IconButton icon={<SettingsIcon />} shadow />
            </Link>
          </div>
          <div className={styles["sidebar-action"]}>
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
              <IconButton icon={<GitHubIcon />} shadow />
            </a>
          </div>
        </div>
        <div>
          <IconButton
            icon={<AddIcon />}
            text={shouldNarrow ? undefined : "NewChat"}
            onClick={() => {
              if (config.dontShowMaskSplashScreen) {
                router.push(Path.Chat);
              } else {
                router.push(Path.NewChat);
              }
            }}
            shadow
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
