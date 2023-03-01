// import { Key } from "react";

export interface Subtask {
    _id: string;
    title: string;
    isCompleted: boolean;
}

export interface Task {
    _id?: string;
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
    tasks: Task[];
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
