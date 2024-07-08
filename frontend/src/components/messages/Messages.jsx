import Message from "./Message";

const Messages = () => {
  return (
    <div className="px-4 flex-1 overflow-auto"> 
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};
export default Messages;

// overflow auto is applied to have a scroll option. It maintains screen size and we can see the contents by scolling .