// import { Key } from "react";

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
    _id?: string;
    name: string;
    columns: string[];
  }

export interface indexedBoard {
    // private _id: Key | null | undefined;
    name: string;
    columns: string[];
    id: number | null;
}

export type BoardsContextType = {
    boardsData: Board[] | null;
}
