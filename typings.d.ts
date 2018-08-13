declare module "*.json" {
    const value: any;
    export default value;
}


declare module 'config.json' {
    export const username: string;
    export const password: number;
}


