export type Product = {
    id: string;
    name: string;
    category: "産業用ロボット" | "精密モーター" | "制御システム";
    description: string;
    image_url: string;
    specs: Record<string, string>;
    features: string[];
    isNew: boolean;
};
