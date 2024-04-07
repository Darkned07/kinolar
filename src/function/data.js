import { useEffect, useState } from "react";

function data() {
  const [docs, setDocs] = useState();
  const ds = async () => {
    useEffect(() => {
      fetch("http://localhost:3000/kino")
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
