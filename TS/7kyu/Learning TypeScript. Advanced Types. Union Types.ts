/*
Your task is to create function join (tokens: string | string[], glue?: string): string
which can accept both string and string[] and return one string in which tokens are concatenated with the glue.
 */

export function join(tokens: string | string[], glue?: string): string {
    return typeof tokens === "object" ? tokens.join(glue) : tokens
    }
