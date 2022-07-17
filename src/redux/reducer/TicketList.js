const tickets = [
  {
    id: 1,
    name: "瑜珈有氧"
  },
  {
    id: 2,
    name: "活力飛輪"
  },
  {
    id: 3,
    name: "肌力有氧"
  },
]

const TicketList = (state = tickets, action) => {
  let newTickets;
  switch (action.type) {
      case "ADD_TICKET":
        newTickets = [...state];
        newTickets.push(action.payload);
        return newTickets;

      case "DELETE_TICKET":
        newTickets = [...state];
        newTickets = newTickets.filter(ticket => ticket.id != action.payload);
        return newTickets;

    }
    return state;
}

export default TicketList;