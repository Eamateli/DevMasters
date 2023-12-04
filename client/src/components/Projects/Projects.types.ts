import { Highlighter } from "../../types";
export type IToggleProject = (project: IProjectItem | null) => void;
export interface IProjectItemProps{
	item: IProjectItem;
    index?: number,
	toggleProject: IToggleProject;
    highlighter?: Highlighter;
    highlighterTheme?: string;
    localStoragePath?:string;
}
export interface IProjectItem{
    id?:string;
	title: string;
    description: string;
    technologies: string;
    concepts: string;
    instructions: string;
}
export interface IProjectModalItemProps {
	item: IProjectItem | null;
    highlighter?: Highlighter;
    highlighterTheme?: string;
	toggleProject: IToggleProject
}