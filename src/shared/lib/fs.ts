import { WorkerDelay } from "@/entity/user/_domain/types";
import * as fs from "fs";
import path from "path";

const jsonFilePath = path.join(
    process.cwd(),
    "jsons",
    "delay-data",
    "delay-data.json"
);

export const readJsonFile = async (): Promise<WorkerDelay[]> => {
    try {
        const fileData = fs.readFileSync(jsonFilePath, "utf8");
        if (fileData.trim() === "") {
            return [];
        }

        const response = JSON.parse(fileData);
        return response;
    } catch (error) {
        console.error("Error reading JSON file:", error);
        return [];
    }
};

export const writeJsonFile = async (data: WorkerDelay[]) => {
    fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2), "utf8");
};
