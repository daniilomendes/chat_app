import Message from "./Message";
import useGetMessage from "../../hooks/useGetMessage";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";

export default function Messages() {
  const { messages, loading } = useGetMessage();
  useListenMessages()
  const lastMessageRef = useRef();

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-white">
          Envie uma mensagem para iniciar a conversa
        </p>
      )}
    </div>
  );
}
