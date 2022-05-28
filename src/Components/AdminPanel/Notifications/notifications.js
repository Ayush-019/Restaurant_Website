import React, { useEffect, useState } from "react";
import styles from "./notifications.module.css";
import { io } from "socket.io-client";

const Notifications = () => {
  const [socketConn, setSocketConn] = useState(null);
  const [tablesdata, setTablesdata] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:4000");
    console.log(socket);

    socket.on("connect", () => {
      console.log(socket.connected); // true
      setSocketConn(socket);
    });

    let tablesdataLocal = tablesdata;

    socket.on("callwaiter", (data) => {
      console.log("Table No. ", data, "needs a waiter");
      tablesdataLocal.push({ no: data, status: true });
      setTablesdata([...tablesdataLocal]);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className={styles.Notifications}>
      <h1>Notifications</h1>
      {tablesdata.map((data, index) => {
        return (
          <div className={styles.Notification}>
            <h4 className= {data.status ? styles.heading1 : styles.heading2}>{"Table No.:" + data.no + " needs a waiter"}</h4>
            {data.status && (
              <button
                onClick={() => {
                  let tablesdataLocal = tablesdata;
                  tablesdataLocal[index].status = false;
                  setTablesdata([...tablesdataLocal]);
                }}
              >
                Approve
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Notifications;
