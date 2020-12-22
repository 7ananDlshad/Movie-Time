import React, { useContext } from "react";
import MoviesGrid from "./MoviesGrid";
import { StateContext } from "../StateProvider";
function MainPage() {
  const [state] = useContext(StateContext);
  return <>{!state.isLoading  && <MoviesGrid />}</>;
}

export default MainPage;
