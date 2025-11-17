import { TaskManager } from "@/components/TaskManager";

export default function Tasks() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">Task Manager</h1>
          <p className="text-lg text-muted-foreground">
            Organize your work and stay productive with our task management system.
          </p>
        </div>

        <TaskManager />
      </div>
    </div>
  );
}
