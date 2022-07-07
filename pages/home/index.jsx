import { Header } from "../../components/UI/Header";
import { Chats } from "../../components/Containers/Chats";
import { ContentHome } from "../../components/Containers/ContentHome";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-fit shadow-md rounded-lg background-home">
        <Header />

        <div className="relative h-full">
          <Chats />

          <ContentHome />
        </div>
      </div>
    </>
  );
}
