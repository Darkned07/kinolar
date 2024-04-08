import { useEffect, useState } from "react";

function data() {
  const [docs, setDocs] = useState();
  const ds = async () => {
    useEffect(() => {
      fetch("https://api-u9ii.onrender.com/kino")
        .then((data) => data.json())
        .then((d) => {
          setDocs(d);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    return { docs };
  };
  ds();
  return { docs };
}

export { data };
