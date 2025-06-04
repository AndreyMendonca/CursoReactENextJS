import { Roles } from "./roles";

export type Member = {
    id: number;
    avatar: string;
    name: string;
    email: string;
    role: Roles;
}