import NewTask from '../components/NewTask';

function Home({
  title, setTitle,
  category, setCategory,
  priority, setPriority,
  date, setDate,
  addTask,
  tasks,
  updateTask,
  editingId, setEditingId,
  editTitle, setEditTitle,
  deleteTask,
}) {
  return (
    <NewTask
      title={title}
      setTitle={setTitle}
      category={category}
      setCategory={setCategory}
      priority={priority}
      setPriority={setPriority}
      date={date}
      setDate={setDate}
      addTask={addTask}
      tasks={tasks}
      updateTask={updateTask}
      editingId={editingId}
      setEditingId={setEditingId}
      editTitle={editTitle}
      setEditTitle={setEditTitle}
      deleteTask={deleteTask}
    />
  );
}

export default Home;