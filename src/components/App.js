import { QuizProvider } from "../Contexts/QuizContext";
import Header from "./Header";
import Main from "./Main";

export default function App() {
  return (
    <div className="app">
      <Header />
      <QuizProvider>
        <Main />
      </QuizProvider>
    </div>
  );
}
