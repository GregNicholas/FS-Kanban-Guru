export interface Subtask {
    title: string;
    isCompleted: boolean;
}

export interface Task {
    title: string;
    description: string;
    status: string;
    subtasks: Subtask[];
}

export interface Column {
    name: string;
    tasks: Task[];
}

export interface Board {
    name: string;
    columns: string[];
  }

export interface indexedBoard {
    name: string;
    columns: string[];
    id: number | null;
}

export type BoardsContextType = {
    boardsData: Board[] | null;
}
