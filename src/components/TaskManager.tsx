import { useState } from "react";
import { Check, X, Plus } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Button } from "./Button";
import { Card, CardHeader, CardTitle, CardContent } from "./Card";

interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

type FilterType = "all" | "active" | "completed";

export function TaskManager() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        text: newTask.trim(),
        completed: false,
        createdAt: Date.now(),
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const stats = {
    total: tasks.length,
    active: tasks.filter((t) => !t.completed).length,
    completed: tasks.filter((t) => t.completed).length,
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Manager</CardTitle>
        <div className="flex gap-4 text-sm text-muted-foreground mt-2">
          <span>Total: {stats.total}</span>
          <span>Active: {stats.active}</span>
          <span>Completed: {stats.completed}</span>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addTask()}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          />
          <Button onClick={addTask} variant="primary">
            <Plus className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex gap-2 mb-4">
          {(["all", "active", "completed"] as FilterType[]).map((f) => (
            <Button
              key={f}
              onClick={() => setFilter(f)}
              variant={filter === f ? "primary" : "outline"}
              size="sm"
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Button>
          ))}
        </div>

        <div className="space-y-2">
          {filteredTasks.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              {filter === "all"
                ? "No tasks yet. Add one to get started!"
                : `No ${filter} tasks`}
            </p>
          ) : (
            filteredTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center gap-3 p-3 bg-muted rounded-lg group hover:bg-muted/70 transition-colors"
              >
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                    task.completed
                      ? "bg-success border-success"
                      : "border-border hover:border-primary"
                  }`}
                >
                  {task.completed && <Check className="h-3 w-3 text-success-foreground" />}
                </button>

                <span
                  className={`flex-1 ${
                    task.completed
                      ? "line-through text-muted-foreground"
                      : "text-foreground"
                  }`}
                >
                  {task.text}
                </span>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="flex-shrink-0 p-1 rounded text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
