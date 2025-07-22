{
  /*extract from TodoForm.jsx*/
}
function TodoForm() {
  return (
    <form>
      <div>
        <label htmlFor="todoTitle">Todo:</label>
        <input type="text" id="todoTitle" name="todoTitle" />
        <button type="submit">Add Todo</button>
      </div>
    </form>
  );
}

export default TodoForm;
