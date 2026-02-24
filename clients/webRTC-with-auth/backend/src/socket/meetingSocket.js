export const meetingSocket = (io) => {
  io.on("connection", (socket) => {
    socket.on("join-room", ({ meetingId, userId }) => {
      socket.join(meetingId);
      const clients = Array.from(io.sockets.adapter.rooms.get(meetingId) || []);
      socket.to(meetingId).emit("user-joined", { userId, socketId: socket.id });
      socket.emit("existing-users", clients.filter(id => id !== socket.id));
    });

    socket.on("signal", ({ meetingId, data, targetId }) => {
      if (targetId) {
        socket.to(targetId).emit("signal", { ...data, from: socket.id });
      } else {
        socket.to(meetingId).emit("signal", { ...data, from: socket.id });
      }
    });

    socket.on("disconnect", () => {
      socket.broadcast.emit("user-left", { socketId: socket.id });
    });
  });
};
