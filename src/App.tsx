import "./App.css";

// components ui
import { Button } from "@/components/shadcn/ui/button";

function App() {
  return (
    <main>
      <h1>Hello World!</h1>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
      </div>
    </main>
  );
}

export default App;
