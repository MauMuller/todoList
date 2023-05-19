import { Header } from "@/components/(TodoList)/Header";
import { ListTasks } from "@/components/(TodoList)/ListTasks";

export default function Todolist() {
  return (
    <div className="flex flex-col w-full h-full gap-3 overflow-auto">
      <Header typeHeader="index" />
      <ListTasks />
    </div>
  );
}
