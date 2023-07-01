import io from "socket.io-client";

let socket;

const connectSocket = (user_id) => {
  // where our backend server is running
  socket = io("http://localhost3001", {
    query: `user-id=${user_id}`,
  });
};

//

export { socket, connectSocket };
