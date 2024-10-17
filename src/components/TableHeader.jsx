function TableHeader() {
  return (
    <div className="flex justify-between items-center p-2 font-bold border rounded w-5/6 text-xl">
      <span style={{ flexBasis: "16%" }}>Task</span>
      <span style={{ flexBasis: "16%" }}>Completed</span>
      <span style={{ flexBasis: "16%" }}>Due Date</span>
      <span style={{ flexBasis: "16%" }}>Date Complete</span>
      <span style={{ flexBasis: "16%" }}>Prio</span>
      <span style={{ flexBasis: "16%" }}>Additional Labels</span>
      <span style={{ flexBasis: "16%" }}>Remove</span>
    </div>
  );
}

export default TableHeader;
