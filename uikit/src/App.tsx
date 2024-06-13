import React from "react";
import { InternationalPhone } from "./components/international-phone";
function App() {
  return (
    <InternationalPhone
      value={""}
      onChange={function (phone: string): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
}

export default App;
