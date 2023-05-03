export interface todoItemProps {
  id: string;
  text: string;
  isCompleted: boolean;
  deleteTodo?: () => {};
  toggleComplete?: () => {};
}
