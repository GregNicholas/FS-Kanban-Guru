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
    columns: String[];
  }

export interface indexedBoard {
    name: string;
    columns: String[];
    id: number | null;
}

export type BoardsContextType = {
    boardsData: Board[] | null;
}
