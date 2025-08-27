import { Category } from "../types";


const URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}/categories`
  : undefined;

const getCategories = async (): Promise<Category[]> => {
    if (!URL) {
        throw new Error("NEXT_PUBLIC_API_URL environment variable is not set.");
    }

    try {
        const res = await fetch(URL);

        if (!res.ok) {
            throw new Error(`Failed to fetch categories: ${res.statusText}`);
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};

export default getCategories;
