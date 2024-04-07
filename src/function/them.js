import { useSelector } from "react-redux";

function them() {
  const { themes } = useSelector((store) => store.kino);

  document.documentElement.setAttribute("data-theme", themes);
}

export { them };
