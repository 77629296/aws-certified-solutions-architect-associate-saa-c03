const Menu = () => {
  return (
    <>
      <div
        id='menu'
        className={`group/menu md:flex md:w-[260px] md:flex-col h-full max-md:w-3/4`}
      >
        <div className='flex h-full min-h-0 flex-col'>
          <div className='flex h-full w-full flex-1 items-start border-white/20'>
            <nav className='flex h-full flex-1 flex-col space-y-1 px-2 pt-2'>
              <div className='flex gap-2'>
                newChat
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
