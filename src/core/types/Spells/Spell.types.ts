export type SpellData<T> = {
  id: string;
  minLevel: number;
  manaUse: number;
  cast: (data: T) => Promise<any>;
};



