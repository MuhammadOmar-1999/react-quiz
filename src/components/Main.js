import { useQuiz } from "../Contexts/QuizContext";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Loader from "./Loader";
import Progress from "./Progress";
import Question from "./Question";
import StartScreen from "./StartScreen";
import Timer from "./Timer";
import Button from "./Button";
import Error from "./Error";

function Main() {
  const { status } = useQuiz();
  return (
    <main className="main">
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen />}
      {status === "active" && (
        <>
          <Progress />
          <Question />
          <Footer>
            <Timer />
            <Button />
          </Footer>
        </>
      )}
      {status === "finished" && <FinishScreen />}
    </main>
  );
}

export default Main;
