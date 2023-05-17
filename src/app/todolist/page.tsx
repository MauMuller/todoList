import { Header } from "@/components/(TodoList)/header";
import { ListTasks } from "@/components/(TodoList)/ListTasks";

export default function Todolist() {
  return (
    <div className="flex h-full flex-col gap-3 overflow-auto">
      <Header typeHeader="index" />
      <ListTasks />
    </div>
  );
}
