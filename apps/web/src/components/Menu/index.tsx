import { MotionConfig } from "framer-motion";


const Menu = () => {
  return (
    <MotionConfig transition={{ mass: 1, damping: 10, duration: 0.2 }}>
      <div
        className="flex flex-col fixed sm:sticky top-0 left-0 h-full overflow-visible z-[1000] border-r border-black/10 dark:border-white/25 bg-highlight"
      >
          <div className="flex flex-col flex-1 p-4 gap-4 h-full">
            header
            <div className="flex flex-1 w-full">
              <div className="w-full gap-2 flex flex-col">
                menuList
              </div>
            </div>
            <div>
            </div>
          </div>
      </div>
    </MotionConfig>
  );
};

export default Menu;
