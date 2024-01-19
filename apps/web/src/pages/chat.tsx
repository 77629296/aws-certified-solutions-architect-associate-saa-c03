import type { NextPage } from 'next';

const Chat: NextPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        <h2 className="text-xl font-bold mb-4">right</h2>
      </div>
    </div>
  );
};

export default Chat;
