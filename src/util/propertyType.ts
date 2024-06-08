// ある型情報から指定したプロパティの型情報を抽出する型
export type PropertyType<T, K extends keyof T> = T[K];
