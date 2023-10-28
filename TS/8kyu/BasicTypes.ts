export let var1Boolean : boolean = true;
export let var2Decimal : number = 13;
export let var3Hex : number = 0xf00d;
export let var4Binary : number  = 0b111111;
export let var5Octal : number = 0o744;

export let var6String : string = "Hello, world!";

export let var7Array = [1, 'test', {a: 3}, 4, 5];
export let var8NumericArray : Number[] = [1, 2, 3, 4, 5];

export let var9Tuple: [string, number] = ['key', 12345];

export enum  Color {Red = 1, Green = 2, Blue = 4}

export let var10Enum  = Color.Blue;

export let var11ArrayOfAny: any[] = [1, 'test', {a: 3}, 4, 5];

export let var12VoidFunction = function (): void {};

export let var13Null: null = null;
export let var14Undefined: undefined = undefined;

export let var15NeverFunction = function (): never { return var15NeverFunction()};

