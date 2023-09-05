import { Button } from "@mui/material";
import ToastNotification from "./stories/toast/ToastNofitication";
import PageHeader from "./stories/pageHeader/PageHeader";

function App() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          {
            name: "hola",
            link: "https://www.chromatic.com/manage?appId=64ef884812b813707d138f9c&view=configure",
          },
        ]}
      />
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
        // position="center"
      />
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
        // position="center"
      />
    </>
  );
}

export default App;
