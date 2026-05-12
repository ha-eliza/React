import { FC } from "react";
import "./App.css";
import Card from "./components/Card";

const App: FC = () => {
  return (
    <div className="main">
      <Card
        image="https://avatars.mds.yandex.net/i?id=ee0b891261bcba1fb8edcc68b9a677fa417ecf63-9052188-images-thumbs&n=13"
        desc="TypeScript - строго типизированный язык программирования основанный на JavaScript"
      >
        TypeScript — язык программирования, доработанная версия JavaScript.
        Представлен компанией Microsoft в 2012 году. Позиционируется как
        инструмент, расширяющий возможности JavaScript.
      </Card>
      <Card
        image="https://avatars.mds.yandex.net/i?id=370a327fd0cf52873c93bfd15ec1109d-3526614-images-thumbs&n=13"
        desc="React - это JavaScript библиотека"
      >
        React (иногда React.js или ReactJS) — декларативная
        JavaScript-библиотека с открытым исходным кодом для разработки
        пользовательских интерфейсов. Может использоваться для разработки
        веб-приложений (включая многостраничные и серверные) и мобильных
        приложений
      </Card>
    </div>
  );
};

export default App;
