import { Button } from "@mui/material";
import ToastNotification from "./stories/toast/ToastNofitication";

function App() {
  return (
    <ToastNotification
      type="error"
      dataOpt={[{ erro: "Hola" }]}
      time={100000}
      seeMore={true}
      title="Hola"
      subtitle="Holaajahsjklajsaljskla ksdjalsj"
      actions={
        <Button color="error" size="small">
          Hola
        </Button>
      }
    />
  );
}

export default App;
